import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import DragDropBuilder from './_components/DragDropBuilder';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export default async function LandingPageBuilderPage() {
  // Force deployment update
  const { userId } = await auth();

  // If user is not authenticated, redirect to pricing page
  if (!userId) {
    redirect('/pricing');
  }

  // Get user's organization
  const orgData = await getUserOrganizationData(userId);
  if (!orgData) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-black">
      <DragDropBuilder 
        organizationId={orgData.organization.id}
        userId={userId}
      />
    </div>
  );
}
