import Link from 'next/link';

export default function NFCManagementDemo() {
  const devices = [
    { id: 'DFW-001', location: 'Downtown Dallas', status: 'active', scans: 12400, uptime: '99.8%', battery: '92%', lastSync: '2 min ago' },
    { id: 'DFW-002', location: 'Uptown Dallas', status: 'active', scans: 9800, uptime: '99.5%', battery: '87%', lastSync: '5 min ago' },
    { id: 'DFW-003', location: 'Plano East', status: 'active', scans: 11200, uptime: '99.1%', battery: '78%', lastSync: '3 min ago' },
    { id: 'DFW-004', location: 'Fort Worth Downtown', status: 'maintenance', scans: 7200, uptime: '97.2%', battery: '45%', lastSync: '45 min ago' },
    { id: 'DFW-005', location: 'Arlington', status: 'active', scans: 8600, uptime: '98.9%', battery: '81%', lastSync: '1 min ago' },
    { id: 'DFW-006', location: 'Frisco', status: 'inactive', scans: 6800, uptime: '94.2%', battery: '12%', lastSync: '2 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-orange-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            NFC Device Management
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Complete hardware control across all locations. Real-time status monitoring, location-based device ID labels, batch programming, and performance reports.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-orange-700/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Total Devices</p>
            <p className="text-4xl font-bold text-orange-400">247</p>
            <p className="text-sm text-gray-400 mt-2">Across North DFW</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Active</p>
            <p className="text-4xl font-bold text-green-400">236</p>
            <p className="text-sm text-green-400 mt-2">95.5% uptime average</p>
          </div>
          <div className="rounded-lg border border-red-700/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Maintenance</p>
            <p className="text-4xl font-bold text-red-400">11</p>
            <p className="text-sm text-red-400 mt-2">Needs attention</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Avg Scans/Day</p>
            <p className="text-4xl font-bold text-blue-400">54.2K</p>
            <p className="text-sm text-green-400 mt-2">↑ 8% vs last week</p>
          </div>
        </div>

        {/* Device Management Controls */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by device ID or location..."
                className="w-full rounded-lg bg-gray-900 text-sm text-gray-300 px-4 py-3 border border-gray-700 placeholder-gray-500 hover:border-gray-600 focus:border-orange-600 transition"
              />
            </div>
            <select className="rounded-lg bg-gray-900 text-sm text-gray-300 px-4 py-3 border border-gray-700 hover:border-gray-600">
              <option>All Locations</option>
              <option>Downtown Dallas</option>
              <option>Plano East</option>
              <option>Uptown Dallas</option>
              <option>Fort Worth</option>
            </select>
            <button className="rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition">
              + Add Device
            </button>
          </div>
        </div>

        {/* Device Table */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Deployed Devices — Real-Time Status</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Device ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Location</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Scans</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Uptime</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Battery</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Last Sync</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-mono font-semibold">{device.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{device.location}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${device.status === 'active' ? 'bg-green-500/20 text-green-400' : device.status === 'maintenance' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                        {device.status === 'active' ? '🟢 Active' : device.status === 'maintenance' ? '🟡 Maintenance' : '🔴 Inactive'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-300">{device.scans.toLocaleString()}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={device.uptime >= '99' ? 'text-green-400' : device.uptime >= '98' ? 'text-yellow-400' : 'text-orange-400'}>
                        {device.uptime}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${parseInt(device.battery) >= 80 ? 'bg-green-500' : parseInt(device.battery) >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${device.battery}` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-6">{device.battery}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-400">{device.lastSync}</td>
                    <td className="py-4 px-6 text-sm">
                      <button className="text-orange-400 hover:text-orange-300 font-semibold transition">⚙️ Config</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Features */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-bold text-orange-300 text-lg mb-4">Scan Metrics Per Device</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Real-time scan count</strong> — updates every second</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Engagement metrics</strong> — conversion % per device</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Performance trends</strong> — identify top-performing devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Anomaly alerts</strong> — get notified of unusual activity</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-purple-300 text-lg mb-4">Batch Programming &amp; Deployment</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Bulk program devices</strong> — update firmware for 50+ at once</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Location-based labeling</strong> — auto-tag devices by zone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Task integrations</strong> — link deployments to work orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Scheduled updates</strong> — push changes during off-peak hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Health & Performance Dashboard */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Device Health &amp; Performance Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50 p-6">
              <p className="text-sm font-semibold text-gray-300 mb-4">Network Health</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Connectivity</span>
                  <span className="text-sm font-bold text-green-400">99.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.2%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Signal Strength</span>
                  <span className="text-sm font-bold text-green-400">87 dBm</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50 p-6">
              <p className="text-sm font-semibold text-gray-300 mb-4">Uptime &amp; Availability</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Monthly Uptime</span>
                  <span className="text-sm font-bold text-blue-400">99.1%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '99.1%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Avg Downtime</span>
                  <span className="text-sm font-bold text-blue-400">6.5 hours</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 border border-cyan-700/50 p-6">
              <p className="text-sm font-semibold text-gray-300 mb-4">Performance &amp; Reliability</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Error Rate</span>
                  <span className="text-sm font-bold text-cyan-400">0.3%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Reliability Score</span>
                  <span className="text-sm font-bold text-cyan-400">98.9/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Firmware Updates */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Firmware Updates &amp; Deployment Tasks</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-white text-lg">Firmware v2.4.1 Available</p>
                  <p className="text-sm text-gray-400 mt-1">Includes battery optimization and improved connectivity</p>
                </div>
                <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700">
                  Deploy to All
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-xs">Devices queued:</span>
                <span className="font-bold">142 / 247</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full" style={{ width: '57%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-white text-lg">Field Service Task: Battery Replacement</p>
                  <p className="text-sm text-gray-400 mt-1">Priority: High | 23 devices in Frisco & Arlington need replacement</p>
                </div>
                <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700">
                  Create Work Order
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-xs">Completion:</span>
                <span className="font-bold">8 / 23</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Actions &amp; Controls</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-600/50 hover:border-blue-500 hover:bg-blue-900/20 transition">
              <div className="text-2xl mb-2">🔄</div>
              <p className="font-semibold text-white text-sm">Sync All Devices</p>
              <p className="text-xs text-gray-400 mt-1">Pull latest metrics</p>
            </button>
            <button className="p-4 rounded-lg bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-600/50 hover:border-green-500 hover:bg-green-900/20 transition">
              <div className="text-2xl mb-2">🧪</div>
              <p className="font-semibold text-white text-sm">Test Device</p>
              <p className="text-xs text-gray-400 mt-1">Run connectivity test</p>
            </button>
            <button className="p-4 rounded-lg bg-gradient-to-br from-orange-900/30 to-orange-900/10 border border-orange-600/50 hover:border-orange-500 hover:bg-orange-900/20 transition">
              <div className="text-2xl mb-2">🔌</div>
              <p className="font-semibold text-white text-sm">Power Reset</p>
              <p className="text-xs text-gray-400 mt-1">Remote device restart</p>
            </button>
            <button className="p-4 rounded-lg bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-600/50 hover:border-red-500 hover:bg-red-900/20 transition">
              <div className="text-2xl mb-2">⚠️</div>
              <p className="font-semibold text-white text-sm">Report Issue</p>
              <p className="text-xs text-gray-400 mt-1">Log malfunction</p>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/task-management" className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: Task Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
