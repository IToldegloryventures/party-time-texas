export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Cosmic Portals System Architecture</h1>
          <p className="text-base text-gray-400">NFC-Powered SaaS Platform • Multi-Tenant • Real-Time Analytics • Signal-Based Intelligence</p>
          <p className="mt-3 text-sm text-gray-500">Complete technical, business logic, and revenue stream architecture</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* LAYER 1: CLIENT LAYER (Front-End) */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">1. Client Layer (Front-End)</h2>
            <p className="text-lg text-gray-300 mb-4">Multi-platform access points with unified authentication</p>
            <p className="text-sm text-gray-400">Web Dashboard • Mobile Apps • White-Label Domains • Clerk Authentication & RBAC</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Web Dashboard */}
            <div className="group rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 overflow-hidden transition-all hover:border-blue-700/80 hover:bg-blue-950/40">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Web Dashboard</h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-gray-200 mb-4">Next.js 15, React 19, Tailwind CSS</p>
                <div className="space-y-2 text-xs text-gray-300">
                  <p>• Device & campaign UI</p>
                  <p>• Analytics view & dashboards</p>
                  <p>• Launcher modules & task management</p>
                </div>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="group rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 overflow-hidden transition-all hover:border-cyan-700/80 hover:bg-cyan-950/40">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Mobile Apps</h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-gray-200 mb-4">PWA or Native (iOS/Android)</p>
                <div className="space-y-2 text-xs text-gray-300">
                  <p>• React Native / Expo cross-platform</p>
                  <p>��� Real-time scan interactions via WebSockets</p>
                  <p>• Supabase Realtime sync</p>
                </div>
              </div>
            </div>

            {/* White-Label Domains */}
            <div className="group rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 overflow-hidden transition-all hover:border-purple-700/80 hover:bg-purple-950/40">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">White-Label Domains</h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-gray-200 mb-4">Custom CNAME per tenant</p>
                <div className="space-y-2 text-xs text-gray-300">
                  <p>• Custom domain routing (Cloudflare/AWS Route 53)</p>
                  <p>• CSS overrides & branding service</p>
                  <p>• Tenant-specific portals</p>
                </div>
              </div>
            </div>

            {/* Authentication & RBAC */}
            <div className="group rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 overflow-hidden transition-all hover:border-green-700/80 hover:bg-green-950/40">
              <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Authentication & RBAC</h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-gray-200 mb-4">Clerk.dev + NextAuth.js</p>
                <div className="space-y-2 text-xs text-gray-300">
                  <p>• SSO/MFA via Clerk.dev</p>
                  <p>• 5-tier roles: SuperAdmin, OrgOwner, Admin, Member, Guest</p>
                  <p>• Tenant-aware routing at UI level</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 2: API & BUSINESS LOGIC LAYER */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">2. API & Business Logic Layer</h2>
            <p className="text-lg text-gray-300 mb-4">Microservices, orchestration, and core business modules</p>
            <p className="text-sm text-gray-400">API Gateway • NFC Device Manager • Landing Page Builder • Campaign & Content • Trigger Engine • Job Queue</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* API Gateway / BFF */}
            <div className="rounded-xl border border-slate-900/50 bg-gradient-to-br from-slate-950/50 to-slate-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-600 to-slate-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">API Gateway / BFF</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Node.js / NestJS / Fastify</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Backend-for-Frontends (BFF)</p>
                  <p>• Tenant & role context enforcement</p>
                  <p>• Web/mobile client routing</p>
                </div>
              </div>
            </div>

            {/* NFC Device Manager */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">NFC Device Manager</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Registration & Tracking</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Device registration & status tracking</p>
                  <p>• Device pool management & batch programming</p>
                  <p>• Kafka/RabbitMQ event messaging</p>
                </div>
              </div>
            </div>

            {/* Landing Page Builder Service */}
            <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Landing Page Builder</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">CMS-Style Editor</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Template management & publishing</p>
                  <p>• Headless CMS or custom logic</p>
                  <p>• Personalized page rendering</p>
                </div>
              </div>
            </div>

            {/* Campaign & Content Module */}
            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Campaign & Content Module</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Social & Email Scheduling</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Visual composer & calendar view</p>
                  <p>• Social API integration (Meta, TikTok, Instagram)</p>
                  <p>• Drip campaign & scheduling logic</p>
                </div>
              </div>
            </div>

            {/* Trigger & Automation Engine */}
            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Trigger & Automation Engine</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Event-Driven Rules</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Scan-based event triggers</p>
                  <p>• CRM sync & webhook actions</p>
                  <p>• Smart rules engine for conditions & workflows</p>
                </div>
              </div>
            </div>

            {/* Job Queue / Orchestration */}
            <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-violet-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Job Queue / Orchestration</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">BullMQ / AWS SQS + Step Functions</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Delayed post scheduling & job execution</p>
                  <p>• Retry logic & workflow chaining</p>
                  <p>• Orchestration of multi-step processes</p>
                </div>
              </div>
            </div>

            {/* Microservices & Serverless */}
            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Microservices & Serverless</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Modular Architecture</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Deployed as separate services or functions</p>
                  <p>• AWS Lambda / Vercel Serverless</p>
                  <p>• Docker containerization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 3: ANALYTICS & INTELLIGENCE ENGINE */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">3. Analytics & Intelligence Engine</h2>
            <p className="text-lg text-gray-300 mb-4">Real-time ingestion, streaming, and ML-powered insights</p>
            <p className="text-sm text-gray-400">Event Ingestion · Streaming/Batch Processing · Data Warehouse · BI Layer · ML/Prediction</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Event Ingestion */}
            <div className="rounded-xl border border-sky-900/50 bg-gradient-to-br from-sky-950/50 to-sky-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-sky-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Event Ingestion</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Real-time Data Processing</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>NFC scans, landing page views, campaign triggers</p>
                  <p>WebSocket / Pub-Sub (Google Pub/Sub, AWS SNS)</p>
                </div>
              </div>
            </div>

            {/* Streaming/Batch Processing */}
            <div className="rounded-xl border border-fuchsia-900/50 bg-gradient-to-br from-fuchsia-950/50 to-fuchsia-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Streaming/Batch</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Apache Kafka + Processing</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Kafka, Kinesis, Flink, Spark Streaming</p>
                  <p>Kafka Connect for integrations</p>
                </div>
              </div>
            </div>

            {/* Data Warehouse */}
            <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-600 to-rose-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Data Warehouse</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">OLAP for Large-Scale Analytics</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Snowflake, BigQuery, Redshift</p>
                  <p>Long-term storage & querying</p>
                </div>
              </div>
            </div>

            {/* BI Layer */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">BI Layer</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Dashboards & Visualization</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Metabase, Superset, Looker</p>
                  <p>Custom React dashboards</p>
                </div>
              </div>
            </div>

            {/* ML/Prediction Service */}
            <div className="rounded-xl border border-lime-900/50 bg-gradient-to-br from-lime-950/50 to-lime-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-lime-600 to-lime-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">ML/Prediction</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Predictive Intelligence</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Flask/FastAPI, AWS SageMaker</p>
                  <p>Engagement & peak time forecasting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics & Intelligence Features */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
              <h3 className="mb-4 text-sm font-semibold text-white">Real-Time Analytics</h3>
              <div className="text-xs text-gray-300 space-y-2">
                <p>• Scan metrics & session tracking</p>
                <p>�� Time-series device-level data</p>
                <p>• Real-time engagement aggregation</p>
              </div>
            </div>
            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6">
              <h3 className="mb-4 text-sm font-semibold text-white">Attribution & Forecasting</h3>
              <div className="text-xs text-gray-300 space-y-2">
                <p>• NFC → Landing → CRM flow tracking</p>
                <p>• Cross-channel attribution</p>
                <p>• Geo-heatmaps & behavioral trends</p>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
              <h3 className="mb-4 text-sm font-semibold text-white">Business Intelligence</h3>
              <div className="text-xs text-gray-300 space-y-2">
                <p>�� Revenue dashboards & MRR tracking</p>
                <p>• KPI exports & performance scoring</p>
                <p>• Custom reporting dashboards</p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 4: DATA & SECURITY LAYER */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">4. Data & Security Layer</h2>
            <p className="text-lg text-gray-300 mb-4">Multi-tenant database with enterprise-grade protection</p>
            <p className="text-sm text-gray-400">Supabase PostgreSQL · Cache/Realtime · Authentication/IAM · Encryption · External Services</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Primary Database */}
            <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Primary Database</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Supabase PostgreSQL + RLS</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p><code className="text-emerald-200">organizations, users</code></p>
                  <p><code className="text-emerald-200">nfc_devices, nfc_scans</code></p>
                  <p><code className="text-emerald-200">campaigns, campaign_posts</code></p>
                  <p><code className="text-emerald-200">landing_pages, events</code></p>
                  <p><code className="text-emerald-200">subscriptions, billing</code></p>
                  <p>Multi-tenant isolation via RLS</p>
                </div>
              </div>
            </div>

            {/* Cache & Realtime */}
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Cache & Realtime</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">Redis or Memcached</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Live metrics & device status</p>
                  <p>Supabase Realtime or Firebase</p>
                  <p>Session data & WebSocket sync</p>
                </div>
              </div>
            </div>

            {/* Authentication & IAM */}
            <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Authentication & IAM</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">JWT, OAuth2, Token Storage</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>JSON Web Tokens (JWT)</p>
                  <p>OAuth2 for social APIs</p>
                  <p>Secure credential handling</p>
                </div>
              </div>
            </div>

            {/* Encryption & Compliance */}
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Encryption & Compliance</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">AES-256 & TLS</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Data encryption at rest</p>
                  <p>TLS in transit</p>
                  <p>GDPR & SOC2 alignment</p>
                </div>
              </div>
            </div>

            {/* External Services */}
            <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-amber-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">External Services</h3>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-gray-300 mb-3">3rd-Party Integrations</p>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>Stripe (billing & subscriptions)</p>
                  <p>SendGrid, Mailgun, Twilio</p>
                  <p>Meta, TikTok, Instagram APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 5: REVENUE STREAMS & MONETIZATION */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">5. Revenue Streams & Monetization</h2>
            <p className="text-lg text-gray-300">Tiered pricing, feature gates, and usage-based models</p>
          </div>

          {/* Core Platform Features */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-lg font-semibold text-white">Core Platform Features</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Subscription Portals</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Multi-tenant SaaS, monthly/annual billing, feature flags</p>
                </div>
              </div>

              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-pink-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Landing Page Builder</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">AI-assisted drag-and-drop, templates, A/B testing</p>
                </div>
              </div>

              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-6 py-4">
                  <h4 className="font-semibold text-white">NFC Device Management</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Registration, batch programming, tracking</p>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Event Management</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Multi-station check-ins, smart triggers, real-time</p>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Analytics Dashboard</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Real-time metrics, KPI tracking, ROI analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Services */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-lg font-semibold text-white">Advanced Services</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Geo-Marketing Intelligence</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Location heatmaps, regional analytics, trends</p>
                </div>
              </div>

              <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-teal-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Smart Social Scheduler</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Social + email automation, campaign composer</p>
                </div>
              </div>

              <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4">
                  <h4 className="font-semibold text-white">White Label Enterprise</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Custom domains, full branding, premium support</p>
                </div>
              </div>

              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Task Management</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Team collaboration, workflow tracking</p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 py-4">
                  <h4 className="font-semibold text-white">API Integration Tier</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">REST API, webhooks, SDKs, per-request billing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligence & Attribution */}
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold text-white">Intelligence & Attribution</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-amber-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Cross-Channel Attribution</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Track NFC → Landing → CRM conversion flows for complete ROI attribution</p>
                </div>
              </div>

              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Predictive Intelligence</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">ML-powered forecasting and behavioral trend analysis</p>
                </div>
              </div>

              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-pink-800 px-6 py-4">
                  <h4 className="font-semibold text-white">Advanced Analytics Tier</h4>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-300">Premium reporting, custom dashboards, KPI exports</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFC TAP FLOW TIMELINE */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">NFC Tap Flow: Signal Chain</h2>
            <p className="text-lg text-gray-300">From physical tap to revenue measurement</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">1. Guest Taps NFC Device</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400">Device triggers event & data packet; geolocation & device metadata captured</p>
              </div>
            </div>

            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">2. Landing Page Loads</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400">Personalized page rendered in-browser; user journey begins; session cookie set</p>
              </div>
            </div>

            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">3. Session Tracking</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400">Geo + device metadata collected; landing page engagement tracked (scrolls, clicks, CTAs)</p>
              </div>
            </div>

            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">4. Analytics Processing</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400">Real-time engagement fed to analytics dashboard; trigger engine evaluates conditions</p>
              </div>
            </div>

            <div className="rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">5. ROI Attribution & Actions</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400">Conversion measured in campaigns & CRMs; automated responses triggered; revenue tracked</p>
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
