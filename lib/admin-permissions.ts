// Admin permission utilities for Cosmic Portals
import { getUserOrganizationData } from '@/lib/supabase/user-org';

export interface AdminPermissions {
  canViewAllOrganizations: boolean;
  canViewAllLandingPages: boolean;
  canViewAllUsers: boolean;
  canViewAllDevices: boolean;
  canViewAllEvents: boolean;
  canManageAnyOrganization: boolean;
  canAccessAdminPanel: boolean;
}

/**
 * Check if user is a super admin
 */
export async function isSuperAdmin(userId: string): Promise<boolean> {
  try {
    const orgData = await getUserOrganizationData(userId);
    if (!orgData) return false;
    
    // Check if user is owner and organization has master_admin flag
    return (
      orgData.user.role === 'owner' && 
      orgData.organization.settings?.master_admin === true
    );
  } catch (error) {
    console.error('Error checking super admin status:', error);
    return false;
  }
}

/**
 * Get admin permissions for a user
 */
export async function getAdminPermissions(userId: string): Promise<AdminPermissions> {
  const isAdmin = await isSuperAdmin(userId);
  
  return {
    canViewAllOrganizations: isAdmin,
    canViewAllLandingPages: isAdmin,
    canViewAllUsers: isAdmin,
    canViewAllDevices: isAdmin,
    canViewAllEvents: isAdmin,
    canManageAnyOrganization: isAdmin,
    canAccessAdminPanel: isAdmin,
  };
}

/**
 * Validate admin access for API endpoints
 */
export async function validateAdminAccess(userId: string): Promise<boolean> {
  return await isSuperAdmin(userId);
}

/**
 * Get organization-filtered data for non-admin users
 */
export async function getOrganizationFilteredData(userId: string, tableName: string) {
  const orgData = await getUserOrganizationData(userId);
  if (!orgData) {
    throw new Error('Organization not found');
  }
  
  return {
    organizationId: orgData.organization.id,
    userId: userId,
    userRole: orgData.user.role,
  };
}
