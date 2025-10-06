'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

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
              <Link href="/services" className="text-white/70 hover:text-white">
                Services
              </Link>
              <Link href="/products" className="text-white font-semibold">
                Products
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
            Choose Your Service
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70 sm:text-xl">
            Select the service that best fits your needs. Each service is designed for specific use cases and includes tailored features.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {/* Business Platform */}
          <div className="rounded-xl border border-gray-600/30 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 transition-colors duration-300 hover:border-gray-500/50">
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Business</h3>
              <div className="mb-4 text-4xl font-bold text-white">
                $99<span className="text-lg text-white/70">/month</span>
              </div>
              <p className="mb-8 text-white/70">For companies and teams</p>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited landing pages
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced analytics & reporting
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Team management & permissions
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                NFC device management
              </li>
            </ul>

            <SignedOut>
              <Link
                href="/sign-up-custom?plan=business"
                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started as Business Admin
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
              >
                Current Plan
              </Link>
            </SignedIn>
          </div>

          {/* Events Platform */}
          <div className="relative rounded-xl border border-purple-600/50 bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 transition-colors duration-300 hover:border-purple-500/70">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </span>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Events</h3>
              <div className="mb-4 text-4xl font-bold text-white">
                $99<span className="text-lg text-white/70">/month</span>
              </div>
              <p className="mb-8 text-white/70">For event planners and organizers</p>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Event-specific landing pages
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Guest RSVP & check-in system
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Event collaborator & guest roles
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Photo galleries & memories
              </li>
            </ul>

            <SignedOut>
              <Link
                href="/sign-up-custom?plan=event"
                className="block w-full rounded-lg bg-gradient-to-r from-pink-600 to-red-600 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:from-pink-700 hover:to-red-700"
              >
                Get Started as Event Admin
              </Link>
            </SignedOut>
            <SignedIn>
              <button className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-red-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:from-pink-700 hover:to-red-700">
                Upgrade to Events
              </button>
            </SignedIn>
          </div>

          {/* Enterprise Platform */}
          <div className="rounded-xl border border-blue-600/30 bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 transition-colors duration-300 hover:border-blue-500/50">
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Enterprise</h3>
              <div className="mb-4 text-4xl font-bold text-white">
                Custom<span className="text-lg text-white/70">/month</span>
              </div>
              <p className="mb-8 text-white/70">Business + Events + More</p>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Everything in Business & Events
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Internal business event planning
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom integrations & APIs
              </li>
              <li className="flex items-center text-white/80">
                <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dedicated support & SLA
              </li>
            </ul>

            <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold text-white">Products & Add-ons</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            Enhance your Cosmic Portals experience with our premium products and services. 
            Available to all subscribers.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* NFC Hardware */}
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              hoveredProduct === 'nfc-hardware'
                ? 'border-blue-500/50 bg-blue-900/20'
                : 'border-gray-700 bg-gray-900/50'
            }`}
            onMouseEnter={() => setHoveredProduct('nfc-hardware')}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-white">NFC Hardware</h3>
              <p className="mb-6 text-white/70">
                Professional NFC tags, stickers, and devices for your business or events.
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  NFC Tags & Stickers
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Branded Devices
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bulk Ordering Available
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Setup & Configuration
                </li>
              </ul>

              {/* CTA */}
              <SignedIn>
                <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-cyan-700">
                  Browse Hardware
                </button>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/services"
                  className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-cyan-700"
                >
                  Subscribe to Access
                </Link>
              </SignedOut>
            </div>
          </div>

          {/* Business Content Packs */}
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              hoveredProduct === 'content-packs'
                ? 'border-purple-500/50 bg-purple-900/20'
                : 'border-gray-700 bg-gray-900/50'
            }`}
            onMouseEnter={() => setHoveredProduct('content-packs')}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-white">Content Packs</h3>
              <p className="mb-6 text-white/70">
                Pre-designed templates and content for different industries and use cases.
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industry-Specific Templates
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional Copy & Content
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Event-Specific Packs
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customizable Branding
                </li>
              </ul>

              {/* CTA */}
              <SignedIn>
                <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
                  Browse Content Packs
                </button>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/services"
                  className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700"
                >
                  Subscribe to Access
                </Link>
              </SignedOut>
            </div>
          </div>

          {/* Custom Website & Landing Page Builds */}
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              hoveredProduct === 'custom-builds'
                ? 'border-green-500/50 bg-green-900/20'
                : 'border-gray-700 bg-gray-900/50'
            }`}
            onMouseEnter={() => setHoveredProduct('custom-builds')}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-white">Custom Builds</h3>
              <p className="mb-6 text-white/70">
                Professional website and landing page development tailored to your brand.
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Website Development
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Landing Page Design
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Brand Integration
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ongoing Support
                </li>
              </ul>

              {/* CTA */}
              <SignedIn>
                <button className="w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-green-700 hover:to-emerald-700">
                  Request Quote
                </button>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/services"
                  className="block w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-green-700 hover:to-emerald-700"
                >
                  Subscribe to Access
                </Link>
              </SignedOut>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-white/70">
            Need something custom? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-purple-400 hover:text-purple-300"
          >
            Contact our team
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}