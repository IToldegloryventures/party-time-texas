import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import DragDropBuilder from './_components/DragDropBuilder';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export default async function LandingPageBuilderPage() {
  // Force deployment update
  console.log('🚀 LandingPageBuilderPage is being called - NEW COMPONENT SHOULD LOAD');
  console.log('🔍 Step 1: About to call auth()');
  const { userId } = await auth();
  console.log('🔍 Step 2: Got userId:', userId);

  // If user is not authenticated, redirect to pricing page
  if (!userId) {
    console.log('❌ No userId, redirecting to pricing');
    redirect('/pricing');
  }
  console.log('✅ User authenticated, continuing...');

  // Get user's organization
  const orgData = await getUserOrganizationData(userId);
  console.log('🔍 Debug - userId:', userId);
  console.log('🔍 Debug - orgData:', orgData);
  
  // For superadmin users, create a default organization data structure
  if (!orgData) {
    console.log('⚠️ No org data found - creating default for superadmin');
    // Create a default organization structure for superadmin users
    const defaultOrgData = {
      user: {
        id: userId,
        clerk_id: userId,
        email: 'ashtonmedina22@gmail.com',
        first_name: 'Ashton',
        last_name: 'Medina',
        role: 'superadmin',
        organization_id: 'default-org'
      },
      organization: {
        id: 'default-org',
        name: 'Super Admin Organization',
        slug: 'superadmin',
        plan_type: 'enterprise',
        subscription_status: 'active',
        settings: {},
        white_label_config: {}
      },
      nfcDevices: [],
      events: [],
      attendees: []
    };
    
    return (
      <div className="min-h-screen bg-black">
        <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-4 text-center font-bold text-xl">
          🚀 NEW DRAG DROP BUILDER IS LOADING - IF YOU SEE THIS, THE NEW COMPONENT IS WORKING! 🚀
        </div>
        <div className="pt-20">
          <DragDropBuilder 
            organizationId={defaultOrgData.organization.id}
            userId={userId}
          />
        </div>
      </div>
    );
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
