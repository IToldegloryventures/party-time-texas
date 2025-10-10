/**
 * Events API Routes
 * Handles event CRUD operations and management
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import EventService from '@/lib/events';
import { supabase } from '@/lib/supabase/client';

const eventService = new EventService();

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data including role
    const { data: user } = await supabase
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if filter parameter is provided (myevents vs all)
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get('filter'); // 'my' or 'all'

    let events;
    
    if (user.role === 'super_admin') {
      // Super admins can see all events across all organizations
      // For now, show all events from the user's organization
      events = await eventService.getOrganizationEvents(user.organization_id);
    } else if (user.role === 'owner' || user.role === 'admin') {
      // Owners and admins can see all org events
      if (filter === 'my') {
        // If they want "my events", show assigned events
        events = await eventService.getUserAssignedEvents(user.id);
      } else {
        // Otherwise show all organization events
        events = await eventService.getOrganizationEvents(user.organization_id);
      }
    } else if (user.role === 'member') {
      // Members only see assigned events
      events = await eventService.getUserAssignedEvents(user.id);
    } else if (user.role === 'guest') {
      // Guests can only see events they're specifically invited to
      events = await eventService.getUserAssignedEvents(user.id);
    } else {
      // Default to assigned events for unknown roles
      events = await eventService.getUserAssignedEvents(user.id);
    }

    return NextResponse.json(events);
  } catch (error) {
    console.error('Get events error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
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
    const {
      name,
      description,
      event_type,
      start_date,
      end_date,
      location,
      settings,
      assigned_members,
    } = body;

    if (!name || !event_type) {
      return NextResponse.json(
        { error: 'Name and event type are required' },
        { status: 400 }
      );
    }

    // Get user data including role
    const { data: user } = await supabase
      .from('users')
      .select('organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Only super admins, owners and admins can create events
    if (!['super_admin', 'owner', 'admin'].includes(user.role)) {
      return NextResponse.json(
        { error: 'Only super admins, owners and admins can create events' },
        { status: 403 }
      );
    }

    const event = await eventService.createEvent({
      organization_id: user.organization_id,
      name,
      description,
      event_type,
      start_date,
      end_date,
      location,
      settings,
      assigned_members: assigned_members || [],
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Create event error:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
