export default function BusinessUserDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Business User Dashboard
          </h1>
          <p className="text-lg text-gray-300">
            NFC-enabled business cards, conversion funnel analysis, and per-user behavioral profiles
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Key Metrics */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Key Performance Metrics
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-purple-100">
                Total NFC Scans
              </div>
              <div className="text-4xl font-bold text-white">2,847</div>
              <div className="mt-3 text-xs text-purple-200">
                +12% from last month
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-blue-100">
                Conversion Rate
              </div>
              <div className="text-4xl font-bold text-white">34.2%</div>
              <div className="mt-3 text-xs text-blue-200">
                Tap to action completed
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-green-100">
                Unique Contacts
              </div>
              <div className="text-4xl font-bold text-white">1,256</div>
              <div className="mt-3 text-xs text-green-200">
                New leads this month
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-orange-100">
                Est. ROI
              </div>
              <div className="text-4xl font-bold text-white">$12.4K</div>
              <div className="mt-3 text-xs text-orange-200">
                Based on conversion value
              </div>
            </div>
          </div>
        </div>

        {/* Active Business Cards */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Active Business Cards
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-40 bg-gradient-to-br from-indigo-400 to-purple-600 p-6">
                <div className="text-sm font-semibold text-white">
                  Main Card
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                  Standard NFC Card
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    SCANS THIS MONTH
                  </span>
                  <div className="text-3xl font-bold text-gray-900">1,245</div>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    CONVERSION RATE
                  </span>
                  <div className="text-2xl font-bold text-gray-900">38%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-3/5 rounded-full bg-indigo-600"></div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-40 bg-gradient-to-br from-pink-400 to-rose-600 p-6">
                <div className="text-sm font-semibold text-white">
                  Event Card
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                  Signage Variant
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    SCANS THIS MONTH
                  </span>
                  <div className="text-3xl font-bold text-gray-900">892</div>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    CONVERSION RATE
                  </span>
                  <div className="text-2xl font-bold text-gray-900">42%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-1/2 rounded-full bg-pink-600"></div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-40 bg-gradient-to-br from-cyan-400 to-blue-600 p-6">
                <div className="text-sm font-semibold text-white">
                  Partner Card
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                  Co-Marketing Variant
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    SCANS THIS MONTH
                  </span>
                  <div className="text-3xl font-bold text-gray-900">710</div>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    CONVERSION RATE
                  </span>
                  <div className="text-2xl font-bold text-gray-900">28%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-1/3 rounded-full bg-cyan-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Conversion Funnel
          </h2>
          <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      NFC Scans
                    </span>
                    <span className="text-sm font-bold text-blue-400">
                      2,847
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-700">
                    <div className="h-4 w-full rounded-full bg-blue-600"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      Visited Landing Page
                    </span>
                    <span className="text-sm font-bold text-green-400">
                      2,103 (74%)
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-700">
                    <div className="h-4 w-3/4 rounded-full bg-green-600"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      Engaged with Content
                    </span>
                    <span className="text-sm font-bold text-yellow-400">
                      1,542 (54%)
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-700">
                    <div className="h-4 w-1/2 rounded-full bg-yellow-600"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      Completed Action
                    </span>
                    <span className="text-sm font-bold text-purple-400">
                      973 (34%)
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-700">
                    <div className="h-4 w-1/3 rounded-full bg-purple-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Behavioral Profiles */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Top Behavioral Profiles
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg">
              <div>
                <div className="text-lg font-bold text-white">
                  Enterprise Decision Maker
                </div>
                <div className="text-sm text-gray-300">
                  High engagement, multiple touches
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">487</div>
                <div className="text-xs text-gray-400">users</div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg">
              <div>
                <div className="text-lg font-bold text-white">
                  Quick Converter
                </div>
                <div className="text-sm text-gray-300">
                  Rapid decision and action
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">324</div>
                <div className="text-xs text-gray-400">users</div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg">
              <div>
                <div className="text-lg font-bold text-white">
                  Research Phase
                </div>
                <div className="text-sm text-gray-300">
                  High engagement, low conversion
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">256</div>
                <div className="text-xs text-gray-400">users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Landing Pages */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Custom Landing Pages
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="mb-3 text-lg font-bold text-white">
                Product Launch Page
              </div>
              <div className="mb-4 text-sm text-gray-400">
                UTM tracking enabled • Cookie tracking active
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-gray-400">Visits</div>
                  <div className="text-2xl font-bold text-white">1,523</div>
                </div>
                <div>
                  <div className="text-gray-400">CTR</div>
                  <div className="text-2xl font-bold text-white">42%</div>
                </div>
                <div>
                  <div className="text-gray-400">Bounce</div>
                  <div className="text-2xl font-bold text-white">18%</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600"></div>
              <div className="mb-3 text-lg font-bold text-white">
                Case Study Hub
              </div>
              <div className="mb-4 text-sm text-gray-400">
                UTM tracking enabled • Cookie tracking active
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-gray-400">Visits</div>
                  <div className="text-2xl font-bold text-white">892</div>
                </div>
                <div>
                  <div className="text-gray-400">CTR</div>
                  <div className="text-2xl font-bold text-white">38%</div>
                </div>
                <div>
                  <div className="text-gray-400">Bounce</div>
                  <div className="text-2xl font-bold text-white">24%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Available */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Business User Features
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ NFC Business Cards & Signage
              </div>
              <p className="text-sm text-gray-300">
                Create and distribute custom NFC-enabled business cards with full
                tracking integration
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Custom Landing Pages
              </div>
              <p className="text-sm text-gray-300">
                Build branded pages with UTM and cookie tracking for precise
                attribution
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Conversion Funnel Analysis
              </div>
              <p className="text-sm text-gray-300">
                Visualize the entire customer journey from scan to conversion
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Per-User Behavioral Profiles
              </div>
              <p className="text-sm text-gray-300">
                Track individual user behavior patterns tied to CRM logins and
                records
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ ROI Dashboard
              </div>
              <p className="text-sm text-gray-300">
                Measure campaign effectiveness and attribute revenue to NFC
                engagement
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Export & Reporting
              </div>
              <p className="text-sm text-gray-300">
                Generate CSV, PDF reports for stakeholder presentations and
                audits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
