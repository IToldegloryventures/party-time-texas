// Permission customization system for Cosmic Portals
import { UserPermissions } from './permissions';

export interface CustomPermissions {
  canCreateLandingPages?: boolean;
  canEditLandingPages?: boolean;
  canDeleteLandingPages?: boolean;
  canPublishLandingPages?: boolean;
  canViewAnalytics?: boolean;
  canManageUsers?: boolean;
  canManageOrganization?: boolean;
  canAccessAdminPanel?: boolean;
  canViewEventDetails?: boolean;
  canViewPhotoGallery?: boolean;
  canRSVPToEvents?: boolean;
  canCheckInToEvents?: boolean;
}

export interface PermissionTemplate {
  id: string;
  name: string;
  description: string;
  permissions: UserPermissions;
  applicableRoles: string[];
}

// Default permission templates
export const PERMISSION_TEMPLATES: Record<string, PermissionTemplate> = {
  STANDARD_EMPLOYEE: {
    id: 'standard_employee',
    name: 'Standard Employee',
    description:
      'Basic employee permissions - can create/edit content, view analytics',
    permissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: false,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: false,
      canManageOrganization: false,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
    applicableRoles: ['business_employee', 'event_collaborator'],
  },
  CONTENT_MANAGER: {
    id: 'content_manager',
    name: 'Content Manager',
    description: 'Can manage all content including deletion',
    permissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: false,
      canManageOrganization: false,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
    applicableRoles: ['business_employee', 'event_collaborator'],
  },
  ANALYTICS_VIEWER: {
    id: 'analytics_viewer',
    name: 'Analytics Viewer',
    description: 'Can view analytics but not create content',
    permissions: {
      canCreateLandingPages: false,
      canEditLandingPages: false,
      canDeleteLandingPages: false,
      canPublishLandingPages: false,
      canViewAnalytics: true,
      canManageUsers: false,
      canManageOrganization: false,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
    applicableRoles: ['business_employee', 'event_collaborator', 'team_member'],
  },
  EVENT_COORDINATOR: {
    id: 'event_coordinator',
    name: 'Event Coordinator',
    description: 'Full event management permissions',
    permissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: false,
      canManageOrganization: false,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
    applicableRoles: ['event_collaborator'],
  },
  READ_ONLY: {
    id: 'read_only',
    name: 'Read Only',
    description: 'Can view content and analytics only',
    permissions: {
      canCreateLandingPages: false,
      canEditLandingPages: false,
      canDeleteLandingPages: false,
      canPublishLandingPages: false,
      canViewAnalytics: true,
      canManageUsers: false,
      canManageOrganization: false,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
    applicableRoles: ['business_employee', 'event_collaborator', 'team_member'],
  },
};

export class PermissionCustomizationService {
  /**
   * Get available permission templates for a role
   */
  static getTemplatesForRole(role: string): PermissionTemplate[] {
    return Object.values(PERMISSION_TEMPLATES).filter(template =>
      template.applicableRoles.includes(role)
    );
  }

  /**
   * Create custom permissions from template
   */
  static createCustomPermissions(
    templateId: string,
    customizations: CustomPermissions
  ): UserPermissions {
    const template = PERMISSION_TEMPLATES[templateId];
    if (!template) {
      throw new Error('Invalid template ID');
    }

    return {
      ...template.permissions,
      ...customizations,
    };
  }

  /**
   * Validate custom permissions
   */
  static validateCustomPermissions(
    baseRole: string,
    customPermissions: CustomPermissions
  ): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check if user is trying to grant permissions they don't have
    if (
      customPermissions.canManageUsers &&
      baseRole !== 'business_admin' &&
      baseRole !== 'event_admin'
    ) {
      errors.push('Only admins can grant user management permissions');
    }

    if (
      customPermissions.canManageOrganization &&
      baseRole !== 'business_admin' &&
      baseRole !== 'event_admin'
    ) {
      errors.push('Only admins can grant organization management permissions');
    }

    if (customPermissions.canAccessAdminPanel && baseRole !== 'super_admin') {
      errors.push('Only super admins can grant admin panel access');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Get permission summary for display
   */
  static getPermissionSummary(permissions: UserPermissions): string[] {
    const summary: string[] = [];

    if (permissions.canCreateLandingPages) summary.push('Create content');
    if (permissions.canEditLandingPages) summary.push('Edit content');
    if (permissions.canDeleteLandingPages) summary.push('Delete content');
    if (permissions.canPublishLandingPages) summary.push('Publish content');
    if (permissions.canViewAnalytics) summary.push('View analytics');
    if (permissions.canManageUsers) summary.push('Manage users');
    if (permissions.canManageOrganization) summary.push('Manage organization');
    if (permissions.canAccessAdminPanel) summary.push('Admin panel access');
    if (permissions.canViewEventDetails) summary.push('View event details');
    if (permissions.canViewPhotoGallery) summary.push('View photo gallery');
    if (permissions.canRSVPToEvents) summary.push('RSVP to events');
    if (permissions.canCheckInToEvents) summary.push('Check-in to events');

    return summary;
  }
}
