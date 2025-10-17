import Link from 'next/link';

export default function LandingPageBuilderDemo() {
  const templates = [
    { name: 'Downtown Dallas', region: 'City Center', conversions: '18.4%' },
    { name: 'Plano Tech Hub', region: 'North DFW', conversions: '17.1%' },
    { name: 'Uptown Dallas', region: 'Premium District', conversions: '16.2%' },
    { name: 'Fort Worth', region: 'West DFW', conversions: '15.3%' },
    { name: 'Arlington', region: 'Central', conversions: '14.8%' },
    { name: 'Frisco', region: 'North', conversions: '13.7%' },
  ];

  const abtests = [
    { test: 'Dallas Banner Copy', zones: 'Downtown + Uptown', variant_a: 'Discover Local Offers', variant_b: 'Tap to Unlock Deals', winner: 'Variant B (12% lift)' },
    { test: 'Plano CTA Button', zones: 'Plano East + Frisco', variant_a: 'Learn More', variant_b: 'Get Started Today', winner: 'Variant A (8% lift)' },
    { test: 'Fort Worth Hero Image', zones: 'Fort Worth + Arlington', variant_a: 'Product Focus', variant_b: 'Lifestyle Focus', winner: 'Variant B (6% lift)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-cyan-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Landing Page Builder
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Create stunning geo-personalized pages with NFC integration. Drag-and-drop editor, regional templates, real-time preview, and A/B testing.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-cyan-700/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Pages Created</p>
            <p className="text-4xl font-bold text-cyan-400">24</p>
            <p className="text-sm text-gray-400 mt-2">Across DFW regions</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Avg Conversion</p>
            <p className="text-4xl font-bold text-blue-400">15.9%</p>
            <p className="text-sm text-green-400 mt-2">↑ 5% with personalization</p>
          </div>
          <div className="rounded-lg border border-pink-700/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">A/B Tests Running</p>
            <p className="text-4xl font-bold text-pink-400">8</p>
            <p className="text-sm text-gray-400 mt-2">Active experiments</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Linked Devices</p>
            <p className="text-4xl font-bold text-green-400">47</p>
            <p className="text-sm text-gray-400 mt-2">NFC enabled</p>
          </div>
        </div>

        {/* Builder Interface */}
        <div className="mb-16 rounded-xl border border-gray-700 bg-gray-800/50 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Drag-and-Drop Page Editor</h3>
            <button className="rounded-lg bg-cyan-600 px-6 py-2 text-sm font-semibold text-white hover:bg-cyan-700">
              Preview & Publish
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 bg-gray-900/50 rounded-lg p-4">
            {/* Left Sidebar - Elements */}
            <div className="col-span-1 space-y-3 border-r border-gray-700 pr-4">
              <div className="text-xs font-semibold text-gray-400 uppercase">Available Elements</div>
              <div className="space-y-2">
                {['Hero Banner', 'Headline', 'Body Text', 'Image Block', 'Button / CTA', 'Form Field', 'Testimonial', 'Product Card'].map((item) => (
                  <div key={item} className="rounded bg-gray-800 px-3 py-2 text-sm text-gray-300 cursor-move hover:bg-gray-700 flex items-center gap-2 transition">
                    <span className="text-xs text-gray-500">⋮⋮</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Area */}
            <div className="col-span-2 rounded-lg border border-gray-700 bg-gradient-to-b from-white/5 to-white/2 p-8">
              <div className="space-y-6">
                <div className="space-y-3 text-center">
                  <h1 className="text-4xl font-bold text-white">Dallas Summer Sale</h1>
                  <p className="text-lg text-gray-300">Exclusive Offers for Downtown Shoppers</p>
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center border border-gray-700">
                  <span className="text-gray-400">📸 Product Showcase [Placeholder]</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <button className="px-8 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700">Claim Offer</button>
                  <button className="px-8 py-3 rounded-lg border border-cyan-600 text-cyan-400 font-semibold hover:bg-cyan-600/10">Learn More</button>
                </div>
              </div>
            </div>

            {/* Right Properties Panel */}
            <div className="col-span-1 space-y-4 border-l border-gray-700 pl-4">
              <div className="text-xs font-semibold text-gray-400 uppercase">Element Properties</div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-400 block mb-2">Font Size</label>
                  <input type="range" className="w-full" min="12" max="48" defaultValue="32" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">Background Color</label>
                  <div className="flex gap-2">
                    {['#06B6D4', '#0EA5E9', '#3B82F6', '#8B5CF6'].map((color) => (
                      <div key={color} className="h-6 w-6 rounded border-2 border-gray-600 cursor-pointer hover:border-white transition" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">Alignment</label>
                  <div className="flex gap-2">
                    {['Left', 'Center', 'Right'].map((align) => (
                      <button key={align} className="flex-1 rounded bg-gray-700 text-gray-300 py-1 text-xs hover:bg-gray-600 transition">{align}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Template Library */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-white">Template Library — DFW Regions</h3>
          <p className="text-gray-400 mb-6 text-sm">Pre-built templates optimized for each North DFW region. Customize and launch in minutes.</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {templates.map((template) => (
              <div key={template.name} className="rounded-lg border border-gray-700 bg-gray-900/50 hover:border-cyan-600/50 transition-all cursor-pointer group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 flex flex-col gap-2 p-3 text-xs font-semibold">
                    <div className="h-3 bg-white rounded w-3/4"></div>
                    <div className="h-12 bg-white rounded w-full"></div>
                    <div className="h-3 bg-white rounded w-1/2"></div>
                  </div>
                  <span className="text-white font-bold text-lg relative z-10 text-center px-3">{template.name}</span>
                </div>
                <div className="p-4 border-t border-gray-700">
                  <p className="text-sm font-medium text-gray-300">{template.region}</p>
                  <p className="text-xs text-cyan-400 mt-2 font-semibold">Avg Conversion: {template.conversions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NFC Device Linking */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Auto-Link to NFC Devices &amp; Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-gradient-to-br from-purple-950/50 to-purple-900/20 border border-purple-700/50 p-6">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-bold text-white mb-3">Link Device to Page</h4>
              <select className="w-full rounded-lg bg-gray-800 text-sm text-gray-300 px-4 py-2 border border-gray-700 mb-3">
                <option>Select NFC Device</option>
                <option>Downtown Dallas Device #1</option>
                <option>Plano Tech Hub Device #3</option>
                <option>Uptown Dallas Device #2</option>
              </select>
              <p className="text-xs text-gray-400">Link multiple pages to one device for A/B testing</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50 p-6">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="font-bold text-white mb-3">Real-Time Analytics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Scans Today</span>
                  <span className="text-blue-400 font-bold">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Conversion Rate</span>
                  <span className="text-green-400 font-bold">16.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Time on Page</span>
                  <span className="text-cyan-400 font-bold">2m 34s</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50 p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="font-bold text-white mb-3">Auto-Configuration</h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>✓ UTM parameters auto-populated</li>
                <li>✓ Conversion pixel tracking enabled</li>
                <li>✓ Device location tagged</li>
                <li>✓ Analytics dashboard created</li>
              </ul>
            </div>
          </div>
        </div>

        {/* A/B Testing */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white">Real-Time A/B Testing by Zone</h3>
            <p className="text-sm text-gray-400 mt-2">Test variations across regions and let AI pick the winner</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Test Name</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Zones</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Variant A</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Variant B</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Winner</th>
                </tr>
              </thead>
              <tbody>
                {abtests.map((test) => (
                  <tr key={test.test} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-medium">{test.test}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{test.zones}</td>
                    <td className="py-4 px-6 text-sm text-gray-400">{test.variant_a}</td>
                    <td className="py-4 px-6 text-sm text-gray-400">{test.variant_b}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className="text-green-400 font-semibold">{test.winner}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Smart Content Personalization */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Smart Content Based on Scan Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-gradient-to-br from-pink-950/50 to-pink-900/20 border border-pink-700/50 p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-bold text-pink-300 mb-4">Dynamic Content Blocks</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span><strong className="text-white">Headline</strong> — changes based on region (e.g., "Dallas Exclusive" vs "Plano Tech Event")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span><strong className="text-white">Hero Image</strong> — shows local landmarks or region-specific visuals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span><strong className="text-white">Offers</strong> — location-specific pricing and promotions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span><strong className="text-white">Testimonials</strong> — show reviews from nearby customers</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-orange-950/50 to-orange-900/20 border border-orange-700/50 p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h4 className="font-bold text-orange-300 mb-4">Example: Dallas Summer Sale</h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded bg-gray-900/50 border border-gray-700">
                  <p className="font-semibold text-white mb-1">Downtown Dallas Scan</p>
                  <p className="text-gray-400">Headline: "Downtown Deal" • Offer: 25% off • CTA: "Visit Store"</p>
                </div>
                <div className="p-3 rounded bg-gray-900/50 border border-gray-700">
                  <p className="font-semibold text-white mb-1">Plano Scan</p>
                  <p className="text-gray-400">Headline: "Plano Exclusive" • Offer: Free shipping • CTA: "Order Now"</p>
                </div>
                <div className="p-3 rounded bg-gray-900/50 border border-gray-700">
                  <p className="font-semibold text-white mb-1">Uptown Scan</p>
                  <p className="text-gray-400">Headline: "Premium Selection" • Offer: VIP access • CTA: "Learn More"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview & Publish */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Real-Time Preview &amp; Publishing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="text-sm font-semibold text-white mb-4">Desktop Preview</p>
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-gray-600 flex items-center justify-center">
                <span className="text-gray-400 text-sm">💻 Desktop View</span>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="text-sm font-semibold text-white mb-4">Mobile Preview</p>
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-gray-600 flex items-center justify-center">
                <span className="text-gray-400 text-sm">📱 Mobile View</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-700">
              Save Draft
            </button>
            <button className="flex-1 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700">
              Publish to All Zones
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/nfc-analytics" className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: NFC Analytics Dashboard →
          </Link>
        </div>
      </div>
    </div>
  );
}
