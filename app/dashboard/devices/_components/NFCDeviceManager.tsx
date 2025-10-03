'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import { registerNFCDevice, getNFCDevices, deleteNFCDevice } from '@/lib/nfc';

interface NFCDevice {
  id: string;
  device_id: string;
  device_type: string;
  status: string;
  last_scan?: string;
  scan_count: number;
  metadata: any;
  created_at: string;
}

const NFCDeviceManager = () => {
  const { user, isLoaded } = useUser();
  const [devices, setDevices] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDevice, setNewDevice] = useState({
    device_type: 'business_card',
    name: '',
    description: '',
    assigned_to: '',
    contact_email: '',
  });

  useEffect(() => {
    if (user && isLoaded) {
      fetchDevices();
    }
  }, [user, isLoaded, fetchDevices]);

  const fetchDevices = async () => {
    try {
      const orgData = await getUserOrganizationData(user!.id);
      if (orgData) {
        const deviceList = await getNFCDevices(orgData.organization.id);
        setDevices(deviceList);
      }
    } catch (error) {
      console.error('Error fetching devices:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDevice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const orgData = await getUserOrganizationData(user!.id);
      if (orgData) {
        // Generate a unique device ID for the client
        const deviceId = `ptt_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

        await registerNFCDevice({
          organization_id: orgData.organization.id,
          device_id: deviceId,
          device_type: newDevice.device_type as any,
          status: 'active',
          metadata: {
            name: newDevice.name,
            description: newDevice.description,
            assigned_to: newDevice.assigned_to,
            contact_email: newDevice.contact_email,
            programmed_by: 'Cosmic Portals',
            programmed_date: new Date().toISOString(),
          },
        });

        setNewDevice({
          device_type: 'business_card',
          name: '',
          description: '',
          assigned_to: '',
          contact_email: '',
        });
        setShowAddForm(false);
        fetchDevices();
      }
    } catch (error) {
      console.error('Error adding device:', error);
    }
  };

  const handleDeleteDevice = async (deviceId: string) => {
    if (confirm('Are you sure you want to delete this NFC device?')) {
      try {
        await deleteNFCDevice(deviceId);
        fetchDevices();
      } catch (error) {
        console.error('Error deleting device:', error);
      }
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading NFC devices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            NFC Device Management
          </h1>
          <p className="text-xl text-white/70">
            Register and manage your NFC devices for engagement tracking
          </p>
        </div>

        {/* Add Device Buttons */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
          >
            {showAddForm ? 'Cancel' : '+ Add New Device'}
          </button>
          <Link
            href="/dashboard/devices/discover"
            className="rounded-lg bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-green-700 hover:to-teal-700"
          >
            🔍 Discover Existing NFC
          </Link>
        </div>

        {/* Add Device Form */}
        {showAddForm && (
          <div className="mb-8 rounded-xl border border-purple-400/20 bg-gray-900/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Register New NFC Device
            </h3>
            <form onSubmit={handleAddDevice} className="space-y-4">
              <div className="mb-4 rounded-lg border border-blue-400/30 bg-blue-900/20 p-4">
                <p className="text-sm text-blue-200">
                  <strong>Note:</strong> NFC Tag ID will be automatically
                  generated and programmed by Cosmic Portals before shipping to
                  your client.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Device Type
                  </label>
                  <select
                    value={newDevice.device_type}
                    onChange={e =>
                      setNewDevice({
                        ...newDevice,
                        device_type: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="business_card">Business Card</option>
                    <option value="signage">Signage</option>
                    <option value="event_badge">Event Badge</option>
                    <option value="table_tent">Table Tent</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Assigned To (Client Name)
                  </label>
                  <input
                    type="text"
                    value={newDevice.assigned_to}
                    onChange={e =>
                      setNewDevice({
                        ...newDevice,
                        assigned_to: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                    placeholder="e.g., John Smith, Sarah Johnson"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Device Name
                </label>
                <input
                  type="text"
                  value={newDevice.name}
                  onChange={e =>
                    setNewDevice({ ...newDevice, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                  placeholder="e.g., John's Business Card, Sarah's Event Badge"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Client Contact Email
                </label>
                <input
                  type="email"
                  value={newDevice.contact_email}
                  onChange={e =>
                    setNewDevice({
                      ...newDevice,
                      contact_email: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                  placeholder="client@company.com"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Description
                </label>
                <textarea
                  value={newDevice.description}
                  onChange={e =>
                    setNewDevice({ ...newDevice, description: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Brief description of this NFC device and its purpose..."
                  rows={3}
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-purple-700"
                >
                  Register Device
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded-lg bg-gray-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Devices List */}
        <div className="space-y-4">
          {devices.length === 0 ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/20">
                <svg
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                No NFC Devices Yet
              </h3>
              <p className="mb-6 text-white/70">
                Register your first NFC device to start tracking engagement
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                Add Your First Device
              </button>
            </div>
          ) : (
            devices.map((device: Record<string, unknown>) => (
              <div
                key={device.id}
                className="rounded-xl border border-purple-400/20 bg-gray-900/50 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">
                        {device.metadata?.name || device.device_id}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          device.status === 'active'
                            ? 'bg-green-600/20 text-green-300'
                            : 'bg-gray-600/20 text-gray-300'
                        }`}
                      >
                        {device.status}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-white/70">
                      {device.metadata?.description || 'No description'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      <span>ID: {device.device_id}</span>
                      <span>Type: {device.device_type.replace('_', ' ')}</span>
                      <span>
                        Assigned to:{' '}
                        {device.metadata?.assigned_to || 'Unassigned'}
                      </span>
                      <span>Scans: {device.scan_count}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-sm text-white/50">
                      <span>
                        Contact: {device.metadata?.contact_email || 'No email'}
                      </span>
                      {device.last_scan && (
                        <span>
                          Last scan:{' '}
                          {new Date(device.last_scan).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteDevice(device.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NFCDeviceManager;
