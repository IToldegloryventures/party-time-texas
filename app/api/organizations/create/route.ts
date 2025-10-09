import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, slug, plan_type, industry, team_size } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: 'Organization name and slug are required' },
        { status: 400 }
      );
    }

    // Check if user already has an organization
    const { data: existingUser, error: userCheckError } = await supabase
      .from('users')
      .select('organization_id')
      .eq('clerk_id', userId)
      .single();

    if (userCheckError && userCheckError.code !== 'PGRST116') {
      console.error('Error checking existing user:', userCheckError);
      return NextResponse.json(
        { error: 'Failed to verify user status' },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already belongs to an organization' },
        { status: 400 }
      );
    }

    // Check if organization slug is already taken
    const { data: existingOrg, error: orgCheckError } = await supabase
      .from('organizations')
      .select('id')
      .eq('slug', slug)
      .single();

    if (orgCheckError && orgCheckError.code !== 'PGRST116') {
      console.error('Error checking existing organization:', orgCheckError);
      return NextResponse.json(
        { error: 'Failed to verify organization availability' },
        { status: 500 }
      );
    }

    if (existingOrg) {
      return NextResponse.json(
        { error: 'Organization URL is already taken. Please choose a different one.' },
        { status: 400 }
      );
    }

    // Create the organization
    const { data: organization, error: orgError } = await supabase
      .from('organizations')
      .insert({
        name,
        slug,
        plan_type: plan_type || 'professional',
        subscription_status: 'active', // Set as active since they're "paying"
        settings: {
          industry: industry || '',
          team_size: team_size || '1-5',
          setup_completed: true,
          setup_date: new Date().toISOString()
        },
        white_label_config: {}
      })
      .select()
      .single();

    if (orgError) {
      console.error('Error creating organization:', orgError);
      return NextResponse.json(
        { error: 'Failed to create organization' },
        { status: 500 }
      );
    }

    // Get user details from Clerk (we'll need to fetch this)
    // For now, we'll create the user with basic info and they can update later
    const { data: newUser, error: userError } = await supabase
      .from('users')
      .insert({
        clerk_id: userId,
        organization_id: organization.id,
        email: '', // Will be updated when user signs in
        first_name: '',
        last_name: '',
        role: 'owner', // Make them the owner
        status: 'active',
        permissions: {
          can_manage_organization: true,
          can_manage_users: true,
          can_manage_events: true,
          can_manage_nfc_devices: true,
          can_manage_landing_pages: true,
          can_invite_team_members: true,
          is_organization_owner: true
        }
      })
      .select()
      .single();

    if (userError) {
      console.error('Error creating user:', userError);
      // Clean up the organization if user creation fails
      await supabase.from('organizations').delete().eq('id', organization.id);
      return NextResponse.json(
        { error: 'Failed to create user account' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      organization: {
        id: organization.id,
        name: organization.name,
        slug: organization.slug,
        plan_type: organization.plan_type
      },
      user: {
        id: newUser.id,
        role: newUser.role,
        permissions: newUser.permissions
      }
    });

  } catch (error) {
    console.error('Error in organization creation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
