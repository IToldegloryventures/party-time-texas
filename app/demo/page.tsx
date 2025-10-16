import Link from 'next/link';

export default function DemoHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Cosmic Portals Demo
          </h1>
          <p className="text-xl text-gray-300">
            Explore internal dashboards tailored to different user types
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Demo Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Business User Demo */}
          <Link href="/demo/business-user">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.256V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h5.821a4.5 4.5 0 00.822-8.744M7 9h6m-6 4h4m5-11l4 4m0 0l4 4m-4-4v8"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Business User
              </h2>
              <p className="mb-6 text-center text-sm text-purple-100">
                NFC business cards, conversion funnels, and ROI tracking
              </p>
              <div className="space-y-2 text-sm text-purple-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>NFC Business Cards</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Conversion Analytics</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Behavioral Profiles</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>ROI Dashboard</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-purple-600 transition-all group-hover:bg-purple-100">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Event Planner Demo */}
          <Link href="/demo/event-planner">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-pink-600 to-pink-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Event Planner
              </h2>
              <p className="mb-6 text-center text-sm text-pink-100">
                Guest check-in, RSVP management, and real-time attendance
              </p>
              <div className="space-y-2 text-sm text-pink-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>NFC Check-In</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Guest Management</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Photo Gallery</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Attendance Analytics</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-pink-600 transition-all group-hover:bg-pink-100">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Event Guest Demo */}
          <Link href="/demo/event-guest">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Event Guest
              </h2>
              <p className="mb-6 text-center text-sm text-cyan-100">
                Check-in, event experience, photo gallery, RSVP
              </p>
              <div className="space-y-2 text-sm text-cyan-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>NFC Check-In</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Event Schedule</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Photo Gallery</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>RSVP & Info</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-cyan-600 transition-all group-hover:bg-cyan-100">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Super Admin Demo */}
          <Link href="/demo/super-admin">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-red-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Super Admin
              </h2>
              <p className="mb-6 text-center text-sm text-red-100">
                Platform administration and controls
              </p>
              <div className="space-y-2 text-sm text-red-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>All Organizations</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Revenue & Analytics</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>System Controls</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>User Management</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-red-600 transition-all group-hover:bg-red-100">
                View Demo →
              </div>
            </div>
          </Link>

        </div>

        {/* Description Section */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Why These User Types Matter
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-3 text-lg font-bold text-blue-400">
                Business Users
              </div>
              <p className="text-sm text-gray-300">
                Dashboard with NFC Devices, Events, Landing Pages, and Analytics modules. Quick actions, real-time metrics, and detailed device/event management.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-pink-400">
                Event Planners
              </div>
              <p className="text-sm text-gray-300">
                Comprehensive event management with NFC check-in stations, real-time attendee tracking, meal preferences, dietary restrictions, and check-in timelines.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-cyan-400">
                Event Guests
              </div>
              <p className="text-sm text-gray-300">
                Guest portal with event details, schedule, venue map, photo gallery for uploads/viewing, RSVP confirmation, meal selection, and attendee information.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-red-400">
                Super Admins
              </div>
              <p className="text-sm text-gray-300">
                Platform-wide administration with organization management, revenue analytics, portal breakdowns, and advanced system controls across all customers.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-12">
          <h2 className="mb-8 text-2xl font-bold text-white">Use Cases</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">
                💼 Business Profiles
              </div>
              <p className="text-xs text-gray-400">
                NFC cards, landing pages, analytics, team management, quick actions
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">📋 Event Management</div>
              <p className="text-xs text-gray-400">
                Check-in stations, attendee lists, meal tracking, real-time analytics
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">📸 Photo Galleries</div>
              <p className="text-xs text-gray-400">
                Guest uploads, event memories, shareable galleries, real-time feeds
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">🎫 RSVP & Check-In</div>
              <p className="text-xs text-gray-400">
                Guest confirmations, NFC taps, meal selections, preferences tracking
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">📊 Platform Analytics</div>
              <p className="text-xs text-gray-400">
                Revenue metrics, organization stats, portal breakdowns, growth tracking
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">🔐 Admin Controls</div>
              <p className="text-xs text-gray-400">
                User management, system settings, data export, advanced filtering
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
          >
            <span className="text-white">← Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
