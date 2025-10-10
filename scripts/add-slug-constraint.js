const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addSlugConstraint() {
  try {
    console.log('Adding unique constraint on landing_pages.slug...');
    
    // First, let's check if we have any duplicates
    const { data: allPages, error: fetchError } = await supabase
      .from('landing_pages')
      .select('slug');
    
    if (fetchError) {
      console.error('Error fetching pages:', fetchError);
      return;
    }
    
    // Count slugs
    const slugCount = {};
    allPages.forEach(page => {
      slugCount[page.slug] = (slugCount[page.slug] || 0) + 1;
    });
    
    const duplicates = Object.entries(slugCount).filter(([slug, count]) => count > 1);
    
    if (duplicates.length > 0) {
      console.error('Cannot add constraint: Found duplicate slugs:');
      duplicates.forEach(([slug, count]) => {
        console.error(`- ${slug}: ${count} instances`);
      });
      return;
    }
    
    console.log('✓ No duplicate slugs found, constraint can be added');
    
    // Try to add constraint using a direct SQL approach
    // Note: This might not work with Supabase client, but let's try
    const { data, error } = await supabase
      .from('landing_pages')
      .select('slug')
      .limit(0); // Just test connection
    
    if (error) {
      console.error('Database connection error:', error);
      return;
    }
    
    console.log('✓ Database connection working');
    console.log('\n=== MANUAL STEP REQUIRED ===');
    console.log('Please run this SQL in your Supabase SQL Editor:');
    console.log('');
    console.log('ALTER TABLE landing_pages ADD CONSTRAINT landing_pages_slug_unique UNIQUE (slug);');
    console.log('');
    console.log('Then run this to verify:');
    console.log('SELECT conname, contype FROM pg_constraint WHERE conrelid = \'landing_pages\'::regclass AND conname = \'landing_pages_slug_unique\';');
    
  } catch (error) {
    console.error('Script error:', error.message);
  }
}

addSlugConstraint();
