/**
 * Event Management for Cosmic Portals
 */

import { createClient } from './supabase/client';

export interface Event {
  id: string;
  organization_id: string;
  name: string;
  description?: string;
  event_type:
    | 'business'
    | 'wedding'
    | 'corporate'
    | 'school'
    | 'nonprofit'
    | 'community';
  start_date?: string;
  end_date?: string;
  location?: string;
  status: 'draft' | 'published' | 'live' | 'completed' | 'cancelled';
  settings: Record<string, unknown>;
  assigned_members: string[]; // Array of user IDs who can access this event
  created_at: string;
  updated_at: string;
}

export interface Attendee {
  id: string;
  event_id: string;
  organization_id: string;
  name: string;
  email?: string;
  phone?: string;
  check_in_time?: string;
  check_out_time?: string;
  photo_url?: string;
  plus_ones: number;
  meal_choice?: string;
  dietary_restrictions?: string;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface EventStats {
  total_attendees: number;
  checked_in: number;
  checked_out: number;
  photos_uploaded: number;
  average_check_in_time?: string;
}

export class EventService {
  private supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
  );

  /**
   * Create a new event
   */
  async createEvent(data: {
    organization_id: string;
    name: string;
    description?: string;
    event_type: string;
    start_date?: string;
    end_date?: string;
    location?: string;
    settings?: Record<string, unknown>;
    assigned_members?: string[]; // Array of user IDs
  }): Promise<Event> {
    const { data: event, error } = await this.supabase
      .from('events')
      .insert({
        organization_id: data.organization_id,
        name: data.name,
        description: data.description,
        event_type: data.event_type,
        start_date: data.start_date,
        end_date: data.end_date,
        location: data.location,
        status: 'draft',
        settings: data.settings || {},
        assigned_members: data.assigned_members || [],
      })
      .select()
      .single();

    if (error) throw error;
    return event;
  }

  /**
   * Get events for an organization
   */
  async getOrganizationEvents(organizationId: string): Promise<Event[]> {
    const { data, error } = await this.supabase
      .from('events')
      .select('*')
      .eq('organization_id', organizationId)
      .order('created_at', { ascending: false});

    if (error) throw error;
    return data || [];
  }

