export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
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
        {/* Core Architecture Overview */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            System Architecture Overview
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <div className="space-y-2 text-sm text-purple-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>User Interfaces:</strong> Web Dashboard, Mobile App, NFC Scanners
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Authentication:</strong> Clerk Auth, Multi-Factor, SSO
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Access Control:</strong> Role-Based Permissions, Organization Management
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
              <div className="space-y-2 text-sm text-red-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Dashboard Modules:</strong> Events, Analytics, Team Management
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Business Logic:</strong> Event Assignment, NFC Processing, User Management
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>API Layer:</strong> RESTful APIs, Real-time Updates, WebSocket Connections
                </div>
              </div>
            </div>

            {/* Data Architecture */}
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-white">
                Data Architecture
              </h3>
              <div className="space-y-2 text-sm text-green-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Database:</strong> Supabase PostgreSQL, Real-time Subscriptions
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Storage:</strong> File Uploads, Media Assets, Document Management
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Analytics:</strong> Event Tracking, User Behavior, Performance Metrics
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
              <div className="space-y-2 text-sm text-blue-100">
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>AI Insights:</strong> OpenAI Integration, Predictive Analytics, Smart Recommendations
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Reporting:</strong> Real-time Dashboards, Custom Reports, Data Visualization
                </div>
                <div className="rounded bg-white/10 px-3 py-2">
                  <strong>Geo Marketing:</strong> Location-based Campaigns, Targeted Advertising, ROI Tracking
                </div>
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
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-white">SaaS Subscriptions</div>
              <p className="text-purple-100">Monthly/Annual recurring revenue</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-white">Hardware Sales</div>
              <p className="text-green-100">NFC tags, scanners, branded merchandise</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-white">Design Services</div>
              <p className="text-blue-100">Custom branding and creative solutions</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-white">Geo Marketing</div>
              <p className="text-yellow-100">Location-based advertising and insights</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-700 p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-white">Analytics Solutions</div>
              <p className="text-red-100">Advanced reporting and attribution</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 text-center shadow-lg">
              <div className="mb-3 text-2xl font-bold text-white">Enterprise Solutions</div>
              <p className="text-indigo-100">White-label and custom implementations</p>
            </div>
          </div>
        </div>

        {/* Key Service Offerings & Revenue Streams */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Key Service Offerings & Revenue Streams
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Core Platform Services</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• NFC Tag Management & Tracking</li>
                <li>• Event Management & Analytics</li>
                <li>• Team Collaboration Tools</li>
                <li>• Real-time Dashboard & Reporting</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Marketing & Analytics</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• Geo-Marketing Campaigns</li>
                <li>• AI-Powered Insights</li>
                <li>• Cross-Marketing Paid Ads</li>
                <li>• Attribution & ROI Tracking</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Hardware & Creative</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• Custom NFC Tags & Merchandise</li>
                <li>• Branded Design Services</li>
                <li>• Landing Page Builder</li>
                <li>• Photo Gallery Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Journey Examples */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            User Journey Examples
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Marketing Agency Journey */}
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Marketing Agency Journey</h3>
              <div className="space-y-3 text-orange-100">
                <div className="rounded bg-white/10 p-3">
                  <strong>1. Client Onboarding:</strong> Set up organization, create team members
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>2. Campaign Setup:</strong> Design NFC tags, create landing pages
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>3. Campaign Execution:</strong> Deploy tags, track real-time engagement
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>4. Analytics & Reporting:</strong> AI insights, client reports, ROI analysis
                </div>
              </div>
            </div>

            {/* Viewer NFC Scan Flow */}
            <div className="rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Viewer NFC Scan Flow</h3>
              <div className="space-y-3 text-teal-100">
                <div className="rounded bg-white/10 p-3">
                  <strong>1. NFC Scan:</strong> Tap NFC tag with smartphone
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>2. Instant Access:</strong> Direct to landing page or content
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>3. Engagement:</strong> View content, photos, videos, contact info
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>4. Data Capture:</strong> Analytics tracking, lead generation
                </div>
              </div>
            </div>

            {/* Business Owner Journey */}
            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Business Owner Journey</h3>
              <div className="space-y-3 text-pink-100">
                <div className="rounded bg-white/10 p-3">
                  <strong>1. Platform Setup:</strong> Create account, set up organization
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>2. Campaign Creation:</strong> Design NFC strategy, create content
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>3. Analytics & Insights:</strong> Track performance, optimize campaigns
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>4. Growth & Scaling:</strong> Geo marketing, paid ads, enterprise features
                </div>
              </div>
            </div>

            {/* Developer Integration Journey */}
            <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Developer Integration Journey</h3>
              <div className="space-y-3 text-indigo-100">
                <div className="rounded bg-white/10 p-3">
                  <strong>1. API Access:</strong> Get API keys, review documentation
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>2. Integration:</strong> Connect to existing systems, webhooks
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>3. Custom Development:</strong> OpenAI Agents Integration, custom workflows
                </div>
                <div className="rounded bg-white/10 p-3">
                  <strong>4. Deployment:</strong> Launch integrated solution, monitor performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
