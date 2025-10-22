import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Complete NFC-powered solutions for your business needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* NFC Business Cards */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              NFC Business Cards
            </h3>
            <p className="mb-6 text-gray-300">
              Smart business cards that connect to your digital presence
            </p>
            <ul className="mb-8 space-y-3 text-sm text-gray-400">
              <li>✓ Instant contact sharing</li>
              <li>✓ Social media integration</li>
              <li>✓ Analytics tracking</li>
              <li>✓ Custom branding</li>
            </ul>
            <Link
              href="/demo"
              className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-center font-semibold text-white transition-all hover:scale-105"
            >
              View Demo
            </Link>
          </div>

          {/* Event Management */}
          <div className="rounded-lg border border-purple-600 bg-gray-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Event Management
            </h3>
            <p className="mb-6 text-gray-300">
              Complete event solutions with NFC check-in
            </p>
            <ul className="mb-8 space-y-3 text-sm text-gray-400">
              <li>✓ NFC check-in stations</li>
              <li>✓ Real-time attendance</li>
              <li>✓ Guest management</li>
              <li>✓ Photo galleries</li>
            </ul>
            <Link
              href="/demo"
              className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-center font-semibold text-white transition-all hover:scale-105"
            >
              View Demo
            </Link>
          </div>

          {/* Analytics & Insights */}
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Analytics & Insights
            </h3>
            <p className="mb-6 text-gray-300">
              Powerful analytics to track engagement and ROI
            </p>
            <ul className="mb-8 space-y-3 text-sm text-gray-400">
              <li>✓ Real-time metrics</li>
              <li>✓ Conversion tracking</li>
              <li>✓ Geographic insights</li>
              <li>✓ ROI reporting</li>
            </ul>
            <Link
              href="/demo"
              className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-center font-semibold text-white transition-all hover:scale-105"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
