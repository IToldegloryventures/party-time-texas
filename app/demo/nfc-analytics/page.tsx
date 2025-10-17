import Link from 'next/link';

export default function NFCAnalyticsDemo() {
  const deviceMetrics = [
    { location: 'Downtown Dallas', scans: 48200, conversion: '18.4%', revenue: '$125K', status: 'hot' },
    { location: 'Plano East', scans: 42100, conversion: '17.1%', revenue: '$108K', status: 'hot' },
    { location: 'Uptown Dallas', scans: 38500, conversion: '16.2%', revenue: '$95K', status: 'hot' },
    { location: 'Fort Worth Downtown', scans: 28900, conversion: '15.3%', revenue: '$72K', status: 'warm' },
    { location: 'Arlington', scans: 25600, conversion: '14.8%', revenue: '$68K', status: 'warm' },
    { location: 'Frisco', scans: 18400, conversion: '13.7%', revenue: '$52K', status: 'warm' },
  ];

  const topDevices = [
    { id: 'DFW-001', location: 'Downtown Dallas', scans: 12400, uptime: '99.8%', status: 'active' },
    { id: 'DFW-003', location: 'Plano Tech Hub', scans: 11200, uptime: '99.5%', status: 'active' },
    { id: 'DFW-002', location: 'Uptown Dallas', scans: 9800, uptime: '98.9%', status: 'active' },
    { id: 'DFW-005', location: 'Fort Worth', scans: 7200, uptime: '97.2%', status: 'maintenance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-green-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            NFC Analytics Dashboard
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Real-time performance metrics that drive decisions. Track total scans, conversion %, engagement, trend graphs, and export KPI reports.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Total Scans</p>
            <p className="text-4xl font-bold text-green-400">2.4M</p>
            <p className="text-sm text-green-400 mt-2">↑ 12% vs last month</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Conversion Rate</p>
            <p className="text-4xl font-bold text-blue-400">14.9%</p>
            <p className="text-sm text-green-400 mt-2">↑ 2.3% improvement</p>
          </div>
          <div className="rounded-lg border border-cyan-700/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Avg Engagement</p>
            <p className="text-4xl font-bold text-cyan-400">3m 42s</p>
            <p className="text-sm text-gray-400 mt-2">Time on landing page</p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Revenue Attributed</p>
            <p className="text-4xl font-bold text-purple-400">$520K</p>
            <p className="text-sm text-gray-400 mt-2">From NFC scans</p>
          </div>
        </div>

        {/* Dashboard Controls */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Analytics Overview</h3>
          <div className="flex gap-3">
            <select className="rounded-lg bg-gray-800 text-sm text-gray-300 px-4 py-2 border border-gray-700 hover:border-gray-600">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
              <option>Year to Date</option>
            </select>
            <button className="rounded-lg bg-green-600/20 text-green-300 px-4 py-2 text-sm font-semibold hover:bg-green-600/30 transition">
              Export Report
            </button>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Conversion Funnel: Scan → Page → Lead → Sale</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <div>
                    <p className="text-white font-semibold">NFC Scans</p>
                    <p className="text-sm text-gray-400">All tap interactions</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-400">2.4M</p>
                <p className="text-xs text-gray-400">100%</p>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">🌐</span>
                  <div>
                    <p className="text-white font-semibold">Landing Page Visits</p>
                    <p className="text-sm text-gray-400">Reached personalized page</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-400">1.8M</p>
                <p className="text-xs text-gray-400">75.0%</p>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">📝</span>
                  <div>
                    <p className="text-white font-semibold">Leads Generated</p>
                    <p className="text-sm text-gray-400">Form submissions</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-purple-400">798K</p>
                <p className="text-xs text-gray-400">44.3%</p>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">💰</span>
                  <div>
                    <p className="text-white font-semibold">Conversions (Sales)</p>
                    <p className="text-sm text-gray-400">Completed purchases</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-400">357K</p>
                <p className="text-xs text-gray-400">14.9%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Performance Table */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Top-Performing Zones &amp; Devices</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Location</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Scans</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Conversion %</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Revenue</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {deviceMetrics.map((metric) => (
                  <tr key={metric.location} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-medium">{metric.location}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{metric.scans.toLocaleString()}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`font-bold ${metric.conversion >= 16 ? 'text-red-400' : metric.conversion >= 13 ? 'text-orange-400' : 'text-blue-400'}`}>
                        {metric.conversion}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-green-400 font-semibold">{metric.revenue}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${metric.status === 'hot' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>
                        {metric.status === 'hot' ? '🔥 Hot' : '🌡️ Warm'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Performance */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Individual Device Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Device ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Location</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Scans Today</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Uptime</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {topDevices.map((device) => (
                  <tr key={device.id} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-mono">{device.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{device.location}</td>
                    <td className="py-4 px-6 text-sm text-gray-300 font-semibold">{device.scans.toLocaleString()}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={device.uptime === '99.8%' ? 'text-green-400' : device.uptime === '99.5%' ? 'text-green-400' : device.uptime === '98.9%' ? 'text-yellow-400' : 'text-orange-400'}>
                        {device.uptime}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${device.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {device.status === 'active' ? '🟢 Active' : '🟡 Maintenance'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trend Graphs */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Trend Graphs — Daily, Weekly, Monthly</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Daily Trend */}
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6">
              <p className="text-sm font-semibold text-gray-300 mb-4">Daily Scans (Last 7 Days)</p>
              <div className="space-y-2">
                {[65, 72, 58, 81, 76, 88, 92].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-8">Day {idx + 1}</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">{Math.round(value / 100 * 350)}K</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Trend */}
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6">
              <p className="text-sm font-semibold text-gray-300 mb-4">Weekly Scans (Last 12 Weeks)</p>
              <div className="flex items-end gap-2 h-40 mb-2">
                {[45, 52, 48, 61, 58, 72, 68, 75, 78, 82, 88, 92].map((value, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80 hover:opacity-100 transition"
                    style={{ height: `${value}%` }}
                    title={`Week ${idx + 1}: ${Math.round(value / 100 * 2400)}K scans`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">Moving upward trend ↑</p>
            </div>

            {/* Monthly Trend */}
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6">
              <p className="text-sm font-semibold text-gray-300 mb-4">Monthly Scans (Last 12 Months)</p>
              <div className="flex items-end gap-1.5 h-40 mb-2">
                {[35, 42, 48, 55, 62, 68, 75, 78, 82, 88, 92, 98].map((value, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t opacity-80 hover:opacity-100 transition"
                    style={{ height: `${value}%` }}
                    title={`Month ${idx + 1}: ${Math.round(value / 100 * 2400)}K scans`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">Consistent growth ↑</p>
            </div>
          </div>
        </div>

        {/* Exportable Reports */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Exportable KPI Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="font-bold text-blue-300 mb-3">Standard Report</h4>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>✓ Total scans & conversions</li>
                <li>✓ Revenue attribution</li>
                <li>✓ Device performance</li>
                <li>✓ Top zones summary</li>
              </ul>
              <button className="w-full rounded-lg bg-blue-600/20 text-blue-300 font-semibold py-2 hover:bg-blue-600/30 transition">
                📊 Export as PDF
              </button>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="font-bold text-green-300 mb-3">Advanced Analytics</h4>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>✓ Funnel breakdown</li>
                <li>✓ Cohort analysis</li>
                <li>✓ Regional comparisons</li>
                <li>✓ Predictive trends</li>
              </ul>
              <button className="w-full rounded-lg bg-green-600/20 text-green-300 font-semibold py-2 hover:bg-green-600/30 transition">
                📊 Export as CSV
              </button>
            </div>
          </div>
        </div>

        {/* Insights & Alerts */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Real-Time Insights &amp; Alerts</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-900/20 border border-green-600/50 flex items-start gap-4">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-semibold text-green-300">New Record: Downtown Dallas</p>
                <p className="text-sm text-gray-300">Device DFW-001 reached 18.4% conversion — highest ever recorded</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-yellow-900/20 border border-yellow-600/50 flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-yellow-300">Performance Dip: Irving</p>
                <p className="text-sm text-gray-300">Conversions down 3.2% in last 7 days. Recommend content refresh.</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-600/50 flex items-start gap-4">
              <span className="text-2xl">ℹ️</span>
              <div>
                <p className="font-semibold text-blue-300">Device Maintenance: DFW-005</p>
                <p className="text-sm text-gray-300">Uptime dipped to 97.2%. Schedule preventive maintenance soon.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: NFC Device Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
