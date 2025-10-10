-- =====================================================
-- UPDATE TO 5-TIER ROLE SYSTEM
-- =====================================================
-- This script updates all RLS policies to support the
-- 5-tier role system: super_admin, owner, admin, member, guest
-- =====================================================

-- =====================================
-- 1. DROP OLD EVENT RLS POLICIES
-- =====================================
DROP POLICY IF EXISTS "events_select" ON events;
DROP POLICY IF EXISTS "events_insert" ON events;
DROP POLICY IF EXISTS "events_update" ON events;
DROP POLICY IF EXISTS "events_delete" ON events;

-- =====================================
-- 2. CREATE NEW EVENT RLS POLICIES
-- =====================================

-- SELECT: Users can see events in their org OR events they're assigned to
CREATE POLICY "events_select"
ON events
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  OR
  -- Members can see events they're assigned to
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.clerk_id = (auth.jwt() ->> 'sub')
    AND u.id::text = ANY(
      SELECT jsonb_array_elements_text(assigned_members)
    )
  )
);

-- INSERT: Users can create events in their org
CREATE POLICY "events_insert"
ON events
FOR INSERT TO authenticated
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- UPDATE: Only super_admin, owner, and admin can update events
CREATE POLICY "events_update"
ON events
FOR UPDATE TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('super_admin', 'owner', 'admin')
  )
);

-- DELETE: Only super_admin, owner, and admin can delete events
CREATE POLICY "events_delete"
ON events
FOR DELETE TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users 
    WHERE clerk_id = (auth.jwt() ->> 'sub')
    AND role IN ('super_admin', 'owner', 'admin')
  )
);

-- =====================================
-- 3. UPDATE TASKS RLS POLICIES (if they exist)
-- =====================================

-- Only run if tasks table exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'tasks') THEN
    -- Drop old policies
    DROP POLICY IF EXISTS "tasks_select" ON tasks;
    DROP POLICY IF EXISTS "tasks_insert" ON tasks;
    DROP POLICY IF EXISTS "tasks_update" ON tasks;
    DROP POLICY IF EXISTS "tasks_delete" ON tasks;
    
    -- Create new policies with super_admin support
    
    -- SELECT: Users can see tasks in their org OR tasks assigned to them
    EXECUTE 'CREATE POLICY "tasks_select"
    ON tasks
    FOR SELECT TO authenticated
    USING (
      organization_id IN (
        SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> ''sub'')
      )
      OR
      assigned_to = (
        SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> ''sub'')
      )
    )';
    
    -- INSERT: super_admin, owner, and admin can create tasks
    EXECUTE 'CREATE POLICY "tasks_insert"
    ON tasks
    FOR INSERT TO authenticated
    WITH CHECK (
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> ''sub'')
        AND role IN (''super_admin'', ''owner'', ''admin'')
      )
    )';
    
    -- UPDATE: super_admin, owner, admin can update all tasks; members can update assigned tasks
    EXECUTE 'CREATE POLICY "tasks_update"
    ON tasks
    FOR UPDATE TO authenticated
    USING (
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> ''sub'')
        AND role IN (''super_admin'', ''owner'', ''admin'')
      )
      OR
      (
        assigned_to = (SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> ''sub''))
        AND (SELECT role FROM users WHERE clerk_id = (auth.jwt() ->> ''sub'')) = ''member''
      )
    )';
    
    -- DELETE: Only super_admin, owner, and admin can delete tasks
    EXECUTE 'CREATE POLICY "tasks_delete"
    ON tasks
    FOR DELETE TO authenticated
    USING (
      organization_id IN (
        SELECT organization_id FROM users 
        WHERE clerk_id = (auth.jwt() ->> ''sub'')
        AND role IN (''super_admin'', ''owner'', ''admin'')
      )
    )';
    
  END IF;
END $$;

-- =====================================
-- 4. VERIFICATION
-- =====================================

-- Show updated policies
SELECT 
  tablename,
  policyname,
  cmd as command
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('events', 'tasks')
ORDER BY tablename, policyname;

-- Summary
SELECT 
  '✅ 5-TIER ROLE SYSTEM UPDATE COMPLETE' as message,
  'All RLS policies now support: super_admin, owner, admin, member, guest' as details;

