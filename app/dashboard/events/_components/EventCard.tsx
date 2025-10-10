'use client';

import { useState } from 'react';
import { Event } from '@/lib/events';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: Event;
  onUpdateEvent: (eventId: string, eventData: Partial<Event>) => Promise<void>;
  onDeleteEvent: (eventId: string) => Promise<void>;
  onAssignMembers: () => void;
  userRole?: string;
}

export default function EventCard({ 
  event, 
  onUpdateEvent, 
  onDeleteEvent, 
  onAssignMembers,
  userRole = ''
}: EventCardProps) {
  // Check permissions
  const canEdit = ['super_admin', 'owner', 'admin'].includes(userRole);
  const canAssign = ['super_admin', 'owner', 'admin'].includes(userRole);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: event.name,
    description: event.description || '',
    location: event.location || '',
    status: event.status,
  });

  const handleSave = async () => {
    try {
      await onUpdateEvent(event.id, editData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update event:', error);
    }
  };

  const handleCancel = () => {
    setEditData({
      name: event.name,
      description: event.description || '',
      location: event.location || '',
      status: event.status,
    });
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event name"
              />
              <textarea
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event description"
                rows={3}
              />
              <input
                type="text"
                value={editData.location}
                onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event location"
              />
              <select
                value={editData.status}
                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <div className="flex space-x-2">
                <Button onClick={handleSave} size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Save
                </Button>
                <Button onClick={handleCancel} size="sm" variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
              
              {event.description && (
                <p className="text-gray-600 mb-4">{event.description}</p>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium">Type:</span> {event.event_type}
                </div>
                {event.location && (
                  <div>
                    <span className="font-medium">Location:</span> {event.location}
                  </div>
                )}
                {event.start_date && (
                  <div>
                    <span className="font-medium">Start:</span> {formatDate(event.start_date)}
                  </div>
                )}
                {event.end_date && (
                  <div>
                    <span className="font-medium">End:</span> {formatDate(event.end_date)}
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>
                    <span className="font-medium">Assigned Members:</span> {event.assigned_members?.length || 0}
                  </span>
                  <span>
                    <span className="font-medium">Created:</span> {formatDate(event.created_at)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        
        {!isEditing && canEdit && (
          <div className="flex flex-col space-y-2 ml-4">
            {canAssign && (
              <Button
                onClick={onAssignMembers}
                size="sm"
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Assign Members
              </Button>
            )}
            <Button
              onClick={() => setIsEditing(true)}
              size="sm"
              variant="outline"
            >
              Edit
            </Button>
            <Button
              onClick={() => onDeleteEvent(event.id)}
              size="sm"
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
