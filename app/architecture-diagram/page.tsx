export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Cosmic Portals SaaS Architecture
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* System Architecture Overview */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            System Architecture Overview
          </h2>

          {/* Main Architecture Blocks */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Access Points & Authentication */}
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                  <br />• Mobile App
                  <br />• Web App
                  <br />• White-Label Domains (e.g., events.company.com)
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Authentication:</strong>
                  <br />• Clerk – Identity & Session Management
                  <br />• 5-Tier RBAC System
                  <br />• Super Admin → Organization Owner → Admin → Team Member → Guest
                </div>
              </div>
            </div>

            {/* Core Application */}
            <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
                  <br />• Central Dashboard
                  <br />• Landing Page Builder
                  <br />• Event Manager
                  <br />• NFC Device Manager
                  <br />• Hardware Storefront
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Management & Analytics:</strong>
                  <br />• Performance & Analytics Dashboard
                  <br />• Team & Access Management
                  <br />• Task & Workflow Manager
                  <br />• Billing Dashboard
                  <br />• White-Label Settings
                </div>
              </div>
            </div>

            {/* Data Architecture & Storage */}
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
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
                  <br />• users, organizations, events, attendees
                  <br />• landing_pages, nfc_devices, nfc_scans
                  <br />• geo_sessions, tasks, subscriptions
                  <br />• billing_history, analytics, events
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Extended Tracking:</strong>
                  <br />• Persistent cookies (90–365 days)
                  <br />• Geo-pattern recognition
                  <br />• Multi-touch journey mapping
                  <br />• Row-Level Security (RLS)
                </div>
              </div>
            </div>

            {/* Analytics & Intelligence */}
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
                  <br />• NFC scans & landing-page interactions
                  <br />• Extended engagement tracking
                  <br />• Real-time event aggregation
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>AI-Driven Insights:</strong>
                  <br />• Conversion funnels & geo-heatmaps
                  <br />• Behavioral prediction models
                  <br />• ROI attribution & campaign effectiveness
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Services Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Connected Services & Commerce */}
            <div className="rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Connected Services & Commerce
              </h3>
              <p className="mb-4 text-center text-sm text-yellow-100">
                Multi-Channel Communication & Fulfillment
              </p>
              <div className="space-y-2 text-sm text-yellow-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Communication:</strong>
                  <br />• Push Notifications
                  <br />• Email & SMS
                  <br />• Webhooks
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Commerce & Billing:</strong>
                  <br />• Stripe Billing & Subscriptions
                  <br />• Usage-based pricing models
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Physical Fulfillment:</strong>
                  <br />• NFC devices & branded packaging
                  <br />• Logistics & shipping
                </div>
              </div>
            </div>

            {/* AI Services Gateway */}
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
                  <br />• Landing Page Generator
                  <br />• Geo-Marketing Intelligence
                  <br />• Lead Journey & Behavior Analysis
                  <br />• Content Automation
                  <br />• Analytics & Insights Engine
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Infrastructure:</strong>
                  <br />• Gemini + OpenAI API
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                  <br />• Clerk Authentication
                  <br />• Supabase RLS Enforcement
                  <br />• API Rate Limiting
                  <br />• Session Encryption
                  <br />• GDPR / CCPA Compliance
                  <br />• SOC 2 Type II Certification
                </div>
              </div>
            </div>
          </div>

          {/* Developer Tools Row */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Developer Tools & Integrations */}
            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Developer Tools & Integrations
              </h3>
              <p className="mb-4 text-center text-sm text-pink-100">
                APIs & Extensions
              </p>
              <div className="space-y-2 text-sm text-pink-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>APIs & Extensions:</strong>
                  <br />• RESTful API
                  <br />• SDKs & Webhooks
                  <br />• OpenAI Agents Integration
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Custom Solutions:</strong>
                  <br />• White-Label SDK
                  <br />• Custom Domain Management
                </div>
              </div>
            </div>

            {/* Frontend Stack */}
            <div className="rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Frontend Stack
              </h3>
              <p className="mb-4 text-center text-sm text-cyan-100">
                Modern Web Technologies
              </p>
              <div className="space-y-2 text-sm text-cyan-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Core Technologies:</strong>
                  <br />• Next.js 15 with App Router
                  <br />• React 18 with Server Components
                  <br />• Tailwind CSS for Styling
                  <br />• TypeScript for Type Safety
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Details */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Technical Stack Details
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 21l4-7 4 7" stroke="currentColor" strokeWidth="2" fill="none"/>
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
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="4" y="5" width="16" height="10" rx="1" ry="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <rect x="6" y="7" width="12" height="6" rx="0.5" ry="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Backend</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Node.js Runtime</div>
                <div className="mb-2">• Supabase PostgreSQL</div>
                <div className="mb-2">• Redis for Caching</div>
                <div>• Clerk Authentication</div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 10l4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
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
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 7l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 13l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
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
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Deployment & Infrastructure
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 2v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 18v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M4.93 4.93l2.83 2.83" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16.24 16.24l2.83 2.83" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M2 12h4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M18 12h4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M4.93 19.07l2.83-2.83" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-gray-900">Hosting</h3>
              <div className="text-sm text-gray-600">
                <div className="mb-2">• Vercel Hosting</div>
                <div className="mb-2">• Global CDN & Edge Functions</div>
                <div className="mb-2">• SSL Security</div>
                <div>• End-to-End Encryption</div>
                <div>• Auto Scaling</div>
                <div>• Dynamic Resource Allocation</div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="4" y="5" width="16" height="10" rx="1" ry="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <rect x="6" y="7" width="12" height="6" rx="0.5" ry="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="8" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="12" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="16" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
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
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 7l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 13l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="8" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="12" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="16" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
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
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Business Model
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Recurring SaaS Subscriptions
              </div>
              <p className="text-gray-600">Monthly/Annual recurring revenue</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Physical Hardware Sales
              </div>
              <p className="text-gray-600">
                NFC tags, scanners, branded merchandise
              </p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Branded Design and Creative Services
              </div>
              <p className="text-gray-600">
                Custom branding and creative solutions
              </p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                B2B & B2C Geo Marketing paid ads and insights
              </div>
              <p className="text-gray-600">
                Location-based advertising and insights
              </p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-gray-900">
                Advanced Analytics and Attribution Solutions
              </div>
              <p className="text-gray-600">
                Advanced reporting and attribution
              </p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 text-center shadow-lg">
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
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Key Service Offerings & Revenue Streams
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 7l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 13l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">SaaS Platform Services</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-tenant Dashboard & Analytics</li>
                <li>• AI-Powered Landing Page Builder</li>
                <li>• Geo-Marketing Intelligence Engine</li>
                <li>• NFC Device Management System</li>
                <li>• White-Label Custom Domains</li>
                <li>• 5-Tier Role-Based Access Control</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="4" y="5" width="16" height="10" rx="1" ry="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="8" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="12" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="16" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Physical Products & Merchandise</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom NFC Tags & Cards</li>
                <li>• Branded Business Cards</li>
                <li>• Event Badges & Wristbands</li>
                <li>• Product Packaging Integration</li>
                <li>• Bulk Order Management</li>
                <li>• Shipping & Logistics</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-600 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-purple-100 p-3">
                  <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 7l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 13l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="8" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="12" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="16" cy="10" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Advanced Analytics & Attribution</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time Engagement Tracking</li>
                <li>• Conversion Funnel Analysis</li>
                <li>• Geo-Heatmap Visualization</li>
                <li>• Customer Journey Mapping</li>
                <li>• ROI Attribution & Campaign Effectiveness</li>
                <li>• Behavioral Prediction Models</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}