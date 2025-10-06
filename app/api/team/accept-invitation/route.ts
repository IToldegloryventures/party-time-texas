import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { TeamInvitationService } from '@/lib/team-invitation-system';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { invitationToken, firstName, lastName } = body;

    if (!invitationToken) {
      return NextResponse.json(
        { error: 'Invitation token is required' },
        { status: 400 }
      );
    }

    // Accept invitation
    const result = await TeamInvitationService.acceptInvitation(
      invitationToken,
      userId,
      firstName,
      lastName
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      organizationId: result.organizationId 
    });
  } catch (error) {
    console.error('Error in POST /api/team/accept-invitation:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
