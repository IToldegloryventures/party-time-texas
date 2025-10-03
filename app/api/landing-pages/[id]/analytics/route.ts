import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || '7d';

    // Get user's organization
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    // Verify page ownership
    const { data: page, error: pageError } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('id', id)
      .eq('organization_id', orgData.organization.id)
      .single();

    if (pageError || !page) {
      return NextResponse.json(
        { error: 'Landing page not found' },
        { status: 404 }
      );
    }

    // Calculate date range
    const now = new Date();
    let startDate: Date;

    switch (range) {
      case '24h':
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '30d':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '90d':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    }

    // Fetch landing page scans
    const { data: scans, error: scansError } = await supabase
      .from('landing_page_scans')
      .select('*')
      .eq('page_id', id)
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });

    if (scansError) {
      console.error('Error fetching scans:', scansError);
      return NextResponse.json(
        { error: 'Failed to fetch analytics' },
        { status: 500 }
      );
    }

    // Calculate analytics
    const total_views = scans?.length || 0;
    const unique_visitors = new Set(
      scans?.map(scan => scan.session_id).filter(Boolean)
    ).size;
    const total_scans = scans?.filter(scan => scan.utm_params).length || 0;

    // Traffic sources
    const traffic_sources = {
      direct:
        scans?.filter(scan => !scan.utm_params && !scan.referrer).length || 0,
      nfc:
        scans?.filter(scan => scan.utm_params?.utm_source === 'nfc').length ||
        0,
      social:
        scans?.filter(
          scan =>
            scan.referrer?.includes('facebook') ||
            scan.referrer?.includes('instagram') ||
            scan.referrer?.includes('linkedin')
        ).length || 0,
      other:
        scans?.filter(
          scan =>
            scan.referrer &&
            !scan.referrer.includes('facebook') &&
            !scan.referrer.includes('instagram') &&
            !scan.referrer.includes('linkedin')
        ).length || 0,
    };

    // Device breakdown
    const device_breakdown = {
      mobile:
        scans?.filter(scan => scan.user_agent?.includes('Mobile')).length || 0,
      desktop:
        scans?.filter(
          scan =>
            scan.user_agent &&
            !scan.user_agent.includes('Mobile') &&
            !scan.user_agent.includes('Tablet')
        ).length || 0,
      tablet:
        scans?.filter(scan => scan.user_agent?.includes('Tablet')).length || 0,
    };

    // Recent activity
    const recent_activity =
      scans?.slice(0, 10).map(scan => ({
        description:
          scan.utm_params?.utm_source === 'nfc' ? 'NFC tap' : 'Page view',
        location: scan.location_data?.city
          ? `${scan.location_data.city}, ${scan.location_data.country}`
          : 'Unknown location',
        timestamp: scan.created_at,
      })) || [];

    // Daily breakdown
    const daily_breakdown: Record<string, number> = {};
    scans?.forEach(scan => {
      const date = scan.created_at.split('T')[0];
      daily_breakdown[date] = (daily_breakdown[date] || 0) + 1;
    });

    const analytics = {
      total_views,
      unique_visitors,
      total_scans,
      conversion_rate:
        total_views > 0
          ? `${((total_scans / total_views) * 100).toFixed(1)}%`
          : '0%',
      traffic_sources,
      device_breakdown,
      recent_activity,
      daily_breakdown,
      time_range: range,
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error in GET /api/landing-pages/[id]/analytics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
