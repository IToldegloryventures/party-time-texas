import Link from 'next/link';

export default function WhiteLabelDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">White-Label Customization</h1>
          <p className="text-base text-gray-400">Complete Brand Control</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Your Brand, Your Platform, Your Domain</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Remove all Cosmic Portals branding and create a completely custom experience for your clients.</p>
          <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Get White-Label Access
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-8">
              <div className="mb-4 text-3xl">🌐</div>
              <h4 className="mb-3 text-xl font-bold text-indigo-300">Custom Domain Setup</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ clientname.com implementation</li>
                <li>✓ SSL certificate management</li>
                <li>✓ DNS configuration</li>
                <li>✓ Subdomain support</li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8">
              <div className="mb-4 text-3xl">🎨</div>
              <h4 className="mb-3 text-xl font-bold text-purple-300">Branding Removal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Hide Cosmic Portals references</li>
                <li>✓ Custom logo integration</li>
                <li>✓ Brand color schemes</li>
                <li>✓ Custom favicon</li>
              </ul>
            </div>

            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-8">
              <div className="mb-4 text-3xl">⚙️</div>
              <h4 className="mb-3 text-xl font-bold text-pink-300">Advanced Customization</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Custom CSS injection</li>
                <li>✓ Email template branding</li>
                <li>✓ Mobile app white-labeling</li>
                <li>✓ Custom help documentation</li>
              </ul>
            </div>

            <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 p-8">
              <div className="mb-4 text-3xl">🏢</div>
              <h4 className="mb-3 text-xl font-bold text-rose-300">Enterprise Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Multi-tenant isolation</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ SLA guarantees</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-indigo-400">100%</div>
              <p className="text-gray-300">Complete brand control</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-purple-400">Scale</div>
              <p className="text-gray-300">Your business with custom solutions</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-pink-400">Enterprise</div>
              <p className="text-gray-300">Grade platform</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-indigo-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. Set up custom domain</li>
                  <li>2. Configure DNS records</li>
                  <li>3. Upload branding assets</li>
                  <li>4. Customize color schemes</li>
                  <li>5. Deploy white-label platform</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-purple-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Subscription tier: Enterprise</li>
                  <li>✓ Custom domain required</li>
                  <li>✓ Minimum 1-year commitment</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ Premium support included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">SaaS Resellers</h4>
              <p className="text-sm text-gray-300">Resell Cosmic Portals as your own branded solution to customers</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Agency Services</h4>
              <p className="text-sm text-gray-300">Offer white-label NFC engagement platform as part of agency services</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Enterprise Solutions</h4>
              <p className="text-sm text-gray-300">Deploy fully custom branded platform for enterprise clients</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/task-management" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/mobile-apps" className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
