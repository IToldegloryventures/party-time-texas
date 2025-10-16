import Link from 'next/link';

export default function WhiteLabelDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">White-Label Customization</h1>
          <p className="text-base text-gray-400">Complete Brand Control</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Your Brand, Your Platform, Your Domain</h2>
          <p className="text-gray-300">Customize every aspect of your platform</p>
        </div>

        {/* White-Label Customization Interface */}
        <div className="mb-20 rounded-xl border border-indigo-900/50 bg-gray-900/50 p-8">
          {/* Tabs */}
          <div className="mb-6 flex items-center gap-4 border-b border-gray-700 pb-4">
            <button className="text-indigo-300 border-b-2 border-indigo-400 pb-2 text-sm font-semibold">Branding</button>
            <button className="text-gray-400 pb-2 text-sm font-semibold hover:text-gray-300">Domain</button>
            <button className="text-gray-400 pb-2 text-sm font-semibold hover:text-gray-300">CSS</button>
            <button className="text-gray-400 pb-2 text-sm font-semibold hover:text-gray-300">Email</button>
          </div>

          {/* Branding Customization */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left - Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Company Logo</label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-indigo-600/50 cursor-pointer">
                  <div className="text-3xl mb-2">📤</div>
                  <p className="text-sm text-gray-400">Drag & drop or click to upload</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Primary Color</label>
                <div className="flex gap-3">
                  {['#3B82F6', '#8B5CF6', '#EC4899', '#14B8A6'].map((color) => (
                    <button key={color} className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-gray-400 transition-all" style={{ backgroundColor: color }}></button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Font Family</label>
                <select className="w-full rounded bg-gray-800 text-gray-300 px-3 py-2 border border-gray-700">
                  <option>Inter</option>
                  <option>Poppins</option>
                  <option>Roboto</option>
                  <option>Playfair Display</option>
                </select>
              </div>

              <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700">
                Save Changes
              </button>
            </div>

            {/* Right - Preview */}
            <div className="rounded-lg border border-gray-700 bg-white/5 p-8">
              <p className="text-xs text-gray-400 mb-4">LIVE PREVIEW</p>
              <div className="space-y-4">
                <div className="h-10 bg-indigo-600 rounded-lg flex items-center px-4">
                  <span className="font-bold text-white">YourBrand.com</span>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-6">
                  <div className="space-y-3 text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">YB</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">Welcome to Your Platform</h2>
                    <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Status */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Branding', status: 'Completed', icon: '✓' },
            { label: 'Custom Domain', status: 'Pending', icon: '⏳' },
            { label: 'Email Templates', status: 'In Progress', icon: '⚙️' },
            { label: 'API Access', status: 'Pending', icon: '⏳' }
          ].map((config) => (
            <div key={config.label} className="rounded-lg border border-gray-700 bg-gray-900/50 p-6 text-center">
              <div className="text-2xl mb-3">{config.icon}</div>
              <p className="font-semibold text-gray-300 text-sm mb-2">{config.label}</p>
              <p className={`text-xs font-semibold ${
                config.status === 'Completed' ? 'text-green-400' :
                config.status === 'In Progress' ? 'text-blue-400' :
                'text-gray-400'
              }`}>
                {config.status}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demo/task-management" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/mobile-apps-admin" className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
