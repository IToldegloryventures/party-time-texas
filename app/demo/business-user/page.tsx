export default function BusinessUserDashboard() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-sm text-gray-400">Welcome back, Sarah Chen • Admin</p>
            </div>
            <div className="flex gap-4">
              <button className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                + Create
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Module Cards Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* NFC Devices */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">NFC Devices</p>
                <div className="mt-2 text-3xl font-bold text-white">24</div>
                <p className="text-xs text-gray-500">3 inactive</p>
              </div>
              <div className="text-2xl">📱</div>
            </div>
            <button className="w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white hover:bg-blue-700">
              Manage Devices (0)
            </button>
          </div>

          {/* Events */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Events</p>
                <div className="mt-2 text-3xl font-bold text-white">8</div>
                <p className="text-xs text-gray-500">0 total attendees</p>
              </div>
              <div className="text-2xl">📅</div>
            </div>
            <button className="w-full rounded-lg bg-cyan-600 py-2 text-xs font-semibold text-white hover:bg-cyan-700">
              Manage Events (0)
            </button>
          </div>

          {/* Landing Pages */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Landing Pages</p>
                <div className="mt-2 text-3xl font-bold text-white">12</div>
                <p className="text-xs text-gray-500">All active</p>
              </div>
              <div className="text-2xl">🌐</div>
            </div>
            <button className="w-full rounded-lg bg-orange-600 py-2 text-xs font-semibold text-white hover:bg-orange-700">
              Manage Landing Pages
            </button>
          </div>

          {/* Analytics */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Analytics</p>
                <div className="mt-2 text-3xl font-bold text-white">2,847</div>
                <p className="text-xs text-gray-500">NFC scans total</p>
              </div>
              <div className="text-2xl">📊</div>
            </div>
            <button className="w-full rounded-lg bg-green-600 py-2 text-xs font-semibold text-white hover:bg-green-700">
              View Analytics (0)
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-4 text-sm font-semibold text-white">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              📱 Add NFC Device
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              👥 Manage Team
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              📊 View Reports
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              🎨 Customize
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              ⚙️ Settings
            </button>
          </div>
        </div>

        {/* Recent Activity & Stats */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent NFC Devices */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 lg:col-span-2">
            <h2 className="mb-4 text-sm font-semibold text-white">Recent Devices</h2>
            <div className="space-y-3">
              {[
                { name: 'Business Card - Batch #12', status: 'Active', scans: 847 },
                { name: 'Trade Show Badge', status: 'Active', scans: 542 },
                { name: 'Event Signage', status: 'Inactive', scans: 234 },
              ].map((device, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="text-sm font-medium text-white">{device.name}</p>
                    <p className="text-xs text-gray-500">{device.scans} scans</p>
                  </div>
                  <span className={`text-xs font-semibold ${device.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {device.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs text-gray-500">Monthly Scans</p>
              <p className="mt-2 text-2xl font-bold text-white">12,487</p>
              <p className="text-xs text-green-400">↑ 23% vs last month</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs text-gray-500">Conversion Rate</p>
              <p className="mt-2 text-2xl font-bold text-white">34.2%</p>
              <p className="text-xs text-green-400">↑ 5% vs last month</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs text-gray-500">Active Users</p>
              <p className="mt-2 text-2xl font-bold text-white">1,247</p>
              <p className="text-xs text-green-400">↑ 12% vs last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
