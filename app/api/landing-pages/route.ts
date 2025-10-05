import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // Fetch landing pages for the organization
    const { data: pages, error } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('organization_id', orgData.organization.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching landing pages:', error);
      return NextResponse.json({ error: 'Failed to fetch landing pages' }, { status: 500 });
    }

    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error in GET /api/landing-pages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    const body = await request.json();
    const { name, title, slug, content, status = 'draft' } = body;

    if (!name || !title || !slug || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: name, title, slug, content' },
        { status: 400 }
      );
    }

    // Check if slug already exists for this organization
    const { data: existingPage } = await supabase
      .from('landing_pages')
      .select('id')
      .eq('organization_id', orgData.organization.id)
      .eq('slug', slug)
      .single();

    if (existingPage) {
      return NextResponse.json(
        { error: 'A page with this slug already exists' },
        { status: 409 }
      );
    }

    // Create the landing page
    const { data: page, error } = await supabase
      .from('landing_pages')
      .insert({
        organization_id: orgData.organization.id,
        name,
        title,
        slug,
        content,
        status,
        permissions: {
          owner_id: userId,
          editors: [],
          viewers: []
        }
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating landing page:', error);
      return NextResponse.json({ error: 'Failed to create landing page' }, { status: 500 });
    }

    return NextResponse.json({ page }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/landing-pages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
