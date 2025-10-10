-- =====================================================
-- ADD EVENTS SYSTEM TO COSMIC PORTALS (FIXED)
-- =====================================================
-- This script safely adds/updates all events-related tables
-- Handles both new installations and existing databases

-- =====================================
-- 1) ADD/UPDATE EVENTS TABLE
-- =====================================

-- First, create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  event_type VARCHAR(50) NOT NULL,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  location VARCHAR(255),
  status VARCHAR(50) DEFAULT 'draft',
  settings JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Then, add the assigned_members column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='events' AND column_name='assigned_members'
  ) THEN
    ALTER TABLE events ADD COLUMN assigned_members JSONB DEFAULT '[]'::JSONB;
  END IF;
END $$;

-- Add indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_events_organization_id ON events(organization_id);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date);

-- Add GIN index for assigned_members JSON array searching (now safe)
CREATE INDEX IF NOT EXISTS idx_events_assigned_members ON events USING GIN (assigned_members);

-- =====================================
-- 2) ADD/UPDATE ATTENDEES TABLE
-- =====================================
CREATE TABLE IF NOT EXISTS attendees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  check_in_time TIMESTAMPTZ,
  check_out_time TIMESTAMPTZ,
  photo_url TEXT,
  plus_ones INTEGER DEFAULT 0,
  meal_choice VARCHAR(100),
  dietary_restrictions TEXT,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_attendees_event_id ON attendees(event_id);
CREATE INDEX IF NOT EXISTS idx_attendees_organization_id ON attendees(organization_id);
CREATE INDEX IF NOT EXISTS idx_attendees_email ON attendees(email);

-- =====================================
-- 3) ADD/UPDATE NFC DEVICES TABLE
-- =====================================
CREATE TABLE IF NOT EXISTS nfc_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  device_id VARCHAR(255) UNIQUE NOT NULL,
  device_type VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  last_scan TIMESTAMPTZ,
  scan_count INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add landing_page_id column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='nfc_devices' AND column_name='landing_page_id'
  ) THEN
    ALTER TABLE nfc_devices ADD COLUMN landing_page_id UUID REFERENCES landing_pages(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_nfc_devices_organization_id ON nfc_devices(organization_id);
CREATE INDEX IF NOT EXISTS idx_nfc_devices_device_id ON nfc_devices(device_id);
CREATE INDEX IF NOT EXISTS idx_nfc_devices_status ON nfc_devices(status);
CREATE INDEX IF NOT EXISTS idx_nfc_devices_landing_page_id ON nfc_devices(landing_page_id);

-- =====================================
-- 4) ADD/UPDATE NFC SCANS TABLE
-- =====================================
CREATE TABLE IF NOT EXISTS nfc_scans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  device_id UUID REFERENCES nfc_devices(id) ON DELETE CASCADE,
  scan_type VARCHAR(50) NOT NULL,
  ip_address INET,
  user_agent TEXT,
  location_data JSONB,
  utm_params JSONB,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add event_id and user_id columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='nfc_scans' AND column_name='event_id'
  ) THEN
    ALTER TABLE nfc_scans ADD COLUMN event_id UUID REFERENCES events(id) ON DELETE SET NULL;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='nfc_scans' AND column_name='user_id'
  ) THEN
    ALTER TABLE nfc_scans ADD COLUMN user_id UUID REFERENCES users(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_nfc_scans_organization_id ON nfc_scans(organization_id);
CREATE INDEX IF NOT EXISTS idx_nfc_scans_device_id ON nfc_scans(device_id);
CREATE INDEX IF NOT EXISTS idx_nfc_scans_event_id ON nfc_scans(event_id);
CREATE INDEX IF NOT EXISTS idx_nfc_scans_created_at ON nfc_scans(created_at);

-- =====================================
-- 5) ADD/UPDATE CONTENT BUNDLES TABLE
-- =====================================
CREATE TABLE IF NOT EXISTS content_bundles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  bundle_type VARCHAR(50) NOT NULL,
  files JSONB DEFAULT '[]'::JSONB,
  settings JSONB DEFAULT '{}'::JSONB,
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_content_bundles_organization_id ON content_bundles(organization_id);
CREATE INDEX IF NOT EXISTS idx_content_bundles_event_id ON content_bundles(event_id);

-- =====================================
-- 6) ADD/UPDATE ANALYTICS EVENTS TABLE
-- =====================================
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  session_id VARCHAR(255),
  page_url TEXT,
  referrer TEXT,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  device_type VARCHAR(50),
  browser VARCHAR(100),
  os VARCHAR(100),
  location JSONB,
  custom_data JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_analytics_events_organization_id ON analytics_events(organization_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_type ON analytics_events(event_type);

-- =====================================
-- 7) ENABLE ROW LEVEL SECURITY
-- =====================================
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendees ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfc_devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfc_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_bundles ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- =====================================
-- 8) CREATE/UPDATE RLS POLICIES
-- =====================================

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "events_select" ON events;
DROP POLICY IF EXISTS "events_insert" ON events;
DROP POLICY IF EXISTS "events_update" ON events;
DROP POLICY IF EXISTS "events_delete" ON events;

