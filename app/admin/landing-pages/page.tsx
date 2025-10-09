import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { verifyAdminAccess } from '@/lib/admin-verification';
import LandingPageAdmin from './_components/LandingPageAdmin';

export default async function AdminLandingPagesPage() {
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

  return <LandingPageAdmin adminUser={adminUser} />;
}
