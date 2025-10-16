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

          {/* Geographic Heatmap */}
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 mb-8">
            <p className="mb-4 text-sm font-semibold text-gray-300">Geographic Coverage Heatmap</p>
            <div className="aspect-video rounded bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1a4d2e', stopOpacity: 0.4 }} />
                    <stop offset="100%" style={{ stopColor: '#0f2818', stopOpacity: 0.6 }} />
                  </linearGradient>
                  <radialGradient id="densityHot" cx="50%" cy="50%">
                    <stop offset="0%" style={{ stopColor: '#ff1744', stopOpacity: 1 }} />
                    <stop offset="70%" style={{ stopColor: '#ff9800', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#ffeb3b', stopOpacity: 0.1 }} />
                  </radialGradient>
                  <radialGradient id="densityMed" cx="50%" cy="50%">
                    <stop offset="0%" style={{ stopColor: '#ff9800', stopOpacity: 0.9 }} />
                    <stop offset="70%" style={{ stopColor: '#ffeb3b', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: '#ffeb3b', stopOpacity: 0.05 }} />
                  </radialGradient>
                  <radialGradient id="densityCool" cx="50%" cy="50%">
                    <stop offset="0%" style={{ stopColor: '#2196f3', stopOpacity: 0.8 }} />
                    <stop offset="70%" style={{ stopColor: '#00bcd4', stopOpacity: 0.4 }} />
                    <stop offset="100%" style={{ stopColor: '#4dd0e1', stopOpacity: 0.05 }} />
                  </radialGradient>
                </defs>

                {/* Map background */}
                <rect width="1000" height="600" fill="#0f2818" />
                <rect width="1000" height="600" fill="url(#mapGradient)" />

                {/* Geographic grid overlay */}
                <g stroke="#1a3a2a" strokeWidth="1" opacity="0.3">
                  <line x1="0" y1="150" x2="1000" y2="150" />
                  <line x1="0" y1="300" x2="1000" y2="300" />
                  <line x1="0" y1="450" x2="1000" y2="450" />
                  <line x1="250" y1="0" x2="250" y2="600" />
                  <line x1="500" y1="0" x2="500" y2="600" />
                  <line x1="750" y1="0" x2="750" y2="600" />
                </g>

                {/* Heat density zones - High concentration areas */}
                <circle cx="250" cy="180" r="180" fill="url(#densityHot)" />
                <circle cx="750" cy="150" r="160" fill="url(#densityHot)" />
                <circle cx="500" cy="450" r="170" fill="url(#densityHot)" />

                {/* Medium concentration areas */}
                <circle cx="150" cy="400" r="140" fill="url(#densityMed)" />
                <circle cx="850" cy="380" r="130" fill="url(#densityMed)" />

                {/* Low concentration areas */}
                <circle cx="400" cy="300" r="100" fill="url(#densityCool)" />
                <circle cx="650" cy="500" r="90" fill="url(#densityCool)" />

                {/* Location markers - High engagement (Red) */}
                <g>
                  {/* Main Business Districts */}
                  <circle cx="250" cy="180" r="12" fill="#ff1744" stroke="#fff" strokeWidth="2" />
                  <circle cx="270" cy="160" r="10" fill="#ff5252" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="230" cy="200" r="9" fill="#ff5252" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="750" cy="150" r="12" fill="#ff1744" stroke="#fff" strokeWidth="2" />
                  <circle cx="770" cy="130" r="10" fill="#ff5252" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="730" cy="170" r="9" fill="#ff5252" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="500" cy="450" r="12" fill="#ff1744" stroke="#fff" strokeWidth="2" />
                  <circle cx="520" cy="435" r="10" fill="#ff5252" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="480" cy="465" r="9" fill="#ff5252" stroke="#fff" strokeWidth="1.5" />
                </g>

                {/* Medium engagement (Orange) */}
                <g>
                  <circle cx="150" cy="400" r="10" fill="#ff9800" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="135" cy="385" r="8" fill="#ffb74d" stroke="#fff" strokeWidth="1" />
                  <circle cx="850" cy="380" r="10" fill="#ff9800" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="865" cy="395" r="8" fill="#ffb74d" stroke="#fff" strokeWidth="1" />
                </g>

                {/* Low engagement (Blue) */}
                <g>
                  <circle cx="400" cy="300" r="8" fill="#2196f3" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="415" cy="315" r="6" fill="#64b5f6" stroke="#fff" strokeWidth="1" />
                  <circle cx="650" cy="500" r="8" fill="#2196f3" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="665" cy="515" r="6" fill="#64b5f6" stroke="#fff" strokeWidth="1" />
                </g>

                {/* Region labels */}
                <text x="250" y="290" fontSize="12" fill="#e5e7eb" fontWeight="bold" textAnchor="middle" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Downtown District</text>
                <text x="750" y="260" fontSize="12" fill="#e5e7eb" fontWeight="bold" textAnchor="middle" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Retail Zone</text>
                <text x="500" y="560" fontSize="12" fill="#e5e7eb" fontWeight="bold" textAnchor="middle" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Entertainment Hub</text>
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2 bg-gray-900/95 px-4 py-3 rounded-lg border border-gray-700">
                <div className="text-xs font-semibold text-gray-300 mb-2">Customer Engagement</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff1744' }}></div>
                  <span className="text-xs text-gray-400">High (80%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff9800' }}></div>
                  <span className="text-xs text-gray-400">Medium (40-70%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2196f3' }}></div>
                  <span className="text-xs text-gray-400">Low (10-30%)</span>
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
