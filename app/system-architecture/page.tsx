export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-base text-gray-400">Cosmic Portals Multi-Tenant NFC & Engagement Platform</p>
          <p className="mt-3 text-sm text-gray-500">Comprehensive architecture supporting campaign automation, geo-intelligence, real-time analytics, and white-label SaaS delivery.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Layer 1: Client Layer */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Client Layer</h2>
            <p className="mt-2 text-base text-gray-400">Multi-platform access points with unified authentication</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Web Dashboard · Mobile Apps · White-Label Domains · Clerk Authentication</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Web Dashboard */}
            <div className="group rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 transition-all hover:border-blue-700/80 hover:bg-blue-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-blue-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM4 17a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-blue-300">Web Dashboard</h3>
              <p className="text-sm text-gray-300">Next.js 15, React 19, Tailwind CSS</p>
              <p className="mt-3 text-xs text-gray-400">Campaigns · Analytics · Device Control</p>
            </div>

            {/* Mobile Apps */}
            <div className="group rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 transition-all hover:border-cyan-700/80 hover:bg-cyan-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H7zm0 2h6v10H7V5zm2 3a1 1 0 100 2h2a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-cyan-300">Mobile Apps</h3>
              <p className="text-sm text-gray-300">Client & Customer Roles</p>
              <p className="mt-3 text-xs text-gray-400">Real-time scans, event discovery, check-in</p>
            </div>

            {/* White-Label */}
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 transition-all hover:border-purple-700/80 hover:bg-purple-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-purple-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.5M10.5 1.5l4 4M10.5 1.5v5h5"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-purple-300">White-Label Domains</h3>
              <p className="text-sm text-gray-300">Custom Branding, CNAME Support</p>
              <p className="mt-3 text-xs text-gray-400">Subdomains · CSS overrides · Email templates</p>
            </div>

            {/* Authentication */}
            <div className="group rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 transition-all hover:border-green-700/80 hover:bg-green-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-green-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-green-300">Clerk Authentication</h3>
              <p className="text-sm text-gray-300">SSO · MFA · RBAC</p>
              <p className="mt-3 text-xs text-gray-400">Role-based isolation · Tenant-aware routing</p>
            </div>
          </div>
        </div>

        {/* Layer 2: API & Business Logic */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">API & Business Logic Layer</h2>
            <p className="mt-2 text-base text-gray-400">Core business modules and orchestration engine</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">NFC Device Manager · Campaign & Content · Trigger & Automation Engine · Queueing & Orchestration</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* NFC Device Manager */}
            <div className="group rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 transition-all hover:border-orange-700/80 hover:bg-orange-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-orange-300">NFC Device Manager</h3>
              <p className="text-sm text-gray-300">247 Devices · Real-time Monitoring</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Device registration · Batch programming</li>
                <li>• Uptime insights</li>
              </ul>
            </div>

            {/* Campaign & Content Module */}
            <div className="group rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 transition-all hover:border-pink-700/80 hover:bg-pink-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293-1.293a1 1 0 011.414 0L9 7.586l2.293-2.293a1 1 0 111.414 1.414L10.414 9l2.293 2.293a1 1 0 01-1.414 1.414L9 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L7.586 9 5.293 6.707a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-pink-300">Campaign & Content Module</h3>
              <p className="text-sm text-gray-300">Social and Email Scheduling</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Visual composer · Calendar view</li>
                <li>• Drip logic</li>
              </ul>
            </div>

            {/* Trigger & Automation Engine */}
            <div className="group rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 transition-all hover:border-red-700/80 hover:bg-red-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-red-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 000-2H6V3a1 1 0 01-1 1zm0 0h8a4 4 0 110 8H5a1 1 0 000 2h8a6 6 0 100-12H6V1a1 1 0 00-1 1z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-red-300">Trigger & Automation Engine</h3>
              <p className="text-sm text-gray-300">Smart Rules Engine</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Scan-based triggers · Time rules</li>
                <li>• CRM / API actions</li>
              </ul>
            </div>

            {/* Queueing & Orchestration */}
            <div className="group rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6 transition-all hover:border-violet-700/80 hover:bg-violet-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-violet-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-violet-300">Queueing & Orchestration</h3>
              <p className="text-sm text-gray-300">Job Execution & Scheduling</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Delayed posting · Retry logic</li>
                <li>• Automation chaining</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 3: Analytics & Intelligence */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Analytics & Intelligence Engine</h2>
            <p className="mt-2 text-base text-gray-400">Real-time insights and business intelligence</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8 transition-all hover:border-purple-700/80 hover:bg-purple-950/40">
              <div className="mb-6 flex justify-center rounded-lg bg-purple-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-purple-300 text-center">Real-Time Analytics</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-purple-200">Scan Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">2.4M scans, per-device tracking, time-series</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-200">Event Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">Check-in rates, attendance metrics</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-200">Campaign Metrics</p>
                  <p className="mt-1 text-sm text-gray-400">Reach, engagement, conversion rates</p>
                </div>
              </div>
            </div>

            <div className="group rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-8 transition-all hover:border-indigo-700/80 hover:bg-indigo-950/40">
              <div className="mb-6 flex justify-center rounded-lg bg-indigo-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-.894.553L2.482 8H1a1 1 0 000 2h.882l.5 2.721H2a1 1 0 100 2h.884l.5 2.721H2a1 1 0 000 2h.882l.5 2.721a1 1 0 00.894.553H19a2 2 0 002-2V4a2 2 0 00-2-2H6zm5 3a1 1 0 010 2H7a1 1 0 010-2h4zm0 3a1 1 0 010 2H7a1 1 0 010-2h4zm0 3a1 1 0 010 2H7a1 1 0 010-2h4z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-indigo-300 text-center">Attribution & Intelligence</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-indigo-200">Cross-Channel Attribution</p>
                  <p className="mt-1 text-sm text-gray-400">NFC → Landing → CRM tracking</p>
                </div>
                <div>
                  <p className="font-semibold text-indigo-200">Geo-Marketing Intelligence</p>
                  <p className="mt-1 text-sm text-gray-400">Regional performance, location insights</p>
                </div>
                <div>
                  <p className="font-semibold text-indigo-200">Predictive Modeling</p>
                  <p className="mt-1 text-sm text-gray-400">Forecasting, trend analysis</p>
                </div>
              </div>
            </div>

            <div className="group rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-8 transition-all hover:border-cyan-700/80 hover:bg-cyan-950/40">
              <div className="mb-6 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-cyan-300 text-center">Business Intelligence</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-cyan-200">Revenue Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">Monthly growth, MRR tracking</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200">User Engagement</p>
                  <p className="mt-1 text-sm text-gray-400">Active users, behavioral patterns</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200">Performance Reports</p>
                  <p className="mt-1 text-sm text-gray-400">KPI dashboards, exportable metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Data Layer */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Data & Security Layer</h2>
            <p className="mt-2 text-base text-gray-400">Multi-tenant database with enterprise security</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Database */}
            <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-8">
              <div className="mb-6 flex justify-center rounded-lg bg-emerald-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657.895 3.146 2.457 3.958C7.02 19.748 8.961 20 10 20s2.98-.252 4.543-.084C16.105 19.146 17 17.657 17 16v-3m-6-4V5c0-1.657-.895-3.146-2.457-3.958C7.02.252 5.039 0 4 0 1.895 0 0 1.343 0 3v10c0 1.657.895 3.146 2.457 3.958C4.02 17.748 5.961 18 7 18s2.98-.252 4.543-.084C12.105 17.146 13 15.657 13 14v-3"/>
                </svg>
              </div>
              <h3 className="mb-4 text-lg font-semibold text-emerald-300 text-center">Supabase PostgreSQL</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p><span className="font-semibold text-emerald-200">organizations</span> - Multi-tenant data</p>
                <p><span className="font-semibold text-emerald-200">nfc_devices</span> - Device registry</p>
                <p><span className="font-semibold text-emerald-200">nfc_scans</span> - Analytics data</p>
                <p><span className="font-semibold text-emerald-200">campaigns</span> - Campaign data</p>
                <p><span className="font-semibold text-emerald-200">campaign_posts</span> - Social posts</p>
                <p><span className="font-semibold text-emerald-200">post_metrics</span> - Engagement data</p>
                <p><span className="font-semibold text-emerald-200">social_accounts</span> - Connected accounts</p>
              </div>
            </div>

            {/* Security */}
            <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-8">
              <div className="mb-6 flex justify-center rounded-lg bg-teal-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-lg font-semibold text-teal-300 text-center">Security & Access Control</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-teal-200">Row Level Security (RLS)</p>
                  <p className="text-xs">Multi-tenant isolation</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-200">Role-Based Access Control</p>
                  <p className="text-xs">5-tier role hierarchy</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-200">Token Security</p>
                  <p className="text-xs">JWT validation & encryption</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-200">Compliance</p>
                  <p className="text-xs">Data protection & encryption</p>
                </div>
              </div>
            </div>

            {/* External Services */}
            <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-8">
              <div className="mb-6 flex justify-center rounded-lg bg-amber-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-lg font-semibold text-amber-300 text-center">External Services</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-amber-200">Social APIs</p>
                  <p className="text-xs">Meta, TikTok, Instagram, Facebook</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Email Services</p>
                  <p className="text-xs">SendGrid, SES, Mailgun</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Stripe Payments</p>
                  <p className="text-xs">Billing & subscriptions</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Real-Time Sync</p>
                  <p className="text-xs">Supabase Realtime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 5: Revenue Streams */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white">Revenue Streams & Monetization</h2>
            <p className="mt-2 text-base text-gray-400">Tiered pricing by feature depth and scale</p>
          </div>

          {/* Core Platform Features */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-blue-300">Core Platform Features</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-blue-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-blue-300">Subscription Portals</h4>
                <p className="text-xs text-gray-400">Multi-tenant SaaS, monthly/annual billing</p>
              </div>

              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-pink-300">Landing Page Builder</h4>
                <p className="text-xs text-gray-400">Drag-and-drop, templates, A/B testing</p>
              </div>

              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-orange-300">NFC Device Management</h4>
                <p className="text-xs text-gray-400">247 devices, batch management</p>
              </div>

              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-red-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-red-300">Event Management</h4>
                <p className="text-xs text-gray-400">Multi-station check-ins, real-time</p>
              </div>

              <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-indigo-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-indigo-300">Analytics Dashboard</h4>
                <p className="text-xs text-gray-400">Real-time metrics, KPI tracking</p>
              </div>
            </div>
          </div>

          {/* Advanced Services */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-cyan-300">Advanced Services</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-cyan-300">Geo-Marketing Intelligence</h4>
                <p className="text-xs text-gray-400">Location heatmaps, regional analytics</p>
              </div>

              <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-teal-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-teal-300">Smart Social Scheduler</h4>
                <p className="text-xs text-gray-400">Social + email automation</p>
              </div>

              <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-purple-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.5M10.5 1.5l4 4M10.5 1.5v5h5"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-purple-300">White Label Domain</h4>
                <p className="text-xs text-gray-400">Custom domains, full branding</p>
              </div>

              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-yellow-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-yellow-300">Task Management</h4>
                <p className="text-xs text-gray-400">Team collaboration, tracking</p>
              </div>

              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-emerald-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-emerald-300">API Integration</h4>
                <p className="text-xs text-gray-400">REST API, webhooks, SDKs</p>
              </div>
            </div>
          </div>

          {/* Business Intelligence & Attribution */}
          <div>
            <h3 className="mb-6 text-center text-xl font-semibold text-amber-300">Intelligence & Attribution</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-amber-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-amber-300">Cross-Channel Attribution</h4>
                <p className="text-xs text-gray-400">Track conversions NFC → Landing → CRM for complete attribution</p>
              </div>

              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zM4.293 9.293a1 1 0 011.414 0L9 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-orange-300">Predictive Intelligence</h4>
                <p className="text-xs text-gray-400">ML-powered forecasting and trend analysis</p>
              </div>

              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-pink-300">Advanced Analytics Tier</h4>
                <p className="text-xs text-gray-400">Premium reporting, custom dashboards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Demos
          </a>
        </div>
      </div>
    </div>
  );
}
