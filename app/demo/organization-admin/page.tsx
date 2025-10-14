'use client';

import React from 'react';

const OrganizationAdminDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Team Management Dashboard</h1>
              <p className="text-purple-100 mt-2">Team coordination & event oversight</p>
            </div>
            <div className="text-right">
              <div className="bg-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                🟣 ORG ADMIN
              </div>
              <p className="text-purple-200 text-sm mt-1">TechCorp Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Team Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Events</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-500 mt-1">3 this week</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Members</h3>
            <p className="text-3xl font-bold text-green-600">18</p>
            <p className="text-sm text-gray-500 mt-1">All active</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tasks Assigned</h3>
            <p className="text-3xl font-bold text-purple-600">47</p>
            <p className="text-sm text-gray-500 mt-1">12 pending</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">NFC Scans</h3>
            <p className="text-3xl font-bold text-orange-600">8,429</p>
            <p className="text-sm text-gray-500 mt-1">Today</p>
          </div>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Team Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              👥 Team Management
            </h2>
            <div className="space-y-4">
              {/* Team Members */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">John Smith</h4>
                      <p className="text-sm text-gray-500">Event Manager • 5 events</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                      Assign Task
                    </button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                      Message
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      MJ
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Maria Johnson</h4>
                      <p className="text-sm text-gray-500">Content Creator • 3 events</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                      Assign Task
                    </button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                      Message
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      DW
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">David Wilson</h4>
                      <p className="text-sm text-gray-500">Tech Support • 2 events</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                      Assign Task
                    </button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="border-t pt-4">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mb-2">
                  Invite New Team Member
                </button>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Create Team Meeting
                </button>
              </div>
            </div>
          </div>

          {/* Event Oversight */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📅 Event Oversight
            </h2>
            <div className="space-y-4">
              {/* Active Events */}
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-800">Tech Conference 2024</h4>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-blue-600 mb-2">March 15-17, 2024 • San Francisco</p>
                  <div className="flex justify-between text-xs text-blue-600">
                    <span>Team: 5 members</span>
                    <span>NFC Devices: 847</span>
                    <span>Scans: 2,341</span>
                  </div>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-800">Product Launch Event</h4>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      Planning
                    </span>
                  </div>
                  <p className="text-sm text-green-600 mb-2">April 5, 2024 • New York</p>
                  <div className="flex justify-between text-xs text-green-600">
                    <span>Team: 3 members</span>
                    <span>NFC Devices: 234</span>
                    <span>Scans: 0</span>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-800">Annual Company Retreat</h4>
                    <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">
                      Post-Event
                    </span>
                  </div>
                  <p className="text-sm text-purple-600 mb-2">February 20-22, 2024 • Miami</p>
                  <div className="flex justify-between text-xs text-purple-600">
                    <span>Team: 4 members</span>
                    <span>NFC Devices: 456</span>
                    <span>Scans: 1,892</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            ✅ Task Management
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Pending Tasks */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                Pending (12)
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 text-sm">Design NFC wristbands</h4>
                  <p className="text-xs text-yellow-600">Assigned to Maria • Due: Today</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 text-sm">Set up event analytics</h4>
                  <p className="text-xs text-yellow-600">Assigned to David • Due: Tomorrow</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 text-sm">Create landing pages</h4>
                  <p className="text-xs text-yellow-600">Assigned to John • Due: Friday</p>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                In Progress (8)
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">Configure NFC devices</h4>
                  <p className="text-xs text-blue-600">Assigned to Sarah • 60% complete</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">Update event schedule</h4>
                  <p className="text-xs text-blue-600">Assigned to Mike • 30% complete</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">Train team on platform</h4>
                  <p className="text-xs text-blue-600">Assigned to Lisa • 80% complete</p>
                </div>
              </div>
            </div>

            {/* Completed */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Completed (27)
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 text-sm">Order event materials</h4>
                  <p className="text-xs text-green-600">Completed by John • Yesterday</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 text-sm">Setup payment system</h4>
                  <p className="text-xs text-green-600">Completed by Maria • 2 days ago</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 text-sm">Test NFC functionality</h4>
                  <p className="text-xs text-green-600">Completed by David • 3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            ⚡ Quick Actions
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition">
              <div className="text-blue-600 text-2xl mb-2">📋</div>
              <h4 className="font-semibold text-blue-800">Create Task</h4>
              <p className="text-sm text-blue-600">Assign to team member</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition">
              <div className="text-green-600 text-2xl mb-2">👥</div>
              <h4 className="font-semibold text-green-800">Invite Member</h4>
              <p className="text-sm text-green-600">Add to team</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition">
              <div className="text-purple-600 text-2xl mb-2">📊</div>
              <h4 className="font-semibold text-purple-800">Team Report</h4>
              <p className="text-sm text-purple-600">Performance overview</p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition">
              <div className="text-orange-600 text-2xl mb-2">📅</div>
              <h4 className="font-semibold text-orange-800">Schedule Meeting</h4>
              <p className="text-sm text-orange-600">Team coordination</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationAdminDemo;
