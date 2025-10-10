// Permission system for Cosmic Portals
export interface UserPermissions {
  // Platform Management (Super Admin only)
  canAccessSuperAdminPanel: boolean;
  canViewAllOrganizations: boolean;
  canManageAllUsers: boolean;

  // Organization Management
  canManageOrganization: boolean;
  canManageUsers: boolean;
  canAccessAdminPanel: boolean;

  // Content Management
  canCreateLandingPages: boolean;
  canEditLandingPages: boolean;
  canDeleteLandingPages: boolean;
  canPublishLandingPages: boolean;

  // Event Management
  canCreateEvents: boolean;
  canManageEvents: boolean;
  canViewEventDetails: boolean;
  canViewPhotoGallery: boolean;
  canRSVPToEvents: boolean;
  canCheckInToEvents: boolean;

  // Task Management
  canCreateTasks: boolean;
  canManageTasks: boolean;
  canAssignTasks: boolean;
  canViewAllTasks: boolean;
  canViewAssignedTasks: boolean;
  canUpdateTaskStatus: boolean;
  canAddTaskNotes: boolean;

  // Analytics & Data
  canViewAnalytics: boolean;
  canViewAllData: boolean;
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
      // Platform Management
      canAccessSuperAdminPanel: true,
      canViewAllOrganizations: true,
      canManageAllUsers: true,

      // Organization Management
      canManageOrganization: true,
      canManageUsers: true,
      canAccessAdminPanel: true,

      // Content Management
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,

      // Event Management
      canCreateEvents: true,
      canManageEvents: true,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,

      // Task Management
      canCreateTasks: true,
      canManageTasks: true,
      canAssignTasks: true,
      canViewAllTasks: true,
      canViewAssignedTasks: true,
      canUpdateTaskStatus: true,
      canAddTaskNotes: true,

      // Analytics & Data
      canViewAnalytics: true,
      canViewAllData: true,
    },
  },
  OWNER: {
    id: 'owner',
    name: 'Organization Owner',
    permissions: {
      // Platform Management
      canAccessSuperAdminPanel: false,
      canViewAllOrganizations: false,
      canManageAllUsers: false,

      // Organization Management
      canManageOrganization: true,
      canManageUsers: true,
      canAccessAdminPanel: true,

      // Content Management
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,

      // Event Management
      canCreateEvents: true,
      canManageEvents: true,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,

      // Task Management
      canCreateTasks: true,
      canManageTasks: true,
      canAssignTasks: true,
      canViewAllTasks: true,
      canViewAssignedTasks: true,
      canUpdateTaskStatus: true,
      canAddTaskNotes: true,

      // Analytics & Data
      canViewAnalytics: true,
      canViewAllData: true,
    },
  },
  ADMIN: {
    id: 'admin',
    name: 'Organization Admin',
    permissions: {
      // Platform Management
      canAccessSuperAdminPanel: false,
      canViewAllOrganizations: false,
      canManageAllUsers: false,

      // Organization Management
      canManageOrganization: false,
      canManageUsers: true,
      canAccessAdminPanel: true,

      // Content Management
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,

      // Event Management
      canCreateEvents: true,
      canManageEvents: true,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,

      // Task Management
      canCreateTasks: true,
      canManageTasks: true,
      canAssignTasks: true,
      canViewAllTasks: true,
      canViewAssignedTasks: true,
      canUpdateTaskStatus: true,
      canAddTaskNotes: true,

      // Analytics & Data
      canViewAnalytics: true,
      canViewAllData: true,
    },
  },
  MEMBER: {
    id: 'member',
    name: 'Team Member',
    permissions: {
      // Platform Management
      canAccessSuperAdminPanel: false,
      canViewAllOrganizations: false,
      canManageAllUsers: false,

      // Organization Management
      canManageOrganization: false,
      canManageUsers: false,
      canAccessAdminPanel: false,

      // Content Management
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: false,
      canPublishLandingPages: true,

      // Event Management
      canCreateEvents: false,
      canManageEvents: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: true,

      // Task Management
      canCreateTasks: false,
      canManageTasks: false,
      canAssignTasks: false,
      canViewAllTasks: false,
      canViewAssignedTasks: true,
      canUpdateTaskStatus: true,
      canAddTaskNotes: true,

      // Analytics & Data
      canViewAnalytics: true,
      canViewAllData: false,
    },
  },
  GUEST: {
    id: 'guest',
    name: 'Guest User',
    permissions: {
      // Platform Management
      canAccessSuperAdminPanel: false,
      canViewAllOrganizations: false,
      canManageAllUsers: false,

      // Organization Management
      canManageOrganization: false,
      canManageUsers: false,
      canAccessAdminPanel: false,

      // Content Management
      canCreateLandingPages: false,
      canEditLandingPages: false,
      canDeleteLandingPages: false,
      canPublishLandingPages: false,

      // Event Management
      canCreateEvents: false,
      canManageEvents: false,
      canViewEventDetails: true,
      canViewPhotoGallery: true,
      canRSVPToEvents: true,
      canCheckInToEvents: false,

      // Task Management
      canCreateTasks: false,
      canManageTasks: false,
      canAssignTasks: false,
      canViewAllTasks: false,
      canViewAssignedTasks: false,
      canUpdateTaskStatus: false,
      canAddTaskNotes: false,

      // Analytics & Data
      canViewAnalytics: false,
      canViewAllData: false,
    },
  },
};

