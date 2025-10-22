'use client';

import { useState, useEffect } from 'react';
import { Event } from '@/lib/events';
import { Button } from '@/components/ui/button';

interface AssignMembersModalProps {
  event: Event;
  onClose: () => void;
  onAssignMembers: (eventId: string, memberIds: string[]) => Promise<void>;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
}

export default function AssignMembersModal({
  event,
  onClose,
  onAssignMembers,
}: AssignMembersModalProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>(
    event.assigned_members || []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('/api/team');
      if (response.ok) {
        const members = await response.json();
        setTeamMembers(members);
      }
    } catch (error) {
      console.error('Failed to fetch team members:', error);
    }
  };

  const handleMemberToggle = (memberId: string) => {
    setSelectedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await onAssignMembers(event.id, selectedMembers);
      onClose();
    } catch (error) {
      console.error('Failed to assign members:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMemberName = (memberId: string) => {
    const member = teamMembers.find(m => m.id === memberId);
    return member ? member.name : 'Unknown Member';
  };

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Assign Members to {event.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 py-4">
          {/* Currently Assigned Members */}
          {event.assigned_members && event.assigned_members.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Currently Assigned:
              </h3>
              <div className="space-y-2">
                {event.assigned_members.map(memberId => (
                  <div
                    key={memberId}
                    className="flex items-center justify-between rounded-md bg-blue-50 px-3 py-2"
                  >
                    <span className="text-sm text-blue-800">
                      {getMemberName(memberId)}
                    </span>
                    <span className="text-xs text-blue-600">Assigned</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Team Members */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-medium text-gray-700">
              Select Team Members:
            </h3>
            <div className="max-h-64 overflow-y-auto rounded-md border border-gray-300 p-4">
              {teamMembers.length === 0 ? (
                <p className="py-4 text-center text-sm text-gray-500">
                  No team members found
                </p>
              ) : (
                <div className="space-y-2">
                  {teamMembers.map(member => (
                    <label
                      key={member.id}
                      className="flex items-center space-x-3 py-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => handleMemberToggle(member.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {member.email}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selection Summary */}
          <div className="mb-6 rounded-md bg-gray-50 p-3">
            <p className="text-sm text-gray-600">
              <span className="font-medium">{selectedMembers.length}</span>{' '}
              member(s) selected
            </p>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 border-t border-gray-200 px-6 py-4">
          <Button onClick={onClose} variant="outline" disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? 'Assigning...' : 'Assign Members'}
          </Button>
        </div>
      </div>
    </div>
  );
}
