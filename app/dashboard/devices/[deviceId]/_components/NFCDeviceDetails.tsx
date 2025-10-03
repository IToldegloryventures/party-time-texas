'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import { getNFCDevice, getNFCScanAnalytics } from '@/lib/nfc';

interface NFCDeviceDetailsProps {
  deviceId: string;
}

const NFCDeviceDetails = ({ deviceId }: NFCDeviceDetailsProps) => {
  const { user, isLoaded } = useUser();
  // const [orgData, setOrgData] = useState<Record<string, unknown> | null>(null);
  const [device, setDevice] = useState<Record<string, unknown> | null>(null);
  const [analytics, setAnalytics] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && isLoaded) {
      fetchData();
    }
  }, [user, isLoaded, deviceId, fetchData]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Get organization data
      const org = await getUserOrganizationData(user!.id);
      setOrgData(org);

      // Get device details
      const deviceData = await getNFCDevice(deviceId);
      setDevice(deviceData);

      // Get analytics
      const analyticsData = await getNFCScanAnalytics(deviceId);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Error fetching device data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateLandingPageUrl = () => {
    if (!device) return '';
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://cosmic-portals.vercel.app';
    return `${baseUrl}/scan/${device.device_id}`;
  };

  const generateQRCodeUrl = () => {
    const landingUrl = generateLandingPageUrl();
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(landingUrl)}`;
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading device details...</p>
        </div>
      </div>
    );
  }

  if (!device) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">
            Device Not Found
          </h1>
          <p className="mb-8 text-white/70">
            The NFC device you&apos;re looking for doesn&apos;t exist or you don&apos;t have
            access to it.
          </p>
          <Link
            href="/dashboard/devices"
            className="group relative inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition-all hover:bg-white/5"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1E56] via-[#FF00FF] to-[#00FFFF] opacity-70 blur-sm transition-all group-hover:opacity-100" />
            <span className="absolute inset-0.5 rounded-full bg-black/50" />
            <span className="relative font-medium">Back to Devices</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-4">
            <Link
              href="/dashboard/devices"
              className="text-purple-400 transition-colors hover:text-purple-300"
            >
              ← Back to Devices
            </Link>
          </div>
          <h1 className="mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            {device.metadata?.name || 'NFC Device'}
          </h1>
          <p className="text-xl text-white/70">
            Device ID:{' '}
            <span className="font-mono text-purple-300">
              {device.device_id}
            </span>
          </p>
        </div>

        {/* Device Status & Quick Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-900/20 to-green-800/10 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/30">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Status</h3>
            </div>
            <p className="font-semibold text-green-400 capitalize">
              {device.status}
            </p>
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/30">
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Total Scans</h3>
            </div>
            <p className="text-2xl font-semibold text-blue-400">
              {analytics?.total_scans || 0}
            </p>
          </div>

          <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/30">
                <svg
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Last Scan</h3>
            </div>
            <p className="font-semibold text-purple-400">
              {device.last_scan
                ? new Date(device.last_scan).toLocaleDateString()
                : 'Never'}
            </p>
          </div>
        </div>

        {/* Landing Page & QR Code */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Landing Page URL */}
          <div className="rounded-xl border border-gray-400/20 bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Landing Page URL
            </h3>
            <p className="mb-4 text-white/70">
              This is the URL your NFC keychain should redirect to. When someone
              scans your keychain, they&apos;ll land here.
            </p>
            <div className="mb-4 rounded-lg bg-black/50 p-4">
              <p className="font-mono text-sm break-all text-green-400">
                {generateLandingPageUrl()}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  navigator.clipboard.writeText(generateLandingPageUrl())
                }
                className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-purple-700"
              >
                Copy URL
              </button>
              <a
                href={generateLandingPageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Test URL
              </a>
            </div>
          </div>

          {/* QR Code */}
          <div className="rounded-xl border border-gray-400/20 bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">QR Code</h3>
            <p className="mb-4 text-white/70">
              Generate a QR code for your NFC device. People can scan this with
              their phone camera.
            </p>
            <div className="text-center">
              <img
                src={generateQRCodeUrl()}
                alt="QR Code for NFC Device"
                className="mx-auto mb-4 rounded-lg border border-gray-600"
              />
              <p className="text-xs text-white/50">
                Scan this QR code to test your landing page
              </p>
            </div>
          </div>
        </div>

        {/* Analytics */}
        {analytics && (
          <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Analytics Overview
            </h3>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">
                  {analytics.total_scans || 0}
                </p>
                <p className="text-white/70">Total Scans</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">
                  {analytics.daily_scans?.length || 0}
                </p>
                <p className="text-white/70">Active Days</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">
                  {analytics.scan_types?.['nfc_tap'] || 0}
                </p>
                <p className="text-white/70">NFC Taps</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">
                  {analytics.scan_types?.['qr_scan'] || 0}
                </p>
                <p className="text-white/70">QR Scans</p>
              </div>
            </div>

            {/* Daily Scans Chart */}
            {analytics.daily_scans && analytics.daily_scans.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Daily Scan Activity
                </h4>
                <div className="space-y-2">
                  {analytics.daily_scans
                    .slice(0, 7)
                    .map((day: Record<string, unknown>, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white/70">{day.date}</span>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-32 rounded-full bg-gray-700">
                            <div
                              className="h-2 rounded-full bg-purple-400"
                              style={{
                                width: `${Math.min((day.count / Math.max(...analytics.daily_scans.map((d: Record<string, unknown>) => d.count))) * 100, 100)}%`,
                              }}
                            ></div>
                          </div>
                          <span className="w-8 text-right font-semibold text-white">
                            {day.count}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Device Configuration */}
        <div className="mt-8 rounded-xl border border-gray-400/20 bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            Device Configuration
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Device Type
              </label>
              <p className="text-white capitalize">{device.device_type}</p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Assigned To
              </label>
              <p className="text-white">
                {device.metadata?.assigned_to || 'Not assigned'}
              </p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Contact Email
              </label>
              <p className="text-white">
                {device.metadata?.contact_email || 'Not set'}
              </p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Created
              </label>
              <p className="text-white">
                {new Date(device.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFCDeviceDetails;
