'use client';

import React from 'react';

const OrganizationOwnerDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Organization Dashboard</h1>
              <p className="text-orange-100 mt-2">Full access & billing control</p>
            </div>
            <div className="text-right">
              <div className="bg-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                🟠 ORG OWNER
              </div>
              <p className="text-orange-200 text-sm mt-1">TechCorp Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Business Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Events</h3>
            <p className="text-3xl font-bold text-blue-600">47</p>
            <p className="text-sm text-gray-500 mt-1">+5 this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Active NFC Devices</h3>
            <p className="text-3xl font-bold text-green-600">2,847</p>
            <p className="text-sm text-gray-500 mt-1">+234 this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Members</h3>
            <p className="text-3xl font-bold text-purple-600">23</p>
            <p className="text-sm text-gray-500 mt-1">+3 this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Monthly Cost</h3>
            <p className="text-3xl font-bold text-orange-600">$2,499</p>
            <p className="text-sm text-gray-500 mt-1">Enterprise Plan</p>
          </div>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Billing & Subscription */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              💳 Billing & Subscription
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-green-800">Enterprise Plan</h4>
                    <p className="text-sm text-green-600">$2,499/month</p>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Active
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Base Subscription</span>
                  <span className="font-semibold">$2,499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Analytics Service</span>
                  <span className="font-semibold">$299</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hardware Orders</span>
                  <span className="font-semibold">$847</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Total This Month</span>
                    <span className="text-xl font-bold text-orange-600">$3,645</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Manage Billing
              </button>
            </div>
          </div>

          {/* Team Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              👥 Team Management
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    JS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">John Smith</h4>
                    <p className="text-sm text-gray-500">Event Manager</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    MJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Maria Johnson</h4>
                    <p className="text-sm text-gray-500">Content Creator</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    DW
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">David Wilson</h4>
                    <p className="text-sm text-gray-500">Admin</p>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                  Pending
                </span>
              </div>
            </div>
            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Invite Team Member
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📈 Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    "Tech Conference 2024" event created
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    500 NFC wristbands ordered
                  </p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    Team member Maria Johnson joined
                  </p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    Analytics report generated
                  </p>
                  <p className="text-xs text-gray-500">1 week ago</p>
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
              <div className="text-blue-600 text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-blue-800">Create Event</h4>
              <p className="text-sm text-blue-600">Set up new event</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition">
              <div className="text-green-600 text-2xl mb-2">📦</div>
              <h4 className="font-semibold text-green-800">Order Hardware</h4>
              <p className="text-sm text-green-600">Buy NFC devices</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition">
              <div className="text-purple-600 text-2xl mb-2">📊</div>
              <h4 className="font-semibold text-purple-800">View Analytics</h4>
              <p className="text-sm text-purple-600">Performance insights</p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition">
              <div className="text-orange-600 text-2xl mb-2">👥</div>
              <h4 className="font-semibold text-orange-800">Manage Team</h4>
              <p className="text-sm text-orange-600">Invite & manage users</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationOwnerDemo;
