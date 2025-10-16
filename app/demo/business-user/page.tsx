export default function BusinessUserPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header with User Context */}
      <div className="border-b border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Central Dashboard</h1>
            <p className="text-sm text-gray-400">Organization: Acme Corp • Role: Admin</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-300">Active Sessions: 12</div>
            <div className="text-xs text-gray-500">Last sync: 2 min ago</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Feature Modules Grid */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Platform Features</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Landing Page Builder */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Landing Page Builder</h3>
                <div className="text-2xl">🎨</div>
              </div>
              <p className="mb-4 text-sm text-purple-100">
                Create branded landing pages with UTM tracking and cookie monitoring
              </p>
              <div className="space-y-2 border-t border-purple-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-purple-200">Active Pages:</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-purple-200">Total Visits:</span>
                  <span className="font-bold text-white">12,847</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-purple-200">Conversion Rate:</span>
                  <span className="font-bold text-green-300">34.2%</span>
                </div>
              </div>
            </div>

            {/* Event Manager */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-pink-600 to-pink-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Event Manager</h3>
                <div className="text-2xl">📅</div>
              </div>
              <p className="mb-4 text-sm text-pink-100">
                Manage events, RSVPs, attendees, and real-time check-ins
              </p>
              <div className="space-y-2 border-t border-pink-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-pink-200">Upcoming Events:</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-pink-200">Total Registered:</span>
                  <span className="font-bold text-white">2,143</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-pink-200">Checked In Today:</span>
                  <span className="font-bold text-green-300">487</span>
                </div>
              </div>
            </div>

            {/* NFC Device Manager */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">NFC Device Manager</h3>
                <div className="text-2xl">📱</div>
              </div>
              <p className="mb-4 text-sm text-cyan-100">
                Configure, provision, and monitor NFC hardware across all touchpoints
              </p>
              <div className="space-y-2 border-t border-cyan-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-cyan-200">Active Devices:</span>
                  <span className="font-bold text-white">24</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-cyan-200">Scans (Today):</span>
                  <span className="font-bold text-white">8,942</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-cyan-200">Health Status:</span>
                  <span className="font-bold text-green-300">100%</span>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-green-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Analytics Dashboard</h3>
                <div className="text-2xl">📊</div>
              </div>
              <p className="mb-4 text-sm text-green-100">
                Track scans, conversions, heatmaps, geo-clustering, and visitor profiling
              </p>
              <div className="space-y-2 border-t border-green-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-green-200">Unique Visitors:</span>
                  <span className="font-bold text-white">3,421</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-green-200">Avg. Time on Page:</span>
                  <span className="font-bold text-white">3m 42s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-green-200">Return Visitors:</span>
                  <span className="font-bold text-blue-300">42%</span>
                </div>
              </div>
            </div>

            {/* Team & Roles */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-orange-600 to-orange-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Team & Roles</h3>
                <div className="text-2xl">👥</div>
              </div>
              <p className="mb-4 text-sm text-orange-100">
                Manage team members with 5-tier RBAC: Super Admin, Owner, Admin, Member, Guest
              </p>
              <div className="space-y-2 border-t border-orange-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-orange-200">Team Members:</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-orange-200">Active Permissions:</span>
                  <span className="font-bold text-white">48</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-orange-200">Audit Logs:</span>
                  <span className="font-bold text-white">847</span>
                </div>
              </div>
            </div>

            {/* Task Manager */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-red-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Task Manager</h3>
                <div className="text-2xl">✅</div>
              </div>
              <p className="mb-4 text-sm text-red-100">
                Automated workflows and task tracking for campaigns and events
              </p>
              <div className="space-y-2 border-t border-red-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-red-200">Active Tasks:</span>
                  <span className="font-bold text-white">23</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-red-200">Completed:</span>
                  <span className="font-bold text-green-300">156</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-red-200">Pending:</span>
                  <span className="font-bold text-yellow-300">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Organization Metrics</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <div className="text-sm text-gray-400">Total NFC Scans</div>
              <div className="mt-2 text-4xl font-bold text-purple-400">247,892</div>
              <div className="mt-2 text-xs text-gray-500">↑ 12% from last month</div>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <div className="text-sm text-gray-400">Active Users</div>
              <div className="mt-2 text-4xl font-bold text-cyan-400">1,247</div>
              <div className="mt-2 text-xs text-gray-500">↑ 8% from last month</div>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <div className="text-sm text-gray-400">Events</div>
              <div className="mt-2 text-4xl font-bold text-pink-400">12</div>
              <div className="mt-2 text-xs text-gray-500">3 upcoming</div>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <div className="text-sm text-gray-400">Subscription Status</div>
              <div className="mt-2 text-2xl font-bold text-green-400">Pro Plan</div>
              <div className="mt-2 text-xs text-gray-500">Renews in 23 days</div>
            </div>
          </div>
        </div>

        {/* Data Flow & Architecture Info */}
        <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-bold text-white">Platform Architecture Overview</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-2 border-purple-500 pl-3">
              <div className="text-xs font-semibold text-purple-300">Auth & Session</div>
              <p className="mt-1 text-xs text-gray-300">Clerk + Session Fingerprinting</p>
            </div>
            <div className="border-l-2 border-cyan-500 pl-3">
              <div className="text-xs font-semibold text-cyan-300">Data Layer</div>
              <p className="mt-1 text-xs text-gray-300">Supabase + RLS Policies</p>
            </div>
            <div className="border-l-2 border-green-500 pl-3">
              <div className="text-xs font-semibold text-green-300">Tracking</div>
              <p className="mt-1 text-xs text-gray-300">NFC + UTM + Cookies</p>
            </div>
            <div className="border-l-2 border-yellow-500 pl-3">
              <div className="text-xs font-semibold text-yellow-300">AI Agents</div>
              <p className="mt-1 text-xs text-gray-300">Gemini + Behavior Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
