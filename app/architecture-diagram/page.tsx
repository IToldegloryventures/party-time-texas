'use client';

import React from 'react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-light">
            Cosmic Portals – NFC-Powered SaaS Platform Architecture
          </h1>
          <p className="text-xl opacity-90">
            Professional System Architecture | Investor-Ready Presentation
          </p>
        </div>
      </div>

      {/* Main Diagram */}
      <div className="mx-auto max-w-7xl bg-white px-4 py-8">
        {/* Main Architecture Row */}
        <div className="mb-12 grid grid-cols-3 gap-12">
          {/* 1. Entry Points & Authentication */}
          <div className="relative rounded-xl border-4 border-purple-500 bg-purple-100 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Entry Points & Authentication
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>
                📱 Mobile App
                <br />
                🌐 Web App
                <br />
                🎨 White-Label Domains
              </strong>
              <br />
              (Custom client domains like events.company.com)
              <br />
              <br />
              <strong>Clerk Authentication</strong>
              <br />
              SSO, MFA, Session Management
              <br />
              <br />
              <strong>Role-Based Access Control:</strong>
              <br />
              🔴 Super Admin (Platform-wide)
              <br />
              🟠 Org Owner (Billing + Full)
              <br />
              🟣 Org Admin (Team Management)
              <br />
              🔵 Team Member (Content)
              <br />
              🟢 Guest (Event Only)
            </div>
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 transform">
              <div className="flex flex-col items-center">
                <div className="h-0 w-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-blue-600"></div>
                <div className="mt-2 rounded-lg bg-blue-600 px-3 py-1 text-sm font-bold whitespace-nowrap text-white">
                  API Requests
                </div>
              </div>
            </div>
          </div>

          {/* 2. AI Agent Ecosystem */}
          <div className="relative rounded-xl border-4 border-orange-500 bg-orange-100 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              AI Agent Ecosystem
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>🤖 AI Agent Gateway</strong>
              <br />
              • Landing Page Generator Agent
              <br />
              • Geo-Marketing Intelligence Agent
              <br />
              • Lead Behavior Analysis Agent
              <br />
              • Content Creation Agent
              <br />
              • Analytics Insights Agent
              <br />
              <br />
              <strong>Gemini + OpenAI API + Rate Limiting</strong>
            </div>
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 transform">
              <div className="flex flex-col items-center">
                <div className="h-0 w-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-orange-600"></div>
                <div className="mt-2 rounded-lg bg-orange-600 px-3 py-1 text-sm font-bold whitespace-nowrap text-white">
                  AI Triggers
                </div>
              </div>
            </div>
          </div>

          {/* 3. Core Dashboard Modules */}
          <div className="relative rounded-xl border-4 border-red-500 bg-red-100 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Core Dashboard Modules
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>🧭 Central Dashboard</strong>
              <br />
              (Next.js 15 App Router)
              <br />
              <br />
              🎯 Landing Page Builder (Drag & Drop + AI)
              <br />
              📅 Event Manager (Multi-event, Team Assignment)
              <br />
              📦 NFC Device Manager (Registration + Analytics)
              <br />
              🏪 Hardware Store (NFC Device Sales + Customization)
              <br />
              📈 Analytics Dashboard (Real-time + Extended Tracking)
              <br />
              🧑‍🤝‍🧑 Team Management (Invitations + Roles)
              <br />
              ✅ Task Manager (Assignment + Progress)
              <br />
              💰 Billing Dashboard (Stripe Integration)
              <br />
              🎨 White-Label Settings (Custom Domains + Branding)
            </div>
          </div>
        </div>

        {/* Second Row - Database, Analytics, Services */}
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          {/* 4. Database Architecture */}
          <div className="relative rounded-xl border-4 border-green-500 bg-green-100 p-6">
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 transform">
              <div className="h-0 w-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-white shadow-lg"></div>
              <div className="absolute -top-8 -right-20 rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-base font-bold whitespace-nowrap text-black shadow-lg">
                Events
              </div>
            </div>
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Database Architecture
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>Supabase PostgreSQL</strong>
              <br />
              (Multi-tenant RLS)
              <br />
              <br />
              <strong>Core Tables:</strong>
              <br />
              users, organizations, roles, events,
              <br />
              attendees, landing_pages, nfc_devices,
              <br />
              nfc_scans, geo_sessions, tasks,
              <br />
              subscriptions, billing_history,
              <br />
              analytics_events, api_limits, webhook_logs
              <br />
              <br />
              <strong>Extended Tracking:</strong>
              <br />
              90-365 day cookies, geo-patterns,
              <br />
              journey mapping
            </div>
          </div>

          {/* 5. Analytics Engine */}
          <div className="relative rounded-xl border-4 border-blue-500 bg-blue-100 p-6">
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 transform">
              <div className="h-0 w-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-white shadow-lg"></div>
              <div className="absolute -top-8 -right-20 rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-base font-bold whitespace-nowrap text-black shadow-lg">
                Insights
              </div>
            </div>
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Analytics Engine
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>Session Tracking:</strong>
              <br />
              NFC scan events, landing page interactions,
              <br />
              extended journey, geo-intelligence
              <br />
              <br />
              <strong>AI-Powered Insights:</strong>
              <br />
              Conversion funnel, geo-heatmaps,
              <br />
              behavior prediction, ROI attribution
            </div>
          </div>

          {/* 6. Integrated Services */}
          <div className="rounded-xl border-4 border-yellow-500 bg-yellow-100 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Integrated Services
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>Multi-Channel Communication:</strong>
              <br />
              Push, Email, SMS, Webhooks
              <br />
              <br />
              <strong>Payment & Billing:</strong>
              <br />
              Stripe, Subscriptions, Usage-based
              <br />
              <br />
              <strong>Physical Products:</strong>
              <br />
              NFC Devices, Branding, Shipping
            </div>
          </div>
        </div>

        {/* Security & Developer Row */}
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          {/* 7. Security & Compliance */}
          <div className="rounded-xl border-4 border-purple-700 bg-purple-200 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Security & Compliance
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>Multi-Layer Security:</strong>
              <br />
              Clerk Auth, Supabase RLS, API Rate Limiting,
              <br />
              Session Encryption, GDPR/CCPA, SOC 2 Type II
            </div>
          </div>

          {/* 8. Developer Ecosystem */}
          <div className="rounded-xl border-4 border-pink-500 bg-pink-100 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              Developer Ecosystem
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>API & Integration:</strong>
              <br />
              RESTful API, Webhooks, SDK, Zapier,
              <br />
              White-Label SDK, Custom Domains
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-2 gap-8">
          {/* Guest NFC Scan Flow */}
          <div className="rounded-xl border-4 border-green-500 bg-green-100 p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              🎯 Guest NFC Scan Flow Example
            </h3>
            <div className="text-sm leading-relaxed text-black">
              <strong>1.</strong> Guest taps NFC device
              <br />
              <strong>2.</strong> Landing page loads instantly
              <br />
              <strong>3.</strong> Session tracker logs scan + geo-location
              <br />
              <strong>4.</strong> Extended tracking (90-365 days)
              <br />
              <br />
              <strong>Real-time Analytics:</strong>
              <br />
              • Conversion tracking
              <br />
              • Geo-heatmaps
              <br />
              • Customer journey mapping
              <br />• ROI attribution
            </div>
          </div>

          {/* Legends */}
          <div className="rounded-xl border-4 border-gray-300 bg-white p-6">
            <h3 className="mb-4 text-center text-lg font-bold tracking-wide text-black uppercase">
              📋 System Architecture Legend
            </h3>

            {/* Color Legend */}
            <div className="mb-6 grid grid-cols-2 gap-3 text-sm text-black">
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-purple-500 bg-purple-200"></div>
                <span className="text-black">Entry & Auth</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-orange-500 bg-orange-100"></div>
                <span className="text-black">AI Agents</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-red-500 bg-red-100"></div>
                <span className="text-black">Dashboard</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-green-500 bg-green-100"></div>
                <span className="text-black">Database</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-blue-500 bg-blue-100"></div>
                <span className="text-black">Analytics</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-yellow-500 bg-yellow-100"></div>
                <span className="text-black">Services</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-purple-700 bg-purple-200"></div>
                <span className="text-black">Security</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 border border-pink-500 bg-pink-100"></div>
                Developer
              </div>
            </div>

            {/* Business Model */}
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-bold text-black">
                💰 Business Model
              </h4>
              <ul className="list-none text-sm text-black">
                <li>• SaaS Subscriptions (Tiered Plans)</li>
                <li>• Hardware Sales (NFC Devices)</li>
                <li>• Design Services (Custom Branding)</li>
                <li>• Analytics Services (Premium Insights)</li>
              </ul>
            </div>

            {/* Connector Legend */}
            <div>
              <h4 className="mb-2 text-sm font-bold text-black">
                🔗 Connector Legend
              </h4>
              <ul className="list-none text-sm text-black">
                <li>• Dashed Purple: API Requests</li>
                <li>• Solid Green: Data R/W</li>
                <li>• Solid Red: DB Events</li>
                <li>• Solid Blue: Insights</li>
                <li>• Orange Dotted: AI Triggers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-gray-200 bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <p>
            © 2025 Cosmic Portals - NFC-Powered SaaS Platform | Professional
            System Architecture
          </p>
          <p className="text-sm">
            Built with React & Tailwind CSS | created by amemdina
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
