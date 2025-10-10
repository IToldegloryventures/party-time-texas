-- =====================================================
-- ADD LANDING PAGE BUILDER ADD-ON TO ORGANIZATIONS
-- =====================================================
-- This adds an optional "landing_page_builder" addon flag
-- to organizations for monetization

-- Add the landing_page_builder addon column to organizations
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='organizations' AND column_name='has_landing_page_builder'
  ) THEN
    ALTER TABLE organizations 
    ADD COLUMN has_landing_page_builder BOOLEAN DEFAULT false;
  END IF;
END $$;

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_organizations_has_landing_page_builder 
ON organizations(has_landing_page_builder);

-- Update comment
COMMENT ON COLUMN organizations.has_landing_page_builder IS 
'Optional add-on: Allows clients to create/edit their own landing pages. Super Admins can always create/edit for any client.';

-- Verification query
SELECT 
  id,
  name,
  plan_type,
  has_landing_page_builder,
  created_at
FROM organizations
ORDER BY created_at DESC
LIMIT 10;

