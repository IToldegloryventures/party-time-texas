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
                  <div key={item} className="rounded bg-gray-800/50 px-3 py-2 text-sm text-gray-300 cursor-move hover:bg-gray-700/50">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Area */}
            <div className="col-span-2 rounded-lg border border-gray-700 bg-white/5 p-8">
              <div className="space-y-4 text-center">
                <div className="h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                  Drag-Drop Title Here
                </div>
                <div className="h-24 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400">
                  [Image Placeholder]
                </div>
                <div className="h-10 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-300 font-semibold">
                  Call-to-Action Button
                </div>
              </div>
            </div>

            {/* Right Properties Panel */}
            <div className="col-span-1 space-y-4 border-l border-gray-700 pl-4">
              <div className="text-xs font-semibold text-gray-400">PROPERTIES</div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-400">Font Size</label>
                  <input type="range" className="w-full mt-1" />
                </div>
                <div>
                  <label className="text-xs text-gray-400">Color</label>
                  <div className="flex gap-2 mt-1">
                    {['#3B82F6', '#06B6D4', '#EC4899'].map((color) => (
                      <div key={color} className="h-6 w-6 rounded" style={{ backgroundColor: color }}></div>
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
            {['Event', 'Business', 'Restaurant', 'Retail'].map((template) => (
              <div key={template} className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center hover:border-blue-600/50 cursor-pointer">
                <div className="aspect-video rounded bg-gradient-to-br from-gray-800 to-gray-900 mb-3 flex items-center justify-center">
                  <span className="text-gray-500">{template} Template</span>
                </div>
                <p className="text-sm font-medium text-gray-300">{template}</p>
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
        <div className="flex justify-between">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Back to Demos
          </Link>
          <Link href="/demo/geo-marketing" className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
