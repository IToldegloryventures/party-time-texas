'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { isSuperAdmin } from '@/lib/admin-permissions';

interface LandingPage {
  id: string;
  title: string;
  slug: string;
  organization_id: string;
  organization_name: string;
  owner_name: string;
  owner_email: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  view_count: number;
  last_view: string | null;
}

const LandingPageAdminNew = () => {
  const { user, isLoaded } = useUser();
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (user && isLoaded) {
      checkAdminAccess();
    }
  }, [user, isLoaded]);

  const checkAdminAccess = async () => {
    try {
      const adminStatus = await isSuperAdmin(user!.id);
      setIsAdmin(adminStatus);
      
      if (adminStatus) {
        fetchLandingPages();
      } else {
        setError('Access denied. Super admin privileges required.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error checking admin access:', error);
      setError('Failed to verify admin access.');
      setLoading(false);
    }
  };

  const fetchLandingPages = async () => {
    try {
      setLoading(true);
      setError(null);

      // Use the admin API endpoint
      const response = await fetch('/api/admin/landing-pages');
      
      if (!response.ok) {
        if (response.status === 403) {
          setError('Access denied. Super admin privileges required.');
        } else {
          setError('Failed to fetch landing pages.');
        }
        setLoading(false);
        return;
      }

      const result = await response.json();
      const pages = result.pages || [];

      // Transform the data to match our interface
      const transformedPages: LandingPage[] = pages.map((page: any) => ({
        id: page.id,
        title: page.title,
        slug: page.slug,
        organization_id: page.organization_id,
        organization_name: page.organizations?.name || 'Unknown Organization',
        owner_name: page.permissions?.owner_id || 'Unknown Owner',
        owner_email: page.permissions?.owner_id || 'unknown@example.com',
        is_published: page.is_published || false,
        created_at: page.created_at,
        updated_at: page.updated_at,
        view_count: page.view_count || 0,
        last_view: page.last_view,
      }));

      setLandingPages(transformedPages);
    } catch (error) {
      console.error('Error fetching landing pages:', error);
      setError('Failed to fetch landing pages.');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Access Denied</h2>
          <p className="text-white/70">Super admin privileges required to access this page.</p>
          <p className="mt-2 text-sm text-white/50">Contact your system administrator for access.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Error</h2>
          <p className="text-white/70">{error}</p>
          <button
            onClick={fetchLandingPages}
            className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Try Again
          </button>
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
            Admin Landing Pages
          </h1>
          <p className="text-xl text-white/70">
            Manage landing pages across all organizations
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
            <div className="text-2xl font-bold text-white">{landingPages.length}</div>
            <div className="text-sm text-white/70">Total Pages</div>
          </div>
          <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
            <div className="text-2xl font-bold text-green-400">
              {landingPages.filter(p => p.is_published).length}
            </div>
            <div className="text-sm text-white/70">Published</div>
          </div>
          <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
            <div className="text-2xl font-bold text-yellow-400">
              {landingPages.filter(p => !p.is_published).length}
            </div>
            <div className="text-sm text-white/70">Drafts</div>
          </div>
          <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
            <div className="text-2xl font-bold text-blue-400">
              {landingPages.reduce((sum, p) => sum + p.view_count, 0)}
            </div>
            <div className="text-sm text-white/70">Total Views</div>
          </div>
        </div>

        {/* Landing Pages Table */}
        <div className="rounded-xl border border-gray-600/30 bg-gray-900/50">
          <div className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">All Landing Pages</h3>
            
            {landingPages.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gray-600/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-white/70">No landing pages found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600/30">
                      <th className="pb-3 text-left text-sm font-medium text-white/70">Title</th>
                      <th className="pb-3 text-left text-sm font-medium text-white/70">Organization</th>
                      <th className="pb-3 text-left text-sm font-medium text-white/70">Status</th>
                      <th className="pb-3 text-left text-sm font-medium text-white/70">Views</th>
                      <th className="pb-3 text-left text-sm font-medium text-white/70">Created</th>
                      <th className="pb-3 text-left text-sm font-medium text-white/70">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {landingPages.map((page) => (
                      <tr key={page.id} className="border-b border-gray-600/20">
                        <td className="py-4">
                          <div>
                            <div className="font-medium text-white">{page.title}</div>
                            <div className="text-sm text-white/50">/{page.slug}</div>
                          </div>
                        </td>
                        <td className="py-4 text-white/70">{page.organization_name}</td>
                        <td className="py-4">
                          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            page.is_published 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {page.is_published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-4 text-white/70">{page.view_count}</td>
                        <td className="py-4 text-white/70">
                          {new Date(page.created_at).toLocaleDateString()}
                        </td>
                        <td className="py-4">
                          <div className="flex gap-2">
                            <button className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700">
                              View
                            </button>
                            <button className="rounded bg-gray-600 px-3 py-1 text-xs text-white hover:bg-gray-700">
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAdminNew;
