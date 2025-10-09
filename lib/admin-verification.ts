import { supabase } from './supabase/client';

export interface AdminUser {
  id: string;
  clerk_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role: string;
  permissions: {
    master_admin?: boolean;
    [key: string]: any;
  };
  organization_id: string;
}

/**
 * Verify if a user has admin privileges
 * @param clerkId - The Clerk user ID
 * @returns AdminUser if admin, null if not admin
 */
export async function verifyAdminAccess(clerkId: string): Promise<AdminUser | null> {
  try {
    // Query the database to get user with admin permissions
    const { data: user, error } = await supabase
      .from('users')
      .select(`
        id,
        clerk_id,
        email,
        first_name,
        last_name,
        role,
        permissions,
        organization_id
      `)
      .eq('clerk_id', clerkId)
      .single();

    if (error || !user) {
      console.error('Error fetching user for admin verification:', error);
      return null;
    }

    // Check if user has master_admin permission
    const permissions = user.permissions as any;
    if (!permissions || !permissions.master_admin) {
      console.log('User does not have master_admin permission:', user.email);
      return null;
    }

    return user as AdminUser;
  } catch (error) {
    console.error('Error in verifyAdminAccess:', error);
    return null;
  }
}

/**
 * Check if user is admin (simpler version for middleware)
 * @param clerkId - The Clerk user ID
 * @returns boolean
 */
export async function isAdmin(clerkId: string): Promise<boolean> {
  const adminUser = await verifyAdminAccess(clerkId);
  return adminUser !== null;
}

/**
 * Get admin user details (for use in admin components)
 * @param clerkId - The Clerk user ID
 * @returns AdminUser with full details
 */
export async function getAdminUser(clerkId: string): Promise<AdminUser | null> {
  return await verifyAdminAccess(clerkId);
}
