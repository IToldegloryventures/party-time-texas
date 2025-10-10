import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

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

    // Fetch device information with correct field names
    const { data: device, error: deviceError } = await supabaseAdmin
      .from('nfc_devices')
      .select(`
        id,
        device_id,
        device_type,
        organization_id,
        landing_page_id,
        status,
        scan_count,
        metadata
      `)
      .eq('id', deviceId)
      .eq('status', 'active')
      .single();

    if (deviceError || !device) {
      console.error('Device not found or inactive:', deviceError);
      return NextResponse.redirect(new URL('/device-not-found', request.url));
    }

    // Fetch landing page if device has one linked
    let landingPage = null;
    if (device.landing_page_id) {
      const { data: lpData, error: lpError } = await supabaseAdmin
        .from('landing_pages')
        .select('id, slug, status, is_published')
        .eq('id', device.landing_page_id)
        .single();
      
      if (!lpError && lpData) {
        landingPage = lpData;
      }
    }

    // Increment scan count
    await supabaseAdmin
      .from('nfc_devices')
      .update({ 
        scan_count: device.scan_count ? device.scan_count + 1 : 1,
        last_scan: new Date().toISOString()
      })
      .eq('id', deviceId);

    // Record scan event with correct schema
    const utmParams = {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign
    };

    await supabaseAdmin
      .from('nfc_scans')
      .insert({
        device_id: deviceId,
        organization_id: device.organization_id,
        scan_type: 'nfc_scan',
        utm_params: utmParams,
        user_agent: request.headers.get('user-agent') || '',
        ip_address: request.ip || request.headers.get('x-forwarded-for') || '',
      });

    // If device has a linked landing page and it's published
    if (device.landing_page_id && landingPage && landingPage.is_published) {
      // Construct landing page URL using slug
      const landingPageUrl = new URL(`/landing/${landingPage.slug}`, request.url);
      
      // Add UTM parameters to the landing page URL
      if (utmSource) landingPageUrl.searchParams.set('utm_source', utmSource);
      if (utmMedium) landingPageUrl.searchParams.set('utm_medium', utmMedium);
      if (utmCampaign) landingPageUrl.searchParams.set('utm_campaign', utmCampaign);
      
      return NextResponse.redirect(landingPageUrl);
    }

    // No landing page linked or not published - redirect to NFC scan page
    const nfcScanUrl = new URL('/nfc-scan', request.url);
    nfcScanUrl.searchParams.set('device_id', deviceId);
    nfcScanUrl.searchParams.set('device_name', device.metadata?.name || device.device_id || 'Unknown Device');
    nfcScanUrl.searchParams.set('device_type', device.device_type || 'nfc_device');
    
    // Add UTM parameters to NFC scan page for tracking
    if (utmSource) nfcScanUrl.searchParams.set('utm_source', utmSource);
    if (utmMedium) nfcScanUrl.searchParams.set('utm_medium', utmMedium);
    if (utmCampaign) nfcScanUrl.searchParams.set('utm_campaign', utmCampaign);
    
    return NextResponse.redirect(nfcScanUrl);
  } catch (error) {
    console.error('Scan redirect error:', error);
    return NextResponse.redirect(new URL('/scan-error', request.url));
  }
}