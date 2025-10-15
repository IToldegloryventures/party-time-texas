'use client';

import React from 'react';

const LandingExamples: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="bg-gradient-to-r from-sky-700 to-indigo-800 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-2 text-4xl font-semibold">Cosmic Portals – Landing Examples</h1>
          <p className="text-neutral-200">
            Sleek marketing sections you can reuse for demos and investor decks
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">
        {/* Hero Variant */}
        <section className="rounded-2xl bg-neutral-900 p-8 ring-1 ring-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Turn NFC taps into measurable outcomes</h2>
              <p className="mt-3 text-neutral-300">
                Launch branded experiences in minutes. Track scans, conversions, and engagement automatically.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
                  Start a Demo
                </button>
                <button className="rounded-lg border border-neutral-700 px-4 py-2 font-medium text-neutral-200 hover:bg-neutral-800">
                  View Docs
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">Monthly Scans</p>
                  <p className="mt-2 text-2xl font-semibold text-sky-400">2.1M</p>
                </div>
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">Avg. Conversion</p>
                  <p className="mt-2 text-2xl font-semibold text-emerald-400">8.4%</p>
                </div>
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">Active Orgs</p>
                  <p className="mt-2 text-2xl font-semibold text-indigo-400">2,847</p>
                </div>
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">SLA</p>
                  <p className="mt-2 text-2xl font-semibold text-purple-400">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="rounded-2xl bg-neutral-900 p-8 ring-1 ring-neutral-800">
          <h3 className="mb-6 text-center text-2xl font-semibold text-white">Everything you need to launch</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Landing Page Builder', desc: 'Drag-and-drop sections with brand presets.' },
              { title: 'Analytics', desc: 'Track scans, sessions, and ROI in real time.' },
              { title: 'Payments', desc: 'Stripe subscriptions with usage-based add-ons.' },
              { title: 'Teams', desc: 'Invite, assign roles, and manage access.' },
              { title: 'NFC Devices', desc: 'Provision, link, and monitor devices at scale.' },
              { title: 'Integrations', desc: 'Email/SMS/Push, webhooks, and third-party APIs.' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                <div className="mb-3 h-10 w-10 rounded-lg bg-neutral-800"></div>
                <h4 className="text-lg font-semibold text-white">{f.title}</h4>
                <p className="text-sm text-neutral-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 p-8 text-center text-white">
          <h3 className="text-2xl font-semibold">Ready to wow investors?</h3>
          <p className="mt-2 opacity-90">Use these sections to build pitch-ready demos in minutes.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="rounded-lg bg-white px-5 py-2 font-semibold text-indigo-700 hover:bg-neutral-100">
              Generate Demo Site
            </button>
            <button className="rounded-lg border border-white/40 px-5 py-2 font-semibold text-white hover:bg-white/10">
              Explore Templates
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingExamples;


