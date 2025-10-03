'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Choose Your Plan
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Unlock the power of NFC-powered engagement with our flexible pricing
            plans
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="rounded-xl border border-gray-600/30 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 transition-colors duration-300 hover:border-gray-500/50">
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Free</h3>
              <div className="mb-4 text-4xl font-bold text-white">
                $0<span className="text-lg text-white/70">/month</span>
              </div>
              <p className="mb-8 text-white/70">Perfect for getting started</p>
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
                5 NFC devices per month
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
                Basic analytics
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
                Email support
              </li>
            </ul>

            <SignedOut>
              <Link
                href="/sign-up"
                className="block w-full rounded-lg bg-gray-600 px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-gray-700"
              >
                Get Started Free
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="block w-full rounded-lg bg-gray-600 px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-gray-700"
              >
                Current Plan
              </Link>
            </SignedIn>
          </div>

          {/* Pro Plan */}
          <div className="relative rounded-xl border border-purple-600/50 bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 transition-colors duration-300 hover:border-purple-500/70">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </span>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
              <div className="mb-4 text-4xl font-bold text-white">
                $29<span className="text-lg text-white/70">/month</span>
              </div>
              <p className="mb-8 text-white/70">For professionals and teams</p>
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
                Unlimited NFC devices
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
                Advanced analytics
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
                Priority support
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
                Event management
              </li>
            </ul>

            <SignedOut>
              <Link
                href="/sign-up?plan=pro"
                className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700"
              >
                Start Pro Trial
              </Link>
            </SignedOut>
            <SignedIn>
              <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700">
                Upgrade to Pro
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
              <p className="mb-8 text-white/70">For large organizations</p>
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
                Everything in Pro
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
                Custom integrations
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
                Dedicated support
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
                SLA guarantee
              </li>
            </ul>

            <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
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
                How does NFC tracking work?
              </h3>
              <p className="text-white/70">
                Our NFC system tracks every scan, tap, and click to provide
                detailed analytics on engagement, location data, and user behavior
                for your business or events.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-white/70">
                Yes, you can cancel your subscription at any time. Your access
                will continue until the end of your current billing period.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Is my data secure?
              </h3>
              <p className="text-white/70">
                Absolutely.                 We use enterprise-grade encryption and never share
                your data with third parties. Your NFC scan data and analytics
                are processed securely and stored with full privacy protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
