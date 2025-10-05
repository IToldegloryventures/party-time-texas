/**
 * AI Content Generation API
 * Generates landing page content using Gemini AI
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
    const {
      businessType,
      businessName,
      targetAudience,
      keyFeatures = [],
    } = body;

    if (!businessType || !businessName || !targetAudience) {
      return NextResponse.json(
        {
          error:
            'Missing required fields: businessType, businessName, targetAudience',
        },
        { status: 400 }
      );
    }

    // Generate AI content
    const content = await cosmicPortalsAI.generateLandingPageContent(
      businessType,
      businessName,
      targetAudience,
      keyFeatures
    );

    const response = NextResponse.json({
      success: true,
      content,
      generatedAt: new Date().toISOString(),
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
    console.error('AI content generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
