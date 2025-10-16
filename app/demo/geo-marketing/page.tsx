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
          <p className="text-gray-300">Track customer movement patterns and optimize placement</p>
        </div>

        {/* Analytics Dashboard Mockup */}
        <div className="mb-20 rounded-xl border border-purple-900/50 bg-gray-900/50 p-8">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
            <h3 className="text-lg font-bold text-white">Venue Analytics</h3>
            <select className="rounded bg-gray-800 text-sm text-gray-300 px-3 py-1 border border-gray-700">
              <option>Last 7 Days</option>
            </select>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
            {[
              { label: 'Total Scans', value: '12,451', color: 'purple' },
              { label: 'Avg Dwell Time', value: '8.2m', color: 'blue' },
              { label: 'Engagement Rate', value: '42.3%', color: 'cyan' },
              { label: 'Peak Time', value: '2-4 PM', color: 'pink' }
            ].map((metric) => (
              <div key={metric.label} className={`rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4`}>
                <p className="text-xs text-gray-400 mb-1">{metric.label}</p>
                <p className={`text-2xl font-bold text-${metric.color}-400`}>{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Heatmap */}
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 mb-8">
            <p className="mb-4 text-sm font-semibold text-gray-300">Venue Heatmap</p>
            <div className="aspect-video rounded bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                {/* Define gradients for heatmap */}
                <defs>
                  <radialGradient id="hotSpot1" cx="35%" cy="25%">
                    <stop offset="0%" style={{ stopColor: '#ff3333', stopOpacity: 0.9 }} />
                    <stop offset="50%" style={{ stopColor: '#ff8800', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#ffcc00', stopOpacity: 0.2 }} />
                  </radialGradient>
                  <radialGradient id="hotSpot2" cx="70%" cy="40%">
                    <stop offset="0%" style={{ stopColor: '#ff6666', stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: '#ff9900', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: '#ffdd00', stopOpacity: 0.15 }} />
                  </radialGradient>
                  <radialGradient id="hotSpot3" cx="50%" cy="75%">
                    <stop offset="0%" style={{ stopColor: '#ff4444', stopOpacity: 0.85 }} />
                    <stop offset="50%" style={{ stopColor: '#ff7700', stopOpacity: 0.55 }} />
                    <stop offset="100%" style={{ stopColor: '#ffbb00', stopOpacity: 0.18 }} />
                  </radialGradient>
                  <radialGradient id="coolSpot1" cx="20%" cy="60%">
                    <stop offset="0%" style={{ stopColor: '#3366ff', stopOpacity: 0.5 }} />
                    <stop offset="50%" style={{ stopColor: '#0088ff', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#00ccff', stopOpacity: 0.1 }} />
                  </radialGradient>
                  <radialGradient id="warmSpot1" cx="85%" cy="70%">
                    <stop offset="0%" style={{ stopColor: '#ff5555', stopOpacity: 0.75 }} />
                    <stop offset="50%" style={{ stopColor: '#ff8811', stopOpacity: 0.45 }} />
                    <stop offset="100%" style={{ stopColor: '#ffdd00', stopOpacity: 0.12 }} />
                  </radialGradient>
                </defs>

                {/* Background floor */}
                <rect width="1000" height="600" fill="#111827" />

                {/* Floor sections */}
                <rect x="20" y="20" width="460" height="280" fill="none" stroke="#374151" strokeWidth="2" />
                <rect x="500" y="20" width="480" height="280" fill="none" stroke="#374151" strokeWidth="2" />
                <rect x="20" y="320" width="460" height="260" fill="none" stroke="#374151" strokeWidth="2" />
                <rect x="500" y="320" width="480" height="260" fill="none" stroke="#374151" strokeWidth="2" />

                {/* Heat intensity overlays */}
                <circle cx="250" cy="150" r="280" fill="url(#hotSpot1)" />
                <circle cx="740" cy="180" r="260" fill="url(#hotSpot2)" />
                <circle cx="500" cy="450" r="300" fill="url(#hotSpot3)" />
                <circle cx="150" cy="420" r="180" fill="url(#coolSpot1)" />
                <circle cx="880" cy="450" r="220" fill="url(#warmSpot1)" />

                {/* Zone labels */}
                <text x="100" y="100" fontSize="14" fill="#e5e7eb" fontWeight="bold" textAnchor="start">Main Entrance (95)</text>
                <text x="540" y="100" fontSize="14" fill="#e5e7eb" fontWeight="bold" textAnchor="start">Conference Rm (85)</text>
                <text x="100" y="380" fontSize="14" fill="#e5e7eb" fontWeight="bold" textAnchor="start">VIP Lounge (72)</text>
                <text x="540" y="380" fontSize="14" fill="#e5e7eb" fontWeight="bold" textAnchor="start">Dining Area (78)</text>
                <text x="420" y="520" fontSize="14" fill="#e5e7eb" fontWeight="bold" textAnchor="middle">Stage Area (88)</text>
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 flex gap-3 bg-gray-900/95 px-4 py-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ccff' }}></div>
                  <span className="text-xs text-gray-400">Low (10-30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffdd00' }}></div>
                  <span className="text-xs text-gray-400">Med (40-60)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff3333' }}></div>
                  <span className="text-xs text-gray-400">High (80+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Station Performance */}
          <div>
            <p className="mb-4 text-sm font-semibold text-gray-300">Station Performance</p>
            <div className="space-y-3">
              {[
                { name: 'Main Entrance', scans: 4231, percentage: 85 },
                { name: 'VIP Lounge', scans: 2156, percentage: 62 },
                { name: 'Conference Room A', scans: 3812, percentage: 91 },
                { name: 'Registration Desk', scans: 2252, percentage: 48 }
              ].map((station) => (
                <div key={station.name} className="rounded border border-gray-700 bg-gray-800/30 p-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{station.name}</span>
                    <span className="text-gray-400">{station.scans} scans</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 rounded-full" style={{ width: `${station.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Home
          </Link>
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
