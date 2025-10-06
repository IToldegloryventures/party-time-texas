// Signup flow management for Cosmic Portals
import { supabase } from '@/lib/supabase/client';

export interface SignupData {
  email: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  organizationSlug: string;
  planType: 'business' | 'event';
  userType: 'business_admin' | 'event_admin';
}

export interface OrganizationSetup {
  name: string;
  slug: string;
  planType: 'business' | 'event';
  subscriptionStatus: 'active' | 'trial' | 'inactive';
  settings: Record<string, unknown>;
  whiteLabelConfig: Record<string, unknown>;
}

export class SignupFlowService {
  /**
   * Create organization and admin user after successful signup
   */
  static async createOrganizationAndAdmin(
    clerkId: string,
    signupData: SignupData
  ): Promise<{ success: boolean; organizationId?: string; error?: string }> {
    try {
      // Create organization
      const { data: organization, error: orgError } = await supabase
        .from('organizations')
        .insert({
          name: signupData.organizationName,
          slug: signupData.organizationSlug,
          plan_type: signupData.planType,
          subscription_status: 'trial', // Start with trial
          settings: {
            industry: signupData.planType === 'event' ? 'event-planning' : 'business',
            onboarding_completed: false,
            trial_started: new Date().toISOString(),
          },
          white_label_config: {
            custom_domain: null,
            logo_url: null,
          },
        })
        .select()
        .single();

      if (orgError || !organization) {
        console.error('Error creating organization:', orgError);
        return { success: false, error: 'Failed to create organization' };
      }

      // Create admin user
      const { data: user, error: userError } = await supabase
        .from('users')
        .insert({
          clerk_id: clerkId,
          email: signupData.email,
          first_name: signupData.firstName,
          last_name: signupData.lastName,
          organization_id: organization.id,
          role: 'owner', // First user is always owner
          status: 'active',
          permissions: {
            can_manage_organization: true,
            can_manage_users: true,
            can_manage_events: true,
            can_manage_nfc_devices: true,
            can_access_admin_panel: false,
            is_organization_owner: true,
          },
        })
        .select()
        .single();

      if (userError || !user) {
        console.error('Error creating user:', userError);
        // Clean up organization if user creation fails
        await supabase.from('organizations').delete().eq('id', organization.id);
        return { success: false, error: 'Failed to create user account' };
      }

      console.log('Organization and admin user created successfully:', {
        organizationId: organization.id,
        userId: user.id,
      });

      return { success: true, organizationId: organization.id };
    } catch (error) {
      console.error('Error in createOrganizationAndAdmin:', error);
      return { success: false, error: 'Internal server error' };
    }
  }

  /**
   * Generate organization slug from name
   */
  static generateOrganizationSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  }

  /**
   * Check if organization slug is available
   */
  static async isSlugAvailable(slug: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('id')
        .eq('slug', slug)
        .single();

      if (error && error.code === 'PGRST116') {
        // No rows found, slug is available
        return true;
      }

      return !data; // If data exists, slug is taken
    } catch (error) {
      console.error('Error checking slug availability:', error);
      return false;
    }
  }

  /**
   * Generate unique organization slug
   */
  static async generateUniqueSlug(baseName: string): Promise<string> {
    let baseSlug = this.generateOrganizationSlug(baseName);
    let slug = baseSlug;
    let counter = 1;

    while (!(await this.isSlugAvailable(slug))) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    return slug;
  }

  /**
   * Validate signup data
   */
  static validateSignupData(data: Partial<SignupData>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.email || !data.email.includes('@')) {
      errors.push('Valid email is required');
    }

    if (!data.firstName || data.firstName.trim().length < 2) {
      errors.push('First name must be at least 2 characters');
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
      errors.push('Last name must be at least 2 characters');
    }

    if (!data.organizationName || data.organizationName.trim().length < 3) {
      errors.push('Organization name must be at least 3 characters');
    }

    if (!data.planType || !['business', 'event'].includes(data.planType)) {
      errors.push('Plan type must be either "business" or "event"');
    }

    if (!data.userType || !['business_admin', 'event_admin'].includes(data.userType)) {
      errors.push('User type must be either "business_admin" or "event_admin"');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}
