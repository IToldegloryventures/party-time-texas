import Link from 'next/link';

export default function GeoMarketingDemo() {
  const locations = [
    {
      name: 'Downtown Dallas',
      lat: 32.7767,
      lng: -96.797,
      conversion: 18.4,
      customers: 12400,
      status: 'hot',
    },
    {
      name: 'Uptown Dallas',
      lat: 32.8097,
      lng: -96.8021,
      conversion: 16.2,
      customers: 9800,
      status: 'hot',
    },
    {
      name: 'Plano East',
      lat: 33.0198,
      lng: -96.6989,
      conversion: 17.1,
      customers: 11200,
      status: 'hot',
    },
    {
      name: 'Frisco West',
      lat: 33.1615,
      lng: -96.8234,
      conversion: 13.7,
      customers: 6800,
      status: 'warm',
    },
    {
      name: 'Arlington',
      lat: 32.7357,
      lng: -97.1081,
      conversion: 14.8,
      customers: 8600,
      status: 'warm',
    },
    {
      name: 'Fort Worth Downtown',
      lat: 32.7555,
      lng: -97.3308,
      conversion: 15.3,
      customers: 7200,
      status: 'warm',
    },
    {
      name: 'Irving',
      lat: 32.814,
      lng: -97.2037,
      conversion: 12.4,
      customers: 5400,
      status: 'monitor',
    },
    {
      name: 'Carrollton',
      lat: 32.9753,
      lng: -96.8364,
      conversion: 11.9,
      customers: 4200,
      status: 'monitor',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-purple-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Geo-Marketing Intelligence
          </h1>
          <h2 className="mb-4 text-2xl text-purple-300">
            Powered by North DFW Insights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            See where your audience scans, engage by zone, and amplify ROI
            across Dallas, Plano, Frisco, and beyond.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* KPI Snapshot */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Monitored Zones
            </p>
            <p className="text-4xl font-bold text-blue-400">8</p>
            <p className="mt-2 text-sm text-gray-400">
              Active marketing regions
            </p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Avg Conversion
            </p>
            <p className="text-4xl font-bold text-purple-400">14.9%</p>
            <p className="mt-2 text-sm text-green-400">
              ↑ Dallas & Plano hot spots
            </p>
          </div>
          <div className="rounded-lg border border-pink-700/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Total Reach
            </p>
            <p className="text-4xl font-bold text-pink-400">65.7K</p>
            <p className="mt-2 text-sm text-gray-400">Customers engaged</p>
          </div>
          <div className="rounded-lg border border-cyan-700/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Top Zone
            </p>
            <p className="text-4xl font-bold text-cyan-400">18.4%</p>
            <p className="mt-2 text-sm text-gray-400">
              Downtown Dallas conversion
            </p>
          </div>
        </div>

        {/* DFW Map Placeholder with Filters */}
        <div className="mb-16 rounded-xl border border-purple-900/50 bg-gray-900/50 p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Interactive DFW Zone Map
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Scan activity heatmap by sub-region
              </p>
            </div>
            <div className="flex gap-3">
              <select className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:border-gray-600">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
          </div>

          <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-300">
                North DFW Interactive Heatmap
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Color gradient: Deep red (high engagement) to light blue (lower
                engagement)
              </p>
              <div className="mt-6 inline-flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded bg-red-500"></div>
                  <span className="text-gray-400">Hot (15%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded bg-orange-500"></div>
                  <span className="text-gray-400">Warm (12-15%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded bg-blue-500"></div>
                  <span className="text-gray-400">Monitor (&lt;12%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded border border-gray-700 bg-gray-800 p-3">
              <p className="font-semibold text-gray-400">Downtown Dallas</p>
              <p className="mt-1 font-bold text-red-400">18.4% conversion</p>
            </div>
            <div className="rounded border border-gray-700 bg-gray-800 p-3">
              <p className="font-semibold text-gray-400">Plano East</p>
              <p className="mt-1 font-bold text-red-400">17.1% conversion</p>
            </div>
            <div className="rounded border border-gray-700 bg-gray-800 p-3">
              <p className="font-semibold text-gray-400">Uptown Dallas</p>
              <p className="mt-1 font-bold text-orange-400">16.2% conversion</p>
            </div>
            <div className="rounded border border-gray-700 bg-gray-800 p-3">
              <p className="font-semibold text-gray-400">Arlington</p>
              <p className="mt-1 font-bold text-orange-400">14.8% conversion</p>
            </div>
          </div>
        </div>

        {/* Location Performance Table */}
        <div className="mb-16 overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50">
          <div className="border-b border-gray-700 p-6">
            <h3 className="text-xl font-bold text-white">
              Location Performance Details
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Conversion Rate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Customers Reached
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Performance
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {locations.map(loc => (
                  <tr
                    key={loc.name}
                    className="border-b border-gray-700/50 transition-colors hover:bg-gray-900/30"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">
                      {loc.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      <span
                        className={`font-bold ${loc.conversion >= 16 ? 'text-red-400' : loc.conversion >= 13 ? 'text-orange-400' : 'text-blue-400'}`}
                      >
                        {loc.conversion}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {(loc.customers / 1000).toFixed(1)}K
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-28 rounded-full bg-gray-700">
                          <div
                            className={`h-2 rounded-full ${loc.status === 'hot' ? 'bg-red-500' : loc.status === 'warm' ? 'bg-orange-500' : 'bg-blue-500'}`}
                            style={{ width: `${(loc.conversion / 20) * 100}%` }}
                          />
                        </div>
                        <span
                          className={`text-xs font-semibold ${loc.status === 'hot' ? 'text-red-400' : loc.status === 'warm' ? 'text-orange-400' : 'text-blue-400'}`}
                        >
                          {loc.status === 'hot'
                            ? 'Hot'
                            : loc.status === 'warm'
                              ? 'Warm'
                              : 'Monitor'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {loc.status === 'hot' ? (
                        <span className="font-semibold text-green-400">
                          ↑ Strong
                        </span>
                      ) : loc.status === 'warm' ? (
                        <span className="font-semibold text-yellow-400">
                          → Stable
                        </span>
                      ) : (
                        <span className="font-semibold text-blue-400">
                          ↓ Monitor
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performing Zones */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6">
          <h3 className="mb-6 text-xl font-bold text-white">
            Top Performing Zones in DFW
          </h3>
          <ol className="space-y-4">
            <li className="flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/50 bg-red-500/20">
                <span className="font-bold text-red-400">1</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Downtown Dallas</p>
                <p className="text-sm text-gray-400">
                  18.4% conversion • 12.4K customers
                </p>
              </div>
              <div className="text-2xl font-bold text-red-400">18.4%</div>
            </li>
            <li className="flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/50 bg-red-500/20">
                <span className="font-bold text-red-400">2</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Plano East</p>
                <p className="text-sm text-gray-400">
                  17.1% conversion • 11.2K customers
                </p>
              </div>
              <div className="text-2xl font-bold text-red-400">17.1%</div>
            </li>
            <li className="flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/50 bg-orange-500/20">
                <span className="font-bold text-orange-400">3</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Uptown Dallas</p>
                <p className="text-sm text-gray-400">
                  16.2% conversion • 9.8K customers
                </p>
              </div>
              <div className="text-2xl font-bold text-orange-400">16.2%</div>
            </li>
          </ol>
        </div>

        {/* Optimization Insights */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
            <h3 className="mb-4 text-lg font-bold text-purple-300">
              Double Down Strategy
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-purple-400">→</span>
                <span>
                  <strong className="text-white">
                    Downtown Dallas & Plano East
                  </strong>{' '}
                  — highest conversion zones, increase ad spend by 40%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-purple-400">→</span>
                <span>
                  <strong className="text-white">Extend Uptown tactics</strong>{' '}
                  to Frisco and Arlington for similar high-performance results
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-purple-400">→</span>
                <span>
                  <strong className="text-white">Deep Ellum expansion</strong> —
                  emerging positive trend, allocate growth budget
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
            <h3 className="mb-4 text-lg font-bold text-cyan-300">
              Rebalance Strategy
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-cyan-400">→</span>
                <span>
                  <strong className="text-white">Carrollton & Irving</strong> —
                  declining trend in last 7 days, reduce spend by 20%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-cyan-400">→</span>
                <span>
                  <strong className="text-white">Fort Worth Downtown</strong> —
                  stabilizing, maintain current investment while testing new
                  messaging
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-cyan-400">→</span>
                <span>
                  <strong className="text-white">Frisco West</strong> — monitor
                  closely, test localized campaigns before scaling
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Coming Features */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Coming Features — North DFW Examples
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <h4 className="mb-2 font-bold text-white">
                Geo-Personalized Landing Pages
              </h4>
              <p className="text-sm text-gray-300">
                E.g., at the Dallas Farmers Market, users see "Special Offer for
                Deep Ellum Arts Festival"
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <h4 className="mb-2 font-bold text-white">
                Location-Triggered Automations
              </h4>
              <p className="text-sm text-gray-300">
                E.g., scan in Plano triggers SMS: "Visit our Frisco store for
                20% off"
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <h4 className="mb-2 font-bold text-white">Regional A/B Tests</h4>
              <p className="text-sm text-gray-300">
                E.g., test banner copy in Garland vs Lewisville to optimize
                messaging by locale
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
              <h4 className="mb-2 font-bold text-white">
                Lead Routing by Zone
              </h4>
              <p className="text-sm text-gray-300">
                E.g., scans in Carrollton auto-route to Carrollton sales rep for
                faster follow-up
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/demo"
            className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            ← Back to Demos
          </Link>
          <Link
            href="/demo/customer-journey-insights"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Next: Customer Journey Insights →
          </Link>
        </div>
      </div>
    </div>
  );
}
