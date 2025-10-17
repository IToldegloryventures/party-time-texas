import Link from 'next/link';

export default function CustomerJourneyDemo() {
  const journeyStages = [
    { stage: 'Scan', count: 65700, color: 'blue', icon: '📱' },
    { stage: 'Landing Page', count: 42380, color: 'purple', icon: '🌐' },
    { stage: 'Lead Form', count: 18920, color: 'pink', icon: '📝' },
    { stage: 'Sale', count: 9460, color: 'green', icon: '💰' }
  ];

  const channels = [
    { name: 'NFC Scan', roi: 340, attribution: '28%', trend: 'up' },
    { name: 'Social Media', roi: 220, attribution: '18%', trend: 'up' },
    { name: 'Email Campaign', roi: 185, attribution: '15%', trend: 'stable' },
    { name: 'Direct Traffic', roi: 120, attribution: '10%', trend: 'down' },
    { name: 'Referral', roi: 95, attribution: '8%', trend: 'up' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-blue-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Customer Journey Insights
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Understand every step from scan to sale — and optimize it. Track attribution by channel and region, identify drop-off points, and compare ROI across NFC-triggered vs. social flows.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Total Scans</p>
            <p className="text-4xl font-bold text-blue-400">65.7K</p>
            <p className="text-sm text-gray-400 mt-2">Starting point of journey</p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Landing Page CTR</p>
            <p className="text-4xl font-bold text-purple-400">64.4%</p>
            <p className="text-sm text-green-400 mt-2">↑ 8% vs last month</p>
          </div>
          <div className="rounded-lg border border-pink-700/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Overall Conversion</p>
            <p className="text-4xl font-bold text-pink-400">14.4%</p>
            <p className="text-sm text-gray-400 mt-2">Scan to sale ratio</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Avg Order Value</p>
            <p className="text-4xl font-bold text-green-400">$127</p>
            <p className="text-sm text-gray-400 mt-2">From NFC-triggered sales</p>
          </div>
        </div>

        {/* Funnel Visualization */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Scan → Page → Lead → Sale Funnel</h3>
          <div className="space-y-6">
            {journeyStages.map((stage, idx) => {
              const percentage = idx === 0 ? 100 : Math.round((stage.count / journeyStages[0].count) * 100);
              return (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{stage.icon}</span>
                      <div>
                        <p className="font-semibold text-white">{stage.stage}</p>
                        <p className="text-sm text-gray-400">{stage.count.toLocaleString()} users</p>
                      </div>
                    </div>
                    <span className={`text-lg font-bold text-${stage.color}-400`}>{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-${stage.color}-500 to-${stage.color}-600`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  {idx < journeyStages.length - 1 && (
                    <p className="text-xs text-gray-500 mt-2">
                      Drop-off: {journeyStages[idx].count - journeyStages[idx + 1].count} users ({Math.round(((journeyStages[idx].count - journeyStages[idx + 1].count) / journeyStages[idx].count) * 100)}%)
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Channel Attribution */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Attribution by Channel &amp; Region</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Channel</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">ROI</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Attribution</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Conversion Rate</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Trend</th>
                </tr>
              </thead>
              <tbody>
                {channels.map((channel) => (
                  <tr key={channel.name} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-medium">{channel.name}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className="font-bold text-green-400">{channel.roi}%</span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${parseInt(channel.attribution)}%` }}
                          />
                        </div>
                        <span className="text-gray-300">{channel.attribution}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-300">
                      {channel.name === 'NFC Scan' ? '18.4%' : channel.name === 'Social Media' ? '12.3%' : channel.name === 'Email Campaign' ? '11.2%' : channel.name === 'Direct Traffic' ? '9.4%' : '7.1%'}
                    </td>
                    <td className="py-4 px-6 text-sm">
                      {channel.trend === 'up' ? (
                        <span className="text-green-400 font-semibold">↑ Growing</span>
                      ) : channel.trend === 'stable' ? (
                        <span className="text-yellow-400 font-semibold">→ Stable</span>
                      ) : (
                        <span className="text-red-400 font-semibold">↓ Declining</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Journey Drop-off Heat Zones */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-8">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="font-bold text-red-300 text-lg mb-4">Drop-off Heat Zones</h3>
            <ul className="space-y-4">
              <li className="p-3 rounded-lg bg-gray-900/50 border border-red-700/30">
                <p className="text-white font-semibold text-sm">Stage 1 → Stage 2: 23.4K drop-off</p>
                <p className="text-xs text-gray-400 mt-1">35% of users don't reach landing page</p>
              </li>
              <li className="p-3 rounded-lg bg-gray-900/50 border border-orange-700/30">
                <p className="text-white font-semibold text-sm">Stage 2 → Stage 3: 23.5K drop-off</p>
                <p className="text-xs text-gray-400 mt-1">55% don't complete lead form</p>
              </li>
              <li className="p-3 rounded-lg bg-gray-900/50 border border-yellow-700/30">
                <p className="text-white font-semibold text-sm">Stage 3 → Stage 4: 9.5K drop-off</p>
                <p className="text-xs text-gray-400 mt-1">50% of leads don't convert</p>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-bold text-cyan-300 text-lg mb-4">Optimization Insights</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Simplify landing pages</strong> — 35% drop-off suggests poor UX. A/B test shorter forms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Personalize by region</strong> — NFC scans in Dallas show 18% higher conversion. Apply messaging to other zones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Retarget drop-offs</strong> — 50% of leads abandon after form. Use email/SMS for nurture.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Prioritize NFC channel</strong> — 340% ROI vs. 220% for social. Invest more in NFC activation.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* NFC vs Social Comparison */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">NFC vs. Social-Triggered Flows</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-950/50 to-purple-900/20 border border-purple-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">NFC Scans</p>
              <p className="text-3xl font-bold text-purple-400 mb-4">18.4%</p>
              <p className="text-sm text-gray-300 mb-4">Conversion rate from tap to sale</p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• High intent users</li>
                <li>• Immediate engagement</li>
                <li>• Geo-verified actions</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Social Media Links</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">8.2%</p>
              <p className="text-sm text-gray-300 mb-4">Conversion rate from social click to sale</p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• Broader reach</li>
                <li>• Lower intent</li>
                <li>• Better for awareness</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Combined Strategy</p>
              <p className="text-3xl font-bold text-green-400 mb-4">14.4%</p>
              <p className="text-sm text-gray-300 mb-4">Blended conversion across all channels</p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• Retargeting power</li>
                <li>• Multi-touch attribution</li>
                <li>• Maximized funnel efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integration Panel */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Integrations &amp; Data Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">CRM &amp; Lead Scoring</p>
              <p className="text-xs text-gray-400">Sync journey data to Salesforce, HubSpot for automated follow-ups</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">Ad Platform Analytics</p>
              <p className="text-xs text-gray-400">Compare campaign ROI: Google Ads vs Meta vs NFC attribution</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">Email &amp; SMS Triggers</p>
              <p className="text-xs text-gray-400">Auto-nurture drop-offs at each funnel stage with targeted messaging</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/smart-social-scheduler" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: Smart Social Scheduler →
          </Link>
        </div>
      </div>
    </div>
  );
}
