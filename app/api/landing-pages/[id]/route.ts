import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdminAdmin } from '@/lib/supabaseAdmin/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    const { id } = params;

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

    // Get the landing page - Super Admin can access any, regular users only their org
    let query = supabaseAdmin.from('landing_pages').select('*').eq('id', id);

    if (userData.role !== 'super_admin') {
      // Regular users can only access their organization's pages
      query = query.eq('organization_id', userData.organization_id);
    }

    const { data: landingPage, error } = await query.single();

    if (error) {
      console.error('Error fetching landing page:', error);
      return NextResponse.json(
        { error: 'Landing page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ page: landingPage });
  } catch (error) {
    console.error('Landing page API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    const { id } = params;

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
    const { name, title, slug, content, status, is_published } = body;

    // Check if slug is already taken by another page
    if (slug) {
      const { data: existingPage } = await supabaseAdmin
        .from('landing_pages')
        .select('id')
        .eq('slug', slug)
        .neq('id', id)
        .single();

      if (existingPage) {
        return NextResponse.json(
          { error: 'Slug already exists. Please choose a different one.' },
          { status: 400 }
        );
      }
    }

    // Update the landing page
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };

    if (name) updateData.name = name;
    if (title) updateData.title = title;
    if (slug) updateData.slug = slug;
    if (content) updateData.content = content;
    if (status) updateData.status = status;
    if (typeof is_published === 'boolean')
      updateData.is_published = is_published;

    // Super Admin can update any page, regular users only their org's pages
    let updateQuery = supabaseAdmin
      .from('landing_pages')
      .update(updateData)
      .eq('id', id);

    if (userData.role !== 'super_admin') {
      // Regular users can only update their organization's pages
      updateQuery = updateQuery.eq('organization_id', userData.organization_id);
    }

    const { data: updatedPage, error } = await updateQuery.select().single();

    if (error) {
      console.error('Error updating landing page:', error);
      return NextResponse.json(
        { error: 'Failed to update landing page' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      page: updatedPage,
    });
  } catch (error) {
    console.error('Update landing page API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    const { id } = params;

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

    // Delete the landing page - Super Admin can delete any, regular users only their org's
    let deleteQuery = supabaseAdmin.from('landing_pages').delete().eq('id', id);

    if (userData.role !== 'super_admin') {
      // Regular users can only delete their organization's pages
      deleteQuery = deleteQuery.eq('organization_id', userData.organization_id);
    }

    const { error } = await deleteQuery;

    if (error) {
      console.error('Error deleting landing page:', error);
      return NextResponse.json(
        { error: 'Failed to delete landing page' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Landing page deleted successfully',
    });
  } catch (error) {
    console.error('Delete landing page API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
