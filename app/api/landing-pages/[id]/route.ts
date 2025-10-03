import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // Fetch the landing page
    const { data: page, error } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('id', id)
      .eq('organization_id', orgData.organization.id)
      .single();

    if (error) {
      console.error('Error fetching landing page:', error);
      return NextResponse.json({ error: 'Landing page not found' }, { status: 404 });
    }

    return NextResponse.json({ page });
  } catch (error) {
    console.error('Error in GET /api/landing-pages/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    const body = await request.json();
    const { name, title, slug, content, status, is_published } = body;

    // Check if the page exists and user has permission
    const { data: existingPage, error: fetchError } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('id', id)
      .eq('organization_id', orgData.organization.id)
      .single();

    if (fetchError || !existingPage) {
      return NextResponse.json({ error: 'Landing page not found' }, { status: 404 });
    }

    // Check if slug is being changed and if it conflicts
    if (slug && slug !== existingPage.slug) {
      const { data: slugConflict } = await supabase
        .from('landing_pages')
        .select('id')
        .eq('organization_id', orgData.organization.id)
        .eq('slug', slug)
        .neq('id', id)
        .single();

      if (slugConflict) {
        return NextResponse.json(
          { error: 'A page with this slug already exists' },
          { status: 409 }
        );
      }
    }

    // Update the landing page
    const updateData: Record<string, unknown> = {};
    if (name !== undefined) updateData.name = name;
    if (title !== undefined) updateData.title = title;
    if (slug !== undefined) updateData.slug = slug;
    if (content !== undefined) updateData.content = content;
    if (status !== undefined) updateData.status = status;
    if (is_published !== undefined) updateData.is_published = is_published;

    const { data: page, error } = await supabase
      .from('landing_pages')
      .update(updateData)
      .eq('id', id)
      .eq('organization_id', orgData.organization.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating landing page:', error);
      return NextResponse.json({ error: 'Failed to update landing page' }, { status: 500 });
    }

    return NextResponse.json({ page });
  } catch (error) {
    console.error('Error in PUT /api/landing-pages/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // Check if the page exists and user has permission
    const { data: existingPage, error: fetchError } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('id', id)
      .eq('organization_id', orgData.organization.id)
      .single();

    if (fetchError || !existingPage) {
      return NextResponse.json({ error: 'Landing page not found' }, { status: 404 });
    }

    // Delete the landing page
    const { error } = await supabase
      .from('landing_pages')
      .delete()
      .eq('id', id)
      .eq('organization_id', orgData.organization.id);

    if (error) {
      console.error('Error deleting landing page:', error);
      return NextResponse.json({ error: 'Failed to delete landing page' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE /api/landing-pages/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
