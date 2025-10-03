import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { rateLimiter, RATE_LIMIT_CONFIGS, createRateLimitResponse } from '@/lib/rateLimiter';

export async function GET(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const requestedUserId = searchParams.get('userId');

    if (requestedUserId !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // In production, this would query Supabase for the user's analysis results
    // For now, we'll simulate a completed analysis after a delay
    const analysisStartTime = Date.now() - 10000; // 10 seconds ago

    if (analysisStartTime > 5000) {
      // Simulate 5-second processing time
      const mockResult = {
        id: `analysis_${analysisStartTime}_${userId}`,
        summary: `This document appears to be a comprehensive analysis covering multiple key topics. The main themes include strategic planning, operational efficiency, and market analysis. The document provides detailed insights into current market conditions and suggests several actionable recommendations for improvement.`,
        keyPoints: [
          'Strategic planning is essential for long-term success',
          'Operational efficiency can be improved through automation',
          'Market analysis reveals significant growth opportunities',
          'Customer satisfaction is directly linked to service quality',
          'Technology adoption is crucial for competitive advantage',
        ],
        wordCount: 2847,
        documentName: 'sample_document.pdf',
        createdAt: new Date().toISOString(),
      };

      const response = NextResponse.json({
        result: mockResult,
        status: 'completed',
      });

      // Add rate limit headers
      response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString());
      response.headers.set('X-RateLimit-Reset', Math.ceil(rateLimitResult.resetTime / 1000).toString());

      return response;
    }

    // Analysis still in progress
    const response = NextResponse.json({
      result: null,
      status: 'processing',
    });

    // Add rate limit headers
    response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString());
    response.headers.set('X-RateLimit-Reset', Math.ceil(rateLimitResult.resetTime / 1000).toString());

    return response;
  } catch (error) {
    console.error('Error in results route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
