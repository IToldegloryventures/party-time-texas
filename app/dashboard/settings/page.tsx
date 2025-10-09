import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import OrganizationSettings from './_components/OrganizationSettings';

export default async function SettingsPage() {
  const { userId } = await auth();

  // If user is not authenticated, redirect to sign-in
  if (!userId) {
    redirect('/sign-in');
  }

  // Get user's organization data and role
  const userData = await getUserOrganizationData(userId);

  if (!userData) {
    // User exists but has no organization - redirect to setup
    redirect('/setup-organization');
  }

  // Check if user can manage organization settings
  const canManageOrganization = userData.user.role === 'owner' || 
                               userData.user.permissions?.can_manage_organization;

  if (!canManageOrganization) {
    // User doesn't have permission to manage organization settings
    redirect('/dashboard');
  }

  // Pass user data to settings component
  return <OrganizationSettings userData={userData} />;
}
