import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(
  request: NextRequest,
  { params }: { params: { deviceId: string } }
) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { deviceId } = params;
    const searchParams = request.nextUrl.searchParams;
    const utm_source = searchParams.get('utm_source') || 'nfc';
    const utm_medium = searchParams.get('utm_medium') || 'nfc_scan';
    const utm_campaign = searchParams.get('utm_campaign') || 'nfc_device';

    // Get device information
    const { data: device, error: deviceError } = await supabase
      .from('nfc_devices')
      .select(
        `
        id,
        device_id,
        device_type,
        status,
        landing_page_id,
        scan_count,
        last_scan,
        landing_pages (
          id,
          name,
          url,
          status
        )
      `
      )
      .eq('device_id', deviceId)
      .eq('status', 'active')
      .single();

    if (deviceError || !device) {
      // Device not found or inactive - redirect to a default page
      return NextResponse.redirect(new URL('/device-not-found', request.url));
    }

    // Increment scan count and update last scan time
    await supabase
      .from('nfc_devices')
      .update({
        scan_count: (device.scan_count || 0) + 1,
        last_scan: new Date().toISOString(),
      })
      .eq('id', device.id);

    // Record the scan event
    await supabase.from('nfc_scans').insert({
      device_id: device.id,
      scan_timestamp: new Date().toISOString(),
      metadata: {
        utm_source,
        utm_medium,
        utm_campaign,
        user_agent: request.headers.get('user-agent'),
        ip_address:
          request.headers.get('x-forwarded-for') ||
          request.headers.get('x-real-ip'),
        referrer: request.headers.get('referer'),
      },
    });

    // Check if device has a linked landing page
    if (device.landing_page_id && device.landing_pages) {
      const landingPage = device.landing_pages;

      // Check if landing page is published
      if (landingPage.status === 'published') {
        // Redirect to the landing page with UTM parameters
        const landingPageUrl = new URL(
          `/landing/${landingPage.url}`,
          request.url
        );
        landingPageUrl.searchParams.set('utm_source', utm_source);
        landingPageUrl.searchParams.set('utm_medium', utm_medium);
        landingPageUrl.searchParams.set('utm_campaign', utm_campaign);
        landingPageUrl.searchParams.set('nfc_device_id', deviceId);

        return NextResponse.redirect(landingPageUrl);
      }
    }

    // No landing page linked or landing page not published
    // Redirect to a default page or show device info
    const defaultUrl = new URL('/nfc-scan', request.url);
    defaultUrl.searchParams.set('device_id', deviceId);
    defaultUrl.searchParams.set('device_type', device.device_type);
    defaultUrl.searchParams.set('utm_source', utm_source);
    defaultUrl.searchParams.set('utm_medium', utm_medium);
    defaultUrl.searchParams.set('utm_campaign', utm_campaign);

    return NextResponse.redirect(defaultUrl);
  } catch (error) {
    console.error('NFC scan redirect error:', error);

    // On error, redirect to a generic page
    return NextResponse.redirect(new URL('/scan-error', request.url));
  }
}
