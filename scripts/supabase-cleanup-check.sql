-- =====================================================
-- SUPABASE CLEANUP & CONSISTENCY CHECK
-- =====================================================
-- Run this to check for inconsistencies and clean up
-- old/outdated RLS policies before proceeding
-- =====================================================

-- =====================================
-- 1. CHECK FOR ORPHANED RLS POLICIES
-- =====================================
-- This query shows all RLS policies that might need updating
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
-- Check if any users have roles that don't match the 5-tier system
SELECT 
  id,
  email,
  role,
  CASE 
    WHEN role IN ('super_admin', 'owner', 'admin', 'member', 'guest') THEN '✅ Valid Role'
    ELSE '⚠️ INVALID ROLE - Needs fixing'
  END as role_status,
  organization_id,
  created_at
FROM users
ORDER BY role, created_at DESC;

-- =====================================
-- 3. DROP OLD/OUTDATED RLS POLICIES
-- =====================================
-- These policies will be recreated by add-events-tables-fixed.sql
-- Only run this section if you see policies that need updating above

-- UNCOMMENT BELOW TO DROP OLD POLICIES (Run add-events-tables-fixed.sql after)
/*
DROP POLICY IF EXISTS "events_select" ON events;
DROP POLICY IF EXISTS "events_insert" ON events;
DROP POLICY IF EXISTS "events_update" ON events;
DROP POLICY IF EXISTS "events_delete" ON events;
DROP POLICY IF EXISTS "attendees_select" ON attendees;
DROP POLICY IF EXISTS "attendees_write" ON attendees;
DROP POLICY IF EXISTS "nfc_devices_select" ON nfc_devices;
DROP POLICY IF EXISTS "nfc_devices_write" ON nfc_devices;
DROP POLICY IF EXISTS "nfc_scans_select" ON nfc_scans;
DROP POLICY IF EXISTS "nfc_scans_write" ON nfc_scans;
DROP POLICY IF EXISTS "content_bundles_select" ON content_bundles;
DROP POLICY IF EXISTS "content_bundles_write" ON content_bundles;
DROP POLICY IF EXISTS "analytics_events_select" ON analytics_events;
DROP POLICY IF EXISTS "analytics_events_write" ON analytics_events;
*/

-- =====================================
-- 4. CHECK TABLE STRUCTURE
-- =====================================
-- Verify all important tables exist and have correct columns
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
-- 5. CHECK FOR EVENTS WITHOUT assigned_members
-- =====================================
-- Check if events table has the assigned_members column
SELECT 
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name='events' AND column_name='assigned_members'
    ) 
    THEN '✅ assigned_members column exists'
    ELSE '⚠️ MISSING - Run add-events-tables-fixed.sql'
  END as status;

-- =====================================
-- 6. CHECK FOR TASKS TABLE
-- =====================================
-- Check if tasks management tables exist
SELECT 
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='tasks'
    ) 
    THEN '✅ tasks table exists'
    ELSE '⚠️ MISSING - Run add-tasks-tables.sql'
  END as tasks_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='task_notes'
    ) 
    THEN '✅ task_notes table exists'
    ELSE '⚠️ MISSING - Run add-tasks-tables.sql'
  END as task_notes_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='task_attachments'
    ) 
    THEN '✅ task_attachments table exists'
    ELSE '⚠️ MISSING - Run add-tasks-tables.sql'
  END as task_attachments_status,
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.tables 
      WHERE table_schema='public' AND table_name='task_templates'
    ) 
    THEN '✅ task_templates table exists'
    ELSE '⚠️ MISSING - Run add-tasks-tables.sql'
  END as task_templates_status;

-- =====================================
-- 7. SUMMARY
-- =====================================
SELECT 
  'CLEANUP CHECK COMPLETE' as message,
  'Review the results above to identify any issues' as next_step,
  'If you see warnings, run the suggested SQL scripts' as action_required;

