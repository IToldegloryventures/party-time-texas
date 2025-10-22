'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import { registerNFCDevice } from '@/lib/nfc';

const NFCDiscovery = () => {
  const { user, isLoaded } = useUser();
  const [orgData, setOrgData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [nfcSupported, setNfcSupported] = useState(false);
  const [nfcId, setNfcId] = useState<string>('');
  const [registering, setRegistering] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user && isLoaded) {
      fetchOrgData();
      checkNFCSupport();
    }
  }, [user, isLoaded, fetchOrgData]);

  const fetchOrgData = async () => {
    try {
      const data = await getUserOrganizationData(user!.id);
      setOrgData(data);
    } catch (error) {
      console.error('Error fetching organization data:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkNFCSupport = () => {
    // Check if NFC is supported in the browser
    // Note: NDEFReader has very limited support, even on mobile
    if ('NDEFReader' in window) {
      setNfcSupported(true);
    } else {
      // Even if NDEFReader is not available, we can still allow manual entry
      setNfcSupported(false);
    }
  };

  const handleNFCDiscovery = async () => {
    if (!nfcSupported) {
      alert(
        'NFC is not supported in this browser. Please use Chrome on Android or Safari on iOS.'
      );
      return;
    }

    try {
      // @ts-expect-error - NDEFReader is not in TypeScript types yet
      const reader = new NDEFReader();
      await reader.scan();

      reader.addEventListener('reading', (event: Record<string, unknown>) => {
        const { serialNumber } = event;
        setNfcId(serialNumber);
        alert(`NFC Tag Discovered! ID: ${serialNumber}`);
      });

      reader.addEventListener('error', (error: Record<string, unknown>) => {
        console.error('NFC reading error:', error);
        alert(
          'Error reading NFC tag. Make sure your device supports NFC and the tag is close to your phone.'
        );
      });
    } catch (error) {
      console.error('NFC discovery error:', error);
      alert(
        'Error accessing NFC. Please make sure NFC is enabled and try again.'
      );
    }
  };

  const handleRegisterDevice = async () => {
    if (!nfcId || !orgData) return;

    try {
      setRegistering(true);

      await registerNFCDevice({
        organization_id: orgData.organization.id,
        device_id: nfcId,
        device_type: 'business_card',
        metadata: {
          name: 'Party Time Texas Keychain',
          description: 'Official Party Time Texas keychain with NFC',
          assigned_to: user?.firstName + ' ' + user?.lastName,
          contact_email: user?.emailAddresses[0]?.emailAddress,
          programmed_by: 'Cosmic Portals',
          programmed_date: new Date().toISOString(),
          device_type: 'keychain',
        },
      });

      setSuccess(true);
    } catch (error) {
      console.error('Error registering device:', error);
      alert('Error registering device. Please try again.');
    } finally {
      setRegistering(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            Discover Your NFC Device
          </h1>
          <p className="text-xl text-white/70">
            Use your phone to discover and register your existing Party Time
            Texas keychain
          </p>
        </div>

        {/* NFC Support Check */}
        <div className="mb-8 rounded-xl border border-purple-400/20 bg-gray-900/50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            NFC Support Status
          </h3>
          {nfcSupported ? (
            <div className="flex items-center gap-3 text-green-400">
              <svg
                className="h-6 w-6"
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
              <span>NFC is supported in your browser</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-red-400">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>
                NFC is not supported in this browser. Please use Chrome on
                Android or Safari on iOS.
              </span>
            </div>
          )}
        </div>

        {/* Discovery Instructions */}
        {nfcSupported ? (
          <div className="mb-8 rounded-xl border border-blue-400/30 bg-blue-900/20 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              How to Discover Your NFC Tag
            </h3>
            <ol className="list-inside list-decimal space-y-3 text-white/70">
              <li>Make sure NFC is enabled on your phone</li>
              <li>Hold your Party Time Texas keychain close to your phone</li>
              <li>Click &quot;Discover NFC Tag&quot; below</li>
              <li>Your phone will read the NFC tag and show the ID</li>
              <li>Register the device to start tracking analytics</li>
            </ol>
          </div>
        ) : (
          <div className="mb-8 rounded-xl border border-blue-400/30 bg-blue-900/20 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Register Your Party Time Texas Keychain
            </h3>
            <p className="mb-4 text-white/70">
              Since NFC discovery isn&apos;t available in this browser, you can
              manually register your keychain device. This will allow you to
              start tracking analytics and engagement data.
            </p>
            <div className="rounded-lg bg-blue-800/30 p-4">
              <h4 className="mb-2 font-semibold text-white">
                What happens after registration:
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-white/70">
                <li>
                  Your keychain will be added to your Party Time Texas account
                </li>
                <li>You&apos;ll be able to track scans and engagement analytics</li>
                <li>Generate QR codes and NFC URLs for your device</li>
                <li>View real-time analytics in your dashboard</li>
              </ul>
            </div>
          </div>
        )}

        {/* Discovery Options */}
        <div className="mb-8 text-center">
          {nfcSupported ? (
            <button
              onClick={handleNFCDiscovery}
              className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
            >
              Discover NFC Tag
            </button>
          ) : (
            <div className="rounded-xl border border-gray-600/30 bg-gray-800/50 p-6">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Device Registration
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    NFC Device ID (optional)
                  </label>
                  <input
                    type="text"
                    value={nfcId}
                    onChange={e => setNfcId(e.target.value)}
                    placeholder="Enter your NFC device ID or leave blank for auto-generated"
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                  <p className="mt-1 text-xs text-white/50">
                    If you don&apos;t know your NFC device ID, we&apos;ll
                    generate one for you
                  </p>
                </div>
                <button
                  onClick={() => setNfcId('ptt_keychain_' + Date.now())}
                  className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-purple-700"
                >
                  Generate Device ID
                </button>
              </div>
            </div>
          )}
        </div>

        {/* NFC ID Display */}
        {nfcId && (
          <div className="mb-8 rounded-xl border border-green-400/30 bg-green-900/20 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {nfcSupported ? 'NFC Tag Discovered!' : 'Device ID Ready!'}
            </h3>
            <div className="mb-4 rounded-lg bg-black/50 p-4">
              <p className="font-mono text-sm break-all text-green-400">
                {nfcId}
              </p>
            </div>
            <p className="mb-4 text-white/70">
              {nfcSupported
                ? 'This is your NFC tag ID. Click "Register Device" to add it to your Party Time Texas account.'
                : 'This device ID is ready for registration. Click "Register Device" to add it to your Party Time Texas account.'}
            </p>
            <button
              onClick={handleRegisterDevice}
              disabled={registering}
              className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-green-700 disabled:opacity-50"
            >
              {registering ? 'Registering...' : 'Register Device'}
            </button>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="rounded-xl border border-green-400/30 bg-green-900/20 p-6">
            <div className="mb-4 flex items-center gap-3">
              <svg
                className="h-8 w-8 text-green-400"
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
              <h3 className="text-xl font-semibold text-white">
                Device Registered Successfully!
              </h3>
            </div>
            <p className="mb-4 text-white/70">
              Your Party Time Texas keychain is now registered and ready to
              track analytics.
            </p>
            <Link
              href="/dashboard/devices"
              className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-green-700"
            >
              View All Devices
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFCDiscovery;
