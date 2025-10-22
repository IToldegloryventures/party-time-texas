'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import { detectUserType } from '@/lib/user-type-detection';
import { hasPermission } from '@/lib/permissions';

const LandingPageBuilder = () => {
  const { user, isLoaded } = useUser();
  const [orgData, setOrgData] = useState<Record<string, unknown> | null>(null);
  const [userType, setUserType] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState({
    name: '',
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
    branding: {
      primaryColor: '#FF1E56',
      secondaryColor: '#FF00FF',
      accentColor: '#00FFFF',
    },
  });

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
      
      if (data) {
        // Detect user type and permissions
        const userTypeInfo = detectUserType(data);
        setUserType(userTypeInfo);
        
        // Check if user has permission to access builder
        if (!userTypeInfo.canAccessBuilder) {
          console.error('User does not have permission to access landing page builder');
          return;
        }
        
        // Initialize page data with organization-specific information
        setPageData({
          name: `${data.organization.name} Landing Page`,
          title: `Welcome to ${data.organization.name}!`,
          subtitle: data.organization.settings?.tagline || 'Your trusted partner for success',
          description: data.organization.settings?.description || 'We provide exceptional services to help you achieve your goals.',
          contact: {
            email: data.user.email,
            phone: data.organization.settings?.phone || '',
            website: data.organization.settings?.website || '',
          },
          social: {
            facebook: data.organization.settings?.social?.facebook || '',
            instagram: data.organization.settings?.social?.instagram || '',
            linkedin: data.organization.settings?.social?.linkedin || '',
          },
          branding: {
            primaryColor: data.organization.settings?.branding?.primaryColor || '#FF1E56',
            secondaryColor: data.organization.settings?.branding?.secondaryColor || '#FF00FF',
            accentColor: data.organization.settings?.branding?.accentColor || '#00FFFF',
          },
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      // For now, we'll create a new page since we don't have an ID
      const response = await fetch('/api/landing-pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: pageData.name,
          title: pageData.title,
          slug: pageData.name.toLowerCase().replace(/\s+/g, '-'),
          content: pageData,
          status: 'draft',
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Landing page saved:', result);
        alert('Landing page saved successfully!');
      } else {
        console.error('Failed to save landing page');
        alert('Failed to save landing page. Please try again.');
      }
    } catch (error) {
      console.error('Error saving landing page:', error);
      alert('Error saving landing page. Please try again.');
    }
  };

  const handlePublish = async () => {
    try {
      // For now, we'll create a new page since we don't have an ID
      const response = await fetch('/api/landing-pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: pageData.name,
          title: pageData.title,
          slug: pageData.name.toLowerCase().replace(/\s+/g, '-'),
          content: pageData,
          status: 'published',
          is_published: true,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Landing page published:', result);
        alert('Landing page published successfully!');
      } else {
        console.error('Failed to publish landing page');
        alert('Failed to publish landing page. Please try again.');
      }
    } catch (error) {
      console.error('Error publishing landing page:', error);
      alert('Error publishing landing page. Please try again.');
    }
  };

  const handlePreview = () => {
    // Generate preview URL
    const previewUrl = `http://192.168.0.178:3000/landing/party-time-texas`;
    window.open(previewUrl, '_blank');
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading builder...</p>
        </div>
      </div>
    );
  }

  // Check if user has permission to access builder
  if (userType && !userType.canAccessBuilder) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Access Denied</h2>
          <p className="text-white/70">You don't have permission to access the landing page builder.</p>
          <p className="mt-2 text-sm text-white/50">Contact your administrator for access.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
                Landing Page Builder
              </h1>
              <p className="text-xl text-white/70">
                Create custom landing pages for your NFC devices
              </p>
            </div>
            {userType && (
              <div className="text-right">
                <div className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
                  <span className="mr-2 h-2 w-2 rounded-full bg-purple-400"></span>
                  {userType.displayName}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Builder Panel */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Page Settings
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Page Name
                  </label>
                  <input
                    type="text"
                    value={pageData.name}
                    onChange={e =>
                      setPageData({ ...pageData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Title
                  </label>
                  <input
                    type="text"
                    value={pageData.title}
                    onChange={e =>
                      setPageData({ ...pageData, title: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={pageData.subtitle}
                    onChange={e =>
                      setPageData({ ...pageData, subtitle: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Description
                  </label>
                  <textarea
                    value={pageData.description}
                    onChange={e =>
                      setPageData({ ...pageData, description: e.target.value })
                    }
                    rows={3}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    value={pageData.contact.email}
                    onChange={e =>
                      setPageData({
                        ...pageData,
                        contact: { ...pageData.contact, email: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={pageData.contact.phone}
                    onChange={e =>
                      setPageData({
                        ...pageData,
                        contact: { ...pageData.contact, phone: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Website
                  </label>
                  <input
                    type="url"
                    value={pageData.contact.website}
                    onChange={e =>
                      setPageData({
                        ...pageData,
                        contact: {
                          ...pageData.contact,
                          website: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Social Media Links
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Facebook
                  </label>
                  <input
                    type="url"
                    value={pageData.social.facebook}
                    onChange={e =>
                      setPageData({
                        ...pageData,
                        social: {
                          ...pageData.social,
                          facebook: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Instagram
                  </label>
                  <input
                    type="url"
                    value={pageData.social.instagram}
                    onChange={e =>
                      setPageData({
                        ...pageData,
                        social: {
                          ...pageData.social,
                          instagram: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={pageData.social.linkedin}
                    onChange={e =>
                      setPageData({
                        ...pageData,
                        social: {
                          ...pageData.social,
                          linkedin: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Branding Colors */}
            <div className="rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Branding Colors
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={pageData.branding.primaryColor}
                      onChange={e =>
                        setPageData({
                          ...pageData,
                          branding: {
                            ...pageData.branding,
                            primaryColor: e.target.value,
                          },
                        })
                      }
                      className="h-10 w-12 rounded border border-gray-600"
                    />
                    <input
                      type="text"
                      value={pageData.branding.primaryColor}
                      onChange={e =>
                        setPageData({
                          ...pageData,
                          branding: {
                            ...pageData.branding,
                            primaryColor: e.target.value,
                          },
                        })
                      }
                      className="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={pageData.branding.secondaryColor}
                      onChange={e =>
                        setPageData({
                          ...pageData,
                          branding: {
                            ...pageData.branding,
                            secondaryColor: e.target.value,
                          },
                        })
                      }
                      className="h-10 w-12 rounded border border-gray-600"
                    />
                    <input
                      type="text"
                      value={pageData.branding.secondaryColor}
                      onChange={e =>
                        setPageData({
                          ...pageData,
                          branding: {
                            ...pageData.branding,
                            secondaryColor: e.target.value,
                          },
                        })
                      }
                      className="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {userType && hasPermission(userType.role, 'canEditLandingPages') && (
                <button
                  onClick={handleSave}
                  className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
                >
                  Save Draft
                </button>
              )}
              {userType && hasPermission(userType.role, 'canPublishLandingPages') && (
                <button
                  onClick={handlePublish}
                  className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-green-700 hover:to-emerald-700"
                >
                  Publish Page
                </button>
              )}
              <button
                onClick={handlePreview}
                className="rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
              >
                Preview
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="rounded-xl border border-gray-600/30 bg-gray-900/30 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Live Preview
            </h3>
            <div className="min-h-[400px] rounded-lg bg-black p-4">
              <div className="text-center">
                <h1 className="mb-2 text-2xl font-bold text-white">
                  {pageData.title}
                </h1>
                <p className="mb-4 text-purple-300">{pageData.subtitle}</p>
                <p className="mb-6 text-sm text-white/70">
                  {pageData.description}
                </p>

                <div className="space-y-2 text-sm text-white/60">
                  <p>📧 {pageData.contact.email}</p>
                  <p>📞 {pageData.contact.phone}</p>
                  <p>🌐 {pageData.contact.website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBuilder;
