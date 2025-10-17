import Link from 'next/link';

export default function MobileAppCustomerDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-teal-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Mobile App — Customer
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Discover offers and events based on your real-world location. Nearby event discovery, claim local offers, real-time RSVP, push notifications, and geo-filtered deals.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Discover Local, Tap to Engage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-teal-600/50 transition">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-white mb-3">Nearby Event Discovery</h3>
              <p className="text-gray-300 text-sm mb-4">Find events happening near you by zone. See Deep Ellum Night Market, Plano Tech Expo, Dallas Arts Festival, and more based on location.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Location-aware event feed</li>
                <li>✓ Distance & time filters</li>
                <li>✓ Event details & directions</li>
                <li>✓ Share events with friends</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-teal-600/50 transition">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-white mb-3">Claim Local Offers</h3>
              <p className="text-gray-300 text-sm mb-4">Tap an NFC tag to unlock exclusive deals. Get percentage discounts, free items, loyalty points — all from nearby businesses.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ One-tap claim process</li>
                <li>✓ Digital coupon wallet</li>
                <li>✓ Expiration tracking</li>
                <li>✓ Auto-apply at checkout</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-teal-600/50 transition">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time RSVP &amp; Check-In</h3>
              <p className="text-gray-300 text-sm mb-4">RSVP to events with one tap. Check in via NFC scan. Skip lines and get instant event updates and notifications.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Quick RSVP confirmation</li>
                <li>✓ Tap-to-check-in at venues</li>
                <li>✓ Real-time attendance tracking</li>
                <li>✓ VIP perks & badges</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-teal-600/50 transition">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-white mb-3">Proximity Notifications</h3>
              <p className="text-gray-300 text-sm mb-4">Get push notifications triggered when you enter a zone or approach an event. Stay in the loop with timely alerts and recommendations.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Location-triggered alerts</li>
                <li>✓ Event reminders</li>
                <li>✓ Flash sale notifications</li>
                <li>✓ Friend check-in alerts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Interface Preview */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">App Interface Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Discover Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-3">
                <p className="text-xs font-semibold text-gray-400">Discover Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-2">
                  <div className="h-2 bg-teal-600 rounded" style={{ width: '90%' }}></div>
                  <div className="h-2 bg-cyan-600 rounded" style={{ width: '75%' }}></div>
                  <div className="h-2 bg-teal-600 rounded" style={{ width: '60%' }}></div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Nearby events & deals</p>
            </div>

            {/* Offers Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-3">
                <p className="text-xs font-semibold text-gray-400">Offers Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-orange-900/20 to-pink-900/20 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-2">
                  <div className="h-4 bg-orange-600 rounded-lg flex items-center px-2">
                    <span className="text-xs text-white font-bold">25% OFF</span>
                  </div>
                  <div className="h-4 bg-pink-600 rounded-lg flex items-center px-2">
                    <span className="text-xs text-white font-bold">FREE ITEM</span>
                  </div>
                  <div className="h-4 bg-orange-600 rounded-lg flex items-center px-2">
                    <span className="text-xs text-white font-bold">$10 OFF</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Claimed & saved coupons</p>
            </div>

            {/* Events Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-3">
                <p className="text-xs font-semibold text-gray-400">Events Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-2 text-center">
                  <div className="h-2 bg-purple-600 rounded w-full"></div>
                  <div className="h-2 bg-pink-600 rounded w-4/5 mx-auto"></div>
                  <div className="h-2 bg-purple-600 rounded w-3/4 mx-auto"></div>
                  <div className="text-xs text-gray-400 mt-2">3 events today</div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">My events & RSVPs</p>
            </div>

            {/* Wallet Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-3">
                <p className="text-xs font-semibold text-gray-400">Wallet Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-2">
                  <div className="h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
                  <div className="h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded opacity-70"></div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Loyalty &amp; rewards</p>
            </div>
          </div>
        </div>

        {/* Use Cases by Zone */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Real North DFW Zone Examples</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-white text-lg">Deep Ellum Arts District</p>
                  <p className="text-sm text-gray-400">Dallas's vibrant arts & culture zone</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">Users in Deep Ellum see: local gallery events, street art festival tickets, artist pop-up stores. One tap to RSVP, another to claim discounts at participating venues.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-white text-lg">Plano Tech Corridor</p>
                  <p className="text-sm text-gray-400">Innovation hub with corporate events</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">Tech professionals get alerts for startup pitch nights, networking events, exclusive lunch deals at corporate cafes. Quick check-in at events earns loyalty points.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-white text-lg">Fort Worth Downtown</p>
                  <p className="text-sm text-gray-400">Retail & dining destination</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">Shoppers discover flash sales, happy hour deals, new restaurant openings. NFC tags in store windows reveal instant discounts. Tap to claim and shop.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-white text-lg">Dallas Farmers Market</p>
                  <p className="text-sm text-gray-400">Community gathering & local vendors</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">Market attendees get notified of vendor specials, cooking demos, live entertainment. Tap at vendor booths to unlock deals and build loyalty rewards.</p>
            </div>
          </div>
        </div>

        {/* Engagement Features */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Engagement &amp; Gamification</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-teal-950/50 to-teal-900/20 border border-teal-700/50">
              <h4 className="font-bold text-teal-300 mb-3">Event Badges</h4>
              <p className="text-sm text-gray-300">Unlock badges by attending events. Collect "Art Lover," "Foodie," "Tech Enthusiast," and more. Display badges on your profile.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 border border-cyan-700/50">
              <h4 className="font-bold text-cyan-300 mb-3">Loyalty Points</h4>
              <p className="text-sm text-gray-300">Earn points for every purchase, RSVP, or check-in. Redeem for exclusive perks, free items, or partner rewards.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-950/50 to-purple-900/20 border border-purple-700/50">
              <h4 className="font-bold text-purple-300 mb-3">Referral Rewards</h4>
              <p className="text-sm text-gray-300">Invite friends to events or offer shares. Both get bonus points. Build your network and unlock VIP status.</p>
            </div>
          </div>
        </div>

        {/* Geo-Filtered Calendar */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Geo-Filtered Event Calendar</h3>
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <p className="text-sm text-gray-400 mb-4">Swipe between your location zones to see what's happening</p>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-teal-600/50 transition cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-white">Deep Ellum Night Market</p>
                    <p className="text-xs text-gray-400 mt-1">📍 2.3 km away • Today 6 PM - Midnight</p>
                  </div>
                  <button className="rounded-lg bg-teal-600/20 text-teal-300 px-3 py-1 text-xs font-semibold hover:bg-teal-600/30">RSVP</button>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-teal-600/50 transition cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-white">Uptown Wine Tasting</p>
                    <p className="text-xs text-gray-400 mt-1">📍 4.1 km away • Tomorrow 7 PM</p>
                  </div>
                  <button className="rounded-lg bg-teal-600/20 text-teal-300 px-3 py-1 text-xs font-semibold hover:bg-teal-600/30">RSVP</button>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-teal-600/50 transition cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-white">Dallas Tech Meetup</p>
                    <p className="text-xs text-gray-400 mt-1">📍 Plano • Aug 20 6 PM</p>
                  </div>
                  <button className="rounded-lg bg-teal-600/20 text-teal-300 px-3 py-1 text-xs font-semibold hover:bg-teal-600/30">RSVP</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Download Now</h3>
          <p className="text-gray-300 mb-6">Discover local events, claim exclusive offers, and tap into the full North DFW experience.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="rounded-lg bg-black border border-gray-600 px-6 py-3 text-white font-semibold hover:border-gray-500 transition">
              App Store
            </button>
            <button className="rounded-lg bg-black border border-gray-600 px-6 py-3 text-white font-semibold hover:border-gray-500 transition">
              Google Play
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/white-label" className="rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: White-Label Customization →
          </Link>
        </div>
      </div>
    </div>
  );
}
