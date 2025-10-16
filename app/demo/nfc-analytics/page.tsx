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
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Comprehensive analytics for NFC engagement, revenue attribution, and performance optimization.</p>
          <button className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            View Dashboard
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
              <div className="mb-4 text-3xl">📊</div>
              <h4 className="mb-3 text-xl font-bold text-cyan-300">Real-Time Metrics</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Live scan tracking</li>
                <li>✓ Conversion rate monitoring</li>
                <li>✓ Revenue attribution</li>
                <li>✓ Dashboard refresh every 5 seconds</li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-8">
              <div className="mb-4 text-3xl">📈</div>
              <h4 className="mb-3 text-xl font-bold text-blue-300">Device Performance</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Per-device analytics</li>
                <li>✓ Success rate tracking</li>
                <li>✓ Utilization optimization</li>
                <li>✓ Performance rankings</li>
              </ul>
            </div>

            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-8">
              <div className="mb-4 text-3xl">📉</div>
              <h4 className="mb-3 text-xl font-bold text-indigo-300">Time-Series Analysis</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Hourly, daily, monthly trends</li>
                <li>✓ Peak time identification</li>
                <li>✓ Seasonal patterns</li>
                <li>✓ Forecasting capabilities</li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
              <div className="mb-4 text-3xl">📋</div>
              <h4 className="mb-3 text-xl font-bold text-purple-300">Export Capabilities</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ PDF reports</li>
                <li>✓ CSV data export</li>
                <li>✓ Custom date ranges</li>
                <li>✓ Scheduled email reports</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-cyan-400">ROI Tracking</div>
              <p className="text-gray-300">Track ROI from every NFC interaction</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400">Performance</div>
              <p className="text-gray-300">Identify high-performing devices</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-indigo-400">Data-Driven</div>
              <p className="text-gray-300">Make informed marketing decisions</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-cyan-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. NFC devices collect scan data</li>
                  <li>2. Data streams to analytics engine</li>
                  <li>3. Real-time aggregation</li>
                  <li>4. Dashboard display updates</li>
                  <li>5. Export to reports/csv</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-blue-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Subscription tier: Professional+</li>
                  <li>✓ Minimum 100 scans/month</li>
                  <li>✓ 12-month historical data</li>
                  <li>✓ Real-time API access</li>
                  <li>✓ Custom report builder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Campaign Analysis</h4>
              <p className="text-sm text-gray-300">Measure marketing campaign effectiveness through NFC engagement metrics</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Event ROI Tracking</h4>
              <p className="text-sm text-gray-300">Calculate event success through real-time attendance and engagement data</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Conversion Optimization</h4>
              <p className="text-sm text-gray-300">Identify bottlenecks and optimize conversion funnels with detailed analytics</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/task-management" className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
