'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface LandingPage {
  id: string;
  name: string;
  url: string;
  status: string;
  created_at: string;
}

interface LinkLandingPageModalProps {
  device: {
    id: string;
    device_id: string;
    metadata?: {
      name?: string;
      assigned_to?: string;
    };
    landing_page_id?: string;
  };
  onClose: () => void;
  onLinkSuccess: () => void;
}

export default function LinkLandingPageModal({
  device,
  onClose,
  onLinkSuccess,
}: LinkLandingPageModalProps) {
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);
  const [selectedLandingPageId, setSelectedLandingPageId] = useState<string>(
    device.landing_page_id || ''
  );
  const [loading, setLoading] = useState(false);
  const [fetchingPages, setFetchingPages] = useState(true);

  useEffect(() => {
    fetchLandingPages();
  }, []);

  const fetchLandingPages = async () => {
    try {
      const response = await fetch('/api/landing-pages');
      if (response.ok) {
        const pages = await response.json();
        setLandingPages(pages);
      }
    } catch (error) {
      console.error('Failed to fetch landing pages:', error);
    } finally {
      setFetchingPages(false);
    }
  };

  const handleLink = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/devices/${device.id}/link-landing-page`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            landing_page_id: selectedLandingPageId || null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to link landing page');
      }

      onLinkSuccess();
      onClose();
    } catch (error) {
      console.error('Error linking landing page:', error);
      alert('Failed to link landing page. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUnlink = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/devices/${device.id}/link-landing-page`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            landing_page_id: null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to unlink landing page');
      }

      onLinkSuccess();
      onClose();
    } catch (error) {
      console.error('Error unlinking landing page:', error);
      alert('Failed to unlink landing page. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const selectedLandingPage = landingPages.find(
    page => page.id === selectedLandingPageId
  );

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-purple-400/20 bg-gray-900 shadow-2xl">
        {/* Header */}
        <div className="border-b border-purple-400/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Link Landing Page to NFC Device
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 transition-colors hover:text-white"
            >
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
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          {/* Device Info */}
          <div className="mb-6 rounded-lg border border-gray-700 bg-gray-800/50 p-4">
            <h3 className="mb-2 text-lg font-medium text-white">
              {device.metadata?.name || device.device_id}
            </h3>
            <p className="text-sm text-gray-400">
              Assigned to: {device.metadata?.assigned_to || 'Unassigned'}
            </p>
            {device.landing_page_id && (
              <p className="mt-2 text-sm text-green-400">
                Currently linked to a landing page
              </p>
            )}
          </div>

          {/* Landing Page Selection */}
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-white">
              Select Landing Page
            </label>

            {fetchingPages ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-purple-400"></div>
                <p className="text-gray-400">Loading landing pages...</p>
              </div>
            ) : landingPages.length === 0 ? (
              <div className="rounded-lg border border-gray-700 py-8 text-center">
                <p className="mb-4 text-gray-400">No landing pages found</p>
                <p className="text-sm text-gray-500">
                  Create a landing page first to link it to this NFC device
                </p>
              </div>
            ) : (
              <div className="max-h-64 space-y-3 overflow-y-auto rounded-lg border border-gray-700 p-4">
                {/* Unlink Option */}
                <label className="flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-600 p-3 transition-colors hover:bg-gray-800/50">
                  <input
                    type="radio"
                    name="landingPage"
                    value=""
                    checked={selectedLandingPageId === ''}
                    onChange={e => setSelectedLandingPageId(e.target.value)}
                    className="h-4 w-4 border-gray-600 bg-gray-800 text-purple-600 focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-white">
                      No Landing Page
                    </div>
                    <div className="text-sm text-gray-400">
                      Unlink from any landing page
                    </div>
                  </div>
                </label>

                {/* Landing Page Options */}
                {landingPages.map(page => (
                  <label
                    key={page.id}
                    className="flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-600 p-3 transition-colors hover:bg-gray-800/50"
                  >
                    <input
                      type="radio"
                      name="landingPage"
                      value={page.id}
                      checked={selectedLandingPageId === page.id}
                      onChange={e => setSelectedLandingPageId(e.target.value)}
                      className="h-4 w-4 border-gray-600 bg-gray-800 text-purple-600 focus:ring-purple-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-white">{page.name}</div>
                      <div className="text-sm text-gray-400">{page.url}</div>
                      <div className="mt-1 flex items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            page.status === 'published'
                              ? 'bg-green-600/20 text-green-300'
                              : 'bg-yellow-600/20 text-yellow-300'
                          }`}
                        >
                          {page.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          Created:{' '}
                          {new Date(page.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Preview */}
          {selectedLandingPage && (
            <div className="mb-6 rounded-lg border border-blue-400/30 bg-blue-900/20 p-4">
              <h4 className="mb-2 font-medium text-blue-300">Preview</h4>
              <p className="text-sm text-blue-200">
                When someone scans this NFC device, they will be redirected to:
              </p>
              <p className="mt-1 font-medium text-blue-100">
                {window.location.origin}/landing/{selectedLandingPage.url}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 border-t border-purple-400/20 px-6 py-4">
          <Button
            onClick={onClose}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
            disabled={loading}
          >
            Cancel
          </Button>

          {selectedLandingPageId === '' && device.landing_page_id ? (
            <Button
              onClick={handleUnlink}
              disabled={loading || fetchingPages}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading ? 'Unlinking...' : 'Unlink'}
            </Button>
          ) : (
            <Button
              onClick={handleLink}
              disabled={
                loading || fetchingPages || selectedLandingPageId === ''
              }
              className="bg-purple-600 hover:bg-purple-700"
            >
              {loading ? 'Linking...' : 'Link Landing Page'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
