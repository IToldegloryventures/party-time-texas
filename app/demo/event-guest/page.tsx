export default function EventGuestPortal() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Tech Summit 2025</h1>
              <p className="text-sm text-gray-400">Guest • Badge #487</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Check-In Status */}
        <div className="mb-8 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Check-in Status</p>
              <p className="mt-2 text-3xl font-bold text-green-400">✓ Checked In</p>
              <p className="mt-2 text-xs text-gray-500">Main Entrance • 9:47 AM</p>
            </div>
            <div className="text-6xl">✅</div>
          </div>
        </div>

        {/* Event Information Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Date</p>
            <p className="mt-2 text-lg font-semibold text-white">May 15, 2025</p>
            <p className="text-xs text-gray-500">9:00 AM - 5:00 PM</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Location</p>
            <p className="mt-2 text-lg font-semibold text-white">San Francisco</p>
            <p className="text-xs text-gray-500">Convention Center</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Dress Code</p>
            <p className="mt-2 text-lg font-semibold text-white">Business Casual</p>
            <p className="text-xs text-gray-500">Comfortable shoes</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Parking</p>
            <p className="mt-2 text-lg font-semibold text-white">Included</p>
            <p className="text-xs text-gray-500">Lot B Level 3</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Event Schedule */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 lg:col-span-2">
            <h2 className="mb-4 text-sm font-semibold text-white">Event Schedule</h2>
            <div className="space-y-3">
              {[
                { time: '9:00 - 10:00', title: 'Welcome Keynote', location: 'Main Stage' },
                { time: '10:30 - 12:00', title: 'Breakout Sessions', location: 'Multiple Venues' },
                { time: '12:00 - 1:30', title: 'Lunch & Networking', location: 'Grand Ballroom' },
                { time: '2:00 - 3:30', title: 'Keynote Panel', location: 'Main Stage' },
                { time: '4:00 - 5:00', title: 'Closing Reception', location: 'Outdoor Terrace' },
              ].map((session, idx) => (
                <div key={idx} className="flex items-start justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="font-medium text-white text-sm">{session.title}</p>
                    <p className="text-xs text-gray-500">{session.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-400">{session.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase">RSVP</p>
              <div className="mt-3 space-y-2">
                <p className="text-sm text-white">Attending?</p>
                <button className="w-full rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white hover:bg-green-700">
                  Confirm Attendance
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase">Actions</p>
              <div className="mt-3 space-y-2">
                <button className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
                  📍 View Map
                </button>
                <button className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
                  👥 View Attendees
                </button>
                <button className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
                  ⚙️ Preferences
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Event Photo Gallery</h2>
            <button className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-300 hover:bg-gray-700">
              + Upload Photo
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <div key={idx} className="aspect-square rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center">
                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500">234 photos uploaded • 43 uploads today</p>
        </div>

        {/* Meal & Preferences */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Your Meal Selection</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-3">
                <p className="text-sm text-white">Salmon Fillet</p>
                <span className="text-xs font-semibold text-blue-400">Selected</span>
              </div>
              <div className="text-xs text-gray-500 mt-3">
                <p>Dietary Info: Gluten-Free • No nuts</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Attendee Info</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Attendee Type</span>
                <span className="text-white">Guest</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Company</span>
                <span className="text-white">Acme Corp</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Badge</span>
                <span className="text-white">#487</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
