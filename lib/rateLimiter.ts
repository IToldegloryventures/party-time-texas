/**
 * Rate Limiting Utility
 * Implements request rate limiting for API endpoints
 */

import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  keyGenerator?: (req: NextRequest) => string; // Custom key generator
  skipSuccessfulRequests?: boolean; // Don't count successful requests
  skipFailedRequests?: boolean; // Don't count failed requests
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  retryAfter?: number;
}

// Default configurations for different endpoints
export const RATE_LIMIT_CONFIGS = {
  // Analysis endpoints - more restrictive due to AI processing
  analyze: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10, // 10 requests per hour
    keyGenerator: (req: NextRequest) => {
      const userId = req.headers.get('x-user-id') || 'anonymous';
      return `analyze:${userId}`;
    },
  },

  // General API endpoints
  api: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 100, // 100 requests per hour
    keyGenerator: (req: NextRequest) => {
      const userId = req.headers.get('x-user-id') || 'anonymous';
      return `api:${userId}`;
    },
  },

  // Public endpoints (less restrictive)
  public: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 1000, // 1000 requests per hour
    keyGenerator: (req: NextRequest) => {
      const ip =
        req.headers.get('x-forwarded-for') ||
        req.headers.get('x-real-ip') ||
        'unknown';
      return `public:${ip}`;
    },
  },
};

/**
 * Rate limiter function
 * @param request - NextRequest object
 * @param config - Rate limiting configuration
 * @returns Promise<RateLimitResult>
 */
export async function rateLimiter(
  request: NextRequest,
  config: RateLimitConfig = RATE_LIMIT_CONFIGS.api
): Promise<RateLimitResult> {
  const supabase = supabaseAdmin;

  try {
    // Generate rate limit key
    const key = config.keyGenerator
      ? config.keyGenerator(request)
      : generateDefaultKey(request);

    const now = new Date();
    const windowStart = new Date(now.getTime() - config.windowMs);

    // Check current rate limit status
    const { data: existingLimit, error: fetchError } = await supabase
      .from('api_limits')
      .select('*')
      .eq('endpoint', key)
      .gte('window_start', windowStart.toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Rate limit fetch error:', fetchError);
      // Allow request on database error to avoid blocking legitimate users
      return {
        allowed: true,
        remaining: config.maxRequests - 1,
        resetTime: now.getTime() + config.windowMs,
      };
    }

    const currentCount = existingLimit?.requests_count || 0;
    const isAllowed = currentCount < config.maxRequests;

    if (!isAllowed) {
      const resetTime = existingLimit?.window_start
        ? new Date(existingLimit.window_start).getTime() + config.windowMs
        : now.getTime() + config.windowMs;

      return {
        allowed: false,
        remaining: 0,
        resetTime,
        retryAfter: Math.ceil((resetTime - now.getTime()) / 1000),
      };
    }

    // Update or create rate limit record
    if (existingLimit) {
      // Update existing record
      const { error: updateError } = await supabase
        .from('api_limits')
        .update({
          requests_count: currentCount + 1,
          created_at: now.toISOString(),
        })
        .eq('id', existingLimit.id);

      if (updateError) {
        console.error('Rate limit update error:', updateError);
      }
    } else {
      // Create new record
      const { error: insertError } = await supabase.from('api_limits').insert({
        endpoint: key,
        requests_count: 1,
        window_start: now.toISOString(),
        created_at: now.toISOString(),
      });

      if (insertError) {
        console.error('Rate limit insert error:', insertError);
      }
    }

    return {
      allowed: true,
      remaining: config.maxRequests - currentCount - 1,
      resetTime: now.getTime() + config.windowMs,
    };
  } catch (error) {
    console.error('Rate limiter error:', error);
    // Allow request on error to avoid blocking legitimate users
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: Date.now() + config.windowMs,
    };
  }
}

/**
 * Generate default rate limit key
 */
function generateDefaultKey(request: NextRequest): string {
  const userId = request.headers.get('x-user-id');
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    'unknown';

  return userId ? `user:${userId}` : `ip:${ip}`;
}

/**
 * Get rate limit headers for response
 */
export function getRateLimitHeaders(
  result: RateLimitResult
): Record<string, string> {
  const headers: Record<string, string> = {
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.ceil(result.resetTime / 1000).toString(),
  };

  if (result.retryAfter) {
    headers['Retry-After'] = result.retryAfter.toString();
  }

  return headers;
}

/**
 * Create rate limit error response
 */
export function createRateLimitResponse(result: RateLimitResult) {
  return new Response(
    JSON.stringify({
      error: 'Rate limit exceeded',
      message: 'Too many requests. Please try again later.',
      retryAfter: result.retryAfter,
    }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        ...getRateLimitHeaders(result),
      },
    }
  );
}
