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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
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
              <p className="mb-4 text-center text-sm text-purple-100">User Interfaces & RBAC</p>
              <div className="space-y-2 text-sm text-purple-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>User Interfaces:</strong><br />
                  • Mobile App<br />
                  • Web App<br />
                  • White-Label Domains (e.g., events.company.com)
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Authentication:</strong><br />
                  • Clerk - Identity & Session Management<br />
                  • 5-Tier RBAC System<br />
                  • Super Admin → Organization Owner → Admin → Team Member → Guest
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
              <p className="mb-4 text-center text-sm text-red-100">Next.js 15 App Router Platform</p>
              <div className="space-y-2 text-sm text-red-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Primary Components:</strong><br />
                  • Central Dashboard<br />
                  • Landing Page Builder<br />
                  • Event Manager<br />
                  • NFC Device Manager<br />
                  • Hardware Storefront
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Management & Analytics:</strong><br />
                  • Performance & Analytics Dashboard<br />
                  • Team & Access Management<br />
                  • Task & Workflow Manager<br />
                  • Billing Dashboard<br />
                  • White Label Settings
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
              <p className="mb-4 text-center text-sm text-green-100">Supabase PostgreSQL Multi-tenant</p>
              <div className="space-y-2 text-sm text-green-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Core Tables (12+):</strong><br />
                  • users, organizations, events, attendees<br />
                  • landing_pages, nfc_devices, nfc_scans<br />
                  • geo_sessions, tasks, subscriptions<br />
                  • billing_history, analytics_events
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Extended Tracking:</strong><br />
                  • Persistent cookies (90-365 days)<br />
                  • Geo-pattern recognition<br />
                  • Multi-touch journey mapping<br />
                  • Row-Level Security (RLS)
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
              <p className="mb-4 text-center text-sm text-blue-100">AI-Driven Insights & Real-time Processing</p>
              <div className="space-y-2 text-sm text-blue-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Session Tracking:</strong><br />
                  • NFC scans & landing-page interactions<br />
                  • Extended engagement tracking<br />
                  • Real-time event aggregation
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>AI-Driven Insights:</strong><br />
                  • Conversion funnels & geo-heatmaps<br />
                  • Behavioral prediction models<br />
                  • ROI attribution & campaign effectiveness
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
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                AI Services Gateway
              </h3>
              <p className="mb-4 text-center text-sm text-orange-100">AI Orchestration</p>
              <div className="space-y-2 text-sm text-orange-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Core Capabilities:</strong><br />
                  • AI Landing Page Generator<br />
                  • Geo Marketing Intelligence<br />
                  • Event Landing Page Builder<br />
                  • Content Automation<br />
                  • Analytics & Insights Engine
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Infrastructure:</strong><br />
                  • Gemini / OpenAI API
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
              <p className="mb-4 text-center text-sm text-purple-100">Multi-Layer Security</p>
              <div className="space-y-2 text-sm text-purple-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Protection & Governance:</strong><br />
                  • Clerk Authentication<br />
                  • Supabase RLS Enforcement<br />
                  • API Rate Limiting<br />
                  • Breaker Encryption<br />
                  • GDPR / CCPA Compliance<br />
                  • SOC2 Type II Certification
                </div>
              </div>
            </div>

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
              <p className="mb-4 text-center text-sm text-pink-100">API & Extensions</p>
              <div className="space-y-2 text-sm text-pink-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>APIs & Integrations:</strong><br />
                  • RESTful API<br />
                  • Webhooks<br />
                  • OpenAI Agents Integration
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Custom Solutions:</strong><br />
                  • White Label Kits<br />
                  • Custom Storefront Management
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Frontend Stack</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Next.js 15 App Router</li>
                <li>• React 18 with Server Components</li>
                <li>• Tailwind CSS for Styling</li>
                <li>• TypeScript for Type Safety</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Backend Stack</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js Runtime</li>
                <li>• Supabase PostgresSQL</li>
                <li>• Redis for Caching</li>
                <li>• Clerk for Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment & Infrastructure */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Deployment & Infrastructure
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Vercel Hosting</h3>
              <p className="text-gray-600">Global CDN & Edge Functions</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-yellow-100 p-3">
                  <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">SSL Security</h3>
              <p className="text-gray-600">End-to-End Encryption</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Auto Scaling</h3>
              <p className="text-gray-600">Dynamic Resource Allocation</p>
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Business Model
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-3 text-2xl font-bold text-gray-900">Recurring SaaS Subscriptions</div>
              <p className="text-gray-600">Monthly/Annual recurring revenue</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-3 text-2xl font-bold text-gray-900">Physical Hardware Sales</div>
              <p className="text-gray-600">NFC tags, scanners, branded merchandise</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-3 text-2xl font-bold text-gray-900">Branded Design and Creative Services</div>
              <p className="text-gray-600">Custom branding and creative solutions</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-3 text-2xl font-bold text-gray-900">B2B & B2C Geo Marketing paid ads and insights</div>
              <p className="text-gray-600">Location-based advertising and insights</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-3 text-2xl font-bold text-gray-900">Advanced Analytics and Attribution Solutions</div>
              <p className="text-gray-600">Advanced reporting and attribution</p>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg text-center">
              <div className="mb-3 text-2xl font-bold text-gray-900">Enterprise White-Label Solutions</div>
              <p className="text-gray-600">White-label and custom implementations</p>
            </div>
          </div>
        </div>

        {/* Key Service Offerings & Revenue Streams */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Key Service Offerings & Revenue Streams
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">SaaS Platform Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• NFC Tag & QR Code Management</li>
                <li>• AI-Powered Landing Page Builder</li>
                <li>• Geo Marketing Intelligence Engine</li>
                <li>• NFC Device Management System</li>
                <li>• White Label Custom Domains</li>
                <li>• Real-time Event Analytics</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Physical Products & Merchandise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom NFC Tags & Cards</li>
                <li>• Branded NFC Stickers</li>
                <li>• Event Badges & Wristbands</li>
                <li>• NFC-Enabled Merch</li>
                <li>• Product Packaging Integration</li>
                <li>• Bulk Order Management</li>
                <li>• Shipping & Logistics</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Advanced Analytics & Attribution</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time Engagement Tracking</li>
                <li>• Conversion Funnel Analysis</li>
                <li>• Customer Journey Mapping</li>
                <li>• Behavioral Prediction Models</li>
                <li>• ROI Attribution & Optimization</li>
                <li>• Custom Reporting & Dashboards</li>
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
            {/* Event Organizer Journey */}
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-purple-100 p-3 mr-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Event Organizer Journey</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-purple-600">1</span>
                  </div>
                  <div>
                    <strong>Sign up & Create Organization</strong><br />
                    <span className="text-gray-600">Set up team members and permissions</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-purple-600">2</span>
                  </div>
                  <div>
                    <strong>Design Landing Pages with AI Builder</strong><br />
                    <span className="text-gray-600">Create custom event pages and content</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <strong>Order Custom NFC Merch & Branding</strong><br />
                    <span className="text-gray-600">Get branded NFC tags and merchandise</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-purple-600">4</span>
                  </div>
                  <div>
                    <strong>Deploy at Event & Track Real-time Analytics</strong><br />
                    <span className="text-gray-600">Monitor engagement and performance</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <strong className="text-gray-900">Key Features Used:</strong>
                <div className="text-gray-700 mt-1">Landing Page Builder, Custom NFC Merchandise, Geo Marketing Intelligence, Real-time Analytics, Event Branding</div>
              </div>
            </div>

            {/* Event Guest Journey */}
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-pink-100 p-3 mr-4">
                  <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Event Guest Journey</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="rounded-full bg-pink-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-pink-600">1</span>
                  </div>
                  <div>
                    <strong>Receive Event Invitation</strong><br />
                    <span className="text-gray-600">Get invited to event via email/SMS</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-pink-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-pink-600">2</span>
                  </div>
                  <div>
                    <strong>Tap NFC Tag at Event</strong><br />
                    <span className="text-gray-600">Scan NFC tag with smartphone</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-pink-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-pink-600">3</span>
                  </div>
                  <div>
                    <strong>Access Photo Galleries & Content</strong><br />
                    <span className="text-gray-600">View event photos, videos, and information</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-pink-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-pink-600">4</span>
                  </div>
                  <div>
                    <strong>Share & Connect with Others</strong><br />
                    <span className="text-gray-600">Social sharing and networking</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <strong className="text-gray-900">Key Features Used:</strong>
                <div className="text-gray-700 mt-1">NFC Tag Interaction, Photo Gallery Access, Social Sharing, Event Content</div>
              </div>
            </div>

            {/* Business Owner Journey */}
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Owner Journey</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <strong>Subscribe to SaaS Plan</strong><br />
                    <span className="text-gray-600">Choose subscription tier and features</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <strong>Set up Team & Multi-location Tracking</strong><br />
                    <span className="text-gray-600">Configure team members and locations</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <strong>Create Geo Marketing Campaigns & Paid Ads</strong><br />
                    <span className="text-gray-600">Launch targeted marketing campaigns</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <strong>Generate Analytics Reports & Optimize ROI</strong><br />
                    <span className="text-gray-600">Track performance and optimize campaigns</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <strong className="text-gray-900">Key Features Used:</strong>
                <div className="text-gray-700 mt-1">Multi-location Tracking, Geo Marketing Intelligence, Analytics Reporting, Paid Ads Add-on, ROI Optimization</div>
              </div>
            </div>

            {/* Marketing Agency Journey */}
            <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Marketing Agency Journey</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="rounded-full bg-green-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <strong>Access White-label Platform</strong><br />
                    <span className="text-gray-600">Get access to client management tools</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-green-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <strong>Create Client Campaigns with AI</strong><br />
                    <span className="text-gray-600">Use AI insights for client campaigns</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-green-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <strong>Order Custom NFC Merch for Clients</strong><br />
                    <span className="text-gray-600">Get branded materials for client events</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-green-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold text-green-600">4</span>
                  </div>
                  <div>
                    <strong>Deliver Comprehensive Analytics Reports</strong><br />
                    <span className="text-gray-600">Provide detailed performance reports</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <strong className="text-gray-900">Key Features Used:</strong>
                <div className="text-gray-700 mt-1">White-Label Client Portals, AI Insights & Analytics, Custom NFC Merchandise, Advanced Analytics, Client Reporting Dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Viewer NFC Scan Flow */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Viewer NFC Scan Flow
          </h2>
          <div className="rounded-lg bg-white border-2 border-gray-200 p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">NFC Scan Process</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-blue-600">1</span>
                </div>
                <div>
                  <strong>Scan/Tap NFC tag</strong><br />
                  <span className="text-gray-600">User taps NFC tag with smartphone</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-blue-600">2</span>
                </div>
                <div>
                  <strong>Dynamic landing page loads</strong><br />
                  <span className="text-gray-600">Instant access to personalized content</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-blue-600">3</span>
                </div>
                <div>
                  <strong>Scan data and geolocation captured</strong><br />
                  <span className="text-gray-600">Analytics tracking and location data</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-blue-600">4</span>
                </div>
                <div>
                  <strong>Personalized content delivered</strong><br />
                  <span className="text-gray-600">Text, images, video based on user profile</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <strong className="text-gray-900">Real-time Analytics:</strong>
              <div className="text-gray-700 mt-1">Engagement, conversions, user journey mapping, ROI attribution, campaign effectiveness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}