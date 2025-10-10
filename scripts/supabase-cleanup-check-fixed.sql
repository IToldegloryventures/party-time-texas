-- =====================================================
-- SUPABASE CLEANUP & CONSISTENCY CHECK (FIXED)
-- =====================================================
-- Run this to check for inconsistencies and clean up
-- old/outdated RLS policies before proceeding
-- =====================================================

-- =====================================
-- 1. CHECK FOR RLS POLICIES
-- =====================================
SELECT 
  schemaname,
  tablename,
  policyname,
  cmd as command,
  qual as using_expression,
  with_check as with_check_expression
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- =====================================
-- 2. CHECK FOR USERS WITH OLD ROLES
-- =====================================
SELECT 
  id,
  email,
  role,
  CASE 
    WHEN role IN ('super_admin', 'owner', 'admin', 'member', 'guest') THEN 'Valid Role'
    ELSE 'INVALID ROLE - Needs fixing'
  END as role_status,
  organization_id,
  created_at
FROM users
ORDER BY role, created_at DESC;

-- =====================================
-- 3. CHECK TABLE STRUCTURE
-- =====================================
SELECT 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN ('users', 'organizations', 'events', 'tasks', 'attendees', 'nfc_devices')
ORDER BY table_name, ordinal_position;

-- =====================================
-- 4. CHECK FOR EVENTS WITHOUT assigned_members
-- =====================================
SELECT 
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name='events' AND column_name='assigned_members'
    ) 
    THEN 'assigned_members column exists'
    ELSE 'MISSING - Run add-events-tables-fixed.sql'
  END as status;

-- =====================================
-- 5. CHECK FOR TASKS TABLE
-- =====================================
SELECT 
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='tasks'
    ) 
    THEN 'tasks table exists'
    ELSE 'MISSING - Run add-tasks-tables.sql'
  END as tasks_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='task_notes'
    ) 
    THEN 'task_notes table exists'
    ELSE 'MISSING - Run add-tasks-tables.sql'
  END as task_notes_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='task_attachments'
    ) 
    THEN 'task_attachments table exists'
    ELSE 'MISSING - Run add-tasks-tables.sql'
  END as task_attachments_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='task_templates'
    ) 
    THEN 'task_templates table exists'
    ELSE 'MISSING - Run add-tasks-tables.sql'
  END as task_templates_status;

-- =====================================
-- 6. SUMMARY
-- =====================================
SELECT 
  'CLEANUP CHECK COMPLETE' as message,
  'Review the results above to identify any issues' as next_step,
  'If you see warnings, run the suggested SQL scripts' as action_required;