-- Events policies (with member assignment support)
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

CREATE POLICY "events_insert"
ON events
FOR INSERT TO authenticated
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

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

-- Attendees policies
DROP POLICY IF EXISTS "attendees_select" ON attendees;
DROP POLICY IF EXISTS "attendees_write" ON attendees;

CREATE POLICY "attendees_select"
ON attendees
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "attendees_write"
ON attendees
FOR ALL TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
)
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- NFC Devices policies
DROP POLICY IF EXISTS "nfc_devices_select" ON nfc_devices;
DROP POLICY IF EXISTS "nfc_devices_write" ON nfc_devices;

CREATE POLICY "nfc_devices_select"
ON nfc_devices
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "nfc_devices_write"
ON nfc_devices
FOR ALL TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
)
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- NFC Scans policies
DROP POLICY IF EXISTS "nfc_scans_select" ON nfc_scans;
DROP POLICY IF EXISTS "nfc_scans_write" ON nfc_scans;

CREATE POLICY "nfc_scans_select"
ON nfc_scans
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "nfc_scans_write"
ON nfc_scans
FOR ALL TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
)
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Content Bundles policies
DROP POLICY IF EXISTS "content_bundles_select" ON content_bundles;
DROP POLICY IF EXISTS "content_bundles_write" ON content_bundles;

CREATE POLICY "content_bundles_select"
ON content_bundles
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "content_bundles_write"
ON content_bundles
FOR ALL TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
)
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Analytics Events policies
DROP POLICY IF EXISTS "analytics_events_select" ON analytics_events;
DROP POLICY IF EXISTS "analytics_events_write" ON analytics_events;

CREATE POLICY "analytics_events_select"
ON analytics_events
FOR SELECT TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

CREATE POLICY "analytics_events_write"
ON analytics_events
FOR ALL TO authenticated
USING (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
)
WITH CHECK (
  organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- =====================================
-- 9) ADD UPDATED_AT TRIGGERS
-- =====================================

-- Events trigger
DROP TRIGGER IF EXISTS update_events_updated_at ON events;
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Attendees trigger
DROP TRIGGER IF EXISTS update_attendees_updated_at ON attendees;
CREATE TRIGGER update_attendees_updated_at
  BEFORE UPDATE ON attendees
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- NFC Devices trigger
DROP TRIGGER IF EXISTS update_nfc_devices_updated_at ON nfc_devices;
CREATE TRIGGER update_nfc_devices_updated_at
  BEFORE UPDATE ON nfc_devices
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Content Bundles trigger
DROP TRIGGER IF EXISTS update_content_bundles_updated_at ON content_bundles;
CREATE TRIGGER update_content_bundles_updated_at
  BEFORE UPDATE ON content_bundles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================
-- 10) VERIFICATION
-- =====================================

-- Verify tables were created/updated
SELECT 
  table_name, 
  'Ready' as status
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('events', 'attendees', 'nfc_devices', 'nfc_scans', 'content_bundles', 'analytics_events')
ORDER BY table_name;

-- Verify assigned_members column exists
SELECT 
  table_name,
  column_name,
  data_type,
  'Column Added' as status
FROM information_schema.columns
WHERE table_name = 'events' AND column_name = 'assigned_members';

-- Verify landing_page_id column exists
SELECT 
  table_name,
  column_name,
  data_type,
  'Column Added' as status
FROM information_schema.columns
WHERE table_name = 'nfc_devices' AND column_name = 'landing_page_id';

-- Verify RLS is enabled
SELECT 
  tablename,
  rowsecurity as rls_enabled,
  'RLS Active' as status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('events', 'attendees', 'nfc_devices', 'nfc_scans', 'content_bundles', 'analytics_events')
ORDER BY tablename;

-- Verify key indexes exist
SELECT 
  tablename,
  indexname,
  'Index Created' as status
FROM pg_indexes
WHERE schemaname = 'public'
  AND (
    indexname LIKE 'idx_events_%' 
    OR indexname LIKE 'idx_attendees_%'
    OR indexname LIKE 'idx_nfc_%'
    OR indexname LIKE 'idx_content_%'
    OR indexname LIKE 'idx_analytics_%'
  )
ORDER BY tablename, indexname;

-- Success message
SELECT 'Events system setup complete! Database updated successfully.' as message;

-- Show next steps
SELECT 'Next: Test the API by creating an event via POST /api/events' as next_step;

