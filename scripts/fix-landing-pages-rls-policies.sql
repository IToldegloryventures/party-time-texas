-- =====================================================
-- FIX LANDING PAGES RLS POLICIES FOR SUPER ADMIN ACCESS
-- =====================================================
-- This script updates RLS policies to allow Super Admins to access
-- landing pages from ALL organizations while maintaining isolation
-- for regular users

-- Drop existing landing pages policies
DROP POLICY IF EXISTS "lp_select" ON landing_pages;
DROP POLICY IF EXISTS "lp_write" ON landing_pages;

-- Create new landing pages policies with Super Admin support
CREATE POLICY "lp_select"
ON landing_pages
FOR SELECT TO authenticated
USING (
  -- Super Admin can see ALL landing pages
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only see their organization's pages
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
);

CREATE POLICY "lp_write"
ON landing_pages
FOR ALL TO authenticated
USING (
  -- Super Admin can modify ALL landing pages
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only modify their organization's pages
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
)
WITH CHECK (
  -- Super Admin can create pages for ANY organization
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only create pages for their organization
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
);

-- Update landing page scans policies
DROP POLICY IF EXISTS "Landing page scans select scope" ON landing_page_scans;
DROP POLICY IF EXISTS "Landing page scans insert scope" ON landing_page_scans;
DROP POLICY IF EXISTS "Landing page scans update scope" ON landing_page_scans;

CREATE POLICY "lps_select"
ON landing_page_scans
FOR SELECT TO authenticated
USING (
  -- Super Admin can see ALL scan data
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only see their organization's scan data
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
);

CREATE POLICY "lps_insert"
ON landing_page_scans
FOR INSERT TO authenticated
WITH CHECK (
  -- Super Admin can insert scans for ANY organization
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only insert scans for their organization
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
);

-- Update landing page components policies
DROP POLICY IF EXISTS "lpc_select" ON landing_page_components;
DROP POLICY IF EXISTS "lpc_write" ON landing_page_components;

CREATE POLICY "lpc_select"
ON landing_page_components
FOR SELECT TO authenticated
USING (
  page_id IN (
    SELECT id FROM landing_pages
    WHERE (
      -- Super Admin can see components from ALL organizations
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> 'sub')
        AND role = 'super_admin'
      )
      OR
      -- Regular users can only see their organization's components
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> 'sub')
        AND role IN ('owner', 'admin', 'member', 'guest')
      )
    )
  )
);

CREATE POLICY "lpc_write"
ON landing_page_components
FOR ALL TO authenticated
USING (
  page_id IN (
    SELECT id FROM landing_pages
    WHERE (
      -- Super Admin can modify components from ALL organizations
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> 'sub')
        AND role = 'super_admin'
      )
      OR
      -- Regular users can only modify their organization's components
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> 'sub')
        AND role IN ('owner', 'admin', 'member', 'guest')
      )
    )
  )
)
WITH CHECK (
  page_id IN (
    SELECT id FROM landing_pages
    WHERE (
      -- Super Admin can create components for ANY organization
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> 'sub')
        AND role = 'super_admin'
      )
      OR
      -- Regular users can only create components for their organization
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> 'sub')
        AND role IN ('owner', 'admin', 'member', 'guest')
      )
    )
  )
);

-- Update landing page analytics policies
DROP POLICY IF EXISTS "lpa_select" ON landing_page_analytics;
DROP POLICY IF EXISTS "lpa_write" ON landing_page_analytics;

CREATE POLICY "lpa_select"
ON landing_page_analytics
FOR SELECT TO authenticated
USING (
  -- Super Admin can see ALL analytics data
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only see their organization's analytics
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
);

CREATE POLICY "lpa_write"
ON landing_page_analytics
FOR ALL TO authenticated
USING (
  -- Super Admin can modify ALL analytics data
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only modify their organization's analytics
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
)
WITH CHECK (
  -- Super Admin can create analytics for ANY organization
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role = 'super_admin'
  )
  OR
  -- Regular users can only create analytics for their organization
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('owner', 'admin', 'member', 'guest')
  )
);

-- Verification queries
SELECT 'Landing Pages RLS Policies Updated' as status;

-- Check that policies exist
SELECT tablename, policyname, 'Updated' as status
FROM pg_policies
WHERE schemaname='public'
  AND tablename IN ('landing_pages', 'landing_page_scans', 'landing_page_components', 'landing_page_analytics')
  AND policyname LIKE '%select%' OR policyname LIKE '%write%' OR policyname LIKE '%insert%'
ORDER BY tablename, policyname;
