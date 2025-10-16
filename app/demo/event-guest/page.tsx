export default function EventGuestPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Event Experience Portal</h1>
            <p className="text-sm text-gray-400">Guest Role • Role: Attendee</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-300">Session Active</div>
            <div className="text-xs text-gray-500">Device ID: A7F2K9</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-8">
        {/* Check-In Status */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-8 shadow-lg">
            <div className="mb-6 text-center">
              <div className="mb-4 text-6xl">✅</div>
              <h2 className="text-3xl font-bold text-white">You're Checked In!</h2>
              <p className="mt-2 text-sm text-purple-100">Welcome to Tech Summit 2025</p>
            </div>
            <div className="space-y-3 border-t border-purple-500 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-100">Check-in Time:</span>
                <span className="font-semibold text-white">9:47 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-100">Check-in Method:</span>
                <span className="font-semibold text-white">NFC Badge Tap</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-100">Station:</span>
                <span className="font-semibold text-white">Main Entrance</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-100">Badge Number:</span>
                <span className="font-semibold text-white">#487</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-white">Event Information</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-800 p-4">
              <div className="text-xs font-semibold text-gray-400">EVENT NAME</div>
              <div className="mt-2 text-lg font-bold text-white">Tech Summit 2025</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-800 p-4">
                <div className="text-xs font-semibold text-gray-400">DATE & TIME</div>
                <div className="mt-2 text-sm font-semibold text-white">May 15, 2025</div>
                <div className="text-xs text-gray-400">9:00 AM - 5:00 PM</div>
              </div>
              <div className="rounded-lg bg-gray-800 p-4">
                <div className="text-xs font-semibold text-gray-400">LOCATION</div>
                <div className="mt-2 text-sm font-semibold text-white">San Francisco</div>
                <div className="text-xs text-gray-400">Convention Center</div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-white">Today's Schedule</h2>
          <div className="space-y-3">
            <div className="rounded-lg border-l-4 border-cyan-500 bg-gray-800 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-white">Welcome Keynote</div>
                  <div className="mt-1 text-xs text-gray-400">Main Stage</div>
                </div>
                <div className="text-xs font-semibold text-cyan-400">9:00 - 10:00</div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-gray-800 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-white">Breakout Sessions</div>
                  <div className="mt-1 text-xs text-gray-400">Multiple Venues</div>
                </div>
                <div className="text-xs font-semibold text-purple-400">10:30 - 12:00</div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-green-500 bg-gray-800 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-white">Lunch & Networking</div>
                  <div className="mt-1 text-xs text-gray-400">Grand Ballroom</div>
                </div>
                <div className="text-xs font-semibold text-green-400">12:00 - 1:30</div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-pink-500 bg-gray-800 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-white">Keynote Panel Discussion</div>
                  <div className="mt-1 text-xs text-gray-400">Main Stage</div>
                </div>
                <div className="text-xs font-semibold text-pink-400">2:00 - 3:30</div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-yellow-500 bg-gray-800 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-white">Closing Reception & Photos</div>
                  <div className="mt-1 text-xs text-gray-400">Outdoor Terrace</div>
                </div>
                <div className="text-xs font-semibold text-yellow-400">4:00 - 5:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Experience Features */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-white">Your Event Dashboard</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 p-4 text-center">
              <div className="text-2xl">📸</div>
              <div className="mt-2 text-sm font-semibold text-white">Photo Gallery</div>
              <p className="mt-1 text-xs text-cyan-100">View & share event photos</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-4 text-center">
              <div className="text-2xl">🗺️</div>
              <div className="mt-2 text-sm font-semibold text-white">Venue Map</div>
              <p className="mt-1 text-xs text-purple-100">Navigate the event space</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-900 p-4 text-center">
              <div className="text-2xl">👥</div>
              <div className="mt-2 text-sm font-semibold text-white">Attendees</div>
              <p className="mt-1 text-xs text-pink-100">Connect with other guests</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-900 p-4 text-center">
              <div className="text-2xl">📋</div>
              <div className="mt-2 text-sm font-semibold text-white">My Info</div>
              <p className="mt-1 text-xs text-green-100">View your registration</p>
            </div>
          </div>
        </div>

        {/* Session Tracking Info */}
        <div className="rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
          <h3 className="mb-3 text-sm font-bold text-white">Session & Engagement Tracking</h3>
          <div className="space-y-2 text-xs text-gray-300">
            <div>✓ Your device ID is linked to your registration</div>
            <div>✓ Session duration and location data is being tracked</div>
            <div>✓ Interactions are logged for post-event insights</div>
            <div>✓ Analytics help organizers improve future events</div>
            <div className="mt-3 text-xs text-gray-500">
              Your data is protected under our privacy policy and accessed only by event organizers.
            </div>
          </div>
        </div>

        {/* Guest Capabilities */}
        <div className="mt-8 rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
          <h3 className="mb-3 text-sm font-bold text-white">Event Guest Features</h3>
          <div className="grid grid-cols-1 gap-2 text-xs text-gray-300 md:grid-cols-2">
            <div>✓ Real-time event schedule access</div>
            <div>✓ Venue map and navigation</div>
            <div>✓ Attendee directory and networking</div>
            <div>✓ Photo uploads and gallery viewing</div>
            <div>✓ Speaker and session information</div>
            <div>✓ Event announcements and updates</div>
            <div>✓ Engagement tracking (passive)</div>
            <div>✓ Post-event recap and memories</div>
          </div>
        </div>
      </div>
    </div>
  );
}
