'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function UserInfoPage() {
  const { user, isLoaded } = useUser();
  const [userData, setUserData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    if (user) {
      setUserData({
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        lastSignInAt: user.lastSignInAt,
      });
    }
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-white">Please sign in to view user info</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Clerk User Information</h1>

        <div className="rounded-lg bg-gray-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">Your Clerk User Data:</h2>
          <pre className="overflow-auto rounded bg-black p-4 text-sm">
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>

        <div className="mt-8 rounded-lg bg-blue-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">Next Steps:</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>
              Copy your Clerk User ID:{' '}
              <code className="rounded bg-gray-800 px-2 py-1">
                {userData?.id}
              </code>
            </li>
            <li>
              Copy your email:{' '}
              <code className="rounded bg-gray-800 px-2 py-1">
                {userData?.email}
              </code>
            </li>
            <li>We'll use this to update the Supabase records</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
