/**
 * AI Analytics API
 * Analyzes NFC scan data and provides AI insights
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
    const rateLimitResult = await rateLimiter(request, RATE_LIMIT_CONFIGS.api);
    if (!rateLimitResult.allowed) {
      return createRateLimitResponse(rateLimitResult);
    }

    const body = await request.json();
    const { scanData } = body;

    if (!scanData) {
      return NextResponse.json(
        { error: 'Missing required field: scanData' },
        { status: 400 }
      );
    }

    // Analyze scan data with AI
    const analytics = await cosmicPortalsAI.analyzeScanData(scanData);

    const response = NextResponse.json({
      success: true,
      analytics,
      analyzedAt: new Date().toISOString(),
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
    console.error('AI analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze scan data' },
      { status: 500 }
    );
  }
}
