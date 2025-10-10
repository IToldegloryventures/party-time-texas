import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's organization data and verify they're an owner
    const userData = await getUserOrganizationData(userId);
    
    if (!userData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // Only super admins and owners can update organization settings
    if (!['super_admin', 'owner'].includes(userData.user.role)) {
      return NextResponse.json(
        { error: 'Only super admins and organization owners can update settings' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, settings } = body;

    // Build update object (only include fields that were provided)
    const updateData: any = {};
    
    if (name !== undefined) {
      updateData.name = name;
    }
    
    if (settings !== undefined) {
      updateData.settings = settings;
    }

    updateData.updated_at = new Date().toISOString();

    // Update the organization
    const { data: organization, error } = await supabase
      .from('organizations')
      .update(updateData)
      .eq('id', userData.organization.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating organization:', error);
      return NextResponse.json(
        { error: 'Failed to update organization' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Organization updated successfully',
        organization,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

