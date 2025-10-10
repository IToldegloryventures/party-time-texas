const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function debugUserDataFlow() {
  try {
    console.log('Debugging User Data Flow...\n');
    
    const clerkUserId = 'user_339NGNvs776RVVWRdLkI1HbY7Y6'; // Super Admin Clerk ID
    
    console.log('1. Simulating getUserOrganizationData call...');
    
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
    
    console.log('\n2. Organization data:');
    console.log('✅ Organization found:', {
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
      plan_type: organization.plan_type,
      has_landing_page_builder: organization.has_landing_page_builder
    });

    // Simulate the userData object that would be passed to LandingPageManager
    console.log('\n3. Simulating LandingPageManager userData prop...');
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

    console.log('userData object:', JSON.stringify(userData, null, 2));

    // Test LandingPageManager permission checks
    console.log('\n4. Testing LandingPageManager permission checks...');
    const isSuperAdmin = userData.user.role === 'super_admin';
    const hasBuilderAddon = userData.organization.has_landing_page_builder || false;
    const canCreateEdit = isSuperAdmin || hasBuilderAddon;

    console.log('Permission check results:', {
      isSuperAdmin: isSuperAdmin,
      hasBuilderAddon: hasBuilderAddon,
      canCreateEdit: canCreateEdit
    });

    console.log('\n5. Testing page-level permission check...');
    const canManageLandingPages = 
      ['super_admin', 'owner', 'admin', 'member'].includes(userData.user.role) ||
      userData.user.permissions?.can_manage_landing_pages;
    
    console.log('Page-level permission check:', {
      userRole: userData.user.role,
      roleInAllowedList: ['super_admin', 'owner', 'admin', 'member'].includes(userData.user.role),
      customPermission: userData.user.permissions?.can_manage_landing_pages,
      canManageLandingPages: canManageLandingPages
    });

    console.log('\n=== CONCLUSION ===');
    if (canManageLandingPages && canCreateEdit) {
      console.log('✅ User should see the Create Landing Page button');
      console.log('✅ Button should be clickable');
    } else {
      console.log('❌ User will NOT see the Create Landing Page button');
      if (!canManageLandingPages) {
        console.log('   - Reason: Page-level permission check failed');
      }
      if (!canCreateEdit) {
        console.log('   - Reason: Component-level permission check failed');
        console.log('   - isSuperAdmin:', isSuperAdmin);
        console.log('   - hasBuilderAddon:', hasBuilderAddon);
      }
    }

  } catch (error) {
    console.error('❌ Script error:', error);
  }
}

debugUserDataFlow();
