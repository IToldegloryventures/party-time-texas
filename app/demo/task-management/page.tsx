import Link from 'next/link';

export default function TaskManagementDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-950 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Task Management</h1>
          <p className="text-base text-gray-400">Team Collaboration Made Simple</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Streamline Team Workflows</h2>
          <p className="text-gray-300">Assign, track, and collaborate on tasks</p>
        </div>

        {/* Task Management Interface */}
        <div className="mb-20 rounded-xl border border-green-900/50 bg-gray-900/50 p-8">
          {/* Header and Controls */}
          <div className="mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
            <div className="flex gap-2">
              <button className="rounded bg-green-600/20 text-green-300 px-3 py-1 text-sm hover:bg-green-600/30">All Tasks</button>
              <button className="rounded px-3 py-1 text-gray-400 text-sm hover:bg-gray-700/30">Assigned to Me</button>
              <button className="rounded px-3 py-1 text-gray-400 text-sm hover:bg-gray-700/30">Completed</button>
            </div>
            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
              + New Task
            </button>
          </div>

          {/* Task Stats */}
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
            {[
              { label: 'Active Tasks', value: '24', color: 'green' },
              { label: 'Completed This Week', value: '18', color: 'emerald' },
              { label: 'Overdue', value: '2', color: 'red' },
              { label: 'Team Members', value: '8', color: 'blue' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
                <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Task List */}
          <div className="space-y-3 mb-8">
            {[
              { title: 'Setup NFC devices for event', assignee: 'Sarah', priority: 'High', due: 'Today', status: 'In Progress' },
              { title: 'Create landing page mockups', assignee: 'John', priority: 'Medium', due: 'Tomorrow', status: 'Not Started' },
              { title: 'Review analytics report', assignee: 'Emma', priority: 'High', due: '2 days', status: 'In Progress' },
              { title: 'Send client update email', assignee: 'Alex', priority: 'Low', due: '3 days', status: 'Not Started' }
            ].map((task, idx) => (
              <div key={idx} className="rounded-lg border border-gray-700 bg-gray-800/30 p-4 hover:bg-gray-800/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-300">{task.title}</p>
                    <div className="flex gap-2 mt-2 text-xs">
                      <span className="text-gray-400">👤 {task.assignee}</span>
                      <span className={`px-2 py-1 rounded ${
                        task.priority === 'High' ? 'bg-red-900/30 text-red-300' :
                        task.priority === 'Medium' ? 'bg-yellow-900/30 text-yellow-300' :
                        'bg-green-900/30 text-green-300'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-gray-400">📅 {task.due}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded text-xs font-semibold ${
                    task.status === 'In Progress' ? 'bg-blue-900/30 text-blue-300' : 'bg-gray-700/30 text-gray-300'
                  }`}>
                    {task.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Collaboration Section */}
          <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6">
            <p className="mb-4 text-sm font-semibold text-gray-300">Recent Comments</p>
            <div className="space-y-3">
              {[
                { user: 'Sarah', comment: 'Devices have been configured and tested', time: '2h ago' },
                { user: 'John', comment: 'Mockups are ready for review', time: '4h ago' }
              ].map((comment, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-700 last:border-b-0">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-300 text-sm">{comment.user}</span>
                    <span className="text-xs text-gray-400">{comment.time}</span>
                  </div>
                  <p className="text-sm text-gray-400">{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demo/nfc-analytics" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/white-label" className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
