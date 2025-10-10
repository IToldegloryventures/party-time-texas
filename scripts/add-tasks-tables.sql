-- =====================================================
-- ADD TASKS MANAGEMENT SYSTEM TO COSMIC PORTALS
-- =====================================================
-- This script adds comprehensive task management functionality

-- =====================================
-- 1) CREATE TASKS TABLE
-- =====================================

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'to_do' NOT NULL,
  priority VARCHAR(20) DEFAULT 'medium' NOT NULL,
  assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
  created_by UUID REFERENCES users(id) ON DELETE SET NULL NOT NULL,
  due_date TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_status CHECK (status IN ('to_do', 'in_progress', 'on_hold', 'completed', 'cancelled')),
  CONSTRAINT valid_priority CHECK (priority IN ('low', 'medium', 'high', 'urgent'))
);

-- =====================================
-- 2) CREATE TASK NOTES TABLE
-- =====================================

CREATE TABLE IF NOT EXISTS task_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  note_type VARCHAR(50) DEFAULT 'comment' NOT NULL,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_note_type CHECK (note_type IN ('comment', 'status_change', 'assignment_change', 'system'))
);

-- =====================================
-- 3) CREATE TASK ATTACHMENTS TABLE
-- =====================================

CREATE TABLE IF NOT EXISTS task_attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE NOT NULL,
  uploaded_by UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  file_type VARCHAR(100),
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================
-- 4) CREATE TASK TEMPLATES TABLE
-- =====================================

CREATE TABLE IF NOT EXISTS task_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  template_data JSONB NOT NULL, -- Array of task objects for bulk creation
  category VARCHAR(100), -- 'event_planning', 'business_operations', 'custom'
  is_public BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================
-- 5) CREATE INDEXES FOR PERFORMANCE
-- =====================================

-- Tasks indexes
CREATE INDEX IF NOT EXISTS idx_tasks_organization_id ON tasks(organization_id);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned_to ON tasks(assigned_to);
CREATE INDEX IF NOT EXISTS idx_tasks_created_by ON tasks(created_by);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at);

-- Task notes indexes
CREATE INDEX IF NOT EXISTS idx_task_notes_task_id ON task_notes(task_id);
CREATE INDEX IF NOT EXISTS idx_task_notes_user_id ON task_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_task_notes_created_at ON task_notes(created_at);

-- Task attachments indexes
CREATE INDEX IF NOT EXISTS idx_task_attachments_task_id ON task_attachments(task_id);
CREATE INDEX IF NOT EXISTS idx_task_attachments_uploaded_by ON task_attachments(uploaded_by);

-- Task templates indexes
CREATE INDEX IF NOT EXISTS idx_task_templates_organization_id ON task_templates(organization_id);
CREATE INDEX IF NOT EXISTS idx_task_templates_category ON task_templates(category);
CREATE INDEX IF NOT EXISTS idx_task_templates_is_public ON task_templates(is_public);

-- =====================================
-- 6) ENABLE ROW LEVEL SECURITY
-- =====================================

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_templates ENABLE ROW LEVEL SECURITY;

-- =====================================
-- 7) CREATE RLS POLICIES
-- =====================================

-- Tasks policies
DROP POLICY IF EXISTS "tasks_select" ON tasks;
DROP POLICY IF EXISTS "tasks_insert" ON tasks;
DROP POLICY IF EXISTS "tasks_update" ON tasks;
DROP POLICY IF EXISTS "tasks_delete" ON tasks;

CREATE POLICY "tasks_select"
ON tasks
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  OR
  assigned_to IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "tasks_insert"
ON tasks
FOR INSERT TO authenticated
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  AND
  created_by IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "tasks_update"
ON tasks
FOR UPDATE TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "tasks_delete"
ON tasks
FOR DELETE TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Task notes policies
DROP POLICY IF EXISTS "task_notes_select" ON task_notes;
DROP POLICY IF EXISTS "task_notes_insert" ON task_notes;
DROP POLICY IF EXISTS "task_notes_update" ON task_notes;
DROP POLICY IF EXISTS "task_notes_delete" ON task_notes;

CREATE POLICY "task_notes_select"
ON task_notes
FOR SELECT TO authenticated
USING (
  task_id IN (
    SELECT id FROM tasks WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
    )
  )
);

CREATE POLICY "task_notes_insert"
ON task_notes
FOR INSERT TO authenticated
WITH CHECK (
  user_id IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  AND
  task_id IN (
    SELECT id FROM tasks WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
    )
  )
);

CREATE POLICY "task_notes_update"
ON task_notes
FOR UPDATE TO authenticated
USING (
  user_id IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "task_notes_delete"
ON task_notes
FOR DELETE TO authenticated
USING (
  user_id IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Task attachments policies
DROP POLICY IF EXISTS "task_attachments_select" ON task_attachments;
DROP POLICY IF EXISTS "task_attachments_insert" ON task_attachments;
DROP POLICY IF EXISTS "task_attachments_update" ON task_attachments;
DROP POLICY IF EXISTS "task_attachments_delete" ON task_attachments;

CREATE POLICY "task_attachments_select"
ON task_attachments
FOR SELECT TO authenticated
USING (
  task_id IN (
    SELECT id FROM tasks WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
    )
  )
);

CREATE POLICY "task_attachments_insert"
ON task_attachments
FOR INSERT TO authenticated
WITH CHECK (
  uploaded_by IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  AND
  task_id IN (
    SELECT id FROM tasks WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
    )
  )
);

