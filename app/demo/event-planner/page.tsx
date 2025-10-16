export default function EventPlannerPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header with Event Context */}
      <div className="border-b border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Event Management Portal</h1>
            <p className="text-sm text-gray-400">Current Event: Tech Summit 2025 • Status: Active</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-300">Live Check-ins: 487/845</div>
            <div className="text-xs text-gray-500">Updated 30 seconds ago</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Event Overview */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Active Event</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-6 shadow-lg lg:col-span-2">
              <h3 className="mb-2 text-2xl font-bold text-white">Tech Summit 2025</h3>
              <p className="mb-4 text-sm text-purple-100">San Francisco Convention Center</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-purple-200">Date & Time</div>
                  <div className="mt-1 font-semibold text-white">May 15, 2025 • 9:00 AM</div>
                </div>
                <div>
                  <div className="text-xs text-purple-200">Duration</div>
                  <div className="mt-1 font-semibold text-white">8 hours</div>
                </div>
                <div>
                  <div className="text-xs text-purple-200">Expected Attendance</div>
                  <div className="mt-1 font-semibold text-white">850 guests</div>
                </div>
                <div>
                  <div className="text-xs text-purple-200">NFC Devices</div>
                  <div className="mt-1 font-semibold text-white">4 check-in stations</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-900 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">Check-in Progress</div>
              <div className="mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-pink-300">57.6%</div>
                  <div className="text-xs text-pink-200">Check-in Rate</div>
                </div>
              </div>
              <div className="space-y-2 border-t border-pink-500 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-pink-200">Checked In:</span>
                  <span className="font-bold text-white">487</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-pink-200">Pending:</span>
                  <span className="font-bold text-white">358</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-pink-200">No-Show:</span>
                  <span className="font-bold text-red-300">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Management */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Guest Management</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 p-6 shadow-lg">
              <div className="text-sm text-cyan-100">Registered</div>
              <div className="mt-3 text-4xl font-bold text-white">845</div>
              <div className="mt-2 text-xs text-cyan-200">RSVPs confirmed</div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-900 p-6 shadow-lg">
              <div className="text-sm text-green-100">Checked In</div>
              <div className="mt-3 text-4xl font-bold text-white">487</div>
              <div className="mt-2 text-xs text-green-200">NFC taps logged</div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 p-6 shadow-lg">
              <div className="text-sm text-blue-100">Plus-Ones</div>
              <div className="mt-3 text-4xl font-bold text-white">87</div>
              <div className="mt-2 text-xs text-blue-200">Additional guests</div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-orange-900 p-6 shadow-lg">
              <div className="text-sm text-orange-100">Dietary Preferences</div>
              <div className="mt-3 text-4xl font-bold text-white">234</div>
              <div className="mt-2 text-xs text-orange-200">Special requirements</div>
            </div>
          </div>
        </div>

        {/* Real-Time Check-In Analytics */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Real-Time Check-In Analytics</h2>
          <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-semibold text-white">9:00 AM - 10:00 AM</span>
                  <span className="text-sm text-cyan-400">142 check-ins</span>
                </div>
                <div className="h-3 w-full rounded-full bg-gray-700">
                  <div className="h-3 w-1/4 rounded-full bg-cyan-500"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-semibold text-white">10:00 AM - 11:00 AM</span>
                  <span className="text-sm text-green-400">268 check-ins</span>
                </div>
                <div className="h-3 w-full rounded-full bg-gray-700">
                  <div className="h-3 w-1/2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-semibold text-white">11:00 AM - 12:00 PM</span>
                  <span className="text-sm text-purple-400">77 check-ins</span>
                </div>
                <div className="h-3 w-full rounded-full bg-gray-700">
                  <div className="h-3 w-1/4 rounded-full bg-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFC Check-In Stations */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">NFC Check-In Stations</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { name: 'Main Entrance', scans: 312, status: 'Active' },
              { name: 'VIP Lounge', scans: 89, status: 'Active' },
              { name: 'Conference Room A', scans: 56, status: 'Active' },
              { name: 'Registration Desk', scans: 30, status: 'Standby' },
            ].map((station, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <div>
                  <div className="font-semibold text-white">{station.name}</div>
                  <div className="text-xs text-gray-400">Station {idx + 1}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-400">{station.scans}</div>
                  <div className={`text-xs ${station.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {station.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Communications */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Pre-Event Communications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <div>
                <div className="font-semibold text-white">Welcome Email</div>
                <div className="text-xs text-gray-400">Sent to all registered guests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">98.2%</div>
                <div className="text-xs text-gray-400">open rate</div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <div>
                <div className="font-semibold text-white">Reminder Push Notification</div>
                <div className="text-xs text-gray-400">Sent 24 hours before event</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">743</div>
                <div className="text-xs text-gray-400">interactions</div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <div>
                <div className="font-semibold text-white">Event Schedule</div>
                <div className="text-xs text-gray-400">Session times and location info</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-xs text-gray-400">sessions scheduled</div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Capabilities */}
        <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-bold text-white">Event Planner Capabilities</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-sm text-gray-300">✓ NFC attendee check-in and sign-in</div>
            <div className="text-sm text-gray-300">✓ Guest management (RSVPs, plus-ones)</div>
            <div className="text-sm text-gray-300">✓ Meal preferences and dietary tracking</div>
            <div className="text-sm text-gray-300">✓ Photo gallery from guest uploads</div>
            <div className="text-sm text-gray-300">✓ Real-time attendance analytics</div>
            <div className="text-sm text-gray-300">✓ Pre-event communications (email, SMS, push)</div>
            <div className="text-sm text-gray-300">✓ Event schedules and session management</div>
            <div className="text-sm text-gray-300">✓ Post-event recap and reporting</div>
            <div className="text-sm text-gray-300">✓ Geolocation tracking and heatmaps</div>
          </div>
        </div>
      </div>
    </div>
  );
}
