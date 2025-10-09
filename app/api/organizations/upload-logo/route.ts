import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's organization data and verify they're an owner
    const userData = await getUserOrganizationData(userId);
    
    if (!userData) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // Only owners can upload logos
    if (userData.user.role !== 'owner') {
      return NextResponse.json(
        { error: 'Only organization owners can upload logos' },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const logoUrl = formData.get('logoUrl') as string;

    if (!logoUrl) {
      return NextResponse.json(
        { error: 'Logo URL is required' },
        { status: 400 }
      );
    }

    // Update organization with logo URL
    const { data: organization, error } = await supabase
      .from('organizations')
      .update({
        settings: {
          ...userData.organization.settings,
          logo: logoUrl,
        },
        updated_at: new Date().toISOString(),
      })
      .eq('id', userData.organization.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating organization logo:', error);
      return NextResponse.json(
        { error: 'Failed to update logo' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Logo uploaded successfully',
        organization,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

