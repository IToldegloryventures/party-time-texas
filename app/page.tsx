import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-extrabold text-white drop-shadow-lg">
            Cosmic Portals
          </h1>
          <p className="mb-10 text-xl text-gray-300">
            Transform every scan, tap, and click into measurable insights.
            <br />
            NFC-powered engagement for businesses, events, and communities.
          </p>
          <Link
            href="/architecture-diagram"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
          >
            <span className="relative font-bold text-white">
              View Architecture
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
