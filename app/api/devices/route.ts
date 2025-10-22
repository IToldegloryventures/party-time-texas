import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    // Fetch NFC devices for the organization
    const { data: devices, error } = await supabase
      .from('nfc_devices')
      .select('*')
      .eq('organization_id', orgData.organization.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching devices:', error);
      return NextResponse.json(
        { error: 'Failed to fetch devices' },
        { status: 500 }
      );
    }

    return NextResponse.json({ devices });
  } catch (error) {
    console.error('Error in GET /api/devices:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { device_id, name, description, landing_page_id } = body;

    if (!device_id || !name) {
      return NextResponse.json(
        { error: 'Device ID and name are required' },
        { status: 400 }
      );
    }

    // Check if device ID already exists
    const { data: existingDevice } = await supabase
      .from('nfc_devices')
      .select('id')
      .eq('device_id', device_id)
      .single();

    if (existingDevice) {
      return NextResponse.json(
        { error: 'Device ID already exists' },
        { status: 409 }
      );
    }

    // Create NFC device
    const { data: device, error } = await supabase
      .from('nfc_devices')
      .insert({
        organization_id: orgData.organization.id,
        device_id,
        name,
        description,
        landing_page_id,
        scan_count: 0,
        status: 'active',
        created_by: userId,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating device:', error);
      return NextResponse.json(
        { error: 'Failed to create device' },
        { status: 500 }
      );
    }

    return NextResponse.json({ device }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/devices:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
