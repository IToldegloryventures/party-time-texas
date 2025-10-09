/**
 * Check Clerk Connection Status
 * Verifies that your Clerk account is properly linked to Supabase
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkClerkConnection() {
  try {
    console.log('🔍 Checking your Clerk connection...\n');

    // Get your user from Supabase
    const { data: user, error } = await supabase
      .from('users')
      .select(
        'clerk_id, email, first_name, last_name, role, permissions, organization_id'
      )
      .eq('email', 'ashtonmedina22@gmail.com')
      .single();

    if (error) {
      console.log('❌ Error:', error.message);
      return;
    }

    if (!user) {
      console.log('❌ User not found in Supabase');
      return;
    }

    console.log('👤 Your Account:');
    console.log('   Email:', user.email);
    console.log('   Name:', user.first_name, user.last_name);
    console.log('   Role:', user.role);
    console.log('');

    console.log('🔗 Clerk Connection:');
    console.log('   Clerk ID:', user.clerk_id);
    console.log(
      '   Status:',
      user.clerk_id ? '✅ CONNECTED' : '❌ NOT CONNECTED'
    );
    console.log('');

    console.log('🔐 Permissions:');
    if (user.permissions) {
      Object.entries(user.permissions).forEach(([key, value]) => {
        const icon = value ? '✅' : '❌';
        console.log(`   ${icon} ${key}: ${value}`);
      });
    }
    console.log('');

    // Get organization details
    const { data: org, error: orgError } = await supabase
      .from('organizations')
      .select('name, slug, plan_type')
      .eq('id', user.organization_id)
      .single();

    if (org) {
      console.log('🏢 Organization:');
      console.log('   Name:', org.name);
      console.log('   Slug:', org.slug);
      console.log('   Plan:', org.plan_type);
      console.log('');
    }

    // Final status
    const isMasterAdmin = user.permissions?.master_admin === true;
    const hasClerkId = !!user.clerk_id;

    console.log('📊 Connection Status:');
    console.log('   Clerk Connected:', hasClerkId ? '✅ YES' : '❌ NO');
    console.log('   Master Admin:', isMasterAdmin ? '✅ YES' : '❌ NO');
    console.log(
      '   Can Access Admin Panel:',
      hasClerkId && isMasterAdmin ? '✅ YES' : '❌ NO'
    );
    console.log('');

    if (hasClerkId && isMasterAdmin) {
      console.log('🎉 Everything is properly connected!');
      console.log('');
      console.log('✅ You can now:');
      console.log(
        '   1. Sign in with your Clerk account (ashtonmedina22@gmail.com)'
      );
      console.log('   2. Access the admin panel at /admin');
      console.log('   3. See role-based features in your dashboard');
      console.log('   4. All permissions are properly enforced');
    } else {
      console.log('⚠️  Issues found:');
      if (!hasClerkId) {
        console.log('   - Clerk ID is missing or incorrect');
        console.log('   - Expected format: user_XXXXXXXXXXXXXXXXXXXXX');
      }
      if (!isMasterAdmin) {
        console.log('   - Master admin permission is not set');
      }
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkClerkConnection();
