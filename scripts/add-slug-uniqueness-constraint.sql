-- Add global uniqueness constraint for landing page slugs
-- This ensures slugs are unique across ALL organizations

-- First, check if we have any existing duplicates
DO $$
DECLARE
    duplicate_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO duplicate_count
    FROM (
        SELECT slug, COUNT(*) as cnt
        FROM landing_pages
        GROUP BY slug
        HAVING COUNT(*) > 1
    ) duplicates;
    
    IF duplicate_count > 0 THEN
        RAISE EXCEPTION 'Cannot add unique constraint: % duplicate slugs found. Please resolve duplicates first.', duplicate_count;
    END IF;
END $$;

-- Add unique constraint on slug column
DO $$
BEGIN
    -- Check if constraint already exists
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'landing_pages_slug_unique' 
        AND table_name = 'landing_pages'
    ) THEN
        -- Add the unique constraint
        ALTER TABLE landing_pages 
        ADD CONSTRAINT landing_pages_slug_unique UNIQUE (slug);
        
        RAISE NOTICE 'Successfully added unique constraint on landing_pages.slug';
    ELSE
        RAISE NOTICE 'Unique constraint on landing_pages.slug already exists';
    END IF;
END $$;

-- Add index for performance (if not exists)
CREATE INDEX IF NOT EXISTS idx_landing_pages_slug_unique 
ON landing_pages (slug);

-- Add comment explaining the constraint
COMMENT ON CONSTRAINT landing_pages_slug_unique ON landing_pages IS 
'Ensures landing page slugs are globally unique across all organizations for proper URL routing';

-- Verify the constraint was added
SELECT 
    conname as constraint_name,
    contype as constraint_type,
    pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'landing_pages'::regclass 
AND conname = 'landing_pages_slug_unique';

-- Test the constraint by trying to insert a duplicate (should fail)
DO $$
BEGIN
    -- This should fail if constraint is working
    INSERT INTO landing_pages (organization_id, name, title, slug, content, is_published, status)
    VALUES (
        (SELECT id FROM organizations LIMIT 1),
        'Test Duplicate',
        'Test Title',
        'test-slug-duplicate',
        '{}',
        false,
        'draft'
    );
    
    -- If we get here, insert succeeded, now try to insert another with same slug
    INSERT INTO landing_pages (organization_id, name, title, slug, content, is_published, status)
    VALUES (
        (SELECT id FROM organizations LIMIT 1),
        'Test Duplicate 2',
        'Test Title 2',
        'test-slug-duplicate',
        '{}',
        false,
        'draft'
    );
    
    -- If we get here, constraint failed
    RAISE EXCEPTION 'UNIQUE CONSTRAINT FAILED: Duplicate slug was allowed!';
    
EXCEPTION
    WHEN unique_violation THEN
        -- This is what we want - constraint is working
        RAISE NOTICE 'SUCCESS: Unique constraint is working - duplicate slug rejected';
        
        -- Clean up test data
        DELETE FROM landing_pages WHERE slug = 'test-slug-duplicate';
        
    WHEN OTHERS THEN
        -- Some other error occurred
        RAISE EXCEPTION 'Unexpected error during constraint test: %', SQLERRM;
END $$;

-- Final verification
SELECT 'Landing page slug uniqueness constraint successfully added and tested!' as result;
