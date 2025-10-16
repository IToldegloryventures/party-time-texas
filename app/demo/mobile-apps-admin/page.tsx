import Link from 'next/link';

export default function MobileAppsAdminDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Mobile Apps - Admin</h1>
          <p className="text-base text-gray-400">Manage Your Business On-The-Go</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Complete Business Management from Any Device</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Access your dashboard, monitor devices, manage events, and track analytics in real-time from your mobile phone.</p>
          <button className="rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Download Admin App
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-8">
              <div className="mb-4 text-3xl">📱</div>
              <h4 className="mb-3 text-xl font-bold text-pink-300">Dashboard Access</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Full dashboard on mobile</li>
                <li>✓ Real-time metrics display</li>
                <li>✓ Responsive design</li>
                <li>✓ Offline data caching</li>
              </ul>
            </div>

            <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 p-8">
              <div className="mb-4 text-3xl">🏷️</div>
              <h4 className="mb-3 text-xl font-bold text-rose-300">NFC Device Control</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Device status monitoring</li>
                <li>✓ Batch device updates</li>
                <li>✓ Real-time scan tracking</li>
                <li>✓ Performance alerts</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-8">
              <div className="mb-4 text-3xl">📊</div>
              <h4 className="mb-3 text-xl font-bold text-red-300">Real-Time Analytics</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Live engagement metrics</li>
                <li>✓ Conversion rate tracking</li>
                <li>✓ Revenue attribution</li>
                <li>✓ Charts and visualizations</li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-8">
              <div className="mb-4 text-3xl">📋</div>
              <h4 className="mb-3 text-xl font-bold text-orange-300">Event Management</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Create and edit events</li>
                <li>✓ Check-in station control</li>
                <li>✓ Attendee tracking</li>
                <li>✓ Team assignments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-pink-900/30 to-rose-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-pink-400">Anywhere</div>
              <p className="text-gray-300">Manage business from anywhere</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-rose-400">Real-Time</div>
              <p className="text-gray-300">Live insights and control</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-red-400">Faster</div>
              <p className="text-gray-300">Decision making on-the-go</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-pink-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. Download from App Store/Play Store</li>
                  <li>2. Log in with admin credentials</li>
                  <li>3. View dashboard on mobile</li>
                  <li>4. Monitor devices and analytics</li>
                  <li>5. Make real-time adjustments</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-rose-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ iOS 14+ and Android 10+</li>
                  <li>✓ Admin account required</li>
                  <li>✓ Internet connection recommended</li>
                  <li>✓ 45MB app size</li>
                  <li>✓ Touch ID/Face ID support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Multi-Location Manager</h4>
              <p className="text-sm text-gray-300">Monitor and manage events across multiple locations simultaneously</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">On-Site Event Director</h4>
              <p className="text-sm text-gray-300">Control check-in stations and track attendees in real-time during events</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Remote Team Lead</h4>
              <p className="text-sm text-gray-300">Monitor team activity, device performance, and campaign metrics remotely</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Back to Demos
          </Link>
          <Link href="/demo/mobile-apps-customer" className="rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
