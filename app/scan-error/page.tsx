'use client';

export default function ScanErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg">
          {/* Error Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-400">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mb-2 text-2xl font-bold text-white">Scan Error</h1>

          {/* Message */}
          <div className="mb-6 text-white/80">
            <p className="mb-2 text-lg">
              There was an error processing your NFC scan.
            </p>
            <p className="text-sm text-white/60">
              Please try scanning again or contact support if the problem
              continues.
            </p>
          </div>

          {/* Status Message */}
          <div className="mb-6 rounded-lg border border-orange-400/30 bg-orange-500/20 p-4">
            <p className="text-sm text-orange-200">
              This could be a temporary issue. Please:
            </p>
            <ul className="mt-2 space-y-1 text-left text-sm text-orange-200">
              <li>• Try scanning the NFC device again</li>
              <li>• Check your internet connection</li>
              <li>• Wait a moment and retry</li>
              <li>• Contact support if the issue persists</li>
            </ul>
          </div>

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="mb-6 w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:from-orange-600 hover:to-red-600"
          >
            Try Again
          </button>

          {/* Powered by */}
          <div className="text-center">
            <p className="text-xs text-white/40">
              Powered by <span className="font-semibold">Cosmic Portals</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
