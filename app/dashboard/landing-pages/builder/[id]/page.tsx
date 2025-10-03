import { notFound } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';
import DragDropBuilder from '../_components/DragDropBuilder';

interface BuilderPageProps {
  params: {
    id: string;
  };
}

export default async function BuilderPage({ params }: BuilderPageProps) {
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
      <DragDropBuilder 
        initialPage={page}
        organizationId={orgData.organization.id}
        userId={userId}
      />
    </div>
  );
}
