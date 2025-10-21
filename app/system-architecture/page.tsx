export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-base text-gray-400">Cosmic Portals Complete Enterprise Platform</p>
          <p className="mt-3 text-sm text-gray-500">Enterprise-grade distributed architecture with comprehensive layering, security, and scalability.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Layer 1: Presentation Layer - Light Blue */}
        <div className="mb-40 rounded-2xl border-4 border-blue-400/40 bg-gradient-to-br from-blue-500/5 to-blue-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Presentation Layer</h2>
            <p className="mt-2 text-base text-gray-300">Client applications and user interfaces</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 justify-center">
            {/* Web Applications */}
            <div className="group rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 transition-all hover:border-blue-400/80 hover:bg-blue-500/20 text-center">
              <h3 className="mb-1 text-lg font-semibold text-blue-400">Web Applications</h3>
              <p className="text-sm text-gray-300">Next.js 15, React 19, TypeScript, Tailwind CSS</p>
              <p className="mt-3 text-xs text-gray-400">Admin Dashboard, Super Admin Panel, Organization Management</p>
            </div>

            {/* Mobile Applications */}
            <div className="group rounded-xl border-2 border-cyan-500/60 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 p-6 transition-all hover:border-cyan-400/80 hover:bg-cyan-500/20 text-center">
              <h3 className="mb-1 text-lg font-semibold text-cyan-400">Mobile Applications</h3>
              <p className="text-sm text-gray-300">React Native Mobile Apps (Client App + Customer App)</p>
              <p className="mt-3 text-xs text-gray-400">Expo Framework</p>
            </div>

            {/* External Interfaces */}
            <div className="group rounded-xl border-2 border-purple-500/60 bg-gradient-to-br from-purple-500/15 to-purple-600/10 p-6 transition-all hover:border-purple-400/80 hover:bg-purple-500/20 text-center">
              <h3 className="mb-1 text-lg font-semibold text-purple-400">External Interfaces</h3>
              <p className="text-sm text-gray-300">NFC Scan Interface, Landing Page Redirects</p>
              <p className="mt-3 text-xs text-gray-400">UTM Tracking, White-label Domains, CNAME Routing</p>
            </div>
          </div>
        </div>

        {/* Layer 2: API Gateway Layer - Orange */}
        <div className="mb-40 rounded-2xl border-4 border-orange-400/40 bg-gradient-to-br from-orange-500/5 to-orange-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">API Gateway Layer</h2>
            <p className="mt-2 text-base text-gray-300">Request routing, authentication, and security enforcement</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 justify-center">
            {/* API Gateway */}
            <div className="group rounded-xl border-2 border-violet-500/60 bg-gradient-to-br from-violet-500/15 to-violet-600/10 p-6 transition-all hover:border-violet-400/80 hover:bg-violet-500/20 text-center">
              <h3 className="mb-1 text-lg font-semibold text-violet-400">API Gateway</h3>
              <p className="text-sm text-gray-300">Vercel Edge Functions</p>
              <p className="mt-3 text-xs text-gray-400">Request routing, rate limiting, authentication, request distribution, request logging</p>
            </div>

            {/* Authentication Service */}
            <div className="group rounded-xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 p-6 transition-all hover:border-emerald-400/80 hover:bg-emerald-500/20 text-center">
              <h3 className="mb-1 text-lg font-semibold text-emerald-400">Authentication Service</h3>
              <p className="text-sm text-gray-300">Clerk Authentication</p>
              <p className="mt-3 text-xs text-gray-400">Multi-tenant Orgs, 5-Tier Roles, SSO, MFA, JWT Tokens</p>
            </div>
          </div>
        </div>

        {/* Layer 3: Application Layer - Purple */}
        <div className="mb-40 rounded-2xl border-4 border-purple-400/40 bg-gradient-to-br from-purple-500/5 to-purple-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Application Layer</h2>
            <p className="mt-2 text-base text-gray-300">Core business services and integrations</p>
          </div>

          {/* Core Business Services */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Core Business Services</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Management Service */}
              <div className="rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-400">User Management Service</h4>
                <p className="text-xs text-gray-400">User profiles, account management, team management</p>
              </div>

              {/* Organization Service */}
              <div className="rounded-xl border-2 border-indigo-500/60 bg-gradient-to-br from-indigo-500/15 to-indigo-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-indigo-400">Organization Service</h4>
                <p className="text-xs text-gray-400">Organization creation, billing, settings, multi-tenant isolation</p>
              </div>

              {/* Role & Permission Service */}
              <div className="rounded-xl border-2 border-violet-500/60 bg-gradient-to-br from-violet-500/15 to-violet-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-violet-400">Role & Permission Service</h4>
                <p className="text-xs text-gray-400">5-tier role management, permission matrix, access control</p>
              </div>

              {/* Event Management Service */}
              <div className="rounded-xl border-2 border-cyan-500/60 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-400">Event Management Service</h4>
                <p className="text-xs text-gray-400">Event creation, attendee tracking, check-in management</p>
              </div>

              {/* NFC Device Service */}
              <div className="rounded-xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/15 to-orange-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-400">NFC Device Service</h4>
                <p className="text-xs text-gray-400">Device registration, provisioning, monitoring, hardware store management</p>
              </div>

              {/* Landing Page Service */}
              <div className="rounded-xl border-2 border-pink-500/60 bg-gradient-to-br from-pink-500/15 to-pink-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-400">Landing Page Service</h4>
                <p className="text-xs text-gray-400">Page builder, template engine, visual composer, analytics</p>
              </div>
            </div>
          </div>

          {/* Integration Services */}
          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Integration Services</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center">
              {/* Payment Service */}
              <div className="rounded-xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-400">Payment Service</h4>
                <p className="text-xs text-gray-400">Stripe integration, billing engine, subscription management, webhooks</p>
              </div>

              {/* AI Service */}
              <div className="rounded-xl border-2 border-fuchsia-500/60 bg-gradient-to-br from-fuchsia-500/15 to-fuchsia-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-fuchsia-400">AI Service</h4>
                <p className="text-xs text-gray-400">Grok AI API, content generation, insights</p>
              </div>

              {/* Social Media Service */}
              <div className="rounded-xl border-2 border-sky-500/60 bg-gradient-to-br from-sky-500/15 to-sky-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-sky-400">Social Media Service</h4>
                <p className="text-xs text-gray-400">Metricool API, white-label social, multi-platform posting</p>
              </div>

              {/* Email Services */}
              <div className="rounded-xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/15 to-orange-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-400">Email Services</h4>
                <p className="text-xs text-gray-400">SendGrid, Resend, transactional + marketing, template engine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Domain Layer - Green */}
        <div className="mb-40 rounded-2xl border-4 border-green-400/40 bg-gradient-to-br from-green-500/5 to-green-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Domain Layer</h2>
            <p className="mt-2 text-base text-gray-300">Business entities and domain logic</p>
          </div>

          {/* Domain Models */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Domain Models</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Domain */}
              <div className="rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-400">User Domain</h4>
                <p className="text-xs text-gray-400">User entity, roles, permissions, team membership</p>
              </div>

              {/* Organization Domain */}
              <div className="rounded-xl border-2 border-indigo-500/60 bg-gradient-to-br from-indigo-500/15 to-indigo-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-indigo-400">Organization Domain</h4>
                <p className="text-xs text-gray-400">Organization entity, settings, billing, configuration</p>
              </div>

              {/* Event Domain */}
              <div className="rounded-xl border-2 border-cyan-500/60 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-400">Event Domain</h4>
                <p className="text-xs text-gray-400">Event entity, attendee, check-in, scheduling rules</p>
              </div>

              {/* NFC Device Domain */}
              <div className="rounded-xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/15 to-orange-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-400">NFC Device Domain</h4>
                <p className="text-xs text-gray-400">Device entity, scan entity, hardware specifications</p>
              </div>

              {/* Landing Page Domain */}
              <div className="rounded-xl border-2 border-pink-500/60 bg-gradient-to-br from-pink-500/15 to-pink-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-400">Landing Page Domain</h4>
                <p className="text-xs text-gray-400">Page entity, template, configuration, content</p>
              </div>

              {/* Analytics Domain */}
              <div className="rounded-xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-400">Analytics Domain</h4>
                <p className="text-xs text-gray-400">Analytics entity, metrics, reports, insights</p>
              </div>
            </div>
          </div>

          {/* Business Rules Engine */}
          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Business Rules Engine</h3>
            </div>

            <div className="rounded-xl border-2 border-purple-500/60 bg-gradient-to-br from-purple-500/15 to-purple-600/10 p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Event-Driven Rules */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-purple-400">Event-Driven Rules</h4>
                  <div className="text-xs text-gray-400 space-y-2">
                    <p>• NFC scan automation</p>
                    <p>• Event check-in processing</p>
                    <p>• Payment and billing triggers</p>
                    <p>• User role enforcement</p>
                    <p>• Geo-location content delivery</p>
                  </div>
                </div>

                {/* Validation Logic */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-orange-400">Validation Logic</h4>
                  <div className="text-xs text-gray-400 space-y-2">
                    <p>• Data sanitization and format validation</p>
                    <p>• Permission and access control</p>
                    <p>• Plan limit enforcement</p>
                    <p>• Event capacity and constraints</p>
                    <p>• NFC device authentication</p>
                  </div>
                </div>

                {/* Workflow Orchestration */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-amber-400">Workflow Orchestration</h4>
                  <div className="text-xs text-gray-400 space-y-2">
                    <p>• User onboarding flows</p>
                    <p>• Event management pipelines</p>
                    <p>• NFC campaign workflows</p>
                    <p>• Payment processing chains</p>
                    <p>• Content publishing workflows</p>
                  </div>
                </div>

                {/* Trigger Management */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-violet-400">Trigger Management</h4>
                  <div className="text-xs text-gray-400 space-y-2">
                    <p>• Time-based scheduling</p>
                    <p>• Event-driven automation</p>
                    <p>• Condition-based responses</p>
                    <p>• External webhook integration</p>
                  </div>
                </div>

                {/* Automation Rules */}
                <div className="md:col-span-2 lg:col-span-2">
                  <h4 className="mb-3 text-sm font-semibold text-pink-400">Automation Rules</h4>
                  <div className="text-xs text-gray-400 space-y-2">
                    <p>• Email sequence automation · SMS notification systems · Social media scheduling</p>
                    <p>• Analytics report generation · Integration data synchronization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 5: Data Access Layer - Yellow */}
        <div className="mb-40 rounded-2xl border-4 border-yellow-400/40 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Data Access Layer</h2>
            <p className="mt-2 text-base text-gray-300">Repository pattern and data services</p>
          </div>

          {/* Repository Pattern */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Repository Pattern</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Repository */}
              <div className="rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-400">User Repository</h4>
                <p className="text-xs text-gray-400">CRUD operations, queries, user data access</p>
              </div>

              {/* Organization Repository */}
              <div className="rounded-xl border-2 border-indigo-500/60 bg-gradient-to-br from-indigo-500/15 to-indigo-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-indigo-400">Organization Repository</h4>
                <p className="text-xs text-gray-400">Organization queries, settings, configuration access</p>
              </div>

              {/* Event Repository */}
              <div className="rounded-xl border-2 border-cyan-500/60 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-400">Event Repository</h4>
                <p className="text-xs text-gray-400">Event queries, attendee access, check-in data</p>
              </div>

              {/* NFC Repository */}
              <div className="rounded-xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/15 to-orange-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-400">NFC Repository</h4>
                <p className="text-xs text-gray-400">Device queries, scan history, hardware data</p>
              </div>

              {/* Landing Page Repository */}
              <div className="rounded-xl border-2 border-pink-500/60 bg-gradient-to-br from-pink-500/15 to-pink-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-400">Landing Page Repository</h4>
                <p className="text-xs text-gray-400">Page queries, template access, content retrieval</p>
              </div>

              {/* Analytics Repository */}
              <div className="rounded-xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-400">Analytics Repository</h4>
                <p className="text-xs text-gray-400">Analytics queries, metrics, insights data</p>
              </div>
            </div>
          </div>

          {/* Data Services */}
          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Data Services</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center">
              {/* Supabase Realtime */}
              <div className="rounded-xl border-2 border-purple-500/60 bg-gradient-to-br from-purple-500/15 to-purple-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-purple-400">Supabase Realtime</h4>
                <p className="text-xs text-gray-400">Real-time subscriptions, live data updates, real-time collaboration</p>
              </div>

              {/* Redis Cache */}
              <div className="rounded-xl border-2 border-red-500/60 bg-gradient-to-br from-red-500/15 to-red-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-red-400">Redis Cache</h4>
                <p className="text-xs text-gray-400">Session storage, query caching, performance optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 6: Infrastructure Layer - Light Green */}
        <div className="mb-40 rounded-2xl border-4 border-lime-400/40 bg-gradient-to-br from-lime-500/5 to-lime-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Infrastructure Layer</h2>
            <p className="mt-2 text-base text-gray-300">Database, storage, external services, and platform infrastructure</p>
          </div>

          {/* Database & Storage */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Database & Storage</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center">
              {/* Supabase PostgreSQL */}
              <div className="rounded-xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-400">Supabase PostgreSQL</h4>
                <p className="text-xs text-gray-400 mb-3">Multi-tenant data, row level security, real-time subscriptions</p>
              </div>

              {/* Supabase Storage */}
              <div className="rounded-xl border-2 border-cyan-500/60 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-400">Supabase Storage</h4>
                <p className="text-xs text-gray-400">File uploads, CDN distribution, asset management</p>
              </div>
            </div>
          </div>

          {/* External Services */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">External Services</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Stripe */}
              <div className="rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-400">Stripe API</h4>
                <p className="text-xs text-gray-400">Payment processing, subscription management, webhooks</p>
              </div>

              {/* Grok AI */}
              <div className="rounded-xl border-2 border-fuchsia-500/60 bg-gradient-to-br from-fuchsia-500/15 to-fuchsia-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-fuchsia-400">Grok AI API</h4>
                <p className="text-xs text-gray-400">AI processing, content generation, insights</p>
              </div>

              {/* Metricool */}
              <div className="rounded-xl border-2 border-sky-500/60 bg-gradient-to-br from-sky-500/15 to-sky-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-sky-400">Metricool API</h4>
                <p className="text-xs text-gray-400">Social media management, white-label social, multi-platform posting</p>
              </div>

              {/* Email Services */}
              <div className="rounded-xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/15 to-orange-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-orange-400">Email Services</h4>
                <p className="text-xs text-gray-400">SendGrid, Resend, transactional + marketing, template engine</p>
              </div>

              {/* SMS Services */}
              <div className="rounded-xl border-2 border-pink-500/60 bg-gradient-to-br from-pink-500/15 to-pink-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-400">SMS Services</h4>
                <p className="text-xs text-gray-400">Twilio, MessageBird, notifications, OTP, delivery tracking</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Services */}
          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Infrastructure Services</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Vercel Platform */}
              <div className="rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-400">Vercel Platform</h4>
                <p className="text-xs text-gray-400">Serverless hosting, edge computing, CI/CD pipeline</p>
              </div>

              {/* Cloudflare */}
              <div className="rounded-xl border-2 border-yellow-500/60 bg-gradient-to-br from-yellow-500/15 to-yellow-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-yellow-400">Cloudflare</h4>
                <p className="text-xs text-gray-400">DNS management, DDoS protection, WAF, security</p>
              </div>

              {/* System Monitoring */}
              <div className="rounded-xl border-2 border-violet-500/60 bg-gradient-to-br from-violet-500/15 to-violet-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-violet-400">System Monitoring</h4>
                <p className="text-xs text-gray-400">Uptime tracking, performance metrics, alerting system</p>
              </div>

              {/* Log Aggregation */}
              <div className="rounded-xl border-2 border-red-500/60 bg-gradient-to-br from-red-500/15 to-red-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-red-400">Log Aggregation</h4>
                <p className="text-xs text-gray-400">Error tracking, audit logs, performance analysis</p>
              </div>

              {/* Basic Security Services */}
              <div className="rounded-xl border-2 border-pink-500/60 bg-gradient-to-br from-pink-500/15 to-pink-600/10 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-400">Basic Security Services</h4>
                <p className="text-xs text-gray-400">Access auditing, basic security monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 7: Security & Compliance Layer - Pink */}
        <div className="mb-40 rounded-2xl border-4 border-pink-400/40 bg-gradient-to-br from-pink-500/5 to-pink-600/5 p-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Security & Compliance Layer</h2>
            <p className="mt-2 text-base text-gray-300">Authentication, authorization, data protection, and basic security</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {/* Authentication Services */}
            <div className="rounded-xl border-2 border-amber-500/60 bg-gradient-to-br from-amber-500/15 to-amber-600/10 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-amber-400">Authentication Services</h4>
              <p className="text-xs text-gray-400">Multi-factor auth, SSO integration, audit logs</p>
            </div>

            {/* Authorization Services */}
            <div className="rounded-xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-emerald-400">Authorization Services</h4>
              <p className="text-xs text-gray-400">Row Level Security, role-based access, permission matrix</p>
            </div>

            {/* Data Protection */}
            <div className="rounded-xl border-2 border-violet-500/60 bg-gradient-to-br from-violet-500/15 to-violet-600/10 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-violet-400">Data Protection</h4>
              <p className="text-xs text-gray-400">Encryption at rest + in transit, key management, backup encryption</p>
            </div>

            {/* Basic Security Framework */}
            <div className="rounded-xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/15 to-blue-600/10 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-blue-400">Basic Security Framework</h4>
              <p className="text-xs text-gray-400">Access auditing, basic security monitoring</p>
            </div>

            {/* Audit & Monitoring */}
            <div className="rounded-xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/15 to-orange-600/10 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-orange-400">Audit & Monitoring</h4>
              <p className="text-xs text-gray-400">Activity tracking, access auditing, basic security reports</p>
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
