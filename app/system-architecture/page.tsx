export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-3 text-5xl font-bold text-white">System Architecture</h1>
          <p className="text-xl text-gray-300">Cosmic Portals NFC SaaS Platform Infrastructure</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Architecture Diagram */}
        <div className="mb-16 overflow-x-auto rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 p-8 shadow-2xl">
          <svg viewBox="0 0 1600 1000" className="min-w-full" style={{ minHeight: '600px' }}>
            <defs>
              {/* Arrow Markers */}
              <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
              </marker>
              <marker id="arrowCyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#06b6d4" />
              </marker>
              <marker id="arrowAmber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
              </marker>
              <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
              </marker>
              <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
              </marker>
              <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#a855f7" />
              </marker>
              {/* Gradient Definitions */}
              <linearGradient id="gradEntry" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="gradAuth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#0e7490', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="gradAI" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="gradDash" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="gradDB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>

            {/* Layer 1: Entry Points */}
            <g>
              <text x="20" y="50" fontSize="16" fontWeight="bold" fill="#94a3b8" letterSpacing="2">ENTRY POINTS</text>
              
              {/* Mobile App */}
              <rect x="180" y="30" width="140" height="70" rx="10" fill="url(#gradEntry)" stroke="#3b82f6" strokeWidth="2" />
              <text x="250" y="58" fontSize="14" fontWeight="bold" fill="#60a5fa" textAnchor="middle">📱 Mobile App</text>
              <text x="250" y="78" fontSize="12" fill="#cbd5e1" textAnchor="middle">iOS/Android</text>

              {/* Web App */}
              <rect x="380" y="30" width="140" height="70" rx="10" fill="url(#gradEntry)" stroke="#3b82f6" strokeWidth="2" />
              <text x="450" y="58" fontSize="14" fontWeight="bold" fill="#60a5fa" textAnchor="middle">🌐 Web App</text>
              <text x="450" y="78" fontSize="12" fill="#cbd5e1" textAnchor="middle">Dashboard</text>

              {/* White-Label */}
              <rect x="580" y="30" width="140" height="70" rx="10" fill="url(#gradEntry)" stroke="#3b82f6" strokeWidth="2" />
              <text x="650" y="58" fontSize="14" fontWeight="bold" fill="#60a5fa" textAnchor="middle">🎨 White-Label</text>
              <text x="650" y="78" fontSize="12" fill="#cbd5e1" textAnchor="middle">Custom Domains</text>

              {/* Data Flows */}
              <rect x="800" y="30" width="140" height="70" rx="10" fill="url(#gradEntry)" stroke="#3b82f6" strokeWidth="2" />
              <text x="870" y="58" fontSize="14" fontWeight="bold" fill="#60a5fa" textAnchor="middle">📊 Data Flows</text>
              <text x="870" y="78" fontSize="12" fill="#cbd5e1" textAnchor="middle">Real-time</text>
            </g>

            {/* Arrows from Entry to Auth */}
            <path d="M 250 100 L 250 140" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />
            <path d="M 450 100 L 450 140" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />
            <path d="M 650 100 L 650 140" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />
            <path d="M 870 100 L 870 160" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />

            {/* Layer 2: Authentication */}
            <g>
              <text x="20" y="160" fontSize="16" fontWeight="bold" fill="#94a3b8" letterSpacing="2">AUTH LAYER</text>
              
              <rect x="150" y="140" width="600" height="90" rx="10" fill="url(#gradAuth)" stroke="#06b6d4" strokeWidth="2" />
              <text x="450" y="170" fontSize="15" fontWeight="bold" fill="#06b6d4" textAnchor="middle">🔐 Clerk Authentication</text>
              <text x="450" y="195" fontSize="12" fill="#cbd5e1" textAnchor="middle">SSO • MFA • Session Management • RBAC • Multi-tenant Support</text>
            </g>

            {/* Arrows from Auth to AI & Dashboard */}
            <path d="M 350 230 L 300 280" stroke="#06b6d4" strokeWidth="2.5" fill="none" markerEnd="url(#arrowCyan)" />
            <path d="M 550 230 L 600 280" stroke="#06b6d4" strokeWidth="2.5" fill="none" markerEnd="url(#arrowCyan)" />

            {/* Layer 3: AI & Core Systems (Split Row) */}
            <g>
              <text x="20" y="280" fontSize="16" fontWeight="bold" fill="#94a3b8" letterSpacing="2">AI & CORE LAYER</text>

              {/* AI Gateway */}
              <rect x="100" y="290" width="380" height="110" rx="10" fill="url(#gradAI)" stroke="#f59e0b" strokeWidth="2" />
              <text x="290" y="320" fontSize="14" fontWeight="bold" fill="#f59e0b" textAnchor="middle">🤖 AI Agent Gateway</text>
              <text x="290" y="345" fontSize="11" fill="#cbd5e1" textAnchor="middle">Gemini + OpenAI APIs • Landing Page Gen</text>
              <text x="290" y="363" fontSize="11" fill="#cbd5e1" textAnchor="middle">Analytics • Event Management • NFC Triggers</text>

              {/* Core Dashboard */}
              <rect x="550" y="290" width="380" height="110" rx="10" fill="url(#gradDash)" stroke="#10b981" strokeWidth="2" />
              <text x="740" y="320" fontSize="14" fontWeight="bold" fill="#10b981" textAnchor="middle">🧭 Core Dashboard</text>
              <text x="740" y="345" fontSize="11" fill="#cbd5e1" textAnchor="middle">Next.js 15 Application • Landing Pages</text>
              <text x="740" y="363" fontSize="11" fill="#cbd5e1" textAnchor="middle">Events • NFC Devices • Analytics • Billing</text>
            </g>

            {/* Arrows from AI & Dashboard to Services */}
            <path d="M 290 400 L 290 450" stroke="#f59e0b" strokeWidth="2.5" fill="none" markerEnd="url(#arrowAmber)" />
            <path d="M 740 400 L 740 450" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowGreen)" />

            {/* Layer 4: Services & Processing */}
            <g>
              <text x="20" y="450" fontSize="16" fontWeight="bold" fill="#94a3b8" letterSpacing="2">SERVICES & TRACKING</text>

              {/* Analytics Engine */}
              <rect x="100" y="460" width="280" height="100" rx="10" fill="url(#gradDash)" stroke="#10b981" strokeWidth="2" />
              <text x="240" y="490" fontSize="13" fontWeight="bold" fill="#10b981" textAnchor="middle">📊 Analytics Engine</text>
              <g fontSize="10" fill="#cbd5e1" textAnchor="middle">
                <text x="240" y="510">NFC Scans • Geo-Location</text>
                <text x="240" y="525">UTM Tracking • Customer Journey</text>
                <text x="240" y="540">Push Notifications • Webhooks</text>
              </g>

              {/* Database Layer */}
              <rect x="460" y="460" width="280" height="100" rx="10" fill="url(#gradDB)" stroke="#8b5cf6" strokeWidth="2" />
              <text x="600" y="490" fontSize="13" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">🗄️ Supabase PostgreSQL</text>
              <g fontSize="10" fill="#cbd5e1" textAnchor="middle">
                <text x="600" y="510">Multi-tenant • RLS • Real-time</text>
                <text x="600" y="525">Users • Events • NFC Data</text>
                <text x="600" y="540">90-365 Day Analytics</text>
              </g>

              {/* Security & APIs */}
              <rect x="820" y="460" width="280" height="100" rx="10" fill="url(#gradDB)" stroke="#8b5cf6" strokeWidth="2" />
              <text x="960" y="490" fontSize="13" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">🔐 Security & APIs</text>
              <g fontSize="10" fill="#cbd5e1" textAnchor="middle">
                <text x="960" y="510">Authentication • RBAC • Encryption</text>
                <text x="960" y="525">Developer APIs • Third-party</text>
                <text x="960" y="540">Integrations • Enterprise Controls</text>
              </g>
            </g>

            {/* Arrows to Database */}
            <path d="M 240 560 L 400 560" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowGreen)" />
            <path d="M 600 560 L 760 560" stroke="#8b5cf6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowPurple)" />

            {/* Layer 5: User Journey */}
            <g>
              <text x="20" y="720" fontSize="16" fontWeight="bold" fill="#94a3b8" letterSpacing="2">USER JOURNEY: NFC SCAN FLOW</text>

              {/* Journey Container */}
              <rect x="100" y="740" width="1000" height="200" rx="10" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="8,4" />

              {/* Journey steps */}
              <g>
                {/* Step 1 */}
                <circle cx="150" cy="800" r="12" fill="#3b82f6" />
                <rect x="175" y="780" width="180" height="40" rx="6" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="265" y="798" fontSize="12" fontWeight="bold" fill="#60a5fa" textAnchor="middle">Guest taps NFC device</text>
                <text x="265" y="813" fontSize="10" fill="#cbd5e1" textAnchor="middle">Instant detection</text>

                {/* Step 2 */}
                <circle cx="400" cy="800" r="12" fill="#06b6d4" />
                <path d="M 162 800 L 388 800" stroke="#a855f7" strokeWidth="2" fill="none" />
                <rect x="425" y="780" width="180" height="40" rx="6" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="515" y="798" fontSize="12" fontWeight="bold" fill="#06b6d4" textAnchor="middle">Landing page loads</text>
                <text x="515" y="813" fontSize="10" fill="#cbd5e1" textAnchor="middle">&lt; 1 second</text>

                {/* Step 3 */}
                <circle cx="650" cy="800" r="12" fill="#f59e0b" />
                <path d="M 412 800 L 638 800" stroke="#a855f7" strokeWidth="2" fill="none" />
                <rect x="675" y="780" width="180" height="40" rx="6" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="765" y="798" fontSize="12" fontWeight="bold" fill="#f59e0b" textAnchor="middle">Session logged</text>
                <text x="765" y="813" fontSize="10" fill="#cbd5e1" textAnchor="middle">Device, Geo, Time</text>

                {/* Step 4 */}
                <circle cx="900" cy="800" r="12" fill="#10b981" />
                <path d="M 662 800 L 888 800" stroke="#a855f7" strokeWidth="2" fill="none" />
                <rect x="925" y="780" width="180" height="40" rx="6" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1.5" />
                <text x="1015" y="798" fontSize="12" fontWeight="bold" fill="#10b981" textAnchor="middle">AI triggers action</text>
                <text x="1015" y="813" fontSize="10" fill="#cbd5e1" textAnchor="middle">Personalized push</text>

                {/* Step 2: Bottom row */}
                <circle cx="275" cy="880" r="12" fill="#8b5cf6" />
                <path d="M 912 800 L 287 868" stroke="#a855f7" strokeWidth="2" fill="none" />
                <rect x="300" y="860" width="180" height="40" rx="6" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="390" y="878" fontSize="12" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">Analytics stored</text>
                <text x="390" y="893" fontSize="10" fill="#cbd5e1" textAnchor="middle">Real-time dashboard</text>

                {/* Step 3: Bottom row */}
                <circle cx="550" cy="880" r="12" fill="#f97316" />
                <path d="M 287 880 L 538 880" stroke="#a855f7" strokeWidth="2" fill="none" />
                <rect x="575" y="860" width="180" height="40" rx="6" fill="rgba(249, 115, 22, 0.1)" stroke="#f97316" strokeWidth="1.5" />
                <text x="665" y="878" fontSize="12" fontWeight="bold" fill="#f97316" textAnchor="middle">Insights generated</text>
                <text x="665" y="893" fontSize="10" fill="#cbd5e1" textAnchor="middle">CEO visibility ✓</text>
              </g>
            </g>

            {/* Data Flow Annotations */}
            <g>
              <text x="1100" y="160" fontSize="14" fontWeight="bold" fill="#60a5fa">⬇️ Data Flows</text>
              
              {/* API Requests */}
              <path d="M 1020 220 L 1180 220" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />
              <text x="1200" y="225" fontSize="11" fill="#cbd5e1">API Requests</text>

              {/* Database Operations */}
              <path d="M 1020 420 L 1180 420" stroke="#8b5cf6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowPurple)" />
              <text x="1200" y="425" fontSize="11" fill="#cbd5e1">DB Writes</text>

              {/* Notifications */}
              <path d="M 1020 560 L 1180 560" stroke="#f97316" strokeWidth="2.5" fill="none" markerEnd="url(#arrowOrange)" />
              <text x="1200" y="565" fontSize="11" fill="#cbd5e1">Notifications</text>
            </g>
          </svg>
        </div>

        {/* Key Features Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-blue-900 bg-gradient-to-br from-blue-950 to-blue-900 p-6 shadow-lg transition-all hover:shadow-blue-900/50 hover:shadow-xl">
            <div className="mb-3 text-2xl">📱</div>
            <h3 className="mb-3 text-lg font-bold text-blue-300">Multi-Entry Platform</h3>
            <p className="text-sm text-gray-300">Seamless access via mobile app, web dashboard, and white-labeled domains with unified authentication.</p>
          </div>

          <div className="rounded-lg border border-amber-900 bg-gradient-to-br from-amber-950 to-amber-900 p-6 shadow-lg transition-all hover:shadow-amber-900/50 hover:shadow-xl">
            <div className="mb-3 text-2xl">🤖</div>
            <h3 className="mb-3 text-lg font-bold text-amber-300">AI-Powered Intelligence</h3>
            <p className="text-sm text-gray-300">Gemini + OpenAI integration powers landing page generation, analytics, and automated marketing triggers.</p>
          </div>

          <div className="rounded-lg border border-green-900 bg-gradient-to-br from-green-950 to-green-900 p-6 shadow-lg transition-all hover:shadow-green-900/50 hover:shadow-xl">
            <div className="mb-3 text-2xl">🧭</div>
            <h3 className="mb-3 text-lg font-bold text-green-300">Unified Dashboard</h3>
            <p className="text-sm text-gray-300">Next.js 15 core application manages landing pages, events, NFC devices, analytics, team management, and billing.</p>
          </div>

          <div className="rounded-lg border border-cyan-900 bg-gradient-to-br from-cyan-950 to-cyan-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/50 hover:shadow-xl">
            <div className="mb-3 text-2xl">📊</div>
            <h3 className="mb-3 text-lg font-bold text-cyan-300">Real-Time Analytics</h3>
            <p className="text-sm text-gray-300">Comprehensive tracking of NFC scans, geo-location, UTM parameters, and customer journey mapping with instant insights.</p>
          </div>

          <div className="rounded-lg border border-purple-900 bg-gradient-to-br from-purple-950 to-purple-900 p-6 shadow-lg transition-all hover:shadow-purple-900/50 hover:shadow-xl">
            <div className="mb-3 text-2xl">🗄️</div>
            <h3 className="mb-3 text-lg font-bold text-purple-300">Enterprise Database</h3>
            <p className="text-sm text-gray-300">Supabase PostgreSQL with multi-tenant RLS, real-time capabilities, and 90-365 day cookie tracking.</p>
          </div>

          <div className="rounded-lg border border-orange-900 bg-gradient-to-br from-orange-950 to-orange-900 p-6 shadow-lg transition-all hover:shadow-orange-900/50 hover:shadow-xl">
            <div className="mb-3 text-2xl">🔐</div>
            <h3 className="mb-3 text-lg font-bold text-orange-300">Security & APIs</h3>
            <p className="text-sm text-gray-300">Enterprise-grade security with Clerk auth, RBAC, developer APIs, webhooks, and third-party integrations.</p>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="rounded-lg border border-purple-700 bg-gradient-to-r from-purple-950 to-purple-900 p-8 shadow-xl">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-purple-200">
            <span>🚀</span>
            Competitive Advantages
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-lg bg-black/30 p-4 backdrop-blur">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-purple-200">End-to-End NFC Supply Chain</p>
                <p className="text-sm text-gray-400">Direct ownership of NFC hardware provisioning and management</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg bg-black/30 p-4 backdrop-blur">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-purple-200">Multi-Source Data Fusion</p>
                <p className="text-sm text-gray-400">NFC + UTM + cookies tied to per-user login and behavioral profiles</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg bg-black/30 p-4 backdrop-blur">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-purple-200">AI-Driven Personalization</p>
                <p className="text-sm text-gray-400">Real-time marketing automation powered by Gemini & OpenAI</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg bg-black/30 p-4 backdrop-blur">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-purple-200">White-Label Ready</p>
                <p className="text-sm text-gray-400">Rebrandable portals for resale and enterprise customization</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg bg-black/30 p-4 backdrop-blur">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-purple-200">Zero-Latency Delivery</p>
                <p className="text-sm text-gray-400">Landing pages load in &lt;1 second with instant NFC processing</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg bg-black/30 p-4 backdrop-blur">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-purple-200">Full Platform Control</p>
                <p className="text-sm text-gray-400">Independent infrastructure with no third-party platform dependency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
