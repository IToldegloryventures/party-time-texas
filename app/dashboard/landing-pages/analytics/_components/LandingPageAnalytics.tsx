'use client';

import { useState, useEffect } from 'react';

interface LandingPageAnalyticsProps {
  page: any;
  organizationId: string;
  userId: string;
}

const LandingPageAnalytics = ({ page, organizationId, userId }: LandingPageAnalyticsProps) => {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalytics();
  }, [page.id, timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/landing-pages/${page.id}/analytics?range=${timeRange}`);
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateUTMUrl = () => {
    const baseUrl = `${window.location.origin}/landing/${page.slug}`;
    const utmParams = new URLSearchParams({
      utm_source: 'nfc',
      utm_medium: 'tap',
      utm_campaign: page.name.toLowerCase().replace(/\s+/g, '-'),
      utm_content: 'landing-page'
    });
    return `${baseUrl}?${utmParams.toString()}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{page.name}</h1>
            <p className="text-white/70">Analytics Dashboard</p>
          </div>
          <div className="flex gap-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-600"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button
              onClick={() => window.location.href = `/dashboard/landing-pages/builder/${page.id}`}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Edit Page
            </button>
          </div>
        </div>
      </div>

      {/* Page Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-white font-semibold mb-4">Page Information</h3>
          <div className="space-y-3">
            <div>
              <label className="text-white/70 text-sm">Page Name</label>
              <p className="text-white">{page.name}</p>
            </div>
            <div>
              <label className="text-white/70 text-sm">Status</label>
              <span className={`px-2 py-1 rounded text-xs ${
                page.is_published ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
              }`}>
                {page.is_published ? 'Published' : 'Draft'}
              </span>
            </div>
            <div>
              <label className="text-white/70 text-sm">Created</label>
              <p className="text-white">{new Date(page.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-white font-semibold mb-4">URLs & Tracking</h3>
          <div className="space-y-3">
            <div>
              <label className="text-white/70 text-sm">Live URL</label>
              <div className="flex items-center gap-2">
                <p className="text-green-400 font-mono text-sm flex-1 truncate">
                  {`${window.location.origin}/landing/${page.slug}`}
                </p>
                <button
                  onClick={() => copyToClipboard(`${window.location.origin}/landing/${page.slug}`)}
                  className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                >
                  Copy
                </button>
              </div>
            </div>
            <div>
              <label className="text-white/70 text-sm">UTM Tracking URL</label>
              <div className="flex items-center gap-2">
                <p className="text-purple-400 font-mono text-sm flex-1 truncate">
                  {generateUTMUrl()}
                </p>
                <button
                  onClick={() => copyToClipboard(generateUTMUrl())}
                  className="px-2 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total Views</p>
              <p className="text-2xl font-bold text-white">
                {analytics?.total_views || page.scan_count || 0}
              </p>
            </div>
            <div className="text-blue-400">👁️</div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Unique Visitors</p>
              <p className="text-2xl font-bold text-white">
                {analytics?.unique_visitors || 0}
              </p>
            </div>
            <div className="text-green-400">👥</div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">NFC Scans</p>
              <p className="text-2xl font-bold text-white">
                {analytics?.total_scans || 0}
              </p>
            </div>
            <div className="text-purple-400">📱</div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Conversion Rate</p>
              <p className="text-2xl font-bold text-white">
                {analytics?.conversion_rate || '0%'}
              </p>
            </div>
            <div className="text-yellow-400">📈</div>
          </div>
        </div>
      </div>

      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-white font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Direct</span>
              <span className="text-white">{analytics?.traffic_sources?.direct || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">NFC Tap</span>
              <span className="text-white">{analytics?.traffic_sources?.nfc || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Social Media</span>
              <span className="text-white">{analytics?.traffic_sources?.social || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Other</span>
              <span className="text-white">{analytics?.traffic_sources?.other || 0}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-white font-semibold mb-4">Device Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Mobile</span>
              <span className="text-white">{analytics?.device_breakdown?.mobile || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Desktop</span>
              <span className="text-white">{analytics?.device_breakdown?.desktop || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Tablet</span>
              <span className="text-white">{analytics?.device_breakdown?.tablet || 0}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg">
        <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {analytics?.recent_activity?.length > 0 ? (
            analytics.recent_activity.map((activity: any, index: number) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                <div>
                  <p className="text-white">{activity.description}</p>
                  <p className="text-white/50 text-sm">{activity.location}</p>
                </div>
                <div className="text-white/70 text-sm">
                  {new Date(activity.timestamp).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-white/70">No recent activity</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPageAnalytics;
