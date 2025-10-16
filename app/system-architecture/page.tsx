export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-3 text-5xl font-bold text-white">System Architecture</h1>
          <p className="text-xl text-gray-400">Cosmic Portals Multi-Tenant NFC Engagement Platform</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* LAYER 1: USER INTERFACES & AUTHENTICATION */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 1: User Interfaces & Authentication</h2>
            <p className="mt-1 text-gray-400">Multi-channel access with unified identity management</p>
          </div>
          
          <div className="rounded-lg border border-blue-800/50 bg-gradient-to-br from-blue-950 to-blue-900 p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-blue-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-blue-300">WEB DASHBOARD</div>
                <p className="text-xs text-gray-300">Next.js 15, React 19, Tailwind CSS</p>
                <p className="mt-2 text-xs text-gray-400">Real-time analytics, event management, device control</p>
              </div>
              <div className="rounded-lg border border-blue-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-blue-300">MOBILE APP</div>
                <p className="text-xs text-gray-300">PWA with NFC Scanning</p>
                <p className="mt-2 text-xs text-gray-400">Guest check-in, event access, photo sharing</p>
              </div>
              <div className="rounded-lg border border-blue-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-blue-300">WHITE-LABEL DOMAINS</div>
                <p className="text-xs text-gray-300">Custom Branding (clientname.com)</p>
                <p className="mt-2 text-xs text-gray-400">Enterprise customization, white-label portals</p>
              </div>
              <div className="rounded-lg border border-blue-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-blue-300">CLERK AUTHENTICATION</div>
                <p className="text-xs text-gray-300">SSO, MFA, Session Management</p>
                <p className="mt-2 text-xs text-gray-400">Role-based routing, multi-tenant isolation</p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-center">
              <svg className="h-6 w-full text-blue-600 opacity-50" viewBox="0 0 1000 30">
                <line x1="0" y1="15" x2="1000" y2="15" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
                <polygon points="1000,15 990,10 990,20" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* LAYER 2: CORE BUSINESS MODULES */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 2: Core Business Modules</h2>
            <p className="mt-1 text-gray-400">Platform functionality and service delivery</p>
          </div>
          
          <div className="rounded-lg border border-green-800/50 bg-gradient-to-br from-green-950 to-green-900 p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-green-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-green-300">NFC DEVICE MANAGER</div>
                <p className="text-xs text-gray-300">247 devices, batch management</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-400">
                  <li>• Device registration & status</li>
                  <li>• Batch provisioning</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>
              <div className="rounded-lg border border-green-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-green-300">EVENT MANAGEMENT</div>
                <p className="text-xs text-gray-300">Multi-station check-ins</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-400">
                  <li>• Event creation & scheduling</li>
                  <li>• Real-time attendance</li>
                  <li>• Guest lifecycle tracking</li>
                </ul>
              </div>
              <div className="rounded-lg border border-green-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-green-300">LANDING PAGE BUILDER</div>
                <p className="text-xs text-gray-300">Custom pages & templates</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-400">
                  <li>• Drag-and-drop editor</li>
                  <li>• Template library</li>
                  <li>• One-click publishing</li>
                </ul>
              </div>
              <div className="rounded-lg border border-green-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-green-300">TASK MANAGEMENT</div>
                <p className="text-xs text-gray-300">Team collaboration</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-400">
                  <li>• Assignments & tracking</li>
                  <li>• Progress monitoring</li>
                  <li>• Team coordination</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-center">
              <svg className="h-6 w-full text-green-600 opacity-50" viewBox="0 0 1000 30">
                <line x1="0" y1="15" x2="1000" y2="15" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
                <polygon points="1000,15 990,10 990,20" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* LAYER 3: ANALYTICS & INTELLIGENCE ENGINE */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 3: Analytics & Intelligence Engine</h2>
            <p className="mt-1 text-gray-400">Real-time insights and business intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Real-time Analytics */}
            <div className="rounded-lg border border-purple-800/50 bg-gradient-to-br from-purple-950 to-purple-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-purple-300">Real-Time Analytics</h3>
              <div className="space-y-3">
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Scan Analytics</div>
                  <p className="mt-1 text-xs text-gray-400">2.4M total scans, per-device tracking, time-series data</p>
                </div>
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Event Analytics</div>
                  <p className="mt-1 text-xs text-gray-400">Check-in rates, attendance metrics, timeline data</p>
                </div>
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Location Analytics</div>
                  <p className="mt-1 text-xs text-gray-400">Station performance, geo-heatmaps, venue insights</p>
                </div>
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Conversion Tracking</div>
                  <p className="mt-1 text-xs text-gray-400">ROI attribution, engagement scoring, performance metrics</p>
                </div>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="rounded-lg border border-purple-800/50 bg-gradient-to-br from-purple-950 to-purple-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-purple-300">Business Intelligence</h3>
              <div className="space-y-3">
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Revenue Analytics</div>
                  <p className="mt-1 text-xs text-gray-400">Monthly growth, MRR tracking, subscription metrics</p>
                </div>
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">User Engagement</div>
                  <p className="mt-1 text-xs text-gray-400">Active users, scan frequency, behavioral patterns</p>
                </div>
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Geo-Marketing Intelligence</div>
                  <p className="mt-1 text-xs text-gray-400">Location insights, venue optimization, traffic patterns</p>
                </div>
                <div className="rounded border border-purple-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-purple-200">Predictive Analytics</div>
                  <p className="mt-1 text-xs text-gray-400">Attendance forecasting, peak time analysis, forecasting</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-center">
            <svg className="h-6 w-full text-purple-600 opacity-50" viewBox="0 0 1000 30">
              <line x1="0" y1="15" x2="1000" y2="15" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
              <polygon points="1000,15 990,10 990,20" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* LAYER 4: GUEST EXPERIENCE & NFC FLOW */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 4: Guest Experience & NFC Engagement</h2>
            <p className="mt-1 text-gray-400">Customer journey from scan to conversion</p>
          </div>
          
          <div className="rounded-lg border border-teal-800/50 bg-gradient-to-br from-teal-950 to-teal-900 p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-lg border border-teal-700/50 bg-black/40 p-4">
                <div className="mb-2 text-xs font-semibold text-teal-300">NFC SCAN</div>
                <p className="text-xs text-gray-400">Guest taps device</p>
              </div>
              <div className="flex items-center justify-center">
                <svg className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="rounded-lg border border-teal-700/50 bg-black/40 p-4">
                <div className="mb-2 text-xs font-semibold text-teal-300">LANDING PAGE</div>
                <p className="text-xs text-gray-400">Instant load, branded experience</p>
              </div>
              <div className="flex items-center justify-center">
                <svg className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="rounded-lg border border-teal-700/50 bg-black/40 p-4">
                <div className="mb-2 text-xs font-semibold text-teal-300">SESSION TRACKING</div>
                <p className="text-xs text-gray-400">IP, location, user agent</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-48">
              <div></div>
              <div className="rounded-lg border border-teal-700/50 bg-black/40 p-4">
                <div className="mb-2 text-xs font-semibold text-teal-300">ANALYTICS</div>
                <p className="text-xs text-gray-400">Real-time recording, device metrics</p>
              </div>
              <div className="rounded-lg border border-teal-700/50 bg-black/40 p-4">
                <div className="mb-2 text-xs font-semibold text-teal-300">GUEST PORTAL</div>
                <p className="text-xs text-gray-400">Event details, schedule, gallery, RSVP</p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-center">
              <svg className="h-6 w-full text-teal-600 opacity-50" viewBox="0 0 1000 30">
                <line x1="0" y1="15" x2="1000" y2="15" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
                <polygon points="1000,15 990,10 990,20" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* LAYER 5: DATABASE & SECURITY */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 5: Database & Security Layer</h2>
            <p className="mt-1 text-gray-400">Multi-tenant data isolation and access control</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Database */}
            <div className="rounded-lg border border-emerald-800/50 bg-gradient-to-br from-emerald-950 to-emerald-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-emerald-300">Supabase PostgreSQL</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">organizations</span>
                  <span className="text-gray-400">Multi-tenant data, plans</span>
                </div>
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">users</span>
                  <span className="text-gray-400">Clerk integration, roles</span>
                </div>
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">nfc_devices</span>
                  <span className="text-gray-400">Device registration, status</span>
                </div>
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">nfc_scans</span>
                  <span className="text-gray-400">Analytics, IP tracking</span>
                </div>
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">events</span>
                  <span className="text-gray-400">Event data, attendance</span>
                </div>
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">landing_pages</span>
                  <span className="text-gray-400">Custom pages, publishing</span>
                </div>
                <div className="flex items-center justify-between rounded border border-emerald-700/30 bg-black/30 px-3 py-2 text-xs">
                  <span className="text-emerald-200 font-medium">tasks</span>
                  <span className="text-gray-400">Team collaboration</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="rounded-lg border border-emerald-800/50 bg-gradient-to-br from-emerald-950 to-emerald-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-emerald-300">Security & Access Control</h3>
              <div className="space-y-3">
                <div className="rounded border border-emerald-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-emerald-200">Row Level Security (RLS)</div>
                  <p className="mt-1 text-xs text-gray-400">Multi-tenant data isolation, org_id filtering</p>
                </div>
                <div className="rounded border border-emerald-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-emerald-200">RBAC System</div>
                  <p className="mt-1 text-xs text-gray-400">5-tier permissions: Super Admin, Owner, Admin, Member, Guest</p>
                </div>
                <div className="rounded border border-emerald-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-emerald-200">API Route Protection</div>
                  <p className="mt-1 text-xs text-gray-400">Middleware authentication, request validation</p>
                </div>
                <div className="rounded border border-emerald-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-emerald-200">Encryption & Compliance</div>
                  <p className="mt-1 text-xs text-gray-400">Data encryption, audit logging, GDPR compliance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-center">
            <svg className="h-6 w-full text-emerald-600 opacity-50" viewBox="0 0 1000 30">
              <line x1="0" y1="15" x2="1000" y2="15" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
              <polygon points="1000,15 990,10 990,20" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* LAYER 6: EXTERNAL SERVICES & INTEGRATIONS */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 6: External Services & Integrations</h2>
            <p className="mt-1 text-gray-400">Third-party platforms and service providers</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Payment & Billing */}
            <div className="rounded-lg border border-yellow-800/50 bg-gradient-to-br from-yellow-950 to-yellow-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-yellow-300">Payment & Billing</h3>
              <div className="space-y-3">
                <div className="rounded border border-yellow-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-yellow-200">Stripe Integration</div>
                  <p className="mt-1 text-xs text-gray-400">Subscriptions, billing, webhook processing</p>
                </div>
                <div className="rounded border border-yellow-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-yellow-200">Revenue Tracking</div>
                  <p className="mt-1 text-xs text-gray-400">MRR, growth metrics, plan management</p>
                </div>
              </div>
            </div>

            {/* AI & Analytics */}
            <div className="rounded-lg border border-yellow-800/50 bg-gradient-to-br from-yellow-950 to-yellow-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-yellow-300">AI & Analytics Services</h3>
              <div className="space-y-3">
                <div className="rounded border border-yellow-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-yellow-200">Google Gemini API</div>
                  <p className="mt-1 text-xs text-gray-400">Content generation, insights, automation</p>
                </div>
                <div className="rounded border border-yellow-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-yellow-200">Supabase Realtime</div>
                  <p className="mt-1 text-xs text-gray-400">Live data sync, WebSocket subscriptions</p>
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="rounded-lg border border-yellow-800/50 bg-gradient-to-br from-yellow-950 to-yellow-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-yellow-300">Communication Services</h3>
              <div className="space-y-3">
                <div className="rounded border border-yellow-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-yellow-200">Email Services</div>
                  <p className="mt-1 text-xs text-gray-400">Notifications, invitations, confirmations</p>
                </div>
                <div className="rounded border border-yellow-700/30 bg-black/30 p-3">
                  <div className="text-sm font-semibold text-yellow-200">Push Notifications</div>
                  <p className="mt-1 text-xs text-gray-400">Real-time alerts, engagement campaigns</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-center">
            <svg className="h-6 w-full text-yellow-600 opacity-50" viewBox="0 0 1000 30">
              <line x1="0" y1="15" x2="1000" y2="15" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
              <polygon points="1000,15 990,10 990,20" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* LAYER 7: REVENUE STREAMS & BUSINESS MODEL */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Layer 7: Revenue Streams & Business Model</h2>
            <p className="mt-1 text-gray-400">Multi-channel monetization strategy</p>
          </div>
          
          <div className="rounded-lg border border-orange-800/50 bg-gradient-to-br from-orange-950 to-orange-900 p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-orange-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-orange-300">SaaS SUBSCRIPTIONS</div>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Starter: $29/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Professional: $99/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Enterprise: $299/mo
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-orange-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-orange-300">NFC HARDWARE</div>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Business Cards: $0.50 ea
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Wristbands: $5 ea
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Tags: $2-$100
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-orange-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-orange-300">DIGITAL SERVICES</div>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Design: $500+
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Video Creation: $1,000+
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Content: $5,000+
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-orange-700/50 bg-black/40 p-4">
                <div className="mb-3 text-sm font-semibold text-orange-300">ANALYTICS SERVICES</div>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Geo-Marketing: $99/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Advanced Analytics: $299/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                    Predictive: $499/mo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KEY DATA FLOWS */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Key Data Flows</h2>
            <p className="mt-1 text-gray-400">Primary system interactions and processes</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
              <div className="mb-2 text-sm font-semibold text-white">NFC Scan Flow</div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300">
                <span className="rounded bg-gray-800 px-2 py-1">Guest taps NFC</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Mobile browser opens</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">API route processes</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Database records</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Real-time dashboard</span>
              </div>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Event Management Flow</div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300">
                <span className="rounded bg-gray-800 px-2 py-1">Admin creates event</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Team assignment</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">NFC deployment</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Guest check-in</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Real-time tracking</span>
              </div>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Revenue Attribution Flow</div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300">
                <span className="rounded bg-gray-800 px-2 py-1">NFC scans</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Conversion tracking</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">ROI calculation</span>
                <span className="text-gray-600">→</span>
                <span className="rounded bg-gray-800 px-2 py-1">Business intelligence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Demos
          </a>
        </div>
      </div>
    </div>
  );
}
