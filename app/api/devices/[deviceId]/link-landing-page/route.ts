import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(
  request: NextRequest,
  { params }: { params: { deviceId: string } }
) {
  try {
    const { userId } = await auth();
    const { deviceId } = params;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data from our users table
    const { data: userData } = await supabase
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', userId)
      .single();

    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Parse request body
    const body = await request.json();
    const { landing_page_id } = body;

    // Validate the device exists and belongs to the user's organization
    const { data: device, error: deviceError } = await supabase
      .from('nfc_devices')
      .select('id, organization_id, landing_page_id')
      .eq('id', deviceId)
      .eq('organization_id', userData.organization_id)
      .single();

    if (deviceError || !device) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    }

    // If landing_page_id is provided, validate it exists and belongs to the organization
    if (landing_page_id) {
      const { data: landingPage, error: landingPageError } = await supabase
        .from('landing_pages')
        .select('id, organization_id')
        .eq('id', landing_page_id)
        .eq('organization_id', userData.organization_id)
        .single();

      if (landingPageError || !landingPage) {
        return NextResponse.json(
          { error: 'Landing page not found' },
          { status: 404 }
        );
      }
    }

    // Update the device with the new landing page link
    const { data: updatedDevice, error: updateError } = await supabase
      .from('nfc_devices')
      .update({
        landing_page_id: landing_page_id || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', deviceId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating device:', updateError);
      return NextResponse.json(
        { error: 'Failed to update device' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      device: updatedDevice,
      message: landing_page_id
        ? 'Landing page linked successfully'
        : 'Landing page unlinked successfully',
    });
  } catch (error) {
    console.error('Link landing page error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
