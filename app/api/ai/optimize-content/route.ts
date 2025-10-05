/**
 * AI Content Optimization API
 * Optimizes landing page content for better engagement
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { cosmicPortalsAI } from '@/lib/ai/cosmic-portals-ai';
import {
  rateLimiter,
  RATE_LIMIT_CONFIGS,
  createRateLimitResponse,
} from '@/lib/rateLimiter';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Apply rate limiting
    const rateLimitResult = await rateLimiter(
      request,
      RATE_LIMIT_CONFIGS.analyze
    );
    if (!rateLimitResult.allowed) {
      return createRateLimitResponse(rateLimitResult);
    }

    const body = await request.json();
    const { currentContent, scanData } = body;

    if (!currentContent || !scanData) {
      return NextResponse.json(
        { error: 'Missing required fields: currentContent, scanData' },
        { status: 400 }
      );
    }

    // Optimize content with AI
    const optimization = await cosmicPortalsAI.optimizeContent(
      currentContent,
      scanData
    );

    const response = NextResponse.json({
      success: true,
      optimization,
      optimizedAt: new Date().toISOString(),
    });

    // Add rate limit headers
    response.headers.set(
      'X-RateLimit-Remaining',
      rateLimitResult.remaining.toString()
    );
    response.headers.set(
      'X-RateLimit-Reset',
      Math.ceil(rateLimitResult.resetTime / 1000).toString()
    );

    return response;
  } catch (error) {
    console.error('AI content optimization error:', error);
    return NextResponse.json(
      { error: 'Failed to optimize content' },
      { status: 500 }
    );
  }
}
