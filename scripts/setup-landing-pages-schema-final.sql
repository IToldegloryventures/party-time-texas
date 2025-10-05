-- Landing Pages Database Schema Setup (Final Version)
-- Based on successful Supabase AI recommendations

-- Ensure the update_updated_at_column function exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add missing columns to existing landing_pages table
DO $$ 
BEGIN
    -- Add columns if they don't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'landing_pages' AND column_name = 'name') THEN
        ALTER TABLE landing_pages ADD COLUMN name VARCHAR(255);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'landing_pages' AND column_name = 'status') THEN
        ALTER TABLE landing_pages ADD COLUMN status VARCHAR(50) DEFAULT 'draft';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'landing_pages' AND column_name = 'permissions') THEN
        ALTER TABLE landing_pages ADD COLUMN permissions JSONB DEFAULT '{}';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'landing_pages' AND column_name = 'scan_count') THEN
        ALTER TABLE landing_pages ADD COLUMN scan_count INTEGER DEFAULT 0;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'landing_pages' AND column_name = 'last_scan') THEN
        ALTER TABLE landing_pages ADD COLUMN last_scan TIMESTAMP WITH TIME ZONE;
    END IF;
END $$;

-- Update the unique constraint if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'landing_pages_organization_id_slug_key'
    ) THEN
        ALTER TABLE landing_pages ADD CONSTRAINT landing_pages_organization_id_slug_key UNIQUE(organization_id, slug);
    END IF;
END $$;

