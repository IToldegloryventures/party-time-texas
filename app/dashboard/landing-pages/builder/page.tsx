import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import DragDropBuilder from './_components/DragDropBuilder';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export default async function LandingPageBuilderPage() {
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

  // Check if user can manage landing pages
  const canManageLandingPages = ['super_admin', 'owner', 'admin', 'member'].includes(userData.user.role) ||
                               userData.user.permissions?.can_manage_landing_pages;

  if (!canManageLandingPages) {
    // User doesn't have permission to access landing page builder
    redirect('/dashboard');
  }

  // User has permission, render the drag-and-drop builder
  return (
    <DragDropBuilder
      organizationId={userData.organization.id}
      userId={userData.user.id}
    />
  );
}