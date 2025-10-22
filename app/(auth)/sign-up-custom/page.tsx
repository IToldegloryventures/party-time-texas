'use client';

import { SignUp } from '@clerk/nextjs';
import { useState } from 'react';

export default function CustomSignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-white">
              Join Cosmic Portals
            </h1>
            <p className="text-white/70">
              Create your account and start transforming engagement
            </p>
          </div>

          <div className="rounded-xl border border-purple-400/20 bg-gray-900/50 p-8 backdrop-blur">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    'bg-purple-600 hover:bg-purple-700 text-white',
                  card: 'bg-transparent border-none shadow-none',
                  headerTitle: 'text-white text-2xl font-bold',
                  headerSubtitle: 'text-white/70',
                  socialButtonsBlockButton:
                    'bg-gray-800 hover:bg-gray-700 border-gray-600 text-white',
                  formFieldInput: 'bg-gray-800 border-gray-600 text-white',
                  footerActionLink: 'text-purple-400 hover:text-purple-300',
                },
              }}
              afterSignUpUrl="/dashboard"
              redirectUrl="/dashboard"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-white/60">
              Already have an account?{' '}
              <a
                href="/sign-in"
                className="text-purple-400 hover:text-purple-300"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
