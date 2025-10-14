'use client';

import React from 'react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light mb-4">
            Cosmic Portals – NFC-Powered SaaS Platform Architecture
          </h1>
          <p className="text-xl opacity-90">
            Professional System Architecture | Investor-Ready Presentation
          </p>
        </div>
      </div>

      {/* Main Diagram */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Architecture Row */}
        <div className="grid grid-cols-6 gap-6 mb-8">
          {/* 1. Entry Points & Authentication */}
          <div className="bg-purple-100 border-4 border-purple-500 rounded-xl p-4 relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-[15px] border-l-gray-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
              <div className="absolute -top-6 -right-8 text-xs font-bold text-gray-600 whitespace-nowrap">
                API Requests
              </div>
            </div>
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Entry Points & Authentication
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>📱 Mobile App<br />
              🌐 Web App<br />
              🎨 White-Label Domains</strong><br />
              (Custom client domains like events.company.com)<br /><br />
              
              <strong>Clerk Authentication</strong><br />
              SSO, MFA, Session Management<br /><br />
              
              <strong>Role-Based Access Control:</strong><br />
              🔴 Super Admin (Platform-wide)<br />
              🟠 Org Owner (Billing + Full)<br />
              🟣 Org Admin (Team Management)<br />
              🔵 Team Member (Content)<br />
              🟢 Guest (Event Only)
            </div>
          </div>

          {/* 2. AI Agent Ecosystem */}
          <div className="bg-orange-100 border-4 border-orange-500 rounded-xl p-4 relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-[15px] border-l-gray-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
              <div className="absolute -top-6 -right-8 text-xs font-bold text-gray-600 whitespace-nowrap">
                AI Triggers
              </div>
            </div>
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              AI Agent Ecosystem
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>🤖 AI Agent Gateway</strong><br />
              • Landing Page Generator Agent<br />
              • Geo-Marketing Intelligence Agent<br />
              • Lead Behavior Analysis Agent<br />
              • Content Creation Agent<br />
              • Analytics Insights Agent<br /><br />
              
              <strong>Gemini + OpenAI API + Rate Limiting</strong>
            </div>
          </div>

          {/* 3. Core Dashboard Modules */}
          <div className="bg-red-100 border-4 border-red-500 rounded-xl p-4 relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-[15px] border-l-gray-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
              <div className="absolute -top-6 -right-8 text-xs font-bold text-gray-600 whitespace-nowrap">
                DB R/W
              </div>
            </div>
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Core Dashboard Modules
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>🧭 Central Dashboard</strong><br />
              (Next.js 15 App Router)<br /><br />
              
              🎯 Landing Page Builder (Drag & Drop + AI)<br />
              📅 Event Manager (Multi-event, Team Assignment)<br />
              📦 NFC Device Manager (Registration + Analytics)<br />
              🏪 Hardware Store (NFC Device Sales + Customization)<br />
              📈 Analytics Dashboard (Real-time + Extended Tracking)<br />
              🧑‍🤝‍🧑 Team Management (Invitations + Roles)<br />
              ✅ Task Manager (Assignment + Progress)<br />
              💰 Billing Dashboard (Stripe Integration)<br />
              🎨 White-Label Settings (Custom Domains + Branding)
            </div>
          </div>

          {/* 4. Database Architecture */}
          <div className="bg-green-100 border-4 border-green-500 rounded-xl p-4 relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-[15px] border-l-gray-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
              <div className="absolute -top-6 -right-8 text-xs font-bold text-gray-600 whitespace-nowrap">
                Events
              </div>
            </div>
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Database Architecture
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>Supabase PostgreSQL</strong><br />
              (Multi-tenant RLS)<br /><br />
              
              <strong>Core Tables:</strong><br />
              users, organizations, roles, events,<br />
              attendees, landing_pages, nfc_devices,<br />
              nfc_scans, geo_sessions, tasks,<br />
              subscriptions, billing_history,<br />
              analytics_events, api_limits, webhook_logs<br /><br />
              
              <strong>Extended Tracking:</strong><br />
              90-365 day cookies, geo-patterns,<br />
              journey mapping
            </div>
          </div>

          {/* 5. Analytics Engine */}
          <div className="bg-blue-100 border-4 border-blue-500 rounded-xl p-4 relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-[15px] border-l-gray-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
              <div className="absolute -top-6 -right-8 text-xs font-bold text-gray-600 whitespace-nowrap">
                Insights
              </div>
            </div>
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Analytics Engine
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>Session Tracking:</strong><br />
              NFC scan events, landing page interactions,<br />
              extended journey, geo-intelligence<br /><br />
              
              <strong>AI-Powered Insights:</strong><br />
              Conversion funnel, geo-heatmaps,<br />
              behavior prediction, ROI attribution
            </div>
          </div>

          {/* 6. Integrated Services */}
          <div className="bg-yellow-100 border-4 border-yellow-500 rounded-xl p-4">
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Integrated Services
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>Multi-Channel Communication:</strong><br />
              Push, Email, SMS, Webhooks<br /><br />
              
              <strong>Payment & Billing:</strong><br />
              Stripe, Subscriptions, Usage-based<br /><br />
              
              <strong>Physical Products:</strong><br />
              NFC Devices, Branding, Shipping
            </div>
          </div>
        </div>

        {/* Security & Developer Row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* 7. Security & Compliance */}
          <div className="bg-purple-200 border-4 border-purple-700 rounded-xl p-4">
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Security & Compliance
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>Multi-Layer Security:</strong><br />
              Clerk Auth, Supabase RLS, API Rate Limiting,<br />
              Session Encryption, GDPR/CCPA, SOC 2 Type II
            </div>
          </div>

          {/* 8. Developer Ecosystem */}
          <div className="bg-pink-100 border-4 border-pink-500 rounded-xl p-4">
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              Developer Ecosystem
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>API & Integration:</strong><br />
              RESTful API, Webhooks, SDK, Zapier,<br />
              White-Label SDK, Custom Domains
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-2 gap-6">
          {/* Guest NFC Scan Flow */}
          <div className="bg-green-100 border-4 border-green-500 rounded-xl p-4">
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              🎯 Guest NFC Scan Flow Example
            </h3>
            <div className="text-xs leading-relaxed">
              <strong>1.</strong> Guest taps NFC device<br />
              <strong>2.</strong> Landing page loads instantly<br />
              <strong>3.</strong> Session tracker logs scan + geo-location<br />
              <strong>4.</strong> Extended tracking (90-365 days)<br /><br />
              
              <strong>Real-time Analytics:</strong><br />
              • Conversion tracking<br />
              • Geo-heatmaps<br />
              • Customer journey mapping<br />
              • ROI attribution
            </div>
          </div>

          {/* Legends */}
          <div className="bg-white border-4 border-gray-300 rounded-xl p-4">
            <h3 className="text-sm font-bold text-center mb-3 uppercase tracking-wide">
              📋 System Architecture Legend
            </h3>
            
            {/* Color Legend */}
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-200 border border-purple-500 mr-2"></div>
                Entry & Auth
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-100 border border-orange-500 mr-2"></div>
                AI Agents
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-100 border border-red-500 mr-2"></div>
                Dashboard
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-100 border border-green-500 mr-2"></div>
                Database
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-100 border border-blue-500 mr-2"></div>
                Analytics
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-100 border border-yellow-500 mr-2"></div>
                Services
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-200 border border-purple-700 mr-2"></div>
                Security
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-100 border border-pink-500 mr-2"></div>
                Developer
              </div>
            </div>

            {/* Business Model */}
            <div className="mb-3">
              <h4 className="text-xs font-bold mb-1">💰 Business Model</h4>
              <ul className="text-xs list-none">
                <li>• SaaS Subscriptions (Tiered Plans)</li>
                <li>• Hardware Sales (NFC Devices)</li>
                <li>• Design Services (Custom Branding)</li>
                <li>• Analytics Services (Premium Insights)</li>
              </ul>
            </div>

            {/* Connector Legend */}
            <div>
              <h4 className="text-xs font-bold mb-1">🔗 Connector Legend</h4>
              <ul className="text-xs list-none">
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
      <div className="bg-gray-50 border-t border-gray-200 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Cosmic Portals - NFC-Powered SaaS Platform | Professional System Architecture</p>
          <p className="text-sm">Built with React & Tailwind CSS | Investor-Ready Documentation</p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
