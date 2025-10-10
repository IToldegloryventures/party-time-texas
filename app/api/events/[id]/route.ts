/**
 * Individual Event API Routes
 * GET /api/events/[id] - Get single event
 * PATCH /api/events/[id] - Update event
 * DELETE /api/events/[id] - Delete event
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import EventService from '@/lib/events';
import { supabase } from '@/lib/supabase/client';

const eventService = new EventService();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const eventId = params.id;

    // Get user data
    const { data: user } = await supabase
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const event = await eventService.getEvent(eventId);
    
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Check if user can access this event
    const canAccess = await eventService.canUserAccessEvent(
      user.id,
      eventId,
      user.role
    );

    if (!canAccess) {
      return NextResponse.json(
        { error: 'You do not have access to this event' },
        { status: 403 }
      );
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('Get event error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
}

export async function PATCH(
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

    // Get user data
    const { data: user } = await supabase
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Only super admins, owners and admins can update events
    if (!['super_admin', 'owner', 'admin'].includes(user.role)) {
      return NextResponse.json(
        { error: 'Only super admins, owners and admins can update events' },
        { status: 403 }
      );
    }

    const event = await eventService.updateEvent(eventId, body);
    return NextResponse.json(event);
  } catch (error) {
    console.error('Update event error:', error);
    return NextResponse.json(
      { error: 'Failed to update event' },
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
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const eventId = params.id;

    // Get user data
    const { data: user } = await supabase
      .from('users')
      .select('organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Only super admins, owners and admins can delete events
    if (!['super_admin', 'owner', 'admin'].includes(user.role)) {
      return NextResponse.json(
        { error: 'Only super admins, owners and admins can delete events' },
        { status: 403 }
      );
    }

    await supabase.from('events').delete().eq('id', eventId);

    return NextResponse.json({ success: true, message: 'Event deleted' });
  } catch (error) {
    console.error('Delete event error:', error);
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    );
  }
}

