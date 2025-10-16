import Link from 'next/link';

export default function MobileAppsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Mobile Apps</h1>
          <p className="text-base text-gray-400">Admin & Customer Experience</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Powerful Mobile Apps for Every User Type</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Manage your business on-the-go with admin apps, and engage customers with location-based experiences.</p>
          <button className="rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Download Apps
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-8">
              <div className="mb-4 text-3xl">📱</div>
              <h4 className="mb-3 text-xl font-bold text-pink-300">Admin Mobile App</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Dashboard access on mobile</li>
                <li>✓ NFC device management</li>
                <li>✓ Real-time analytics</li>
                <li>✓ Team collaboration</li>
              </ul>
            </div>

            <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 p-8">
              <div className="mb-4 text-3xl">🛍️</div>
              <h4 className="mb-3 text-xl font-bold text-rose-300">Customer Mobile App</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Nearby events discovery</li>
                <li>✓ Push notifications</li>
                <li>✓ Business subscriptions</li>
                <li>✓ Event check-in</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-8">
              <div className="mb-4 text-3xl">📍</div>
              <h4 className="mb-3 text-xl font-bold text-red-300">Location-Based Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Geofenced notifications</li>
                <li>✓ Check-in rewards</li>
                <li>✓ Venue optimization</li>
                <li>✓ Travel recommendations</li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-8">
              <div className="mb-4 text-3xl">⚡</div>
              <h4 className="mb-3 text-xl font-bold text-orange-300">Offline Capabilities</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Cached data access</li>
                <li>✓ Offline functionality</li>
                <li>✓ Sync when online</li>
                <li>✓ Progressive web app</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-pink-900/30 to-rose-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-pink-400">Anywhere</div>
              <p className="text-gray-300">Manage your business from anywhere</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-rose-400">Engagement</div>
              <p className="text-gray-300">Location-based customer experiences</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-red-400">60%</div>
              <p className="text-gray-300">Customer retention increase</p>
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
                  <li>1. Download app from store</li>
                  <li>2. Log in with account</li>
                  <li>3. Enable location services</li>
                  <li>4. Receive location alerts</li>
                  <li>5. Tap NFC for engagement</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-rose-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ iOS 14+ and Android 10+</li>
                  <li>✓ Location permissions required</li>
                  <li>✓ NFC capability on device</li>
                  <li>✓ Internet connection recommended</li>
                  <li>✓ 50MB app size</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Multi-Location Management</h4>
              <p className="text-sm text-gray-300">Admins manage events and devices across multiple locations in real-time</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Customer Engagement</h4>
              <p className="text-sm text-gray-300">Customers discover nearby events and receive location-based notifications</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Field Operations</h4>
              <p className="text-sm text-gray-300">On-site teams check device status and process real-time check-ins</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/white-label" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Back to All Demos ��
          </Link>
        </div>
      </div>
    </div>
  );
}
