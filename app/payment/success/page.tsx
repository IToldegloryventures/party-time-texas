'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard with payment success parameter
    router.push('/dashboard?payment=success&plan=pro');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-green-400"></div>
        <p className="text-white/70">Processing your payment...</p>
      </div>
    </div>
  );
}
