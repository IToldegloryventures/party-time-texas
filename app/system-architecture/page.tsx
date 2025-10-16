export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-base text-gray-400">Cosmic Portals Multi-Tenant NFC Platform</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Layer 1: Client Layer */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Client Layer</h2>
            <p className="mt-2 text-base text-gray-400">Multi-platform access points with unified authentication</p>
          </div>
          
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
              <p className="mt-3 text-xs text-gray-400">Analytics, event management, device control</p>
            </div>

            {/* Mobile App */}
            <div className="group rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 transition-all hover:border-cyan-700/80 hover:bg-cyan-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H7zm0 2h6v10H7V5zm2 3a1 1 0 100 2h2a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-cyan-300">Mobile App</h3>
              <p className="text-sm text-gray-300">PWA with NFC Scanning</p>
              <p className="mt-3 text-xs text-gray-400">Check-in, event access, photos</p>
            </div>

            {/* White-Label */}
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 transition-all hover:border-purple-700/80 hover:bg-purple-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-purple-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.5M10.5 1.5l4 4M10.5 1.5v5h5"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-purple-300">White-Label Domains</h3>
              <p className="text-sm text-gray-300">Custom Branding</p>
              <p className="mt-3 text-xs text-gray-400">Enterprise customization, portals</p>
            </div>

            {/* Authentication */}
            <div className="group rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 transition-all hover:border-green-700/80 hover:bg-green-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-green-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-green-300">Clerk Authentication</h3>
              <p className="text-sm text-gray-300">SSO, MFA, RBAC</p>
              <p className="mt-3 text-xs text-gray-400">Role-based routing, isolation</p>
            </div>
          </div>
        </div>

        {/* Layer 2: API & Business Logic */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">API & Business Logic Layer</h2>
            <p className="mt-2 text-base text-gray-400">Core business modules and service orchestration</p>
          </div>

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
              <p className="text-sm text-gray-300">247 Active Devices</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Device registration & status</li>
                <li>• Batch management</li>
                <li>• Real-time monitoring</li>
              </ul>
            </div>

            {/* Event Management */}
            <div className="group rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 transition-all hover:border-red-700/80 hover:bg-red-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-red-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-red-300">Event Management</h3>
              <p className="text-sm text-gray-300">Multi-Station Check-ins</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Event creation & scheduling</li>
                <li>• Real-time attendance</li>
                <li>• Guest lifecycle tracking</li>
              </ul>
            </div>

            {/* Landing Page Builder */}
            <div className="group rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 transition-all hover:border-pink-700/80 hover:bg-pink-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-pink-300">Landing Page Builder</h3>
              <p className="text-sm text-gray-300">Drag-and-Drop Editor</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Custom pages & templates</li>
                <li>• Template library</li>
                <li>• One-click publishing</li>
              </ul>
            </div>

            {/* Task Management */}
            <div className="group rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 transition-all hover:border-yellow-700/80 hover:bg-yellow-950/40 text-center">
              <div className="mb-4 flex justify-center rounded-lg bg-yellow-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-yellow-300">Task Management</h3>
              <p className="text-sm text-gray-300">Team Collaboration</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                <li>• Assignments & tracking</li>
                <li>• Progress monitoring</li>
                <li>• Team coordination</li>
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-8 transition-all hover:border-purple-700/80 hover:bg-purple-950/40">
              <div className="mb-6 flex justify-center rounded-lg bg-purple-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-purple-300">Real-Time Analytics</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-purple-200">Scan Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">2.4M total scans, per-device tracking, time-series</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-200">Event Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">Check-in rates, attendance metrics, timelines</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-200">Location Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">Station performance, geo-heatmaps, venue insights</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-200">Conversion Tracking</p>
                  <p className="mt-1 text-sm text-gray-400">ROI attribution, engagement scoring</p>
                </div>
              </div>
            </div>

            <div className="group rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-8 transition-all hover:border-indigo-700/80 hover:bg-indigo-950/40">
              <div className="mb-6 flex justify-center rounded-lg bg-indigo-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-.894.553L2.482 8H1a1 1 0 000 2h.882l.5 2.721H2a1 1 0 100 2h.884l.5 2.721H2a1 1 0 000 2h.882l.5 2.721H2a1 1 0 000 2h.884l.5 2.721a1 1 0 00.894.553H19a2 2 0 002-2V4a2 2 0 00-2-2H6zm5 3a1 1 0 010 2H7a1 1 0 010-2h4zm0 3a1 1 0 010 2H7a1 1 0 010-2h4zm0 3a1 1 0 010 2H7a1 1 0 010-2h4z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-indigo-300">Business Intelligence</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-indigo-200">Revenue Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">Monthly growth, MRR tracking, subscription metrics</p>
                </div>
                <div>
                  <p className="font-semibold text-indigo-200">User Engagement</p>
                  <p className="mt-1 text-sm text-gray-400">Active users, scan frequency, behavioral patterns</p>
                </div>
                <div>
                  <p className="font-semibold text-indigo-200">Geo-Marketing Intelligence</p>
                  <p className="mt-1 text-sm text-gray-400">Location insights, venue optimization, traffic</p>
                </div>
                <div>
                  <p className="font-semibold text-indigo-200">Predictive Analytics</p>
                  <p className="mt-1 text-sm text-gray-400">Attendance forecasting, peak time analysis</p>
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
              <h3 className="mb-4 text-lg font-semibold text-emerald-300">Supabase PostgreSQL</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p><span className="font-semibold text-emerald-200">organizations</span> - Multi-tenant data</p>
                <p><span className="font-semibold text-emerald-200">users</span> - Clerk integration</p>
                <p><span className="font-semibold text-emerald-200">nfc_devices</span> - Device registry</p>
                <p><span className="font-semibold text-emerald-200">nfc_scans</span> - Analytics data</p>
                <p><span className="font-semibold text-emerald-200">events</span> - Event tracking</p>
                <p><span className="font-semibold text-emerald-200">landing_pages</span> - Custom pages</p>
                <p><span className="font-semibold text-emerald-200">tasks</span> - Team collaboration</p>
              </div>
            </div>

            {/* Security */}
            <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-8">
              <div className="mb-6 flex justify-center rounded-lg bg-teal-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="mb-4 text-lg font-semibold text-teal-300">Security & Access</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-teal-200">Row Level Security</p>
                  <p className="text-xs">Multi-tenant data isolation</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-200">RBAC System</p>
                  <p className="text-xs">5-tier role hierarchy</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-200">API Protection</p>
                  <p className="text-xs">Middleware authentication</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-200">Encryption</p>
                  <p className="text-xs">Data security & compliance</p>
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
              <h3 className="mb-4 text-lg font-semibold text-amber-300">External Services</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-amber-200">Stripe</p>
                  <p className="text-xs">Payments & billing</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Google Gemini</p>
                  <p className="text-xs">AI content generation</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Supabase Realtime</p>
                  <p className="text-xs">Live data sync</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Email & Notifications</p>
                  <p className="text-xs">User communications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 5: Revenue Model */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Revenue & Monetization</h2>
            <p className="mt-2 text-base text-gray-400">Multi-channel business model</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* SaaS */}
            <div className="rounded-xl border border-blue-800/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
              <div className="mb-4 inline-flex rounded-lg bg-blue-500/20 p-3">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155.03.299.076.588.202.864.304 1.926.974 2.888 2.43.878 1.24 1.612 2.062 2.288 2.825.686.787 1.165 1.222 1.585 1.467.9.559 1.116.959 1.487 1.659.11.173.19.291.213.318a.5.5 0 00.331.523l.3.1c.331.11.64-.406.59-.746a60.55 60.55 0 00-.261-.35c-.52-.826-1.323-1.78-2.262-2.99a7.902 7.902 0 00-1.313-1.487c-.368-.335-.888-.061-1.286.256-.21.162-.581.542-.786.972-.106.234-.163.465-.163.465v.341a.5.5 0 00.146.354c.1.1.241.196.406.196h.3c.324 0 .564-.176.735-.272.arrival.3.43.726.43 1.214 0 .339-.108.629-.306.845-.207.227-.456.344-.756.344-.281 0-.537-.111-.71-.3-.616-.677-1.157-1.691-1.157-2.712 0-.681.221-1.325.571-1.902.35-.577.923-1.21 1.821-1.21.501 0 .735.064.92.189 1.08.555 1.616 1.672 1.616 2.64 0 1.077-.624 2.194-1.587 2.927-.118.1-.235.196-.35.288"/>
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-300">SaaS Subscriptions</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Starter: $29/mo</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Professional: $99/mo</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Enterprise: $299/mo</li>
              </ul>
            </div>

            {/* Hardware */}
            <div className="rounded-xl border border-orange-800/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
              <div className="mb-4 inline-flex rounded-lg bg-orange-500/20 p-3">
                <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-orange-300">NFC Hardware</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Business Cards: $0.50</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Wristbands: $5</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Tags: $2–$100</li>
              </ul>
            </div>

            {/* Services */}
            <div className="rounded-xl border border-pink-800/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
              <div className="mb-4 inline-flex rounded-lg bg-pink-500/20 p-3">
                <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0016 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"/>
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-pink-300">Digital Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Design: $500+</li>
                <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Video: $1,000+</li>
                <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Content: $5,000+</li>
              </ul>
            </div>

            {/* Analytics Add-on */}
            <div className="rounded-xl border border-purple-800/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/20 p-3">
                <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-purple-300">Analytics Add-ons</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Geo-Marketing: $99</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Advanced: $299</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Predictive: $499</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Demos
          </a>
        </div>
      </div>
    </div>
  );
}
