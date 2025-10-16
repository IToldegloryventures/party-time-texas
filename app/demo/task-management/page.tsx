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
          <h2 className="mb-4 text-3xl font-bold text-white">Streamline Team Workflows with Smart Task Management</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Assign, track, and collaborate on tasks with role-based permissions and real-time updates.</p>
          <button className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Start Collaborating
          </button>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-green-900/50 bg-gradient-to-br from-green-950/50 to-green-900/20 p-8">
              <div className="mb-4 text-3xl">📝</div>
              <h4 className="mb-3 text-xl font-bold text-green-300">Task Creation</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Quick task setup</li>
                <li>✓ Priority assignment</li>
                <li>✓ Deadline management</li>
                <li>✓ Task templates</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-8">
              <div className="mb-4 text-3xl">👥</div>
              <h4 className="mb-3 text-xl font-bold text-emerald-300">Team Assignment</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Role-based task distribution</li>
                <li>✓ Progress tracking</li>
                <li>✓ Collaboration tools</li>
                <li>✓ Permission management</li>
              </ul>
            </div>

            <div className="rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/50 to-teal-900/20 p-8">
              <div className="mb-4 text-3xl">💬</div>
              <h4 className="mb-3 text-xl font-bold text-teal-300">Collaboration Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Task comments and notes</li>
                <li>✓ File attachments</li>
                <li>✓ Status updates</li>
                <li>✓ Real-time notifications</li>
              </ul>
            </div>

            <div className="rounded-xl border border-lime-900/50 bg-gradient-to-br from-lime-950/50 to-lime-900/20 p-8">
              <div className="mb-4 text-3xl">📊</div>
              <h4 className="mb-3 text-xl font-bold text-lime-300">Reporting & Analytics</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Team productivity metrics</li>
                <li>✓ Task completion rates</li>
                <li>✓ Performance insights</li>
                <li>✓ Custom reports</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-12 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">Business Value</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-green-400">40%</div>
              <p className="text-gray-300">Productivity increase</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-emerald-400">30%</div>
              <p className="text-gray-300">Project completion time reduction</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-teal-400">Better</div>
              <p className="text-gray-300">Team coordination and communication</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Specifications</h3>
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold text-green-300">How It Works</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>1. Create task with details</li>
                  <li>2. Assign to team members</li>
                  <li>3. Set priorities and deadlines</li>
                  <li>4. Track progress in real-time</li>
                  <li>5. Generate reports and insights</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-bold text-emerald-300">Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Subscription tier: Starter+</li>
                  <li>✓ Up to 500 tasks per month</li>
                  <li>✓ Team member limit per plan</li>
                  <li>✓ Email notifications</li>
                  <li>✓ Mobile app access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Real-World Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Event Planning Teams</h4>
              <p className="text-sm text-gray-300">Coordinate tasks for event setup, coordination, and follow-up</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Marketing Campaigns</h4>
              <p className="text-sm text-gray-300">Track campaign tasks from ideation to execution to analysis</p>
            </div>
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-6">
              <h4 className="mb-2 font-bold text-white">Project Management</h4>
              <p className="text-sm text-gray-300">Manage multiple projects with team collaboration and tracking</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/demo/nfc-analytics" className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            ← Previous Demo
          </Link>
          <Link href="/demo/white-label" className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105">
            Next Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
