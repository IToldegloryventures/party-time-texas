export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-base text-gray-400">Cosmic Portals Multi-Tenant NFC & Engagement Platform</p>
          <p className="mt-3 text-sm text-gray-500">Six-layer distributed architecture supporting enterprise-grade campaign automation, real-time analytics, and white-label SaaS delivery.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Layer 1: Presentation Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 1: Presentation Layer</h2>
            <p className="mt-2 text-base text-gray-400">Client applications and user interfaces</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Web Applications · Mobile Applications · External Interfaces</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {/* Web Applications */}
            <div className="group rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 transition-all hover:border-blue-700/80 hover:bg-blue-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-blue-300">Web Applications</h3>
              <p className="text-sm text-gray-300">Next.js 15, React 19, TypeScript, Tailwind CSS</p>
              <p className="mt-3 text-xs text-gray-400">Admin Dashboard, Super Admin Panel, Organization Management</p>
            </div>

            {/* Mobile Applications */}
            <div className="group rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 transition-all hover:border-cyan-700/80 hover:bg-cyan-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-cyan-300">Mobile Applications</h3>
              <p className="text-sm text-gray-300">React Native, Expo Framework</p>
              <p className="mt-3 text-xs text-gray-400">Client App, Customer App, Real-time Interactions</p>
            </div>

            {/* External Interfaces */}
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 transition-all hover:border-purple-700/80 hover:bg-purple-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-purple-300">External Interfaces</h3>
              <p className="text-sm text-gray-300">NFC Scan Interface, Landing Page Redirects</p>
              <p className="mt-3 text-xs text-gray-400">UTM Tracking, White-label Domains, CNAME Routing</p>
            </div>
          </div>
        </div>

        {/* Layer 2: API Gateway Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 2: API Gateway Layer</h2>
            <p className="mt-2 text-base text-gray-400">Request routing, authentication, and rate limiting</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">API Gateway · Authentication Service</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-center">
            {/* API Gateway */}
            <div className="group rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6 transition-all hover:border-amber-700/80 hover:bg-amber-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-amber-300">API Gateway</h3>
              <p className="text-sm text-gray-300">Vercel Edge Functions</p>
              <p className="mt-3 text-xs text-gray-400">Rate Limiting, Authentication, Request Routing, Geo-routing</p>
            </div>

            {/* Authentication Service */}
            <div className="group rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 transition-all hover:border-green-700/80 hover:bg-green-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-green-300">Authentication Service</h3>
              <p className="text-sm text-gray-300">Clerk Authentication</p>
              <p className="mt-3 text-xs text-gray-400">Multi-tenant Orgs, 5-Tier Role System, SSO, MFA, JWT Tokens</p>
            </div>
          </div>
        </div>

        {/* Layer 3: Application Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 3: Application Layer</h2>
            <p className="mt-2 text-base text-gray-400">Core business services and integrations</p>
          </div>

          {/* Core Business Services */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Core Business Services</h3>
            <p className="mb-8 text-center text-sm text-gray-500">User Management · Organization · Role & Permissions · Event Management · NFC Devices · Landing Pages</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Management Service */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">User Management Service</h4>
                <p className="text-xs text-gray-400">User profiles, account management, team management, permission enforcement</p>
              </div>

              {/* Organization Service */}
              <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-indigo-300">Organization Service</h4>
                <p className="text-xs text-gray-400">Organization creation, billing, settings, multi-tenant isolation</p>
              </div>

              {/* Role & Permission Service */}
              <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-violet-300">Role & Permission Service</h4>
                <p className="text-xs text-gray-400">5-tier role management, permission matrix, access control</p>
              </div>

              {/* Event Management Service */}
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">Event Management Service</h4>
                <p className="text-xs text-gray-400">Event creation, attendee tracking, check-in management, scheduling</p>
              </div>

              {/* NFC Device Service */}
              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-300">NFC Device Service</h4>
                <p className="text-xs text-gray-400">Device registration, provisioning, monitoring, hardware management</p>
              </div>

              {/* Landing Page Service */}
              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-300">Landing Page Service</h4>
                <p className="text-xs text-gray-400">Page builder, template engine, visual composer, A/B testing, analytics</p>
              </div>
            </div>
          </div>

          {/* Integration Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Integration Services</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Payment Processing · Social Media · AI & Content · Geolocation · CRM · Communications</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Payment Service */}
              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300">Payment Service</h4>
                <p className="text-xs text-gray-400">Stripe integration, billing engine, subscription management, webhooks</p>
              </div>

              {/* Social Scheduler Service */}
              <div className="rounded-xl border border-sky-900/50 bg-gradient-to-br from-sky-950/50 to-sky-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-sky-300">Social Scheduler Service</h4>
                <p className="text-xs text-gray-400">Metricool integration, campaign management, content scheduling, white-label social</p>
              </div>

              {/* AI Service */}
              <div className="rounded-xl border border-fuchsia-900/50 bg-gradient-to-br from-fuchsia-950/50 to-fuchsia-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-fuchsia-300">AI Service</h4>
                <p className="text-xs text-gray-400">Grok AI integration, content generation, predictive analytics, insights</p>
              </div>

              {/* Geolocation Service */}
              <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-rose-300">Geolocation Service</h4>
                <p className="text-xs text-gray-400">Location services, regional analytics, cross-marketing intelligence</p>
              </div>

              {/* CRM Integration Service */}
              <div className="rounded-xl border border-lime-900/50 bg-gradient-to-br from-lime-950/50 to-lime-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-lime-300">CRM Integration Service</h4>
                <p className="text-xs text-gray-400">Salesforce/HubSpot integration, customer data sync, lead management</p>
              </div>

              {/* Communication Services */}
              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-yellow-300">Communication Services</h4>
                <p className="text-xs text-gray-400">Email (SendGrid/Resend), SMS (Twilio/MessageBird), notifications, OTP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Domain Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 4: Domain Layer</h2>
            <p className="mt-2 text-base text-gray-400">Business entities and domain logic</p>
          </div>

          {/* Domain Models */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Domain Models</h3>
            <p className="mb-8 text-center text-sm text-gray-500">User Domain · Organization Domain · Event Domain · NFC Domain · Landing Page Domain · Analytics Domain</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Domain */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">User Domain</h4>
                <p className="text-xs text-gray-400">User entity, roles, permissions, team membership</p>
              </div>

              {/* Organization Domain */}
              <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-indigo-300">Organization Domain</h4>
                <p className="text-xs text-gray-400">Organization entity, settings, billing, configuration</p>
              </div>

              {/* Event Domain */}
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">Event Domain</h4>
                <p className="text-xs text-gray-400">Event entity, attendee, check-in, scheduling rules</p>
              </div>

              {/* NFC Domain */}
              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-300">NFC Device Domain</h4>
                <p className="text-xs text-gray-400">Device entity, scan entity, hardware specifications</p>
              </div>

              {/* Landing Page Domain */}
              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-300">Landing Page Domain</h4>
                <p className="text-xs text-gray-400">Page entity, template, configuration, content</p>
              </div>

              {/* Analytics Domain */}
              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300">Analytics Domain</h4>
                <p className="text-xs text-gray-400">Analytics entity, metrics, reports, insights</p>
              </div>
            </div>
          </div>

          {/* Business Rules Engine */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Business Rules Engine</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Validation Logic · Workflow Engine · Business Rules</p>

            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-red-300">Business Rules Engine</h4>
                <p className="text-xs text-gray-400">Event-driven rules, validation logic, workflow orchestration, trigger management, automation rules</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 5: Data Access Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 5: Data Access Layer</h2>
            <p className="mt-2 text-base text-gray-400">Repository pattern and data services</p>
          </div>

          {/* Repository Pattern */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Repository Pattern</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Data access abstraction for all domains</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Repository */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">User Repository</h4>
                <p className="text-xs text-gray-400">CRUD operations, queries, user data access</p>
              </div>

              {/* Organization Repository */}
              <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-indigo-300">Organization Repository</h4>
                <p className="text-xs text-gray-400">Organization queries, settings, configuration access</p>
              </div>

              {/* Event Repository */}
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">Event Repository</h4>
                <p className="text-xs text-gray-400">Event queries, attendee access, check-in data</p>
              </div>

              {/* NFC Repository */}
              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-300">NFC Repository</h4>
                <p className="text-xs text-gray-400">Device queries, scan history, hardware data</p>
              </div>

              {/* Landing Page Repository */}
              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-300">Landing Page Repository</h4>
                <p className="text-xs text-gray-400">Page queries, template access, content retrieval</p>
              </div>

              {/* Analytics Repository */}
              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300">Analytics Repository</h4>
                <p className="text-xs text-gray-400">Analytics queries, metrics, insights data</p>
              </div>
            </div>
          </div>

          {/* Data Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Data Services</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Caching, Search, and Query Optimization</p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-center">
              {/* Cache Layer */}
              <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-purple-300">Redis Cache</h4>
                <p className="text-xs text-gray-400">Session storage, query caching, performance optimization, real-time data</p>
              </div>

              {/* Search Service */}
              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-yellow-300">Search Service</h4>
                <p className="text-xs text-gray-400">Full-text search, content indexing, query optimization, Elasticsearch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 6: Infrastructure Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 6: Infrastructure Layer</h2>
            <p className="mt-2 text-base text-gray-400">Database, storage, external services, and platform services</p>
          </div>

          {/* Database Layer */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Database Layer</h3>

            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300">Supabase PostgreSQL</h4>
                <p className="text-xs text-gray-400 mb-3">Multi-tenant relational database with advanced security and real-time capabilities</p>
                <div className="text-xs text-gray-500">
                  <p>Row Level Security (RLS) · Real-time Subscriptions · Automated Backups</p>
                  <p className="mt-2">Encryption at Rest · Point-in-time Recovery · Disaster Recovery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Storage Layer */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Storage Layer</h3>

            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">Supabase Storage</h4>
                <p className="text-xs text-gray-400 mb-3">File management and content distribution with global CDN</p>
                <div className="text-xs text-gray-500">
                  <p>File Uploads · CDN Distribution · Asset Management · Optimization</p>
                </div>
              </div>
            </div>
          </div>

          {/* External Services */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">External Services</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Payment · AI · Social Media · CRM · Communications</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Stripe */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">Stripe API</h4>
                <p className="text-xs text-gray-400">Payment processing, subscription management, billing analytics, webhooks</p>
              </div>

              {/* Grok AI */}
              <div className="rounded-xl border border-fuchsia-900/50 bg-gradient-to-br from-fuchsia-950/50 to-fuchsia-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-fuchsia-300">Grok AI API</h4>
                <p className="text-xs text-gray-400">AI processing, content generation, predictive analytics, insights</p>
              </div>

              {/* Metricool */}
              <div className="rounded-xl border border-sky-900/50 bg-gradient-to-br from-sky-950/50 to-sky-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-sky-300">Metricool API</h4>
                <p className="text-xs text-gray-400">Social media management, white-label social, multi-platform posting</p>
              </div>

              {/* CRM Integration */}
              <div className="rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-green-300">CRM Systems</h4>
                <p className="text-xs text-gray-400">Salesforce, HubSpot, customer data sync, lead management</p>
              </div>

              {/* Email Services */}
              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-300">Email Services</h4>
                <p className="text-xs text-gray-400">SendGrid, Resend, transactional + marketing, template engine</p>
              </div>

              {/* SMS Services */}
              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-300">SMS Services</h4>
                <p className="text-xs text-gray-400">Twilio, MessageBird, notifications, OTP, delivery tracking</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Infrastructure Services</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Hosting · Security · Monitoring · Logging</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center">
              {/* Vercel Platform */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">Vercel Platform</h4>
                <p className="text-xs text-gray-400 mb-2">Serverless hosting, edge computing, CDN, CI/CD pipeline</p>
              </div>

              {/* Cloudflare Security */}
              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-yellow-300">Cloudflare Security</h4>
                <p className="text-xs text-gray-400 mb-2">DNS management, DDoS protection, WAF, security rules</p>
              </div>

              {/* System Monitoring */}
              <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-violet-300">System Monitoring</h4>
                <p className="text-xs text-gray-400 mb-2">Uptime tracking, performance metrics, alerting system</p>
              </div>

              {/* Log Aggregation */}
              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-red-300">Log Aggregation</h4>
                <p className="text-xs text-gray-400 mb-2">Error tracking, audit logs, performance analysis</p>
              </div>
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
