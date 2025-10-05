import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import DragDropBuilder from './_components/DragDropBuilder';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export default async function LandingPageBuilderPage() {
  // Force deployment update
  console.log('🚀 LandingPageBuilderPage is being called - NEW COMPONENT SHOULD LOAD');
  const { userId } = await auth();

  // If user is not authenticated, redirect to pricing page
  if (!userId) {
    redirect('/pricing');
  }

  // Get user's organization
  const orgData = await getUserOrganizationData(userId);
  console.log('🔍 Debug - userId:', userId);
  console.log('🔍 Debug - orgData:', orgData);
  
  if (!orgData) {
    console.log('❌ No org data found, redirecting to dashboard');
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-4 text-center font-bold text-xl">
        🚀 NEW DRAG DROP BUILDER IS LOADING - IF YOU SEE THIS, THE NEW COMPONENT IS WORKING! 🚀
      </div>
      <div className="pt-20">
        <DragDropBuilder 
          organizationId={orgData.organization.id}
          userId={userId}
        />
      </div>
    </div>
  );
}
