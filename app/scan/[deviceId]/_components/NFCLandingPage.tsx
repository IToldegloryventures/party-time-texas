'use client';

import { useEffect, useState } from 'react';
import { getNFCDevice, recordNFCScan } from '@/lib/nfc';

interface NFCLandingPageProps {
  deviceId: string;
}

const NFCLandingPage = ({ deviceId }: NFCLandingPageProps) => {
  const [device, setDevice] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [scanRecorded, setScanRecorded] = useState(false);

  useEffect(() => {
    fetchDeviceAndRecordScan();
  }, [deviceId]);

  const fetchDeviceAndRecordScan = async () => {
    try {
      setLoading(true);

      // Get device details
      const deviceData = await getNFCDevice(deviceId);
      setDevice(deviceData);

      if (deviceData) {
        // Record the scan
        await recordNFCScan({
          organization_id: deviceData.organization_id,
          device_id: deviceData.id,
          scan_type: 'nfc_tap',
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent,
          location_data: await getLocationData(),
          utm_params: getUTMParams(),
          referrer: document.referrer,
        });

        setScanRecorded(true);
      }
    } catch (error) {
      console.error('Error fetching device or recording scan:', error);
    } finally {
      setLoading(false);
    }
  };

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return 'unknown';
    }
  };

  const getLocationData = async () => {
    try {
      if (navigator.geolocation) {
        return new Promise(resolve => {
          navigator.geolocation.getCurrentPosition(
            position => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
              });
            },
            () => resolve(null),
            { timeout: 5000 }
          );
        });
      }
    } catch {
      return null;
    }
  };

  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
    };
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading...</p>
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
            This NFC device doesn't exist or has been deactivated.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Success Message */}
            {scanRecorded && (
              <div className="mb-8 rounded-xl border border-green-400/30 bg-green-900/20 p-4">
                <div className="mb-2 flex items-center justify-center gap-3">
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-semibold text-green-400">
                    Scan Recorded Successfully!
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  Your engagement has been tracked. Thank you for connecting
                  with us!
                </p>
              </div>
            )}

            {/* Welcome Message */}
            <h1 className="mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              Welcome to {device.metadata?.name || 'Our Platform'}!
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/70">
              {device.metadata?.description ||
                "Thank you for scanning our NFC device. You're now connected to our digital ecosystem."}
            </p>

            {/* Contact Information */}
            {device.metadata?.contact_email && (
              <div className="mx-auto mb-8 max-w-md rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Get in Touch
                </h3>
                <p className="mb-4 text-white/70">
                  Contact: {device.metadata.assigned_to || 'Our Team'}
                </p>
                <a
                  href={`mailto:${device.metadata.contact_email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/"
                className="group relative inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/5"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1E56] via-[#FF00FF] to-[#00FFFF] opacity-70 blur-sm transition-all group-hover:opacity-100" />
                <span className="absolute inset-0.5 rounded-full bg-black/50" />
                <span className="relative font-bold">Visit Our Platform</span>
              </a>

              <button
                onClick={() => window.history.back()}
                className="rounded-full bg-gray-800 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Info */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-gray-600/30 bg-gray-900/30 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            About This Connection
          </h3>
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div>
              <span className="text-white/70">Device ID:</span>
              <span className="ml-2 font-mono text-white">
                {device.device_id}
              </span>
            </div>
            <div>
              <span className="text-white/70">Scan Time:</span>
              <span className="ml-2 text-white">
                {new Date().toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-white/70">Device Type:</span>
              <span className="ml-2 text-white capitalize">
                {device.device_type}
              </span>
            </div>
            <div>
              <span className="text-white/70">Status:</span>
              <span className="ml-2 text-green-400 capitalize">
                {device.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFCLandingPage;
