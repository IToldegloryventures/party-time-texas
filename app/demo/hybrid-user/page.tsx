export default function HybridUserDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Hybrid User Dashboard
          </h1>
          <p className="text-lg text-gray-300">
            Unified analytics across business and event engagement activities
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Unified Overview */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Organization Dashboard
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-emerald-100">
                Total Engagements
              </div>
              <div className="text-4xl font-bold text-white">4,892</div>
              <div className="mt-3 text-xs text-emerald-200">
                Business + Events combined
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-indigo-100">
                Unique Contacts
              </div>
              <div className="text-4xl font-bold text-white">2,156</div>
              <div className="mt-3 text-xs text-indigo-200">
                Across all initiatives
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-rose-600 to-rose-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-rose-100">
                Conversion Rate
              </div>
              <div className="text-4xl font-bold text-white">38.4%</div>
              <div className="mt-3 text-xs text-rose-200">
                Engagement to action
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-amber-100">
                Est. Impact
              </div>
              <div className="text-4xl font-bold text-white">$28.3K</div>
              <div className="mt-3 text-xs text-amber-200">
                Combined business value
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Overview */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Active Use Cases
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-600"></div>
              <div className="p-6">
                <div className="mb-2 text-lg font-bold text-gray-900">
                  Corporate Retreat
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Hybrid engagement tracking for company offsite
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-gray-500">Attendees</div>
                    <div className="font-bold text-gray-900">240</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Check-ins</div>
                    <div className="font-bold text-gray-900">234</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Engagement</div>
                    <div className="font-bold text-gray-900">92%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-600"></div>
              <div className="p-6">
                <div className="mb-2 text-lg font-bold text-gray-900">
                  HOA Meeting
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Community engagement and decision tracking
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-gray-500">Members</div>
                    <div className="font-bold text-gray-900">156</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Present</div>
                    <div className="font-bold text-gray-900">142</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Participation</div>
                    <div className="font-bold text-gray-900">87%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-600"></div>
              <div className="p-6">
                <div className="mb-2 text-lg font-bold text-gray-900">
                  Fundraiser
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Donor tracking with business card follow-up
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-gray-500">Donors</div>
                    <div className="font-bold text-gray-900">89</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Pledges</div>
                    <div className="font-bold text-gray-900">$145K</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Follow-up</div>
                    <div className="font-bold text-gray-900">78%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-32 bg-gradient-to-br from-green-400 to-teal-600"></div>
              <div className="p-6">
                <div className="mb-2 text-lg font-bold text-gray-900">
                  School Event
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Graduation + alumni engagement integrated
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-gray-500">Attendees</div>
                    <div className="font-bold text-gray-900">523</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Alumni</div>
                    <div className="font-bold text-gray-900">187</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Registered</div>
                    <div className="font-bold text-gray-900">94%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-32 bg-gradient-to-br from-pink-400 to-rose-600"></div>
              <div className="p-6">
                <div className="mb-2 text-lg font-bold text-gray-900">
                  Trade Show Booth
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Lead capture with follow-up sequences
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-gray-500">Leads</div>
                    <div className="font-bold text-gray-900">1,247</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Qualified</div>
                    <div className="font-bold text-gray-900">412</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Quality</div>
                    <div className="font-bold text-gray-900">33%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-32 bg-gradient-to-br from-indigo-400 to-purple-600"></div>
              <div className="p-6">
                <div className="mb-2 text-lg font-bold text-gray-900">
                  Memorial Event
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Guest check-in with media compilation
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-gray-500">Guests</div>
                    <div className="font-bold text-gray-900">287</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Attended</div>
                    <div className="font-bold text-gray-900">267</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Photos</div>
                    <div className="font-bold text-gray-900">412</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Correlation */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Cross-Platform Data Correlation
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg">
              <div className="mb-6">
                <div className="mb-4 text-lg font-bold text-white">
                  Unified Customer Journey
                </div>
                <p className="mb-6 text-sm text-gray-300">
                  Track the same individual across business and event engagement
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start rounded-lg border-l-4 border-purple-600 bg-gray-700/50 p-4">
                  <div className="mr-4 text-2xl">📇</div>
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      John Smith taps business card
                    </div>
                    <div className="text-xs text-gray-400">
                      May 1, 2025 • Trade Show
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Event Tracked</div>
                </div>

                <div className="flex items-start rounded-lg border-l-4 border-blue-600 bg-gray-700/50 p-4">
                  <div className="mr-4 text-2xl">🔗</div>
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      Visits product landing page
                    </div>
                    <div className="text-xs text-gray-400">
                      May 1, 2025 • 2:35 PM • 3 min engagement
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Business Tracked</div>
                </div>

                <div className="flex items-start rounded-lg border-l-4 border-green-600 bg-gray-700/50 p-4">
                  <div className="mr-4 text-2xl">✉️</div>
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      Receives follow-up email
                    </div>
                    <div className="text-xs text-gray-400">
                      May 2, 2025 • 87% open rate
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Auto-Sequence</div>
                </div>

                <div className="flex items-start rounded-lg border-l-4 border-orange-600 bg-gray-700/50 p-4">
                  <div className="mr-4 text-2xl">🎟️</div>
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      Registers for corporate retreat
                    </div>
                    <div className="text-xs text-gray-400">
                      May 10, 2025 • Event Invitation
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Event Tracked</div>
                </div>

                <div className="flex items-start rounded-lg border-l-4 border-pink-600 bg-gray-700/50 p-4">
                  <div className="mr-4 text-2xl">📱</div>
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      Checks in at retreat with NFC badge
                    </div>
                    <div className="text-xs text-gray-400">
                      May 15, 2025 • 9:32 AM
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Hybrid Journey</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aggregated Insights */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Aggregated Insights by Segment
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-6 text-lg font-bold text-white">
                Business Engagement
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Total Scans</span>
                  <span className="font-bold text-white">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Landing Pages Visited</span>
                  <span className="font-bold text-white">2,103</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Conversion Rate</span>
                  <span className="font-bold text-green-400">34.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Est. Revenue</span>
                  <span className="font-bold text-white">$12.4K</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-6 text-lg font-bold text-white">
                Event Engagement
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Total Attendees</span>
                  <span className="font-bold text-white">2,045</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Check-ins</span>
                  <span className="font-bold text-white">1,876</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Average Stay</span>
                  <span className="font-bold text-white">3h 24m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Engagement Score</span>
                  <span className="font-bold text-blue-400">8.7/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Available */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Hybrid User Features
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Unified Dashboard
              </div>
              <p className="text-sm text-gray-300">
                Single platform for business cards, events, and all engagement
                types
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Cross-Platform Tracking
              </div>
              <p className="text-sm text-gray-300">
                Track individual customers across business and event activities
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Data Correlation
              </div>
              <p className="text-sm text-gray-300">
                Understand the complete journey and its impact on business
                outcomes
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Automated Workflows
              </div>
              <p className="text-sm text-gray-300">
                Trigger actions across both platforms based on engagement
                patterns
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Aggregated Analytics
              </div>
              <p className="text-sm text-gray-300">
                View combined insights and ROI across all business activities
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Role-Based Management
              </div>
              <p className="text-sm text-gray-300">
                Manage multiple initiatives with team members, each with
                specific permissions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
