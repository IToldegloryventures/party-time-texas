'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Cosmic Portals
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-white/70 hover:text-white">
                Home
              </Link>
              <Link href="/pricing" className="text-white/70 hover:text-white">
                Pricing
              </Link>
              <Link href="/sign-in" className="text-white/70 hover:text-white">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            Choose Your Platform
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70 sm:text-xl">
            Select the platform that best fits your needs. Each platform is designed for specific use cases and includes tailored features.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Business Platform */}
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              hoveredPlan === 'business'
                ? 'border-purple-500/50 bg-purple-900/20'
                : 'border-gray-700 bg-gray-900/50'
            }`}
            onMouseEnter={() => setHoveredPlan('business')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-white">Business Platform</h3>
              <p className="mb-6 text-white/70">
                Perfect for companies, agencies, and teams looking to engage customers and track business metrics.
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customer engagement tracking
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Team collaboration tools
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business analytics & reporting
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom branding & white-label
                </li>
              </ul>

              {/* CTA */}
              <Link
                href="/sign-up-custom?plan=business"
                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started as Business Admin
              </Link>
            </div>
          </div>

          {/* Event Platform */}
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              hoveredPlan === 'event'
                ? 'border-purple-500/50 bg-purple-900/20'
                : 'border-gray-700 bg-gray-900/50'
            }`}
            onMouseEnter={() => setHoveredPlan('event')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-white">Event Platform</h3>
              <p className="mb-6 text-white/70">
                Ideal for event planners, venues, and organizers who want to create memorable experiences and track event success.
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Event registration & check-in
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Guest engagement tracking
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Event analytics & insights
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Photo galleries & memories
                </li>
              </ul>

              {/* CTA */}
              <Link
                href="/sign-up-custom?plan=event"
                className="block w-full rounded-lg bg-gradient-to-r from-pink-600 to-red-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-pink-700 hover:to-red-700"
              >
                Get Started as Event Admin
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-white/70">
            Not sure which platform is right for you?
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center text-purple-400 hover:text-purple-300"
          >
            Compare all features
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
