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
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">1. Client Layer (Front-End)</h2>
            <p className="mt-2 text-base text-gray-400">Multi-platform access points with unified authentication</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Web Dashboard • Mobile Apps • White-Label Domains • Clerk Authentication & RBAC</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Web Dashboard */}
            <div className="group rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 overflow-hidden transition-all hover:border-blue-700/80 hover:bg-blue-950/40">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Web Dashboard</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-300">Next.js 15, React 19, Tailwind CSS</p>
                <div className="mt-3 space-y-1 text-xs text-gray-400">
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
                <p className="text-sm text-gray-300">PWA or Native (iOS/Android)</p>
                <div className="mt-3 space-y-1 text-xs text-gray-400">
                  <p>• React Native / Expo cross-platform</p>
                  <p>• Real-time scan interactions via WebSockets</p>
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
                <p className="text-sm text-gray-300">Custom CNAME per tenant</p>
                <div className="mt-3 space-y-1 text-xs text-gray-400">
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
                <p className="text-sm text-gray-300">Clerk.dev + NextAuth.js</p>
                <div className="mt-3 space-y-1 text-xs text-gray-400">
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
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">2. API & Business Logic Layer</h2>
            <p className="mt-2 text-base text-gray-400">Microservices, orchestration, and core business modules</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">API Gateway • NFC Device Manager • Landing Page Builder • Campaign & Content • Trigger Engine • Job Queue</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* API Gateway / BFF */}
            <div className="rounded-xl border border-slate-900/50 bg-gradient-to-br from-slate-950/50 to-slate-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-slate-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"/>
                  <path d="M13 4a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1V4z"/>
                  <path d="M13 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-slate-300 text-center">API Gateway / BFF</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Node.js / NestJS / Fastify</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Backend-for-Frontends (BFF)</p>
                <p>• Tenant & role context enforcement</p>
                <p>• Web/mobile client routing</p>
              </div>
            </div>

            {/* NFC Device Manager */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-orange-300 text-center">NFC Device Manager</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Registration & Tracking</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Device registration & status tracking</p>
                <p>• Device pool management & batch programming</p>
                <p>• Kafka/RabbitMQ event messaging</p>
              </div>
            </div>

            {/* Landing Page Builder Service */}
            <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-yellow-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-yellow-300 text-center">Landing Page Builder</h3>
              <p className="text-xs text-gray-400 text-center mb-2">CMS-Style Editor</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Template management & publishing</p>
                <p>• Headless CMS or custom logic</p>
                <p>• Personalized page rendering</p>
              </div>
            </div>

            {/* Campaign & Content Module */}
            <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293-1.293a1 1 0 011.414 0L9 7.586l2.293-2.293a1 1 0 111.414 1.414L10.414 9l2.293 2.293a1 1 0 01-1.414 1.414L9 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L7.586 9 5.293 6.707a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-pink-300 text-center">Campaign & Content Module</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Social & Email Scheduling</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Visual composer & calendar view</p>
                <p>• Social API integration (Meta, TikTok, Instagram)</p>
                <p>• Drip campaign & scheduling logic</p>
              </div>
            </div>

            {/* Trigger & Automation Engine */}
            <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-red-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 000-2H6V3a1 1 0 01-1 1zm0 0h8a4 4 0 110 8H5a1 1 0 000 2h8a6 6 0 100-12H6V1a1 1 0 00-1 1z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-red-300 text-center">Trigger & Automation Engine</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Event-Driven Rules</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Scan-based event triggers</p>
                <p>• CRM sync & webhook actions</p>
                <p>• Smart rules engine for conditions & workflows</p>
              </div>
            </div>

            {/* Job Queue / Orchestration */}
            <div className="rounded-xl border border-violet-900/50 bg-gradient-to-br from-violet-950/50 to-violet-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-violet-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-violet-300 text-center">Job Queue / Orchestration</h3>
              <p className="text-xs text-gray-400 text-center mb-2">BullMQ / AWS SQS + Step Functions</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Delayed post scheduling & job execution</p>
                <p>• Retry logic & workflow chaining</p>
                <p>• Orchestration of multi-step processes</p>
              </div>
            </div>

            {/* Microservices & Serverless */}
            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-indigo-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.5M10.5 1.5l4 4M10.5 1.5v5h5"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-indigo-300 text-center">Microservices & Serverless</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Modular Architecture</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Deployed as separate services or functions</p>
                <p>• AWS Lambda / Vercel Serverless</p>
                <p>• Docker containerization</p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 3: ANALYTICS & INTELLIGENCE ENGINE */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">3. Analytics & Intelligence Engine</h2>
            <p className="mt-2 text-base text-gray-400">Real-time ingestion, streaming, and ML-powered insights</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Event Ingestion · Streaming/Batch Processing · Data Warehouse · BI Layer · ML/Prediction</p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Event Ingestion */}
            <div className="rounded-xl border border-sky-900/50 bg-gradient-to-br from-sky-950/50 to-sky-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-sky-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-sky-300 text-center">Event Ingestion</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Real-time Data Processing</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>NFC scans, landing page views, campaign triggers</p>
                <p>WebSocket / Pub-Sub (Google Pub/Sub, AWS SNS)</p>
              </div>
            </div>

            {/* Streaming/Batch Processing */}
            <div className="rounded-xl border border-fuchsia-900/50 bg-gradient-to-br from-fuchsia-950/50 to-fuchsia-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-fuchsia-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.5M10.5 1.5l4 4M10.5 1.5v5h5"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-fuchsia-300 text-center">Streaming/Batch</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Apache Kafka + Processing</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Kafka, Kinesis, Flink, Spark Streaming</p>
                <p>Kafka Connect for integrations</p>
              </div>
            </div>

            {/* Data Warehouse */}
            <div className="rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/50 to-rose-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-rose-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657.895 3.146 2.457 3.958C7.02 19.748 8.961 20 10 20s2.98-.252 4.543-.084C16.105 19.146 17 17.657 17 16v-3m-6-4V5c0-1.657-.895-3.146-2.457-3.958C7.02.252 5.039 0 4 0 1.895 0 0 1.343 0 3v10c0 1.657.895 3.146 2.457 3.958C4.02 17.748 5.961 18 7 18s2.98-.252 4.543-.084C12.105 17.146 13 15.657 13 14v-3"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-rose-300 text-center">Data Warehouse</h3>
              <p className="text-xs text-gray-400 text-center mb-2">OLAP for Large-Scale Analytics</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Snowflake, BigQuery, Redshift</p>
                <p>Long-term storage & querying</p>
              </div>
            </div>

            {/* BI Layer */}
            <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-orange-300 text-center">BI Layer</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Dashboards & Visualization</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Metabase, Superset, Looker</p>
                <p>Custom React dashboards</p>
              </div>
            </div>

            {/* ML/Prediction Service */}
            <div className="rounded-xl border border-lime-900/50 bg-gradient-to-br from-lime-950/50 to-lime-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-lime-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zM5.757 4.343a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-lime-300 text-center">ML/Prediction</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Predictive Intelligence</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Flask/FastAPI, AWS SageMaker</p>
                <p>Engagement & peak time forecasting</p>
              </div>
            </div>
          </div>

          {/* Analytics & Intelligence Features */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6">
              <h3 className="mb-3 text-sm font-semibold text-purple-300">Real-Time Analytics</h3>
              <div className="text-xs text-gray-400 space-y-2">
                <p>• Scan metrics & session tracking</p>
                <p>• Time-series device-level data</p>
                <p>• Real-time engagement aggregation</p>
              </div>
            </div>
            <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6">
              <h3 className="mb-3 text-sm font-semibold text-indigo-300">Attribution & Forecasting</h3>
              <div className="text-xs text-gray-400 space-y-2">
                <p>• NFC → Landing → CRM flow tracking</p>
                <p>• Cross-channel attribution</p>
                <p>• Geo-heatmaps & behavioral trends</p>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
              <h3 className="mb-3 text-sm font-semibold text-cyan-300">Business Intelligence</h3>
              <div className="text-xs text-gray-400 space-y-2">
                <p>• Revenue dashboards & MRR tracking</p>
                <p>• KPI exports & performance scoring</p>
                <p>• Custom reporting dashboards</p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 4: DATA & SECURITY LAYER */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">4. Data & Security Layer</h2>
            <p className="mt-2 text-base text-gray-400">Multi-tenant database with enterprise-grade protection</p>
          </div>
          <p className="mb-8 text-center text-sm text-gray-500">Supabase PostgreSQL · Cache/Realtime · Authentication/IAM · Encryption · External Services</p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Primary Database */}
            <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-emerald-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657.895 3.146 2.457 3.958C7.02 19.748 8.961 20 10 20s2.98-.252 4.543-.084C16.105 19.146 17 17.657 17 16v-3m-6-4V5c0-1.657-.895-3.146-2.457-3.958C7.02.252 5.039 0 4 0 1.895 0 0 1.343 0 3v10c0 1.657.895 3.146 2.457 3.958C4.02 17.748 5.961 18 7 18s2.98-.252 4.543-.084C12.105 17.146 13 15.657 13 14v-3"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-emerald-300 text-center">Primary Database</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Supabase PostgreSQL + RLS</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p><code className="text-emerald-200">organizations, users</code></p>
                <p><code className="text-emerald-200">nfc_devices, nfc_scans</code></p>
                <p><code className="text-emerald-200">campaigns, campaign_posts</code></p>
                <p><code className="text-emerald-200">landing_pages, events</code></p>
                <p><code className="text-emerald-200">subscriptions, billing</code></p>
                <p>Multi-tenant isolation via RLS</p>
              </div>
            </div>

            {/* Cache & Realtime */}
            <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-cyan-300 text-center">Cache & Realtime</h3>
              <p className="text-xs text-gray-400 text-center mb-2">Redis or Memcached</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Live metrics & device status</p>
                <p>Supabase Realtime or Firebase</p>
                <p>Session data & WebSocket sync</p>
              </div>
            </div>

            {/* Authentication & IAM */}
            <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-teal-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-teal-300 text-center">Authentication & IAM</h3>
              <p className="text-xs text-gray-400 text-center mb-2">JWT, OAuth2, Token Storage</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>JSON Web Tokens (JWT)</p>
                <p>OAuth2 for social APIs</p>
                <p>Secure credential handling</p>
              </div>
            </div>

            {/* Encryption & Compliance */}
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-blue-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-blue-300 text-center">Encryption & Compliance</h3>
              <p className="text-xs text-gray-400 text-center mb-2">AES-256 & TLS</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Data encryption at rest</p>
                <p>TLS in transit</p>
                <p>GDPR & SOC2 alignment</p>
              </div>
            </div>

            {/* External Services */}
            <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6">
              <div className="mb-4 flex justify-center rounded-lg bg-amber-500/20 p-3 mx-auto">
                <svg className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-amber-300 text-center">External Services</h3>
              <p className="text-xs text-gray-400 text-center mb-2">3rd-Party Integrations</p>
              <div className="text-xs text-gray-500 space-y-1 text-center">
                <p>Stripe (billing & subscriptions)</p>
                <p>SendGrid, Mailgun, Twilio</p>
                <p>Meta, TikTok, Instagram APIs</p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 5: REVENUE STREAMS & MONETIZATION */}
        <div className="mb-32">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">5. Revenue Streams & Monetization</h2>
            <p className="mt-2 text-base text-gray-400">Tiered pricing, feature gates, and usage-based models</p>
          </div>

          {/* Core Platform Features */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-lg font-semibold text-blue-300">Core Platform Features</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-blue-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-blue-300">Subscription Portals</h4>
                <p className="text-xs text-gray-400">Multi-tenant SaaS, monthly/annual billing, feature flags</p>
              </div>

              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-pink-300">Landing Page Builder</h4>
                <p className="text-xs text-gray-400">AI-assisted drag-and-drop, templates, A/B testing</p>
              </div>

              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-orange-300">NFC Device Management</h4>
                <p className="text-xs text-gray-400">Registration, batch programming, tracking</p>
              </div>

              <div className="rounded-xl border border-red-900/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-red-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-red-300">Event Management</h4>
                <p className="text-xs text-gray-400">Multi-station check-ins, smart triggers, real-time</p>
              </div>

              <div className="rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-indigo-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-indigo-300">Analytics Dashboard</h4>
                <p className="text-xs text-gray-400">Real-time metrics, KPI tracking, ROI analysis</p>
              </div>
            </div>
          </div>

          {/* Advanced Services */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-lg font-semibold text-cyan-300">Advanced Services</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-cyan-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-cyan-300">Geo-Marketing Intelligence</h4>
                <p className="text-xs text-gray-400">Location heatmaps, regional analytics, trends</p>
              </div>

              <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-teal-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-teal-300">Smart Social Scheduler</h4>
                <p className="text-xs text-gray-400">Social + email automation, campaign composer</p>
              </div>

              <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/50 to-purple-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-purple-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.5M10.5 1.5l4 4M10.5 1.5v5h5"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-purple-300">White Label Enterprise</h4>
                <p className="text-xs text-gray-400">Custom domains, full branding, premium support</p>
              </div>

              <div className="rounded-xl border border-yellow-900/50 bg-gradient-to-br from-yellow-950/50 to-yellow-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-yellow-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-yellow-300">Task Management</h4>
                <p className="text-xs text-gray-400">Team collaboration, workflow tracking</p>
              </div>

              <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-emerald-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-emerald-300">API Integration Tier</h4>
                <p className="text-xs text-gray-400">REST API, webhooks, SDKs, per-request billing</p>
              </div>
            </div>
          </div>

          {/* Intelligence & Attribution */}
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold text-amber-300">Intelligence & Attribution</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-amber-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-amber-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-amber-300">Cross-Channel Attribution</h4>
                <p className="text-xs text-gray-400">Track NFC → Landing → CRM conversion flows for complete ROI attribution</p>
              </div>

              <div className="rounded-xl border border-orange-900/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-orange-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zM4.293 9.293a1 1 0 011.414 0L9 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-orange-300">Predictive Intelligence</h4>
                <p className="text-xs text-gray-400">ML-powered forecasting and behavioral trend analysis</p>
              </div>

              <div className="rounded-xl border border-pink-900/50 bg-gradient-to-br from-pink-950/50 to-pink-900/20 p-6 text-center">
                <div className="mb-4 flex justify-center rounded-lg bg-pink-500/20 p-3 mx-auto w-fit">
                  <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-pink-300">Advanced Analytics Tier</h4>
                <p className="text-xs text-gray-400">Premium reporting, custom dashboards, KPI exports</p>
              </div>
            </div>
          </div>
        </div>

        {/* NFC TAP FLOW TIMELINE */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">NFC Tap Flow: Signal Chain</h2>
            <p className="mt-2 text-base text-gray-400">From physical tap to revenue measurement</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-blue-500/20 p-3">
                  <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300">1. Guest Taps NFC Device</h3>
                  <p className="mt-1 text-sm text-gray-400">Device triggers event & data packet; geolocation & device metadata captured</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-indigo-500/20 p-3">
                  <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-300">2. Landing Page Loads</h3>
                  <p className="mt-1 text-sm text-gray-400">Personalized page rendered in-browser; user journey begins; session cookie set</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-purple-500/20 p-3">
                  <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300">3. Session Tracking</h3>
                  <p className="mt-1 text-sm text-gray-400">Geo + device metadata collected; landing page engagement tracked (scrolls, clicks, CTAs)</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-pink-500/20 p-3">
                  <svg className="h-6 w-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-300">4. Analytics Processing</h3>
                  <p className="mt-1 text-sm text-gray-400">Real-time engagement fed to analytics dashboard; trigger engine evaluates conditions</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-green-500/20 p-3">
                  <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-300">5. ROI Attribution & Actions</h3>
                  <p className="mt-1 text-sm text-gray-400">Conversion measured in campaigns & CRMs; automated responses triggered; revenue tracked</p>
                </div>
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
