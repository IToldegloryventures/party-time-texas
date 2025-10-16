import Link from 'next/link';

export default function LandingPageBuilderDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Landing Page Builder</h1>
          <p className="text-base text-gray-400">Create Professional Pages in Minutes</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Drag-and-Drop Page Builder with NFC Integration</h2>
          <p className="text-gray-300">Create stunning landing pages without coding</p>
        </div>

        {/* Builder Interface Mockup */}
        <div className="mb-20 rounded-xl border border-blue-900/50 bg-gradient-to-br from-gray-900 to-gray-950 p-8">
          <div className="mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
            <div className="flex gap-2">
              <div className="rounded bg-blue-600/20 px-3 py-1 text-sm text-blue-300">File</div>
              <div className="rounded px-3 py-1 text-sm text-gray-400">Edit</div>
              <div className="rounded px-3 py-1 text-sm text-gray-400">View</div>
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Publish
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {/* Left Sidebar */}
            <div className="col-span-1 space-y-3 border-r border-gray-700 pr-4">
              <div className="text-xs font-semibold text-gray-400">ELEMENTS</div>
              <div className="space-y-2">
                {['Heading', 'Text', 'Image', 'Button', 'Form', 'Video'].map((item) => (
                  <div key={item} className="rounded bg-gray-800/50 px-3 py-2 text-sm text-gray-300 cursor-move hover:bg-gray-700/50 flex items-center gap-2">
                    <span className="text-xs">⋮⋮</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Area */}
            <div className="col-span-2 rounded-lg border border-gray-700 bg-white/5 p-8">
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold text-white">Transform Your Business</h1>
                  <p className="text-gray-300">Engage customers with NFC-powered experiences</p>
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-gray-700">
                  <span className="text-gray-400 text-sm">📸 Product Image</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Get Started</button>
                  <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-400 font-semibold hover:bg-blue-600/10">Learn More</button>
                </div>
              </div>
            </div>

            {/* Right Properties Panel */}
            <div className="col-span-1 space-y-4 border-l border-gray-700 pl-4">
              <div className="text-xs font-semibold text-gray-400">PROPERTIES</div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-400 block mb-2">Font Size: 24px</label>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">Color</label>
                  <div className="flex gap-2">
                    {['#3B82F6', '#06B6D4', '#EC4899', '#8B5CF6'].map((color) => (
                      <div key={color} className="h-6 w-6 rounded border-2 border-gray-600 cursor-pointer hover:border-white" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">Align</label>
                  <div className="flex gap-2">
                    {['◀', '◼', '▶'].map((align) => (
                      <button key={align} className="flex-1 rounded bg-gray-700 text-gray-300 py-1 text-xs hover:bg-gray-600">{align}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Library */}
        <div className="mb-20">
          <h3 className="mb-6 text-xl font-bold text-white">Template Library</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              { name: 'Event', color: 'from-purple-600 to-pink-600' },
              { name: 'Business', color: 'from-blue-600 to-cyan-600' },
              { name: 'Restaurant', color: 'from-orange-600 to-red-600' },
              { name: 'Retail', color: 'from-green-600 to-emerald-600' }
            ].map((template) => (
              <div key={template.name} className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center hover:border-blue-600/50 cursor-pointer group transition-all">
                <div className={`aspect-video rounded bg-gradient-to-br ${template.color} mb-3 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 flex flex-col gap-2 p-3 text-xs font-semibold">
                    <div className="h-2 bg-white rounded w-3/4"></div>
                    <div className="h-8 bg-white rounded w-full"></div>
                    <div className="h-2 bg-white rounded w-1/2"></div>
                  </div>
                  <span className="text-lg font-bold relative z-10">{template.name}</span>
                </div>
                <p className="text-sm font-medium text-gray-300">{template.name} Template</p>
                <p className="text-xs text-gray-500 mt-1">+2 other variations</p>
              </div>
            ))}
          </div>
        </div>

        {/* NFC Integration */}
        <div className="mb-20 rounded-xl border border-gray-700 bg-gray-900/50 p-8">
          <h3 className="mb-4 text-xl font-bold text-white">NFC Integration</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <div className="mb-3 text-2xl">📱</div>
              <p className="text-sm font-semibold text-gray-300 mb-2">Link Device</p>
              <select className="w-full rounded bg-gray-700 text-sm text-gray-300 px-2 py-1 border border-gray-600">
                <option>Select NFC Device</option>
              </select>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <div className="mb-3 text-2xl">📊</div>
              <p className="text-sm font-semibold text-gray-300 mb-2">Track Scans</p>
              <div className="text-2xl font-bold text-blue-400">2,451</div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <div className="mb-3 text-2xl">⚙️</div>
              <p className="text-sm font-semibold text-gray-300 mb-2">Analytics</p>
              <button className="w-full rounded bg-blue-600/20 text-blue-300 text-sm px-2 py-1 hover:bg-blue-600/30">
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Home
          </Link>
          <Link href="/demo/geo-marketing" className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
