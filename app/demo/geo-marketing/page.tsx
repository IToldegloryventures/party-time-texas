import Link from 'next/link';

export default function GeoMarketingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Geo-Marketing Intelligence</h1>
          <p className="text-base text-gray-400">Regional Analytics & Performance Metrics</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Track Performance Across Regions</h2>
          <p className="text-gray-300">Analyze customer engagement, conversion rates, and ROI by geographic region to optimize marketing spend</p>
        </div>

        {/* Regional Performance Dashboard */}
        <div className="mb-20 rounded-xl border border-purple-900/50 bg-gray-900/50 p-8">
          {/* Header with Date Range */}
          <div className="mb-8 flex items-center justify-between border-b border-gray-700 pb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Regional Performance</h3>
              <p className="text-sm text-gray-400">Q4 2024 Campaign Results</p>
            </div>
            <select className="rounded bg-gray-800 text-sm text-gray-300 px-4 py-2 border border-gray-700">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Year to Date</option>
            </select>
          </div>

          {/* Regional KPI Cards */}
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Total Regional Reach</p>
              <p className="text-3xl font-bold text-blue-400 mb-2">2.4M</p>
              <p className="text-xs text-gray-500">Customers across 47 regions</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Avg Conversion Rate</p>
              <p className="text-3xl font-bold text-purple-400 mb-2">12.8%</p>
              <p className="text-xs text-green-400">↑ 2.3% vs last period</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Regional ROI</p>
              <p className="text-3xl font-bold text-pink-400 mb-2">340%</p>
              <p className="text-xs text-gray-500">Average across all regions</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Top Performing Region</p>
              <p className="text-3xl font-bold text-cyan-400 mb-2">North America</p>
              <p className="text-xs text-gray-500">18.4% conversion rate</p>
            </div>
          </div>

          {/* Regional Heatmap */}
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-300">Marketing Performance Heatmap by Region</p>
              <div className="flex gap-2 text-xs">
                <span className="text-gray-400">Conversion Rate: Low</span>
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#3b82f6' }}></div>
                <span className="text-gray-400">Med</span>
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#f59e0b' }}></div>
                <span className="text-gray-400">High</span>
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#ef4444' }}></div>
              </div>
            </div>
            <div className="aspect-video rounded bg-gray-900 overflow-auto">
              <div className="grid grid-cols-4 gap-2 p-6 min-h-full">
                {[
                  { region: 'North America', conversion: 18.4, customers: 580000, status: 'hot' },
                  { region: 'Europe', conversion: 14.2, customers: 420000, status: 'warm' },
                  { region: 'Asia-Pacific', conversion: 16.8, customers: 650000, status: 'hot' },
                  { region: 'Latin America', conversion: 9.3, customers: 290000, status: 'cool' },
                  { region: 'Middle East', conversion: 11.5, customers: 180000, status: 'medium' },
                  { region: 'Africa', conversion: 8.2, customers: 145000, status: 'cool' },
                  { region: 'Central Asia', conversion: 10.7, customers: 95000, status: 'medium' },
                  { region: 'Oceania', conversion: 13.9, customers: 135000, status: 'warm' }
                ].map((region) => {
                  let bgColor = '';
                  let textColor = '';
                  if (region.status === 'hot') {
                    bgColor = 'bg-red-900/60 border-red-700';
                    textColor = 'text-red-200';
                  } else if (region.status === 'warm') {
                    bgColor = 'bg-orange-900/60 border-orange-700';
                    textColor = 'text-orange-200';
                  } else if (region.status === 'medium') {
                    bgColor = 'bg-yellow-900/60 border-yellow-700';
                    textColor = 'text-yellow-200';
                  } else {
                    bgColor = 'bg-blue-900/60 border-blue-700';
                    textColor = 'text-blue-200';
                  }
                  return (
                    <div key={region.region} className={`rounded-lg border ${bgColor} p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 transition-all`}>
                      <div>
                        <p className={`font-semibold text-sm mb-2 ${textColor}`}>{region.region}</p>
                        <p className={`text-2xl font-bold ${textColor} mb-1`}>{region.conversion}%</p>
                        <p className="text-xs text-gray-300">Conversion Rate</p>
                      </div>
                      <div className="border-t border-gray-600/30 pt-2 mt-2">
                        <p className="text-xs text-gray-400">{(region.customers / 1000).toFixed(0)}K Customers</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Campaign Performance by Region */}
          <div>
            <p className="mb-4 text-sm font-semibold text-gray-300">Campaign Performance Breakdown</p>
            <div className="space-y-3">
              {[
                { campaign: 'Email Campaign - Q4', regions: ['North America', 'Europe', 'Asia-Pacific'], engagement: 34, roi: 420 },
                { campaign: 'Social Media Ads', regions: ['North America', 'Latin America'], engagement: 22, roi: 280 },
                { campaign: 'Influencer Partnerships', regions: ['Europe', 'Asia-Pacific'], engagement: 28, roi: 350 },
                { campaign: 'Regional Events', regions: ['All Regions'], engagement: 41, roi: 510 }
              ].map((campaign) => (
                <div key={campaign.campaign} className="rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-gray-200 text-sm">{campaign.campaign}</p>
                      <p className="text-xs text-gray-400">{campaign.regions.join(', ')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-purple-400">{campaign.roi}%</p>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Engagement</span>
                    <div className="flex-grow bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: `${campaign.engagement}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-300 font-semibold">{campaign.engagement}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Insights Section */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <div className="text-2xl mb-3">📍</div>
            <h3 className="font-bold text-purple-300 mb-3">Top Performing Regions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between"><span>1. North America</span><span className="text-purple-400">18.4% Conv.</span></li>
              <li className="flex justify-between"><span>2. Asia-Pacific</span><span className="text-purple-400">16.8% Conv.</span></li>
              <li className="flex justify-between"><span>3. Europe</span><span className="text-purple-400">14.2% Conv.</span></li>
              <li className="flex justify-between"><span>4. Oceania</span><span className="text-purple-400">13.9% Conv.</span></li>
            </ul>
          </div>

          <div className="rounded-lg border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-bold text-cyan-300 mb-3">Optimization Opportunities</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span><span>Africa region underperforming - increase budget allocation by 25%</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span><span>Latin America shows growth potential - consider expansion</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span><span>Scale successful campaigns from North America to Europe</span></li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Home
          </Link>
          <Link href="/demo/nfc-management" className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
