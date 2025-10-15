import React from 'react';
import ClientDiagram from './ClientDiagram';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ClientDiagram />

      {/* Main Architecture Diagram - 8 Functional Blocks */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        <h2 className="mb-12 text-center text-4xl font-light text-white">
          Cosmic Portals SaaS Platform Architecture
        </h2>

        {/* Horizontal Flow - 8 Functional Blocks */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 xl:grid-cols-4">
            {/* Row 1: Entry Points, AI Agents, Core Dashboard, Database */}
            <div className="space-y-6">
              {/* 1. ENTRY POINTS & AUTHENTICATION (Purple) */}
              <div className="group relative">
                <div className="rounded-xl border border-purple-400/40 bg-gradient-to-br from-purple-900/60 to-purple-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-purple-100">
                      ENTRY POINTS & AUTH
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-300">📱</span>
                      <span className="text-purple-200">Mobile App</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-300">🌐</span>
                      <span className="text-purple-200">Web App</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-300">🎨</span>
                      <span className="text-purple-200">
                        White-Label Domains
                      </span>
                    </div>
                    <div className="mt-3 rounded bg-purple-800/50 p-2">
                      <div className="text-xs font-semibold text-purple-100">
                        Clerk Authentication
                      </div>
                      <div className="mt-1 text-xs text-purple-200">
                        Role-Based Access Control
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-red-600/80 px-1 text-xs">
                          🔴 Super Admin
                        </span>
                        <span className="rounded bg-orange-600/80 px-1 text-xs">
                          🟠 Org Owner
                        </span>
                        <span className="rounded bg-purple-600/80 px-1 text-xs">
                          🟣 Org Admin
                        </span>
                        <span className="rounded bg-blue-600/80 px-1 text-xs">
                          🔵 Team Member
                        </span>
                        <span className="rounded bg-green-600/80 px-1 text-xs">
                          🟢 Guest
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector Arrow */}
                <div className="absolute top-1/2 -right-3 hidden -translate-y-1/2 transform lg:block">
                  <div className="text-xs text-gray-400">API Requests</div>
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeDasharray="5,5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* 2. AI AGENT ECOSYSTEM (Orange) */}
              <div className="group relative">
                <div className="rounded-xl border border-orange-400/40 bg-gradient-to-br from-orange-900/60 to-orange-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/70 hover:shadow-lg hover:shadow-orange-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-orange-100">
                      AI AGENT ECOSYSTEM
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-300">🤖</span>
                      <span className="text-orange-200">AI Agent Gateway</span>
                    </div>
                    <div className="space-y-1 text-xs text-orange-200">
                      <div>• Landing Page Generator Agent</div>
                      <div>• Geo-Marketing Intelligence Agent</div>
                      <div>• Lead Behavior Analysis Agent</div>
                      <div>• Content Creation Agent</div>
                      <div>• Analytics Insights Agent</div>
                    </div>
                    <div className="mt-3 rounded bg-orange-800/50 p-2">
                      <div className="text-xs text-orange-200">
                        Gemini + OpenAI API + Rate Limiting
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector Arrow */}
                <div className="absolute top-1/2 -right-3 hidden -translate-y-1/2 transform lg:block">
                  <div className="text-xs text-gray-400">AI Triggers</div>
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeDasharray="3,3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* 3. CORE DASHBOARD MODULES (Red) */}
              <div className="group relative">
                <div className="rounded-xl border border-red-400/40 bg-gradient-to-br from-red-900/60 to-red-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-400/70 hover:shadow-lg hover:shadow-red-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-red-100">
                      CORE DASHBOARD
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-300">🧭</span>
                      <span className="text-red-200">
                        Central Dashboard (Next.js 15)
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-red-200">
                      <div>• 🎯 Landing Page Builder</div>
                      <div>• 📅 Event Manager</div>
                      <div>• 📦 NFC Device Manager</div>
                      <div>• 🏪 Hardware Store</div>
                      <div>• 📈 Analytics Dashboard</div>
                      <div>• 🧑‍🤝‍🧑 Team Management</div>
                      <div>• ✅ Task Manager</div>
                      <div>• 💰 Billing Dashboard</div>
                      <div>• 🎨 White-Label Settings</div>
                    </div>
                  </div>
                </div>
                {/* Connector Arrow */}
                <div className="absolute top-1/2 -right-3 hidden -translate-y-1/2 transform lg:block">
                  <div className="text-xs text-gray-400">DB R/W</div>
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* 4. DATABASE ARCHITECTURE (Green) */}
              <div className="group relative">
                <div className="rounded-xl border border-green-400/40 bg-gradient-to-br from-green-900/60 to-green-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-400/70 hover:shadow-lg hover:shadow-green-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-green-100">
                      DATABASE ARCHITECTURE
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-green-200">
                      Supabase PostgreSQL (Multi-tenant RLS)
                    </div>
                    <div className="space-y-1 text-xs text-green-200">
                      <div>
                        Core Tables: users, organizations, events, attendees,
                        landing_pages, nfc_devices, nfc_scans, geo_sessions,
                        tasks, subscriptions, billing_history, analytics_events
                      </div>
                    </div>
                    <div className="mt-3 rounded bg-green-800/50 p-2">
                      <div className="text-xs text-green-200">
                        Extended Tracking: 90-365 day cookies, geo-patterns,
                        journey mapping
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector Arrow */}
                <div className="absolute top-1/2 -right-3 hidden -translate-y-1/2 transform lg:block">
                  <div className="text-xs text-gray-400">Events</div>
                  <svg
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* 5. ANALYTICS ENGINE (Blue) */}
              <div className="group relative">
                <div className="rounded-xl border border-blue-400/40 bg-gradient-to-br from-blue-900/60 to-blue-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/70 hover:shadow-lg hover:shadow-blue-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-blue-100">
                      ANALYTICS ENGINE
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-200">
                      Session Tracking: NFC scan events, landing page
                      interactions, extended journey, geo-intelligence
                    </div>
                    <div className="text-blue-200">
                      AI-Powered Insights: Conversion funnel, geo-heatmaps,
                      behavior prediction, ROI attribution
                    </div>
                  </div>
                </div>
                {/* Connector Arrow */}
                <div className="absolute top-1/2 -right-3 hidden -translate-y-1/2 transform lg:block">
                  <div className="text-xs text-gray-400">Insights</div>
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* 6. INTEGRATED SERVICES (Yellow) */}
              <div className="group relative">
                <div className="rounded-xl border border-yellow-400/40 bg-gradient-to-br from-yellow-900/60 to-yellow-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/70 hover:shadow-lg hover:shadow-yellow-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-yellow-100">
                      INTEGRATED SERVICES
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-yellow-200">
                      Multi-Channel Communication: Push, Email, SMS, Webhooks
                    </div>
                    <div className="text-yellow-200">
                      Payment & Billing: Stripe, Subscriptions, Usage-based
                    </div>
                    <div className="text-yellow-200">
                      Physical Products: NFC Devices, Branding, Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* 7. SECURITY & COMPLIANCE (Dark Purple) */}
              <div className="group relative">
                <div className="rounded-xl border border-purple-600/40 bg-gradient-to-br from-purple-950/60 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-600/70 hover:shadow-lg hover:shadow-purple-600/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-purple-100">
                      SECURITY & COMPLIANCE
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-purple-200">
                      Multi-Layer Security: Clerk Auth, Supabase RLS, API Rate
                      Limiting, Session Encryption
                    </div>
                    <div className="text-purple-200">
                      GDPR/CCPA, SOC 2 Type II
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. DEVELOPER ECOSYSTEM (Pink) */}
              <div className="group relative">
                <div className="rounded-xl border border-pink-400/40 bg-gradient-to-br from-pink-900/60 to-pink-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-pink-400/70 hover:shadow-lg hover:shadow-pink-500/30">
                  <div className="mb-4 flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-pink-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <h3 className="text-lg font-bold text-pink-100">
                      DEVELOPER ECOSYSTEM
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-pink-200">
                      API & Integration: RESTful API, Webhooks, SDK, Zapier
                    </div>
                    <div className="text-pink-200">
                      White-Label SDK, Custom Domains
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Guest NFC Scan Flow Example */}
          <div className="rounded-xl border border-green-400/40 bg-gradient-to-br from-green-900/60 to-green-800/60 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold text-green-100">
              Guest NFC Scan Flow Example
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  1
                </div>
                <span className="text-green-200">Guest taps NFC</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  2
                </div>
                <span className="text-green-200">Landing page</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  3
                </div>
                <span className="text-green-200">Store scan + geo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  4
                </div>
                <span className="text-green-200">Track 90-365 days</span>
              </div>
              <div className="mt-6 rounded bg-green-800/50 p-4">
                <div className="text-sm font-semibold text-green-100">
                  Real-time Analytics:
                </div>
                <div className="mt-2 text-xs text-green-200">
                  Conversion tracking, Geo-heatmaps, Customer journey, ROI
                  attribution
                </div>
              </div>
            </div>
          </div>

          {/* Legends */}
          <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold text-white">Legends</h3>

            {/* Color Legend */}
            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold text-gray-200">
                Color Legend:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-purple-500"></div>
                  <span className="text-gray-300">Purple: Entry & Auth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-orange-500"></div>
                  <span className="text-gray-300">Orange: AI Agents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-red-500"></div>
                  <span className="text-gray-300">Red: Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-green-500"></div>
                  <span className="text-gray-300">Green: Database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-blue-500"></div>
                  <span className="text-gray-300">Blue: Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-yellow-500"></div>
                  <span className="text-gray-300">Yellow: Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-purple-700"></div>
                  <span className="text-gray-300">Dark Purple: Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-pink-500"></div>
                  <span className="text-gray-300">Pink: Developer</span>
                </div>
              </div>
            </div>

            {/* Connector Legend */}
            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold text-gray-200">
                Connector Legend:
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeDasharray="5,5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Dashed Purple: API Requests
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-300">Solid Green: Data R/W</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-300">Solid Red: DB Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-300">Solid Blue: Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeDasharray="3,3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Orange Dotted: AI Triggers
                  </span>
                </div>
              </div>
            </div>

            {/* Business Model */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-gray-200">
                Business Model:
              </h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>• SaaS Subscriptions</div>
                <div>• Hardware Sales</div>
                <div>• Design Services</div>
                <div>• Analytics Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
