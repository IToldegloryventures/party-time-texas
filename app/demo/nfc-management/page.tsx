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
          <h2 className="mb-4 text-3xl font-bold text-white">Manage 247+ NFC Devices Across All Organizations</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Register, track, and optimize NFC devices with real-time performance monitoring.</p>
          <button className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Manage Devices
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-8">
              <div className="mb-4 text-3xl">🏷️</div>
              <h4 className="mb-3 text-xl font-bold text-orange-300">Device Registration</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Batch management (Business Card - Batch #12)</li>
                <li>✓ Device type categorization</li>
                <li>✓ Status tracking (Active/Inactive)</li>
                <li>✓ Inventory management</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-8">
              <div className="mb-4 text-3xl">📈</div>
              <h4 className="mb-3 text-xl font-bold text-red-300">Performance Monitoring</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Real-time scan counts</li>
                <li>✓ Device utilization metrics</li>
                <li>✓ Success rate tracking</li>
                <li>✓ Health status alerts</li>
              </ul>
            </div>

            <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-8">
              <div className="mb-4 text-3xl">⚡</div>
              <h4 className="mb-3 text-xl font-bold text-yellow-300">Batch Operations</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Bulk device programming</li>
                <li>✓ Mass status updates</li>
                <li>✓ Performance comparisons</li>
                <li>✓ Scheduled deployments</li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-8">
              <div className="mb-4 text-3xl">📊</div>
              <h4 className="mb-3 text-xl font-bold text-amber-300">Analytics Integration</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Per-device scan tracking</li>
                <li>✓ ROI attribution</li>
                <li>✓ Performance optimization</li>
                <li>✓ Trend analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-orange-900/30 to-red-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-orange-400">2.4M+</div>
              <p className="text-gray-300">Scans tracked across all devices</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-red-400">25%</div>
              <p className="text-gray-300">Cost reduction through data insights</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-yellow-400">100%</div>
              <p className="text-gray-300">Device visibility and control</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-orange-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. Register devices via admin panel</li>
                  <li>2. Assign to teams or locations</li>
                  <li>3. Monitor real-time performance</li>
                  <li>4. Run batch operations as needed</li>
                  <li>5. Optimize based on analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-red-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ NFC hardware provided</li>
                  <li>✓ Subscription tier: Professional+</li>
                  <li>✓ Internet connectivity required</li>
                  <li>✓ Unlimited device slots</li>
                  <li>✓ 24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Multi-Location Retail</h4>
              <p className="text-sm text-gray-300">Manage devices across 50+ store locations with centralized control</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Event Series</h4>
              <p className="text-sm text-gray-300">Deploy and track devices for weekly events with performance metrics</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Corporate Networks</h4>
              <p className="text-sm text-gray-300">Enterprise-scale device management across multiple organizations</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/geo-marketing" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/nfc-analytics" className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
