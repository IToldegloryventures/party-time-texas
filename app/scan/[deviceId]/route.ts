import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { deviceId: string } }
) {
  try {
    const { deviceId } = params;
    const { searchParams } = new URL(request.url);
    
    // Get UTM parameters
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');

    // Fetch device information
    const { data: device, error: deviceError } = await supabase
      .from('nfc_devices')
      .select(`
        id,
        device_name,
        device_type,
        organization_id,
        landing_page_id,
        is_active,
        landing_pages!inner (
          id,
          name,
          url,
          status
        )
      `)
      .eq('id', deviceId)
      .eq('is_active', true)
      .single();

    if (deviceError || !device) {
      return NextResponse.redirect(new URL('/device-not-found', request.url));
    }

    // Increment scan count
    await supabase
      .from('nfc_devices')
      .update({ 
        scan_count: device.scan_count ? device.scan_count + 1 : 1,
        last_scan: new Date().toISOString()
      })
      .eq('id', deviceId);

    // Record scan event
    await supabase
      .from('nfc_scans')
      .insert({
        device_id: deviceId,
        organization_id: device.organization_id,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        scan_timestamp: new Date().toISOString()
      });

    // If device has a linked landing page and it's published
    if (device.landing_page_id && device.landing_pages?.status === 'published') {
      const landingPageUrl = new URL(device.landing_pages.url, request.url);
      
      // Add UTM parameters to the landing page URL
      if (utmSource) landingPageUrl.searchParams.set('utm_source', utmSource);
      if (utmMedium) landingPageUrl.searchParams.set('utm_medium', utmMedium);
      if (utmCampaign) landingPageUrl.searchParams.set('utm_campaign', utmCampaign);
      
      return NextResponse.redirect(landingPageUrl);
    }

    // No landing page linked or not published - redirect to NFC scan page
    const nfcScanUrl = new URL('/nfc-scan', request.url);
    nfcScanUrl.searchParams.set('device_id', deviceId);
    nfcScanUrl.searchParams.set('device_name', device.device_name);
    nfcScanUrl.searchParams.set('device_type', device.device_type);
    
    return NextResponse.redirect(nfcScanUrl);
  } catch (error) {
    console.error('Scan redirect error:', error);
    return NextResponse.redirect(new URL('/scan-error', request.url));
  }
}