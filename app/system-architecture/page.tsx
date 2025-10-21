export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-3 text-5xl font-bold text-gray-900">System Architecture</h1>
          <p className="text-lg font-semibold text-blue-100">Cosmic Portals Complete Enterprise Platform</p>
          <p className="mt-3 text-base text-blue-100">Enterprise-grade distributed architecture with comprehensive layering, security, and scalability.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Layer 1: Presentation Layer - Light Blue */}
        <div className="mb-20 rounded-3xl border-3 border-blue-500/50 bg-gradient-to-br from-blue-950/40 to-blue-900/20 p-10 shadow-2xl shadow-blue-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-blue-300 mb-2">Presentation Layer</h2>
            <p className="text-base text-gray-400">Client applications and user interfaces</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center">
            {/* Web Applications */}
            <div className="group rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-7 transition-all duration-300 hover:border-blue-400/70 hover:bg-blue-500/15 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="mb-2 text-lg font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">Web Applications</h3>
              <p className="text-sm text-gray-300">Next.js 15, React 19, TypeScript, Tailwind CSS</p>
              <p className="mt-4 text-xs text-gray-400">Admin Dashboard, Super Admin Panel, Organization Management</p>
            </div>

            {/* Mobile Applications */}
            <div className="group rounded-2xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 p-7 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/15 hover:shadow-xl hover:shadow-cyan-500/20">
              <h3 className="mb-2 text-lg font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">Mobile Applications</h3>
              <p className="text-sm text-gray-300">React Native Mobile Apps (Client App + Customer App)</p>
              <p className="mt-4 text-xs text-gray-400">Expo Framework</p>
            </div>

            {/* External Interfaces */}
            <div className="group rounded-2xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-7 transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/15 hover:shadow-xl hover:shadow-purple-500/20">
              <h3 className="mb-2 text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">External Interfaces</h3>
              <p className="text-sm text-gray-300">NFC Scan Interface, Landing Page Redirects</p>
              <p className="mt-4 text-xs text-gray-400">UTM Tracking, White-label Domains, CNAME Routing</p>
            </div>
          </div>
        </div>

        {/* Layer 2: API Gateway Layer - Orange */}
        <div className="mb-20 rounded-3xl border-3 border-orange-500/50 bg-gradient-to-br from-orange-950/40 to-orange-900/20 p-10 shadow-2xl shadow-orange-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-orange-300 mb-2">API Gateway Layer</h2>
            <p className="text-base text-gray-400">Request routing, authentication, and security enforcement</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center">
            {/* API Gateway */}
            <div className="group rounded-2xl border-2 border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-violet-600/5 p-7 transition-all duration-300 hover:border-violet-400/70 hover:bg-violet-500/15 hover:shadow-xl hover:shadow-violet-500/20">
              <h3 className="mb-2 text-lg font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">API Gateway</h3>
              <p className="text-sm text-gray-300">Vercel Edge Functions</p>
              <p className="mt-4 text-xs text-gray-400">Request routing, rate limiting, authentication, request distribution, request logging</p>
            </div>

            {/* Authentication Service */}
            <div className="group rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-7 transition-all duration-300 hover:border-emerald-400/70 hover:bg-emerald-500/15 hover:shadow-xl hover:shadow-emerald-500/20">
              <h3 className="mb-2 text-lg font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Authentication Service</h3>
              <p className="text-sm text-gray-300">Clerk Authentication</p>
              <p className="mt-4 text-xs text-gray-400">Multi-tenant Orgs, 5-Tier Roles, SSO, MFA, JWT Tokens</p>
            </div>
          </div>
        </div>

        {/* Layer 3: Application Layer - Purple */}
        <div className="mb-20 rounded-3xl border-3 border-purple-500/50 bg-gradient-to-br from-purple-950/40 to-purple-900/20 p-10 shadow-2xl shadow-purple-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-purple-300 mb-2">Application Layer</h2>
            <p className="text-base text-gray-400">Core business services and integrations</p>
          </div>

          {/* Core Business Services */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-purple-200 text-center mb-8">Core Business Services</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Management Service */}
              <div className="group rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-6 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/12 hover:shadow-lg hover:shadow-blue-500/15">
                <h4 className="mb-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">User Management Service</h4>
                <p className="text-xs text-gray-400">User profiles, account management, team management</p>
              </div>

              {/* Organization Service */}
              <div className="group rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-500/8 to-indigo-600/4 p-6 transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/12 hover:shadow-lg hover:shadow-indigo-500/15">
                <h4 className="mb-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">Organization Service</h4>
                <p className="text-xs text-gray-400">Organization creation, billing, settings, multi-tenant isolation</p>
              </div>

              {/* Role & Permission Service */}
              <div className="group rounded-2xl border-2 border-violet-500/40 bg-gradient-to-br from-violet-500/8 to-violet-600/4 p-6 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/12 hover:shadow-lg hover:shadow-violet-500/15">
                <h4 className="mb-2 text-sm font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">Role & Permission Service</h4>
                <p className="text-xs text-gray-400">5-tier role management, permission matrix, access control</p>
              </div>

              {/* Event Management Service */}
              <div className="group rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/8 to-cyan-600/4 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/12 hover:shadow-lg hover:shadow-cyan-500/15">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">Event Management Service</h4>
                <p className="text-xs text-gray-400">Event creation, attendee tracking, check-in management</p>
              </div>

              {/* NFC Device Service */}
              <div className="group rounded-2xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/8 to-orange-600/4 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/12 hover:shadow-lg hover:shadow-orange-500/15">
                <h4 className="mb-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">NFC Device Service</h4>
                <p className="text-xs text-gray-400">Device registration, provisioning, monitoring, hardware store management</p>
              </div>

              {/* Landing Page Service */}
              <div className="group rounded-2xl border-2 border-pink-500/40 bg-gradient-to-br from-pink-500/8 to-pink-600/4 p-6 transition-all duration-300 hover:border-pink-400/60 hover:bg-pink-500/12 hover:shadow-lg hover:shadow-pink-500/15">
                <h4 className="mb-2 text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors">Landing Page Service</h4>
                <p className="text-xs text-gray-400">Page builder, template engine, visual composer, analytics</p>
              </div>
            </div>
          </div>

          {/* Integration Services */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-200 text-center mb-8">Integration Services</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center">
              {/* Payment Service */}
              <div className="group rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-emerald-600/4 p-6 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/12 hover:shadow-lg hover:shadow-emerald-500/15">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Payment Service</h4>
                <p className="text-xs text-gray-400">Stripe integration, billing engine, subscription management, webhooks</p>
              </div>

              {/* AI Service */}
              <div className="group rounded-2xl border-2 border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-500/8 to-fuchsia-600/4 p-6 transition-all duration-300 hover:border-fuchsia-400/60 hover:bg-fuchsia-500/12 hover:shadow-lg hover:shadow-fuchsia-500/15">
                <h4 className="mb-2 text-sm font-semibold text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors">AI Service</h4>
                <p className="text-xs text-gray-400">Grok AI API, content generation, insights</p>
              </div>

              {/* Social Media Service */}
              <div className="group rounded-2xl border-2 border-sky-500/40 bg-gradient-to-br from-sky-500/8 to-sky-600/4 p-6 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-500/12 hover:shadow-lg hover:shadow-sky-500/15">
                <h4 className="mb-2 text-sm font-semibold text-sky-300 group-hover:text-sky-200 transition-colors">Social Media Service</h4>
                <p className="text-xs text-gray-400">Metricool API, white-label social, multi-platform posting</p>
              </div>

              {/* Email Services */}
              <div className="group rounded-2xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/8 to-orange-600/4 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/12 hover:shadow-lg hover:shadow-orange-500/15">
                <h4 className="mb-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">Email Services</h4>
                <p className="text-xs text-gray-400">SendGrid, Resend, transactional + marketing, template engine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Domain Layer - Green */}
        <div className="mb-20 rounded-3xl border-3 border-green-500/50 bg-gradient-to-br from-green-950/40 to-green-900/20 p-10 shadow-2xl shadow-green-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-green-300 mb-2">Domain Layer</h2>
            <p className="text-base text-gray-400">Business entities and domain logic</p>
          </div>

          {/* Domain Models */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-green-200 text-center mb-8">Domain Models</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Domain */}
              <div className="group rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-6 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/12 hover:shadow-lg hover:shadow-blue-500/15">
                <h4 className="mb-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">User Domain</h4>
                <p className="text-xs text-gray-400">User entity, roles, permissions, team membership</p>
              </div>

              {/* Organization Domain */}
              <div className="group rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-500/8 to-indigo-600/4 p-6 transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/12 hover:shadow-lg hover:shadow-indigo-500/15">
                <h4 className="mb-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">Organization Domain</h4>
                <p className="text-xs text-gray-400">Organization entity, settings, billing, configuration</p>
              </div>

              {/* Event Domain */}
              <div className="group rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/8 to-cyan-600/4 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/12 hover:shadow-lg hover:shadow-cyan-500/15">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">Event Domain</h4>
                <p className="text-xs text-gray-400">Event entity, attendee, check-in, scheduling rules</p>
              </div>

              {/* NFC Device Domain */}
              <div className="group rounded-2xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/8 to-orange-600/4 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/12 hover:shadow-lg hover:shadow-orange-500/15">
                <h4 className="mb-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">NFC Device Domain</h4>
                <p className="text-xs text-gray-400">Device entity, scan entity, hardware specifications</p>
              </div>

              {/* Landing Page Domain */}
              <div className="group rounded-2xl border-2 border-pink-500/40 bg-gradient-to-br from-pink-500/8 to-pink-600/4 p-6 transition-all duration-300 hover:border-pink-400/60 hover:bg-pink-500/12 hover:shadow-lg hover:shadow-pink-500/15">
                <h4 className="mb-2 text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors">Landing Page Domain</h4>
                <p className="text-xs text-gray-400">Page entity, template, configuration, content</p>
              </div>

              {/* Analytics Domain */}
              <div className="group rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-emerald-600/4 p-6 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/12 hover:shadow-lg hover:shadow-emerald-500/15">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Analytics Domain</h4>
                <p className="text-xs text-gray-400">Analytics entity, metrics, reports, insights</p>
              </div>
            </div>
          </div>

          {/* Business Rules Engine */}
          <div>
            <h3 className="text-2xl font-semibold text-green-200 text-center mb-8">Business Rules Engine</h3>

            <div className="rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/8 to-purple-600/4 p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Event-Driven Rules */}
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-purple-300">Event-Driven Rules</h4>
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
                  <h4 className="mb-4 text-sm font-semibold text-orange-300">Validation Logic</h4>
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
                  <h4 className="mb-4 text-sm font-semibold text-amber-300">Workflow Orchestration</h4>
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
                  <h4 className="mb-4 text-sm font-semibold text-violet-300">Trigger Management</h4>
                  <div className="text-xs text-gray-400 space-y-2">
                    <p>• Time-based scheduling</p>
                    <p>• Event-driven automation</p>
                    <p>• Condition-based responses</p>
                    <p>• External webhook integration</p>
                  </div>
                </div>

                {/* Automation Rules */}
                <div className="md:col-span-2 lg:col-span-2">
                  <h4 className="mb-4 text-sm font-semibold text-pink-300">Automation Rules</h4>
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
        <div className="mb-20 rounded-3xl border-3 border-yellow-500/50 bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 p-10 shadow-2xl shadow-yellow-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-yellow-300 mb-2">Data Access Layer</h2>
            <p className="text-base text-gray-400">Repository pattern and data services</p>
          </div>

          {/* Repository Pattern */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-yellow-200 text-center mb-8">Repository Pattern</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* User Repository */}
              <div className="group rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-6 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/12 hover:shadow-lg hover:shadow-blue-500/15">
                <h4 className="mb-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">User Repository</h4>
                <p className="text-xs text-gray-400">CRUD operations, queries, user data access</p>
              </div>

              {/* Organization Repository */}
              <div className="group rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-500/8 to-indigo-600/4 p-6 transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/12 hover:shadow-lg hover:shadow-indigo-500/15">
                <h4 className="mb-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">Organization Repository</h4>
                <p className="text-xs text-gray-400">Organization queries, settings, configuration access</p>
              </div>

              {/* Event Repository */}
              <div className="group rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/8 to-cyan-600/4 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/12 hover:shadow-lg hover:shadow-cyan-500/15">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">Event Repository</h4>
                <p className="text-xs text-gray-400">Event queries, attendee access, check-in data</p>
              </div>

              {/* NFC Repository */}
              <div className="group rounded-2xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/8 to-orange-600/4 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/12 hover:shadow-lg hover:shadow-orange-500/15">
                <h4 className="mb-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">NFC Repository</h4>
                <p className="text-xs text-gray-400">Device queries, scan history, hardware data</p>
              </div>

              {/* Landing Page Repository */}
              <div className="group rounded-2xl border-2 border-pink-500/40 bg-gradient-to-br from-pink-500/8 to-pink-600/4 p-6 transition-all duration-300 hover:border-pink-400/60 hover:bg-pink-500/12 hover:shadow-lg hover:shadow-pink-500/15">
                <h4 className="mb-2 text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors">Landing Page Repository</h4>
                <p className="text-xs text-gray-400">Page queries, template access, content retrieval</p>
              </div>

              {/* Analytics Repository */}
              <div className="group rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-emerald-600/4 p-6 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/12 hover:shadow-lg hover:shadow-emerald-500/15">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Analytics Repository</h4>
                <p className="text-xs text-gray-400">Analytics queries, metrics, insights data</p>
              </div>
            </div>
          </div>

          {/* Data Services */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-200 text-center mb-8">Data Services</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center">
              {/* Supabase Realtime */}
              <div className="group rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/8 to-purple-600/4 p-6 transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/12 hover:shadow-lg hover:shadow-purple-500/15">
                <h4 className="mb-2 text-sm font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">Supabase Realtime</h4>
                <p className="text-xs text-gray-400">Real-time subscriptions, live data updates, real-time collaboration</p>
              </div>

              {/* Redis Cache */}
              <div className="group rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-500/8 to-red-600/4 p-6 transition-all duration-300 hover:border-red-400/60 hover:bg-red-500/12 hover:shadow-lg hover:shadow-red-500/15">
                <h4 className="mb-2 text-sm font-semibold text-red-300 group-hover:text-red-200 transition-colors">Redis Cache</h4>
                <p className="text-xs text-gray-400">Session storage, query caching, performance optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 6: Infrastructure Layer - Light Green */}
        <div className="mb-20 rounded-3xl border-3 border-lime-500/50 bg-gradient-to-br from-lime-950/40 to-lime-900/20 p-10 shadow-2xl shadow-lime-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-lime-300 mb-2">Infrastructure Layer</h2>
            <p className="text-base text-gray-400">Database, storage, external services, and platform infrastructure</p>
          </div>

          {/* Database & Storage */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-lime-200 text-center mb-8">Database & Storage</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center">
              {/* Supabase PostgreSQL */}
              <div className="group rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-emerald-600/4 p-6 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/12 hover:shadow-lg hover:shadow-emerald-500/15">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Supabase PostgreSQL</h4>
                <p className="text-xs text-gray-400 mb-3">Multi-tenant data, row level security, real-time subscriptions</p>
              </div>

              {/* Supabase Storage */}
              <div className="group rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/8 to-cyan-600/4 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/12 hover:shadow-lg hover:shadow-cyan-500/15">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">Supabase Storage</h4>
                <p className="text-xs text-gray-400">File uploads, CDN distribution, asset management</p>
              </div>
            </div>
          </div>

          {/* External Services */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-lime-200 text-center mb-8">External Services</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Stripe */}
              <div className="group rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-6 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/12 hover:shadow-lg hover:shadow-blue-500/15">
                <h4 className="mb-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">Stripe API</h4>
                <p className="text-xs text-gray-400">Payment processing, subscription management, webhooks</p>
              </div>

              {/* Grok AI */}
              <div className="group rounded-2xl border-2 border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-500/8 to-fuchsia-600/4 p-6 transition-all duration-300 hover:border-fuchsia-400/60 hover:bg-fuchsia-500/12 hover:shadow-lg hover:shadow-fuchsia-500/15">
                <h4 className="mb-2 text-sm font-semibold text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors">Grok AI API</h4>
                <p className="text-xs text-gray-400">AI processing, content generation, insights</p>
              </div>

              {/* Metricool */}
              <div className="group rounded-2xl border-2 border-sky-500/40 bg-gradient-to-br from-sky-500/8 to-sky-600/4 p-6 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-500/12 hover:shadow-lg hover:shadow-sky-500/15">
                <h4 className="mb-2 text-sm font-semibold text-sky-300 group-hover:text-sky-200 transition-colors">Metricool API</h4>
                <p className="text-xs text-gray-400">Social media management, white-label social, multi-platform posting</p>
              </div>

              {/* Email Services */}
              <div className="group rounded-2xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/8 to-orange-600/4 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/12 hover:shadow-lg hover:shadow-orange-500/15">
                <h4 className="mb-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">Email Services</h4>
                <p className="text-xs text-gray-400">SendGrid, Resend, transactional + marketing, template engine</p>
              </div>

              {/* SMS Services */}
              <div className="group rounded-2xl border-2 border-pink-500/40 bg-gradient-to-br from-pink-500/8 to-pink-600/4 p-6 transition-all duration-300 hover:border-pink-400/60 hover:bg-pink-500/12 hover:shadow-lg hover:shadow-pink-500/15">
                <h4 className="mb-2 text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors">SMS Services</h4>
                <p className="text-xs text-gray-400">Twilio, MessageBird, notifications, OTP, delivery tracking</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Services */}
          <div>
            <h3 className="text-2xl font-semibold text-lime-200 text-center mb-8">Infrastructure Services</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Vercel Platform */}
              <div className="group rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-6 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/12 hover:shadow-lg hover:shadow-blue-500/15">
                <h4 className="mb-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">Vercel Platform</h4>
                <p className="text-xs text-gray-400">Serverless hosting, edge computing, CI/CD pipeline</p>
              </div>

              {/* Cloudflare */}
              <div className="group rounded-2xl border-2 border-yellow-500/40 bg-gradient-to-br from-yellow-500/8 to-yellow-600/4 p-6 transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-500/12 hover:shadow-lg hover:shadow-yellow-500/15">
                <h4 className="mb-2 text-sm font-semibold text-yellow-300 group-hover:text-yellow-200 transition-colors">Cloudflare</h4>
                <p className="text-xs text-gray-400">DNS management, DDoS protection, WAF, security</p>
              </div>

              {/* System Monitoring */}
              <div className="group rounded-2xl border-2 border-violet-500/40 bg-gradient-to-br from-violet-500/8 to-violet-600/4 p-6 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/12 hover:shadow-lg hover:shadow-violet-500/15">
                <h4 className="mb-2 text-sm font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">System Monitoring</h4>
                <p className="text-xs text-gray-400">Uptime tracking, performance metrics, alerting system</p>
              </div>

              {/* Log Aggregation */}
              <div className="group rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-500/8 to-red-600/4 p-6 transition-all duration-300 hover:border-red-400/60 hover:bg-red-500/12 hover:shadow-lg hover:shadow-red-500/15">
                <h4 className="mb-2 text-sm font-semibold text-red-300 group-hover:text-red-200 transition-colors">Log Aggregation</h4>
                <p className="text-xs text-gray-400">Error tracking, audit logs, performance analysis</p>
              </div>

              {/* Basic Security Services */}
              <div className="group rounded-2xl border-2 border-pink-500/40 bg-gradient-to-br from-pink-500/8 to-pink-600/4 p-6 transition-all duration-300 hover:border-pink-400/60 hover:bg-pink-500/12 hover:shadow-lg hover:shadow-pink-500/15">
                <h4 className="mb-2 text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors">Basic Security Services</h4>
                <p className="text-xs text-gray-400">Access auditing, basic security monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 7: Security & Compliance Layer - Pink */}
        <div className="mb-20 rounded-3xl border-3 border-pink-500/50 bg-gradient-to-br from-pink-950/40 to-pink-900/20 p-10 shadow-2xl shadow-pink-950/50">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-pink-300 mb-2">Security & Compliance Layer</h2>
            <p className="text-base text-gray-400">Authentication, authorization, data protection, and basic security</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {/* Authentication Services */}
            <div className="group rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/8 to-amber-600/4 p-6 transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-500/12 hover:shadow-lg hover:shadow-amber-500/15">
              <h4 className="mb-2 text-sm font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Authentication Services</h4>
              <p className="text-xs text-gray-400">Multi-factor auth, SSO integration, audit logs</p>
            </div>

            {/* Authorization Services */}
            <div className="group rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-emerald-600/4 p-6 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/12 hover:shadow-lg hover:shadow-emerald-500/15">
              <h4 className="mb-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Authorization Services</h4>
              <p className="text-xs text-gray-400">Row Level Security, role-based access, permission matrix</p>
            </div>

            {/* Data Protection */}
            <div className="group rounded-2xl border-2 border-violet-500/40 bg-gradient-to-br from-violet-500/8 to-violet-600/4 p-6 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/12 hover:shadow-lg hover:shadow-violet-500/15">
              <h4 className="mb-2 text-sm font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">Data Protection</h4>
              <p className="text-xs text-gray-400">Encryption at rest + in transit, key management, backup encryption</p>
            </div>

            {/* Basic Security Framework */}
            <div className="group rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-6 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/12 hover:shadow-lg hover:shadow-blue-500/15">
              <h4 className="mb-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">Basic Security Framework</h4>
              <p className="text-xs text-gray-400">Access auditing, basic security monitoring</p>
            </div>

            {/* Audit & Monitoring */}
            <div className="group rounded-2xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/8 to-orange-600/4 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/12 hover:shadow-lg hover:shadow-orange-500/15">
              <h4 className="mb-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">Audit & Monitoring</h4>
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
