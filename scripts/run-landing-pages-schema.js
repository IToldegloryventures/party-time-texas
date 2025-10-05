/**
 * Run Landing Pages Schema Setup
 * Executes the SQL schema for landing pages in Supabase
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

async function runSchema() {
  try {
    console.log('🚀 Setting up landing pages database schema...');
    
    // Read the SQL schema file
    const schemaPath = path.join(__dirname, 'setup-landing-pages-schema.sql');
    const sql = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('📄 SQL schema loaded, executing...');
    
    // Execute the SQL schema
    const { data, error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('❌ Error executing schema:', error);
      
      // Try alternative approach - execute SQL directly
      console.log('🔄 Trying alternative approach...');
      
      // Split SQL into individual statements and execute them
      const statements = sql
        .split(';')
        .map(stmt => stmt.trim())
        .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
      
      for (const statement of statements) {
        try {
          console.log(`Executing: ${statement.substring(0, 50)}...`);
          const { error: stmtError } = await supabase.rpc('exec_sql', { sql: statement });
          if (stmtError) {
            console.warn(`⚠️  Warning for statement: ${stmtError.message}`);
          }
        } catch (err) {
          console.warn(`⚠️  Warning: ${err.message}`);
        }
      }
    } else {
      console.log('✅ Schema executed successfully!');
    }
    
    // Verify tables were created
    console.log('🔍 Verifying tables...');
    
    const tables = [
      'landing_pages',
      'landing_page_scans', 
      'page_templates',
      'landing_page_components',
      'landing_page_analytics'
    ];
    
    for (const table of tables) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .limit(1);
      
      if (error) {
        console.log(`❌ Table ${table}: ${error.message}`);
      } else {
        console.log(`✅ Table ${table}: OK`);
      }
    }
    
    // Check if sample data was inserted
    const { data: templates, error: templatesError } = await supabase
      .from('page_templates')
      .select('name, category')
      .limit(5);
    
    if (templatesError) {
      console.log('❌ Page templates not found');
    } else {
      console.log('✅ Page templates created:');
      templates.forEach(template => {
        console.log(`   - ${template.name} (${template.category})`);
      });
    }
    
    const { data: pages, error: pagesError } = await supabase
      .from('landing_pages')
      .select('name, slug, status')
      .limit(5);
    
    if (pagesError) {
      console.log('❌ Landing pages not found');
    } else {
      console.log('✅ Landing pages created:');
      pages.forEach(page => {
        console.log(`   - ${page.name} (${page.slug}) - ${page.status}`);
      });
    }
    
    console.log('🎉 Landing pages schema setup complete!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Test the landing page builder at /dashboard/landing-pages');
    console.log('2. Create a new landing page');
    console.log('3. Test the AI content generation');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Check if we have the exec_sql function, if not, provide manual instructions
async function checkExecSqlFunction() {
  try {
    const { data, error } = await supabase.rpc('exec_sql', { sql: 'SELECT 1' });
    if (error && error.message.includes('function exec_sql')) {
      console.log('⚠️  exec_sql function not available');
      console.log('');
      console.log('📋 Manual setup required:');
      console.log('1. Go to Supabase Dashboard → SQL Editor');
      console.log('2. Copy and paste the contents of scripts/setup-landing-pages-schema.sql');
      console.log('3. Click "Run" to execute the schema');
      console.log('');
      console.log('The SQL file contains all the necessary tables, indexes, and sample data.');
      return false;
    }
    return true;
  } catch (error) {
    console.log('⚠️  exec_sql function not available');
    return false;
  }
}

async function main() {
  console.log('🔍 Checking Supabase connection...');
  
  const hasExecSql = await checkExecSqlFunction();
  
  if (hasExecSql) {
    await runSchema();
  } else {
    console.log('✅ Connection verified, manual setup required');
  }
}

main().catch(console.error);
