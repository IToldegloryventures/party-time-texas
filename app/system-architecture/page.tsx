export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-3 text-5xl font-bold text-white">System Architecture</h1>
          <p className="text-xl text-gray-300">Cosmic Portals NFC SaaS Platform Infrastructure</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Section 1: NFC Hardware & Management */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <h2 className="text-3xl font-bold text-white">NFC Hardware & Management</h2>
            <p className="mt-2 text-gray-400">Device registration, status tracking, and real-time monitoring</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Device Management Card */}
            <div className="rounded-lg border border-blue-800 bg-gradient-to-br from-blue-950 to-blue-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/20 p-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-blue-300">Device Management</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>NFC Device Registration & Status Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>NFC Business Cards with Batch Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Trade Show Badges & Event Signage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Real-time Device Status Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Device Performance Analytics</span>
                </li>
              </ul>
            </div>

            {/* Check-In Stations Card */}
            <div className="rounded-lg border border-blue-800 bg-gradient-to-br from-blue-950 to-blue-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/20 p-3">
                  <span className="text-2xl">🎫</span>
                </div>
                <h3 className="text-lg font-bold text-blue-300">Check-In Stations</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Main Entrance, VIP Lounge, Conference Rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Active/Standby Status Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Location-based NFC Deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Station-Specific Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>Performance Comparison Tools</span>
                </li>
              </ul>
            </div>

            {/* Active/Inactive States Card */}
            <div className="rounded-lg border border-blue-800 bg-gradient-to-br from-blue-950 to-blue-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/20 p-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-blue-300">Device Status</h3>
              </div>
              <div className="space-y-3">
                <div className="rounded border border-green-500/30 bg-green-500/10 p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-semibold text-green-300">Active</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Device actively scanning NFC tags</p>
                </div>
                <div className="rounded border border-yellow-500/30 bg-yellow-500/10 p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span className="text-sm font-semibold text-yellow-300">Standby</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Device ready but not currently scanning</p>
                </div>
                <div className="rounded border border-red-500/30 bg-red-500/10 p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-semibold text-red-300">Inactive</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Device offline or disabled</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Analytics & Tracking */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-cyan-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Analytics & Tracking Intelligence</h2>
            <p className="mt-2 text-gray-400">Comprehensive data collection and real-time insights</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Dashboard Analytics */}
            <div className="rounded-lg border border-cyan-800 bg-gradient-to-br from-cyan-950 to-cyan-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/20 p-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-300">Dashboard Analytics</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded border border-cyan-700/50 bg-black/30 p-3">
                  <div className="text-2xl font-bold text-cyan-400">0</div>
                  <div className="text-xs text-gray-400">Total NFC Scans</div>
                </div>
                <div className="rounded border border-cyan-700/50 bg-black/30 p-3">
                  <div className="text-2xl font-bold text-cyan-400">$0</div>
                  <div className="text-xs text-gray-400">Monthly Revenue</div>
                </div>
                <div className="rounded border border-cyan-700/50 bg-black/30 p-3">
                  <div className="text-2xl font-bold text-cyan-400">0%</div>
                  <div className="text-xs text-gray-400">Growth Rate</div>
                </div>
                <div className="rounded border border-cyan-700/50 bg-black/30 p-3">
                  <div className="text-2xl font-bold text-cyan-400">0</div>
                  <div className="text-xs text-gray-400">Active Users</div>
                </div>
              </div>
            </div>

            {/* Real-time Event Analytics */}
            <div className="rounded-lg border border-cyan-800 bg-gradient-to-br from-cyan-950 to-cyan-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/20 p-3">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-300">Event Analytics</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded bg-black/30 p-3">
                  <span className="text-sm text-gray-300">Registered Guests</span>
                  <span className="font-bold text-cyan-400">0</span>
                </div>
                <div className="flex items-center justify-between rounded bg-black/30 p-3">
                  <span className="text-sm text-gray-300">Checked In</span>
                  <span className="font-bold text-green-400">0</span>
                </div>
                <div className="flex items-center justify-between rounded bg-black/30 p-3">
                  <span className="text-sm text-gray-300">Pending</span>
                  <span className="font-bold text-yellow-400">0</span>
                </div>
                <div className="flex items-center justify-between rounded bg-black/30 p-3">
                  <span className="text-sm text-gray-300">No-Shows</span>
                  <span className="font-bold text-red-400">0</span>
                </div>
              </div>
            </div>

            {/* Device-Level Analytics */}
            <div className="rounded-lg border border-cyan-800 bg-gradient-to-br from-cyan-950 to-cyan-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/20 p-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-300">Per-Device Metrics</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Per-Device Scan Counts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Scan Performance Time-Series</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Device Utilization Metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>ROI Analysis per Device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Station Performance Comparison</span>
                </li>
              </ul>
            </div>

            {/* Conversion Tracking */}
            <div className="rounded-lg border border-cyan-800 bg-gradient-to-br from-cyan-950 to-cyan-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/20 p-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-300">Conversion Tracking</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Conversion Rate Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Time-Series Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Monthly Scan Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Growth Rate Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Uptime Tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Geo Marketing & Location Intelligence */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Geo Marketing & Location Intelligence</h2>
            <p className="mt-2 text-gray-400">Location-based tracking and venue optimization</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Location Data */}
            <div className="rounded-lg border border-green-800 bg-gradient-to-br from-green-950 to-green-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-bold text-green-300">Location Data Collection</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Station-Specific Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Geographic Scan Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Location Performance Metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Venue Heat Mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>High-Traffic Area Identification</span>
                </li>
              </ul>
            </div>

            {/* Behavior Tracking */}
            <div className="rounded-lg border border-green-800 bg-gradient-to-br from-green-950 to-green-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <span className="text-2xl">👣</span>
                </div>
                <h3 className="text-lg font-bold text-green-300">Behavior Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Attendee Movement Patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Station Performance Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Geographic Conversion Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Location-to-Conversion Mapping</span>
                </li>
              </ul>
            </div>

            {/* Venue Optimization */}
            <div className="rounded-lg border border-green-800 bg-gradient-to-br from-green-950 to-green-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-bold text-green-300">Venue Optimization</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Data-Driven Station Placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Bottleneck Identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Traffic Flow Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Staffing Recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Resource Planning Insights</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Event Management */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Event Management & Guest Experience</h2>
            <p className="mt-2 text-gray-400">Seamless check-in and interactive guest portals</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Check-In System */}
            <div className="rounded-lg border border-purple-800 bg-gradient-to-br from-purple-950 to-purple-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <span className="text-2xl">🎫</span>
                </div>
                <h3 className="text-lg font-bold text-purple-300">Event Check-In System</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Multi-Station Check-In</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Real-time Attendance Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Guest Journey Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Photo Gallery Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Live Checked-in vs Pending Display</span>
                </li>
              </ul>
            </div>

            {/* Guest Portal */}
            <div className="rounded-lg border border-purple-800 bg-gradient-to-br from-purple-950 to-purple-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-bold text-purple-300">Guest Portal Features</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Event Details & Dress Code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Interactive Schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>RSVP Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Photo Sharing & Gallery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>Attendee Directory</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Business Intelligence */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-orange-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Business Intelligence & ROI Tracking</h2>
            <p className="mt-2 text-gray-400">Revenue analytics and engagement metrics</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Revenue Analytics */}
            <div className="rounded-lg border border-orange-800 bg-gradient-to-br from-orange-950 to-orange-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-orange-500/20 p-3">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-orange-300">Revenue Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Monthly Revenue Growth Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Platform-wide Revenue Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Growth Rate Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>ROI Attribution from NFC Scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Business Outcome Mapping</span>
                </li>
              </ul>
            </div>

            {/* Engagement Metrics */}
            <div className="rounded-lg border border-orange-800 bg-gradient-to-br from-orange-950 to-orange-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-orange-500/20 p-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-orange-300">Engagement Metrics</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Active User Growth Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Scan Volume Growth Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Conversion Rate Improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Real-time Activity Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Participation Tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Multi-Tenant Platform */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-pink-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Multi-Tenant Platform Features</h2>
            <p className="mt-2 text-gray-400">Enterprise organization management and team collaboration</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Organization Management */}
            <div className="rounded-lg border border-pink-800 bg-gradient-to-br from-pink-950 to-pink-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-pink-500/20 p-3">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-bold text-pink-300">Organization Management</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Multi-tenant Data Isolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Row-Level Security Policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Organization-specific Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>White-label Customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Cross-Organization Device Management</span>
                </li>
              </ul>
            </div>

            {/* Team Collaboration */}
            <div className="rounded-lg border border-pink-800 bg-gradient-to-br from-pink-950 to-pink-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-pink-500/20 p-3">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-lg font-bold text-pink-300">Team Collaboration</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Role-based Access Control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Super Admin, Owner, Admin, Member, Guest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Team Management with Invitations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Task Assignment & Progress Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">→</span>
                  <span>Shared Dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Advanced Analytics */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-indigo-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Advanced Analytics Capabilities</h2>
            <p className="mt-2 text-gray-400">Behavioral insights and predictive analytics</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Behavioral Analytics */}
            <div className="rounded-lg border border-indigo-800 bg-gradient-to-br from-indigo-950 to-indigo-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/20 p-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-bold text-indigo-300">Behavioral Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>User Journey Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Session Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Preference Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">��</span>
                  <span>Engagement Scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Interaction Pattern Analysis</span>
                </li>
              </ul>
            </div>

            {/* Predictive Analytics */}
            <div className="rounded-lg border border-indigo-800 bg-gradient-to-br from-indigo-950 to-indigo-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/20 p-3">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-lg font-bold text-indigo-300">Predictive Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Attendance Prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Peak Time Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Conversion Forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Engagement Prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span>Resource Planning Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Integration & Automation */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-emerald-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Integration & Automation</h2>
            <p className="mt-2 text-gray-400">Real-time processing and third-party integrations</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Real-time Processing */}
            <div className="rounded-lg border border-emerald-800 bg-gradient-to-br from-emerald-950 to-emerald-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/20 p-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-300">Real-time Processing</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Live Scan Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Dashboard Updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Automated Notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Data Synchronization</span>
                </li>
              </ul>
            </div>

            {/* API Integration */}
            <div className="rounded-lg border border-emerald-800 bg-gradient-to-br from-emerald-950 to-emerald-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/20 p-3">
                  <span className="text-2xl">🔌</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-300">API Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>REST API Endpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Webhook System</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Data Export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Third-party Integrations</span>
                </li>
              </ul>
            </div>

            {/* Automation */}
            <div className="rounded-lg border border-emerald-800 bg-gradient-to-br from-emerald-950 to-emerald-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/20 p-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-300">Automation</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Check-in Alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>No-show Notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Peak Time Alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>Custom Workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Flow Overview */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Data Flow Architecture</h2>
            <p className="mt-2 text-gray-400">How data moves through the system</p>
          </div>

          <div className="space-y-4">
            {/* NFC Scan Flow */}
            <div className="rounded-lg border border-blue-800 bg-gradient-to-r from-blue-950 to-blue-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-300">
                <span>📱</span> NFC Scan → Database Flow
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="rounded bg-blue-500/20 px-3 py-1">Guest taps device</span>
                <span className="text-blue-400">→</span>
                <span className="rounded bg-blue-500/20 px-3 py-1">Mobile browser opens</span>
                <span className="text-blue-400">→</span>
                <span className="rounded bg-blue-500/20 px-3 py-1">POST /api/track-scan</span>
                <span className="text-blue-400">→</span>
                <span className="rounded bg-blue-500/20 px-3 py-1">Database record</span>
              </div>
            </div>

            {/* Device Management Flow */}
            <div className="rounded-lg border border-green-800 bg-gradient-to-r from-green-950 to-green-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-300">
                <span>⚙️</span> Device Management → Database Flow
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="rounded bg-green-500/20 px-3 py-1">Admin registers device</span>
                <span className="text-green-400">→</span>
                <span className="rounded bg-green-500/20 px-3 py-1">API Route triggered</span>
                <span className="text-green-400">→</span>
                <span className="rounded bg-green-500/20 px-3 py-1">Link to landing page</span>
                <span className="text-green-400">→</span>
                <span className="rounded bg-green-500/20 px-3 py-1">Database updated</span>
              </div>
            </div>

            {/* Analytics Flow */}
            <div className="rounded-lg border border-cyan-800 bg-gradient-to-r from-cyan-950 to-cyan-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-cyan-300">
                <span>📊</span> Analytics → Dashboard Flow
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="rounded bg-cyan-500/20 px-3 py-1">nfc_scans table</span>
                <span className="text-cyan-400">→</span>
                <span className="rounded bg-cyan-500/20 px-3 py-1">GET /api/analytics</span>
                <span className="text-cyan-400">→</span>
                <span className="rounded bg-cyan-500/20 px-3 py-1">Calculate metrics</span>
                <span className="text-cyan-400">→</span>
                <span className="rounded bg-cyan-500/20 px-3 py-1">React components</span>
              </div>
            </div>

            {/* Real-time Sync Flow */}
            <div className="rounded-lg border border-purple-800 bg-gradient-to-r from-purple-950 to-purple-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-purple-300">
                <span>🔄</span> Real-time Synchronization Flow
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="rounded bg-purple-500/20 px-3 py-1">Database change</span>
                <span className="text-purple-400">→</span>
                <span className="rounded bg-purple-500/20 px-3 py-1">Supabase Realtime</span>
                <span className="text-purple-400">→</span>
                <span className="rounded bg-purple-500/20 px-3 py-1">Frontend subscription</span>
                <span className="text-purple-400">→</span>
                <span className="rounded bg-purple-500/20 px-3 py-1">UI update</span>
              </div>
            </div>
          </div>
        </section>

        {/* API Layers */}
        <section className="mb-20">
          <div className="mb-8 border-l-4 border-orange-500 pl-6">
            <h2 className="text-3xl font-bold text-white">API Connector Layers</h2>
            <p className="mt-2 text-gray-400">System communication architecture</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Frontend to API */}
            <div className="rounded-lg border border-orange-800 bg-gradient-to-br from-orange-950 to-orange-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-orange-300">
                <span>📱</span> Frontend → API
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Next.js API Routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Clerk authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Request validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Error handling</span>
                </li>
              </ul>
            </div>

            {/* API to Database */}
            <div className="rounded-lg border border-orange-800 bg-gradient-to-br from-orange-950 to-orange-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-orange-300">
                <span>🔌</span> API → Database
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Supabase client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>RLS policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Transaction management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Data consistency</span>
                </li>
              </ul>
            </div>

            {/* Database to Analytics */}
            <div className="rounded-lg border border-orange-800 bg-gradient-to-br from-orange-950 to-orange-900 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-orange-300">
                <span>📈</span> Database → Analytics
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Aggregation queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Real-time subscriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Data export (CSV/JSON)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
