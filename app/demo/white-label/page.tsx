import Link from 'next/link';

export default function WhiteLabelDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-amber-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            White-Label Customization
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Your brand, your platform, your domain. Upload logos, set brand colors, customize fonts, create branded email/SMS templates, and manage API keys for complete control.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Overview Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-amber-700/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Custom Domains</p>
            <p className="text-4xl font-bold text-amber-400">12</p>
            <p className="text-sm text-gray-400 mt-2">Branded client portals</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Brand Themes</p>
            <p className="text-4xl font-bold text-blue-400">8</p>
            <p className="text-sm text-gray-400 mt-2">Active customizations</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Email Templates</p>
            <p className="text-4xl font-bold text-green-400">24</p>
            <p className="text-sm text-gray-400 mt-2">Branded versions</p>
          </div>
          <div className="rounded-lg border border-purple-700/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">API Keys Active</p>
            <p className="text-4xl font-bold text-purple-400">6</p>
            <p className="text-sm text-gray-400 mt-2">Integrations enabled</p>
          </div>
        </div>

        {/* Customization Interface Tabs */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="border-b border-gray-700 bg-gray-900/50 p-6 flex gap-2 overflow-x-auto">
            <button className="rounded-lg bg-amber-600/20 text-amber-300 px-4 py-2 text-sm font-semibold border border-amber-600/50 hover:bg-amber-600/30">
              🎨 Branding
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-gray-700/50 transition">
              🌐 Domain Setup
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-gray-700/50 transition">
              💻 CSS &amp; Code
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-gray-700/50 transition">
              📧 Email Templates
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-gray-700/50 transition">
              🔑 API Keys
            </button>
          </div>

          {/* Branding Tab Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Branding Customization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Upload & Color Settings */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Company Logo</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-amber-600/50 transition cursor-pointer">
                    <div className="text-3xl mb-2">📤</div>
                    <p className="text-sm text-gray-400">Drag & drop or click to upload</p>
                    <p className="text-xs text-gray-500 mt-2">PNG, SVG, or JPG (max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Primary Brand Color</label>
                  <div className="flex gap-3 mb-4">
                    {['#F59E0B', '#3B82F6', '#10B981', '#EC4899', '#8B5CF6'].map((color) => (
                      <button
                        key={color}
                        className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="#F59E0B"
                    className="w-full rounded-lg bg-gray-700 text-sm text-white px-3 py-2 border border-gray-600 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Font Family</label>
                  <select className="w-full rounded-lg bg-gray-700 text-sm text-white px-3 py-2 border border-gray-600">
                    <option>Inter (Default)</option>
                    <option>Poppins</option>
                    <option>Montserrat</option>
                    <option>Roboto</option>
                    <option>Playfair Display</option>
                  </select>
                </div>
              </div>

              {/* Right - Preview */}
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-4">Live Preview</p>
                <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6 space-y-4">
                  <div className="h-12 bg-amber-600/20 rounded-lg flex items-center justify-center text-amber-300 font-bold">
                    📦 Your Company Logo
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">Welcome to Your Platform</h4>
                    <p className="text-sm text-gray-400">Your brand-customized NFC marketing platform</p>
                  </div>
                  <button className="w-full rounded-lg py-2 text-white font-semibold" style={{ backgroundColor: '#F59E0B' }}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Subdomains */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Custom Subdomains for Each Client</h3>
          <p className="text-gray-300 mb-6">Create branded, unique URLs for each client portal.</p>
          <div className="space-y-4">
            {[
              { client: 'Dallas Marketing Corp', domain: 'dallas.cosmicportals.com', status: 'active' },
              { client: 'Plano Tech Events', domain: 'plano.cosmicportals.com', status: 'active' },
              { client: 'Fort Worth Retail', domain: 'fortworth.cosmicportals.com', status: 'active' },
              { client: 'Frisco Hospitality', domain: 'frisco.cosmicportals.com', status: 'pending' },
            ].map((item) => (
              <div key={item.client} className="p-4 rounded-lg bg-gray-900/50 border border-gray-700 flex items-start justify-between">
                <div>
                  <p className="font-semibold text-white">{item.client}</p>
                  <p className="text-sm text-gray-400 mt-1">https://{item.domain}</p>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {item.status === 'active' ? '✓ Active' : '��� Pending'}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 rounded-lg bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-700">
            + Add Custom Domain
          </button>
        </div>

        {/* CSS & Template Editing */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">CSS Overrides &amp; Template Editing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50 p-6">
              <div className="text-3xl mb-4">💻</div>
              <h4 className="font-bold text-blue-300 mb-3">Custom CSS</h4>
              <p className="text-sm text-gray-300 mb-4">Write custom CSS to override default styles. Full control over colors, spacing, fonts, and layouts.</p>
              <button className="w-full rounded-lg bg-blue-600/20 text-blue-300 font-semibold py-2 hover:bg-blue-600/30 transition">
                Edit CSS
              </button>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-purple-950/50 to-purple-900/20 border border-purple-700/50 p-6">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="font-bold text-purple-300 mb-3">Template Library</h4>
              <p className="text-sm text-gray-300 mb-4">Edit HTML templates for pages, emails, and dashboards. Use template variables for dynamic content.</p>
              <button className="w-full rounded-lg bg-purple-600/20 text-purple-300 font-semibold py-2 hover:bg-purple-600/30 transition">
                Edit Templates
              </button>
            </div>
          </div>
        </div>

        {/* Email & SMS Templates */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Email &amp; SMS Templates with Branding</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">📧 Welcome Email</p>
              <p className="text-sm text-gray-400 mb-3">Sent when new users join. Includes your logo, brand colors, and custom messaging.</p>
              <button className="text-amber-400 font-semibold text-sm hover:text-amber-300">Edit Template →</button>
            </div>

            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">📱 Campaign Launch SMS</p>
              <p className="text-sm text-gray-400 mb-3">Alert message sent to ops teams. Custom subject line with your branding.</p>
              <button className="text-amber-400 font-semibold text-sm hover:text-amber-300">Edit Template →</button>
            </div>

            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">🎯 Performance Report Email</p>
              <p className="text-sm text-gray-400 mb-3">Weekly/monthly summaries. Auto-populate KPIs with your brand styling.</p>
              <button className="text-amber-400 font-semibold text-sm hover:text-amber-300">Edit Template →</button>
            </div>

            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <p className="font-semibold text-white mb-2">🔔 Alert Notifications</p>
              <p className="text-sm text-gray-400 mb-3">Device offline, campaign issues, performance alerts. Branded notification templates.</p>
              <button className="text-amber-400 font-semibold text-sm hover:text-amber-300">Edit Template →</button>
            </div>
          </div>
        </div>

        {/* API Keys & User Portal */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">API Keys &amp; Developer Portal Control</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50 p-6">
              <div className="text-3xl mb-4">🔑</div>
              <h4 className="font-bold text-green-300 mb-3">API Key Management</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Generate & revoke keys</li>
                <li>✓ Set rate limits per key</li>
                <li>✓ Track usage analytics</li>
                <li>✓ IP whitelisting</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 border border-indigo-700/50 p-6">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="font-bold text-indigo-300 mb-3">User &amp; Permission Control</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Add/remove user accounts</li>
                <li>✓ Role-based access control</li>
                <li>✓ Audit logs & activity tracking</li>
                <li>✓ Two-factor authentication</li>
              </ul>
            </div>
          </div>

          {/* API Keys Table */}
          <div className="rounded-lg bg-gray-900/50 border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <p className="text-sm font-semibold text-gray-300">Active API Keys</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-800/50 border-b border-gray-700">
                  <tr>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">Key Name</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">Key ID</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">Created</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">Last Used</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {['Production API', 'Development API', 'Mobile App', 'Integration V1', 'Webhook API', 'Analytics API'].map((key, idx) => (
                    <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition">
                      <td className="py-3 px-4 text-gray-300 font-medium">{key}</td>
                      <td className="py-3 px-4 text-gray-400 font-mono text-xs">sk_live_{String(idx + 1).padStart(20, '0')}</td>
                      <td className="py-3 px-4 text-gray-400">Aug {10 + idx}, 2024</td>
                      <td className="py-3 px-4 text-gray-400">2 min ago</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Client Portal Preview */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Client Portal — White-Labeled Dashboard Preview</h3>
          <div className="rounded-lg border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-8">
            <div className="mb-6 pb-6 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#F59E0B' }}></div>
                <div>
                  <p className="font-bold text-white">Your Company Name</p>
                  <p className="text-xs text-gray-400">NFC Marketing Platform</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-gray-400 hover:text-gray-300">📊 Analytics</button>
                <button className="text-sm text-gray-400 hover:text-gray-300">⚙️ Settings</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Scans', value: '2.4M', color: 'bg-amber-600/20 text-amber-400' },
                { label: 'Conversion Rate', value: '14.9%', color: 'bg-blue-600/20 text-blue-400' },
                { label: 'Revenue', value: '$520K', color: 'bg-green-600/20 text-green-400' },
                { label: 'Devices', value: '247', color: 'bg-purple-600/20 text-purple-400' },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-lg p-4 border border-gray-700 ${stat.color.split(' ')[0]}`}>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className={`text-2xl font-bold mt-2 ${stat.color.split(' ')[1]}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">White-Label Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-amber-950/50 to-amber-900/20 border border-amber-700/50">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-bold text-amber-300 mb-3">Complete Brand Control</h4>
              <p className="text-sm text-gray-300">Your logo, colors, fonts, and messaging. Fully branded experience that feels like their own platform.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="font-bold text-blue-300 mb-3">Resale Opportunities</h4>
              <p className="text-sm text-gray-300">Offer the platform under your own brand. Create revenue streams and build customer loyalty with a unique platform.</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/20 border border-green-700/50">
              <div className="text-3xl mb-4">🔧</div>
              <h4 className="font-bold text-green-300 mb-3">Flexible Customization</h4>
              <p className="text-sm text-gray-300">From simple theming to deep code customization. Scale with CSS overrides, custom domains, or full code access.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/geo-marketing" className="rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Explore More Features →
          </Link>
        </div>
      </div>
    </div>
  );
}
