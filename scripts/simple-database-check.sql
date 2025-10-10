-- Simple check to see what tables exist in your database
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Check if users table exists and has any data
SELECT COUNT(*) as user_count FROM users;

-- Check if events table exists
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='events') 
    THEN 'events table EXISTS'
    ELSE 'events table MISSING'
  END as events_status;

-- Check if tasks table exists  
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='tasks') 
    THEN 'tasks table EXISTS'
    ELSE 'tasks table MISSING'
  END as tasks_status;
