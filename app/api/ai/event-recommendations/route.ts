/**
 * AI Event Recommendations API
 * Provides AI-powered event engagement recommendations
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
    const { eventType, expectedAttendees, duration, venue } = body;

    if (!eventType || !expectedAttendees || !duration || !venue) {
      return NextResponse.json(
        {
          error:
            'Missing required fields: eventType, expectedAttendees, duration, venue',
        },
        { status: 400 }
      );
    }

    // Generate AI recommendations
    const recommendations = await cosmicPortalsAI.generateEventRecommendations(
      eventType,
      expectedAttendees,
      duration,
      venue
    );

    const response = NextResponse.json({
      success: true,
      recommendations,
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
    console.error('AI event recommendations error:', error);
    return NextResponse.json(
      { error: 'Failed to generate event recommendations' },
      { status: 500 }
    );
  }
}
