import Link from 'next/link';

export default function NFCAnalyticsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">NFC Analytics Dashboard</h1>
          <p className="text-base text-gray-400">Real-Time Performance Insights</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">2.4M Total Scans, 34.2% Conversion Rate</h2>
          <p className="text-gray-300">Comprehensive real-time analytics dashboard</p>
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-20 rounded-xl border border-cyan-900/50 bg-gray-900/50 p-8">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
            <h3 className="text-lg font-bold text-white">Analytics Overview</h3>
            <div className="flex gap-2">
              <select className="rounded bg-gray-800 text-sm text-gray-300 px-3 py-1 border border-gray-700">
                <option>Last 30 Days</option>
              </select>
              <button className="rounded bg-cyan-600/20 text-cyan-300 px-3 py-1 text-sm hover:bg-cyan-600/30">
                Export
              </button>
            </div>
          </div>

          {/* Main KPIs */}
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
            {[
              { label: 'Total Scans', value: '2.4M', trend: '+12%', color: 'cyan' },
              { label: 'Conversion Rate', value: '34.2%', trend: '+2.3%', color: 'blue' },
              { label: 'Avg Engagement', value: '8.5m', trend: '+15%', color: 'indigo' },
              { label: 'Revenue Attributed', value: '$487K', trend: '+8%', color: 'purple' }
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                <p className="text-xs text-gray-400 mb-2">{kpi.label}</p>
                <p className={`text-2xl font-bold text-${kpi.color}-400 mb-1`}>{kpi.value}</p>
                <p className="text-xs text-green-400">{kpi.trend}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Scan Trend Chart */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-300">Scan Trend (Daily)</p>
              <div className="h-48 flex items-end justify-around gap-1">
                {[
                  { val: 45, day: 'Mon' },
                  { val: 52, day: 'Tue' },
                  { val: 48, day: 'Wed' },
                  { val: 61, day: 'Thu' },
                  { val: 55, day: 'Fri' },
                  { val: 68, day: 'Sat' },
                  { val: 72, day: 'Sun' }
                ].map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t hover:opacity-80 transition-opacity" style={{ height: `${(data.val / 72) * 100}%` }}></div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">{data.day}</span>
                    <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">{data.val}k</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Performance */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-300">Top Performing Devices</p>
              <div className="space-y-3">
                {[
                  { name: 'NFC-001', location: 'Main Entrance', scans: 12451, percentage: 95, status: '✓' },
                  { name: 'NFC-004', location: 'Stage Area', scans: 8923, percentage: 72, status: '✓' },
                  { name: 'NFC-002', location: 'VIP Lounge', scans: 7654, percentage: 61, status: '⚠' }
                ].map((device) => (
                  <div key={device.name} className="group">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <div>
                        <span className="text-gray-300 font-mono">{device.name}</span>
                        <span className="text-gray-500 ml-2">{device.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">{device.scans.toLocaleString()}</span>
                        <span className={device.status === '✓' ? 'text-green-400' : 'text-yellow-400'}>{device.status}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 h-2 rounded-full transition-all group-hover:from-cyan-500 group-hover:to-blue-500" style={{ width: `${device.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="mt-8 rounded-lg border border-gray-700 bg-gray-800/30 p-6">
            <p className="mb-6 text-sm font-semibold text-gray-300">Conversion Funnel</p>
            <div className="space-y-2">
              {[
                { stage: 'Landing Page Loads', count: '487,234', percentage: 100 },
                { stage: 'NFC Scans', count: '156,892', percentage: 32 },
                { stage: 'Page Views', count: '98,456', percentage: 20 },
                { stage: 'Conversions', count: '34,567', percentage: 7 }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 h-10 rounded flex items-center px-4 font-semibold text-white text-sm`} style={{ maxWidth: `${step.percentage * 2}px` }}>
                    {step.stage}: {step.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/task-management" className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