/**
 * Get user permissions based on their role
 */
export function getUserPermissions(userRole: string): UserPermissions {
  const role = USER_ROLES[userRole.toUpperCase()];
  if (!role) {
    // Default to guest permissions for unknown roles
    return USER_ROLES.GUEST.permissions;
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
  return (
    hasPermission(userRole, 'canCreateLandingPages') ||
    hasPermission(userRole, 'canEditLandingPages')
  );
}

/**
 * Check if user can access super admin panel
 */
export function canAccessSuperAdmin(userRole: string): boolean {
  return hasPermission(userRole, 'canAccessSuperAdminPanel');
}

/**
 * Check if user can access admin panel
 */
export function canAccessAdmin(userRole: string): boolean {
  return hasPermission(userRole, 'canAccessAdminPanel');
}

/**
 * Check if user can create events
 */
export function canCreateEvents(userRole: string): boolean {
  return hasPermission(userRole, 'canCreateEvents');
}

/**
 * Check if user can manage events
 */
export function canManageEvents(userRole: string): boolean {
  return hasPermission(userRole, 'canManageEvents');
}

/**
 * Check if user can manage organization
 */
export function canManageOrganization(userRole: string): boolean {
  return hasPermission(userRole, 'canManageOrganization');
}

/**
 * Check if user can manage users
 */
export function canManageUsers(userRole: string): boolean {
  return hasPermission(userRole, 'canManageUsers');
}

/**
 * Check if user can create tasks
 */
export function canCreateTasks(userRole: string): boolean {
  return hasPermission(userRole, 'canCreateTasks');
}

/**
 * Check if user can manage tasks
 */
export function canManageTasks(userRole: string): boolean {
  return hasPermission(userRole, 'canManageTasks');
}

/**
 * Check if user can assign tasks
 */
export function canAssignTasks(userRole: string): boolean {
  return hasPermission(userRole, 'canAssignTasks');
}

/**
 * Check if user can view all tasks
 */
export function canViewAllTasks(userRole: string): boolean {
  return hasPermission(userRole, 'canViewAllTasks');
}

/**
 * Check if user can view assigned tasks
 */
export function canViewAssignedTasks(userRole: string): boolean {
  return hasPermission(userRole, 'canViewAssignedTasks');
}

/**
 * Check if user can update task status
 */
export function canUpdateTaskStatus(userRole: string): boolean {
  return hasPermission(userRole, 'canUpdateTaskStatus');
}

/**
 * Check if user can add task notes
 */
export function canAddTaskNotes(userRole: string): boolean {
  return hasPermission(userRole, 'canAddTaskNotes');
}

/**
 * Get user role display name
 */
export function getUserRoleName(userRole: string): string {
  const role = USER_ROLES[userRole.toUpperCase()];
  return role ? role.name : 'Unknown Role';
}
