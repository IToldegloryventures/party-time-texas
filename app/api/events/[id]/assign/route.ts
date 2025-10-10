/**
 * Event Member Assignment API
 * POST /api/events/[id]/assign - Assign/update members for an event
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import EventService from '@/lib/events';
import { supabase } from '@/lib/supabase/client';

const eventService = new EventService();

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const eventId = params.id;
    const body = await request.json();
    const { member_ids } = body;

    if (!Array.isArray(member_ids)) {
      return NextResponse.json(
        { error: 'member_ids must be an array' },
        { status: 400 }
      );
    }

    // Get user data
    const { data: user } = await supabase
      .from('users')
      .select('organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Only super admins, owners and admins can assign members
    if (!['super_admin', 'owner', 'admin'].includes(user.role)) {
      return NextResponse.json(
        { error: 'Only super admins, owners and admins can assign team members to events' },
        { status: 403 }
      );
    }

    // Verify all member IDs belong to the organization
    const { data: members } = await supabase
      .from('users')
      .select('id')
      .in('id', member_ids)
      .eq('organization_id', user.organization_id);

    if (!members || members.length !== member_ids.length) {
      return NextResponse.json(
        { error: 'Some members do not belong to your organization' },
        { status: 400 }
      );
    }

    const event = await eventService.assignMembersToEvent(eventId, member_ids);
    return NextResponse.json(event);
  } catch (error) {
    console.error('Assign members error:', error);
    return NextResponse.json(
      { error: 'Failed to assign members' },
      { status: 500 }
    );
  }
}