  /**
   * Get events assigned to a specific user (for Members)
   */
  async getUserAssignedEvents(userId: string): Promise<Event[]> {
    const { data, error } = await this.supabase
      .from('events')
      .select('*')
      .contains('assigned_members', [userId])
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Get all events a user can access (assigned + org events for admins/owners)
   */
  async getUserAccessibleEvents(
    userId: string,
    organizationId: string,
    userRole: string
  ): Promise<{ allEvents: Event[]; assignedEvents: Event[] }> {
    // Owners and admins can see all org events
    if (userRole === 'owner' || userRole === 'admin') {
      const allEvents = await this.getOrganizationEvents(organizationId);
      return { allEvents, assignedEvents: [] };
    }

    // Members only see assigned events
    const assignedEvents = await this.getUserAssignedEvents(userId);
    return { allEvents: assignedEvents, assignedEvents };
  }

  /**
   * Check if a user can access an event
   */
  async canUserAccessEvent(
    userId: string,
    eventId: string,
    userRole: string
  ): Promise<boolean> {
    const event = await this.getEvent(eventId);
    if (!event) return false;

    // Owners and admins can access all events in their org
    if (userRole === 'owner' || userRole === 'admin') {
      return true;
    }

    // Members can only access events they're assigned to
    return event.assigned_members?.includes(userId) || false;
  }

  /**
   * Assign members to an event
   */
  async assignMembersToEvent(
    eventId: string,
    memberIds: string[]
  ): Promise<Event> {
    const { data, error} = await this.supabase
      .from('events')
      .update({ assigned_members: memberIds })
      .eq('id', eventId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Add a member to an event's assigned list
   */
  async addMemberToEvent(eventId: string, userId: string): Promise<Event> {
    const event = await this.getEvent(eventId);
    if (!event) throw new Error('Event not found');

    const currentMembers = event.assigned_members || [];
    if (!currentMembers.includes(userId)) {
      currentMembers.push(userId);
    }

    return this.assignMembersToEvent(eventId, currentMembers);
  }

  /**
   * Remove a member from an event's assigned list
   */
  async removeMemberFromEvent(eventId: string, userId: string): Promise<Event> {
    const event = await this.getEvent(eventId);
    if (!event) throw new Error('Event not found');

    const currentMembers = event.assigned_members || [];
    const updatedMembers = currentMembers.filter(id => id !== userId);

    return this.assignMembersToEvent(eventId, updatedMembers);
  }

  /**
   * Get event by ID
   */
  async getEvent(eventId: string): Promise<Event | null> {
    const { data, error } = await this.supabase
      .from('events')
      .select('*')
      .eq('id', eventId)
      .single();

    if (error) return null;
    return data;
  }

  /**
   * Update event
   */
  async updateEvent(eventId: string, updates: Partial<Event>): Promise<Event> {
    const { data, error } = await this.supabase
      .from('events')
      .update(updates)
      .eq('id', eventId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Add attendee to event
   */
  async addAttendee(data: {
    event_id: string;
    organization_id: string;
    name: string;
    email?: string;
    phone?: string;
    plus_ones?: number;
    meal_choice?: string;
    dietary_restrictions?: string;
    metadata?: Record<string, unknown>;
  }): Promise<Attendee> {
    const { data: attendee, error } = await this.supabase
      .from('attendees')
      .insert({
        event_id: data.event_id,
        organization_id: data.organization_id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        plus_ones: data.plus_ones || 0,
        meal_choice: data.meal_choice,
        dietary_restrictions: data.dietary_restrictions,
        metadata: data.metadata || {},
      })
      .select()
      .single();

    if (error) throw error;
    return attendee;
  }

  /**
   * Get attendees for an event
   */
  async getEventAttendees(eventId: string): Promise<Attendee[]> {
    const { data, error } = await this.supabase
      .from('attendees')
      .select('*')
      .eq('event_id', eventId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Check in attendee
   */
  async checkInAttendee(attendeeId: string): Promise<Attendee> {
    const { data, error } = await this.supabase
      .from('attendees')
      .update({
        check_in_time: new Date().toISOString(),
      })
      .eq('id', attendeeId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Check out attendee
   */
  async checkOutAttendee(attendeeId: string): Promise<Attendee> {
    const { data, error } = await this.supabase
      .from('attendees')
      .update({
        check_out_time: new Date().toISOString(),
      })
      .eq('id', attendeeId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Get event statistics
   */
  async getEventStats(eventId: string): Promise<EventStats> {
    const { data: attendees, error } = await this.supabase
      .from('attendees')
      .select('check_in_time, check_out_time, photo_url')
      .eq('event_id', eventId);

    if (error) throw error;

    const total_attendees = attendees?.length || 0;
    const checked_in = attendees?.filter(a => a.check_in_time).length || 0;
    const checked_out = attendees?.filter(a => a.check_out_time).length || 0;
    const photos_uploaded = attendees?.filter(a => a.photo_url).length || 0;

    // Calculate average check-in time
    let average_check_in_time;
    if (checked_in > 0) {
      const checkInTimes = attendees
        ?.filter(a => a.check_in_time)
        .map(a => new Date(a.check_in_time).getTime());

      if (checkInTimes && checkInTimes.length > 0) {
        const avgTime =
          checkInTimes.reduce((a, b) => a + b, 0) / checkInTimes.length;
        average_check_in_time = new Date(avgTime).toISOString();
      }
    }

    return {
      total_attendees,
      checked_in,
      checked_out,
      photos_uploaded,
      average_check_in_time,
    };
  }

  /**
   * Upload attendee photo
   */
  async uploadAttendeePhoto(
    attendeeId: string,
    photoUrl: string
  ): Promise<Attendee> {
    const { data, error } = await this.supabase
      .from('attendees')
      .update({ photo_url: photoUrl })
      .eq('id', attendeeId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Get event photo gallery
   */
  async getEventPhotoGallery(
    eventId: string
  ): Promise<
    Array<{ id: string; name: string; photo_url: string; created_at: string }>
  > {
    const { data, error } = await this.supabase
      .from('attendees')
      .select('id, name, photo_url, created_at')
      .eq('event_id', eventId)
      .not('photo_url', 'is', null)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Export attendees to CSV
   */
  async exportAttendeesCSV(eventId: string): Promise<string> {
    const attendees = await this.getEventAttendees(eventId);

    const headers = [
      'Name',
      'Email',
      'Phone',
      'Check In Time',
      'Check Out Time',
      'Plus Ones',
      'Meal Choice',
    ];
    const rows = attendees.map(attendee => [
      attendee.name,
      attendee.email || '',
      attendee.phone || '',
      attendee.check_in_time || '',
      attendee.check_out_time || '',
      attendee.plus_ones.toString(),
      attendee.meal_choice || '',
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    return csvContent;
  }
}

export default EventService;
