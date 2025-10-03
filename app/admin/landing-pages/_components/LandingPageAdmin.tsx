'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
// import { getUserOrganizationData } from '@/lib/supabase/user-org';
import { supabase } from '@/lib/supabase/client';

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

const LandingPageAdmin = () => {
  const { user, isLoaded } = useUser();
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);
  const [loading, setLoading] = useState(true);
  // const [selectedPage, setSelectedPage] = useState<LandingPage | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPage, setNewPage] = useState({
    name: '',
    slug: '',
    organization_id: '',
    owner_email: '',
    content: {
      title: '',
      subtitle: '',
      description: '',
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
    },
  });

  useEffect(() => {
    if (user && isLoaded) {
      fetchLandingPages();
    }
  }, [user, isLoaded]);

  const fetchLandingPages = async () => {
    try {
      setLoading(true);

      console.log('=== ADMIN FETCH DEBUG ===');
      console.log('Fetching landing pages from admin...');

      // Check if landing_pages table exists, if not show empty state
      const { data: landingPages, error: pagesError } = await supabase
        .from('landing_pages')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Admin query result:', { landingPages, pagesError });

      if (pagesError) {
        console.log('Landing pages table error:', pagesError);
        setLandingPages([]);
        return;
      }

      // Get organization and user data separately to avoid RLS issues
      const organizationIds = [
        ...new Set((landingPages || []).map(page => page.organization_id)),
      ];

      let organizations = [];
      let users = [];

      if (organizationIds.length > 0) {
        const { data: orgData } = await supabase
          .from('organizations')
          .select('id, name')
          .in('id', organizationIds);

        const { data: userData } = await supabase
          .from('users')
          .select('id, email, organization_id')
          .in('organization_id', organizationIds);

        organizations = orgData || [];
        users = userData || [];

        console.log('Organizations:', organizations);
        console.log('Users:', users);
      }

      // Transform the data to match our interface
      const transformedPages: LandingPage[] = (landingPages || []).map(page => {
        const organization = organizations.find(
          org => org.id === page.organization_id
        );
        const user = users.find(
          u => u.organization_id === page.organization_id
        );

        return {
          id: page.id,
          title: page.title,
          slug: page.slug,
          organization_id: page.organization_id,
          organization_name: organization?.name || 'Unknown Organization',
          owner_name: user?.email?.split('@')[0] || 'Unknown Owner',
          owner_email: user?.email || 'unknown@example.com',
          is_published: page.is_published || false,
          created_at: page.created_at,
          updated_at: page.updated_at,
          view_count: page.view_count || 0,
          last_view: page.last_view,
        };
      });

      setLandingPages(transformedPages);
    } catch (error) {
      console.error('Error fetching landing pages:', error);
      setLandingPages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePage = async () => {
    try {
      // Get the organization ID for the owner email
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('organization_id')
        .eq('email', newPage.owner_email)
        .single();

      if (userError || !userData) {
        alert('Error: User not found. Please check the owner email.');
        return;
      }

      // Create the landing page in the database
      const { data: pageData } = await supabase
        .from('landing_pages')
        .insert({
          organization_id: userData.organization_id,
          title: newPage.name, // Use title instead of name
          slug: newPage.slug,
          content: newPage.content,
          is_published: false, // Use is_published instead of status
        })
        .select()
        .single();

      if (pageError) {
        console.error('Database error:', pageError);
        alert('Error creating landing page: ' + pageError.message);
        return;
      }

      alert(
        'Landing page created successfully! You can now access it at /landing/' +
          newPage.slug
      );
      setShowCreateForm(false);

      // Reset form
      setNewPage({
        name: '',
        slug: '',
        organization_id: '',
        owner_email: '',
        content: {
          title: '',
          subtitle: '',
          description: '',
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
        },
      });

      // Refresh the list
      fetchLandingPages();
    } catch (error) {
      console.error('Error creating landing page:', error);
      alert('Error creating landing page: ' + error);
    }
  };

  const handleEditPage = (page: LandingPage) => {
    setSelectedPage(page);
    // In real app, this would open edit modal
    alert(`Editing page: ${page.title}`);
  };

  const handleDeletePage = async (pageId: string) => {
    if (confirm('Are you sure you want to delete this landing page?')) {
      try {
        // In real app, this would delete from database
        console.log('Deleting landing page:', pageId);
        alert(
          'Landing page deleted! (This would delete from database in production)'
        );
      } catch (error) {
        console.error('Error deleting landing page:', error);
      }
    }
  };

  const handleToggleStatus = async (pageId: string, newStatus: string) => {
    try {
      // In real app, this would update database
      console.log('Updating page status:', pageId, newStatus);
      alert(
        `Page status updated to ${newStatus}! (This would update database in production)`
      );
    } catch (error) {
      console.error('Error updating page status:', error);
    }
  };

  const handleManagePermissions = (page: LandingPage) => {
    // In real app, this would open a permissions modal
    alert(
      `Managing permissions for: ${page.title}\n\nThis would allow you to:\n- Assign editors\n- Set view-only users\n- Remove access\n- Change ownership`
    );
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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            Landing Pages Admin
          </h1>
          <p className="text-xl text-white/70">
            Manage all landing pages, assign permissions, and track analytics
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setShowCreateForm(true)}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
          >
            Create New Page
          </button>
          <button
            onClick={fetchLandingPages}
            className="rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
          >
            Refresh Data
          </button>
        </div>

        {/* Landing Pages Table */}
        <div className="overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50">
          {landingPages.length === 0 ? (
            <div className="p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-700/50">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                No Landing Pages Yet
              </h3>
              <p className="mb-4 text-white/70">
                No landing pages have been created yet. Create your first
                landing page to get started.
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                Create First Landing Page
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Page Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      URL
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Organization
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Owner
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Scans
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Last Scan
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {landingPages.map(page => (
                    <tr key={page.id} className="hover:bg-gray-800/30">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-white">
                            {page.title}
                          </div>
                          <div className="text-sm text-white/60">
                            /{page.slug}
                          </div>
                          <a
                            href={`/landing/${page.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-xs text-purple-300 underline hover:text-purple-200"
                          >
                            🔗 View Landing Page
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`/landing/${page.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-300 underline hover:text-purple-200"
                        >
                          /landing/{page.slug}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {page.organization_name}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-white/70">{page.owner_name}</div>
                          <div className="text-sm text-white/50">
                            {page.owner_email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            page.is_published
                              ? 'bg-green-600/20 text-green-300'
                              : 'bg-yellow-600/20 text-yellow-300'
                          }`}
                        >
                          {page.is_published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {page.view_count}
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {page.last_view
                          ? new Date(page.last_view).toLocaleDateString()
                          : 'Never'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditPage(page)}
                            className="rounded bg-blue-600/20 px-3 py-1 text-xs text-blue-300 transition-colors hover:bg-blue-600/30"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleManagePermissions(page)}
                            className="rounded bg-purple-600/20 px-3 py-1 text-xs text-purple-300 transition-colors hover:bg-purple-600/30"
                          >
                            Permissions
                          </button>
                          <button
                            onClick={() =>
                              handleToggleStatus(
                                page.id,
                                page.is_published ? 'draft' : 'published'
                              )
                            }
                            className={`rounded px-3 py-1 text-xs transition-colors ${
                              page.is_published
                                ? 'bg-yellow-600/20 text-yellow-300 hover:bg-yellow-600/30'
                                : 'bg-green-600/20 text-green-300 hover:bg-green-600/30'
                            }`}
                          >
                            {page.is_published ? 'Unpublish' : 'Publish'}
                          </button>
                          <button
                            onClick={() => handleDeletePage(page.id)}
                            className="rounded bg-red-600/20 px-3 py-1 text-xs text-red-300 transition-colors hover:bg-red-600/30"
                          >
                            Delete
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

        {/* Create Page Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="mx-4 w-full max-w-2xl rounded-xl border border-gray-600/30 bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Create New Landing Page
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Page Name
                  </label>
                  <input
                    type="text"
                    value={newPage.name}
                    onChange={e =>
                      setNewPage({ ...newPage, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="Enter page name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={newPage.slug}
                    onChange={e =>
                      setNewPage({ ...newPage, slug: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="page-slug"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Owner Email
                  </label>
                  <input
                    type="email"
                    value={newPage.owner_email}
                    onChange={e =>
                      setNewPage({ ...newPage, owner_email: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="owner@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Page Title
                  </label>
                  <input
                    type="text"
                    value={newPage.content.title}
                    onChange={e =>
                      setNewPage({
                        ...newPage,
                        content: { ...newPage.content, title: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="Welcome to Company Name!"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleCreatePage}
                  className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
                >
                  Create Page
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="rounded-lg bg-gray-600 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageAdmin;
