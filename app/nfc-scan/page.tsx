'use client';

import { useEffect, useState, Suspense } from 'react';

function NFCScanContent() {
  const [deviceInfo, setDeviceInfo] = useState<{
    device_id?: string;
    device_type?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  }>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setDeviceInfo({
        device_id: urlParams.get('device_id') || undefined,
        device_type: urlParams.get('device_type') || undefined,
        utm_source: urlParams.get('utm_source') || undefined,
        utm_medium: urlParams.get('utm_medium') || undefined,
        utm_campaign: urlParams.get('utm_campaign') || undefined,
      });
    }
  }, []);

  const getDeviceTypeDisplay = (type?: string) => {
    if (!type) return 'NFC Device';
    return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg">
          {/* NFC Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400">
            <svg
              className="h-10 w-10 text-white"
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

          {/* Title */}
          <h1 className="mb-2 text-2xl font-bold text-white">
            NFC Scan Successful
          </h1>

          {/* Device Info */}
          <div className="mb-6 text-white/80">
            <p className="mb-2 text-lg">
              {getDeviceTypeDisplay(deviceInfo.device_type)}
            </p>
            {deviceInfo.device_id && (
              <p className="text-sm text-white/60">
                Device ID: {deviceInfo.device_id}
              </p>
            )}
          </div>

          {/* Status Message */}
          <div className="mb-6 rounded-lg border border-yellow-400/30 bg-yellow-500/20 p-4">
            <p className="text-sm text-yellow-200">
              This NFC device is not currently linked to a landing page. Please
              contact the device owner for more information.
            </p>
          </div>

          {/* UTM Parameters (for debugging/testing) */}
          {(deviceInfo.utm_source ||
            deviceInfo.utm_medium ||
            deviceInfo.utm_campaign) && (
            <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4 text-left">
              <h3 className="mb-2 text-sm font-medium text-white">
                Tracking Information:
              </h3>
              <div className="space-y-1 text-xs text-white/70">
                {deviceInfo.utm_source && (
                  <p>Source: {deviceInfo.utm_source}</p>
                )}
                {deviceInfo.utm_medium && (
                  <p>Medium: {deviceInfo.utm_medium}</p>
                )}
                {deviceInfo.utm_campaign && (
                  <p>Campaign: {deviceInfo.utm_campaign}</p>
                )}
              </div>
            </div>
          )}

          {/* Powered by */}
          <div className="text-center">
            <p className="text-xs text-white/40">
              Powered by <span className="font-semibold">Cosmic Portals</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NFCScanPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <NFCScanContent />
    </Suspense>
  );
}
