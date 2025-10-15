import React from 'react';
import ClientDiagram from './ClientDiagram';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ClientDiagram />

      {/* Main Architecture Diagram */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* System Overview - 5 Layer Architecture */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-light text-white">
            System Architecture Overview
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Client Layer */}
            <div className="group relative">
              <div className="rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-blue-400"
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
                </div>
                <h3 className="mb-2 text-lg font-semibold text-blue-100">
                  Client
                </h3>
                <p className="text-sm text-blue-200">Web & Mobile Apps</p>
                <div className="mt-3 text-xs text-blue-300">
                  <div>📱 Mobile App</div>
                  <div>🌐 Web App</div>
                  <div>🎨 White-Label Domains</div>
                </div>
              </div>
              {/* Connector Arrow */}
              <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform md:block">
                <svg
                  className="h-6 w-6 text-gray-400"
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

            {/* API Layer */}
            <div className="group relative">
              <div className="rounded-xl border border-green-400/30 bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/20">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-green-100">
                  API Gateway
                </h3>
                <p className="text-sm text-green-200">REST & GraphQL</p>
                <div className="mt-3 text-xs text-green-300">
                  <div>🤖 AI Agent Gateway</div>
                  <div>🔐 Clerk Authentication</div>
                  <div>⚡ Rate Limiting</div>
                </div>
              </div>
              {/* Connector Arrow */}
              <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform md:block">
                <svg
                  className="h-6 w-6 text-gray-400"
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

            {/* Server Layer */}
            <div className="group relative">
              <div className="rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-purple-100">
                  Server
                </h3>
                <p className="text-sm text-purple-200">Business Logic</p>
                <div className="mt-3 text-xs text-purple-300">
                  <div>🧭 Central Dashboard</div>
                  <div>🎯 Landing Page Builder</div>
                  <div>📅 Event Manager</div>
                  <div>📦 NFC Device Manager</div>
                </div>
              </div>
              {/* Connector Arrow */}
              <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform md:block">
                <svg
                  className="h-6 w-6 text-gray-400"
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

            {/* Middleware Layer */}
            <div className="group relative">
              <div className="rounded-xl border border-orange-400/30 bg-gradient-to-br from-orange-900/50 to-orange-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/20">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-orange-400"
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
                </div>
                <h3 className="mb-2 text-lg font-semibold text-orange-100">
                  Middleware
                </h3>
                <p className="text-sm text-orange-200">Auth & Security</p>
                <div className="mt-3 text-xs text-orange-300">
                  <div>🔐 Multi-Layer Security</div>
                  <div>🛡️ GDPR/CCPA Compliance</div>
                  <div>🔒 SOC 2 Type II</div>
                </div>
              </div>
              {/* Connector Arrow */}
              <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform md:block">
                <svg
                  className="h-6 w-6 text-gray-400"
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

            {/* Data Layer */}
            <div className="group">
              <div className="rounded-xl border border-red-400/30 bg-gradient-to-br from-red-900/50 to-red-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-red-400/60 hover:shadow-lg hover:shadow-red-500/20">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-red-400"
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
                </div>
                <h3 className="mb-2 text-lg font-semibold text-red-100">
                  Database
                </h3>
                <p className="text-sm text-red-200">PostgreSQL & Redis</p>
                <div className="mt-3 text-xs text-red-300">
                  <div>🗄️ Supabase PostgreSQL</div>
                  <div>📊 Analytics Events</div>
                  <div>🔄 90-365 Day Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Details */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Frontend Stack */}
          <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Frontend Stack
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-300">
                  Next.js 15 with App Router
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-300">
                  React 18 with Server Components
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-300">Tailwind CSS for Styling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-300">
                  TypeScript for Type Safety
                </span>
              </div>
            </div>
          </div>

          {/* Backend Stack */}
          <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Backend Stack
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">Node.js Runtime</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">Supabase PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">Redis for Caching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">Clerk Authentication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment & Infrastructure */}
        <div className="mt-12 rounded-xl border border-gray-700/50 bg-gray-800/50 p-8 backdrop-blur-sm">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Deployment & Infrastructure
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center">
                <svg
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 font-semibold text-cyan-100">
                Vercel Hosting
              </h4>
              <p className="text-sm text-gray-400">
                Global CDN & Edge Functions
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 font-semibold text-yellow-100">
                SSL Security
              </h4>
              <p className="text-sm text-gray-400">End-to-End Encryption</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center">
                <svg
                  className="h-8 w-8 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 font-semibold text-emerald-100">
                Auto Scaling
              </h4>
              <p className="text-sm text-gray-400">
                Dynamic Resource Allocation
              </p>
            </div>
          </div>
        </div>

        {/* User Journey Examples */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Event Organizer Journey */}
          <div className="rounded-xl border border-blue-400/40 bg-gradient-to-br from-blue-900/60 to-blue-800/60 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold text-blue-100">
              Event Organizer Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  1
                </div>
                <span className="text-blue-200">
                  Sign up & Create Organization
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  2
                </div>
                <span className="text-blue-200">
                  Design Landing Pages with AI
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  3
                </div>
                <span className="text-blue-200">
                  Order NFC Devices & Branding
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  4
                </div>
                <span className="text-blue-200">
                  Deploy at Event & Track Analytics
                </span>
              </div>
              <div className="mt-6 rounded bg-blue-800/50 p-4">
                <div className="text-sm font-semibold text-blue-100">
                  Key Benefits:
                </div>
                <div className="mt-2 text-xs text-blue-200">
                  Real-time attendee engagement, Lead capture, ROI tracking,
                  White-label branding
                </div>
              </div>
            </div>
          </div>

          {/* Business Owner Journey */}
          <div className="rounded-xl border border-green-400/40 bg-gradient-to-br from-green-900/60 to-green-800/60 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold text-green-100">
              Business Owner Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  1
                </div>
                <span className="text-green-200">Subscribe to SaaS Plan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  2
                </div>
                <span className="text-green-200">
                  Set up Team & Permissions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  3
                </div>
                <span className="text-green-200">Create NFC Campaigns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  4
                </div>
                <span className="text-green-200">
                  Analyze Performance & Optimize
                </span>
              </div>
              <div className="mt-6 rounded bg-green-800/50 p-4">
                <div className="text-sm font-semibold text-green-100">
                  Key Benefits:
                </div>
                <div className="mt-2 text-xs text-green-200">
                  Multi-location tracking, Customer journey insights, Automated
                  follow-ups, Revenue attribution
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Integration Journey */}
        <div className="mt-8 rounded-xl border border-purple-400/40 bg-gradient-to-br from-purple-900/60 to-purple-800/60 p-8 backdrop-blur-sm">
          <h3 className="mb-6 text-xl font-bold text-purple-100">
            Developer Integration Journey
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                1
              </div>
              <span className="text-purple-200">Access API Documentation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                2
              </div>
              <span className="text-purple-200">Integrate SDK & Webhooks</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                3
              </div>
              <span className="text-purple-200">Custom White-Label Setup</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                4
              </div>
              <span className="text-purple-200">
                Deploy & Monitor Analytics
              </span>
            </div>
          </div>
          <div className="mt-6 rounded bg-purple-800/50 p-4">
            <div className="text-sm font-semibold text-purple-100">
              Developer Benefits:
            </div>
            <div className="mt-2 text-xs text-purple-200">
              RESTful API, Real-time webhooks, Custom domains, Zapier
              integration, Comprehensive analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
