import React from 'react';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function ArchitectureDiagram() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Architecture Diagram
        </h1>
        <p className="text-gray-300">
          This page is working! The architecture diagram will be loaded here.
        </p>
      </div>
    </div>
  );
}
