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

          <div className="relative rounded-lg overflow-hidden bg-gray-800 border border-gray-700 h-96" style={{
            backgroundImage: 'linear-gradient(135deg, #e8f4e8 0%, #d4efd4 100%)',
            backgroundAttachment: 'fixed'
          }}>
            <svg className="w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid meet">
              {/* Roads Network - Local Streets (thin gray) */}
              <g stroke="#aaa" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round">
                <path d="M 200 150 Q 350 180, 500 200" />
                <path d="M 300 250 Q 450 280, 650 300" />
                <path d="M 150 350 Q 400 380, 700 400" />
                <path d="M 250 450 Q 500 480, 800 500" />
                <path d="M 100 600 Q 450 620, 900 640" />
                <path d="M 700 150 Q 800 280, 850 450" />
                <path d="M 400 100 Q 450 300, 500 700" />
              </g>

              {/* State Highways (medium gray) */}
              <g stroke="#777" strokeWidth="2.5" opacity="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 280 100 Q 320 250, 350 600" />
                <path d="M 100 380 Q 400 400, 850 420" />
                <path d="M 650 120 Q 700 350, 750 700" />
              </g>

              {/* Interstate Highways - Realistic colors */}
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* I-35E - Red (North-South) */}
                <line x1="240" y1="80" x2="230" y2="850" stroke="#c30014" strokeWidth="7" />
                <line x1="245" y1="80" x2="235" y2="850" stroke="white" strokeWidth="2" />

                {/* I-30 - Red (East-West) */}
                <path d="M 80 400 Q 400 390, 950 410" stroke="#c30014" strokeWidth="7" fill="none" />
                <path d="M 80 400 Q 400 390, 950 410" stroke="white" strokeWidth="2" fill="none" />

                {/* Dallas Tollway - Blue */}
                <path d="M 480 100 Q 510 250, 540 500" stroke="#0052a3" strokeWidth="6" fill="none" />
                <path d="M 480 100 Q 510 250, 540 500" stroke="white" strokeWidth="1.5" fill="none" />

                {/* I-75 - Red (diagonal) */}
                <path d="M 700 120 Q 680 350, 650 700" stroke="#c30014" strokeWidth="7" fill="none" />
                <path d="M 700 120 Q 680 350, 650 700" stroke="white" strokeWidth="2" fill="none" />
              </g>

              {/* Water features - Lakes (blue) */}
              <g fill="#5da3d5" opacity="0.4">
                <ellipse cx="350" cy="220" rx="55" ry="48" />
                <ellipse cx="650" cy="480" rx="50" ry="65" />
                <circle cx="850" cy="280" r="40" />
                <ellipse cx="200" cy="680" rx="45" ry="55" />
              </g>

              {/* City Labels - Prominent */}
              <g textAnchor="middle">
                <text x="240" y="130" fontSize="17" fontWeight="700" fill="#1a1a1a">Denton</text>
                <text x="420" y="145" fontSize="17" fontWeight="700" fill="#1a1a1a">Frisco</text>
                <text x="650" y="120" fontSize="17" fontWeight="700" fill="#1a1a1a">McKinney</text>
                <text x="790" y="270" fontSize="18" fontWeight="700" fill="#1a1a1a">Plano</text>
                <text x="520" y="440" fontSize="20" fontWeight="700" fill="#000">Dallas</text>
                <text x="380" y="520" fontSize="16" fontWeight="700" fill="#222">Irving</text>
                <text x="250" y="680" fontSize="16" fontWeight="700" fill="#222">Fort Worth</text>
                <text x="180" y="390" fontSize="14" fontWeight="600" fill="#444">Arlington</text>
                <text x="850" y="360" fontSize="14" fontWeight="600" fill="#444">Garland</text>
              </g>

              {/* Location Pins - Overlaid on map */}
              {locations.map((loc, idx) => {
                const x = 240 + (loc.lng + 97.3) * 120;
                const y = 400 - (loc.lat - 32.6) * 140;
                let pinColor = '#ef4444';
                if (loc.status === 'warm') pinColor = '#f59e0b';
                else if (loc.status === 'medium') pinColor = '#3b82f6';

                return (
                  <g key={idx}>
                    {/* Glow effect */}
                    <circle cx={x} cy={y} r="40" fill={pinColor} opacity="0.08" />
                    <circle cx={x} cy={y} r="28" fill={pinColor} opacity="0.12" />

                    {/* Pin marker */}
                    <circle cx={x} cy={y} r="14" fill={pinColor} stroke="#fff" strokeWidth="2" />
                    <text x={x} y={y} fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle" dy="0.3em">
                      {loc.conversion}%
                    </text>
                  </g>
                );
              })}

              {/* Legend */}
              <g>
                <rect x="1050" y="30" width="320" height="160" fill="#f5f5f5" rx="6" />
                <rect x="1055" y="35" width="310" height="150" fill="none" stroke="#ddd" strokeWidth="1" rx="4" />
                <text x="1070" y="55" fontSize="13" fontWeight="bold" fill="#222">Customer Engagement</text>
                <circle cx="1075" cy="80" r="5" fill="#ef4444" />
                <text x="1095" y="84" fontSize="11" fill="#444">High (15%+)</text>
                <circle cx="1075" cy="105" r="5" fill="#f59e0b" />
                <text x="1095" y="109" fontSize="11" fill="#444">Warm (12-15%)</text>
                <circle cx="1075" cy="130" r="5" fill="#3b82f6" />
                <text x="1095" y="134" fontSize="11" fill="#444">Medium (&lt;12%)</text>
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
