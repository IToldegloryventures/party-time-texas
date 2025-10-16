import Link from 'next/link';

export default function GeoMarketingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Geo-Marketing Intelligence</h1>
          <p className="text-base text-gray-400">Location-Based Insights</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Turn Location Data into Marketing Gold</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Track customer movement patterns, optimize venue placement, and drive strategic marketing decisions.</p>
          <button className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Explore Geo-Marketing
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
              <div className="mb-4 text-3xl">🗺️</div>
              <h4 className="mb-3 text-xl font-bold text-purple-300">Location Heatmaps</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Venue traffic visualization</li>
                <li>✓ High-traffic area identification</li>
                <li>✓ Bottleneck analysis</li>
                <li>✓ Real-time density mapping</li>
              </ul>
            </div>

            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-8">
              <div className="mb-4 text-3xl">👥</div>
              <h4 className="mb-3 text-xl font-bold text-pink-300">User Movement Tracking</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Station-to-station flow patterns</li>
                <li>✓ Dwell time analysis</li>
                <li>✓ Engagement hotspots</li>
                <li>✓ Customer journey mapping</li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-8">
              <div className="mb-4 text-3xl">📊</div>
              <h4 className="mb-3 text-xl font-bold text-orange-300">Geographic Insights</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Station performance comparison</li>
                <li>✓ Location optimization recommendations</li>
                <li>✓ Traffic pattern analysis</li>
                <li>✓ Competitive location scoring</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
              <div className="mb-4 text-3xl">💡</div>
              <h4 className="mb-3 text-xl font-bold text-cyan-300">Strategic Recommendations</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Optimal placement suggestions</li>
                <li>✓ Peak time identification</li>
                <li>✓ Resource allocation insights</li>
                <li>✓ ROI optimization strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-purple-400">45%</div>
              <p className="text-gray-300">Engagement increase with strategic placement</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-pink-400">30%</div>
              <p className="text-gray-300">Wait time reduction through optimization</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-orange-400">Data-Driven</div>
              <p className="text-gray-300">Marketing decisions</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-purple-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. NFC devices collect location data</li>
                  <li>2. System aggregates scan patterns</li>
                  <li>3. Heatmaps generated in real-time</li>
                  <li>4. AI analyzes movement flows</li>
                  <li>5. Strategic recommendations provided</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-pink-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Multiple NFC stations required</li>
                  <li>✓ Subscription tier: Enterprise</li>
                  <li>✓ Minimum 1000 scans/month</li>
                  <li>✓ Dashboard access included</li>
                  <li>✓ 90-day historical data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Retail Optimization</h4>
              <p className="text-sm text-gray-300">Optimize store layout based on customer traffic patterns and dwell times</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Event Planning</h4>
              <p className="text-sm text-gray-300">Place check-in stations strategically to reduce bottlenecks</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Venue Management</h4>
              <p className="text-sm text-gray-300">Identify peak times and allocate resources efficiently</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/landing-page-builder" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
