import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';

export default async function DebugUserPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  // Test direct database query
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  const { data: organization, error: orgError } = await supabase
    .from('organizations')
    .select('*')
    .eq('id', user?.organization_id)
    .single();

  return (
    <div className="p-8">
      <h1>Debug User Data</h1>
      <div>
        <h2>User ID (Clerk):</h2>
        <pre>{userId}</pre>
      </div>
      <div>
        <h2>User Data:</h2>
        <pre>{JSON.stringify({ user, userError }, null, 2)}</pre>
      </div>
      <div>
        <h2>Organization Data:</h2>
        <pre>{JSON.stringify({ organization, orgError }, null, 2)}</pre>
      </div>
    </div>
  );
}
