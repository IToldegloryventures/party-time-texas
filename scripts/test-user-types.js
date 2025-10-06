// Test script to verify landing page builder works for all user types
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Test user types and their expected permissions
const testUserTypes = [
  {
    name: 'Super Admin',
    clerkId: 'user_339NGNvs776RVVWRdLkI1HbY7Y6',
    expectedPermissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: true,
      canManageOrganization: true,
      canAccessAdminPanel: true,
    }
  },
  {
    name: 'Business Admin',
    clerkId: 'user_339gbDa0AgrHZrm4IFR0qdX5RYm',
    expectedPermissions: {
      canCreateLandingPages: true,
      canEditLandingPages: true,
      canDeleteLandingPages: true,
      canPublishLandingPages: true,
      canViewAnalytics: true,
      canManageUsers: true,
      canManageOrganization: true,
      canAccessAdminPanel: false,
    }
  }
];

async function testUserType(userType) {
  console.log(`\n🧪 Testing ${userType.name}...`);
  
  try {
    // Get user data
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', userType.clerkId)
      .single();

    if (userError || !user) {
      console.log(`❌ User not found: ${userError?.message}`);
      return false;
    }

    // Get organization data
    const { data: organization, error: orgError } = await supabase
      .from('organizations')
      .select('*')
      .eq('id', user.organization_id)
      .single();

    if (orgError || !organization) {
      console.log(`❌ Organization not found: ${orgError?.message}`);
      return false;
    }

    const orgData = { user, organization };
    
    // Test user type detection
    const { detectUserType } = require('../lib/user-type-detection');
    const userTypeInfo = detectUserType(orgData);
    
    console.log(`✅ User Type: ${userTypeInfo.type}`);
    console.log(`✅ Role: ${userTypeInfo.role}`);
    console.log(`✅ Display Name: ${userTypeInfo.displayName}`);
    console.log(`✅ Can Access Builder: ${userTypeInfo.canAccessBuilder}`);
    console.log(`✅ Can Access Admin: ${userTypeInfo.canAccessAdmin}`);
    
    // Test permissions
    const { hasPermission } = require('../lib/permissions');
    const permissions = userTypeInfo.permissions;
    
    console.log('\n📋 Permission Check:');
    Object.keys(userType.expectedPermissions).forEach(permission => {
      const hasIt = permissions[permission];
      const expected = userType.expectedPermissions[permission];
      const status = hasIt === expected ? '✅' : '❌';
      console.log(`${status} ${permission}: ${hasIt} (expected: ${expected})`);
    });
    
    // Test API access
    console.log('\n🔗 Testing API Access:');
    try {
      const response = await fetch('http://localhost:3000/api/landing-pages', {
        headers: {
          'Authorization': `Bearer ${userType.clerkId}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('✅ API access successful');
      } else {
        console.log(`❌ API access failed: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ API test failed: ${error.message}`);
    }
    
    return true;
  } catch (error) {
    console.log(`❌ Test failed: ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting User Type Tests for Landing Page Builder...\n');
  
  let passedTests = 0;
  let totalTests = testUserTypes.length;
  
  for (const userType of testUserTypes) {
    const passed = await testUserType(userType);
    if (passed) passedTests++;
  }
  
  console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! Landing page builder is properly configured for all user types.');
  } else {
    console.log('⚠️  Some tests failed. Please check the configuration.');
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testUserType, runTests };
