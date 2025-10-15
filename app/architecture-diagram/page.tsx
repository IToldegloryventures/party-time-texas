import React from 'react';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Architecture Diagram */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Business Model */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Business Model
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <span className="font-semibold text-slate-900">
                  Recurring SaaS Subscriptions
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <span className="font-semibold text-slate-900">
                  Physical Hardware Sales
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <span className="font-semibold text-slate-900">
                  Branded Design Services
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <span className="font-semibold text-slate-900">
                  Geo Marketing & Insights
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <span className="font-semibold text-slate-900">
                  Advanced Analytics
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <span className="font-semibold text-slate-900">
                  Enterprise Solutions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Architecture */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Core Architecture
          </h2>
          <div className="space-y-8">
            {/* Access Points & Authentication */}
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-6 w-6 text-slate-600"
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
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Access Points & Authentication
                  </h3>
                  <p className="text-slate-600">User Interfaces & RBAC</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    User Interfaces
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Mobile App</li>
                    <li>• Web App</li>
                    <li>• White-Label Domains</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Authentication
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Clerk Identity Management</li>
                    <li>• 5-Tier RBAC System</li>
                    <li>• Role-based Access Control</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Application */}
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-6 w-6 text-slate-600"
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
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Core Application
                  </h3>
                  <p className="text-slate-600">
                    Next.js 15 App Router Platform
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Primary Components
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Central Dashboard</li>
                    <li>• Landing Page Builder</li>
                    <li>• Event Manager</li>
                    <li>• NFC Device Manager</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Management & Analytics
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Performance Dashboard</li>
                    <li>• Team Management</li>
                    <li>• Task Manager</li>
                    <li>• Billing Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Architecture */}
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-6 w-6 text-slate-600"
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
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Data Architecture & Storage
                  </h3>
                  <p className="text-slate-600">
                    Supabase PostgreSQL Multi-tenant
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Core Tables
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• users, organizations, events</li>
                    <li>• landing_pages, nfc_devices</li>
                    <li>• geo_sessions, analytics_events</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Extended Tracking
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Persistent cookies (90-365 days)</li>
                    <li>• Geo-pattern recognition</li>
                    <li>• Row-Level Security (RLS)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analytics & Intelligence */}
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-6 w-6 text-slate-600"
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
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Analytics & Intelligence
                  </h3>
                  <p className="text-slate-600">
                    AI-Driven Insights & Real-time Processing
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Session Tracking
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• NFC scans & interactions</li>
                    <li>• Extended engagement tracking</li>
                    <li>• Real-time event aggregation</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    AI-Driven Insights
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Conversion funnels & heatmaps</li>
                    <li>• Behavioral prediction models</li>
                    <li>• ROI attribution & effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connected Services */}
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-6 w-6 text-slate-600"
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
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Connected Services & Commerce
                  </h3>
                  <p className="text-slate-600">
                    Multi-Channel Communication & Fulfillment
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Communication
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Push Notifications</li>
                    <li>• Email & SMS</li>
                    <li>• Webhooks</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Commerce & Billing
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Stripe Billing</li>
                    <li>• Usage-based pricing</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Physical Fulfillment
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• NFC devices & packaging</li>
                    <li>• Logistics & shipping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Services */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Supporting Services
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* AI Services */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <h3 className="text-lg font-bold text-slate-900">
                  AI Services Gateway
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Landing Page Generator</li>
                <li>• Geo-Marketing Intelligence</li>
                <li>• Lead Behavior Analysis</li>
                <li>• Content Automation</li>
              </ul>
            </div>

            {/* Security */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <h3 className="text-lg font-bold text-slate-900">
                  Security & Compliance
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Clerk Authentication</li>
                <li>• Supabase RLS Enforcement</li>
                <li>• API Rate Limiting</li>
                <li>• GDPR / CCPA Compliance</li>
              </ul>
            </div>

            {/* Developer Tools */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-5 w-5 text-slate-600"
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
                <h3 className="text-lg font-bold text-slate-900">
                  Developer Tools
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• RESTful API</li>
                <li>• SDKs & Webhooks</li>
                <li>• OpenAI Agents Integration</li>
                <li>• White-Label SDK</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Journey Examples */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            User Journey Examples
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Event Organizer Journey */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Event Organizer Journey
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    1
                  </div>
                  <span className="text-slate-700">
                    Sign up & Create Organization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    2
                  </div>
                  <span className="text-slate-700">
                    Design Landing Pages with AI Builder
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    3
                  </div>
                  <span className="text-slate-700">
                    Order Custom NFC Merch & Branding
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    4
                  </div>
                  <span className="text-slate-700">
                    Deploy at Event & Track Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Business Owner Journey */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Business Owner Journey
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    1
                  </div>
                  <span className="text-slate-700">Subscribe to SaaS Plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    2
                  </div>
                  <span className="text-slate-700">
                    Set up Team & Multi-location Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    3
                  </div>
                  <span className="text-slate-700">
                    Create Geo-Marketing Campaigns
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    4
                  </div>
                  <span className="text-slate-700">
                    Generate Analytics Reports & Optimize ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
