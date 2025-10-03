'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

const LandingPageManager = () => {
  const { user, isLoaded } = useUser();
  const [orgData, setOrgData] = useState<Record<string, any> | null>(null);
  const [landingPages, setLandingPages] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && isLoaded) {
      fetchData();
    }
  }, [user, isLoaded]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getUserOrganizationData(user!.id);
      setOrgData(data);

      // Fetch landing pages from API
      const response = await fetch('/api/landing-pages');
      if (response.ok) {
        const result = await response.json();
        const formattedPages = result.pages.map(
          (page: Record<string, any>) => ({
            id: page.id,
            name: page.name,
            url: `${window.location.origin}/landing/${page.slug}`,
            status: page.is_published ? 'published' : 'draft',
            scans: page.scan_count || 0,
            created_at: page.created_at,
          })
        );
        setLandingPages(formattedPages);
      } else {
        console.error('Failed to fetch landing pages');
        // Fallback to mock data
        setLandingPages([
          {
            id: '1',
            name: 'Party Time Texas Main',
            url: `${window.location.origin}/landing/party-time-texas`,
            status: 'published',
            scans: 0,
            created_at: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Fallback to mock data
      setLandingPages([
        {
          id: '1',
          name: 'Party Time Texas Main',
          url: `${window.location.origin}/landing/party-time-texas`,
          status: 'published',
          scans: 0,
          created_at: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const createLandingPage = async () => {
    try {
      const response = await fetch('/api/landing-pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'New Landing Page',
          title: 'Welcome to New Landing Page',
          slug: `new-page-${Date.now()}`,
          content: {
            title: 'Welcome to New Landing Page',
            subtitle: 'Your new landing page',
            description:
              'This is a new landing page created for your business.',
            contact: {
              email: '',
              phone: '',
              website: '',
            },
            social: {
              facebook: '',
              instagram: '',
              linkedin: '',
            },
            branding: {
              primaryColor: '#3B82F6',
              secondaryColor: '#1E40AF',
              accentColor: '#F59E0B',
            },
          },
          status: 'draft',
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const newPage = {
          id: result.page.id,
          name: result.page.name,
          url: `${window.location.origin}/landing/${result.page.slug}`,
          status: result.page.is_published ? 'published' : 'draft',
          scans: result.page.scan_count || 0,
          created_at: result.page.created_at,
        };
        setLandingPages([newPage, ...landingPages]);
      } else {
        console.error('Failed to create landing page');
        alert('Failed to create landing page. Please try again.');
      }
    } catch (error) {
      console.error('Error creating landing page:', error);
      alert('Error creating landing page. Please try again.');
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading landing pages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            Landing Page Manager
          </h1>
          <p className="text-xl text-white/70">
            Create and manage custom landing pages for your NFC devices
          </p>
        </div>

        {/* Create New Landing Page */}
        <div className="mb-8 rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            Create New Landing Page
          </h3>
          <p className="mb-4 text-white/70">
            Build custom landing pages for your NFC devices. Each page can be
            customized with your branding, content, and call-to-actions.
          </p>
          <button
            onClick={createLandingPage}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
          >
            + Create Landing Page
          </button>
        </div>

        {/* Landing Pages List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Your Landing Pages
          </h2>

          {landingPages.map(page => (
            <div
              key={page.id}
              className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {page.name}
                  </h3>
                  <p className="text-white/70">
                    Status:{' '}
                    <span className="text-green-400 capitalize">
                      {page.status}
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/70">
                    Scans:{' '}
                    <span className="font-semibold text-purple-400">
                      {page.scans}
                    </span>
                  </p>
                  <p className="text-sm text-white/70">
                    Created: {new Date(page.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mb-4 rounded-lg bg-black/50 p-4">
                <p className="font-mono text-sm break-all text-green-400">
                  {page.url}
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={page.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Preview
                </a>
                <button
                  onClick={() => {
                    window.location.href = `/dashboard/landing-pages/builder/${page.id}`;
                  }}
                  className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-purple-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    window.location.href = `/dashboard/landing-pages/analytics/${page.id}`;
                  }}
                  className="rounded-lg bg-gray-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-gray-700"
                >
                  Analytics
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="mt-12 rounded-xl border border-blue-400/30 bg-blue-900/20 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            How to Use Landing Pages
          </h3>
          <div className="space-y-4 text-white/70">
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-400">1.</span>
              <p>Create a landing page with your custom content and branding</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-400">2.</span>
              <p>
                Copy the landing page URL and program your NFC device to
                redirect to it
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-400">3.</span>
              <p>Track analytics and engagement from every scan</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-400">4.</span>
              <p>Customize content, add forms, social links, and more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageManager;