-- Create landing_page_scans table if it doesn't exist
CREATE TABLE IF NOT EXISTS landing_page_scans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id UUID REFERENCES landing_pages(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    ip_address INET,
    user_agent TEXT,
    location_data JSONB,
    utm_params JSONB,
    referrer TEXT,
    session_id VARCHAR(255),
    device_type VARCHAR(50),
    browser VARCHAR(100),
    os VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create page_templates table if it doesn't exist
CREATE TABLE IF NOT EXISTS page_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    content JSONB NOT NULL,
    preview_image TEXT,
    is_public BOOLEAN DEFAULT true,
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create landing_page_components table if it doesn't exist
CREATE TABLE IF NOT EXISTS landing_page_components (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id UUID REFERENCES landing_pages(id) ON DELETE CASCADE,
    component_type VARCHAR(100) NOT NULL,
    component_data JSONB NOT NULL,
    position INTEGER NOT NULL,
    is_visible BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create landing_page_analytics table if it doesn't exist
CREATE TABLE IF NOT EXISTS landing_page_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id UUID REFERENCES landing_pages(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    total_views INTEGER DEFAULT 0,
    unique_visitors INTEGER DEFAULT 0,
    total_scans INTEGER DEFAULT 0,
    unique_scans INTEGER DEFAULT 0,
    bounce_rate DECIMAL(5,2) DEFAULT 0,
    avg_time_on_page INTEGER DEFAULT 0,
    top_referrers JSONB DEFAULT '[]',
    top_locations JSONB DEFAULT '[]',
    device_breakdown JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(page_id, date)
);

-- Add NFC device to landing page relationship if column doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'nfc_devices' AND column_name = 'landing_page_id') THEN
        ALTER TABLE nfc_devices ADD COLUMN landing_page_id UUID REFERENCES landing_pages(id) ON DELETE SET NULL;
    END IF;
END $$;

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_landing_page_scans_page_id ON landing_page_scans(page_id);
CREATE INDEX IF NOT EXISTS idx_landing_page_scans_created_at ON landing_page_scans(created_at);
CREATE INDEX IF NOT EXISTS idx_landing_page_scans_organization_id ON landing_page_scans(organization_id);
CREATE INDEX IF NOT EXISTS idx_page_templates_category ON page_templates(category);
CREATE INDEX IF NOT EXISTS idx_page_templates_is_public ON page_templates(is_public);
CREATE INDEX IF NOT EXISTS idx_landing_page_components_page_id ON landing_page_components(page_id);
CREATE INDEX IF NOT EXISTS idx_landing_page_components_position ON landing_page_components(page_id, position);
CREATE INDEX IF NOT EXISTS idx_landing_page_analytics_page_id ON landing_page_analytics(page_id);
CREATE INDEX IF NOT EXISTS idx_landing_page_analytics_date ON landing_page_analytics(date);
CREATE INDEX IF NOT EXISTS idx_nfc_devices_landing_page_id ON nfc_devices(landing_page_id);

-- Enable RLS on new tables
ALTER TABLE landing_page_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE landing_page_components ENABLE ROW LEVEL SECURITY;
ALTER TABLE landing_page_analytics ENABLE ROW LEVEL SECURITY;

-- Drop existing policies safely (based on successful Supabase AI approach)
DROP POLICY IF EXISTS "Landing page scans are organization-scoped" ON landing_page_scans;
DROP POLICY IF EXISTS "Page templates are public or user-created" ON page_templates;
DROP POLICY IF EXISTS "Landing page components are organization-scoped" ON landing_page_components;
DROP POLICY IF EXISTS "Landing page analytics are organization-scoped" ON landing_page_analytics;

-- Create granular RLS policies for landing_page_scans (based on successful approach)
CREATE POLICY "Landing page scans select scope" ON landing_page_scans
  FOR SELECT TO authenticated
  USING (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

CREATE POLICY "Landing page scans insert scope" ON landing_page_scans
  FOR INSERT TO authenticated
  WITH CHECK (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

CREATE POLICY "Landing page scans update scope" ON landing_page_scans
  FOR UPDATE TO authenticated
  USING (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ))
  WITH CHECK (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

CREATE POLICY "Landing page scans delete scope" ON landing_page_scans
  FOR DELETE TO authenticated
  USING (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

-- Create RLS policies for page_templates
CREATE POLICY "Page templates select scope" ON page_templates
  FOR SELECT TO authenticated
  USING (
    is_public = true OR 
    created_by IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Page templates insert scope" ON page_templates
  FOR INSERT TO authenticated
  WITH CHECK (
    created_by IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Page templates update scope" ON page_templates
  FOR UPDATE TO authenticated
  USING (
    created_by IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  )
  WITH CHECK (
    created_by IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Page templates delete scope" ON page_templates
  FOR DELETE TO authenticated
  USING (
    created_by IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

-- Create RLS policies for landing_page_components
CREATE POLICY "Landing page components select scope" ON landing_page_components
  FOR SELECT TO authenticated
  USING (page_id IN (
    SELECT id FROM landing_pages WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  ));

CREATE POLICY "Landing page components insert scope" ON landing_page_components
  FOR INSERT TO authenticated
  WITH CHECK (page_id IN (
    SELECT id FROM landing_pages WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  ));

CREATE POLICY "Landing page components update scope" ON landing_page_components
  FOR UPDATE TO authenticated
  USING (page_id IN (
    SELECT id FROM landing_pages WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  ))
  WITH CHECK (page_id IN (
    SELECT id FROM landing_pages WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  ));

CREATE POLICY "Landing page components delete scope" ON landing_page_components
  FOR DELETE TO authenticated
  USING (page_id IN (
    SELECT id FROM landing_pages WHERE organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  ));

-- Create RLS policies for landing_page_analytics
CREATE POLICY "Landing page analytics select scope" ON landing_page_analytics
  FOR SELECT TO authenticated
  USING (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

CREATE POLICY "Landing page analytics insert scope" ON landing_page_analytics
  FOR INSERT TO authenticated
  WITH CHECK (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

CREATE POLICY "Landing page analytics update scope" ON landing_page_analytics
  FOR UPDATE TO authenticated
  USING (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ))
  WITH CHECK (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

CREATE POLICY "Landing page analytics delete scope" ON landing_page_analytics
  FOR DELETE TO authenticated
  USING (organization_id IN (
    SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
  ));

-- Create triggers if they don't exist
DO $$
BEGIN
    -- Page templates trigger
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'update_page_templates_updated_at'
    ) THEN
        CREATE TRIGGER update_page_templates_updated_at 
            BEFORE UPDATE ON page_templates 
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;

    -- Landing page components trigger
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'update_landing_page_components_updated_at'
    ) THEN
        CREATE TRIGGER update_landing_page_components_updated_at 
            BEFORE UPDATE ON landing_page_components 
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;

    -- Landing page analytics trigger
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'update_landing_page_analytics_updated_at'
    ) THEN
        CREATE TRIGGER update_landing_page_analytics_updated_at 
            BEFORE UPDATE ON landing_page_analytics 
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Create functions if they don't exist
CREATE OR REPLACE FUNCTION update_landing_page_scan_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE landing_pages 
    SET 
        scan_count = scan_count + 1,
        last_scan = NOW()
    WHERE id = NEW.page_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for scan count if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'update_landing_page_scan_count_trigger'
    ) THEN
        CREATE TRIGGER update_landing_page_scan_count_trigger
            AFTER INSERT ON landing_page_scans
            FOR EACH ROW EXECUTE FUNCTION update_landing_page_scan_count();
    END IF;
END $$;

-- Create analytics function if it doesn't exist
CREATE OR REPLACE FUNCTION generate_daily_landing_page_analytics(target_date DATE DEFAULT CURRENT_DATE)
RETURNS VOID AS $$
DECLARE
    page_record RECORD;
    analytics_data RECORD;
BEGIN
    FOR page_record IN 
        SELECT id, organization_id FROM landing_pages WHERE is_published = true
    LOOP
        SELECT 
            COUNT(*) as total_views,
            COUNT(DISTINCT session_id) as unique_visitors,
            COUNT(*) FILTER (WHERE utm_params IS NOT NULL) as total_scans,
            COUNT(DISTINCT session_id) FILTER (WHERE utm_params IS NOT NULL) as unique_scans
        INTO analytics_data
        FROM landing_page_scans 
        WHERE page_id = page_record.id 
        AND DATE(created_at) = target_date;
        
        INSERT INTO landing_page_analytics (
            page_id, organization_id, date, total_views, unique_visitors, 
            total_scans, unique_scans
        ) VALUES (
            page_record.id, page_record.organization_id, target_date,
            COALESCE(analytics_data.total_views, 0),
            COALESCE(analytics_data.unique_visitors, 0),
            COALESCE(analytics_data.total_scans, 0),
            COALESCE(analytics_data.unique_scans, 0)
        )
        ON CONFLICT (page_id, date) 
        DO UPDATE SET
            total_views = EXCLUDED.total_views,
            unique_visitors = EXCLUDED.unique_visitors,
            total_scans = EXCLUDED.total_scans,
            unique_scans = EXCLUDED.unique_scans,
            updated_at = NOW();
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Insert default page templates if they don't exist
INSERT INTO page_templates (name, category, description, content, is_public) VALUES
(
    'Business Card Template',
    'business',
    'Professional business card landing page',
    '{
        "title": "Welcome to [Business Name]",
        "subtitle": "Your trusted partner for [services]",
        "description": "We provide exceptional [services] with a focus on quality and customer satisfaction.",
        "contact": {
            "email": "contact@business.com",
            "phone": "(555) 123-4567",
            "website": "https://business.com"
        },
        "social": {
            "facebook": "",
            "instagram": "",
            "linkedin": ""
        },
        "branding": {
            "primaryColor": "#3B82F6",
            "secondaryColor": "#1E40AF",
            "accentColor": "#F59E0B"
        }
    }',
    true
),
(
    'Event Template',
    'events',
    'Event landing page with RSVP functionality',
    '{
        "title": "[Event Name]",
        "subtitle": "Join us for an unforgettable experience",
        "description": "We are excited to invite you to [Event Name]. This special event will feature [event details].",
        "contact": {
            "email": "events@company.com",
            "phone": "(555) 987-6543",
            "website": "https://company.com/events"
        },
        "social": {
            "facebook": "",
            "instagram": "",
            "linkedin": ""
        },
        "branding": {
            "primaryColor": "#8B5CF6",
            "secondaryColor": "#7C3AED",
            "accentColor": "#EC4899"
        }
    }',
    true
),
(
    'Restaurant Template',
    'restaurant',
    'Restaurant landing page with menu and contact info',
    '{
        "title": "[Restaurant Name]",
        "subtitle": "Authentic flavors, exceptional dining",
        "description": "Experience the finest cuisine in a warm and welcoming atmosphere. We pride ourselves on using fresh, local ingredients.",
        "contact": {
            "email": "info@restaurant.com",
            "phone": "(555) 456-7890",
            "website": "https://restaurant.com"
        },
        "social": {
            "facebook": "",
            "instagram": "",
            "linkedin": ""
        },
        "branding": {
            "primaryColor": "#DC2626",
            "secondaryColor": "#B91C1C",
            "accentColor": "#F59E0B"
        }
    }',
    true
)
ON CONFLICT (name) DO NOTHING;

-- Create a sample landing page for testing if it doesn't exist
INSERT INTO landing_pages (
    organization_id, name, title, slug, content, status, is_published
) VALUES (
    (SELECT id FROM organizations LIMIT 1),
    'Party Time Texas Landing Page',
    'Welcome to Party Time Texas!',
    'party-time-texas',
    '{
        "title": "Welcome to Party Time Texas!",
        "subtitle": "Your premier event planning and corporate entertainment company",
        "description": "We specialize in creating unforgettable experiences for corporate events, private parties, and special occasions throughout Texas.",
        "contact": {
            "email": "ashton@partytimetexas.com",
            "phone": "(555) 123-4567",
            "website": "https://partytimetexas.com"
        },
        "social": {
            "facebook": "https://facebook.com/partytimetexas",
            "instagram": "https://instagram.com/partytimetexas",
            "linkedin": "https://linkedin.com/company/partytimetexas"
        },
        "branding": {
            "primaryColor": "#FF1E56",
            "secondaryColor": "#FF00FF",
            "accentColor": "#00FFFF"
        }
    }',
    'published',
    true
) ON CONFLICT (organization_id, slug) DO NOTHING;

-- Success message
SELECT 'Landing pages schema setup completed successfully!' as status;
