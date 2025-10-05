'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

interface Organization {
  id: string;
  name: string;
  slug: string;
  plan_type: string;
  subscription_status: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  user_count?: number;
  device_count?: number;
  scan_count?: number;
}

const OrganizationsAdmin = () => {
  const { user, isLoaded } = useUser();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && isLoaded) {
      fetchOrganizations();
    }
  }, [user, isLoaded]);

  const fetchOrganizations = async () => {
    try {
      setLoading(true);

      // Fetch organizations from Supabase
      const { data: orgs, error: orgError } = await supabase
        .from('organizations')
        .select('*')
        .order('created_at', { ascending: false });

      if (orgError) {
        console.error('Error fetching organizations:', orgError);
        setOrganizations([]);
        return;
      }

      // Get additional stats for each organization
      const orgsWithStats = await Promise.all(
        (orgs || []).map(async org => {
          // Get user count
          const { count: userCount } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true })
            .eq('organization_id', org.id);

          // Get device count
          const { count: deviceCount } = await supabase
            .from('nfc_devices')
            .select('*', { count: 'exact', head: true })
            .eq('organization_id', org.id);

          // Get scan count
          const { count: scanCount } = await supabase
            .from('nfc_scans')
            .select('*', { count: 'exact', head: true })
            .eq('organization_id', org.id);

          return {
            ...org,
            user_count: userCount || 0,
            device_count: deviceCount || 0,
            scan_count: scanCount || 0,
          };
        })
      );

      setOrganizations(orgsWithStats);
    } catch (error) {
      console.error('Error fetching organizations:', error);
      setOrganizations([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePlan = async (orgId: string, newPlan: string) => {
    try {
      const { error } = await supabase
        .from('organizations')
        .update({ plan_type: newPlan })
        .eq('id', orgId);

      if (error) throw error;

      alert(`Organization plan updated to ${newPlan}!`);
      fetchOrganizations();
    } catch (error) {
      console.error('Error updating plan:', error);
      alert('Error updating plan');
    }
  };

  const handleUpdateStatus = async (orgId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('organizations')
        .update({ subscription_status: newStatus })
        .eq('id', orgId);

      if (error) throw error;

      alert(`Organization status updated to ${newStatus}!`);
      fetchOrganizations();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-400"></div>
          <p className="text-white/70">Loading organizations...</p>
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
            Organizations Management
          </h1>
          <p className="text-xl text-white/70">
            Manage all organizations, plans, and subscriptions
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={fetchOrganizations}
            className="rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
          >
            Refresh Data
          </button>
        </div>

        {/* Organizations Table */}
        <div className="overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50">
          {organizations.length === 0 ? (
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                No Organizations Yet
              </h3>
              <p className="text-white/70">
                No organizations have been created yet.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Organization
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Plan
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Users
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Devices
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Scans
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Created
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {organizations.map(org => (
                    <tr key={org.id} className="hover:bg-gray-800/30">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-white">
                            {org.name}
                          </div>
                          <div className="text-sm text-white/60">
                            /{org.slug}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            org.plan_type === 'enterprise'
                              ? 'bg-purple-600/20 text-purple-300'
                              : org.plan_type === 'professional'
                                ? 'bg-blue-600/20 text-blue-300'
                                : 'bg-green-600/20 text-green-300'
                          }`}
                        >
                          {org.plan_type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            org.subscription_status === 'active'
                              ? 'bg-green-600/20 text-green-300'
                              : org.subscription_status === 'past_due'
                                ? 'bg-yellow-600/20 text-yellow-300'
                                : 'bg-red-600/20 text-red-300'
                          }`}
                        >
                          {org.subscription_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {org.user_count}
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {org.device_count}
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {org.scan_count}
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {new Date(org.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <select
                            value={org.plan_type}
                            onChange={e =>
                              handleUpdatePlan(org.id, e.target.value)
                            }
                            className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-xs text-white"
                          >
                            <option value="starter">Starter</option>
                            <option value="professional">Professional</option>
                            <option value="enterprise">Enterprise</option>
                          </select>
                          <select
                            value={org.subscription_status}
                            onChange={e =>
                              handleUpdateStatus(org.id, e.target.value)
                            }
                            className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-xs text-white"
                          >
                            <option value="active">Active</option>
                            <option value="past_due">Past Due</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
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
  );
};

export default OrganizationsAdmin;
