'use client';

import React from 'react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Main Architecture Diagram */}
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="space-y-16">
          {/* Layer 1: Frontend Applications */}
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-bold text-gray-800">
              Frontend Applications
            </h2>
            <div className="flex justify-center gap-8">
              <div className="w-64 rounded-xl border-4 border-blue-500 bg-blue-100 p-6">
                <h3 className="mb-3 text-lg font-bold text-black">
                  📱 Mobile App
                </h3>
                <p className="text-sm text-black">React Native</p>
              </div>
              <div className="w-64 rounded-xl border-4 border-blue-500 bg-blue-100 p-6">
                <h3 className="mb-3 text-lg font-bold text-black">
                  🌐 Web Dashboard
                </h3>
                <p className="text-sm text-black">Next.js 15</p>
              </div>
              <div className="w-64 rounded-xl border-4 border-blue-500 bg-blue-100 p-6">
                <h3 className="mb-3 text-lg font-bold text-black">
                  🎨 White-Label
                </h3>
                <p className="text-sm text-black">Custom Domains</p>
              </div>
            </div>

            {/* Arrow down */}
            <div className="mt-8 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="h-0 w-0 border-t-[20px] border-r-[15px] border-l-[15px] border-t-green-600 border-r-transparent border-l-transparent"></div>
                <div className="mt-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white">
                  HTTPS API Calls
                </div>
              </div>
            </div>
          </div>

          {/* Layer 2: API Gateway & Authentication */}
          <div className="grid grid-cols-2 gap-16">
            <div className="rounded-xl border-4 border-green-500 bg-green-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                🔐 API Gateway & Auth
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Clerk Authentication (SSO, MFA)
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Role-Based Access Control
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  API Rate Limiting
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Request Validation
                </div>
              </div>
            </div>

            <div className="rounded-xl border-4 border-orange-500 bg-orange-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                🤖 AI Services
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-orange-600"></span>
                  Landing Page Generator
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-orange-600"></span>
                  Geo-Marketing Intelligence
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-orange-600"></span>
                  Lead Behavior Analysis
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-orange-600"></span>
                  Content Creation & Analytics
                </div>
              </div>
            </div>
          </div>

          {/* Arrows from Layer 2 to Layer 3 */}
          <div className="flex justify-center gap-32">
            <div className="flex flex-col items-center">
              <div className="h-0 w-0 border-t-[20px] border-r-[15px] border-l-[15px] border-t-purple-600 border-r-transparent border-l-transparent"></div>
              <div className="mt-2 rounded bg-purple-600 px-3 py-1 text-xs font-bold text-white">
                API Requests
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-0 w-0 border-t-[20px] border-r-[15px] border-l-[15px] border-t-red-600 border-r-transparent border-l-transparent"></div>
              <div className="mt-2 rounded bg-red-600 px-3 py-1 text-xs font-bold text-white">
                AI Triggers
              </div>
            </div>
          </div>

          {/* Layer 3: Core Business Logic */}
          <div className="grid grid-cols-3 gap-12">
            <div className="rounded-xl border-4 border-purple-500 bg-purple-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                💼 Core Dashboard
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-purple-600"></span>
                  Landing Page Builder
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-purple-600"></span>
                  Event Management
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-purple-600"></span>
                  NFC Device Manager
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-purple-600"></span>
                  Team & Task Management
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-purple-600"></span>
                  Hardware Store
                </div>
              </div>
            </div>

            <div className="rounded-xl border-4 border-red-500 bg-red-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                📊 Analytics Engine
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-red-600"></span>
                  Session Tracking
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-red-600"></span>
                  NFC Scan Analytics
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-red-600"></span>
                  Geo-Intelligence
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-red-600"></span>
                  Conversion Funnels
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-red-600"></span>
                  ROI Attribution
                </div>
              </div>
            </div>

            <div className="rounded-xl border-4 border-yellow-500 bg-yellow-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                🔌 Integrations
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-yellow-600"></span>
                  Stripe Payments
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-yellow-600"></span>
                  Email/SMS/Push
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-yellow-600"></span>
                  Webhook System
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-yellow-600"></span>
                  Hardware Orders
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-yellow-600"></span>
                  Third-party APIs
                </div>
              </div>
            </div>
          </div>

          {/* Arrows from Layer 3 to Database */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="h-0 w-0 border-t-[20px] border-r-[15px] border-l-[15px] border-t-green-600 border-r-transparent border-l-transparent"></div>
              <div className="mt-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white">
                Database Operations
              </div>
            </div>
          </div>

          {/* Layer 4: Data Layer */}
          <div className="grid grid-cols-2 gap-16">
            <div className="rounded-xl border-4 border-green-500 bg-green-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                🗄️ Database Layer
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Supabase PostgreSQL
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Multi-tenant RLS
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Real-time Subscriptions
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-green-600"></span>
                  Automated Backups
                </div>
              </div>
            </div>

            <div className="rounded-xl border-4 border-gray-500 bg-gray-100 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-black">
                🔒 Security & Compliance
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-gray-600"></span>
                  GDPR/CCPA Compliance
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-gray-600"></span>
                  SOC 2 Type II
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-gray-600"></span>
                  Data Encryption
                </div>
                <div className="flex items-center">
                  <span className="mr-3 h-3 w-3 rounded-full bg-gray-600"></span>
                  Audit Logging
                </div>
              </div>
            </div>
          </div>

          {/* NFC Flow Example */}
          <div className="rounded-xl border-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-black">
              🎯 NFC Scan Flow Example
            </h3>
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                  <span className="text-2xl text-white">1</span>
                </div>
                <h4 className="mb-2 font-bold text-black">Guest Taps NFC</h4>
                <p className="text-sm text-black">Device scan detected</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                  <span className="text-2xl text-white">2</span>
                </div>
                <h4 className="mb-2 font-bold text-black">
                  Landing Page Loads
                </h4>
                <p className="text-sm text-black">Dynamic content served</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                  <span className="text-2xl text-white">3</span>
                </div>
                <h4 className="mb-2 font-bold text-black">
                  Analytics Tracking
                </h4>
                <p className="text-sm text-black">Session & geo data</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500">
                  <span className="text-2xl text-white">4</span>
                </div>
                <h4 className="mb-2 font-bold text-black">Extended Tracking</h4>
                <p className="text-sm text-black">90-365 day journey</p>
              </div>
            </div>
          </div>

          {/* Business Model & Revenue Streams */}
          <div className="rounded-xl border-4 border-gray-300 bg-gray-50 p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-black">
              💰 Business Model & Revenue Streams
            </h3>
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="mb-2 font-bold text-black">
                  💼 SaaS Subscriptions
                </h4>
                <p className="text-sm text-black">Tiered monthly plans</p>
              </div>
              <div className="text-center">
                <h4 className="mb-2 font-bold text-black">📦 Hardware Sales</h4>
                <p className="text-sm text-black">NFC devices & accessories</p>
              </div>
              <div className="text-center">
                <h4 className="mb-2 font-bold text-black">
                  🎨 Design Services
                </h4>
                <p className="text-sm text-black">Custom branding & setup</p>
              </div>
              <div className="text-center">
                <h4 className="mb-2 font-bold text-black">
                  📊 Analytics Services
                </h4>
                <p className="text-sm text-black">Premium insights & reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-gray-200 bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-gray-600">
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
