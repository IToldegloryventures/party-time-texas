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
          <p className="text-gray-300">Find events, receive location-based offers, and check-in</p>
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
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-8">
                  <p className="text-xs text-blue-100 mb-1">📍 2.3 km away</p>
                  <h1 className="text-2xl font-bold">Discover</h1>
                </div>

                {/* Content */}
                <div className="px-4 py-6 space-y-4 pb-20">
                  {/* Nearby Events */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 mb-3">NEARBY EVENTS</p>
                    <div className="space-y-3">
                      {[
                        { name: 'Tech Conference 2024', distance: '0.5 km', attendees: '234 going', time: 'Today 10am', featured: true },
                        { name: 'Weekend Networking', distance: '1.2 km', attendees: '45 going', time: 'Tomorrow 6pm', featured: false },
                        { name: 'Local Coffee Night', distance: '2.1 km', attendees: '12 going', time: 'Sat 7pm', featured: false }
                      ].map((event, idx) => (
                        <div key={idx} className={`rounded-lg border p-4 hover:scale-105 transition-transform cursor-pointer ${
                          event.featured
                            ? 'border-blue-600/50 bg-gradient-to-r from-blue-900/30 to-cyan-900/30'
                            : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                        }`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-blue-300 text-sm">{event.name}</h3>
                            {event.featured && <span className="text-xs bg-blue-600/30 text-blue-300 px-2 py-1 rounded">Featured</span>}
                          </div>
                          <p className="text-xs text-gray-400 mb-1">📅 {event.time}</p>
                          <p className="text-xs text-gray-400 mb-2">📍 {event.distance} • 👥 {event.attendees}</p>
                          <button className="w-full rounded bg-blue-600/20 text-blue-300 py-2 text-xs font-semibold hover:bg-blue-600/30">
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Loyalty Offers */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold text-gray-400 mb-3">SPECIAL OFFERS</p>
                    <div className="rounded-lg border border-cyan-900/50 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-4">
                      <div className="mb-3 text-2xl">🎁</div>
                      <p className="text-sm font-bold text-cyan-300 mb-1">Limited Time Offer</p>
                      <p className="text-xs text-gray-400 mb-3">Get 20% off at local restaurants</p>
                      <button className="w-full rounded bg-cyan-600 text-white py-2 text-xs font-semibold hover:bg-cyan-700">
                        Claim Offer
                      </button>
                    </div>
                  </div>

                  {/* Check-in Section */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold text-gray-400 mb-3">QUICK CHECK-IN</p>
                    <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-center">
                      <div className="text-4xl mb-3">📱</div>
                      <p className="text-sm text-gray-300 mb-4">Tap an NFC device to check-in</p>
                      <button className="w-full rounded-lg bg-blue-600 text-white py-3 text-sm font-semibold hover:bg-blue-700">
                        Ready to Scan
                      </button>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 flex justify-around">
                    <button className="text-blue-400 text-2xl">🎯</button>
                    <button className="text-gray-400 text-2xl">⭐</button>
                    <button className="text-gray-400 text-2xl">👤</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-blue-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">🎯</div>
            <h3 className="font-bold text-blue-300 mb-2">Event Discovery</h3>
            <p className="text-sm text-gray-400">Find nearby events with location-based recommendations</p>
          </div>
          <div className="rounded-lg border border-blue-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">🔔</div>
            <h3 className="font-bold text-blue-300 mb-2">Smart Notifications</h3>
            <p className="text-sm text-gray-400">Receive geofenced offers and event reminders</p>
          </div>
          <div className="rounded-lg border border-blue-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">📱</div>
            <h3 className="font-bold text-blue-300 mb-2">NFC Check-In</h3>
            <p className="text-sm text-gray-400">One-tap check-in and instant rewards</p>
          </div>
          <div className="rounded-lg border border-blue-900/50 bg-gray-900/50 p-6">
            <div className="mb-3 text-2xl">💳</div>
            <h3 className="font-bold text-blue-300 mb-2">Loyalty Program</h3>
            <p className="text-sm text-gray-400">Track points and redeem exclusive rewards</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demo/mobile-apps-admin" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Back to All Demos →
          </Link>
        </div>
      </div>
    </div>
  );
}
