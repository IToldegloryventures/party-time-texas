import Link from 'next/link';

export default function NFCAnalyticsDemo() {
  const deviceMetrics = [
    {
      location: 'Downtown Dallas',
      scans: 48200,
      conversion: '18.4%',
      revenue: '$125K',
      status: 'hot',
    },
    {
      location: 'Plano East',
      scans: 42100,
      conversion: '17.1%',
      revenue: '$108K',
      status: 'hot',
    },
    {
      location: 'Uptown Dallas',
      scans: 38500,
      conversion: '16.2%',
      revenue: '$95K',
      status: 'hot',
    },
    {
      location: 'Fort Worth Downtown',
      scans: 28900,
      conversion: '15.3%',
      revenue: '$72K',
      status: 'warm',
    },
    {
      location: 'Arlington',
      scans: 25600,
      conversion: '14.8%',
      revenue: '$68K',
      status: 'warm',
    },
    {
      location: 'Frisco',
      scans: 18400,
      conversion: '13.7%',
      revenue: '$52K',
      status: 'warm',
    },
  ];

  const topDevices = [
    {
      id: 'DFW-001',
      location: 'Downtown Dallas',
      scans: 12400,
      uptime: '99.8%',
      status: 'active',
    },
    {
      id: 'DFW-003',
      location: 'Plano Tech Hub',
      scans: 11200,
      uptime: '99.5%',
      status: 'active',
    },
    {
      id: 'DFW-002',
      location: 'Uptown Dallas',
      scans: 9800,
      uptime: '98.9%',
      status: 'active',
    },
    {
      id: 'DFW-005',
      location: 'Fort Worth',
      scans: 7200,
      uptime: '97.2%',
      status: 'maintenance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-green-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            NFC Analytics Dashboard
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Real-time performance metrics that drive decisions. Track total
            scans, conversion %, engagement, trend graphs, and export KPI
            reports.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Total Scans
            </p>
            <p className="text-4xl font-bold text-green-400">2.4M</p>
            <p className="mt-2 text-sm text-green-400">↑ 12% vs last month</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Conversion Rate
            </p>
            <p className="text-4xl font-bold text-blue-400">14.9%</p>
            <p className="mt-2 text-sm text-green-400">↑ 2.3% improvement</p>
          </div>
          <div className="rounded-lg border border-cyan-700/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Avg Engagement
            </p>
            <p className="text-4xl font-bold text-cyan-400">3m 42s</p>
            <p className="mt-2 text-sm text-gray-400">Time on landing page</p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              Revenue Attributed
            </p>
            <p className="text-4xl font-bold text-purple-400">$520K</p>
            <p className="mt-2 text-sm text-gray-400">From NFC scans</p>
          </div>
        </div>

        {/* Dashboard Controls */}
        <div className="mb-16 flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 p-6">
          <h3 className="text-xl font-bold text-white">Analytics Overview</h3>
          <div className="flex gap-3">
            <select className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:border-gray-600">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
              <option>Year to Date</option>
            </select>
            <button className="rounded-lg bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-600/30">
              Export Report
            </button>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="mb-8 text-2xl font-bold text-white">
            Conversion Funnel: Scan → Page → Lead → Sale
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-white">NFC Scans</p>
                    <p className="text-sm text-gray-400">
                      All tap interactions
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-400">2.4M</p>
                <p className="text-xs text-gray-400">100%</p>
              </div>
            </div>

            <div className="h-1 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-white">
                      Landing Page Visits
                    </p>
                    <p className="text-sm text-gray-400">
                      Reached personalized page
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-400">1.8M</p>
                <p className="text-xs text-gray-400">75.0%</p>
              </div>
            </div>

            <div className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-4">
                  <span className="text-3xl">📝</span>
                  <div>
                    <p className="font-semibold text-white">Leads Generated</p>
                    <p className="text-sm text-gray-400">Form submissions</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-purple-400">798K</p>
                <p className="text-xs text-gray-400">44.3%</p>
              </div>
            </div>

            <div className="h-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-white">
                      Conversions (Sales)
                    </p>
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
        <div className="mb-16 overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50">
          <div className="border-b border-gray-700 p-6">
            <h3 className="text-xl font-bold text-white">
              Top-Performing Zones &amp; Devices
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
                    Scans
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Conversion %
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Revenue
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {deviceMetrics.map(metric => (
                  <tr
                    key={metric.location}
                    className="border-b border-gray-700/50 transition-colors hover:bg-gray-900/30"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">
                      {metric.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {metric.scans.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`font-bold ${metric.conversion >= 16 ? 'text-red-400' : metric.conversion >= 13 ? 'text-orange-400' : 'text-blue-400'}`}
                      >
                        {metric.conversion}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-400">
                      {metric.revenue}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${metric.status === 'hot' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}
                      >
                        {metric.status === 'hot' ? 'Hot' : 'Warm'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Performance */}
        <div className="mb-16 overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50">
          <div className="border-b border-gray-700 p-6">
            <h3 className="text-xl font-bold text-white">
              Individual Device Performance
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Device ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Scans Today
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Uptime
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {topDevices.map(device => (
                  <tr
                    key={device.id}
                    className="border-b border-gray-700/50 transition-colors hover:bg-gray-900/30"
                  >
                    <td className="px-6 py-4 font-mono text-sm text-gray-200">
                      {device.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {device.location}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-300">
                      {device.scans.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={
                          device.uptime === '99.8%'
                            ? 'text-green-400'
                            : device.uptime === '99.5%'
                              ? 'text-green-400'
                              : device.uptime === '98.9%'
                                ? 'text-yellow-400'
                                : 'text-orange-400'
                        }
                      >
                        {device.uptime}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${device.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}
                      >
                        {device.status === 'active'
                          ? '🟢 Active'
                          : '🟡 Maintenance'}
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
          <h3 className="mb-6 text-2xl font-bold text-white">
            Trend Graphs — Daily, Weekly, Monthly
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Daily Trend */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Daily Scans (Last 7 Days)
              </p>
              <div className="space-y-2">
                {[65, 72, 58, 81, 76, 88, 92].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-8 text-xs text-gray-500">
                      Day {idx + 1}
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="w-12 text-right text-xs text-gray-400">
                      {Math.round((value / 100) * 350)}K
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Trend */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Weekly Scans (Last 12 Weeks)
              </p>
              <div className="mb-2 flex h-40 items-end gap-2">
                {[45, 52, 48, 61, 58, 72, 68, 75, 78, 82, 88, 92].map(
                  (value, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-blue-400 opacity-80 transition hover:opacity-100"
                      style={{ height: `${value}%` }}
                      title={`Week ${idx + 1}: ${Math.round((value / 100) * 2400)}K scans`}
                    />
                  )
                )}
              </div>
              <p className="text-center text-xs text-gray-500">
                Moving upward trend ↑
              </p>
            </div>

            {/* Monthly Trend */}
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Monthly Scans (Last 12 Months)
              </p>
              <div className="mb-2 flex h-40 items-end gap-1.5">
                {[35, 42, 48, 55, 62, 68, 75, 78, 82, 88, 92, 98].map(
                  (value, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-t bg-gradient-to-t from-purple-500 to-purple-400 opacity-80 transition hover:opacity-100"
                      style={{ height: `${value}%` }}
                      title={`Month ${idx + 1}: ${Math.round((value / 100) * 2400)}K scans`}
                    />
                  )
                )}
              </div>
              <p className="text-center text-xs text-gray-500">
                Consistent growth ↑
              </p>
            </div>
          </div>
        </div>

        {/* Exportable Reports */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Exportable KPI Reports
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
              <div className="mb-4 text-3xl">📋</div>
              <h4 className="mb-3 font-bold text-blue-300">Standard Report</h4>
              <ul className="mb-4 space-y-2 text-sm text-gray-300">
                <li>✓ Total scans & conversions</li>
                <li>✓ Revenue attribution</li>
                <li>✓ Device performance</li>
                <li>✓ Top zones summary</li>
              </ul>
              <button className="w-full rounded-lg bg-blue-600/20 py-2 font-semibold text-blue-300 transition hover:bg-blue-600/30">
                📊 Export as PDF
              </button>
            </div>

            <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
              <div className="mb-4 text-3xl">📈</div>
              <h4 className="mb-3 font-bold text-green-300">
                Advanced Analytics
              </h4>
              <ul className="mb-4 space-y-2 text-sm text-gray-300">
                <li>✓ Funnel breakdown</li>
                <li>✓ Cohort analysis</li>
                <li>✓ Regional comparisons</li>
                <li>✓ Predictive trends</li>
              </ul>
              <button className="w-full rounded-lg bg-green-600/20 py-2 font-semibold text-green-300 transition hover:bg-green-600/30">
                📊 Export as CSV
              </button>
            </div>
          </div>
        </div>

        {/* Insights & Alerts */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Real-Time Insights &amp; Alerts
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4 rounded-lg border border-green-600/50 bg-green-900/20 p-4">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-semibold text-green-300">
                  New Record: Downtown Dallas
                </p>
                <p className="text-sm text-gray-300">
                  Device DFW-001 reached 18.4% conversion — highest ever
                  recorded
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-yellow-600/50 bg-yellow-900/20 p-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-yellow-300">
                  Performance Dip: Irving
                </p>
                <p className="text-sm text-gray-300">
                  Conversions down 3.2% in last 7 days. Recommend content
                  refresh.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-blue-600/50 bg-blue-900/20 p-4">
              <span className="text-2xl">ℹ️</span>
              <div>
                <p className="font-semibold text-blue-300">
                  Device Maintenance: DFW-005
                </p>
                <p className="text-sm text-gray-300">
                  Uptime dipped to 97.2%. Schedule preventive maintenance soon.
                </p>
              </div>
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
            href="/demo/nfc-management"
            className="rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Next: NFC Device Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
