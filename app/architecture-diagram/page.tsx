import React from 'react';
import ClientDiagram from './ClientDiagram';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ClientDiagram />

      {/* Main Architecture Diagram */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* System Architecture Overview */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-5xl font-bold text-gray-900">
            System Architecture Overview
          </h2>
          {/* Updated: Business Model section now has 6 items in proper 2x3 grid */}

          {/* Main Architecture Flow */}
          <div className="space-y-12">
            {/* 1. Access Points & Authentication */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Access Points & Authentication
                </h3>
                <p className="mt-2 text-xl text-gray-600">
                  User Interfaces & RBAC
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    User Interfaces
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      Mobile App
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      Web App
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      White-Label Domains (e.g., events.company.com)
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Authentication
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      Clerk – Identity & Session Management
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      5-Tier RBAC System
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      Super Admin → Organization Owner → Admin → Team Member →
                      Guest
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Core Application */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Core Application
                </h3>
                <p className="mt-2 text-xl text-gray-600">
                  Next.js 15 App Router Platform
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-red-50 to-red-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Primary Components
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      Central Dashboard
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      Landing Page Builder
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      Event Manager
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      NFC Device Manager
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      Hardware Storefront
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-orange-50 to-orange-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Management & Analytics
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Performance & Analytics Dashboard
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Team & Access Management
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Task & Workflow Manager
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Billing Dashboard
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      White-Label Settings
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Data Architecture & Storage */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Data Architecture & Storage
                </h3>
                <p className="mt-2 text-xl text-gray-600">
                  Supabase PostgreSQL Multi-tenant
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-green-50 to-green-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Core Tables (12+)
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      users, organizations, events, attendees
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      landing_pages, nfc_devices, nfc_scans
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      geo_sessions, tasks, subscriptions
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      billing_history, analytics_events
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Extended Tracking
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-emerald-500"></div>
                      Persistent cookies (90–365 days)
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-emerald-500"></div>
                      Geo-pattern recognition
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-emerald-500"></div>
                      Multi-touch journey mapping
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-emerald-500"></div>
                      Row-Level Security (RLS)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Analytics & Intelligence */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Analytics & Intelligence
                </h3>
                <p className="mt-2 text-xl text-gray-600">
                  AI-Driven Insights & Real-time Processing
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Session Tracking
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-indigo-500"></div>
                      NFC scans & landing-page interactions
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-indigo-500"></div>
                      Extended engagement tracking
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-indigo-500"></div>
                      Real-time event aggregation
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    AI-Driven Insights
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      Conversion funnels & geo-heatmaps
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      Behavioral prediction models
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      ROI attribution & campaign effectiveness
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Connected Services & Commerce */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Connected Services & Commerce
                </h3>
                <p className="mt-2 text-xl text-gray-600">
                  Multi-Channel Communication & Fulfillment
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-yellow-50 to-yellow-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Communication
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                      Push Notifications
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                      Email & SMS
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                      Webhooks
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-amber-50 to-amber-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Commerce & Billing
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-amber-500"></div>
                      Stripe Billing & Subscriptions
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-amber-500"></div>
                      Usage-based pricing models
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-orange-50 to-orange-100 p-6">
                  <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                    Physical Fulfillment
                  </h4>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      NFC devices & branded packaging
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Logistics & shipping
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Services */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* AI Services Gateway */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  AI Services Gateway
                </h3>
                <p className="text-sm text-gray-600">AI Orchestration</p>
              </div>
              <div>
                <h4 className="mb-3 text-center text-lg font-semibold text-gray-800">
                  Core Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Landing Page Generator</li>
                  <li>• Geo-Marketing Intelligence</li>
                  <li>• Lead Journey & Behavior Analysis</li>
                  <li>• Content Automation</li>
                  <li>• Analytics & Insights Engine</li>
                </ul>
                <h4 className="mt-4 mb-3 text-center text-lg font-semibold text-gray-800">
                  Infrastructure
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gemini + OpenAI API</li>
                  <li>• Centralized rate-limiting</li>
                </ul>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Security & Compliance
                </h3>
                <p className="text-sm text-gray-600">Multi-Layer Security</p>
              </div>
              <div>
                <h4 className="mb-3 text-center text-lg font-semibold text-gray-800">
                  Protection & Governance
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Clerk Authentication</li>
                  <li>• Supabase RLS Enforcement</li>
                  <li>• API Rate Limiting</li>
                  <li>• Session Encryption</li>
                  <li>• GDPR / CCPA Compliance</li>
                  <li>• SOC 2 Type II Certification</li>
                </ul>
              </div>
            </div>

            {/* Developer Tools */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Developer Tools & Integrations
                </h3>
                <p className="text-sm text-gray-600">APIs & Extensions</p>
              </div>
              <div>
                <h4 className="mb-3 text-center text-lg font-semibold text-gray-800">
                  APIs & Extensions
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• RESTful API</li>
                  <li>• SDKs & Webhooks</li>
                  <li>• OpenAI Agents Integration</li>
                </ul>
                <h4 className="mt-4 mb-3 text-center text-lg font-semibold text-gray-800">
                  Custom Solutions
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• White-Label SDK</li>
                  <li>• Custom Domain Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Details */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Frontend Stack */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Frontend Stack
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-lg text-gray-700">
                  Next.js 15 with App Router
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-lg text-gray-700">
                  React 18 with Server Components
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-lg text-gray-700">
                  Tailwind CSS for Styling
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-lg text-gray-700">
                  TypeScript for Type Safety
                </span>
              </li>
            </ul>
          </div>

          {/* Backend Stack */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Backend Stack
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-lg text-gray-700">Node.js Runtime</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-lg text-gray-700">
                  Supabase PostgreSQL
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-lg text-gray-700">Redis for Caching</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-lg text-gray-700">
                  Clerk Authentication
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Deployment & Infrastructure */}
        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Deployment & Infrastructure
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Vercel Hosting
              </h4>
              <p className="text-base text-gray-600">
                Global CDN & Edge Functions
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                SSL Security
              </h4>
              <p className="text-base text-gray-600">End-to-End Encryption</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Auto Scaling
              </h4>
              <p className="text-base text-gray-600">
                Dynamic Resource Allocation
              </p>
            </div>
          </div>
        </div>

        {/* Business Model - MOVED TO TOP */}
        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Business Model
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Recurring SaaS Subscriptions
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Physical Hardware Sales
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Branded Design and Creative Services
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                B2B & B2C Geo Marketing paid ads and insights
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Advanced Analytics and Attribution Solutions
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Enterprise White-Label Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Key Service Offerings - MOVED ABOVE USER JOURNEYS */}
        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Key Service Offerings & Revenue Streams
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
              <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                SaaS Platform Services
              </h4>
              <ul className="space-y-2 text-base text-gray-700">
                <li>• Multi-tenant Dashboard & Analytics</li>
                <li>• AI-Powered Landing Page Builder</li>
                <li>• Geo-Marketing Intelligence Engine</li>
                <li>• NFC Device Management System</li>
                <li>• White-Label Custom Domains</li>
                <li>• 5-Tier Role-Based Access Control</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-green-50 to-green-100 p-6">
              <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                Physical Products & Merchandise
              </h4>
              <ul className="space-y-2 text-base text-gray-700">
                <li>• Custom NFC Tags & Cards</li>
                <li>• Branded Business Cards</li>
                <li>• Event Badges & Wristbands</li>
                <li>• Product Packaging Integration</li>
                <li>• Bulk Order Management</li>
                <li>• Shipping & Logistics</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
              <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
                Advanced Analytics & Attribution
              </h4>
              <ul className="space-y-2 text-base text-gray-700">
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

        {/* User Journey Examples - 2 blocks per row, correct order */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            User Journey Examples
          </h2>

          {/* Row 1: Event Organizer Journey & Event Guest Journey */}
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Event Organizer Journey */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Event Organizer Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white shadow-lg">
                    1
                  </div>
                  <span className="text-lg text-gray-700">
                    Sign up & Create Organization
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white shadow-lg">
                    2
                  </div>
                  <span className="text-lg text-gray-700">
                    Design Landing Pages with AI Builder
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white shadow-lg">
                    3
                  </div>
                  <span className="text-lg text-gray-700">
                    Order Custom NFC Merch & Branding
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white shadow-lg">
                    4
                  </div>
                  <span className="text-lg text-gray-700">
                    Deploy at Event & Track Real-time Analytics
                  </span>
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                  <div className="text-lg font-bold text-blue-800">
                    Key Features Used:
                  </div>
                  <div className="mt-2 text-base text-blue-700">
                    AI Landing Page Builder, Custom NFC Merchandise,
                    Geo-Marketing Intelligence, Real-time Analytics Dashboard,
                    White-label Branding
                  </div>
                </div>
              </div>
            </div>

            {/* Event Guest Journey */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Event Guest Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-lg font-bold text-white shadow-lg">
                    1
                  </div>
                  <span className="text-lg text-gray-700">
                    Receive Event Invitation
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-lg font-bold text-white shadow-lg">
                    2
                  </div>
                  <span className="text-lg text-gray-700">
                    Tap NFC Tag at Event
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-lg font-bold text-white shadow-lg">
                    3
                  </div>
                  <span className="text-lg text-gray-700">
                    Access Photo Galleries & Content
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-lg font-bold text-white shadow-lg">
                    4
                  </div>
                  <span className="text-lg text-gray-700">
                    Share & Connect with Others
                  </span>
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 p-6">
                  <div className="text-lg font-bold text-pink-800">
                    Key Features Used:
                  </div>
                  <div className="mt-2 text-base text-pink-700">
                    NFC Tag Interaction, Photo Gallery Access, Social Sharing,
                    Event Content, Guest Networking
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Business Owner Journey & Business User Journey */}
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Business Owner Journey */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Business Owner Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    1
                  </div>
                  <span className="text-lg text-gray-700">
                    Subscribe to SaaS Plan
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    2
                  </div>
                  <span className="text-lg text-gray-700">
                    Set up Team & Multi-location Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    3
                  </div>
                  <span className="text-lg text-gray-700">
                    Create Geo-Marketing Campaigns & Cross-Marketing Paid Ads
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    4
                  </div>
                  <span className="text-lg text-gray-700">
                    Generate Analytics Reports & Optimize ROI
                  </span>
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6">
                  <div className="text-lg font-bold text-green-800">
                    Key Features Used:
                  </div>
                  <div className="mt-2 text-base text-green-700">
                    Multi-location Tracking, Geo-Marketing Intelligence,
                    Analytics Reporting, Cross-Marketing Paid Ads, Customer
                    Journey Insights, ROI Attribution, Automated Follow-ups
                  </div>
                </div>
              </div>
            </div>

            {/* Business User Journey */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Business User Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
                    1
                  </div>
                  <span className="text-lg text-gray-700">
                    Access Business Dashboard
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
                    2
                  </div>
                  <span className="text-lg text-gray-700">
                    Create & Manage Content
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
                    3
                  </div>
                  <span className="text-lg text-gray-700">
                    Track Performance & Analytics
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
                    4
                  </div>
                  <span className="text-lg text-gray-700">
                    Optimize Campaigns & ROI
                  </span>
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-6">
                  <div className="text-lg font-bold text-cyan-800">
                    Key Features Used:
                  </div>
                  <div className="mt-2 text-base text-cyan-700">
                    Content Management, Performance Analytics, Campaign
                    Optimization, ROI Tracking, Team Collaboration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Marketing Agency Journey & Viewer NFC Scan Flow */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Marketing Agency Journey */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Marketing Agency Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg">
                    1
                  </div>
                  <span className="text-lg text-gray-700">
                    Access White-Label Platform
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg">
                    2
                  </div>
                  <span className="text-lg text-gray-700">
                    Create Client Campaigns with AI
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg">
                    3
                  </div>
                  <span className="text-lg text-gray-700">
                    Order Custom NFC Merch for Clients
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg">
                    4
                  </div>
                  <span className="text-lg text-gray-700">
                    Deliver Comprehensive Analytics Reports
                  </span>
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6">
                  <div className="text-lg font-bold text-orange-800">
                    Key Features Used:
                  </div>
                  <div className="mt-2 text-base text-orange-700">
                    White-Label Custom Domains, AI Insights & Analytics, Custom
                    NFC Merchandise, Advanced Analytics, Client Reporting
                    Dashboard
                  </div>
                </div>
              </div>
            </div>

            {/* Viewer NFC Scan Flow */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Viewer NFC Scan Flow
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    1
                  </div>
                  <span className="text-lg text-gray-700">
                    Guest taps NFC tag
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    2
                  </div>
                  <span className="text-lg text-gray-700">
                    Dynamic landing page loads
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    3
                  </div>
                  <span className="text-lg text-gray-700">
                    Scan data and geolocation captured
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-bold text-white shadow-lg">
                    4
                  </div>
                  <span className="text-lg text-gray-700">
                    Persistent tracking (90–365 days)
                  </span>
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6">
                  <div className="text-lg font-bold text-green-800">
                    Real-Time Analytics:
                  </div>
                  <div className="mt-2 text-base text-green-700">
                    Engagement and conversion tracking, Geo-intelligence
                    visualization, Customer journey mapping, ROI attribution and
                    campaign effectiveness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
