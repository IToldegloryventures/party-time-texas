// Permission system for Cosmic Portals
export interface UserPermissions {
  canCreateLandingPages: boolean;
  canEditLandingPages: boolean;
  canDeleteLandingPages: boolean;
  canPublishLandingPages: boolean;
  canViewAnalytics: boolean;
  canManageUsers: boolean;
  canManageOrganization: boolean;
  canAccessAdminPanel: boolean;
  canViewEventDetails: boolean;
  canViewPhotoGallery: boolean;
  canRSVPToEvents: boolean;
  canCheckInToEvents: boolean;
}

export interface UserRole {
  id: string;
  name: string;
  permissions: UserPermissions;
}

// Define user roles and their permissions
export const USER_ROLES: Record<string, UserRole> = {
  SUPER_ADMIN: {
    id: 'super_admin',
    name: 'Super Admin',
    permissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: true,
      canManageOrganization: true,
      canAccessAdminPanel: true,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
  },
  BUSINESS_ADMIN: {
    id: 'business_admin',
    name: 'Business Admin',
    permissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: true,
      canManageOrganization: true,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
  },
  BUSINESS_EMPLOYEE: {
    id: 'business_employee',
    name: 'Business Employee',
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
  },
  EVENT_ADMIN: {
    id: 'event_admin',
    name: 'Event Admin',
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
  },
  EVENT_COLLABORATOR: {
    id: 'event_collaborator',
    name: 'Event Collaborator',
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
  },
  EVENT_GUEST: {
    id: 'event_guest',
    name: 'Event Guest',
    permissions: {
      canCreateLandingPages: false,
      canEditLandingPages: false,
      canDeleteLandingPages: false,
      canPublishLandingPages: false,
      canViewAnalytics: false,
      canManageUsers: false,
      canManageOrganization: false,
      canAccessAdminPanel: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,
    },
  },
  TEAM_MEMBER: {
    id: 'team_member',
    name: 'Team Member',
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
  },
};

/**
 * Get user permissions based on their role
 */
export function getUserPermissions(userRole: string): UserPermissions {
  const role = USER_ROLES[userRole.toUpperCase()];
  if (!role) {
    // Default to viewer permissions for unknown roles
    return USER_ROLES.VIEWER.permissions;
  }
  return role.permissions;
}

/**
 * Check if user has specific permission
 */
export function hasPermission(
  userRole: string,
  permission: keyof UserPermissions
): boolean {
  const permissions = getUserPermissions(userRole);
  return permissions[permission];
}

/**
 * Check if user can access landing page builder
 */
export function canAccessBuilder(userRole: string): boolean {
  return hasPermission(userRole, 'canCreateLandingPages') || 
         hasPermission(userRole, 'canEditLandingPages');
}

/**
 * Check if user can access admin panel
 */
export function canAccessAdmin(userRole: string): boolean {
  return hasPermission(userRole, 'canAccessAdminPanel');
}

/**
 * Get user role display name
 */
export function getUserRoleName(userRole: string): string {
  const role = USER_ROLES[userRole.toUpperCase()];
  return role ? role.name : 'Unknown Role';
}
