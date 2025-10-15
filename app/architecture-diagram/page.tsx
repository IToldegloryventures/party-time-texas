export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Cosmic Portals SaaS Architecture
          </h1>
          <p className="text-xl text-gray-300">
            Professional System Architecture | Investor-Ready Presentation
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* System Architecture Overview */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            System Architecture Overview
          </h2>

          {/* Main Architecture Blocks */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Access Points & Authentication */}
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Access Points & Authentication
              </h3>
              <p className="mb-4 text-center text-sm text-purple-100">
                User Interfaces & RBAC
              </p>
              <div className="space-y-2 text-sm text-purple-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>User Interfaces:</strong>
                  <br />
                  • Mobile App
                  <br />
                  • Web App
                  <br />• White-Label Domains (e.g., events.company.com)
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Authentication:</strong>
                  <br />
                  • Clerk - Identity & Session Management
                  <br />
                  • 5-Tier RBAC System
                  <br />• Super Admin → Organization Owner → Admin → Team Member
                  → Guest
                </div>
              </div>
            </div>

            {/* Core Application */}
            <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Core Application
              </h3>
              <p className="mb-4 text-center text-sm text-red-100">
                Next.js 15 App Router Platform
              </p>
              <div className="space-y-2 text-sm text-red-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Primary Components:</strong>
                  <br />
                  • Central Dashboard
                  <br />
                  • Landing Page Builder
                  <br />
                  • Event Manager
                  <br />
                  • NFC Device Manager
                  <br />• Hardware Storefront
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Management & Analytics:</strong>
                  <br />
                  • Performance & Analytics Dashboard
                  <br />
                  • Team & Access Management
                  <br />
                  • Task & Workflow Manager
                  <br />
                  • Billing Dashboard
                  <br />• White Label Settings
                </div>
              </div>
            </div>

            {/* Data Architecture & Storage */}
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Data Architecture & Storage
              </h3>
              <p className="mb-4 text-center text-sm text-green-100">
                Supabase PostgreSQL Multi-tenant
              </p>
              <div className="space-y-2 text-sm text-green-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Core Tables (12+):</strong>
                  <br />
                  • users, organizations, events, attendees
                  <br />
                  • landing_pages, nfc_devices, nfc_scans
                  <br />
                  • geo_sessions, tasks, subscriptions
                  <br />• billing_history, analytics_events
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Extended Tracking:</strong>
                  <br />
                  • Persistent cookies (90-365 days)
                  <br />
                  • Geo-pattern recognition
                  <br />
                  • Multi-touch journey mapping
                  <br />• Row-Level Security (RLS)
                </div>
              </div>
            </div>

            {/* Analytics & Intelligence */}
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Analytics & Intelligence
              </h3>
              <p className="mb-4 text-center text-sm text-blue-100">
                AI-Driven Insights & Real-time Processing
              </p>
              <div className="space-y-2 text-sm text-blue-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Session Tracking:</strong>
                  <br />
                  • NFC scans & landing-page interactions
                  <br />
                  • Extended engagement tracking
                  <br />• Real-time event aggregation
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>AI-Driven Insights:</strong>
                  <br />
                  • Conversion funnels & geo-heatmaps
                  <br />
                  • Behavioral prediction models
                  <br />• ROI attribution & campaign effectiveness
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Services Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* AI Services Gateway */}
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                AI Services Gateway
              </h3>
              <p className="mb-4 text-center text-sm text-orange-100">
                AI Orchestration
              </p>
              <div className="space-y-2 text-sm text-orange-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Core Capabilities:</strong>
                  <br />
                  • AI Landing Page Generator
                  <br />
                  • Geo Marketing Intelligence
                  <br />
                  • Event Landing Page Builder
                  <br />
                  • Content Automation
                  <br />• Analytics & Insights Engine
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Infrastructure:</strong>
                  <br />• Gemini / OpenAI API
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Security & Compliance
              </h3>
              <p className="mb-4 text-center text-sm text-purple-100">
                Multi-Layer Security
              </p>
              <div className="space-y-2 text-sm text-purple-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Protection & Governance:</strong>
                  <br />
                  • Clerk Authentication
                  <br />
                  • Supabase RLS Enforcement
                  <br />
                  • API Rate Limiting
                  <br />
                  • Breaker Encryption
                  <br />
                  • GDPR / CCPA Compliance
                  <br />• SOC2 Type II Certification
                </div>
              </div>
            </div>

            {/* Developer Tools & Integrations */}
            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Developer Tools & Integrations
              </h3>
              <p className="mb-4 text-center text-sm text-pink-100">
                API & Extensions
              </p>
              <div className="space-y-2 text-sm text-pink-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>APIs & Integrations:</strong>
                  <br />
                  • RESTful API
                  <br />
                  • Webhooks
                  <br />• OpenAI Agents Integration
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Custom Solutions:</strong>
                  <br />
                  • White Label Kits
                  <br />• Custom Storefront Management
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Details */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Technical Stack Details
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Frontend</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Next.js 15 App Router</div>
                <div className="mb-2">• React 18</div>
                <div className="mb-2">• TypeScript</div>
                <div>• Tailwind CSS</div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Backend</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Supabase PostgreSQL</div>
                <div className="mb-2">• Next.js API Routes</div>
                <div className="mb-2">• Server Actions</div>
                <div>• Edge Functions</div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Authentication</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Clerk Identity</div>
                <div className="mb-2">• 5-Tier RBAC</div>
                <div className="mb-2">• Session Management</div>
                <div>• Multi-Factor Auth</div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">AI & Analytics</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• OpenAI GPT-4</div>
                <div className="mb-2">• Google Gemini</div>
                <div className="mb-2">• Real-time Analytics</div>
                <div>• Predictive Models</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment & Infrastructure */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Deployment & Infrastructure
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Hosting</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Vercel Edge Network</div>
                <div className="mb-2">• Global CDN</div>
                <div className="mb-2">• Auto-scaling</div>
                <div>• Zero-downtime deployments</div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Database</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Supabase Cloud</div>
                <div className="mb-2">• PostgreSQL 15</div>
                <div className="mb-2">• Real-time subscriptions</div>
                <div>• Automated backups</div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Monitoring</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Vercel Analytics</div>
                <div className="mb-2">• Error tracking</div>
                <div className="mb-2">• Performance monitoring</div>
                <div>• Uptime monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Business Model
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Recurring SaaS Subscriptions
              </div>
              <p className="text-gray-600">Monthly/Annual recurring revenue</p>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Physical Hardware Sales
              </div>
              <p className="text-gray-600">
                NFC tags, scanners, branded merchandise
              </p>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Branded Design and Creative Services
              </div>
              <p className="text-gray-600">
                Custom branding and creative solutions
              </p>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                B2B & B2C Geo Marketing paid ads and insights
              </div>
              <p className="text-gray-600">
                Location-based advertising and insights
              </p>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Advanced Analytics and Attribution Solutions
              </div>
              <p className="text-gray-600">
                Advanced reporting and attribution
              </p>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Enterprise White-Label Solutions
              </div>
              <p className="text-gray-600">
                White-label and custom implementations
              </p>
            </div>
          </div>
        </div>

        {/* Key Service Offerings & Revenue Streams */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Key Service Offerings & Revenue Streams
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-bold">SaaS Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>• Multi-tenant dashboard</li>
                <li>• Team collaboration tools</li>
                <li>• White-label customization</li>
                <li>• API access & webhooks</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-bold">NFC Hardware</h3>
              <ul className="space-y-2 text-sm">
                <li>• Custom NFC tags & stickers</li>
                <li>• NFC-enabled merchandise</li>
                <li>• Event wristbands & badges</li>
                <li>• Business cards & marketing materials</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-bold">AI Services</h3>
              <ul className="space-y-2 text-sm">
                <li>• AI landing page generation</li>
                <li>• Geo-marketing intelligence</li>
                <li>• Content automation</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Creative Services</h3>
              <ul className="space-y-2 text-sm">
                <li>• Custom branding & design</li>
                <li>• Landing page development</li>
                <li>• Event marketing materials</li>
                <li>• Photo galleries & content</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Analytics & Insights</h3>
              <ul className="space-y-2 text-sm">
                <li>• Advanced attribution modeling</li>
                <li>• Geo-heatmap analysis</li>
                <li>• Conversion funnel optimization</li>
                <li>• ROI reporting & insights</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Enterprise Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>• White-label implementations</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• Enterprise security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Journey Examples */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            User Journey Examples
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Marketing Agency Journey */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Marketing Agency Journey</h3>
              <div className="space-y-3">
                <div className="rounded bg-blue-50 p-3">
                  <strong className="text-blue-800">Client Onboarding:</strong>
                  <div className="text-sm text-blue-700">Setup white-label domain, customize branding, configure team access</div>
                </div>
                <div className="rounded bg-green-50 p-3">
                  <strong className="text-green-800">Campaign Creation:</strong>
                  <div className="text-sm text-green-700">Create NFC-enabled materials, design landing pages, setup tracking</div>
                </div>
                <div className="rounded bg-purple-50 p-3">
                  <strong className="text-purple-800">Key Features Used:</strong>
                  <div className="text-sm text-purple-700">AI Insights & Analytics, Geo Marketing, Cross Marketing Paid Ads, Custom Branding</div>
                </div>
                <div className="rounded bg-orange-50 p-3">
                  <strong className="text-orange-800">Results & Reporting:</strong>
                  <div className="text-sm text-orange-700">Real-time analytics, conversion tracking, ROI attribution, client reporting</div>
                </div>
              </div>
            </div>

            {/* Business Owner Journey */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Business Owner Journey</h3>
              <div className="space-y-3">
                <div className="rounded bg-blue-50 p-3">
                  <strong className="text-blue-800">Platform Setup:</strong>
                  <div className="text-sm text-blue-700">Create organization, setup team, configure billing, customize settings</div>
                </div>
                <div className="rounded bg-green-50 p-3">
                  <strong className="text-green-800">NFC Implementation:</strong>
                  <div className="text-sm text-green-700">Order NFC devices, create landing pages, setup event tracking</div>
                </div>
                <div className="rounded bg-purple-50 p-3">
                  <strong className="text-purple-800">Key Features Used:</strong>
                  <div className="text-sm text-purple-700">Analytics Reporting, GEO Marketing Capabilities, Cross Marketing Paid Ads Addon, Event Management</div>
                </div>
                <div className="rounded bg-orange-50 p-3">
                  <strong className="text-orange-800">Growth & Optimization:</strong>
                  <div className="text-sm text-orange-700">Performance monitoring, team expansion, feature upgrades, ROI optimization</div>
                </div>
              </div>
            </div>

            {/* Viewer NFC Scan Flow */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Viewer NFC Scan Flow</h3>
              <div className="space-y-3">
                <div className="rounded bg-blue-50 p-3">
                  <strong className="text-blue-800">NFC Interaction:</strong>
                  <div className="text-sm text-blue-700">User taps NFC device, automatic redirect to landing page</div>
                </div>
                <div className="rounded bg-green-50 p-3">
                  <strong className="text-green-800">Landing Page Experience:</strong>
                  <div className="text-sm text-green-700">Personalized content, event details, photo galleries, social sharing</div>
                </div>
                <div className="rounded bg-purple-50 p-3">
                  <strong className="text-purple-800">Engagement Tracking:</strong>
                  <div className="text-sm text-purple-700">Session recording, interaction analytics, geo-location tracking</div>
                </div>
                <div className="rounded bg-orange-50 p-3">
                  <strong className="text-orange-800">Follow-up Actions:</strong>
                  <div className="text-sm text-orange-700">Email capture, social media connections, future event notifications</div>
                </div>
              </div>
            </div>

            {/* Developer Integration Journey */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Developer Integration Journey</h3>
              <div className="space-y-3">
                <div className="rounded bg-blue-50 p-3">
                  <strong className="text-blue-800">API Access:</strong>
                  <div className="text-sm text-blue-700">Get API keys, review documentation, setup webhooks</div>
                </div>
                <div className="rounded bg-green-50 p-3">
                  <strong className="text-green-800">Integration Development:</strong>
                  <div className="text-sm text-green-700">Build custom integrations, test API endpoints, implement webhooks</div>
                </div>
                <div className="rounded bg-purple-50 p-3">
                  <strong className="text-purple-800">Key Features Used:</strong>
                  <div className="text-sm text-purple-700">RESTful API, Webhooks, OpenAI Agents Integration, Custom Solutions</div>
                </div>
                <div className="rounded bg-orange-50 p-3">
                  <strong className="text-orange-800">Deployment & Support:</strong>
                  <div className="text-sm text-orange-700">Production deployment, monitoring, ongoing support, feature updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}