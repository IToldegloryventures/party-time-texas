import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import OrganizationSetup from './_components/OrganizationSetup';

export default async function SetupOrganizationPage() {
  const { userId } = await auth();

  // If user is not authenticated, redirect to sign-in
  if (!userId) {
    redirect('/sign-in');
  }

  // Check if user already has an organization
  try {
    const userData = await getUserOrganizationData(userId);
    if (userData) {
      // User already has an organization, redirect to dashboard
      redirect('/dashboard');
    }
  } catch (error) {
    // User doesn't have an organization yet, show setup page
    console.log('User needs to set up organization');
  }

  // User is authenticated but has no organization, show setup
  return <OrganizationSetup />;
}
