// User type detection utilities for Cosmic Portals
import { getUserPermissions, canAccessBuilder, canAccessAdmin } from './permissions';

export interface UserTypeInfo {
  type: string;
  role: string;
  permissions: any;
  canAccessBuilder: boolean;
  canAccessAdmin: boolean;
  displayName: string;
}

/**
 * Detect user type based on organization data and user role
 */
export function detectUserType(orgData: any): UserTypeInfo {
  if (!orgData || !orgData.user || !orgData.organization) {
    return {
      type: 'unknown',
      role: 'viewer',
      permissions: getUserPermissions('viewer'),
      canAccessBuilder: false,
      canAccessAdmin: false,
      displayName: 'Unknown User',
    };
  }

  const user = orgData.user;
  const organization = orgData.organization;
  
  // Check for super admin (master admin)
  if (user.role === 'owner' && organization.settings?.master_admin === true) {
    return {
      type: 'super_admin',
      role: 'super_admin',
      permissions: getUserPermissions('super_admin'),
      canAccessBuilder: true,
      canAccessAdmin: true,
      displayName: 'Super Admin',
    };
  }
  
  // Check for business admin
  if (user.role === 'owner' || user.role === 'admin') {
    return {
      type: 'business_admin',
      role: 'business_admin',
      permissions: getUserPermissions('business_admin'),
      canAccessBuilder: true,
      canAccessAdmin: false,
      displayName: 'Business Admin',
    };
  }
  
  // Check for business employee
  if (user.role === 'member' && organization.plan_type !== 'event') {
    return {
      type: 'business_employee',
      role: 'business_employee',
      permissions: getUserPermissions('business_employee'),
      canAccessBuilder: true,
      canAccessAdmin: false,
      displayName: 'Business Employee',
    };
  }
  
  // Check for event admin
  if (user.role === 'member' && organization.plan_type === 'event') {
    return {
      type: 'event_admin',
      role: 'event_admin',
      permissions: getUserPermissions('event_admin'),
      canAccessBuilder: true,
      canAccessAdmin: false,
      displayName: 'Event Admin',
    };
  }
  
  // Default to viewer
  return {
    type: 'viewer',
    role: 'viewer',
    permissions: getUserPermissions('viewer'),
    canAccessBuilder: false,
    canAccessAdmin: false,
    displayName: 'Viewer',
  };
}

/**
 * Get user type specific landing page defaults
 */
export function getUserTypeDefaults(userType: string, orgData: any) {
  const defaults = {
    super_admin: {
      canCreateForAnyOrg: true,
      canEditAnyPage: true,
      canDeleteAnyPage: true,
      canPublishAnyPage: true,
    },
    business_admin: {
      canCreateForAnyOrg: false,
      canEditAnyPage: false,
      canDeleteAnyPage: false,
      canPublishAnyPage: false,
    },
    business_employee: {
      canCreateForAnyOrg: false,
      canEditAnyPage: false,
      canDeleteAnyPage: false,
      canPublishAnyPage: false,
    },
    event_admin: {
      canCreateForAnyOrg: false,
      canEditAnyPage: false,
      canDeleteAnyPage: false,
      canPublishAnyPage: false,
    },
    viewer: {
      canCreateForAnyOrg: false,
      canEditAnyPage: false,
      canDeleteAnyPage: false,
      canPublishAnyPage: false,
    },
  };
  
  return defaults[userType] || defaults.viewer;
}
