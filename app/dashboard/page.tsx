import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import DashboardContent from './_components/DashboardContent';

export default async function DashboardPage() {
  const { userId } = await auth();

  // If user is not authenticated, redirect to sign-in
  if (!userId) {
    redirect('/sign-in');
  }

  // Get user's organization data and role
  const userData = await getUserOrganizationData(userId);
  
  if (!userData) {
    // User exists but has no organization - redirect to sign-up
    redirect('/sign-up');
  }

  // Pass user data to dashboard component
  return <DashboardContent userData={userData} />;
}
