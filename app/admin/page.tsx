import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { verifyAdminAccess } from '@/lib/admin-verification';
import AdminDashboard from './_components/AdminDashboard';

export default async function AdminPage() {
  const { userId } = await auth();

  // If user is not authenticated, redirect to sign-in
  if (!userId) {
    redirect('/sign-in');
  }

  // Verify admin access
  const adminUser = await verifyAdminAccess(userId);
  
  if (!adminUser) {
    // User is authenticated but not an admin
    console.log('Unauthorized admin access attempt by user:', userId);
    redirect('/dashboard');
  }

  // User is verified as admin, render admin dashboard
  return <AdminDashboard adminUser={adminUser} />;
}
