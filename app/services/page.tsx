'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-gold text-4xl font-bold sm:text-5xl">
            Choose Your Service
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-silver">
            Select the platform that best fits your needs. Each platform is
            designed for specific use cases and includes tailored features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
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
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited landing pages
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced analytics & reporting
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Team management & permissions
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                NFC device management
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                CRM integrations
              </li>
            </ul>

            <SignedOut>
              <Link
                href="/sign-up-custom?plan=business"
                className="block w-full rounded-lg metallic-gold px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:scale-105"
              >
                Get Started as Business Admin
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="block w-full rounded-lg metallic-gold px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:scale-105"
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
              <p className="mb-8 text-white/70">
                For event planners and organizers
              </p>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Event-specific landing pages
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Guest RSVP & check-in system
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Event collaborator & guest roles
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Photo galleries & memories
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Real-time event analytics
              </li>
            </ul>

            <SignedOut>
              <Link
                href="/sign-up-custom?plan=event"
                className="block w-full rounded-lg metallic-silver px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:scale-105"
              >
                Get Started as Event Admin
              </Link>
            </SignedOut>
            <SignedIn>
              <button className="w-full rounded-lg metallic-silver px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105">
                Upgrade to Events
              </button>
            </SignedIn>
          </div>

          {/* Enterprise Plan */}
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
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Everything in Business & Events
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Internal business event planning
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Custom integrations & APIs
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated support & SLA
              </li>
              <li className="flex items-center text-white/80">
                <svg
                  className="mr-3 h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                White-label & custom branding
              </li>
            </ul>

            <button className="w-full rounded-lg metallic-deep-blue px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                What's the difference between Business and Events platforms?
              </h3>
              <p className="text-white/70">
                Business platform focuses on customer engagement, team
                management, and business analytics. Events platform is designed
                for event planners with RSVP systems, guest management, and
                event-specific features.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Can I switch between platforms?
              </h3>
              <p className="text-white/70">
                Yes, you can upgrade to Enterprise to get both Business and
                Events features, or contact our sales team to discuss your
                specific needs.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Is my data secure?
              </h3>
              <p className="text-white/70">
                Absolutely. We use enterprise-grade encryption and never share
                your data with third parties. Your NFC scan data and analytics
                are processed securely with full privacy protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
