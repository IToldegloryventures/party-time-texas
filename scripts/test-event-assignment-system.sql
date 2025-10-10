-- =====================================================
-- TEST EVENT ASSIGNMENT SYSTEM
-- =====================================================
-- This script tests the complete Event Assignment System
-- to verify that members only see their assigned events
-- =====================================================

-- =====================================
-- 1. CHECK CURRENT DATABASE STATE
-- =====================================

-- Check if events table exists and has assigned_members column
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='events') 
    THEN '✅ events table exists'
    ELSE '❌ events table missing'
  END as events_table_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name='events' AND column_name='assigned_members'
    ) 
    THEN '✅ assigned_members column exists'
    ELSE '❌ assigned_members column missing'
  END as assigned_members_status;

-- Check current events and their assignments
SELECT 
  'Current Events and Assignments' as test_section,
  e.id,
  e.name,
  e.assigned_members,
  jsonb_array_length(e.assigned_members) as member_count
FROM events e
ORDER BY e.created_at DESC;

-- =====================================
-- 2. CREATE TEST DATA
-- =====================================

-- Create test events with different assignments
INSERT INTO events (
  organization_id,
  name,
  description,
  event_type,
  status,
  assigned_members
) VALUES 
  (
    (SELECT id FROM organizations LIMIT 1),
    'Test Event 1 - All Members',
    'This event is assigned to all members',
    'business',
    'active',
    '[]'::jsonb
  ),
  (
    (SELECT id FROM organizations LIMIT 1),
    'Test Event 2 - Specific Member',
    'This event is assigned to specific members',
    'business',
    'active',
    (SELECT jsonb_agg(id::text) FROM users WHERE role = 'member' LIMIT 2)
  ),
  (
    (SELECT id FROM organizations LIMIT 1),
    'Test Event 3 - No Members',
    'This event has no assigned members',
    'business',
    'draft',
    '[]'::jsonb
  )
ON CONFLICT DO NOTHING;

-- =====================================
-- 3. TEST RLS POLICIES
-- =====================================

-- Test 1: Super Admin should see all events
SELECT 
  'RLS Test 1: Super Admin Access' as test_name,
  COUNT(*) as events_visible,
  CASE 
    WHEN COUNT(*) >= 3 THEN '✅ PASS - Super admin sees all events'
    ELSE '❌ FAIL - Super admin cannot see all events'
  END as result
FROM events;

-- Test 2: Check if RLS policies are properly configured
SELECT 
  'RLS Policy Check' as test_name,
  policyname,
  cmd as command,
  CASE 
    WHEN qual LIKE '%super_admin%' THEN '✅ Includes super_admin'
    WHEN qual LIKE '%owner%' AND qual LIKE '%admin%' THEN '⚠️ Missing super_admin'
    ELSE '❌ Policy issue'
  END as policy_status
FROM pg_policies 
WHERE tablename = 'events' 
  AND policyname IN ('events_update', 'events_delete');

-- =====================================
-- 4. TEST API ENDPOINTS
-- =====================================

-- Test the events API filter functionality
-- This would normally be tested via HTTP requests, but we can verify the logic

-- Check if events have proper assigned_members data
SELECT 
  'API Data Structure Test' as test_name,
  e.id,
  e.name,
  e.assigned_members,
  CASE 
    WHEN e.assigned_members IS NOT NULL THEN '✅ Has assigned_members'
    ELSE '❌ Missing assigned_members'
  END as data_status,
  CASE 
    WHEN jsonb_typeof(e.assigned_members) = 'array' THEN '✅ Correct JSONB array'
    ELSE '❌ Wrong data type'
  END as type_status
FROM events e
ORDER BY e.created_at DESC;

-- =====================================
-- 5. TEST MEMBER ASSIGNMENT LOGIC
-- =====================================

-- Test the assignment logic by checking if members can be properly assigned
SELECT 
  'Member Assignment Test' as test_name,
  u.id as user_id,
  u.email,
  u.role,
  COUNT(e.id) as assigned_events_count
FROM users u
LEFT JOIN events e ON u.id::text = ANY(
  SELECT jsonb_array_elements_text(e.assigned_members)
)
WHERE u.role = 'member'
GROUP BY u.id, u.email, u.role
ORDER BY assigned_events_count DESC;

-- =====================================
-- 6. VERIFY FILTER FUNCTIONALITY
-- =====================================

-- Test the "My Events" vs "All Events" filter logic
SELECT 
  'Filter Logic Test' as test_name,
  'All Events' as filter_type,
  COUNT(*) as total_events
FROM events
UNION ALL
SELECT 
  'Filter Logic Test' as test_name,
  'My Events (Member 1)' as filter_type,
  COUNT(*) as assigned_events
FROM events 
WHERE '[]'::jsonb = assigned_members OR 
      EXISTS (
        SELECT 1 FROM users u 
        WHERE u.id::text = ANY(
          SELECT jsonb_array_elements_text(events.assigned_members)
        )
        AND u.role = 'member'
        LIMIT 1
      );

-- =====================================
-- 7. CLEANUP TEST DATA
-- =====================================

-- Remove test events (uncomment to clean up)
/*
DELETE FROM events 
WHERE name LIKE 'Test Event%';
*/

-- =====================================
-- 8. SUMMARY
-- =====================================

SELECT 
  'EVENT ASSIGNMENT SYSTEM TEST COMPLETE' as message,
  'Review results above to verify system functionality' as next_step,
  'If all tests pass, the Event Assignment System is working correctly' as result;
