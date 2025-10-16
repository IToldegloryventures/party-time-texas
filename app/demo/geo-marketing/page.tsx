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
            <div className="aspect-video rounded bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded flex items-center justify-center text-gray-400">
                [Venue Layout with Traffic Zones]
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                {['Low', 'Med', 'High'].map((intensity) => (
                  <div key={intensity} className="text-xs text-gray-400">{intensity}</div>
                ))}
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
        <div className="flex justify-between">
          <Link href="/demo/landing-page-builder" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
