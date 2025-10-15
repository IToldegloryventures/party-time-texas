"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const HIDE_ON_PATHS = new Set<string>([
  '/architecture-diagram',
]);

export default function ConditionalNavbar(): React.JSX.Element | null {
  const pathname = usePathname();

  if (pathname && (pathname === '/architecture-diagram' || pathname.startsWith('/architecture-diagram/'))) {
    return null;
  }

  // For now, return null to avoid Clerk issues during build
  // TODO: Re-enable DefaultNavbar when Clerk is properly configured
  return null;
}


