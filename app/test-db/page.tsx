import { supabase } from '@/lib/supabase/client';

export default async function TestDB() {
  try {
    const { data: pages, error } = await supabase
      .from('landing_pages')
      .select('*')
      .limit(5);

    return (
      <div className="min-h-screen bg-black p-8 text-white">
        <h1 className="mb-4 text-2xl font-bold">Database Test</h1>
        <div className="mb-4">
          <strong>Error:</strong> {error ? JSON.stringify(error) : 'None'}
        </div>
        <div className="mb-4">
          <strong>Pages found:</strong> {pages?.length || 0}
        </div>
        <div>
          <strong>Data:</strong>
          <pre className="mt-2 overflow-auto rounded bg-gray-800 p-4">
            {JSON.stringify(pages, null, 2)}
          </pre>
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div className="min-h-screen bg-black p-8 text-white">
        <h1 className="mb-4 text-2xl font-bold">Database Test - Error</h1>
        <pre className="rounded bg-red-900 p-4">
          {JSON.stringify(err, null, 2)}
        </pre>
      </div>
    );
  }
}
