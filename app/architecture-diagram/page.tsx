import React from 'react';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';

import ClientDiagram from './ClientDiagram';

const ArchitectureDiagram = async () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <ClientDiagram />
      
      {/* TEST: This should be visible */}
      <div className="bg-red-500 text-white p-4 text-center">
        TEST: Server content is rendering - commit 69bc210
      </div>

      {/* Investor Visual: Layered System Overview (Dark) */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Client Layer */}
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-neutral-800">
            <div className="mb-4 flex items-center gap-3">
              {/* Monitor Icon */}
              <svg
                className="h-10 w-10 rounded-lg bg-blue-600 p-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                />
                <path d="M8 20h8" stroke="currentColor" />
              </svg>
              <h3 className="text-lg font-semibold text-white">Client</h3>
            </div>
            <p className="text-sm text-neutral-300">
              Web, Mobile, White‑Label experiences.
            </p>
          </div>

          {/* API Layer */}
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-indigo-900">
            <div className="mb-4 flex items-center gap-3">
              {/* Cloud/API Icon */}
              <svg
                className="h-10 w-10 rounded-lg bg-indigo-600 p-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M7 18h9a4 4 0 0 0 0-8 5 5 0 0 0-9.5-1" />
              </svg>
              <h3 className="text-lg font-semibold text-white">API</h3>
            </div>
            <p className="text-sm text-neutral-300">
              HTTPS endpoints, rate limits, validation, auth.
            </p>
          </div>

          {/* Server Layer */}
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-sky-900">
            <div className="mb-4 flex items-center gap-3">
              {/* Server Icon */}
              <svg
                className="h-10 w-10 rounded-lg bg-sky-600 p-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="4" width="18" height="6" rx="1" />
                <rect x="3" y="14" width="18" height="6" rx="1" />
                <circle cx="7" cy="7" r="1" />
                <circle cx="7" cy="17" r="1" />
              </svg>
              <h3 className="text-lg font-semibold text-white">Server</h3>
            </div>
            <p className="text-sm text-neutral-300">
              Next.js Edge/Node, caching, orchestration.
            </p>
          </div>

          {/* Middleware */}
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-purple-900">
            <div className="mb-4 flex items-center gap-3">
              {/* Gear Icon */}
              <svg
                className="h-10 w-10 rounded-lg bg-purple-600 p-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M10.5 2.5h3l.7 2.3a7 7 0 0 1 1.9.8l2.3-.9 1.5 2.6-1.9 1.5c.1.5.1 1 .1 1.5s0 1-.1 1.5l1.9 1.5-1.5 2.6-2.3-.9c-.6.3-1.2.6-1.9.8l-.7 2.3h-3l-.7-2.3a7 7 0 0 1-1.9-.8l-2.3.9-1.5-2.6 1.9-1.5A9 9 0 0 1 6 12c0-.5 0-1 .1-1.5L4.2 9 5.7 6.4l2.3.9c.6-.3 1.2-.6 1.9-.8l.6-2z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
              <h3 className="text-lg font-semibold text-white">Middleware</h3>
            </div>
            <p className="text-sm text-neutral-300">
              Policies, AI triggers, jobs, webhooks, queues.
            </p>
          </div>

          {/* Data Layer */}
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-emerald-900">
            <div className="mb-4 flex items-center gap-3">
              {/* Database Icon */}
              <svg
                className="h-10 w-10 rounded-lg bg-emerald-600 p-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v10c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
              </svg>
              <h3 className="text-lg font-semibold text-white">Data</h3>
            </div>
            <p className="text-sm text-neutral-300">
              Supabase Postgres, RLS multi‑tenant, real‑time, backups.
            </p>
          </div>
        </div>

        {/* Connectors (SVG) */}
        <div className="relative mt-6 hidden h-16 items-center justify-between md:flex">
          <svg
            viewBox="0 0 1200 100"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#a3a3a3" />
              </marker>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="2"
                  floodColor="#6366f1"
                  floodOpacity="0.35"
                />
              </filter>
            </defs>
            <path
              d="M90 50 C 170 50, 250 50, 330 50"
              stroke="#a3a3a3"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#arrow)"
              filter="url(#glow)"
            />
            <path
              d="M350 50 C 430 50, 510 50, 590 50"
              stroke="#a3a3a3"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#arrow)"
              filter="url(#glow)"
            />
            <path
              d="M610 50 C 690 50, 770 50, 850 50"
              stroke="#a3a3a3"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#arrow)"
              filter="url(#glow)"
            />
            <path
              d="M870 50 C 950 50, 1030 50, 1110 50"
              stroke="#a3a3a3"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#arrow)"
              filter="url(#glow)"
            />
          </svg>
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
