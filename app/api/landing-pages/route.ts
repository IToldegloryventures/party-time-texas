import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data from our users table
    const { data: userData } = await supabase
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get all landing pages for the user's organization
    const { data: landingPages, error } = await supabase
      .from('landing_pages')
      .select('id, name, url, status, created_at')
      .eq('organization_id', userData.organization_id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching landing pages:', error);
      return NextResponse.json(
        { error: 'Failed to fetch landing pages' },
        { status: 500 }
      );
    }

    return NextResponse.json(landingPages || []);
  } catch (error) {
    console.error('Landing pages API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}