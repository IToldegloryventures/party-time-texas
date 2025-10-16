import Link from 'next/link';

export default function MobileAppsCustomerDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Mobile App - Customer</h1>
          <p className="text-base text-gray-400">Discover Events & Engage</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Discover & Engage with Businesses Near You</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Find local events, receive location-based notifications, check-in with NFC, and enjoy personalized experiences.</p>
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Download Customer App
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-8">
              <div className="mb-4 text-3xl">🎯</div>
              <h4 className="mb-3 text-xl font-bold text-blue-300">Event Discovery</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Nearby events discovery</li>
                <li>✓ Location-based recommendations</li>
                <li>✓ Event details and schedules</li>
                <li>✓ Saved favorites</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
              <div className="mb-4 text-3xl">🔔</div>
              <h4 className="mb-3 text-xl font-bold text-cyan-300">Smart Notifications</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Geofenced push notifications</li>
                <li>✓ Personalized offers</li>
                <li>✓ Event reminders</li>
                <li>✓ Customizable alerts</li>
              </ul>
            </div>

            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-8">
              <div className="mb-4 text-3xl">📱</div>
              <h4 className="mb-3 text-xl font-bold text-indigo-300">NFC Check-In</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ One-tap NFC check-in</li>
                <li>✓ Check-in rewards</li>
                <li>✓ Loyalty programs</li>
                <li>✓ Digital tickets</li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
              <div className="mb-4 text-3xl">💳</div>
              <h4 className="mb-3 text-xl font-bold text-purple-300">Subscriptions & Rewards</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Business subscriptions</li>
                <li>✓ Loyalty points tracking</li>
                <li>✓ Exclusive member offers</li>
                <li>✓ Reward redemption</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400">Discover</div>
              <p className="text-gray-300">Local businesses and events</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-cyan-400">Engage</div>
              <p className="text-gray-300">With location-based experiences</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-indigo-400">60% Retention</div>
              <p className="text-gray-300">Increase through engagement</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-blue-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. Download from App Store/Play Store</li>
                  <li>2. Create account or sign in</li>
                  <li>3. Enable location services</li>
                  <li>4. Discover nearby events</li>
                  <li>5. Tap NFC devices to check-in</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-cyan-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ iOS 14+ and Android 10+</li>
                  <li>✓ Location permissions required</li>
                  <li>✓ NFC capability recommended</li>
                  <li>✓ 40MB app size</li>
                  <li>✓ Internet connection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Event Attendee</h4>
              <p className="text-sm text-gray-300">Discover nearby conferences, concerts, or networking events and check-in with NFC</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Loyalty Program Member</h4>
              <p className="text-sm text-gray-300">Receive location-based offers and track rewards at participating businesses</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Local Explorer</h4>
              <p className="text-sm text-gray-300">Find restaurants, retail stores, and services with exclusive check-in rewards</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/mobile-apps-admin" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Back to All Demos →
          </Link>
        </div>
      </div>
    </div>
  );
}
