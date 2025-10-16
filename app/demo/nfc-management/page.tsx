import Link from 'next/link';

export default function NFCManagementDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">NFC Device Management</h1>
          <p className="text-base text-gray-400">Complete Hardware Control</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Manage 247+ NFC Devices</h2>
          <p className="text-gray-300">Real-time device monitoring and control</p>
        </div>

        {/* Device Management Interface */}
        <div className="mb-20 rounded-xl border border-orange-900/50 bg-gray-900/50 p-8">
          {/* Header and Controls */}
          <div className="mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
            <div className="flex gap-2">
              <input type="text" placeholder="Search devices..." className="rounded bg-gray-800 text-sm text-gray-300 px-3 py-1 border border-gray-700 placeholder-gray-500" />
            </div>
            <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700">
              + Add Device
            </button>
          </div>

          {/* Device Stats */}
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
            {[
              { label: 'Total Devices', value: '247', color: 'orange', subtext: '+12 this month' },
              { label: 'Active', value: '236', color: 'green', subtext: '95.5% uptime' },
              { label: 'Inactive', value: '11', color: 'red', subtext: 'needs attention' },
              { label: 'Avg Scans/Day', value: '54.2K', color: 'blue', subtext: '+8% vs last week' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 hover:bg-gray-800 transition-colors">
                <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.subtext}</p>
              </div>
            ))}
          </div>

          {/* Device Table */}
          <div className="border border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-800/50 grid grid-cols-6 gap-4 p-4 text-xs font-semibold text-gray-400 border-b border-gray-700">
              <div>Device ID</div>
              <div>Type</div>
              <div>Location</div>
              <div>Status</div>
              <div>Scans</div>
              <div>Action</div>
            </div>
            {[
              { id: 'NFC-001', type: 'Card', location: 'Main Entrance', status: 'Active', scans: '1,234' },
              { id: 'NFC-002', type: 'Wristband', location: 'VIP Lounge', status: 'Active', scans: '892' },
              { id: 'NFC-003', type: 'Card', location: 'Registration', status: 'Inactive', scans: '456' },
              { id: 'NFC-004', type: 'Badge', location: 'Conference Room A', status: 'Active', scans: '2,156' }
            ].map((device, idx) => (
              <div key={idx} className="grid grid-cols-6 gap-4 p-4 border-t border-gray-700 text-sm text-gray-300 hover:bg-gray-800/30">
                <div className="font-mono text-xs text-orange-400">{device.id}</div>
                <div>{device.type}</div>
                <div>{device.location}</div>
                <div className={`font-semibold ${device.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                  {device.status}
                </div>
                <div>{device.scans}</div>
                <button className="text-orange-400 hover:text-orange-300 text-xs">Configure</button>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Operations */}
        <div className="mb-20 rounded-xl border border-gray-700 bg-gray-900/50 p-8">
          <h3 className="mb-6 text-lg font-bold text-white">Batch Operations</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-center">
              <div className="mb-4 text-3xl">⚡</div>
              <p className="font-semibold text-gray-300 mb-3">Bulk Program</p>
              <button className="w-full rounded bg-orange-600/20 text-orange-300 px-3 py-2 text-sm hover:bg-orange-600/30">
                Start Programming
              </button>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-center">
              <div className="mb-4 text-3xl">🔄</div>
              <p className="font-semibold text-gray-300 mb-3">Status Update</p>
              <button className="w-full rounded bg-orange-600/20 text-orange-300 px-3 py-2 text-sm hover:bg-orange-600/30">
                Update Selected
              </button>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-center">
              <div className="mb-4 text-3xl">📊</div>
              <p className="font-semibold text-gray-300 mb-3">Performance</p>
              <button className="w-full rounded bg-orange-600/20 text-orange-300 px-3 py-2 text-sm hover:bg-orange-600/30">
                View Report
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Home
          </Link>
          <Link href="/demo/nfc-analytics" className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
