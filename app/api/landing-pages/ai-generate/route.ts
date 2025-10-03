import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { cosmicPortalsAI } from '@/lib/ai/cosmic-portals-ai';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { businessType, businessName, targetAudience, keyFeatures = [] } = body;

    if (!businessType || !businessName || !targetAudience) {
      return NextResponse.json(
        { error: 'Missing required fields: businessType, businessName, targetAudience' },
        { status: 400 }
      );
    }

    // Generate AI content using SheCodes AI
    const content = await cosmicPortalsAI.generateLandingPageContent(
      businessType,
      businessName,
      targetAudience,
      keyFeatures
    );

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error in POST /api/landing-pages/ai-generate:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
