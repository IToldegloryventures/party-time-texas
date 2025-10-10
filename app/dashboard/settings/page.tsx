import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import SettingsContent from './_components/SettingsContent';

export default async function SettingsPage() {
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

  // Only super admins and owners can access settings
  if (!['super_admin', 'owner'].includes(userData.user.role)) {
    redirect('/dashboard');
  }

  // Pass user data to settings component
  return <SettingsContent userData={userData} />;
}
