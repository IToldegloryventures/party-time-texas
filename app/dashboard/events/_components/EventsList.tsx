'use client';

import { useState } from 'react';
import { Event } from '@/lib/events';
import EventCard from './EventCard';
import AssignMembersModal from './AssignMembersModal';

interface EventsListProps {
  events: Event[];
  loading: boolean;
  onUpdateEvent: (eventId: string, eventData: Partial<Event>) => Promise<void>;
  onDeleteEvent: (eventId: string) => Promise<void>;
  onAssignMembers: (eventId: string, memberIds: string[]) => Promise<void>;
  userRole?: string;
}

export default function EventsList({ 
  events, 
  loading, 
  onUpdateEvent, 
  onDeleteEvent, 
  onAssignMembers,
  userRole = ''
}: EventsListProps) {
  const [assignModalEvent, setAssignModalEvent] = useState<Event | null>(null);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex space-x-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No events found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating your first event.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onUpdateEvent={onUpdateEvent}
            onDeleteEvent={onDeleteEvent}
            onAssignMembers={() => setAssignModalEvent(event)}
            userRole={userRole}
          />
        ))}
      </div>

      {/* Assign Members Modal */}
      {assignModalEvent && (
        <AssignMembersModal
          event={assignModalEvent}
          onClose={() => setAssignModalEvent(null)}
          onAssignMembers={onAssignMembers}
        />
      )}
    </>
  );
}
