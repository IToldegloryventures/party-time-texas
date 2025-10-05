'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { TeamManagementService } from '@/lib/team-management';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface InviteAcceptanceProps {
  invitation: {
    id: string;
    email: string;
    role: string;
    organization_id: string;
    invitation_token: string;
  };
}

const InviteAcceptance = ({ invitation }: InviteAcceptanceProps) => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAcceptInvitation = async () => {
    if (!user || !isLoaded) {
      setError('Please sign in to accept the invitation');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const result = await TeamManagementService.acceptInvitation(
        invitation.invitation_token,
        user.id,
        user.firstName || undefined,
        user.lastName || undefined
      );

      if (result.success) {
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError(result.error || 'Failed to accept invitation');
      }
    } catch (error) {
      console.error('Error accepting invitation:', error);
      setError('Failed to accept invitation');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading invitation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/20">
              <svg
                className="h-8 w-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              You&apos;re Invited!
            </h1>
            <p className="text-white/70">Join your team on Cosmic Portals</p>
          </div>

          {/* Invitation Details */}
          <div className="mb-8 rounded-lg border border-gray-600/30 bg-gray-800/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Invitation Details
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-white/70">Email:</span>
                <span className="ml-2 text-white">{invitation.email}</span>
              </div>
              <div>
                <span className="text-white/70">Role:</span>
                <span className="ml-2 text-white capitalize">
                  {invitation.role}
                </span>
              </div>
              <div>
                <span className="text-white/70">Platform:</span>
                <span className="ml-2 text-white">Cosmic Portals</span>
              </div>
            </div>
          </div>

          {/* User Status */}
          {user ? (
            <div className="mb-8">
              <div className="rounded-lg border border-green-400/30 bg-green-900/20 p-4">
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-green-300">
                    Signed in as {user.emailAddresses[0]?.emailAddress}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <div className="rounded-lg border border-yellow-400/30 bg-yellow-900/20 p-4">
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <span className="text-yellow-300">
                    Please sign in to accept this invitation
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-400/30 bg-red-900/20 p-4">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-300">{error}</span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            {user ? (
              <button
                onClick={handleAcceptInvitation}
                disabled={loading}
                className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700"
              >
                {loading ? 'Accepting...' : 'Accept Invitation'}
              </button>
            ) : (
              <Link
                href="/sign-in"
                className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                Sign In to Accept
              </Link>
            )}

            <button
              onClick={() => window.history.back()}
              className="rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/50">
              Powered by <span className="text-purple-300">Cosmic Portals</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteAcceptance;
