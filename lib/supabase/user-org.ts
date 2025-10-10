// User and Organization utilities for Cosmic Portals
import { supabase, createClient } from './client';

export interface User {
  id: string;
  clerk_id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  organization_id: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  plan_type: string;
  subscription_status: string;
  settings: Record<string, unknown>;
  white_label_config: Record<string, unknown>;
}

export interface OrganizationData {
  user: User;
  organization: Organization;
  nfcDevices: Record<string, unknown>[];
  events: Record<string, unknown>[];
  attendees: Record<string, unknown>[];
}

/**
 * Get user and organization data by Clerk user ID
 */
export async function getUserOrganizationData(
  clerkUserId: string
): Promise<OrganizationData | null> {
  try {
    // Use service role key for server-side queries to bypass RLS
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Get user data
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', clerkUserId)
      .single();

    if (userError || !user) {
      console.error('User not found:', userError);
      return null;
    }

    // HYBRID APPROACH: Check if user is Super Admin
    const isSuperAdmin = user.role === 'super_admin';

    let organization;
    let nfcDevices;
    let events;
    let attendees;

    if (isSuperAdmin) {
      // SUPER ADMIN: Can see ALL organizations and data
      // For now, we'll still show their primary organization
      // TODO: Create a Super Admin dashboard that shows all orgs
      const { data: orgData, error: orgError } = await supabaseAdmin
        .from('organizations')
        .select('*')
        .eq('id', user.organization_id)
        .single();

      if (orgError || !orgData) {
        console.error('Organization not found:', orgError);
        return null;
      }

      organization = orgData;

      // Get data for their primary organization
      const [nfcResult, eventsResult, attendeesResult] = await Promise.all([
        supabaseAdmin
          .from('nfc_devices')
          .select('*')
          .eq('organization_id', user.organization_id),
        supabaseAdmin
          .from('events')
          .select('*')
          .eq('organization_id', user.organization_id),
        supabaseAdmin
          .from('attendees')
          .select('*')
          .eq('organization_id', user.organization_id),
      ]);

      nfcDevices = nfcResult.data || [];
      events = eventsResult.data || [];
      attendees = attendeesResult.data || [];
    } else {
      // REGULAR USER: Use service role for server-side queries
      // We do authorization checks in our application logic, not at database level
      const { data: orgData, error: orgError } = await supabaseAdmin
        .from('organizations')
        .select('*')
        .eq('id', user.organization_id)
        .single();

      if (orgError || !orgData) {
        console.error('Organization not found:', orgError);
        return null;
      }

      organization = orgData;

      // Get data for their organization using service role (bypasses RLS)
      const [nfcResult, eventsResult, attendeesResult] = await Promise.all([
        supabaseAdmin
          .from('nfc_devices')
          .select('*')
          .eq('organization_id', user.organization_id),
        supabaseAdmin
          .from('events')
          .select('*')
          .eq('organization_id', user.organization_id),
        supabaseAdmin
          .from('attendees')
          .select('*')
          .eq('organization_id', user.organization_id),
      ]);

      nfcDevices = nfcResult.data || [];
      events = eventsResult.data || [];
      attendees = attendeesResult.data || [];
    }

    return {
      user,
      organization,
      nfcDevices,
      events,
      attendees,
    };
  } catch (error) {
    console.error('Error fetching user organization data:', error);
    return null;
  }
}

/**
 * Get organization statistics
 */
export async function getOrganizationStats(organizationId: string) {
  try {
    const [nfcDevices, events, attendees, nfcScans] = await Promise.all([
      supabase
        .from('nfc_devices')
        .select('*')
        .eq('organization_id', organizationId),
      supabase.from('events').select('*').eq('organization_id', organizationId),
      supabase
        .from('attendees')
        .select('*')
        .eq('organization_id', organizationId),
      supabase
        .from('nfc_scans')
        .select('*')
        .eq('organization_id', organizationId),
    ]);

    return {
      nfcDevices: nfcDevices.data?.length || 0,
      events: events.data?.length || 0,
      attendees: attendees.data?.length || 0,
      totalScans: nfcScans.data?.length || 0,
    };
  } catch (error) {
    console.error('Error fetching organization stats:', error);
    return {
      nfcDevices: 0,
      events: 0,
      attendees: 0,
      totalScans: 0,
    };
  }
}
