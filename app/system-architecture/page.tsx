export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-base text-gray-400">Cosmic Portals Multi-Tenant NFC & Engagement Platform</p>
          <p className="mt-3 text-sm text-gray-500">Five-layer distributed architecture supporting enterprise-grade campaign automation, real-time analytics, and white-label SaaS delivery.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Layer 1: Client Layer */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Client Layer</h2>
            <p className="mt-2 text-base text-gray-400">Front-end access points with unified authentication</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Web Dashboard · Mobile Apps · White-Label Domains · Clerk Authentication & RBAC</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
            {/* Web Dashboard */}
            <div className="group rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 transition-all hover:border-blue-700/80 hover:bg-blue-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-blue-300">Web Dashboard</h3>
              <p className="text-sm text-gray-300">Next.js 15, React 19, Tailwind CSS</p>
              <p className="mt-3 text-xs text-gray-400">Device & campaign UI, analytics view, launcher modules</p>
            </div>

            {/* Mobile Apps */}
            <div className="group rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 transition-all hover:border-cyan-700/80 hover:bg-cyan-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-cyan-300">Mobile Apps</h3>
              <p className="text-sm text-gray-300">PWA or native shell (iOS/Android)</p>
              <p className="mt-3 text-xs text-gray-400">React Native/Expo, WebSockets, real-time interactions</p>
            </div>

            {/* White-Label */}
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 transition-all hover:border-purple-700/80 hover:bg-purple-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-purple-300">White-Label Domains</h3>
              <p className="text-sm text-gray-300">CNAME per tenant, custom routing</p>
              <p className="mt-3 text-xs text-gray-400">Cloudflare/AWS Route 53, CSS overrides, branding</p>
            </div>

            {/* Authentication */}
            <div className="group rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 transition-all hover:border-green-700/80 hover:bg-green-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-green-300">Authentication & RBAC</h3>
              <p className="text-sm text-gray-300">Clerk.dev SSO/MFA + NextAuth.js</p>
              <p className="mt-3 text-xs text-gray-400">5-tier roles, tenant-aware routing, JWT tokens</p>
            </div>
          </div>
        </div>

        {/* Layer 2: API & Business Logic */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">API & Business Logic Layer</h2>
            <p className="mt-2 text-base text-gray-400">Microservices and core orchestration</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">API Gateway · NFC Device Manager · Campaign & Content Module · Trigger Engine · Job Orchestration</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
            {/* API Gateway */}
            <div className="group rounded-xl border border-slate-900/50 bg-gradient-to-br from-slate-950/50 to-slate-900/20 p-6 transition-all hover:border-slate-700/80 hover:bg-slate-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-slate-300">API Gateway / BFF</h3>
              <p className="text-sm text-gray-300">Node.js / NestJS / Fastify</p>
              <p className="mt-3 text-xs text-gray-400">Tenant context, role enforcement, request routing</p>
            </div>

            {/* NFC Device Manager */}
            <div className="group rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 transition-all hover:border-orange-700/80 hover:bg-orange-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-orange-300">NFC Device Manager</h3>
              <p className="text-sm text-gray-300">Registration, provisioning, monitoring</p>
              <p className="mt-3 text-xs text-gray-400">Device pool mgmt, status tracking, Kafka events</p>
            </div>

            {/* Campaign & Content Module */}
            <div className="group rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 transition-all hover:border-pink-700/80 hover:bg-pink-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-pink-300">Campaign & Content Module</h3>
              <p className="text-sm text-gray-300">CMS-style interface, scheduling</p>
              <p className="mt-3 text-xs text-gray-400">Social/email API integration, template engine</p>
            </div>

            {/* Trigger & Automation Engine */}
            <div className="group rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 transition-all hover:border-red-700/80 hover:bg-red-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-red-300">Trigger & Automation Engine</h3>
              <p className="text-sm text-gray-300">Event-driven rules and workflows</p>
              <p className="mt-3 text-xs text-gray-400">Scan triggers, time rules, CRM/API actions</p>
            </div>

            {/* Job Queue */}
            <div className="group rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6 transition-all hover:border-violet-700/80 hover:bg-violet-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-violet-300">Job Queue / Orchestration</h3>
              <p className="text-sm text-gray-300">BullMQ / AWS SQS + Step Functions</p>
              <p className="mt-3 text-xs text-gray-400">Delayed jobs, retries, workflow chaining</p>
            </div>

            {/* Microservices */}
            <div className="group rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 transition-all hover:border-indigo-700/80 hover:bg-indigo-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-indigo-300">Microservices</h3>
              <p className="text-sm text-gray-300">Modular, serverless-ready</p>
              <p className="mt-3 text-xs text-gray-400">AWS Lambda, Vercel Functions, Docker</p>
            </div>

            {/* Landing Page Builder */}
            <div className="group rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 transition-all hover:border-yellow-700/80 hover:bg-yellow-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-yellow-300">Landing Page Builder</h3>
              <p className="text-sm text-gray-300">Headless CMS, templates</p>
              <p className="mt-3 text-xs text-gray-400">Visual composer, publish logic, A/B testing</p>
            </div>
          </div>
        </div>

        {/* Layer 3: Analytics & Intelligence */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Analytics & Intelligence Engine</h2>
            <p className="mt-2 text-base text-gray-400">Real-time ingestion, streaming, and ML-powered insights</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Event Ingestion · Streaming/Batch Processing · Data Warehouse · BI Layer · ML/Prediction</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 justify-center">
            {/* Event Ingestion */}
            <div className="rounded-xl border border-sky-900/50 bg-gradient-to-br from-sky-950/50 to-sky-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-sky-300 text-center">Event Ingestion</h3>
              <p className="text-xs text-gray-400 text-center">WebSocket/Pub-Sub, real-time feed processing</p>
            </div>

            {/* Streaming Processing */}
            <div className="rounded-xl border border-fuchsia-900/50 bg-gradient-to-br from-fuchsia-950/50 to-fuchsia-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-fuchsia-300 text-center">Streaming/Batch</h3>
              <p className="text-xs text-gray-400 text-center">Kafka, Kinesis, Flink, Spark Streaming</p>
            </div>

            {/* Data Warehouse */}
            <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-rose-300 text-center">Data Warehouse</h3>
              <p className="text-xs text-gray-400 text-center">Snowflake, BigQuery, Redshift</p>
            </div>

            {/* BI Layer */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-orange-300 text-center">BI Layer</h3>
              <p className="text-xs text-gray-400 text-center">Metabase, Superset, Looker, custom React</p>
            </div>

            {/* ML/Prediction */}
            <div className="rounded-xl border border-lime-900/50 bg-gradient-to-br from-lime-950/50 to-lime-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-lime-300 text-center">ML/Prediction</h3>
              <p className="text-xs text-gray-400 text-center">Flask/FastAPI, AWS SageMaker</p>
            </div>
          </div>
        </div>

        {/* Layer 4: Data & Security */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Data & Security Layer</h2>
            <p className="mt-2 text-base text-gray-400">Multi-tenant database with enterprise-grade protection</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Supabase PostgreSQL · Cache/Realtime · Authentication/IAM · Encryption · External Services</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 justify-center">
            {/* Primary Database */}
            <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-emerald-300 text-center">Primary Database</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Supabase PostgreSQL + RLS</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p><code className="text-emerald-200">organizations</code></p>
                <p><code className="text-emerald-200">users</code></p>
                <p><code className="text-emerald-200">nfc_devices</code></p>
                <p><code className="text-emerald-200">nfc_scans</code></p>
                <p><code className="text-emerald-200">campaigns</code></p>
                <p><code className="text-emerald-200">landing_pages</code></p>
              </div>
            </div>

            {/* Cache & Realtime */}
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-cyan-300 text-center">Cache & Realtime</h3>
              <p className="text-xs text-gray-400 text-center">Redis or Memcached</p>
              <p className="text-xs text-gray-500 text-center mt-2">Live metrics, device status, session data</p>
            </div>

            {/* Authentication & IAM */}
            <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-teal-300 text-center">Authentication & IAM</h3>
              <p className="text-xs text-gray-400 text-center">JWT, OAuth2, token storage</p>
              <p className="text-xs text-gray-500 text-center mt-2">Secure credential handling</p>
            </div>

            {/* Encryption & Compliance */}
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-blue-300 text-center">Encryption & Compliance</h3>
              <p className="text-xs text-gray-400 text-center">AES-256 at rest, TLS in transit</p>
              <p className="text-xs text-gray-500 text-center mt-2">GDPR, SOC2 alignment</p>
            </div>

            {/* External Services */}
            <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-amber-300 text-center">External Services</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Stripe, Social APIs, Email, Realtime</p>
              <p className="text-xs text-gray-500">Meta, TikTok, SendGrid, Twilio</p>
            </div>
          </div>
        </div>

        {/* Layer 5: Revenue Streams */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white">Revenue Streams & Monetization</h2>
            <p className="mt-2 text-base text-gray-400">Tiered pricing, feature gates, and usage tracking</p>
            <p className="mt-4 text-sm text-gray-500">Platform Subscriptions · White-Label Enterprise · Usage-Based Revenue · Advanced Analytics</p>
          </div>

          {/* Primary Revenue Streams */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 justify-center">
            {/* Platform Subscription */}
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-blue-300 text-center">Platform Subscription</h3>
              <p className="text-xs text-gray-400 text-center">Monthly/annual billing via Stripe</p>
              <p className="text-xs text-gray-500 text-center mt-2">Feature flags, tenant provisioning, multi-tier pricing</p>
            </div>

            {/* White-Label Enterprise */}
            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
              <h3 className="mb-2 text-sm font-semibold text-purple-300 text-center">White-Label Enterprise</h3>
              <p className="text-xs text-gray-400 text-center">Custom domain provisioning</p>
              <p className="text-xs text-gray-500 text-center mt-2">Branding service, CSS overrides, premium support</p>
            </div>

            {/* Campaign Automation */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293-1.293a1 1 0 011.414 0L9 7.586l2.293-2.293a1 1 0 111.414 1.414L10.414 9l2.293 2.293a1 1 0 01-1.414 1.414L9 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L7.586 9 5.293 6.707a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-orange-300 text-center">Campaign Automation</h3>
              <p className="text-xs text-gray-400 text-center">Usage-based billing</p>
              <p className="text-xs text-gray-500 text-center mt-2">Per-post charges, drip campaigns, API throttling</p>
            </div>

            {/* Geo-Intelligence & Analytics */}
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-cyan-300 text-center">Geo-Intelligence Add-On</h3>
              <p className="text-xs text-gray-400 text-center">Premium analytics tier</p>
              <p className="text-xs text-gray-500 text-center mt-2">Region insights, heatmaps, predictive models</p>
            </div>

            {/* API Integration */}
            <div className="rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-green-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-green-300 text-center">API & Webhooks Tier</h3>
              <p className="text-xs text-gray-400 text-center">Per-request billing</p>
              <p className="text-xs text-gray-500 text-center mt-2">REST endpoints, webhook delivery, SDKs</p>
            </div>

            {/* Device Licensing */}
            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-red-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-red-300 text-center">Device Licensing</h3>
              <p className="text-xs text-gray-400 text-center">Per-device fees</p>
              <p className="text-xs text-gray-500 text-center mt-2">Provisioning, scan volume tracking, overage charges</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Demos
          </a>
        </div>
      </div>
    </div>
  );
}
