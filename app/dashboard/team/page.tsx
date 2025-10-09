import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import TeamManagement from './_components/TeamManagement';

export default async function TeamPage() {
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

  // Check if user can manage team (owners and admins only)
  const canManageTeam = 
    ['owner', 'admin'].includes(userData.user.role) ||
    userData.user.permissions?.can_manage_users;

  if (!canManageTeam) {
    // User doesn't have permission - redirect to dashboard
    redirect('/dashboard');
  }

  // Pass user data to team management component
  return <TeamManagement userData={userData} />;
}
