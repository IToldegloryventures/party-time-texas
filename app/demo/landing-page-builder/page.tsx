import Link from 'next/link';

export default function LandingPageBuilderDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Landing Page Builder</h1>
          <p className="text-base text-gray-400">Create Professional Pages in Minutes</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Drag-and-Drop Page Builder with NFC Integration</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Create stunning landing pages without coding. Connect to NFC devices for instant engagement.</p>
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Start Building Free
          </button>
        </div>

        {/* Feature Showcase */}
        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Visual Builder */}
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-8">
              <div className="mb-4 text-3xl">🎨</div>
              <h4 className="mb-3 text-xl font-bold text-blue-300">Visual Builder Interface</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Drag-and-drop interface mockup</li>
                <li>✓ Content blocks: Text, Images, Videos, Forms</li>
                <li>✓ Mobile responsive preview</li>
                <li>✓ Real-time design updates</li>
              </ul>
            </div>

            {/* Template Library */}
            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
              <div className="mb-4 text-3xl">📚</div>
              <h4 className="mb-3 text-xl font-bold text-purple-300">Template Library</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Event templates (Corporate, Wedding, Conference)</li>
                <li>✓ Business templates (Restaurant, Retail, Services)</li>
                <li>✓ Custom template creation</li>
                <li>✓ 50+ pre-built templates</li>
              </ul>
            </div>

            {/* Custom Branding */}
            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-8">
              <div className="mb-4 text-3xl">🎯</div>
              <h4 className="mb-3 text-xl font-bold text-pink-300">Custom Branding</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Logo upload and positioning</li>
                <li>✓ Color scheme customization</li>
                <li>✓ Font selection and typography</li>
                <li>✓ Brand consistency tools</li>
              </ul>
            </div>

            {/* NFC Integration */}
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8">
              <div className="mb-4 text-3xl">📱</div>
              <h4 className="mb-3 text-xl font-bold text-cyan-300">NFC Integration</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Device linking workflow</li>
                <li>✓ Scan tracking setup</li>
                <li>✓ Analytics integration</li>
                <li>✓ Real-time engagement metrics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Value */}
        <div className="mb-20 rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400">80%</div>
              <p className="text-gray-300">Time savings on page creation</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-cyan-400">Professional</div>
              <p className="text-gray-300">Results without design skills</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-purple-400">NFC-Powered</div>
              <p className="text-gray-300">Engagement tracking</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-blue-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. Select or create page template</li>
                  <li>2. Drag blocks to customize layout</li>
                  <li>3. Add branding and content</li>
                  <li>4. Link NFC devices</li>
                  <li>5. Publish instantly</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-cyan-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Subscription tier: Professional+</li>
                  <li>✓ Browser-based editor</li>
                  <li>✓ Mobile responsive</li>
                  <li>✓ SSL/TLS encryption</li>
                  <li>✓ Cloud storage included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Corporate Events</h4>
              <p className="text-sm text-gray-300">Conference registration pages with NFC check-in and attendee tracking</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Restaurant Promotions</h4>
              <p className="text-sm text-gray-300">Menu pages with NFC tap-to-order functionality and loyalty rewards</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Retail Campaigns</h4>
              <p className="text-sm text-gray-300">Product showcase pages with NFC-enabled product demos</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Back to Demos
          </Link>
          <Link href="/demo/geo-marketing" className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
