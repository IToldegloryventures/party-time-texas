import Link from 'next/link';

export default function EventPlannerDashboard() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Event Management</h1>
              <p className="text-sm text-gray-400">Tech Summit 2025 • Active Now</p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/demo" 
                className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                ← Back to Demo Hub
              </Link>
              <div className="flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-white">487 / 845 checked in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Event Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs text-gray-500">Registered Guests</p>
            <p className="mt-2 text-3xl font-bold text-white">845</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs text-gray-500">Checked In</p>
            <p className="mt-2 text-3xl font-bold text-green-400">487</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs text-gray-500">Pending</p>
            <p className="mt-2 text-3xl font-bold text-yellow-400">358</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs text-gray-500">No-Show</p>
            <p className="mt-2 text-3xl font-bold text-red-400">12</p>
          </div>
        </div>

        {/* Check-In Stations */}
        <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-4 text-sm font-semibold text-white">NFC Check-In Stations</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Main Entrance', scans: 312, status: 'Active' },
              { name: 'VIP Lounge', scans: 89, status: 'Active' },
              { name: 'Conference Room A', scans: 56, status: 'Active' },
              { name: 'Registration Desk', scans: 30, status: 'Standby' },
            ].map((station, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-3">
                <div>
                  <p className="text-sm font-medium text-white">{station.name}</p>
                  <p className="text-xs text-gray-500">{station.scans} scans</p>
                </div>
                <span className={`text-xs font-semibold ${station.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {station.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Attendee List */}
        <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Recent Check-Ins</h2>
            <input type="text" placeholder="Search attendees..." className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 placeholder-gray-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-xs">
              <span className="font-semibold text-gray-500">NAME</span>
              <span className="font-semibold text-gray-500">EMAIL</span>
              <span className="font-semibold text-gray-500">STATION</span>
              <span className="font-semibold text-gray-500">TIME</span>
            </div>
            {[
              { name: 'Jessica Martinez', email: 'j.martinez@company.com', station: 'Main Entrance', time: '9:47 AM' },
              { name: 'David Chen', email: 'd.chen@company.com', station: 'Main Entrance', time: '9:45 AM' },
              { name: 'Sarah Johnson', email: 's.johnson@company.com', station: 'VIP Lounge', time: '9:42 AM' },
              { name: 'Michael Brown', email: 'm.brown@company.com', station: 'Main Entrance', time: '9:38 AM' },
              { name: 'Emily Davis', email: 'e.davis@company.com', station: 'Conference Room A', time: '9:35 AM' },
            ].map((attendee, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-800 py-3 text-xs text-gray-400">
                <span className="text-white">{attendee.name}</span>
                <span>{attendee.email}</span>
                <span>{attendee.station}</span>
                <span>{attendee.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meal & Dietary Preferences */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Meals Selected</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Beef Filet</span>
                <span className="text-white">234</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Salmon</span>
                <span className="text-white">201</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Vegetarian</span>
                <span className="text-white">142</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Vegan</span>
                <span className="text-white">55</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Dietary Restrictions</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Gluten-Free</span>
                <span className="text-white">67</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Nut Allergy</span>
                <span className="text-white">34</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Kosher</span>
                <span className="text-white">28</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Halal</span>
                <span className="text-white">19</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-sm font-semibold text-white">Check-In Timeline</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">9:00 - 10:00 AM</p>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-700">
                  <div className="h-2 w-1/4 rounded-full bg-cyan-500"></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">142 check-ins</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">10:00 - 11:00 AM</p>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-700">
                  <div className="h-2 w-1/2 rounded-full bg-cyan-500"></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">268 check-ins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
