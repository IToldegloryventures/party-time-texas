const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function debugLandingPagesAccess() {
  try {
    console.log('Debugging Landing Pages Access...\n');
    
    const clerkUserId = 'user_339NGNvs776RVVWRdLkI1HbY7Y6'; // Super Admin Clerk ID
    
    console.log('1. Testing getUserOrganizationData logic...');
    
    // Get user data
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', clerkUserId)
      .single();

    if (userError || !user) {
      console.error('❌ User not found:', userError);
      return;
    }
    
    console.log('✅ User found:', {
      id: user.id,
      email: user.email,
      role: user.role,
      organization_id: user.organization_id
    });

    // Get organization data
    const { data: organization, error: orgError } = await supabase
      .from('organizations')
      .select('*')
      .eq('id', user.organization_id)
      .single();

    if (orgError || !organization) {
      console.error('❌ Organization not found:', orgError);
      return;
    }
    
    console.log('✅ Organization found:', {
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
      plan_type: organization.plan_type,
      has_landing_page_builder: organization.has_landing_page_builder
    });

    // Test permission check
    console.log('\n2. Testing permission check...');
    const canManageLandingPages = 
      ['super_admin', 'owner', 'admin', 'member'].includes(user.role) ||
      user.permissions?.can_manage_landing_pages;
    
    console.log('Permission check result:', {
      userRole: user.role,
      roleInAllowedList: ['super_admin', 'owner', 'admin', 'member'].includes(user.role),
      customPermission: user.permissions?.can_manage_landing_pages,
      canManageLandingPages: canManageLandingPages
    });

    if (canManageLandingPages) {
      console.log('✅ User should be able to access landing pages');
      console.log('✅ Should render LandingPageManager component');
    } else {
      console.log('❌ User cannot access landing pages - would redirect to /dashboard');
    }

    // Test the complete userData object that would be passed to LandingPageManager
    console.log('\n3. Testing LandingPageManager props...');
    const userData = {
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        permissions: user.permissions
      },
      organization: {
        id: organization.id,
        name: organization.name,
        slug: organization.slug,
        plan_type: organization.plan_type,
        has_landing_page_builder: organization.has_landing_page_builder
      }
    };

    console.log('UserData that would be passed to LandingPageManager:', JSON.stringify(userData, null, 2));

    // Test LandingPageManager permission checks
    console.log('\n4. Testing LandingPageManager permission checks...');
    const isSuperAdmin = userData.user.role === 'super_admin';
    const hasBuilderAddon = userData.organization.has_landing_page_builder || false;
    const canCreateEdit = isSuperAdmin || hasBuilderAddon;

    console.log('LandingPageManager permission checks:', {
      isSuperAdmin: isSuperAdmin,
      hasBuilderAddon: hasBuilderAddon,
      canCreateEdit: canCreateEdit
    });

    console.log('\n=== CONCLUSION ===');
    if (canManageLandingPages && canCreateEdit) {
      console.log('✅ Everything should work correctly');
      console.log('✅ Super Admin can access landing pages');
      console.log('✅ Super Admin can create/edit landing pages');
      console.log('✅ LandingPageManager should render properly');
    } else {
      console.log('❌ There is an issue with permissions');
    }

  } catch (error) {
    console.error('❌ Script error:', error);
  }
}

debugLandingPagesAccess();
