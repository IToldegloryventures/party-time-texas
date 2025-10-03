/**
 * Organizations API Routes
 * Handles organization CRUD operations and management
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import OrganizationService from '@/lib/organization';
import { supabase } from '@/lib/supabase/client';

const orgService = new OrganizationService();

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const organization = await orgService.getUserOrganization(userId);
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Get organization error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch organization' },
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

    const body = await request.json();
    const { name, slug, plan_type } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    const organization = await orgService.createOrganization({
      name,
      slug,
      plan_type,
      owner_id: userId,
    });

    return NextResponse.json(organization, { status: 201 });
  } catch (error) {
    console.error('Create organization error:', error);
    return NextResponse.json(
      { error: 'Failed to create organization' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { organization_id, updates } = body;

    if (!organization_id) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }

    // Get the organization first to verify ownership
    const { data: user } = await supabase
      .from('users')
      .select('organization_id')
      .eq('clerk_id', userId)
      .single();

    if (!user || user.organization_id !== organization_id) {
      return NextResponse.json(
        { error: 'Unauthorized to update this organization' },
        { status: 403 }
      );
    }

    // Update the organization
    const { data: organization, error } = await supabase
      .from('organizations')
      .update(updates)
      .eq('id', organization_id)
      .select()
      .single();

    if (error) {
      throw error;
    }
    return NextResponse.json(organization);
  } catch (error) {
    console.error('Update organization error:', error);
    return NextResponse.json(
      { error: 'Failed to update organization' },
      { status: 500 }
    );
  }
}
