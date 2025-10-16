import Link from 'next/link';

export default function GeoMarketingDemo() {
  const locations = [
    { name: 'Downtown Dallas', lat: 32.7767, lng: -96.7970, conversion: 18.4, customers: 12400, status: 'hot' },
    { name: 'Uptown Dallas', lat: 32.8097, lng: -96.8021, conversion: 16.2, customers: 9800, status: 'hot' },
    { name: 'Arlington', lat: 32.7357, lng: -97.1081, conversion: 14.8, customers: 8600, status: 'warm' },
    { name: 'Fort Worth', lat: 32.7555, lng: -97.3308, conversion: 15.3, customers: 7200, status: 'warm' },
    { name: 'Plano', lat: 33.0198, lng: -96.6989, conversion: 17.1, customers: 11200, status: 'hot' },
    { name: 'Frisco', lat: 33.1615, lng: -96.8234, conversion: 13.7, customers: 6800, status: 'warm' },
    { name: 'Irving', lat: 32.8140, lng: -97.2037, conversion: 12.4, customers: 5400, status: 'medium' },
    { name: 'Carrollton', lat: 32.9753, lng: -96.8364, conversion: 11.9, customers: 4200, status: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Geo-Marketing Intelligence</h1>
          <p className="text-base text-gray-400">North DFW Regional Analytics</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Track Marketing Performance Across North DFW</h2>
          <p className="text-gray-300">Visualize customer engagement and conversion metrics by location to optimize regional campaigns</p>
        </div>

        {/* Regional KPI Cards */}
        <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
          <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Total Locations</p>
            <p className="text-3xl font-bold text-blue-400">8</p>
            <p className="text-xs text-gray-500 mt-2">Active marketing zones</p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Avg Conversion</p>
            <p className="text-3xl font-bold text-purple-400">14.9%</p>
            <p className="text-xs text-green-400 mt-2">↑ 3.2% vs last month</p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Total Reach</p>
            <p className="text-3xl font-bold text-pink-400">65.7K</p>
            <p className="text-xs text-gray-500 mt-2">Customers engaged</p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Top Location</p>
            <p className="text-3xl font-bold text-cyan-400">Downtown</p>
            <p className="text-xs text-gray-500 mt-2">18.4% conversion rate</p>
          </div>
        </div>

        {/* Interactive Map with Pins */}
        <div className="mb-20 rounded-xl border border-purple-900/50 bg-gray-900/50 p-8 overflow-hidden">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">North DFW Marketing Coverage Map</h3>
              <p className="text-sm text-gray-400 mt-1">Click locations for detailed metrics</p>
            </div>
            <select className="rounded bg-gray-800 text-sm text-gray-300 px-4 py-2 border border-gray-700">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Year to Date</option>
            </select>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
            <svg className="w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#e8f0e8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#d0e8d0', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Map background - light map style */}
              <rect width="1200" height="800" fill="url(#mapBg)" />

              {/* Water bodies - Lakes */}
              <g fill="#a8d5ff" opacity="0.6">
                <circle cx="280" cy="200" r="45" />
                <ellipse cx="350" cy="350" rx="65" ry="55" />
                <ellipse cx="500" cy="280" rx="40" ry="50" />
                <circle cx="750" cy="450" r="38" />
              </g>

              {/* Major Highways - Interstate style */}
              <g>
                {/* I-35E - Main north-south */}
                <line x1="180" y1="40" x2="170" y2="750" stroke="#d1512a" strokeWidth="6" />
                <line x1="180" y1="40" x2="170" y2="750" stroke="#ff9d00" strokeWidth="3" opacity="0.7" />

                {/* I-30 - East-West through Dallas */}
                <path d="M 80 420 Q 300 380, 600 390 T 950 420" stroke="#d1512a" strokeWidth="6" fill="none" />
                <path d="M 80 420 Q 300 380, 600 390 T 950 420" stroke="#ff9d00" strokeWidth="3" opacity="0.7" fill="none" />

                {/* Dallas Tollway - Curved north-south */}
                <path d="M 420 50 Q 440 200, 460 400 Q 450 550, 430 750" stroke="#0066cc" strokeWidth="5" fill="none" />

                {/* I-75 - Northeast to southwest */}
                <path d="M 650 80 Q 680 300, 650 500 Q 600 650, 500 750" stroke="#d1512a" strokeWidth="6" fill="none" />
                <path d="M 650 80 Q 680 300, 650 500 Q 600 650, 500 750" stroke="#ff9d00" strokeWidth="3" opacity="0.7" fill="none" />

                {/* 635 Loop */}
                <path d="M 480 280 Q 550 290, 600 350 Q 580 420, 500 430" stroke="#666666" strokeWidth="4" fill="none" />

                {/* Various state highways */}
                <line x1="100" y1="300" x2="400" y2="280" stroke="#888888" strokeWidth="3" />
                <line x1="700" y1="150" x2="950" y2="200" stroke="#888888" strokeWidth="3" />
              </g>

              {/* City boundaries - subtle grid */}
              <g stroke="#cccccc" strokeWidth="1" opacity="0.3" fill="none">
                <rect x="100" y="100" width="300" height="280" />
                <rect x="420" y="80" width="200" height="250" />
                <rect x="350" y="340" width="250" height="200" />
                <rect x="650" y="280" width="280" height="220" />
              </g>

              {/* City name labels */}
              <g fontSize="16" fontWeight="600" fill="#333333" opacity="0.8" textAnchor="middle">
                <text x="200" y="180">Denton</text>
                <text x="250" y="650">Fort Worth</text>
                <text x="480" y="160">Frisco</text>
                <text x="550" y="120">McKinney</text>
                <text x="780" y="280">Plano</text>
                <text x="520" y="470">Dallas</text>
                <text x="350" y="530">Irving</text>
                <text x="200" y="500">Arlington</text>
              </g>

              {/* Location Pins */}
              {locations.map((loc, idx) => {
                const x = 150 + (loc.lng + 97.5) * 120;
                const y = 350 - (loc.lat - 32.5) * 140;
                let pinColor = '#ef4444';
                let ringColor = '#fca5a5';
                if (loc.status === 'warm') {
                  pinColor = '#f59e0b';
                  ringColor = '#fcd34d';
                } else if (loc.status === 'medium') {
                  pinColor = '#3b82f6';
                  ringColor = '#93c5fd';
                }

                return (
                  <g key={idx}>
                    {/* Ripple effect */}
                    <circle cx={x} cy={y} r="45" fill={ringColor} opacity="0.15" />
                    <circle cx={x} cy={y} r="35" fill={ringColor} opacity="0.1" />

                    {/* Pin circle */}
                    <circle cx={x} cy={y} r="18" fill={pinColor} stroke="#fff" strokeWidth="2" />

                    {/* Conversion rate text inside pin */}
                    <text x={x} y={y} fontSize="10" fontWeight="bold" fill="#fff" textAnchor="middle" dy="0.3em">
                      {loc.conversion}%
                    </text>

                    {/* Location label above */}
                    <text x={x} y={y - 50} fontSize="11" fontWeight="600" fill="#e5e7eb" textAnchor="middle">
                      {loc.name}
                    </text>

                    {/* Customer count below */}
                    <text x={x} y={y + 50} fontSize="9" fill="#9ca3af" textAnchor="middle">
                      {(loc.customers / 1000).toFixed(1)}K customers
                    </text>
                  </g>
                );
              })}

              {/* Legend */}
              <g>
                <rect x="730" y="20" width="260" height="140" fill="#111827" opacity="0.9" rx="8" />
                <rect x="735" y="25" width="250" height="130" fill="none" stroke="#374151" strokeWidth="1" rx="6" />

                <text x="750" y="45" fontSize="12" fontWeight="bold" fill="#e5e7eb">Conversion Performance</text>

                <circle cx="750" cy="70" r="6" fill="#ef4444" />
                <text x="765" y="74" fontSize="10" fill="#d1d5db">High (15%+)</text>

                <circle cx="750" cy="95" r="6" fill="#f59e0b" />
                <text x="765" y="99" fontSize="10" fill="#d1d5db">Warm (12-15%)</text>

                <circle cx="750" cy="120" r="6" fill="#3b82f6" />
                <text x="765" y="124" fontSize="10" fill="#d1d5db">Medium (&lt;12%)</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Location Performance Table */}
        <div className="mb-20 rounded-lg border border-gray-700 bg-gray-800/50 p-6">
          <h3 className="text-lg font-bold text-white mb-6">Location Performance Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Conversion Rate</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Customers Reached</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Performance</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Trend</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((loc) => (
                  <tr key={loc.name} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-4 text-sm text-gray-200 font-medium">{loc.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-300">
                      <span className={`font-bold ${loc.conversion >= 16 ? 'text-red-400' : loc.conversion >= 13 ? 'text-orange-400' : 'text-blue-400'}`}>
                        {loc.conversion}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-300">{(loc.customers / 1000).toFixed(1)}K</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${loc.status === 'hot' ? 'bg-red-500' : loc.status === 'warm' ? 'bg-orange-500' : 'bg-blue-500'}`}
                            style={{ width: `${(loc.conversion / 20) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{loc.status.charAt(0).toUpperCase() + loc.status.slice(1)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      {loc.status === 'hot' ? (
                        <span className="text-green-400">↑ Strong</span>
                      ) : loc.status === 'warm' ? (
                        <span className="text-yellow-400">→ Stable</span>
                      ) : (
                        <span className="text-blue-400">↓ Monitor</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights and Recommendations */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-bold text-purple-300 mb-3">Top Performing Zones</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>1. Downtown Dallas</span>
                <span className="text-red-400 font-semibold">18.4%</span>
              </li>
              <li className="flex justify-between">
                <span>2. Plano</span>
                <span className="text-red-400 font-semibold">17.1%</span>
              </li>
              <li className="flex justify-between">
                <span>3. Uptown Dallas</span>
                <span className="text-orange-400 font-semibold">16.2%</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-bold text-cyan-300 mb-3">Optimization Recommendations</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">→</span>
                <span>Increase investment in Downtown and Plano - highest ROI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">→</span>
                <span>Rebalance Irving and Carrollton campaigns - underperforming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">→</span>
                <span>Scale Uptown tactics to Fort Worth market</span>
              </li>
            </ul>
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
