'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { supabase } from '@/lib/supabase/client';

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
  };
}

interface OrganizationSettingsProps {
  userData: UserData;
}

interface OrganizationDetails {
  id: string;
  name: string;
  slug: string;
  plan_type: string;
  subscription_status: string;
  settings: any;
  white_label_config: any;
}

export default function OrganizationSettings({ userData }: OrganizationSettingsProps) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [organization, setOrganization] = useState<OrganizationDetails | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    industry: '',
    website: '',
    description: '',
    logo_url: '',
    primary_color: '#8B5CF6',
    secondary_color: '#EC4899',
    custom_domain: '',
    support_email: ''
  });

  useEffect(() => {
    fetchOrganizationDetails();
  }, []);

  const fetchOrganizationDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .eq('id', userData.organization.id)
        .single();

      if (error) throw error;

      setOrganization(data);
      
      // Populate form with existing data
      setFormData({
        name: data.name || '',
        slug: data.slug || '',
        industry: data.settings?.industry || '',
        website: data.settings?.website || '',
        description: data.settings?.description || '',
        logo_url: data.white_label_config?.logo_url || '',
        primary_color: data.white_label_config?.primary_color || '#8B5CF6',
        secondary_color: data.white_label_config?.secondary_color || '#EC4899',
        custom_domain: data.white_label_config?.custom_domain || '',
        support_email: data.settings?.support_email || ''
      });
    } catch (error) {
      console.error('Error fetching organization details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Auto-generate slug from organization name
    if (field === 'name') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({
        ...prev,
        slug: slug
      }));
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const { error } = await supabase
        .from('organizations')
        .update({
          name: formData.name,
          slug: formData.slug,
          settings: {
            industry: formData.industry,
            website: formData.website,
            description: formData.description,
            support_email: formData.support_email,
            updated_at: new Date().toISOString()
          },
          white_label_config: {
            logo_url: formData.logo_url,
            primary_color: formData.primary_color,
            secondary_color: formData.secondary_color,
            custom_domain: formData.custom_domain
          }
        })
        .eq('id', userData.organization.id);

      if (error) throw error;

      // Update local state
      setOrganization(prev => prev ? {
        ...prev,
        name: formData.name,
        slug: formData.slug,
        settings: {
          industry: formData.industry,
          website: formData.website,
          description: formData.description,
          support_email: formData.support_email
        },
        white_label_config: {
          logo_url: formData.logo_url,
          primary_color: formData.primary_color,
          secondary_color: formData.secondary_color,
          custom_domain: formData.custom_domain
        }
      } : null);

      alert('Organization settings saved successfully!');
    } catch (error) {
      console.error('Error saving organization settings:', error);
      alert('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: 'general', name: 'General', icon: '🏢' },
    { id: 'branding', name: 'Branding', icon: '🎨' },
    { id: 'white-label', name: 'White Label', icon: '🏷️' },
    { id: 'billing', name: 'Billing', icon: '💳' }
  ];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading organization settings...</p>
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
            Organization Settings
          </h1>
          <p className="text-xl text-white/70">
            Manage your organization's profile, branding, and preferences
          </p>
          <div className="mt-4 rounded-lg bg-blue-900/20 border border-blue-500/30 p-3">
            <p className="text-sm text-blue-300">
              🔐 <strong>Access Level:</strong> Organization Owner - Full management access
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-white/70 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>

            {/* Plan Info */}
            <div className="mt-8 rounded-lg border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-4">
              <h3 className="mb-2 font-semibold text-white">Current Plan</h3>
              <div className="mb-2">
                <span className="rounded-full bg-purple-600/20 px-2 py-1 text-xs font-medium text-purple-300">
                  {organization?.plan_type || userData.organization.plan_type} Plan
                </span>
              </div>
              <p className="text-xs text-white/60">
                {organization?.subscription_status || 'Active'} subscription
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8">
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">General Information</h2>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="Your Organization Name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Organization URL *
                      </label>
                      <div className="flex items-center">
                        <span className="rounded-l-lg border border-r-0 border-gray-600 bg-gray-800 px-3 py-3 text-white/70">
                          cosmicportals.com/
                        </span>
                        <input
                          type="text"
                          value={formData.slug}
                          onChange={(e) => handleInputChange('slug', e.target.value)}
                          className="w-full rounded-r-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          placeholder="your-organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
                      >
                        <option value="">Select your industry</option>
                        <option value="event-planning">Event Planning</option>
                        <option value="corporate">Corporate</option>
                        <option value="wedding">Wedding</option>
                        <option value="education">Education</option>
                        <option value="nonprofit">Non-profit</option>
                        <option value="marketing">Marketing Agency</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="https://yourcompany.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Support Email
                      </label>
                      <input
                        type="email"
                        value={formData.support_email}
                        onChange={(e) => handleInputChange('support_email', e.target.value)}
                        className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="support@yourcompany.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="Tell us about your organization..."
                    />
                  </div>
                </div>
              )}

              {/* Branding Settings */}
              {activeTab === 'branding' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Branding</h2>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Logo URL
                    </label>
                    <input
                      type="url"
                      value={formData.logo_url}
                      onChange={(e) => handleInputChange('logo_url', e.target.value)}
                      className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="https://yourcompany.com/logo.png"
                    />
                    {formData.logo_url && (
                      <div className="mt-3">
                        <img
                          src={formData.logo_url}
                          alt="Logo preview"
                          className="h-16 w-16 rounded-lg object-contain bg-white/10"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Primary Color
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={formData.primary_color}
                          onChange={(e) => handleInputChange('primary_color', e.target.value)}
                          className="h-12 w-12 rounded-lg border border-gray-600 bg-gray-700"
                        />
                        <input
                          type="text"
                          value={formData.primary_color}
                          onChange={(e) => handleInputChange('primary_color', e.target.value)}
                          className="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          placeholder="#8B5CF6"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Secondary Color
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={formData.secondary_color}
                          onChange={(e) => handleInputChange('secondary_color', e.target.value)}
                          className="h-12 w-12 rounded-lg border border-gray-600 bg-gray-700"
                        />
                        <input
                          type="text"
                          value={formData.secondary_color}
                          onChange={(e) => handleInputChange('secondary_color', e.target.value)}
                          className="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          placeholder="#EC4899"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Color Preview */}
                  <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-4">
                    <h3 className="mb-3 font-medium text-white">Color Preview</h3>
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div 
                          className="h-12 w-12 rounded-lg border border-gray-600"
                          style={{ backgroundColor: formData.primary_color }}
                        />
                        <p className="mt-2 text-xs text-white/60">Primary</p>
                      </div>
                      <div className="text-center">
                        <div 
                          className="h-12 w-12 rounded-lg border border-gray-600"
                          style={{ backgroundColor: formData.secondary_color }}
                        />
                        <p className="mt-2 text-xs text-white/60">Secondary</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* White Label Settings */}
              {activeTab === 'white-label' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">White Label Settings</h2>
                  
                  <div className="rounded-lg border border-yellow-500/30 bg-yellow-900/20 p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-yellow-400">⚠️</span>
                      <p className="text-sm text-yellow-300">
                        White label features are available on Professional and Enterprise plans
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Custom Domain
                    </label>
                    <input
                      type="text"
                      value={formData.custom_domain}
                      onChange={(e) => handleInputChange('custom_domain', e.target.value)}
                      className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="portal.yourcompany.com"
                      disabled={userData.organization.plan_type === 'starter'}
                    />
                    <p className="mt-1 text-xs text-white/50">
                      Use your own domain for your portal (Professional+ plans)
                    </p>
                  </div>
                </div>
              )}

              {/* Billing Settings */}
              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Billing & Subscription</h2>
                  
                  <div className="rounded-lg border border-green-500/30 bg-green-900/20 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-green-300">Current Plan</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/70">Plan:</span>
                        <span className="font-medium text-white">
                          {userData.organization.plan_type.charAt(0).toUpperCase() + userData.organization.plan_type.slice(1)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Status:</span>
                        <span className="font-medium text-green-300">
                          {organization?.subscription_status || 'Active'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Organization ID:</span>
                        <span className="font-mono text-xs text-white/60">
                          {userData.organization.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-blue-500/30 bg-blue-900/20 p-4">
                    <h4 className="mb-2 font-semibold text-blue-300">Upgrade Your Plan</h4>
                    <p className="mb-4 text-sm text-blue-200">
                      Need more features? Upgrade to Professional or Enterprise for advanced capabilities.
                    </p>
                    <button className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 font-medium text-white transition-colors hover:from-blue-600 hover:to-cyan-600">
                      View Plans
                    </button>
                  </div>
                </div>
              )}

              {/* Save Button */}
              {activeTab !== 'billing' && (
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-colors hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
