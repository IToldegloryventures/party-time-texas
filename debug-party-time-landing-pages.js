const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function debugPartyTimeLandingPages() {
  try {
    console.log('Debugging Party Time Landing Pages...\n');
    
    // Get Party Time user
    const { data: partyTimeUser, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'ashton@partytimetexas.com')
      .single();
    
    if (userError || !partyTimeUser) {
      console.error('❌ Party Time user not found:', userError);
      return;
    }
    
    console.log('✅ Party Time User:', {
      id: partyTimeUser.id,
      email: partyTimeUser.email,
      role: partyTimeUser.role,
      organization_id: partyTimeUser.organization_id
    });

    // Get Party Time organization
    const { data: partyTimeOrg, error: orgError } = await supabase
      .from('organizations')
      .select('*')
      .eq('id', partyTimeUser.organization_id)
      .single();
    
    if (orgError || !partyTimeOrg) {
      console.error('❌ Party Time organization not found:', orgError);
      return;
    }
    
    console.log('\n✅ Party Time Organization:', {
      id: partyTimeOrg.id,
      name: partyTimeOrg.name,
      slug: partyTimeOrg.slug,
      plan_type: partyTimeOrg.plan_type,
      has_landing_page_builder: partyTimeOrg.has_landing_page_builder
    });

    // Check landing pages for Party Time
    console.log('\n🔍 Checking landing pages for Party Time...');
    const { data: landingPages, error: lpError } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('organization_id', partyTimeUser.organization_id);
    
    if (lpError) {
      console.error('❌ Error fetching landing pages:', lpError);
      return;
    }
    
    console.log(`\n📄 Found ${landingPages.length} landing pages for Party Time:`);
    landingPages.forEach((page, index) => {
      console.log(`  ${index + 1}. ${page.name || 'Unnamed'} (${page.slug})`);
      console.log(`     Status: ${page.status || 'unknown'}`);
      console.log(`     Published: ${page.is_published ? 'Yes' : 'No'}`);
      console.log(`     Created: ${page.created_at}`);
      console.log(`     Scans: ${page.scan_count || 0}`);
      console.log('');
    });

    // Test API logic for Party Time
    console.log('🧪 Testing API logic for Party Time...');
    
    // Simulate the API call logic
    const apiResponse = {
      pages: landingPages.map(page => ({
        id: page.id,
        name: page.name,
        url: `https://ash-cosmic-portals-saa-m909jpcoz-ashton-medinas-projects.vercel.app/landing/${page.slug}`,
        status: page.is_published ? 'published' : 'draft',
        scans: page.scan_count || 0,
        created_at: page.created_at,
      }))
    };
    
    console.log('API Response would be:', JSON.stringify(apiResponse, null, 2));

    // Test permission checks
    console.log('\n🔐 Testing permission checks...');
    const canManageLandingPages = ['super_admin', 'owner', 'admin', 'member'].includes(partyTimeUser.role);
    const isSuperAdmin = partyTimeUser.role === 'super_admin';
    const hasBuilderAddon = partyTimeOrg.has_landing_page_builder || false;
    const canCreateEdit = isSuperAdmin || hasBuilderAddon;

    console.log('Permission results:', {
      canManageLandingPages: canManageLandingPages,
      isSuperAdmin: isSuperAdmin,
      hasBuilderAddon: hasBuilderAddon,
      canCreateEdit: canCreateEdit
    });

    console.log('\n=== CONCLUSION ===');
    if (landingPages.length === 0) {
      console.log('❌ Party Time has NO landing pages - that\'s why nothing shows');
    } else {
      console.log('✅ Party Time has landing pages but they might not be displaying correctly');
    }
    
    if (canCreateEdit) {
      console.log('✅ Party Time should be able to create landing pages');
    } else {
      console.log('❌ Party Time cannot create landing pages');
    }

  } catch (error) {
    console.error('❌ Script error:', error);
  }
}

debugPartyTimeLandingPages();
