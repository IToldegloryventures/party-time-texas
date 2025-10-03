import { notFound } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import LandingPageAnalytics from '../_components/LandingPageAnalytics';

interface AnalyticsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AnalyticsPage({ params }: AnalyticsPageProps) {
  const { userId } = await auth();
  if (!userId) {
    return notFound();
  }

  const { id } = await params;

  // Get user's organization
  const orgData = await getUserOrganizationData(userId);
  if (!orgData) {
    return notFound();
  }

  // Fetch the landing page
  const { data: page, error } = await supabase
    .from('landing_pages')
    .select('*')
    .eq('id', id)
    .eq('organization_id', orgData.organization.id)
    .single();

  if (error || !page) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <LandingPageAnalytics 
        page={page}
        organizationId={orgData.organization.id}
        userId={userId}
      />
    </div>
  );
}
