export default function EventPlannerDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Event Planner Dashboard
          </h1>
          <p className="text-lg text-gray-300">
            Guest management, check-in tracking, and real-time attendance analytics
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Event Overview */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">Active Events</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 p-6 shadow-lg">
              <div className="mb-4 text-sm font-medium text-purple-100">
                Current Event
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-white">Tech Summit 2025</div>
                <div className="mt-2 text-xs text-purple-200">
                  May 15, 2025 • San Francisco Convention Center
                </div>
              </div>
              <div className="space-y-3 border-t border-purple-500 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm text-purple-100">Registered Guests</span>
                  <span className="font-bold text-white">845</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-purple-100">Checked In</span>
                  <span className="font-bold text-white">632</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-purple-100">Check-in Rate</span>
                  <span className="font-bold text-green-300">74.8%</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-lg">
              <div className="mb-4 text-sm font-medium text-blue-100">
                Upcoming Event
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-white">
                  Annual Gala Dinner
                </div>
                <div className="mt-2 text-xs text-blue-200">
                  June 7, 2025 • The Grand Ballroom
                </div>
              </div>
              <div className="space-y-3 border-t border-blue-500 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-100">Registered Guests</span>
                  <span className="font-bold text-white">320</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-100">RSVPs</span>
                  <span className="font-bold text-white">287</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-100">RSVP Rate</span>
                  <span className="font-bold text-green-300">89.7%</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 p-6 shadow-lg">
              <div className="mb-4 text-sm font-medium text-pink-100">
                Past Event
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-white">Spring Retreat</div>
                <div className="mt-2 text-xs text-pink-200">
                  April 28, 2025 • Mountain Lodge
                </div>
              </div>
              <div className="space-y-3 border-t border-pink-500 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm text-pink-100">Registered</span>
                  <span className="font-bold text-white">512</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-pink-100">Attended</span>
                  <span className="font-bold text-white">498</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-pink-100">Attendance</span>
                  <span className="font-bold text-green-300">97.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Management */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">Guest Management</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-green-100">
                Checked In
              </div>
              <div className="text-4xl font-bold text-white">632</div>
              <div className="mt-3 text-xs text-green-200">
                Tapped NFC badge
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-yellow-100">
                Pending Check-in
              </div>
              <div className="text-4xl font-bold text-white">213</div>
              <div className="mt-3 text-xs text-yellow-200">
                Arriving soon
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-red-100">
                No-Show
              </div>
              <div className="text-4xl font-bold text-white">28</div>
              <div className="mt-3 text-xs text-red-200">
                Not attended
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 shadow-lg">
              <div className="mb-2 text-sm font-medium text-cyan-100">
                Plus-Ones
              </div>
              <div className="text-4xl font-bold text-white">87</div>
              <div className="mt-3 text-xs text-cyan-200">
                Additional guests
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Timeline */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Real-Time Attendance Analytics
          </h2>
          <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg">
            <div className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-bold text-white">
                  Check-in Timeline
                </span>
                <span className="text-sm text-gray-400">9:00 AM - 4:30 PM</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-300">9:00 AM - 10:00 AM</span>
                    <span className="text-sm font-bold text-cyan-400">
                      142 guests
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-700">
                    <div className="h-3 w-1/4 rounded-full bg-cyan-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-300">10:00 AM - 11:00 AM</span>
                    <span className="text-sm font-bold text-blue-400">
                      268 guests
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-700">
                    <div className="h-3 w-1/2 rounded-full bg-blue-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-300">11:00 AM - 12:00 PM</span>
                    <span className="text-sm font-bold text-purple-400">
                      156 guests
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-700">
                    <div className="h-3 w-1/3 rounded-full bg-purple-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-300">12:00 PM - 4:30 PM</span>
                    <span className="text-sm font-bold text-green-400">
                      66 guests
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-700">
                    <div className="h-3 w-1/12 rounded-full bg-green-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meal & Dietary Preferences */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Meal & Dietary Preferences
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-4 text-lg font-bold text-white">
                Menu Selections
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Beef Filet</span>
                  <span className="font-bold text-white">234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Salmon</span>
                  <span className="font-bold text-white">201</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Vegetarian</span>
                  <span className="font-bold text-white">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Vegan</span>
                  <span className="font-bold text-white">55</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-4 text-lg font-bold text-white">
                Dietary Restrictions
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Gluten-Free</span>
                  <span className="font-bold text-white">67</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Nut Allergy</span>
                  <span className="font-bold text-white">34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Kosher</span>
                  <span className="font-bold text-white">28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Halal</span>
                  <span className="font-bold text-white">19</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <div className="mb-4 text-lg font-bold text-white">
                Beverage Selections
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Wine</span>
                  <span className="font-bold text-white">287</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Beer</span>
                  <span className="font-bold text-white">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Soft Drinks</span>
                  <span className="font-bold text-white">134</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Non-Alcoholic</span>
                  <span className="font-bold text-white">75</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Guest Photo Gallery
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-4 shadow-lg"
              >
                <div className="h-full w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <div className="text-sm text-gray-300">
              Total photos uploaded: <span className="font-bold text-white">234</span>
            </div>
          </div>
        </div>

        {/* Communication & Schedules */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Pre-Event Communications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg">
              <div>
                <div className="text-lg font-bold text-white">
                  Welcome Email Sent
                </div>
                <div className="text-sm text-gray-300">
                  Sent to all registered guests
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">98.2%</div>
                <div className="text-xs text-gray-400">open rate</div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg">
              <div>
                <div className="text-lg font-bold text-white">
                  Reminder SMS
                </div>
                <div className="text-sm text-gray-300">
                  Sent 24 hours before event
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">743</div>
                <div className="text-xs text-gray-400">messages sent</div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg">
              <div>
                <div className="text-lg font-bold text-white">
                  Event Schedule
                </div>
                <div className="text-sm text-gray-300">
                  Shared with guest check-in page
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-xs text-gray-400">sessions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Available */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Event Planner Features
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ NFC Check-In System
              </div>
              <p className="text-sm text-gray-300">
                Enable guests to check in with a single NFC tap at the event
                entrance
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Guest Management
              </div>
              <p className="text-sm text-gray-300">
                Manage RSVPs, plus-ones, dietary preferences, and meal choices
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Photo Gallery
              </div>
              <p className="text-sm text-gray-300">
                Collect and showcase guest photos in a live gallery throughout
                the event
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Real-Time Analytics
              </div>
              <p className="text-sm text-gray-300">
                Monitor attendance, check-in times, and guest flow in real time
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Communications
              </div>
              <p className="text-sm text-gray-300">
                Send pre-event emails, reminders, and schedule updates to guests
              </p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
              <div className="mb-2 text-lg font-bold text-white">
                ✓ Post-Event Recap
              </div>
              <p className="text-sm text-gray-300">
                Generate attendance reports with photos and engagement metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
