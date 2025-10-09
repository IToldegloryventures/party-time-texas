/**
 * Setup Admin User and Organizations
 * Creates the admin user with master_admin permissions
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupAdminUser() {
  try {
    console.log('🚀 Setting up admin user and organizations...');
    
    // First, check if organizations already exist
    const { data: existingOrgs, error: orgCheckError } = await supabase
      .from('organizations')
      .select('name, slug')
      .in('slug', ['cosmic-portals-master', 'party-time-texas']);
    
    if (orgCheckError) {
      console.error('❌ Error checking existing organizations:', orgCheckError);
      return;
    }
    
    if (existingOrgs && existingOrgs.length > 0) {
      console.log('⚠️  Organizations already exist:');
      existingOrgs.forEach(org => {
        console.log(`   - ${org.name} (${org.slug})`);
      });
      console.log('');
    }
    
    // Check if admin user already exists
    const { data: existingUser, error: userCheckError } = await supabase
      .from('users')
      .select('email, first_name, last_name, role, permissions')
      .eq('email', 'ashtonmedina22@gmail.com');
    
    if (userCheckError) {
      console.error('❌ Error checking existing user:', userCheckError);
      return;
    }
    
    if (existingUser && existingUser.length > 0) {
      console.log('⚠️  Admin user already exists:');
      existingUser.forEach(user => {
        console.log(`   - ${user.first_name} ${user.last_name} (${user.email})`);
        console.log(`     Role: ${user.role}`);
        console.log(`     Master Admin: ${user.permissions?.master_admin ? '✅' : '❌'}`);
      });
      console.log('');
      
      // If user exists but doesn't have master_admin, update it
      if (existingUser[0].permissions?.master_admin !== true) {
        console.log('🔧 Updating user permissions to include master_admin...');
        const { error: updateError } = await supabase
          .from('users')
          .update({
            permissions: {
              ...existingUser[0].permissions,
              master_admin: true,
              can_manage_organization: true,
              can_manage_users: true,
              can_manage_events: true,
              can_access_all_organizations: true
            }
          })
          .eq('email', 'ashtonmedina22@gmail.com');
        
        if (updateError) {
          console.error('❌ Error updating user permissions:', updateError);
        } else {
          console.log('✅ User permissions updated successfully!');
        }
      }
      
      return;
    }
    
    // Read and execute the SQL setup
    const sqlPath = path.join(__dirname, 'create-real-organizations.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    console.log('📄 Executing organization and user setup...');
    
    // Split SQL into individual statements and execute them
    const statements = sql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--') && !stmt.startsWith('SELECT'));
    
    for (const statement of statements) {
      if (statement.toLowerCase().includes('insert')) {
        try {
          console.log(`   Executing: ${statement.substring(0, 60)}...`);
          
          // For INSERT statements, we'll use Supabase client instead of raw SQL
          if (statement.includes('INSERT INTO organizations')) {
            // Parse and execute organization insert
            await insertOrganizations();
          } else if (statement.includes('INSERT INTO users')) {
            // Parse and execute user insert
            await insertUsers();
          }
        } catch (err) {
          console.warn(`⚠️  Warning: ${err.message}`);
        }
      }
    }
    
    // Verify the setup
    console.log('🔍 Verifying setup...');
    
    const { data: orgs, error: orgError } = await supabase
      .from('organizations')
      .select('name, slug, plan_type')
      .in('slug', ['cosmic-portals-master', 'party-time-texas']);
    
    if (orgError) {
      console.error('❌ Error verifying organizations:', orgError);
    } else {
      console.log('✅ Organizations created:');
      orgs.forEach(org => {
        console.log(`   - ${org.name} (${org.slug}) - ${org.plan_type}`);
      });
    }
    
    const { data: users, error: userError } = await supabase
      .from('users')
      .select('email, first_name, last_name, role, permissions')
      .eq('email', 'ashtonmedina22@gmail.com');
    
    if (userError) {
      console.error('❌ Error verifying user:', userError);
    } else if (users && users.length > 0) {
      const user = users[0];
      console.log('✅ Admin user created:');
      console.log(`   - ${user.first_name} ${user.last_name} (${user.email})`);
      console.log(`   - Role: ${user.role}`);
      console.log(`   - Master Admin: ${user.permissions?.master_admin ? '✅' : '❌'}`);
    }
    
    console.log('');
    console.log('🎉 Admin setup complete!');
    console.log('');
    console.log('✅ You can now:');
    console.log('1. Access the admin panel at /admin');
    console.log('2. Your dashboard will show role-based features');
    console.log('3. Admin features will be properly secured');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

async function insertOrganizations() {
  // Create Cosmic Portals Master Organization
  const { data: cosmicOrg, error: cosmicError } = await supabase
    .from('organizations')
    .insert({
      name: 'Cosmic Portals Master',
      slug: 'cosmic-portals-master',
      plan_type: 'enterprise',
      subscription_status: 'active',
      settings: {
        theme: 'dark',
        branding: 'cosmic',
        master_admin: true
      },
      white_label_config: {
        custom_domain: 'cosmicportals.com'
      }
    })
    .select('id')
    .single();
  
  if (cosmicError && !cosmicError.message.includes('duplicate')) {
    console.error('❌ Error creating Cosmic Portals org:', cosmicError);
  } else if (cosmicOrg) {
    console.log('✅ Cosmic Portals Master organization created');
  }
  
  // Create Party Time Texas Organization
  const { data: partyOrg, error: partyError } = await supabase
    .from('organizations')
    .insert({
      name: 'Party Time Texas',
      slug: 'party-time-texas',
      plan_type: 'professional',
      subscription_status: 'active',
      settings: {
        theme: 'party',
        branding: 'party-time-texas',
        industry: 'event-planning'
      },
      white_label_config: {
        custom_domain: 'party.partytimetexas.com'
      }
    })
    .select('id')
    .single();
  
  if (partyError && !partyError.message.includes('duplicate')) {
    console.error('❌ Error creating Party Time Texas org:', partyError);
  } else if (partyOrg) {
    console.log('✅ Party Time Texas organization created');
  }
}

async function insertUsers() {
  // Get the organization IDs
  const { data: cosmicOrg } = await supabase
    .from('organizations')
    .select('id')
    .eq('slug', 'cosmic-portals-master')
    .single();
  
  const { data: partyOrg } = await supabase
    .from('organizations')
    .select('id')
    .eq('slug', 'party-time-texas')
    .single();
  
  if (!cosmicOrg) {
    console.error('❌ Cosmic Portals organization not found');
    return;
  }
  
  // Create master admin user
  const { data: adminUser, error: adminError } = await supabase
    .from('users')
    .insert({
      clerk_id: 'user_339NGNvs776RVVWRdLkI1HbY7Y6',
      organization_id: cosmicOrg.id,
      email: 'ashtonmedina22@gmail.com',
      first_name: 'Ashton',
      last_name: 'Medina',
      role: 'owner',
      permissions: {
        can_manage_organization: true,
        can_manage_users: true,
        can_manage_events: true,
        can_access_all_organizations: true,
        master_admin: true
      }
    })
    .select('id')
    .single();
  
  if (adminError && !adminError.message.includes('duplicate')) {
    console.error('❌ Error creating admin user:', adminError);
  } else if (adminUser) {
    console.log('✅ Master admin user created');
  }
  
  // Create Party Time Texas user if organization exists
  if (partyOrg) {
    const { data: partyUser, error: partyError } = await supabase
      .from('users')
      .insert({
        clerk_id: 'user_339gbDa0AgrHZrm4IFR0qdX5RYm',
        organization_id: partyOrg.id,
        email: 'ashton@partytimetexas.com',
        first_name: 'Ashton',
        last_name: 'Medina',
        role: 'owner',
        permissions: {
          can_manage_organization: true,
          can_manage_users: true,
          can_manage_events: true,
          can_manage_nfc_devices: true
        }
      })
      .select('id')
      .single();
    
    if (partyError && !partyError.message.includes('duplicate')) {
      console.error('❌ Error creating Party Time user:', partyError);
    } else if (partyUser) {
      console.log('✅ Party Time Texas user created');
    }
  }
}

async function main() {
  console.log('🔍 Checking Supabase connection...');
  
  try {
    const { data, error } = await supabase
      .from('organizations')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Cannot connect to Supabase:', error.message);
      console.log('');
      console.log('📋 Make sure you have:');
      console.log('1. NEXT_PUBLIC_SUPABASE_URL in .env.local');
      console.log('2. SUPABASE_SERVICE_ROLE_KEY in .env.local');
      process.exit(1);
    }
    
    console.log('✅ Connected to Supabase successfully');
    console.log('');
    
    await setupAdminUser();
    
  } catch (error) {
    console.error('❌ Connection error:', error);
    process.exit(1);
  }
}

main().catch(console.error);