CREATE POLICY "task_attachments_update"
ON task_attachments
FOR UPDATE TO authenticated
USING (
  uploaded_by IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "task_attachments_delete"
ON task_attachments
FOR DELETE TO authenticated
USING (
  uploaded_by IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Task templates policies
DROP POLICY IF EXISTS "task_templates_select" ON task_templates;
DROP POLICY IF EXISTS "task_templates_insert" ON task_templates;
DROP POLICY IF EXISTS "task_templates_update" ON task_templates;
DROP POLICY IF EXISTS "task_templates_delete" ON task_templates;

CREATE POLICY "task_templates_select"
ON task_templates
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  OR is_public = TRUE
);

CREATE POLICY "task_templates_insert"
ON task_templates
FOR INSERT TO authenticated
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
  AND
  created_by IN (
    SELECT id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "task_templates_update"
ON task_templates
FOR UPDATE TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "task_templates_delete"
ON task_templates
FOR DELETE TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- =====================================
-- 8) ADD UPDATED_AT TRIGGERS
-- =====================================

-- Tasks trigger
DROP TRIGGER IF EXISTS update_tasks_updated_at ON tasks;
CREATE TRIGGER update_tasks_updated_at
  BEFORE UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Task templates trigger
DROP TRIGGER IF EXISTS update_task_templates_updated_at ON task_templates;
CREATE TRIGGER update_task_templates_updated_at
  BEFORE UPDATE ON task_templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================
-- 9) INSERT DEFAULT TASK TEMPLATES
-- =====================================

-- Event Planning Template
INSERT INTO task_templates (organization_id, name, description, template_data, category, created_by)
SELECT 
  o.id,
  'Event Planning Checklist',
  'Complete checklist for planning any event',
  '[
    {"title": "Book venue", "description": "Reserve and confirm event venue", "priority": "high"},
    {"title": "Send invitations", "description": "Create and send event invitations", "priority": "high"},
    {"title": "Order catering", "description": "Arrange food and beverage service", "priority": "medium"},
    {"title": "Setup decorations", "description": "Decorate venue according to theme", "priority": "medium"},
    {"title": "Test audio/visual", "description": "Ensure all AV equipment works properly", "priority": "high"},
    {"title": "Prepare check-in station", "description": "Setup attendee registration area", "priority": "medium"},
    {"title": "Final walkthrough", "description": "Complete venue walkthrough day before", "priority": "high"}
  ]'::JSONB,
  'event_planning',
  u.id
FROM organizations o
CROSS JOIN users u
WHERE u.role IN ('super_admin', 'owner', 'admin')
  AND u.organization_id = o.id
LIMIT 1;

-- Business Operations Template
INSERT INTO task_templates (organization_id, name, description, template_data, category, created_by)
SELECT 
  o.id,
  'Business Operations Checklist',
  'Standard business operation tasks',
  '[
    {"title": "Update CRM", "description": "Enter new leads and update existing records", "priority": "high"},
    {"title": "Follow up with prospects", "description": "Contact potential customers", "priority": "high"},
    {"title": "Prepare presentations", "description": "Create client presentation materials", "priority": "medium"},
    {"title": "Update website content", "description": "Refresh website with latest information", "priority": "medium"},
    {"title": "Review analytics", "description": "Analyze business performance metrics", "priority": "low"},
    {"title": "Team meeting prep", "description": "Prepare agenda and materials for team meeting", "priority": "medium"}
  ]'::JSONB,
  'business_operations',
  u.id
FROM organizations o
CROSS JOIN users u
WHERE u.role IN ('super_admin', 'owner', 'admin')
  AND u.organization_id = o.id
LIMIT 1;

-- =====================================
-- 10) VERIFICATION
-- =====================================

-- Verify tables were created
SELECT 
  table_name, 
  'Ready' as status
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('tasks', 'task_notes', 'task_attachments', 'task_templates')
ORDER BY table_name;

-- Verify RLS is enabled
SELECT 
  tablename,
  rowsecurity as rls_enabled,
  'RLS Active' as status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('tasks', 'task_notes', 'task_attachments', 'task_templates')
ORDER BY tablename;

-- Verify key indexes exist
SELECT 
  tablename,
  indexname,
  'Index Created' as status
FROM pg_indexes
WHERE schemaname = 'public'
  AND (
    indexname LIKE 'idx_tasks_%' 
    OR indexname LIKE 'idx_task_%'
  )
ORDER BY tablename, indexname;

-- Success message
SELECT 'Tasks system setup complete! Database updated successfully.' as message;

-- Show next steps
SELECT 'Next: Build Task Management API and UI components' as next_step;
