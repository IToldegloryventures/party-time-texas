import Link from 'next/link';

export default function SmartSocialSchedulerDemo() {
  const campaigns = [
    { name: 'Dallas Summer Sale', platform: 'Instagram', posts: 12, reach: '45K', engagement: '8.2%', scheduled: 'Aug 1-31' },
    { name: 'Plano Event Launch', platform: 'Facebook', posts: 8, reach: '32K', engagement: '6.5%', scheduled: 'Aug 5-20' },
    { name: 'Frisco Community Hub', platform: 'TikTok', posts: 15, reach: '120K', engagement: '12.4%', scheduled: 'Aug 1-31' },
    { name: 'Fort Worth Partnerships', platform: 'LinkedIn', posts: 6, reach: '18K', engagement: '3.2%', scheduled: 'Aug 10-25' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-pink-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Smart Social Scheduler
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Launch targeted campaigns, synced to real-world events. Drag-and-drop post builder, time-based scheduling, and direct links to geo-personalized landing pages.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-pink-700/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Active Campaigns</p>
            <p className="text-4xl font-bold text-pink-400">4</p>
            <p className="text-sm text-gray-400 mt-2">Across all platforms</p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Scheduled Posts</p>
            <p className="text-4xl font-bold text-purple-400">41</p>
            <p className="text-sm text-green-400 mt-2">↑ Next 30 days</p>
          </div>
          <div className="rounded-lg border border-cyan-700/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Total Reach</p>
            <p className="text-4xl font-bold text-cyan-400">215K</p>
            <p className="text-sm text-gray-400 mt-2">Estimated audience</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Avg Engagement</p>
            <p className="text-4xl font-bold text-green-400">7.6%</p>
            <p className="text-sm text-gray-400 mt-2">Across platforms</p>
          </div>
        </div>

        {/* Campaign Calendar Preview */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Campaign Calendar — August</h3>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-400 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const hasCampaign = [1, 5, 8, 10, 15, 20, 25, 28].includes(day);
              return (
                <div
                  key={day}
                  className={`p-3 rounded-lg text-center text-sm font-semibold border ${
                    hasCampaign
                      ? 'bg-pink-900/30 border-pink-600/50 text-pink-300'
                      : 'bg-gray-900/30 border-gray-700 text-gray-400'
                  }`}
                >
                  {day}
                  {hasCampaign && <div className="text-xs mt-1">📝</div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Campaigns Table */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Active Campaigns</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Campaign Name</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Platform</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Posts</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Reach</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Engagement</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Schedule</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.name} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-medium">{campaign.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">
                          {campaign.platform === 'Instagram' && '📷'}
                          {campaign.platform === 'Facebook' && '👍'}
                          {campaign.platform === 'TikTok' && '🎵'}
                          {campaign.platform === 'LinkedIn' && '💼'}
                        </span>
                        <span>{campaign.platform}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-300 font-semibold">{campaign.posts}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{campaign.reach}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className="text-green-400 font-semibold">{campaign.engagement}</span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-400">{campaign.scheduled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Post Builder Preview */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Drag-and-Drop Post Builder</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Builder Canvas */}
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide font-semibold">Design Canvas</p>
              <div className="bg-white rounded-lg p-4 min-h-80 flex flex-col">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-40 rounded-lg mb-4"></div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Dallas Summer Sale</h4>
                <p className="text-gray-600 text-sm mb-4">Limited-time offers on selected items. Tap to explore.</p>
                <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg mt-auto">Learn More</button>
              </div>
            </div>

            {/* Element Library */}
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide font-semibold">Available Elements</p>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 cursor-move hover:bg-gray-700 transition">
                  <p className="text-sm text-gray-300 font-semibold">📷 Image Block</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 cursor-move hover:bg-gray-700 transition">
                  <p className="text-sm text-gray-300 font-semibold">✏️ Text Block</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 cursor-move hover:bg-gray-700 transition">
                  <p className="text-sm text-gray-300 font-semibold">🔗 Button / CTA</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 cursor-move hover:bg-gray-700 transition">
                  <p className="text-sm text-gray-300 font-semibold">🎯 Product Showcase</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 cursor-move hover:bg-gray-700 transition">
                  <p className="text-sm text-gray-300 font-semibold">⭐ Testimonial</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduling & Triggers */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
            <div className="text-4xl mb-4">🗓️</div>
            <h3 className="font-bold text-purple-300 text-lg mb-4">Time-Based Scheduling</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Schedule by date</strong> — pick specific dates or recurring patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Optimal timing</strong> — AI suggests best posting times per platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Timezone-aware</strong> — auto-adjust for regional audiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Batch scheduling</strong> — queue entire campaigns at once</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-cyan-300 text-lg mb-4">NFC Scan &amp; Event Triggers</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Scan-triggered posts</strong> — auto-post when threshold of scans is hit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Event-based alerts</strong> — schedule posts around real-world events (concerts, markets)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Geo-triggered content</strong> — post localized messages by region</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">→</span>
                <span><strong className="text-white">Dynamic CTAs</strong> — links auto-populate with zone-specific landing pages</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Analytics & Performance */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Real-Time Analytics &amp; Optimization</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-3">Campaign Performance</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Real-time reach tracking</li>
                <li>• Engagement rate updates</li>
                <li>• Top-performing post metrics</li>
                <li>• Audience growth curves</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-950/50 to-pink-900/20 border border-pink-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-3">Click &amp; Conversion Tracking</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Link clicks and redirects</li>
                <li>• Conversion rates per post</li>
                <li>• UTM parameter tracking</li>
                <li>• Revenue attribution</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-3">A/B Testing</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Test copy variations</li>
                <li>• Image vs. video performance</li>
                <li>• CTA button text variants</li>
                <li>• Publish time optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integration with Geo-Personalized Pages */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Direct Links to Geo-Personalized Landing Pages</h3>
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 mb-4">Example: "Dallas Summer Sale" post links to dynamic landing pages per zone:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <p className="text-white font-semibold text-sm">Downtown Dallas Scans</p>
                <p className="text-xs text-gray-400 mt-2">→ Downtown-specific offer banner</p>
                <p className="text-xs text-gray-500 mt-1">lp.example.com/dallas-summer?zone=downtown</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <p className="text-white font-semibold text-sm">Plano Scans</p>
                <p className="text-xs text-gray-400 mt-2">→ Plano-specific offer banner</p>
                <p className="text-xs text-gray-500 mt-1">lp.example.com/dallas-summer?zone=plano</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <p className="text-white font-semibold text-sm">Frisco Scans</p>
                <p className="text-xs text-gray-400 mt-2">→ Frisco-specific offer banner</p>
                <p className="text-xs text-gray-500 mt-1">lp.example.com/dallas-summer?zone=frisco</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <p className="text-white font-semibold text-sm">Fort Worth Scans</p>
                <p className="text-xs text-gray-400 mt-2">→ Fort Worth-specific offer banner</p>
                <p className="text-xs text-gray-500 mt-1">lp.example.com/dallas-summer?zone=fortworth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/landing-page-builder" className="rounded-lg bg-gradient-to-r from-pink-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: Landing Page Builder →
          </Link>
        </div>
      </div>
    </div>
  );
}
