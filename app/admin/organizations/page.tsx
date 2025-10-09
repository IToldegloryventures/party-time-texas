import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { verifyAdminAccess } from '@/lib/admin-verification';
import OrganizationsAdmin from './_components/OrganizationsAdmin';

export default async function AdminOrganizationsPage() {
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

  return <OrganizationsAdmin adminUser={adminUser} />;
}
