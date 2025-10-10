import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase/client';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data from our users table
    const { data: userData } = await supabaseAdmin
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get landing pages - Super Admin sees ALL, regular users see only their org
    let query = supabaseAdmin
      .from('landing_pages')
      .select(
        'id, name, slug, is_published, created_at, scan_count, organization_id'
      );

    if (userData.role !== 'super_admin') {
      // Regular users only see their organization's pages
      query = query.eq('organization_id', userData.organization_id);
    }

    const { data: landingPages, error } = await query.order('created_at', {
      ascending: false,
    });

    if (error) {
      console.error('Error fetching landing pages:', error);
      return NextResponse.json(
        { error: 'Failed to fetch landing pages' },
        { status: 500 }
      );
    }

    return NextResponse.json({ pages: landingPages || [] });
  } catch (error) {
    console.error('Landing pages API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data from our users table
    const { data: userData } = await supabaseAdmin
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Parse request body
    const body = await request.json();
    const { name, title, slug, content, status = 'draft' } = body;

    // Validate required fields
    if (!name || !title || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields: name, title, slug' },
        { status: 400 }
      );
    }

    // Check if slug is already taken
    const { data: existingPage } = await supabaseAdmin
      .from('landing_pages')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existingPage) {
      return NextResponse.json(
        { error: 'Slug already exists. Please choose a different one.' },
        { status: 400 }
      );
    }

    // Create the landing page
    // Super Admin can create for any org, regular users for their org only
    const targetOrgId =
      userData.role === 'super_admin' && body.organization_id
        ? body.organization_id
        : userData.organization_id;

    const { data: newPage, error } = await supabaseAdmin
      .from('landing_pages')
      .insert({
        organization_id: targetOrgId,
        name,
        title,
        slug,
        content: content || {},
        is_published: status === 'published',
        status,
        // created_by field doesn't exist in the schema
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating landing page:', error);
      return NextResponse.json(
        { error: 'Failed to create landing page' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      page: newPage,
    });
  } catch (error) {
    console.error('Create landing page API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
