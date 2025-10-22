import Link from 'next/link';

export default function SuperAdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Platform Administration</h1>
              <p className="text-sm text-gray-400">Role: Super Admin • Full Platform Access</p>
            </div>
            <div className="flex gap-2">
              <Link 
                href="/demo" 
                className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                ← Back to Demo Hub
              </Link>
              <span className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-semibold">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                System Healthy
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Platform Tabs */}
        <div className="mb-8 flex gap-2 border-b border-gray-800">
          <button className="border-b-2 border-blue-600 px-4 py-2 text-sm font-semibold text-white">Enterprise Plan</button>
          <button className="border-b-2 border-transparent px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-300">Role: Super Admin</button>
          <button className="border-b-2 border-transparent px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-300">📊 Platform Admin</button>
        </div>

        {/* Access Control Info */}
        <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <p className="text-sm text-gray-300">
            You have full platform access to manage all organizations, users, and system settings across the entire Cosmic Portals ecosystem.
          </p>
        </div>

        {/* Module Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">NFC Devices</p>
                <div className="mt-2 text-3xl font-bold text-white">247</div>
                <p className="text-xs text-gray-500">Across all orgs</p>
              </div>
              <div className="text-2xl">📱</div>
            </div>
            <button className="w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white hover:bg-blue-700">
              Manage Devices
            </button>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Events</p>
                <div className="mt-2 text-3xl font-bold text-white">47</div>
                <p className="text-xs text-gray-500">Platform total</p>
              </div>
              <div className="text-2xl">📅</div>
            </div>
            <button className="w-full rounded-lg bg-cyan-600 py-2 text-xs font-semibold text-white hover:bg-cyan-700">
              Manage Events
            </button>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Landing Pages</p>
                <div className="mt-2 text-3xl font-bold text-white">156</div>
                <p className="text-xs text-gray-500">All active</p>
              </div>
              <div className="text-2xl">🌐</div>
            </div>
            <button className="w-full rounded-lg bg-orange-600 py-2 text-xs font-semibold text-white hover:bg-orange-700">
              Manage Pages
            </button>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Analytics</p>
                <div className="mt-2 text-3xl font-bold text-white">2.4M</div>
                <p className="text-xs text-gray-500">Total scans</p>
              </div>
              <div className="text-2xl">📊</div>
            </div>
            <button className="w-full rounded-lg bg-green-600 py-2 text-xs font-semibold text-white hover:bg-green-700">
              View Analytics
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-4 text-sm font-semibold text-white">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              👥 Add NFC Device
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700">
              👤 Manage Team
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Organizations */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 lg:col-span-2">
            <h2 className="mb-4 text-sm font-semibold text-white">Manage Organizations</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-xs">
                <span className="font-semibold text-gray-500">ORGANIZATION</span>
                <span className="font-semibold text-gray-500">PLAN</span>
                <span className="font-semibold text-gray-500">USERS</span>
                <span className="font-semibold text-gray-500">STATUS</span>
              </div>
              {[
                { name: 'Acme Corp', plan: 'Enterprise', users: 24, status: 'Active' },
                { name: 'Tech Startup Inc', plan: 'Pro', users: 8, status: 'Active' },
                { name: 'Event Co', plan: 'Business', users: 5, status: 'Active' },
                { name: 'Marketing Agency', plan: 'Pro', users: 12, status: 'Active' },
                { name: 'Nonprofit Org', plan: 'Starter', users: 3, status: 'Inactive' },
              ].map((org, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-800 py-3 text-xs text-gray-400">
                  <span className="text-white font-medium">{org.name}</span>
                  <span>{org.plan}</span>
                  <span>{org.users} members</span>
                  <span className={org.status === 'Active' ? 'text-green-400' : 'text-gray-500'}>{org.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs text-gray-500">Monthly Revenue</p>
              <p className="mt-2 text-2xl font-bold text-white">$12,450</p>
              <p className="text-xs text-green-400">↑ 34% vs last month</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs text-gray-500">Growth Rate</p>
              <p className="mt-2 text-2xl font-bold text-white">+34%</p>
              <p className="text-xs text-green-400">↑ 8% improvement</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs text-gray-500">Active Users</p>
              <p className="mt-2 text-2xl font-bold text-white">156</p>
              <p className="text-xs text-green-400">↑ 98.5% uptime</p>
            </div>
          </div>
        </div>

        {/* Portal Type Breakdown */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Business Portals</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Total</span>
                <span className="text-blue-400 font-bold">24</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Active</span>
                <span className="text-green-400 font-bold">22</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Trial</span>
                <span className="text-yellow-400 font-bold">2</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Event Portals</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Total</span>
                <span className="text-purple-400 font-bold">18</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Active</span>
                <span className="text-green-400 font-bold">16</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Upcoming</span>
                <span className="text-blue-400 font-bold">2</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Guest Portals</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Total Photos</span>
                <span className="text-green-400 font-bold">2.1K</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Uploads Today</span>
                <span className="text-cyan-400 font-bold">43</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Avg. Rate</span>
                <span className="text-white font-bold">0.5/min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Super Admin Controls */}
        <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-4 text-sm font-semibold text-white">Super Admin Controls</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-900 px-4 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-800">
              👥 Manage All Customers
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-purple-700 bg-purple-900 px-4 py-2 text-xs font-semibold text-purple-300 hover:bg-purple-800">
              🌐 All Portal Analytics
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-green-700 bg-green-900 px-4 py-2 text-xs font-semibold text-green-300 hover:bg-green-800">
              💰 Revenue Reports
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-orange-700 bg-orange-900 px-4 py-2 text-xs font-semibold text-orange-300 hover:bg-orange-800">
              📊 System Analytics
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
              👁️ Impersonate User
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
              🔑 Reset Passwords
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
              📥 Export All Data
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
              🔍 Advanced Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
