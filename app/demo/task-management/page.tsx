import Link from 'next/link';

export default function TaskManagementDemo() {
  const tasks = [
    { id: 'TK-001', title: 'Deploy NFC Device - Downtown Dallas', region: 'Downtown Dallas', assignee: 'John Smith', priority: 'high', status: 'in-progress', dueDate: 'Today', completion: '65%' },
    { id: 'TK-002', title: 'Update Landing Page - Plano East', region: 'Plano East', assignee: 'Sarah Johnson', priority: 'high', status: 'in-progress', dueDate: 'Tomorrow', completion: '40%' },
    { id: 'TK-003', title: 'Run A/B Test - Uptown Dallas', region: 'Uptown Dallas', assignee: 'Mike Chen', priority: 'medium', status: 'pending', dueDate: 'Aug 15', completion: '0%' },
    { id: 'TK-004', title: 'Battery Replacement - Fort Worth', region: 'Fort Worth', assignee: 'Lisa Garcia', priority: 'medium', status: 'pending', dueDate: 'Aug 20', completion: '0%' },
    { id: 'TK-005', title: 'Campaign Launch - Frisco', region: 'Frisco West', assignee: 'James Wilson', priority: 'low', status: 'completed', dueDate: 'Aug 8', completion: '100%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-950 via-red-900/30 to-gray-950 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Task Management
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Assign, track, and collaborate on geo-marketing tasks. Region-specific campaigns, role-based assignments, completion stats, and integration with device rollouts.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* KPI Cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-red-700/50 bg-gradient-to-br from-red-950/50 to-red-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Active Tasks</p>
            <p className="text-4xl font-bold text-red-400">24</p>
            <p className="text-sm text-gray-400 mt-2">Across all regions</p>
          </div>
          <div className="rounded-lg border border-green-700/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Completed This Week</p>
            <p className="text-4xl font-bold text-green-400">18</p>
            <p className="text-sm text-green-400 mt-2">↑ 5 vs last week</p>
          </div>
          <div className="rounded-lg border border-orange-700/50 bg-gradient-to-br from-orange-950/50 to-orange-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Avg Completion Time</p>
            <p className="text-4xl font-bold text-orange-400">3.2d</p>
            <p className="text-sm text-gray-400 mt-2">From assignment to close</p>
          </div>
          <div className="rounded-lg border border-blue-700/50 bg-gradient-to-br from-blue-950/50 to-blue-900/20 p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Team Members</p>
            <p className="text-4xl font-bold text-blue-400">8</p>
            <p className="text-sm text-blue-400 mt-2">100% active</p>
          </div>
        </div>

        {/* Task Filter Controls */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-2">
            <button className="rounded-lg bg-red-600/20 text-red-300 px-4 py-2 text-sm font-semibold hover:bg-red-600/30 transition border border-red-600/50">
              All Tasks
            </button>
            <button className="rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-700/50 transition border border-gray-700">
              Assigned to Me
            </button>
            <button className="rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-700/50 transition border border-gray-700">
              By Region
            </button>
            <button className="rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-700/50 transition border border-gray-700">
              Completed
            </button>
          </div>
          <button className="rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white hover:bg-red-700">
            + New Task
          </button>
        </div>

        {/* Task Table */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Region-Specific Campaign Tasks</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Task ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Task Name</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Region</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Assigned To</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Priority</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Progress</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-200 font-mono font-semibold">{task.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-200 font-medium">{task.title}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full text-xs bg-gray-700 text-gray-200">
                        📍 {task.region}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-300">{task.assignee}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${task.priority === 'high' ? 'bg-red-500/20 text-red-400' : task.priority === 'medium' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {task.priority === 'high' ? '🔴 High' : task.priority === 'medium' ? '🟡 Medium' : '🔵 Low'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${task.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' : task.status === 'pending' ? 'bg-gray-600/20 text-gray-300' : 'bg-green-500/20 text-green-400'}`}>
                        {task.status === 'in-progress' ? '▶️ In Progress' : task.status === 'pending' ? '⏳ Pending' : '✅ Completed'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-red-500 to-red-400"
                            style={{ width: `${task.completion}` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{task.completion}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-400">{task.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role-Based Assignment */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Role-Based Task Assignment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-950/50 to-purple-900/20 border border-purple-700/50">
              <p className="font-semibold text-white mb-4">📊 Campaign Managers</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Create & launch campaigns</li>
                <li>✓ Manage regional targeting</li>
                <li>✓ View performance reports</li>
                <li>✓ Assign content tasks</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-orange-950/50 to-orange-900/20 border border-orange-700/50">
              <p className="font-semibold text-white mb-4">🛠️ Field Technicians</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Receive deployment tasks</li>
                <li>✓ Update device status</li>
                <li>✓ Log completion</li>
                <li>✓ View zone assignments</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-700/50">
              <p className="font-semibold text-white mb-4">📈 Analytics Team</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Run analysis tasks</li>
                <li>✓ Test hypotheses</li>
                <li>✓ Generate reports</li>
                <li>✓ Share insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Campaign & Device Integration */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Integration with Campaign &amp; Device Rollouts</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-white text-lg">Deploy Downtown Dallas Campaign</p>
                  <p className="text-sm text-gray-400 mt-1">Auto-create tasks for: Device setup, Page deployment, Social launch, Performance monitoring</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-600/20 text-blue-400 font-semibold">Linked to Campaign #42</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>5 subtasks generated</span>
                  <span className="font-semibold text-blue-400">75% complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-white text-lg">Batch Device Programming - Plano/Frisco</p>
                  <p className="text-sm text-gray-400 mt-1">Auto-assign firmware updates and config changes as individual tasks per device</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-orange-600/20 text-orange-400 font-semibold">Linked to Batch #8</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>23 device tasks created</span>
                  <span className="font-semibold text-orange-400">35% complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments & Collaboration */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Comments, Updates &amp; Collaboration</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center text-sm font-bold text-blue-300">JS</div>
                <div className="flex-1">
                  <p className="font-semibold text-white">John Smith</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Deployed device DFW-001 at Downtown Dallas location. All systems operational. Ready for testing.</p>
              <div className="mt-3 inline-flex gap-2">
                <button className="text-xs text-gray-400 hover:text-gray-300">👍 Like</button>
                <button className="text-xs text-gray-400 hover:text-gray-300">💬 Reply</button>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-600/30 flex items-center justify-center text-sm font-bold text-green-300">SJ</div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Updated landing page with Plano-specific offers. Live at pl.example.com/downtown-sale. Generating early clicks!</p>
              <div className="mt-3 inline-flex gap-2">
                <button className="text-xs text-gray-400 hover:text-gray-300">👍 Like</button>
                <button className="text-xs text-gray-400 hover:text-gray-300">💬 Reply</button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications & Insights */}
        <div className="mb-16 rounded-lg border border-gray-700 bg-gray-800/50 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Task Notifications &amp; Insights</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-900/20 border border-green-600/50 flex items-start gap-4">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-semibold text-green-300">Campaign Deployed Successfully</p>
                <p className="text-sm text-gray-300">Downtown Dallas campaign is live. All 5 tasks completed ahead of schedule.</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-orange-900/20 border border-orange-600/50 flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-orange-300">Task Overdue: Frisco West Setup</p>
                <p className="text-sm text-gray-300">Assigned to James Wilson. Due today. Mark complete or reschedule.</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-600/50 flex items-start gap-4">
              <span className="text-2xl">ℹ️</span>
              <div>
                <p className="font-semibold text-blue-300">New Task Assignment</p>
                <p className="text-sm text-gray-300">You've been assigned: "Run A/B Test - Uptown Dallas" (Priority: Medium, Due: Aug 15)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Link href="/demo" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            ← Back to Demos
          </Link>
          <Link href="/demo/mobile-app-client" className="rounded-lg bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform">
            Next: Mobile App - Client →
          </Link>
        </div>
      </div>
    </div>
  );
}
