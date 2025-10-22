'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignOutButton, useUser } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const publicNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
  ];

  const buttonBase =
    'px-4 py-2 text-gray-300 font-semibold transition-all duration-300 hover:text-purple-400 hover:shadow-[0_2px_8px_0] hover:shadow-purple-400/40 hover:rounded-md';

  return (
    <nav className="border-b border-purple-500/30 bg-black text-white shadow-lg shadow-purple-500/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent"
        >
          Cosmic Portals
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center space-x-4">
          {publicNavLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${buttonBase} text-white/70 hover:text-white`}
            >
              {link.label}
            </Link>
          ))}

          {isMounted && (
            <>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className={`${buttonBase} text-white/70 hover:text-white`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-2">
                  {user?.firstName && (
                    <span className="font-semibold text-white">
                      {user.firstName}
                    </span>
                  )}
                  <SignOutButton>
                    <button className={buttonBase}>Sign Out</button>
                  </SignOutButton>
                </div>
              </SignedIn>

              <SignedOut>
                <Link
                  href="/sign-in"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
                >
                  Sign In
                </Link>
              </SignedOut>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="z-50 md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="space-y-4 border-t border-purple-400/20 bg-black/90 px-4 pt-4 pb-6 md:hidden">
          {publicNavLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`${buttonBase} block w-full text-left`}
            >
              {link.label}
            </Link>
          ))}

          {isMounted && (
            <>
              <SignedIn>
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className={`${buttonBase} block w-full text-left`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center justify-between">
                  {user?.firstName && (
                    <span className="font-semibold text-white">
                      {user.firstName}
                    </span>
                  )}
                  <SignOutButton>
                    <button className={buttonBase}>Sign Out</button>
                  </SignOutButton>
                </div>
              </SignedIn>

              <SignedOut>
                <Link
                  href="/sign-in"
                  onClick={closeMenu}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
                >
                  Sign In
                </Link>
              </SignedOut>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
