export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 text-4xl font-bold text-white">System Architecture</h1>
          <p className="text-lg text-gray-300">Cosmic Portals NFC SaaS Platform</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Architecture Overview */}
        <div className="mb-12 rounded-lg border border-gray-800 bg-gray-900 p-8">
          <svg viewBox="0 0 1400 900" className="w-full">
            {/* Layer Labels */}
            <text x="20" y="40" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              ENTRY POINTS
            </text>
            <text x="20" y="140" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              AUTH LAYER
            </text>
            <text x="20" y="240" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              AI LAYER
            </text>
            <text x="20" y="340" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              CORE DASHBOARD
            </text>
            <text x="20" y="500" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              ANALYTICS & TRACKING
            </text>
            <text x="20" y="650" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              DATABASE LAYER
            </text>
            <text x="20" y="800" fontSize="14" fontWeight="bold" fill="#94a3b8" className="font-mono">
              SECURITY & API
            </text>

            {/* 1. ENTRY POINTS (Blue) */}
            <rect x="150" y="20" width="120" height="60" rx="8" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
            <text x="210" y="55" fontSize="12" fontWeight="bold" fill="#0ea5e9" textAnchor="middle">
              📱 Mobile App
            </text>

            <rect x="320" y="20" width="120" height="60" rx="8" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
            <text x="380" y="55" fontSize="12" fontWeight="bold" fill="#0ea5e9" textAnchor="middle">
              🌐 Web App
            </text>

            <rect x="490" y="20" width="140" height="60" rx="8" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
            <text x="560" y="55" fontSize="12" fontWeight="bold" fill="#0ea5e9" textAnchor="middle">
              🎨 White-Label
            </text>

            {/* Arrows to Auth */}
            <path d="M 210 80 L 210 110" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)" />
            <path d="M 380 80 L 380 110" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)" />
            <path d="M 560 80 L 560 110" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)" />

            {/* 2. AUTH LAYER (Blue) */}
            <rect x="150" y="110" width="410" height="80" rx="8" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" strokeWidth="2" />
            <text x="355" y="135" fontSize="13" fontWeight="bold" fill="#0ea5e9" textAnchor="middle">
              🔐 Clerk Authentication
            </text>
            <text x="355" y="160" fontSize="11" fill="#cbd5e1" textAnchor="middle">
              SSO • MFA • Session Management • RBAC
            </text>

            {/* Arrow to AI Layer */}
            <path d="M 355 190 L 355 220" stroke="#6366f1" strokeWidth="2" fill="none" markerEnd="url(#arrowpurple)" />

            {/* 3. AI LAYER (Yellow) */}
            <rect x="150" y="220" width="410" height="100" rx="8" fill="#eab308" opacity="0.15" stroke="#eab308" strokeWidth="2" />
            <text x="200" y="245" fontSize="12" fontWeight="bold" fill="#eab308">
              🤖 AI Agent Gateway
            </text>
            <text x="200" y="270" fontSize="11" fill="#cbd5e1">
              Gemini + OpenAI APIs
            </text>

            <g>
              <rect x="350" y="235" width="90" height="30" rx="4" fill="#eab308" opacity="0.25" stroke="#eab308" strokeWidth="1" />
              <text x="395" y="255" fontSize="10" fontWeight="bold" fill="#eab308" textAnchor="middle">
                Landing Pages
              </text>
            </g>

            <g>
              <rect x="460" y="235" width="80" height="30" rx="4" fill="#eab308" opacity="0.25" stroke="#eab308" strokeWidth="1" />
              <text x="500" y="255" fontSize="10" fontWeight="bold" fill="#eab308" textAnchor="middle">
                Analytics
              </text>
            </g>

            <g>
              <rect x="350" y="275" width="90" height="30" rx="4" fill="#eab308" opacity="0.25" stroke="#eab308" strokeWidth="1" />
              <text x="395" y="295" fontSize="10" fontWeight="bold" fill="#eab308" textAnchor="middle">
                Event Manager
              </text>
            </g>

            <g>
              <rect x="460" y="275" width="80" height="30" rx="4" fill="#eab308" opacity="0.25" stroke="#eab308" strokeWidth="1" />
              <text x="500" y="295" fontSize="10" fontWeight="bold" fill="#eab308" textAnchor="middle">
                NFC Manager
              </text>
            </g>

            {/* Arrow to Core Dashboard */}
            <path d="M 355 320 L 355 340" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arroworange)" />

            {/* 4. CORE DASHBOARD (Orange) */}
            <rect x="150" y="340" width="410" height="140" rx="8" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="2" />
            <text x="200" y="365" fontSize="12" fontWeight="bold" fill="#f97316">
              🧭 Central Dashboard
            </text>
            <text x="200" y="385" fontSize="11" fill="#cbd5e1">
              Next.js 15 Application
            </text>

            {/* Dashboard modules grid */}
            <g>
              <rect x="160" y="400" width="80" height="28" rx="4" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1" />
              <text x="200" y="419" fontSize="9" fontWeight="bold" fill="#f97316" textAnchor="middle">
                Landing Pages
              </text>
            </g>

            <g>
              <rect x="255" y="400" width="80" height="28" rx="4" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1" />
              <text x="295" y="419" fontSize="9" fontWeight="bold" fill="#f97316" textAnchor="middle">
                Events
              </text>
            </g>

            <g>
              <rect x="350" y="400" width="80" height="28" rx="4" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1" />
              <text x="390" y="419" fontSize="9" fontWeight="bold" fill="#f97316" textAnchor="middle">
                Devices
              </text>
            </g>

            <g>
              <rect x="160" y="440" width="80" height="28" rx="4" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1" />
              <text x="200" y="459" fontSize="9" fontWeight="bold" fill="#f97316" textAnchor="middle">
                Analytics
              </text>
            </g>

            <g>
              <rect x="255" y="440" width="80" height="28" rx="4" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1" />
              <text x="295" y="459" fontSize="9" fontWeight="bold" fill="#f97316" textAnchor="middle">
                Team Mgmt
              </text>
            </g>

            <g>
              <rect x="350" y="440" width="80" height="28" rx="4" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1" />
              <text x="390" y="459" fontSize="9" fontWeight="bold" fill="#f97316" textAnchor="middle">
                Billing
              </text>
            </g>

            {/* Arrows from Dashboard to Analytics & Database */}
            <path d="M 355 480 L 355 500" stroke="#1e40af" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)" />

            {/* 5. ANALYTICS & TRACKING (Blue) */}
            <rect x="150" y="500" width="410" height="120" rx="8" fill="#1e40af" opacity="0.15" stroke="#1e40af" strokeWidth="2" />
            <text x="200" y="525" fontSize="12" fontWeight="bold" fill="#1e40af">
              📊 Analytics & Tracking Engine
            </text>

            <g>
              <rect x="160" y="540" width="90" height="28" rx="4" fill="#1e40af" opacity="0.25" stroke="#1e40af" strokeWidth="1" />
              <text x="205" y="559" fontSize="9" fontWeight="bold" fill="#1e40af" textAnchor="middle">
                NFC Scans
              </text>
            </g>

            <g>
              <rect x="265" y="540" width="90" height="28" rx="4" fill="#1e40af" opacity="0.25" stroke="#1e40af" strokeWidth="1" />
              <text x="310" y="559" fontSize="9" fontWeight="bold" fill="#1e40af" textAnchor="middle">
                Geo-Location
              </text>
            </g>

            <g>
              <rect x="370" y="540" width="90" height="28" rx="4" fill="#1e40af" opacity="0.25" stroke="#1e40af" strokeWidth="1" />
              <text x="415" y="559" fontSize="9" fontWeight="bold" fill="#1e40af" textAnchor="middle">
                UTM Params
              </text>
            </g>

            <text x="200" y="600" fontSize="11" fill="#cbd5e1">
              📤 Push Notifications • Email Delivery • Webhooks
            </text>

            {/* Arrow to Database */}
            <path d="M 355 620 L 355 640" stroke="#15803d" strokeWidth="2" fill="none" markerEnd="url(#arrowgreen)" />

            {/* 6. DATABASE LAYER (Green) */}
            <rect x="150" y="640" width="410" height="120" rx="8" fill="#15803d" opacity="0.15" stroke="#15803d" strokeWidth="2" />
            <text x="200" y="665" fontSize="12" fontWeight="bold" fill="#15803d">
              🗄 Supabase PostgreSQL
            </text>
            <text x="200" y="685" fontSize="11" fill="#cbd5e1">
              Multi-tenant • Row-Level Security • Real-time Updates
            </text>

            <g>
              <rect x="160" y="700" width="70" height="25" rx="4" fill="#15803d" opacity="0.25" stroke="#15803d" strokeWidth="1" />
              <text x="195" y="717" fontSize="9" fontWeight="bold" fill="#15803d" textAnchor="middle">
                Users
              </text>
            </g>

            <g>
              <rect x="245" y="700" width="70" height="25" rx="4" fill="#15803d" opacity="0.25" stroke="#15803d" strokeWidth="1" />
              <text x="280" y="717" fontSize="9" fontWeight="bold" fill="#15803d" textAnchor="middle">
                Events
              </text>
            </g>

            <g>
              <rect x="330" y="700" width="70" height="25" rx="4" fill="#15803d" opacity="0.25" stroke="#15803d" strokeWidth="1" />
              <text x="365" y="717" fontSize="9" fontWeight="bold" fill="#15803d" textAnchor="middle">
                NFC Data
              </text>
            </g>

            <g>
              <rect x="415" y="700" width="75" height="25" rx="4" fill="#15803d" opacity="0.25" stroke="#15803d" strokeWidth="1" />
              <text x="452" y="717" fontSize="9" fontWeight="bold" fill="#15803d" textAnchor="middle">
                Analytics
              </text>
            </g>

            {/* 7. SECURITY & API LAYER (Brown) */}
            <rect x="150" y="800" width="410" height="60" rx="8" fill="#92400e" opacity="0.15" stroke="#92400e" strokeWidth="2" />
            <text x="200" y="825" fontSize="12" fontWeight="bold" fill="#92400e">
              🔐 Security Layers • 🔌 API Layer
            </text>
            <text x="200" y="845" fontSize="11" fill="#cbd5e1">
              Authentication • RLS • RBAC • Developer API • Webhooks
            </text>

            {/* Arrow Markers */}
            <defs>
              <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#0ea5e9" />
              </marker>
              <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
              </marker>
              <marker id="arroworange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
              </marker>
              <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#15803d" />
              </marker>
            </defs>

            {/* Right Side: Data Flows */}
            <g>
              <text x="650" y="60" fontSize="13" fontWeight="bold" fill="#60a5fa">
                ⬇️ Data Flows
              </text>

              {/* API Requests flow */}
              <path d="M 560 100 L 700 100" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowblueright)" />
              <text x="720" y="105" fontSize="11" fill="#cbd5e1">
                API Requests
              </text>

              {/* Database writes flow */}
              <path d="M 560 400 L 700 400" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowgreenright)" />
              <text x="720" y="405" fontSize="11" fill="#cbd5e1">
                Database Writes
              </text>

              {/* Notifications flow */}
              <path d="M 560 580 L 700 580" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arroworangeright)" />
              <text x="720" y="585" fontSize="11" fill="#cbd5e1">
                Notifications
              </text>
            </g>

            {/* Right Side: User Journey Example */}
            <g>
              <rect x="650" y="150" width="650" height="600" rx="8" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
              <text x="670" y="180" fontSize="13" fontWeight="bold" fill="#6366f1">
                🧭 User Journey: NFC Scan Flow
              </text>

              <circle cx="700" cy="250" r="8" fill="#60a5fa" />
              <text x="720" y="255" fontSize="11" fontWeight="bold" fill="#e0f2fe">
                1. Guest taps NFC device
              </text>

              <path d="M 700 260 L 700 290" stroke="#60a5fa" strokeWidth="2" />

              <circle cx="700" cy="300" r="8" fill="#60a5fa" />
              <text x="720" y="305" fontSize="11" fontWeight="bold" fill="#e0f2fe">
                2. Landing page loads instantly
              </text>

              <path d="M 700 310 L 700 340" stroke="#60a5fa" strokeWidth="2" />

              <circle cx="700" cy="350" r="8" fill="#60a5fa" />
              <text x="720" y="355" fontSize="11" fontWeight="bold" fill="#e0f2fe">
                3. Session logged (Device, Geo, Time)
              </text>

              <path d="M 700 360 L 700 390" stroke="#60a5fa" strokeWidth="2" />

              <circle cx="700" cy="400" r="8" fill="#eab308" />
              <text x="720" y="405" fontSize="11" fontWeight="bold" fill="#fef08a">
                4. AI Geo-Agent triggers push 📤
              </text>

              <path d="M 700 410 L 700 440" stroke="#60a5fa" strokeWidth="2" />

              <circle cx="700" cy="450" r="8" fill="#15803d" />
              <text x="720" y="455" fontSize="11" fontWeight="bold" fill="#dcfce7">
                5. Analytics event stored 🡳
              </text>

              <path d="M 700 460 L 700 490" stroke="#60a5fa" strokeWidth="2" />

              <circle cx="700" cy="500" r="8" fill="#f97316" />
              <text x="720" y="505" fontSize="11" fontWeight="bold" fill="#fed7aa">
                6. Dashboard displays real-time insight
              </text>
            </g>

            <marker id="arrowblueright" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
            </marker>
            <marker id="arrowgreenright" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#059669" />
            </marker>
            <marker id="arroworangeright" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
            </marker>
          </svg>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-blue-800 bg-blue-950 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-400">Multi-Entry Platform</h3>
            <p className="text-sm text-gray-300">Seamless access via mobile app, web dashboard, and white-labeled domains with unified authentication.</p>
          </div>

          <div className="rounded-lg border border-yellow-800 bg-yellow-950 p-6">
            <h3 className="mb-3 text-lg font-bold text-yellow-400">AI-Powered Intelligence</h3>
            <p className="text-sm text-gray-300">Gemini + OpenAI integration powers landing page generation, analytics, and automated marketing triggers.</p>
          </div>

          <div className="rounded-lg border border-orange-800 bg-orange-950 p-6">
            <h3 className="mb-3 text-lg font-bold text-orange-400">Unified Dashboard</h3>
            <p className="text-sm text-gray-300">Next.js 15 core application manages landing pages, events, NFC devices, analytics, team management, and billing.</p>
          </div>

          <div className="rounded-lg border border-blue-800 bg-blue-950 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-400">Real-Time Analytics</h3>
            <p className="text-sm text-gray-300">Comprehensive tracking of NFC scans, geo-location, UTM parameters, and customer journey mapping with instant insights.</p>
          </div>

          <div className="rounded-lg border border-green-800 bg-green-950 p-6">
            <h3 className="mb-3 text-lg font-bold text-green-400">Enterprise Database</h3>
            <p className="text-sm text-gray-300">Supabase PostgreSQL with multi-tenant RLS, real-time capabilities, and 90-365 day cookie tracking.</p>
          </div>

          <div className="rounded-lg border border-amber-800 bg-amber-950 p-6">
            <h3 className="mb-3 text-lg font-bold text-amber-400">Security & APIs</h3>
            <p className="text-sm text-gray-300">Enterprise-grade security with Clerk auth, RBAC, developer APIs, webhooks, and third-party integrations.</p>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-12 rounded-lg border border-purple-800 bg-purple-950 p-8">
          <h2 className="mb-6 text-2xl font-bold text-purple-300">🚀 Competitive Advantages</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">End-to-End NFC Supply Chain</p>
                <p className="text-sm text-gray-300">Direct ownership of NFC hardware provisioning and management</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Multi-Source Data Fusion</p>
                <p className="text-sm text-gray-300">NFC + UTM + cookies tied to per-user login and behavioral profiles</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">AI-Driven Personalization</p>
                <p className="text-sm text-gray-300">Real-time marketing automation powered by Gemini & OpenAI</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">White-Label Ready</p>
                <p className="text-sm text-gray-300">Rebrandable portals for resale and enterprise customization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
