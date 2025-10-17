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
