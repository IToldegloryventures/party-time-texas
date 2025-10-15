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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

          {/* Hybrid User Demo */}
          <Link href="/demo/hybrid-user">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Hybrid User
              </h2>
              <p className="mb-6 text-center text-sm text-cyan-100">
                Unified dashboards across business and event activities
              </p>
              <div className="space-y-2 text-sm text-cyan-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Unified Dashboard</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Cross-Platform Tracking</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Data Correlation</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Aggregated Insights</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-cyan-600 transition-all group-hover:bg-cyan-100">
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 text-lg font-bold text-purple-400">
                Business Users
              </div>
              <p className="text-sm text-gray-300">
                Entrepreneurs and marketers need to track leads, measure ROI, and
                understand conversion patterns. Our business dashboard provides
                comprehensive analytics from NFC card taps to landing page
                conversions.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-pink-400">
                Event Planners
              </div>
              <p className="text-sm text-gray-300">
                Event professionals need real-time guest management, attendance
                tracking, and engagement metrics. Our event dashboard streamlines
                check-in, RSVP management, and post-event recaps with galleries.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-cyan-400">
                Hybrid Users
              </div>
              <p className="text-sm text-gray-300">
                Corporate teams, nonprofits, and communities need to blend
                business and event engagement. Our hybrid dashboard unifies all
                activities for complete customer journey visibility.
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
                🏢 Trade Show Booths
              </div>
              <p className="text-xs text-gray-400">
                Capture leads with NFC business cards and measure engagement
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">💒 Weddings</div>
              <p className="text-xs text-gray-400">
                Guest check-in with photo gallery and attendance tracking
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">🎓 Graduations</div>
              <p className="text-xs text-gray-400">
                Alumni engagement with business card follow-ups and reunions
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">🤝 Corporate Events</div>
              <p className="text-xs text-gray-400">
                Retreats combining team engagement with business development
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">🏠 HOA Meetings</div>
              <p className="text-xs text-gray-400">
                Community attendance tracking and engagement measurement
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
              <div className="mb-2 font-bold text-white">💰 Fundraisers</div>
              <p className="text-xs text-gray-400">
                Donor tracking with follow-up sequences and impact measurement
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
