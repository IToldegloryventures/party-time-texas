"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import DefaultNavbar from '@/components/Navbar';

const HIDE_ON_PATHS = new Set<string>([
  '/architecture-diagram',
]);

export default function ConditionalNavbar(): React.JSX.Element | null {
  const pathname = usePathname();

  if (pathname && (pathname === '/architecture-diagram' || pathname.startsWith('/architecture-diagram/'))) {
    return null;
  }

  return <DefaultNavbar />;
}


