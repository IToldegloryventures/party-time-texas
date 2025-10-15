import React from 'react';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Main Architecture Diagram */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* System Architecture Overview */}
        <div className="mb-16">
          <h1 className="mb-8 text-center text-4xl font-bold text-white">
            System Architecture Overview
          </h1>

          {/* Main Architecture Blocks */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Entry Points & Authentication */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-8 w-8 text-slate-700"
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Entry Points & Authentication
                  </h3>
                  <p className="text-slate-700">User Interfaces & RBAC</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    User Interfaces
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Mobile App</li>
                    <li>• Web App</li>
                    <li>• White-Label Domains</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Authentication
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Clerk Identity Management</li>
                    <li>• 5-Tier RBAC System</li>
                    <li>• Role-based Access Control</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Application */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-8 w-8 text-slate-700"
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Core Application
                  </h3>
                  <p className="text-slate-700">
                    Next.js 15 App Router Platform
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Primary Components
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Central Dashboard</li>
                    <li>• Landing Page Builder</li>
                    <li>• Event Manager</li>
                    <li>• NFC Device Manager</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Management & Analytics
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Performance Dashboard</li>
                    <li>• Team Management</li>
                    <li>• Task Manager</li>
                    <li>• Billing Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Architecture */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-8 w-8 text-slate-700"
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Data Architecture
                  </h3>
                  <p className="text-slate-700">
                    Supabase PostgreSQL Multi-tenant
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Core Tables
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• users, organizations, events</li>
                    <li>• landing_pages, nfc_devices</li>
                    <li>• geo_sessions, analytics_events</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Extended Tracking
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Persistent cookies (90-365 days)</li>
                    <li>• Geo-pattern recognition</li>
                    <li>• Row-Level Security (RLS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Analytics & Intelligence */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-8 w-8 text-slate-700"
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Analytics & Intelligence
                  </h3>
                  <p className="text-slate-700">
                    AI-Driven Insights & Real-time Processing
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Session Tracking
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• NFC scans & interactions</li>
                    <li>• Extended engagement tracking</li>
                    <li>• Real-time event aggregation</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    AI-Driven Insights
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Conversion funnels & heatmaps</li>
                    <li>• Behavioral prediction models</li>
                    <li>• ROI attribution & effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connected Services */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-8 w-8 text-slate-700"
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Connected Services
                  </h3>
                  <p className="text-slate-700">
                    Multi-Channel Communication & Fulfillment
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Communication
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Push Notifications</li>
                    <li>• Email & SMS</li>
                    <li>• Webhooks</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Commerce & Billing
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-800">
                    <li>• Stripe Billing</li>
                    <li>• Usage-based pricing</li>
                    <li>• Physical fulfillment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Business Model
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Recurring SaaS Subscriptions
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Physical Hardware Sales
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Branded Design and Creative Services
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  B2B & B2C Geo Marketing paid ads and insights
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Advanced Analytics and Attribution Solutions
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-slate-900">
                  Enterprise White-Label Solutions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Service Offerings & Revenue Streams */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Key Service Offerings & Revenue Streams
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  SaaS Subscriptions
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  NFC Hardware Sales
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Design Services
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Geo-Marketing
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <span className="text-lg font-bold text-slate-900">
                  Analytics Services
                </span>
              </div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-slate-900">
                  White-Label Solutions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey Examples */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            User Journey Examples
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Event Organizer Journey */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Event Organizer Journey
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-slate-700">
                    Sign up & Create Organization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-slate-700">
                    Design Landing Pages with AI Builder
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-slate-700">
                    Order Custom NFC Merch & Branding
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-slate-700">
                    Deploy at Event & Track Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Event Guest Journey */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Event Guest Journey
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-slate-700">Tap NFC at Event</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-slate-700">
                    Access Landing Page & Content
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-slate-700">
                    View Photo Galleries & Updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-slate-700">
                    Receive Follow-up Communications
                  </span>
                </div>
              </div>
            </div>

            {/* Business Owner Journey */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Business Owner Journey
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-slate-700">Subscribe to SaaS Plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-slate-700">
                    Set up Team & Multi-location Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-slate-700">
                    Create Geo-Marketing Campaigns
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-slate-700">
                    Analytics Reporting, Geo-Marketing Capabilities,
                    Cross-Marketing Paid Ads
                  </span>
                </div>
              </div>
            </div>

            {/* Business User Journey */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Business User Journey
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-slate-700">Access Dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-slate-700">
                    Create Content & Campaigns
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-slate-700">
                    Monitor Performance & Analytics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-slate-700">
                    Optimize Based on Insights
                  </span>
                </div>
              </div>
            </div>

            {/* Marketing Agency Journey */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Marketing Agency Journey
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-slate-700">
                    Onboard Client & Set up Account
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-slate-700">
                    Design Branded NFC Campaigns
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-slate-700">
                    Deploy & Track Client Campaigns
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-slate-700">
                    AI Insights & Analytics for Client Reports
                  </span>
                </div>
              </div>
            </div>

            {/* Viewer NFC Scan Flow - Moved next to Marketing Agency */}
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Viewer NFC Scan Flow
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-slate-700">NFC Tap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-slate-700">Landing Page Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-slate-700">
                    Store Scan + Geo Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-slate-700">Track 90-365 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Integration Journey - Moved to bottom */}
          <div className="mt-8">
            <div className="rounded-xl border-2 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300">
                  <svg
                    className="h-6 w-6 text-slate-700"
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
                <h3 className="text-xl font-bold text-slate-900">
                  Developer Integration Journey
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-lg font-bold text-slate-700">
                    1
                  </div>
                  <span className="text-sm text-slate-700">
                    Access API Documentation
                  </span>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-lg font-bold text-slate-700">
                    2
                  </div>
                  <span className="text-sm text-slate-700">
                    Integrate SDK & Webhooks
                  </span>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-lg font-bold text-slate-700">
                    3
                  </div>
                  <span className="text-sm text-slate-700">
                    OpenAI Agents Integration
                  </span>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-lg font-bold text-slate-700">
                    4
                  </div>
                  <span className="text-sm text-slate-700">
                    Deploy Custom Solutions
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
