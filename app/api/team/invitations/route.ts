import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import { TeamInvitationService } from '@/lib/team-invitation-system';
import { hasPermission } from '@/lib/permissions';

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

    // Check if user can manage users
    const canManageUsers = hasPermission(orgData.user.role, 'canManageUsers');
    if (!canManageUsers) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    // Get organization invitations
    const result = await TeamInvitationService.getOrganizationInvitations(
      orgData.organization.id
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ invitations: result.invitations });
  } catch (error) {
    console.error('Error in GET /api/team/invitations:', error);
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

    // Check if user can manage users
    const canManageUsers = hasPermission(orgData.user.role, 'canManageUsers');
    if (!canManageUsers) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const body = await request.json();
    const { email, role, customMessage } = body;

    if (!email || !role) {
      return NextResponse.json(
        { error: 'Email and role are required' },
        { status: 400 }
      );
    }

    // Send invitation
    const result = await TeamInvitationService.sendInvitation({
      email,
      role,
      organizationId: orgData.organization.id,
      invitedBy: userId,
      customMessage,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      invitationId: result.invitationId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/team/invitations:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
