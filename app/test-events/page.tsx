'use client';

import { useState, useEffect } from 'react';

export default function TestEventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<string>('');

  useEffect(() => {
    testEventsAPI();
  }, []);

  const testEventsAPI = async () => {
    try {
      setLoading(true);
      setError(null);

      // Test the API endpoint
      const response = await fetch('/api/events');

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setEvents(data);
      setTestResult(
        '✅ Events API is working! Database connection successful.'
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setTestResult('❌ Events API test failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const createTestEvent = async () => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test Event - API Verification',
          description: 'This is a test event to verify the API is working',
          event_type: 'business',
          start_date: new Date().toISOString(),
          end_date: new Date(Date.now() + 3600000).toISOString(), // 1 hour later
          location: 'Test Location',
          assigned_members: [],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const newEvent = await response.json();
      setEvents(prev => [...prev, newEvent]);
      setTestResult('✅ Test event created successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setTestResult('❌ Failed to create test event.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">
            🧪 Events API Test Page
          </h1>

          <div className="mb-6">
            <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h2 className="mb-2 text-lg font-semibold text-blue-900">
                Database Status
              </h2>
              <p className="text-blue-800">
                {testResult || 'Click "Test API" to verify database connection'}
              </p>
            </div>

            <div className="mb-6 flex gap-4">
              <button
                onClick={testEventsAPI}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Testing...' : 'Test API'}
              </button>

              <button
                onClick={createTestEvent}
                disabled={loading}
                className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
              >
                Create Test Event
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <h3 className="mb-2 text-lg font-semibold text-red-900">
                ❌ Error
              </h3>
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <div className="rounded-lg bg-gray-50 p-4">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Current Events ({events.length})
            </h2>

            {events.length === 0 ? (
              <p className="text-gray-600 italic">
                No events found. Create a test event to verify the system is
                working.
              </p>
            ) : (
              <div className="space-y-4">
                {events.map(event => (
                  <div
                    key={event.id}
                    className="rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {event.name}
                        </h3>
                        <p className="mb-2 text-gray-600">
                          {event.description}
                        </p>
                        <div className="text-sm text-gray-500">
                          <p>
                            <strong>Type:</strong> {event.event_type}
                          </p>
                          <p>
                            <strong>Location:</strong>{' '}
                            {event.location || 'Not specified'}
                          </p>
                          <p>
                            <strong>Status:</strong> {event.status}
                          </p>
                          <p>
                            <strong>Assigned Members:</strong>{' '}
                            {event.assigned_members?.length || 0}
                          </p>
                          <p>
                            <strong>Created:</strong>{' '}
                            {new Date(event.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>ID: {event.id.slice(0, 8)}...</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <h3 className="mb-2 text-lg font-semibold text-yellow-900">
              🔧 Next Steps
            </h3>
            <ul className="space-y-1 text-yellow-800">
              <li>• If API test fails, check your Supabase connection</li>
              <li>
                • If test event creation fails, check your Clerk authentication
              </li>
              <li>
                • Once working, we can build the full Events Management UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
