import Link from 'next/link';

export default function MobileAppsAdminDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Mobile App - Admin</h1>
          <p className="text-base text-gray-400">Manage Your Business On-The-Go</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Complete Business Management from Any Device</h2>
          <p className="text-gray-300">Access your dashboard from iOS, Android, or web</p>
        </div>

        {/* Mobile App Mockup */}
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-md">
            {/* Phone Frame */}
            <div className="relative bg-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="bg-gray-900 px-6 py-2 flex justify-between items-center text-white text-xs font-semibold">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* App Content */}
              <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
                {/* Header */}
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-8">
                  <p className="text-xs text-pink-100 mb-1">Welcome Back</p>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>

                {/* Content */}
                <div className="px-4 py-6 space-y-4">
                  {/* KPIs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gray-800/50 border border-gray-700 p-4 text-center">
                      <p className="text-xs text-gray-400 mb-1">Today's Scans</p>
                      <p className="text-2xl font-bold text-pink-400">1,247</p>
                    </div>
                    <div className="rounded-lg bg-gray-800/50 border border-gray-700 p-4 text-center">
                      <p className="text-xs text-gray-400 mb-1">Conversion</p>
                      <p className="text-2xl font-bold text-blue-400">34.2%</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <p className="text-xs font-semibold text-gray-400 mb-3">QUICK ACTIONS</p>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="rounded bg-pink-600/20 text-pink-300 py-3 text-xs font-semibold hover:bg-pink-600/30">
                        📊 Analytics
                      </button>
                      <button className="rounded bg-pink-600/20 text-pink-300 py-3 text-xs font-semibold hover:bg-pink-600/30">
                        🏷️ Devices
                      </button>
                      <button className="rounded bg-pink-600/20 text-pink-300 py-3 text-xs font-semibold hover:bg-pink-600/30">
                        📋 Events
                      </button>
                    </div>
                  </div>

                  {/* Device Status */}
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <p className="text-xs font-semibold text-gray-400 mb-3">DEVICE STATUS</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">Main Entrance</span>
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">VIP Lounge</span>
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">Registration</span>
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 flex justify-around">
                    <button className="text-pink-400 text-2xl">🏠</button>
                    <button className="text-gray-400 text-2xl">📊</button>
                    <button className="text-gray-400 text-2xl">⚙️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-pink-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">📱</div>
            <h3 className="font-bold text-pink-300 mb-2">Real-Time Dashboard</h3>
            <p className="text-sm text-gray-400">View live metrics, device status, and analytics from anywhere</p>
          </div>
          <div className="rounded-lg border border-pink-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">🔔</div>
            <h3 className="font-bold text-pink-300 mb-2">Smart Alerts</h3>
            <p className="text-sm text-gray-400">Get notified of device issues, check-ins, and performance drops</p>
          </div>
          <div className="rounded-lg border border-pink-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">👥</div>
            <h3 className="font-bold text-pink-300 mb-2">Team Management</h3>
            <p className="text-sm text-gray-400">Assign tasks and collaborate with team members on-the-go</p>
          </div>
          <div className="rounded-lg border border-pink-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">⚡</div>
            <h3 className="font-bold text-pink-300 mb-2">Offline Access</h3>
            <p className="text-sm text-gray-400">Access cached data and stay productive without internet</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Home
          </Link>
          <Link href="/demo/mobile-apps-customer" className="rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
