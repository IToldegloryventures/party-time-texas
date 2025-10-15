"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import DefaultNavbar from '@/components/Navbar';

const HIDE_ON_PATHS = new Set<string>([
  '/architecture-diagram',
]);

export default function ConditionalNavbar(): React.JSX.Element | null {
  const pathname = usePathname();

  // Temporarily disable navbar for all pages to avoid Clerk issues
  return null;
}


