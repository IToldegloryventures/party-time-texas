'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  TeamManagementService,
  TeamMember,
  TeamInvitation,
} from '@/lib/team-management';

interface UserData {
  user: {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
    role: string;
    permissions: any;
  };
  organization: {
    id: string;
    name: string;
    slug: string;
    plan_type: string;
  };
}

interface TeamManagementProps {
  userData: UserData;
}

const TeamManagement = ({ userData }: TeamManagementProps) => {
  const { user, isLoaded } = useUser();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [pendingInvitations, setPendingInvitations] = useState<
    TeamInvitation[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteFirstName, setInviteFirstName] = useState('');
  const [inviteLastName, setInviteLastName] = useState('');
  const [inviteRole, setInviteRole] = useState('member');

  useEffect(() => {
    if (user && isLoaded) {
      fetchTeamData();
    }
  }, [user, isLoaded]);

  const fetchTeamData = async () => {
    try {
      setLoading(true);

      // Fetch team members and invitations using organization ID from userData
      const [members, invitations] = await Promise.all([
        TeamManagementService.getTeamMembers(userData.organization.id),
        TeamManagementService.getPendingInvitations(userData.organization.id),
      ]);

      setTeamMembers(members);
      setPendingInvitations(invitations);
    } catch (error) {
      console.error('Error fetching team data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInviteMember = async () => {
    if (!inviteEmail || !user?.id) return;

    try {
      const result = await TeamManagementService.inviteTeamMember(
        userData.organization.id,
        inviteEmail,
        inviteRole,
        user.id
      );

      if (result.success) {
        alert('Invitation sent successfully!');
        setInviteEmail('');
        setInviteRole('member');
        setShowInviteForm(false);
        fetchTeamData(); // Refresh data
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error inviting member:', error);
      alert('Failed to send invitation');
    }
  };

  const handleUpdateRole = async (userId: string, newRole: string) => {
    try {
      const result = await TeamManagementService.updateTeamMemberRole(
        userId,
        newRole
      );
      if (result.success) {
        alert('Role updated successfully!');
        fetchTeamData(); // Refresh data
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Failed to update role');
    }
  };

  const handleRemoveMember = async (userId: string, memberName: string) => {
    if (
      !confirm(`Are you sure you want to remove ${memberName} from the team?`)
    ) {
      return;
    }

    try {
      const result = await TeamManagementService.removeTeamMember(userId);
      if (result.success) {
        alert('Team member removed successfully!');
        fetchTeamData(); // Refresh data
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error removing member:', error);
      alert('Failed to remove team member');
    }
  };

  const handleCancelInvitation = async (
    invitationId: string,
    email: string
  ) => {
    if (
      !confirm(`Are you sure you want to cancel the invitation for ${email}?`)
    ) {
      return;
    }

    try {
      const result = await TeamManagementService.cancelInvitation(invitationId);
      if (result.success) {
        alert('Invitation cancelled successfully!');
        fetchTeamData(); // Refresh data
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error cancelling invitation:', error);
      alert('Failed to cancel invitation');
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading team management...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Link
              href="/dashboard"
              className="text-white/70 transition-colors hover:text-white"
            >
              ← Back to Dashboard
            </Link>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            Team Management - {userData.organization.name}
          </h1>
          <p className="text-xl text-white/70">
            {userData.organization.plan_type === 'professional' ||
            userData.organization.plan_type === 'enterprise'
              ? 'Manage your team members, invite collaborators, and control access to your business account'
              : 'Manage your event staff, invite team members, and control access permissions'}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
              {userData.organization.plan_type} Plan
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
              Your Role: {userData.user.role}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setShowInviteForm(true)}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
          >
            Invite Team Member
          </button>
          <button
            onClick={fetchTeamData}
            className="rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
          >
            Refresh Data
          </button>
        </div>

        {/* Team Members Section */}
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50">
          <div className="border-b border-gray-600/30 bg-gray-800/50 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Team Members ({teamMembers.length})
            </h2>
          </div>

          {teamMembers.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-white/70">No team members found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Last Login
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {teamMembers.map(member => (
                    <tr key={member.id} className="hover:bg-gray-800/30">
                      <td className="px-6 py-4">
                        <div className="font-medium text-white">
                          {member.first_name && member.last_name
                            ? `${member.first_name} ${member.last_name}`
                            : 'No name set'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {member.email}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            member.role === 'super_admin'
                              ? 'bg-red-600/20 text-red-300'
                              : member.role === 'owner'
                                ? 'bg-orange-600/20 text-orange-300'
                                : member.role === 'admin'
                                  ? 'bg-purple-600/20 text-purple-300'
                                  : member.role === 'member'
                                    ? 'bg-blue-600/20 text-blue-300'
                                    : 'bg-green-600/20 text-green-300'
                          }`}
                        >
                          {member.role === 'super_admin' ? 'Super Admin' : member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            member.status === 'active'
                              ? 'bg-green-600/20 text-green-300'
                              : member.status === 'invited'
                                ? 'bg-yellow-600/20 text-yellow-300'
                                : 'bg-red-600/20 text-red-300'
                          }`}
                        >
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {member.last_login
                          ? new Date(member.last_login).toLocaleDateString()
                          : 'Never'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <select
                            value={member.role}
                            onChange={e =>
                              handleUpdateRole(member.id, e.target.value)
                            }
                            className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-xs text-white"
                            disabled={['super_admin', 'owner'].includes(member.role)}
                          >
                            <option value="guest">Guest - Limited Access</option>
                            <option value="member">Member - Basic Access</option>
                            <option value="admin">Admin - Full Management</option>
                          </select>
                          <button
                            onClick={() =>
                              handleRemoveMember(member.id, member.email)
                            }
                            disabled={['super_admin', 'owner'].includes(member.role)}
                            className="rounded bg-red-600/20 px-3 py-1 text-xs text-red-300 transition-colors hover:bg-red-600/30 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pending Invitations Section */}
        {pendingInvitations.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50">
            <div className="border-b border-gray-600/30 bg-gray-800/50 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Pending Invitations ({pendingInvitations.length})
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Invited
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Expires
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {pendingInvitations.map(invitation => (
                    <tr key={invitation.id} className="hover:bg-gray-800/30">
                      <td className="px-6 py-4 text-white/70">
                        {invitation.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-blue-600/20 px-2 py-1 text-xs font-medium text-blue-300">
                          {invitation.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {new Date(invitation.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {new Date(invitation.expires_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() =>
                            handleCancelInvitation(
                              invitation.id,
                              invitation.email
                            )
                          }
                          className="rounded bg-red-600/20 px-3 py-1 text-xs text-red-300 transition-colors hover:bg-red-600/30"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Invite Member Modal */}
        {showInviteForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="mx-4 w-full max-w-md rounded-xl border border-gray-600/30 bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Invite Team Member
              </h3>

              <div className="space-y-4">
                {/* Inviter's Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Your Name (Inviter)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={userData.user.first_name || ''}
                      disabled
                      className="w-full rounded-lg border border-gray-600 bg-gray-600 px-4 py-2 text-white/70 placeholder-gray-400"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      value={userData.user.last_name || ''}
                      disabled
                      className="w-full rounded-lg border border-gray-600 bg-gray-600 px-4 py-2 text-white/70 placeholder-gray-400"
                      placeholder="Last Name"
                    />
                  </div>
                  <p className="mt-1 text-xs text-white/50">
                    This will be shown as who invited them
                  </p>
                </div>

                {/* Invitee's Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={e => setInviteEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="colleague@company.com"
                  />
                </div>

                {/* Invitee's Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Their Name (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={inviteFirstName}
                      onChange={e => setInviteFirstName(e.target.value)}
                      className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      value={inviteLastName}
                      onChange={e => setInviteLastName(e.target.value)}
                      className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="Last Name"
                    />
                  </div>
                  <p className="mt-1 text-xs text-white/50">
                    They can add this during signup if not provided
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Role
                  </label>
                  <select
                    value={inviteRole}
                    onChange={e => setInviteRole(e.target.value)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="member">Member - Can manage devices & pages</option>
                    <option value="admin">Admin - Can manage team & events</option>
                  </select>
                  <p className="mt-2 text-xs text-white/50">
                    Members can manage NFC devices and landing pages. Admins can also manage team members and events.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleInviteMember}
                  className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
                >
                  Send Invitation
                </button>
                <button
                  onClick={() => setShowInviteForm(false)}
                  className="rounded-lg bg-gray-600 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamManagement;
