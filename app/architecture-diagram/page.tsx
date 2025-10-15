export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            COSMIC PORTALS – NFC-POWERED SAAS PLATFORM ARCHITECTURE
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Main Architecture Flow */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            System Architecture Overview
          </h2>

          {/* Entry Points & Authentication */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                ENTRY POINTS & AUTHENTICATION
              </h3>
              <p className="mb-6 text-center text-lg text-purple-100">
                User Interfaces & RBAC
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">User Interfaces</h4>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li>• Mobile App</li>
                    <li>• Web App</li>
                    <li>• White-Label Domains (events.company.com)</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Clerk Authentication</h4>
                  <div className="text-sm text-purple-100">
                    <div className="mb-2 font-semibold">Role-Based Access Control:</div>
                    <ul className="space-y-1">
                      <li>• Super Admin</li>
                      <li>• Organization Owner</li>
                      <li>• Admin</li>
                      <li>• Member</li>
                      <li>• Guest</li>
                      <li>• View-Only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agent Layer */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                AI AGENT LAYER
              </h3>
              <p className="mb-6 text-center text-lg text-orange-100">
                AI Services Gateway
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">AI Agents</h4>
                  <ul className="space-y-2 text-sm text-orange-100">
                    <li>• Landing Page Generator Agent</li>
                    <li>• Geo-Marketing Intelligence Agent</li>
                    <li>• Lead Behavior Analysis Agent</li>
                    <li>• Content Creation Agent</li>
                    <li>• Analytics Insights Agent</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Infrastructure</h4>
                  <ul className="space-y-2 text-sm text-orange-100">
                    <li>• Gemini + OpenAI API</li>
                    <li>• AI Rate Limiting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Core Dashboard */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                CORE DASHBOARD
              </h3>
              <p className="mb-6 text-center text-lg text-red-100">
                Central Admin Environment (Next.js 15 App Router)
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Core Features</h4>
                  <ul className="space-y-2 text-sm text-red-100">
                    <li>• Landing Page Builder</li>
                    <li>• NFC Campaign Manager</li>
                    <li>• Geofence & Beacon Manager</li>
                    <li>• Analytics Dashboard</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Asset Management</h4>
                  <ul className="space-y-2 text-sm text-red-100">
                    <li>• Asset Library</li>
                    <li>• Campaign Templates</li>
                    <li>• Conversion Events</li>
                    <li>• QR/NFC Device Registry</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Scheduling & Tracking</h4>
                  <ul className="space-y-2 text-sm text-red-100">
                    <li>• Post Scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Engine */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                ANALYTICS ENGINE
              </h3>
              <p className="mb-6 text-center text-lg text-blue-100">
                Analytics & Tracking Layer
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Core Tracking</h4>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Session Tracker</li>
                    <li>• Geofence Triggers</li>
                    <li>• Clickstream</li>
                    <li>• Attribution Events</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Visualization</h4>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Heatmaps</li>
                    <li>• Scan Logs</li>
                    <li>• Funnel Reporting</li>
                    <li>• UTM Parameters</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Advanced Analytics</h4>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Custom Cookie Logic</li>
                    <li>• Device Fingerprinting</li>
                    <li>• ROI Reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                DATA LAYER
              </h3>
              <p className="mb-6 text-center text-lg text-green-100">
                Supabase RLS Postgres Multi-Tenant Schema
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Core Data</h4>
                  <ul className="space-y-2 text-sm text-green-100">
                    <li>• Customer Data</li>
                    <li>• Scan Events</li>
                    <li>• Location Logs</li>
                    <li>• Event Metadata</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Configuration</h4>
                  <ul className="space-y-2 text-sm text-green-100">
                    <li>• Device Configs</li>
                    <li>• Campaign Assets</li>
                    <li>• Tag Links</li>
                    <li>• Visitor Sessions</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Integration</h4>
                  <ul className="space-y-2 text-sm text-green-100">
                    <li>• Webhooks</li>
                    <li>• Extended Retention</li>
                    <li>• Role-Based Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                SECURITY & COMPLIANCE
              </h3>
              <p className="mb-6 text-center text-lg text-purple-100">
                Enforced System-Wide
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Authentication & Access</h4>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li>• Clerk Auth</li>
                    <li>• Supabase RLS</li>
                    <li>• API Rate Limits</li>
                    <li>• MFA + Email OTP</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Compliance & Governance</h4>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li>• GDPR/CCPA</li>
                    <li>• SOC 2 Type II</li>
                    <li>• Audit Logging</li>
                    <li>• Permission Matrix</li>
                    <li>• Tiered Role Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* API & Developer Access */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                API & DEVELOPER ACCESS
              </h3>
              <p className="mb-6 text-center text-lg text-pink-100">
                Optional Add-Ons
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">API Services</h4>
                  <ul className="space-y-2 text-sm text-pink-100">
                    <li>• Public API</li>
                    <li>• Zapier Integration</li>
                    <li>• SDKs</li>
                    <li>• Webhooks</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Developer Tools</h4>
                  <ul className="space-y-2 text-sm text-pink-100">
                    <li>• API Key System</li>
                    <li>• White-Label SDK</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Flow */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-3">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                GUEST FLOW (TRIGGERED BY NFC SCAN)
              </h3>
              <p className="mb-6 text-center text-lg text-cyan-100">
                Scan Interaction Flow
              </p>
              
              <div className="rounded bg-white/10 p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                  <div className="text-center">
                    <div className="mb-2 text-sm font-bold text-white">1. Guest Scans NFC Object</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-sm font-bold text-white">2. Landing Page Opens (Auto Geotagged)</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-sm font-bold text-white">3. User Session Captured</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-sm font-bold text-white">4. Attribution Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-sm font-bold text-white">5. ROI Trigger Events Fired</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connector Labels */}
          <div className="mb-8">
            <div className="rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 p-6 shadow-lg">
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                CONNECTOR LABELS
              </h3>
              <p className="mb-6 text-center text-lg text-gray-100">
                Flow Direction
              </p>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">Data Flow</h4>
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• Entry Points → Core Dashboard = API Requests</li>
                    <li>• Entry Points → AI Agent Layer = AI Triggers</li>
                    <li>• AI Agent Layer → Core Dashboard = AI Orchestration</li>
                    <li>• Core Dashboard → Data Layer = Database R/W</li>
                    <li>• Data Layer → Analytics Engine = Event Stream</li>
                    <li>• Analytics Engine → Connected Services = Insights Delivery</li>
                  </ul>
                </div>
                
                <div className="rounded bg-white/10 p-4">
                  <h4 className="mb-3 text-lg font-bold text-white">System Orientation</h4>
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• Vertical Layout = Primary Data Flow</li>
                    <li>• Side Connections = AI, Security, and Developer Tools</li>
                    <li>• All Flows are Directional (arrows indicate source → target)</li>
                    <li>• Role-Based Logic enforced across system tiers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}