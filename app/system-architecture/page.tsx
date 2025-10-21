export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-base text-gray-400">Cosmic Portals Multi-Tenant NFC & Engagement Platform</p>
          <p className="mt-3 text-sm text-gray-500">Enterprise-grade distributed architecture with load balancing, comprehensive data access patterns, security infrastructure, and performance optimization.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Layer 0: Load Balancer & Gateway Tier */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 0: Load Balancer & Gateway</h2>
            <p className="mt-2 text-base text-gray-400">Request distribution, SSL termination, and health management</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Load Balancer · SSL/TLS Management · Health Checks · Request Distribution</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {/* Vercel Load Balancer */}
            <div className="group rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 transition-all hover:border-orange-700/80 hover:bg-orange-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-orange-300">Vercel Load Balancer</h3>
              <p className="text-sm text-gray-300">Request Distribution & Failover</p>
              <p className="mt-3 text-xs text-gray-400">SSL termination, geo-routing, connection pooling, health checks</p>
            </div>

            {/* SSL/TLS Management */}
            <div className="group rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 transition-all hover:border-yellow-700/80 hover:bg-yellow-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-yellow-300">SSL/TLS Certificates</h3>
              <p className="text-sm text-gray-300">Certificate Management & Renewal</p>
              <p className="mt-3 text-xs text-gray-400">HTTPS everywhere, security headers, certificate automation</p>
            </div>

            {/* Health Monitoring */}
            <div className="group rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 transition-all hover:border-red-700/80 hover:bg-red-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-red-300">Health Checks</h3>
              <p className="text-sm text-gray-300">Service Health & Availability</p>
              <p className="mt-3 text-xs text-gray-400">Endpoint monitoring, failover detection, service status tracking</p>
            </div>
          </div>
        </div>

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
            <p className="mt-2 text-base text-gray-400">Request routing, authentication, and security enforcement</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">API Gateway · Authentication · Rate Limiting · Request Routing</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 justify-center">
            {/* API Gateway */}
            <div className="group rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6 transition-all hover:border-amber-700/80 hover:bg-amber-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-amber-300">API Gateway</h3>
              <p className="text-sm text-gray-300">Vercel Edge Functions</p>
              <p className="mt-3 text-xs text-gray-400">Rate Limiting, Request Routing, Geo-routing, Request Distribution, Request Logging</p>
            </div>

            {/* Authentication & Security */}
            <div className="group rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 transition-all hover:border-green-700/80 hover:bg-green-950/40 text-center">
              <h3 className="mb-1 text-lg font-semibold text-green-300">Authentication & Security</h3>
              <p className="text-sm text-gray-300">Clerk Authentication, Auth Orchestration</p>
              <p className="mt-3 text-xs text-gray-400">Multi-tenant Orgs, 5-Tier Roles, SSO, MFA, JWT Tokens, Permission Validation</p>
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
            <p className="mb-8 text-center text-sm text-gray-500">Event-Driven Rules · Validation Logic · Workflow Orchestration · Trigger Management · Automation</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Event-Driven Rules System */}
              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6">
                <h4 className="mb-3 text-sm font-semibold text-red-300 text-center">Event-Driven Rules System</h4>
                <div className="text-xs text-gray-400 space-y-2">
                  <p>• NFC scan automation</p>
                  <p>• Event check-in processing</p>
                  <p>• Payment and billing triggers</p>
                  <p>• User role enforcement</p>
                  <p>• Geo-location content delivery</p>
                </div>
              </div>

              {/* Validation Logic Engine */}
              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
                <h4 className="mb-3 text-sm font-semibold text-orange-300 text-center">Validation Logic Engine</h4>
                <div className="text-xs text-gray-400 space-y-2">
                  <p>• Data sanitization and format validation</p>
                  <p>• Permission and access control</p>
                  <p>• Plan limit enforcement</p>
                  <p>• Event capacity and constraints</p>
                  <p>• NFC device authentication</p>
                </div>
              </div>

              {/* Workflow Orchestration */}
              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6">
                <h4 className="mb-3 text-sm font-semibold text-yellow-300 text-center">Workflow Orchestration</h4>
                <div className="text-xs text-gray-400 space-y-2">
                  <p>• User onboarding flows</p>
                  <p>• Event management pipelines</p>
                  <p>• NFC campaign workflows</p>
                  <p>• Payment processing chains</p>
                  <p>• Content publishing workflows</p>
                </div>
              </div>

              {/* Trigger Management System */}
              <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6">
                <h4 className="mb-3 text-sm font-semibold text-violet-300 text-center">Trigger Management System</h4>
                <div className="text-xs text-gray-400 space-y-2">
                  <p>• Time-based scheduling</p>
                  <p>• Event-driven automation</p>
                  <p>• Condition-based responses</p>
                  <p>• External webhook integration</p>
                </div>
              </div>

              {/* Automation Rules Engine */}
              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 lg:col-span-2">
                <h4 className="mb-3 text-sm font-semibold text-pink-300 text-center">Automation Rules Engine</h4>
                <div className="text-xs text-gray-400 space-y-2 text-center">
                  <p>• Email sequence automation · SMS notification systems · Social media scheduling</p>
                  <p>• Analytics report generation · Integration data synchronization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 5: Data Access Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 5: Data Access Layer</h2>
            <p className="mt-2 text-base text-gray-400">Repository pattern, caching, and data optimization services</p>
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
            <p className="mb-8 text-center text-sm text-gray-500">Caching · Search · Optimization · Synchronization · Backup & Recovery</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 justify-center">
              {/* Redis Cache */}
              <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-purple-300">Redis Cache</h4>
                <p className="text-xs text-gray-400">Session storage, query caching, performance optimization</p>
              </div>

              {/* Search Service */}
              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-yellow-300">Search Service</h4>
                <p className="text-xs text-gray-400">Full-text search, content indexing, query optimization</p>
              </div>

              {/* Query Optimization */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">Query Optimization</h4>
                <p className="text-xs text-gray-400">Database tuning, index management, performance monitoring</p>
              </div>

              {/* Data Synchronization */}
              <div className="rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-green-300">Data Synchronization</h4>
                <p className="text-xs text-gray-400">Real-time sync, conflict resolution, backup management</p>
              </div>

              {/* Backup & Recovery */}
              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-red-300">Backup & Recovery</h4>
                <p className="text-xs text-gray-400">Automated backups, point-in-time recovery, disaster recovery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 6: Infrastructure Layer */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 6: Infrastructure Layer</h2>
            <p className="mt-2 text-base text-gray-400">Database, storage, external services, and platform infrastructure</p>
          </div>

          {/* Database Layer */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Database Layer</h3>

            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-emerald-300">Supabase PostgreSQL</h4>
                <p className="text-xs text-gray-400 mb-3">Multi-tenant relational database with advanced security and real-time capabilities</p>
                <div className="text-xs text-gray-500">
                  <p>Row Level Security (RLS) · Real-time Subscriptions · Connection Pooling</p>
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
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-white text-center">Infrastructure Services</h3>
            <p className="mb-8 text-center text-sm text-gray-500">Hosting · Security · Monitoring · Logging · Performance</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Vercel Platform */}
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-blue-300">Vercel Platform</h4>
                <p className="text-xs text-gray-400">Serverless hosting, edge computing, CDN, CI/CD pipeline</p>
              </div>

              {/* Cloudflare Security */}
              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-yellow-300">Cloudflare Security</h4>
                <p className="text-xs text-gray-400">DNS management, DDoS protection, WAF, security rules</p>
              </div>

              {/* System Monitoring */}
              <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-violet-300">System Monitoring</h4>
                <p className="text-xs text-gray-400">Uptime tracking, performance metrics, alerting system</p>
              </div>

              {/* Log Aggregation */}
              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-red-300">Log Aggregation</h4>
                <p className="text-xs text-gray-400">Error tracking, audit logs, performance analysis</p>
              </div>

              {/* Security Monitoring */}
              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-pink-300">Security Monitoring</h4>
                <p className="text-xs text-gray-400">Threat detection, vulnerability scanning, compliance monitoring</p>
              </div>

              {/* Performance Optimization */}
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">Performance Optimization</h4>
                <p className="text-xs text-gray-400">CDN optimization, cache management, latency reduction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 7: Security & Compliance */}
        <div className="mb-40">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Layer 7: Security & Compliance</h2>
            <p className="mt-2 text-base text-gray-400">Authentication, authorization, data protection, and regulatory compliance</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Authentication · Authorization · Encryption · Compliance · Audit</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {/* Authentication Layer */}
            <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-amber-300">Authentication Layer</h4>
              <p className="text-xs text-gray-400 mb-2">Multi-factor auth, SSO integration, audit logs</p>
            </div>

            {/* Authorization Layer */}
            <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-emerald-300">Authorization Layer</h4>
              <p className="text-xs text-gray-400 mb-2">Row Level Security, role-based access, permission matrix</p>
            </div>

            {/* Data Encryption */}
            <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-violet-300">Data Encryption</h4>
              <p className="text-xs text-gray-400 mb-2">At rest + in transit, key management, backup encryption</p>
            </div>

            {/* Compliance Framework */}
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-blue-300">Compliance Framework</h4>
              <p className="text-xs text-gray-400 mb-2">GDPR compliance, SOC 2 Type II, data privacy</p>
            </div>

            {/* Audit Logging */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-orange-300">Audit Logging</h4>
              <p className="text-xs text-gray-400 mb-2">Activity tracking, access auditing, compliance reports</p>
            </div>

            {/* Incident Response */}
            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
              <h4 className="mb-2 text-sm font-semibold text-red-300">Incident Response</h4>
              <p className="text-xs text-gray-400 mb-2">Threat detection, incident alerting, disaster recovery</p>
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
