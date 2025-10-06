// Team invitation system for Cosmic Portals
import { supabase } from '@/lib/supabase/client';
import { USER_ROLES } from '@/lib/permissions';

export interface TeamInvitation {
  id: string;
  email: string;
  role: string;
  organizationId: string;
  invitedBy: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  invitationToken: string;
  expiresAt: string;
  createdAt: string;
}

export interface InvitationData {
  email: string;
  role: 'business_employee' | 'event_collaborator' | 'event_guest' | 'team_member';
  organizationId: string;
  invitedBy: string;
  customMessage?: string;
  customPermissions?: Record<string, unknown>;
  permissionTemplate?: string;
}

export class TeamInvitationService {
  /**
   * Send team invitation
   */
  static async sendInvitation(
    invitationData: InvitationData
  ): Promise<{ success: boolean; invitationId?: string; error?: string }> {
    try {
      // Validate role
      if (!USER_ROLES[invitationData.role.toUpperCase()]) {
        return { success: false, error: 'Invalid role specified' };
      }

      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', invitationData.email)
        .single();

      if (existingUser) {
        return { success: false, error: 'User already exists with this email' };
      }

      // Check if invitation already exists
      const { data: existingInvitation } = await supabase
        .from('team_invitations')
        .select('id')
        .eq('email', invitationData.email)
        .eq('organization_id', invitationData.organizationId)
        .eq('status', 'pending')
        .single();

      if (existingInvitation) {
        return { success: false, error: 'Invitation already sent to this email' };
      }

      // Generate invitation token
      const invitationToken = this.generateInvitationToken();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiry

      // Create invitation
      const { data: invitation, error } = await supabase
        .from('team_invitations')
        .insert({
          email: invitationData.email,
          role: invitationData.role,
          organization_id: invitationData.organizationId,
          invited_by: invitationData.invitedBy,
          invitation_token: invitationToken,
          expires_at: expiresAt.toISOString(),
          status: 'pending',
          custom_message: invitationData.customMessage,
        })
        .select()
        .single();

      if (error || !invitation) {
        console.error('Error creating invitation:', error);
        return { success: false, error: 'Failed to create invitation' };
      }

      // Send invitation email (implement email service)
      await this.sendInvitationEmail(invitation);

      return { success: true, invitationId: invitation.id };
    } catch (error) {
      console.error('Error sending invitation:', error);
      return { success: false, error: 'Internal server error' };
    }
  }

  /**
   * Accept invitation
   */
  static async acceptInvitation(
    invitationToken: string,
    clerkId: string,
    firstName?: string,
    lastName?: string
  ): Promise<{ success: boolean; organizationId?: string; error?: string }> {
    try {
      // Get invitation details
      const { data: invitation, error: invitationError } = await supabase
        .from('team_invitations')
        .select('*')
        .eq('invitation_token', invitationToken)
        .eq('status', 'pending')
        .single();

      if (invitationError || !invitation) {
        return { success: false, error: 'Invalid or expired invitation' };
      }

      // Check if invitation is expired
      if (new Date(invitation.expires_at) < new Date()) {
        return { success: false, error: 'Invitation has expired' };
      }

      // Create user record
      const { data: user, error: userError } = await supabase
        .from('users')
        .insert({
          clerk_id: clerkId,
          email: invitation.email,
          first_name: firstName,
          last_name: lastName,
          organization_id: invitation.organization_id,
          role: invitation.role,
          status: 'active',
          invited_by: invitation.invited_by,
          invited_at: invitation.created_at,
          permissions: this.getDefaultPermissionsForRole(invitation.role),
        })
        .select()
        .single();

      if (userError || !user) {
        console.error('Error creating user:', userError);
        return { success: false, error: 'Failed to create user account' };
      }

      // Update invitation status
      await supabase
        .from('team_invitations')
        .update({
          status: 'accepted',
          accepted_at: new Date().toISOString(),
        })
        .eq('id', invitation.id);

      return { success: true, organizationId: invitation.organization_id };
    } catch (error) {
      console.error('Error accepting invitation:', error);
      return { success: false, error: 'Failed to accept invitation' };
    }
  }

  /**
   * Get organization invitations
   */
  static async getOrganizationInvitations(
    organizationId: string
  ): Promise<{ success: boolean; invitations?: TeamInvitation[]; error?: string }> {
    try {
      const { data: invitations, error } = await supabase
        .from('team_invitations')
        .select('*')
        .eq('organization_id', organizationId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching invitations:', error);
        return { success: false, error: 'Failed to fetch invitations' };
      }

      return { success: true, invitations: invitations || [] };
    } catch (error) {
      console.error('Error getting invitations:', error);
      return { success: false, error: 'Internal server error' };
    }
  }

  /**
   * Cancel invitation
   */
  static async cancelInvitation(
    invitationId: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('team_invitations')
        .update({ status: 'declined' })
        .eq('id', invitationId);

      if (error) {
        console.error('Error canceling invitation:', error);
        return { success: false, error: 'Failed to cancel invitation' };
      }

      return { success: true };
    } catch (error) {
      console.error('Error canceling invitation:', error);
      return { success: false, error: 'Internal server error' };
    }
  }

  /**
   * Generate invitation token
   */
  private static generateInvitationToken(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  /**
   * Get default permissions for role
   */
  private static getDefaultPermissionsForRole(role: string): Record<string, unknown> {
    const rolePermissions = USER_ROLES[role.toUpperCase()];
    if (!rolePermissions) {
      return {};
    }

    return {
      can_manage_organization: rolePermissions.permissions.canManageOrganization,
      can_manage_users: rolePermissions.permissions.canManageUsers,
      can_manage_events: rolePermissions.permissions.canViewEventDetails,
      can_manage_nfc_devices: rolePermissions.permissions.canCreateLandingPages,
      can_access_admin_panel: rolePermissions.permissions.canAccessAdminPanel,
      is_organization_owner: false,
    };
  }

  /**
   * Send invitation email
   */
  private static async sendInvitationEmail(invitation: any): Promise<void> {
    // TODO: Implement email service (SendGrid, Resend, etc.)
    console.log('Sending invitation email to:', invitation.email);
    console.log('Invitation token:', invitation.invitation_token);
    
    // For now, just log the invitation details
    // In production, you would send an actual email with the invitation link
  }

  /**
   * Get available roles for invitation
   */
  static getAvailableRoles(): Array<{ id: string; name: string; description: string }> {
    return [
      {
        id: 'business_employee',
        name: 'Business Employee',
        description: 'Can create and edit content, view analytics',
      },
      {
        id: 'event_collaborator',
        name: 'Event Collaborator',
        description: 'Can manage events and create content',
      },
      {
        id: 'event_guest',
        name: 'Event Guest',
        description: 'Can view event details, RSVP, and check-in',
      },
      {
        id: 'team_member',
        name: 'Team Member',
        description: 'Dashboard access with customizable permissions',
      },
    ];
  }
}
