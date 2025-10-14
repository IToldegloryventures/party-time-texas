'use client';

import React from 'react';

const SuperAdminDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
              <p className="text-red-100 mt-2">Platform-wide control and monitoring</p>
            </div>
            <div className="text-right">
              <div className="bg-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                🔴 SUPER ADMIN
              </div>
              <p className="text-red-200 text-sm mt-1">Platform Owner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Platform Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Organizations</h3>
            <p className="text-3xl font-bold text-blue-600">2,847</p>
            <p className="text-sm text-gray-500 mt-1">+12% this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-green-600">45,392</p>
            <p className="text-sm text-gray-500 mt-1">+8% this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Monthly Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">$847K</p>
            <p className="text-sm text-gray-500 mt-1">+23% this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">NFC Scans</h3>
            <p className="text-3xl font-bold text-orange-600">2.1M</p>
            <p className="text-sm text-gray-500 mt-1">+34% this month</p>
          </div>
        </div>

        {/* Platform Controls */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* System Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              🛠️ System Management
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-700">API Rate Limits</h4>
                  <p className="text-sm text-gray-500">Configure global API limits</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Configure
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-700">Platform Maintenance</h4>
                  <p className="text-sm text-gray-500">Schedule maintenance windows</p>
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                  Schedule
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-700">Security Policies</h4>
                  <p className="text-sm text-gray-500">Global security settings</p>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Manage
                </button>
              </div>
            </div>
          </div>

          {/* Organization Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              🏢 Organization Management
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-700">Enterprise Accounts</h4>
                  <p className="text-sm text-gray-500">Manage enterprise clients</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  127 Active
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-700">Billing Issues</h4>
                  <p className="text-sm text-gray-500">Resolve payment problems</p>
                </div>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  3 Issues
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-700">Support Tickets</h4>
                  <p className="text-sm text-gray-500">Priority support requests</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  23 Pending
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Analytics */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            📊 Platform Analytics
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">94%</span>
              </div>
              <h4 className="font-semibold text-gray-700">Uptime</h4>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">4.8</span>
              </div>
              <h4 className="font-semibold text-gray-700">Avg Rating</h4>
              <p className="text-sm text-gray-500">Customer satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">99.9%</span>
              </div>
              <h4 className="font-semibold text-gray-700">SLA</h4>
              <p className="text-sm text-gray-500">Service level agreement</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            📋 Recent Platform Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">
                  Enterprise client "TechCorp Events" upgraded to Enterprise plan
                </p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                +$2,499/mo
              </span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">
                  New organization "Music Festival 2024" registered
                </p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                Professional Plan
              </span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">
                  High usage detected for "Corporate Events LLC"
                </p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                Monitor
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDemo;
