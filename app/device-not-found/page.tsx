'use client';

export default function DeviceNotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg">
          {/* Error Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-pink-400">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mb-2 text-2xl font-bold text-white">
            Device Not Found
          </h1>

          {/* Message */}
          <div className="mb-6 text-white/80">
            <p className="mb-2 text-lg">
              This NFC device could not be found or is no longer active.
            </p>
            <p className="text-sm text-white/60">
              Please check the device ID or contact support if this issue
              persists.
            </p>
          </div>

          {/* Status Message */}
          <div className="mb-6 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
            <p className="text-sm text-red-200">Possible reasons:</p>
            <ul className="mt-2 space-y-1 text-left text-sm text-red-200">
              <li>• Device ID is incorrect</li>
              <li>• Device has been deactivated</li>
              <li>• Device has been deleted</li>
              <li>• Network connectivity issues</li>
            </ul>
          </div>

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
