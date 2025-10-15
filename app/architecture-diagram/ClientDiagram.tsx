'use client';

import React from 'react';

export default function ClientDiagram(): React.JSX.Element {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-light">Cosmic Portals – NFC-Powered SaaS Platform Architecture</h1>
          <p className="text-xl opacity-90">Professional System Architecture | Investor-Ready Presentation</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span>Investor View v2</span>
          </div>
        </div>
      </div>
    </>
  );
}


