'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface PaymentSuccessProps {
  onClose: () => void;
}

const PaymentSuccess = ({ onClose }: PaymentSuccessProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-hide after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="max-w-md rounded-xl border border-green-500/30 bg-gradient-to-r from-green-900/90 to-emerald-800/90 p-6 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start gap-4">
          {/* Success Icon */}
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle className="h-8 w-8 animate-pulse text-green-400" />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-lg font-bold text-green-100">
              Payment Successful! 🎉
            </h3>
            <p className="mb-3 text-sm text-green-200/80">
              Welcome to PDFtoolAI Pro! Your subscription is now active and you
              have access to all premium features.
            </p>

            {/* Features List */}
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-2 text-xs text-green-200/70">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                Unlimited PDF uploads
              </div>
              <div className="flex items-center gap-2 text-xs text-green-200/70">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                Advanced AI analysis
              </div>
              <div className="flex items-center gap-2 text-xs text-green-200/70">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                Priority support
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleClose}
              className="rounded-lg border border-green-500/30 bg-green-600/20 px-4 py-2 text-sm font-medium text-green-200 transition-colors duration-200 hover:bg-green-600/30"
            >
              Start Using Pro Features
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-green-400/60 transition-colors duration-200 hover:text-green-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-green-900/30">
          <div className="h-full animate-pulse rounded-full bg-gradient-to-r from-green-400 to-emerald-400"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
