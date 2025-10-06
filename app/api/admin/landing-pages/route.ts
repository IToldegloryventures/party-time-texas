import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { validateAdminAccess } from '@/lib/admin-permissions';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validate super admin access
    const isAdmin = await validateAdminAccess(userId);
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    // Fetch ALL landing pages for super admin
    const { data: pages, error } = await supabase
      .from('landing_pages')
      .select(`
        *,
        organizations (
          id,
          name,
          slug
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching admin landing pages:', error);
      return NextResponse.json({ error: 'Failed to fetch landing pages' }, { status: 500 });
    }

    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error in GET /api/admin/landing-pages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validate super admin access
    const isAdmin = await validateAdminAccess(userId);
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const body = await request.json();
    const { organization_id, name, title, slug, content, status = 'draft' } = body;

    if (!organization_id || !name || !title || !slug || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: organization_id, name, title, slug, content' },
        { status: 400 }
      );
    }

    // Create landing page for specified organization
    const { data: page, error } = await supabase
      .from('landing_pages')
      .insert({
        organization_id,
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
      .select(`
        *,
        organizations (
          id,
          name,
          slug
        )
      `)
      .single();

    if (error) {
      console.error('Error creating admin landing page:', error);
      return NextResponse.json({ error: 'Failed to create landing page' }, { status: 500 });
    }

    return NextResponse.json({ page }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/admin/landing-pages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
