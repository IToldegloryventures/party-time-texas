'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DemoHub() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [hoveredStage, setHoveredStage] = useState<string | null>(null)

  const stages = [
    {
      id: 'identify',
      title: 'Identify',
      subtitle: 'Who & When',
      description: 'Capture user identity, device ID, and timestamp at the exact moment of tap.',
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-300',
      tooltip: 'Capture user identity, device ID, and timestamp at the exact moment of tap.',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      ),
      modalTitle: 'User Identity & Timestamp',
      modalContent: 'Track every NFC scan with device ID, timestamp, session context, and referrer. → Ideal for identifying repeat customers, staff scans, and exact tap times.'
    },
    {
      id: 'engage',
      title: 'Engage',
      subtitle: 'What',
      description: 'Track landing page engagement - scrolls, clicks, offers viewed.',
      color: 'from-indigo-600 to-indigo-800',
      borderColor: 'border-indigo-400',
      textColor: 'text-indigo-300',
      tooltip: 'Track landing page engagement - scrolls, clicks, offers viewed.',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3h10M8 10h8m-4 6h4" />
        </svg>
      ),
      modalTitle: 'Content Behavior Tracking',
      modalContent: 'See which landing page was viewed, how far users scrolled, which CTAs were clicked, and what UTM links they followed. → Understand what drives engagement.'
    },
    {
      id: 'localize',
      title: 'Localize',
      subtitle: 'Where & Why',
      description: 'Map scan location, trigger local offers, and visualize trends via heatmaps.',
      color: 'from-purple-600 to-purple-800',
      borderColor: 'border-purple-400',
      textColor: 'text-purple-300',
      tooltip: 'Map scan location, trigger local offers, and visualize trends via heatmaps.',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      modalTitle: 'Location-Based Intelligence',
      modalContent: 'Every scan is geo-tagged. Visualize activity across regions, heatmaps by venue, and location-triggered campaign results. → Optimize by city, district, or zone.'
    },
    {
      id: 'respond',
      title: 'Respond',
      subtitle: 'What Got Triggered',
      description: 'Launch automated workflows: emails, social posts, CRM actions - tied to tap data.',
      color: 'from-pink-600 to-pink-800',
      borderColor: 'border-pink-400',
      textColor: 'text-pink-300',
      tooltip: 'Launch automated workflows: emails, social posts, CRM actions - tied to tap data.',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      modalTitle: 'Automated Responses & Campaigns',
      modalContent: 'Auto-launch follow-up actions like CRM updates, emails, or social posts. Responses are tied to location, time, or behavior. → Great for event check-ins or timed promos.'
    },
    {
      id: 'measure',
      title: 'Measure',
      subtitle: 'What Worked',
      description: 'Analyze ROI by location, campaign, and device with unified attribution.',
      color: 'from-green-600 to-green-800',
      borderColor: 'border-green-400',
      textColor: 'text-green-300',
      tooltip: 'Analyze ROI by location, campaign, and device with unified attribution.',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      modalTitle: 'Attribution & ROI Tracking',
      modalContent: 'Measure conversions by scan source, location, or campaign. Compare NFC taps to social traffic in one ROI dashboard. → Show what\'s working, and where to invest more.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Cosmic Portals Demo
          </h1>
          <p className="text-xl text-gray-300">
            Explore internal dashboards tailored to different user types
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Architecture Diagram Link */}
        <div className="mb-12 text-center">
          <Link
            href="/system-architecture"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-indigo-500/50"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-white">View System Architecture →</span>
          </Link>
        </div>

        {/* 5W Signal Chain Section */}
        <div className="mb-20 rounded-xl border border-gradient-to-r from-cyan-900/50 to-blue-900/50 bg-gradient-to-br from-gray-900/80 via-cyan-900/20 to-gray-900/80 p-12 backdrop-blur">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-3">
              From NFC Tap to Revenue Impact
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              The 5W Signal Chain
            </p>
            <p className="text-lg text-gray-300 mb-2">
              Every tap tells a story. Cosmic Portals helps you understand and act on it.
            </p>
            <p className="text-base text-gray-400 max-w-4xl mx-auto">
              Track Who Engaged, What They Saw, Where They Are, When They Acted, and Why It Matters. Cosmic Portals shows you the complete ROI picture of your investment.
            </p>
          </div>

          {/* Horizontal Funnel - Interactive */}
          <div className="overflow-x-auto">
            <div className="flex justify-between items-start gap-6 min-w-max px-4 pb-4">
              {stages.map((stage, index) => (
                <div key={stage.id} className="flex items-start gap-3">
                  {/* Stage Column */}
                  <div className="flex flex-col items-center flex-1 min-w-max">
                    {/* Icon Button */}
                    <button
                      onClick={() => setActiveModal(stage.id)}
                      onMouseEnter={() => setHoveredStage(stage.id)}
                      onMouseLeave={() => setHoveredStage(null)}
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-6 border-2 ${stage.borderColor} transition-all duration-300 cursor-pointer ${
                        hoveredStage === stage.id ? `shadow-2xl ${stage.color === 'from-blue-600 to-blue-800' ? 'shadow-blue-500/60' : stage.color === 'from-indigo-600 to-indigo-800' ? 'shadow-indigo-500/60' : stage.color === 'from-purple-600 to-purple-800' ? 'shadow-purple-500/60' : stage.color === 'from-pink-600 to-pink-800' ? 'shadow-pink-500/60' : 'shadow-green-500/60'} scale-110` : 'shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {stage.icon}
                    </button>

                    {/* Tooltip on hover */}
                    {hoveredStage === stage.id && (
                      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded border border-gray-700 z-10 w-48 text-center animate-fade-in">
                        {stage.tooltip}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className={`text-lg font-bold ${stage.textColor} mb-1 text-center`}>{stage.title}</h3>

                    {/* Subtitle - smaller and lighter gray */}
                    <p className="text-xs text-gray-500 text-center mb-2 max-w-24">{stage.subtitle}</p>

                    {/* Description - ChatGPT 1-liner */}
                    <p className="text-xs text-gray-400 text-center max-w-32 leading-snug">{stage.description}</p>
                  </div>

                  {/* Connecting Line */}
                  {index < stages.length - 1 && (
                    <div className="flex items-center justify-center pt-12 px-2">
                      <div className="w-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* New Tagline */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300">
              <span className="font-bold text-white">Cosmic Portals transforms every NFC tap into a full-funnel signal - from engagement to revenue attribution.</span>
            </p>
          </div>

          {/* Old CTA Tagline */}
          <div className="mt-6 text-center">
            <p className="text-base text-gray-400">
              Cosmic Portals connects the dots across every tap, page, post, and result - so clients can track not just engagement, but why it happened.
            </p>
          </div>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Business User Demo */}
          <Link href="/demo/business-user">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.256V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h5.821a4.5 4.5 0 00.822-8.744M7 9h6m-6 4h4m5-11l4 4m0 0l4 4m-4-4v8"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Business User
              </h2>
              <p className="mb-6 text-center text-sm text-purple-100">
                NFC business cards, conversion funnels, and ROI tracking
              </p>
              <div className="space-y-2 text-sm text-purple-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>NFC Business Cards</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Conversion Analytics</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Behavioral Profiles</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>ROI Dashboard</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-purple-600 transition-all group-hover:bg-purple-100">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Event Planner Demo */}
          <Link href="/demo/event-planner">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-pink-600 to-pink-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Event Planner
              </h2>
              <p className="mb-6 text-center text-sm text-pink-100">
                Guest check-in, RSVP management, and real-time attendance
              </p>
              <div className="space-y-2 text-sm text-pink-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>NFC Check-In</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Guest Management</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Photo Gallery</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Attendance Analytics</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-pink-600 transition-all group-hover:bg-pink-100">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Event Guest Demo */}
          <Link href="/demo/event-guest">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Event Guest
              </h2>
              <p className="mb-6 text-center text-sm text-cyan-100">
                Check-in, event experience, photo gallery, RSVP
              </p>
              <div className="space-y-2 text-sm text-cyan-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>NFC Check-In</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Event Schedule</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Photo Gallery</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>RSVP & Info</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-cyan-600 transition-all group-hover:bg-cyan-100">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Super Admin Demo */}
          <Link href="/demo/super-admin">
            <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-red-900 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-white">
                Super Admin
              </h2>
              <p className="mb-6 text-center text-sm text-red-100">
                Platform administration and controls
              </p>
              <div className="space-y-2 text-sm text-red-100">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>All Organizations</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Revenue & Analytics</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>System Controls</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>User Management</span>
                </div>
              </div>
              <div className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-semibold text-red-600 transition-all group-hover:bg-red-100">
                View Demo →
              </div>
            </div>
          </Link>

        </div>

        {/* Description Section */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Why These User Types Matter
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-3 text-lg font-bold text-blue-400">
                Business Users
              </div>
              <p className="text-sm text-gray-300">
                Dashboard with NFC Devices, Events, Landing Pages, and Analytics modules. Quick actions, real-time metrics, and detailed device/event management.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-pink-400">
                Event Planners
              </div>
              <p className="text-sm text-gray-300">
                Comprehensive event management with NFC check-in stations, real-time attendee tracking, meal preferences, dietary restrictions, and check-in timelines.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-cyan-400">
                Event Guests
              </div>
              <p className="text-sm text-gray-300">
                Guest portal with event details, schedule, venue map, photo gallery for uploads/viewing, RSVP confirmation, meal selection, and attendee information.
              </p>
            </div>

            <div>
              <div className="mb-3 text-lg font-bold text-red-400">
                Super Admins
              </div>
              <p className="text-sm text-gray-300">
                Platform-wide administration with organization management, revenue analytics, portal breakdowns, and advanced system controls across all customers.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Demos Section */}
        <div className="mt-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Feature Demos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Row 1 */}
            <Link href="/demo/geo-marketing">
              <div className="group rounded-lg border border-purple-600/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 shadow-lg transition-all hover:border-purple-400/80 hover:shadow-purple-500/20">
                <h3 className="mb-2 font-bold text-purple-300">Geo-Marketing Intelligence</h3>
                <p className="text-xs text-gray-300">Location-driven insights and regional KPIs</p>
                <div className="mt-4 text-purple-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/customer-journey-insights">
              <div className="group rounded-lg border border-blue-600/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 shadow-lg transition-all hover:border-blue-400/80 hover:shadow-blue-500/20">
                <h3 className="mb-2 font-bold text-blue-300">Customer Journey Insights</h3>
                <p className="text-xs text-gray-300">Scan-to-sale funnel mapping and attribution</p>
                <div className="mt-4 text-blue-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/smart-social-scheduler">
              <div className="group rounded-lg border border-pink-600/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 shadow-lg transition-all hover:border-pink-400/80 hover:shadow-pink-500/20">
                <h3 className="mb-2 font-bold text-pink-300">Smart Social Scheduler</h3>
                <p className="text-xs text-gray-300">Campaign calendar and social post automation</p>
                <div className="mt-4 text-pink-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/landing-page-builder">
              <div className="group rounded-lg border border-cyan-600/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 shadow-lg transition-all hover:border-cyan-400/80 hover:shadow-cyan-500/20">
                <h3 className="mb-2 font-bold text-cyan-300">Landing Page Builder</h3>
                <p className="text-xs text-gray-300">Drag-and-drop with geo-personalization</p>
                <div className="mt-4 text-cyan-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/nfc-analytics">
              <div className="group rounded-lg border border-green-600/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 shadow-lg transition-all hover:border-green-400/80 hover:shadow-green-500/20">
                <h3 className="mb-2 font-bold text-green-300">NFC Analytics Dashboard</h3>
                <p className="text-xs text-gray-300">Real-time metrics and conversion tracking</p>
                <div className="mt-4 text-green-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            {/* Row 2 */}
            <Link href="/demo/nfc-management">
              <div className="group rounded-lg border border-orange-600/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 shadow-lg transition-all hover:border-orange-400/80 hover:shadow-orange-500/20">
                <h3 className="mb-2 font-bold text-orange-300">NFC Device Management</h3>
                <p className="text-xs text-gray-300">Hardware control and deployment tracking</p>
                <div className="mt-4 text-orange-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/task-management">
              <div className="group rounded-lg border border-red-600/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 shadow-lg transition-all hover:border-red-400/80 hover:shadow-red-500/20">
                <h3 className="mb-2 font-bold text-red-300">Task Management</h3>
                <p className="text-xs text-gray-300">Geo-tagged tasks and team collaboration</p>
                <div className="mt-4 text-red-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/mobile-app-client">
              <div className="group rounded-lg border border-indigo-600/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 shadow-lg transition-all hover:border-indigo-400/80 hover:shadow-indigo-500/20">
                <h3 className="mb-2 font-bold text-indigo-300">Mobile App - Client</h3>
                <p className="text-xs text-gray-300">Manage marketing from any device</p>
                <div className="mt-4 text-indigo-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/mobile-app-customer">
              <div className="group rounded-lg border border-teal-600/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-6 shadow-lg transition-all hover:border-teal-400/80 hover:shadow-teal-500/20">
                <h3 className="mb-2 font-bold text-teal-300">Mobile App - Customer</h3>
                <p className="text-xs text-gray-300">Discover local offers and events</p>
                <div className="mt-4 text-teal-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>

            <Link href="/demo/white-label">
              <div className="group rounded-lg border border-amber-600/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6 shadow-lg transition-all hover:border-amber-400/80 hover:shadow-amber-500/20">
                <h3 className="mb-2 font-bold text-amber-300">White-Label Customization</h3>
                <p className="text-xs text-gray-300">Branded domains and full customization</p>
                <div className="mt-4 text-amber-400 transition-all group-hover:translate-x-1">View Demo →</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Modal Reveal */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="relative w-full max-w-2xl rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl border border-gray-700 m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>

              {/* Modal Content */}
              {stages.map((stage) => {
                if (stage.id === activeModal) {
                  return (
                    <div key={stage.id} className="space-y-4">
                      {/* Color Accent Line */}
                      <div className={`h-1 w-16 bg-gradient-to-r ${stage.color} rounded-full`}></div>

                      {/* Modal Title */}
                      <h2 className="text-3xl font-bold text-white">
                        {stage.modalTitle}
                      </h2>

                      {/* Modal Content */}
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {stage.modalContent}
                      </p>

                      {/* CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-700">
                        <p className="text-sm text-gray-400">
                          Ready to see this in action? Explore other stages or dive into our demo.
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
