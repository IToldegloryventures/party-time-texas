'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserData {
  user: {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
    role: string;
    permissions: any;
  };
  organization: {
    id: string;
    name: string;
    slug: string;
    plan_type: string;
    settings?: any;
  };
}

interface SettingsContentProps {
  userData: UserData;
}

const SettingsContent = ({ userData }: SettingsContentProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'general' | 'team' | 'branding'>('general');
  
  // General Settings State
  const [organizationName, setOrganizationName] = useState(userData.organization.name);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Branding Settings State
  const [primaryColor, setPrimaryColor] = useState(
    userData.organization.settings?.branding?.primaryColor || '#8B5CF6'
  );
  const [secondaryColor, setSecondaryColor] = useState(
    userData.organization.settings?.branding?.secondaryColor || '#3B82F6'
  );
  const [accentColor, setAccentColor] = useState(
    userData.organization.settings?.branding?.accentColor || '#10B981'
  );
  const [logoUrl, setLogoUrl] = useState(
    userData.organization.settings?.logo || ''
  );

  const handleSaveGeneral = async () => {
    try {
      setLoading(true);
      setMessage(null);

      const response = await fetch('/api/organizations/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: organizationName,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        setMessage({ type: 'error', text: error.error || 'Failed to update organization' });
        return;
      }

      setMessage({ type: 'success', text: 'Organization settings updated successfully!' });
      
      // Refresh the page data
      setTimeout(() => {
        router.refresh();
      }, 1500);
    } catch (error) {
      console.error('Error updating organization:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBranding = async () => {
    try {
      setLoading(true);
      setMessage(null);

      const response = await fetch('/api/organizations/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          settings: {
            ...userData.organization.settings,
            logo: logoUrl,
            branding: {
              primaryColor,
              secondaryColor,
              accentColor,
            },
          },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        setMessage({ type: 'error', text: error.error || 'Failed to update branding' });
        return;
      }

      setMessage({ type: 'success', text: 'Branding settings updated successfully!' });
      
      // Refresh the page data
      setTimeout(() => {
        router.refresh();
      }, 1500);
    } catch (error) {
      console.error('Error updating branding:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Link
              href="/dashboard"
              className="text-white/70 hover:text-white transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            Organization Settings
          </h1>
          <p className="text-xl text-white/70">
            Manage your organization profile, team, and branding
          </p>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-6 rounded-lg border p-4 ${
              message.type === 'success'
                ? 'border-green-500/30 bg-green-900/20 text-green-300'
                : 'border-red-500/30 bg-red-900/20 text-red-300'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'general'
                ? 'border-b-2 border-purple-400 text-purple-400'
                : 'text-white/70 hover:text-white'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'team'
                ? 'border-b-2 border-purple-400 text-purple-400'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Team Management
          </button>
          <button
            onClick={() => setActiveTab('branding')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'branding'
                ? 'border-b-2 border-purple-400 text-purple-400'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Branding
          </button>
        </div>

        {/* General Tab */}
        {activeTab === 'general' && (
          <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">General Settings</h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="orgName" className="mb-2 block text-sm font-medium text-white/70">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="orgName"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="My Organization"
                />
              </div>

              <div>
                <label htmlFor="orgSlug" className="mb-2 block text-sm font-medium text-white/70">
                  Organization Slug (URL)
                </label>
                <input
                  type="text"
                  id="orgSlug"
                  value={userData.organization.slug}
                  disabled
                  className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-2 text-white/50 cursor-not-allowed"
                />
                <p className="mt-1 text-xs text-white/50">
                  Slug cannot be changed after creation
                </p>
              </div>

              <div>
                <label htmlFor="planType" className="mb-2 block text-sm font-medium text-white/70">
                  Plan Type
                </label>
                <input
                  type="text"
                  id="planType"
                  value={userData.organization.plan_type}
                  disabled
                  className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-2 text-white/50 capitalize cursor-not-allowed"
                />
                <p className="mt-1 text-xs text-white/50">
                  Contact support to change your plan
                </p>
              </div>

              <button
                onClick={handleSaveGeneral}
                disabled={loading}
                className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        )}

        {/* Team Management Tab */}
        {activeTab === 'team' && (
          <div className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Team Management</h2>
            
            <div className="mb-6">
              <Link
                href="/dashboard/team"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Go to Team Management
              </Link>
            </div>

            <p className="text-white/70">
              Manage your team members, send invitations, and control permissions from the Team Management page.
            </p>
          </div>
        )}

        {/* Branding Tab */}
        {activeTab === 'branding' && (
          <div className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-900/20 to-green-800/10 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Branding Settings</h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="logoUrl" className="mb-2 block text-sm font-medium text-white/70">
                  Organization Logo URL
                </label>
                <input
                  type="text"
                  id="logoUrl"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="https://example.com/logo.png"
                />
                <p className="mt-1 text-xs text-white/50">
                  Enter a direct URL to your logo image (PNG, JPG, or SVG)
                </p>
                {logoUrl && (
                  <div className="mt-4 rounded-lg bg-black/50 p-4">
                    <p className="mb-2 text-sm font-medium text-white/70">Logo Preview:</p>
                    <img
                      src={logoUrl}
                      alt="Organization Logo"
                      className="h-20 w-auto rounded-lg border border-gray-600 bg-white/10 object-contain p-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="primaryColor" className="mb-2 block text-sm font-medium text-white/70">
                  Primary Color
                </label>
                <div className="flex gap-4">
                  <input
                    type="color"
                    id="primaryColor"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-12 w-20 rounded-lg border border-gray-600 bg-gray-800 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="#8B5CF6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="secondaryColor" className="mb-2 block text-sm font-medium text-white/70">
                  Secondary Color
                </label>
                <div className="flex gap-4">
                  <input
                    type="color"
                    id="secondaryColor"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="h-12 w-20 rounded-lg border border-gray-600 bg-gray-800 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="#3B82F6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="accentColor" className="mb-2 block text-sm font-medium text-white/70">
                  Accent Color
                </label>
                <div className="flex gap-4">
                  <input
                    type="color"
                    id="accentColor"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="h-12 w-20 rounded-lg border border-gray-600 bg-gray-800 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="#10B981"
                  />
                </div>
              </div>

              <div className="rounded-lg bg-black/50 p-4">
                <p className="mb-2 text-sm font-medium text-white/70">Preview:</p>
                <div className="flex gap-4">
                  <div
                    className="h-12 w-12 rounded-lg"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <div
                    className="h-12 w-12 rounded-lg"
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                  <div
                    className="h-12 w-12 rounded-lg"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                </div>
              </div>

              <button
                onClick={handleSaveBranding}
                disabled={loading}
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save Branding'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsContent;

