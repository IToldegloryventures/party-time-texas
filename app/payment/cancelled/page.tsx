'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentCancelledPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to pricing page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/pricing');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full border-2 border-red-400 flex items-center justify-center">
          <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="mb-2 text-2xl font-bold text-white">Payment Cancelled</h1>
        <p className="mb-4 text-white/70">Your payment was cancelled. You will be redirected to pricing shortly.</p>
        <button
          onClick={() => router.push('/pricing')}
          className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-purple-700"
        >
          Return to Pricing
        </button>
      </div>
    </div>
  );
}
