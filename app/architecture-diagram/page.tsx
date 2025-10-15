import React from 'react';

// Ensure this route bypasses any static caching and always serves the latest build
export const dynamic = 'force-dynamic';

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-red-500">
      <div className="p-8 text-center text-white">
        <h1 className="text-4xl font-bold">TEST PAGE - COMMIT 6195de0</h1>
        <p className="text-xl">
          If you see this, the server component is working
        </p>
        <p className="mt-4 text-lg">
          This should be a red page with white text
        </p>
      </div>
    </div>
  );
}
