import Link from 'next/link';

export default function MobileAppClientDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-indigo-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Mobile App — Client
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Manage location marketing from any device. Real-time scan activity, device status alerts, quick access to analytics, designed for brand managers and ops teams.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Powerful Mobile Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-indigo-600/50 transition">
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Scan Activity</h3>
              <p className="text-gray-300 text-sm mb-4">Monitor NFC scans as they happen across all zones. Live dashboard with counts, conversion rates, and engagement metrics.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Live scan counter per device/region</li>
                <li>✓ Hourly & daily trends</li>
                <li>✓ Top-performing zones pinned</li>
                <li>✓ Push notifications for milestones</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-indigo-600/50 transition">
              <h3 className="text-xl font-bold text-white mb-3">Device Status Alerts</h3>
              <p className="text-gray-300 text-sm mb-4">Stay informed with real-time device health monitoring. Get alerts for battery low, offline devices, or unusual activity patterns.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Battery level warnings</li>
                <li>✓ Connectivity status</li>
                <li>✓ Performance anomalies</li>
                <li>✓ Maintenance reminders</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-indigo-600/50 transition">
              <h3 className="text-xl font-bold text-white mb-3">Quick Access Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">View KPIs in seconds. Conversion rates, revenue attribution, top zones, and trend comparisons at your fingertips.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ One-tap KPI dashboard</li>
                <li>✓ Conversion funnel visual</li>
                <li>✓ Zone performance rankings</li>
                <li>✓ Export reports on-the-go</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 hover:border-indigo-600/50 transition">
              <h3 className="text-xl font-bold text-white mb-3">Campaign &amp; Event Dashboards</h3>
              <p className="text-gray-300 text-sm mb-4">Manage active campaigns and events from the app. Launch social posts, update landing pages, and track performance in real-time.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Scheduled post status</li>
                <li>✓ Campaign performance</li>
                <li>✓ Quick launch/pause options</li>
                <li>✓ Region-specific views</li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Interface Preview */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">App Interface Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Home Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-4">
                <p className="text-xs font-semibold text-gray-400">Home Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-3">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto"></div>
                  <div className="h-8 bg-indigo-600/30 rounded border border-indigo-600/50"></div>
                  <div className="h-6 bg-gray-700 rounded"></div>
                  <div className="h-6 bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Real-time dashboard, KPIs, alerts</p>
            </div>

            {/* Analytics Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-4">
                <p className="text-xs font-semibold text-gray-400">Analytics Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-2">
                  <div className="h-3 bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
                  <div className="h-3 bg-green-600 rounded-full" style={{ width: '65%' }}></div>
                  <div className="h-3 bg-orange-600 rounded-full" style={{ width: '50%' }}></div>
                  <div className="h-3 bg-purple-600 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Conversions, trends, regions</p>
            </div>

            {/* Devices Screen */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-4 aspect-square flex flex-col">
              <div className="text-center mb-4">
                <p className="text-xs font-semibold text-gray-400">Devices Screen</p>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-gray-700 flex flex-col items-start justify-center p-3 space-y-2">
                <div className="text-4xl mb-1">🟢</div>
                <div className="h-2 bg-green-600 rounded w-12"></div>
                <div className="h-2 bg-green-600 rounded w-10"></div>
                <div className="h-2 bg-yellow-600 rounded w-8"></div>
                <div className="h-2 bg-red-600 rounded w-6"></div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Status, battery, connectivity</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Designed for Brand Managers &amp; Operations Teams</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 border border-indigo-700/50">
              <div className="text-3xl mb-4">👔</div>
              <h4 className="font-bold text-indigo-300 mb-4">Brand Managers</h4>
              <ul className="text-sm text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span>Monitor campaign performance from anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span>Get alerts on underperforming zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span>Quick adjust budgets by region</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span>Share KPIs with stakeholders via app</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-orange-950/50 to-orange-900/20 border border-orange-700/50">
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="font-bold text-orange-300 mb-4">Operations Teams</h4>
              <ul className="text-sm text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">→</span>
                  <span>Dispatch field teams with real-time data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">→</span>
                  <span>Monitor device health in all locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">→</span>
                  <span>Get maintenance alerts before failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">→</span>
                  <span>Track deployment progress on-the-go</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Filter View by Region or Campaign</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-300 mb-3">Region Filter</p>
              <div className="flex flex-wrap gap-2">
                {['Downtown Dallas', 'Plano East', 'Uptown Dallas', 'Fort Worth', 'Arlington', 'Frisco', 'All Regions'].map((region) => (
                  <button
                    key={region}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition border ${
                      region === 'Downtown Dallas'
                        ? 'bg-indigo-600/20 text-indigo-300 border-indigo-600/50'
                        : 'bg-gray-700/20 text-gray-300 border-gray-600/50 hover:border-gray-500'
                    }`}
                  >
                    📍 {region}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-300 mb-3">Active Campaign Filter</p>
              <div className="flex flex-wrap gap-2">
                {['Dallas Summer Sale', 'Plano Tech Event', 'Uptown Premium', 'All Campaigns'].map((campaign) => (
                  <button
                    key={campaign}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition border ${
                      campaign === 'Dallas Summer Sale'
                        ? 'bg-indigo-600/20 text-indigo-300 border-indigo-600/50'
                        : 'bg-gray-700/20 text-gray-300 border-gray-600/50 hover:border-gray-500'
                    }`}
                  >
                    📅 {campaign}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg border border-indigo-700/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 text-center">
            <p className="text-4xl font-bold text-indigo-400 mb-2">2.4M</p>
            <p className="text-sm text-gray-400">Scans tracked live</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">14.9%</p>
            <p className="text-sm text-gray-400">Avg conversion visible</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">47</p>
            <p className="text-sm text-gray-400">Devices at a glance</p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 text-center">
            <p className="text-4xl font-bold text-purple-400 mb-2">99.1%</p>
            <p className="text-sm text-gray-400">Uptime average</p>
          </div>
        </div>

        {/* Download Info */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Download the App</h3>
          <p className="text-gray-300 mb-6">Available on iOS and Android. Manage your NFC marketing campaigns from your pocket.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="rounded-lg bg-black border border-gray-600 px-6 py-3 text-white font-semibold hover:border-gray-500 transition">
              🍎 App Store
            </button>
            <button className="rounded-lg bg-black border border-gray-600 px-6 py-3 text-white font-semibold hover:border-gray-500 transition">
              🔵 Google Play
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/mobile-app-customer" className="rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: Mobile App - Customer →
          </Link>
        </div>
      </div>
    </div>
  );
}
