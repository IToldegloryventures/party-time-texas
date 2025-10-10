'use client';

import { useUser } from '@clerk/nextjs';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import PaymentSuccess from '@/components/PaymentSuccess';
import { getOrganizationStats } from '@/lib/supabase/user-org';

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

interface DashboardContentProps {
  userData: UserData;
}

const DashboardContent = ({ userData }: DashboardContentProps) => {
  const { user, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [stats, setStats] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  // Handle payment success redirect
  useEffect(() => {
    const paymentStatus = searchParams.get('payment');
    // const planType = searchParams.get('plan');

    if (paymentStatus === 'success') {
      setShowSuccessMessage(true);
      // Clear the URL parameters after showing the message
      router.replace('/dashboard');

      // Hide success message after 8 seconds (handled by PaymentSuccess component)
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  // Fetch organization stats when user data is available
  useEffect(() => {
    if (userData) {
      const fetchStats = async () => {
        try {
          setLoading(true);
          const orgStats = await getOrganizationStats(userData.organization.id);
          setStats(orgStats);
        } catch (error) {
          console.error('Error fetching organization stats:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchStats();
    }
  }, [userData]);

  // Helper functions for role-based access
  const canManageTeam = () => {
    return (
      ['owner', 'admin'].includes(userData.user.role) ||
      userData.user.permissions?.can_manage_users
    );
  };

  const canManageDevices = () => {
    return (
      ['owner', 'admin', 'member'].includes(userData.user.role) ||
      userData.user.permissions?.can_manage_nfc_devices
    );
  };

  const canViewEvents = () => {
    // All users can view events - members can see events they're assigned to
    return true;
  };

  const canCreateEvents = () => {
    // Only owners and admins can create new events
    return (
      ['owner', 'admin'].includes(userData.user.role) ||
      userData.user.permissions?.can_create_events
    );
  };

  const canManageEvents = () => {
    // Manage means edit/delete - owners and admins have full control
    return (
      ['owner', 'admin'].includes(userData.user.role) ||
      userData.user.permissions?.can_manage_events
    );
  };

  const canManageLandingPages = () => {
    const canManage =
      ['super_admin', 'owner', 'admin', 'member'].includes(
        userData.user.role
      ) || userData.user.permissions?.can_manage_landing_pages;
    console.log('Landing Pages Permission Check:', {
      userRole: userData.user.role,
      canManage,
      permissions: userData.user.permissions,
    });
    return canManage;
  };

  const canManageOrganization = () => {
    return (
      ['super_admin', 'owner'].includes(userData.user.role) ||
      userData.user.permissions?.can_manage_organization
    );
  };

  const isAdmin = () => {
    return userData.user.role === 'super_admin';
  };

  // Loading state
  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading your organization data...</p>
        </div>
      </div>
    );
  }

  // Not signed in state
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">Access Denied</h1>
          <p className="mb-8 text-white/70">
            You need to be signed in to access the dashboard.
          </p>
          <Link
            href="/sign-in"
            className="group relative inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition-all hover:bg-white/5"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1E56] via-[#FF00FF] to-[#00FFFF] opacity-70 blur-sm transition-all group-hover:opacity-100" />
            <span className="absolute inset-0.5 rounded-full bg-black/50" />
            <span className="relative font-medium">Sign In</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Payment Success Message */}
      {showSuccessMessage && (
        <PaymentSuccess onClose={() => setShowSuccessMessage(false)} />
      )}

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            {userData.user.role === 'super_admin'
              ? `Welcome to Cosmic Portals Super Admin Platform, ${userData.user.first_name || user.firstName}!`
              : `Welcome to ${userData.organization.name}, ${userData.user.first_name || user.firstName}!`}
          </h1>
          <p className="max-w-2xl text-xl text-white/70">
            {userData.user.role === 'super_admin'
              ? 'You have full platform access to manage all organizations, users, and system settings across the entire Cosmic Portals ecosystem.'
              : userData.organization.name === 'Party Time Texas'
                ? 'Your corporate engagement platform is ready. Manage multiple landing pages, NFC tracking, analytics, and business events.'
                : 'Your NFC-powered engagement platform is ready. Manage events, track analytics, and create memorable experiences.'}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
              {userData.organization.plan_type} Plan
            </span>
            <span
              className={`rounded-full px-3 py-1 text-sm ${
                userData.user.role === 'super_admin'
                  ? 'bg-red-600/20 text-red-300'
                  : userData.user.role === 'owner'
                    ? 'bg-orange-600/20 text-orange-300'
                    : userData.user.role === 'admin'
                      ? 'bg-purple-600/20 text-purple-300'
                      : userData.user.role === 'member'
                        ? 'bg-blue-600/20 text-blue-300'
                        : 'bg-green-600/20 text-green-300'
              }`}
            >
              Role:{' '}
              {userData.user.role === 'super_admin'
                ? 'Super Admin'
                : userData.user.role.charAt(0).toUpperCase() +
                  userData.user.role.slice(1)}
            </span>
            {isAdmin() && (
              <span className="rounded-full bg-orange-600/20 px-3 py-1 text-sm text-orange-300">
                🔐 Platform Admin
              </span>
            )}
          </div>

          {/* Role Explanation */}
          {userData.user.role === 'super_admin' && (
            <div className="mt-4 rounded-lg border border-red-400/30 bg-red-900/10 p-4">
              <p className="text-sm text-red-200">
                <strong>Your Access:</strong> As a Super Admin, you have
                complete platform control including access to all organizations,
                all client data, billing management, and platform administration
                features.
              </p>
            </div>
          )}
          {userData.user.role === 'owner' && (
            <div className="mt-4 rounded-lg border border-orange-400/30 bg-orange-900/10 p-4">
              <p className="text-sm text-orange-200">
                <strong>Your Access:</strong> As the Owner, you have full
                control of your organization including organization settings,
                billing, team management, and all features within your
                organization.
              </p>
            </div>
          )}
          {userData.user.role === 'admin' && (
            <div className="mt-4 rounded-lg border border-purple-400/30 bg-purple-900/10 p-4">
              <p className="text-sm text-purple-200">
                <strong>Your Access:</strong> As an Admin, you have full
                management access including team management, events, NFC
                devices, and landing pages. Organization settings are restricted
                to the Owner.
              </p>
            </div>
          )}
          {userData.user.role === 'member' && (
            <div className="mt-4 rounded-lg border border-blue-400/30 bg-blue-900/10 p-4">
              <p className="text-sm text-blue-200">
                <strong>Your Access:</strong> As a Member, you can view and work
                on events you're assigned to, manage NFC devices, and create
                landing pages. Creating new events and managing the team are
                restricted to Admins and Owners.
              </p>
            </div>
          )}
          {userData.user.role === 'guest' && (
            <div className="mt-4 rounded-lg border border-green-400/30 bg-green-900/10 p-4">
              <p className="text-sm text-green-200">
                <strong>Your Access:</strong> As a Guest, you have limited
                read-only access to events you're specifically invited to,
                including viewing event details, photo galleries, and RSVP
                functionality.
              </p>
            </div>
          )}
        </div>

        {/* Dashboard Stats/Features Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* NFC Devices Card - Only show if user can manage devices */}
          {canManageDevices() && (
            <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 transition-colors duration-300 hover:border-purple-400/40">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/30">
                  <svg
                    className="h-5 w-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  NFC Devices
                </h3>
              </div>
              <p className="mb-4 text-sm text-white/70">
                {(stats?.nfcDevices as number) || 0} active devices • Manage
                your NFC business cards, signage, and event badges
              </p>
              <Link
                href="/dashboard/devices"
                className="block w-full rounded-lg bg-purple-600 px-4 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-purple-700"
              >
                Manage Devices ({(stats?.nfcDevices as number) || 0})
              </Link>
            </div>
          )}

          {/* Events Card - Show to all users */}
          {canViewEvents() && (
            <div className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 transition-colors duration-300 hover:border-blue-400/40">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/30">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Events</h3>
              </div>
              <p className="mb-4 text-sm text-white/70">
                {(stats?.events as number) || 0} events •{' '}
                {(stats?.attendees as number) || 0} total attendees
              </p>
              <Link
                href="/dashboard/events"
                className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-blue-700"
              >
                {canManageEvents()
                  ? `Manage Events (${(stats?.events as number) || 0})`
                  : `View My Events (${(stats?.events as number) || 0})`}
              </Link>
            </div>
          )}

          {/* Landing Pages Card - Show to owners, admins, and members */}
          {canManageLandingPages() && (
            <div className="rounded-xl border border-orange-400/20 bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 transition-colors duration-300 hover:border-orange-400/40">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/30">
                  <svg
                    className="h-5 w-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Landing Pages
                </h3>
              </div>
              <p className="mb-4 text-sm text-white/70">
                Create and manage custom landing pages for your NFC devices and
                campaigns
              </p>
              <Link
                href="/dashboard/landing-pages"
                className="block w-full rounded-lg bg-orange-600 px-4 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-orange-700"
              >
                Manage Landing Pages
              </Link>
            </div>
          )}

          {/* Analytics Dashboard Card - Show to all users */}
          <div className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 transition-colors duration-300 hover:border-green-400/40">
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/30">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Analytics</h3>
            </div>
            <p className="mb-4 text-sm text-white/70">
              {(stats?.totalScans as number) || 0} total scans • Track
              engagement, conversions, and ROI
            </p>
            <button className="w-full rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-green-700">
              View Analytics ({(stats?.totalScans as number) || 0})
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-purple-400/20 bg-gradient-to-r from-purple-900/10 to-blue-900/10 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {canCreateEvents() && (
              <button className="rounded-lg border border-purple-400/30 bg-purple-600/20 px-4 py-3 font-medium text-purple-200 transition-colors duration-200 hover:bg-purple-600/30">
                Create Event
              </button>
            )}
            {canManageDevices() && (
              <Link
                href="/dashboard/devices"
                className="block rounded-lg border border-blue-400/30 bg-blue-600/20 px-4 py-3 text-center font-medium text-blue-200 transition-colors duration-200 hover:bg-blue-600/30"
              >
                Add NFC Device
              </Link>
            )}
            {canManageTeam() && (
              <Link
                href="/dashboard/team"
                className="block rounded-lg border border-indigo-400/30 bg-indigo-600/20 px-4 py-3 text-center font-medium text-indigo-200 transition-colors duration-200 hover:bg-indigo-600/30"
              >
                Manage Team
              </Link>
            )}
            <button className="rounded-lg border border-green-400/30 bg-green-600/20 px-4 py-3 font-medium text-green-200 transition-colors duration-200 hover:bg-green-600/30">
              View Reports
            </button>
            {canManageLandingPages() && (
              <button className="rounded-lg border border-orange-400/30 bg-orange-600/20 px-4 py-3 font-medium text-orange-200 transition-colors duration-200 hover:bg-orange-600/30">
                Customize Branding
              </button>
            )}
            {canManageOrganization() && (
              <Link
                href="/dashboard/settings"
                className="block rounded-lg border border-purple-400/30 bg-purple-600/20 px-4 py-3 text-center font-medium text-purple-200 transition-colors duration-200 hover:bg-purple-600/30"
              >
                Organization Settings
              </Link>
            )}
          </div>
        </div>

        {/* Admin Section - Only for Cosmic Portals Super Admin */}
        {isAdmin() && (
          <div className="mt-8 rounded-xl border border-red-400/20 bg-gradient-to-r from-red-900/10 to-orange-900/10 p-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
              <svg
                className="mr-2 h-6 w-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Cosmic Portals Super Admin
            </h2>
            <p className="mb-6 text-white/70">
              Manage all organizations, landing pages, and platform analytics
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/admin"
                className="block rounded-lg border border-red-400/30 bg-red-600/20 px-4 py-3 text-center font-medium text-red-200 transition-colors duration-200 hover:bg-red-600/30"
              >
                🏠 Admin Dashboard
              </Link>
              <Link
                href="/dashboard/landing-pages"
                className="block rounded-lg border border-purple-400/30 bg-purple-600/20 px-4 py-3 text-center font-medium text-purple-200 transition-colors duration-200 hover:bg-purple-600/30"
              >
                📄 Manage Landing Pages
              </Link>
              <Link
                href="/admin/organizations"
                className="block rounded-lg border border-blue-400/30 bg-blue-600/20 px-4 py-3 text-center font-medium text-blue-200 transition-colors duration-200 hover:bg-blue-600/30"
              >
                🏢 Manage Organizations
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
