-- =====================================================
-- COSMIC PORTALS - ENHANCED DATABASE SETUP SCRIPT
-- =====================================================
-- Run this entire script in Supabase SQL Editor
-- This sets up all tables, policies, and indexes for the user type system
-- Enhanced with Supabase AI recommendations for better security and performance

-- Prereqs
create extension if not exists pgcrypto;

-- =====================================
-- 1) CORE TABLES
-- =====================================
create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  name varchar(255) not null,
  slug varchar(255) unique not null,
  plan_type varchar(50) not null, -- 'business' or 'event' or 'admin'
  subscription_status varchar(50) default 'trial',
  settings jsonb default '{}'::jsonb,
  white_label_config jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  clerk_id varchar(255) unique not null,
  email varchar(255) not null,
  first_name varchar(255),
  last_name varchar(255),
  organization_id uuid references organizations(id),
  role varchar(50) not null,
  status varchar(50) default 'active',
  invited_by uuid references users(id),
  invited_at timestamptz,
  last_login timestamptz,
  permissions jsonb default '{}'::jsonb,
  custom_permissions jsonb default '{}'::jsonb,
  master_admin boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists team_invitations (
  id uuid primary key default gen_random_uuid(),
  email varchar(255) not null,
  organization_id uuid references organizations(id),
  role varchar(50) not null,
  invited_by uuid references users(id),
  invitation_token varchar(255) unique not null,
  expires_at timestamptz not null,
  accepted_at timestamptz,
  custom_permissions jsonb default '{}'::jsonb,
  permission_template varchar(100),
  created_at timestamptz default now()
);

create table if not exists landing_pages (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id),
  name varchar(255) not null,
  title varchar(255) not null,
  slug varchar(255) not null,
  content jsonb default '{}'::jsonb,
  status varchar(50) default 'draft',
  permissions jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Ensure columns that are referenced later exist (idempotent)
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name='landing_pages' and column_name='scan_count') then
    alter table landing_pages add column scan_count integer default 0;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='landing_pages' and column_name='last_scan') then
    alter table landing_pages add column last_scan timestamptz;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='landing_pages' and column_name='is_published') then
    alter table landing_pages add column is_published boolean default false;
  end if;
end $$;

-- =====================================
-- 2) SECONDARY TABLES (SAFE DEFAULTS)
-- =====================================
-- helper for updated_at
create or replace function update_updated_at_column()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;

create table if not exists landing_page_scans (
  id uuid primary key default gen_random_uuid(),
  page_id uuid references landing_pages(id) on delete cascade,
  organization_id uuid references organizations(id) on delete cascade,
  ip_address inet,
  user_agent text,
  location_data jsonb,
  utm_params jsonb,
  referrer text,
  session_id varchar(255),
  device_type varchar(50),
  browser varchar(100),
  os varchar(100),
  created_at timestamptz default now()
);

create table if not exists page_templates (
  id uuid primary key default gen_random_uuid(),
  name varchar(255) not null,
  category varchar(100) not null,
  description text,
  content jsonb not null,
  preview_image text,
  is_public boolean default true,
  created_by uuid references users(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists landing_page_components (
  id uuid primary key default gen_random_uuid(),
  page_id uuid references landing_pages(id) on delete cascade,
  component_type varchar(100) not null,
  component_data jsonb not null,
  position integer not null,
  is_visible boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists landing_page_analytics (
  id uuid primary key default gen_random_uuid(),
  page_id uuid references landing_pages(id) on delete cascade,
  organization_id uuid references organizations(id) on delete cascade,
  date date not null,
  total_views integer default 0,
  unique_visitors integer default 0,
  total_scans integer default 0,
  unique_scans integer default 0,
  bounce_rate numeric(5,2) default 0,
  avg_time_on_page integer default 0,
  top_referrers jsonb default '[]'::jsonb,
  top_locations jsonb default '[]'::jsonb,
  device_breakdown jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(page_id, date)
);

-- Optional: tie NFC devices if table exists
do $$
begin
  if exists (select 1 from information_schema.tables where table_schema='public' and table_name='nfc_devices') then
    if not exists (select 1 from information_schema.columns where table_name='nfc_devices' and column_name='landing_page_id') then
      alter table nfc_devices add column landing_page_id uuid references landing_pages(id) on delete set null;
    end if;
  end if;
end $$;

-- =====================================
-- 3) INDEXES
-- =====================================
-- Users
create index if not exists idx_users_clerk_id on users(clerk_id);
create index if not exists idx_users_organization_id on users(organization_id);
create index if not exists idx_users_email on users(email);
create index if not exists idx_users_role on users(role);

-- Organizations
create index if not exists idx_organizations_slug on organizations(slug);
create index if not exists idx_organizations_plan_type on organizations(plan_type);

-- Team invitations
create index if not exists idx_team_invitations_token on team_invitations(invitation_token);
create index if not exists idx_team_invitations_email on team_invitations(email);
create index if not exists idx_team_invitations_organization_id on team_invitations(organization_id);
create index if not exists idx_team_invitations_expires_at on team_invitations(expires_at);

-- Landing pages
create index if not exists idx_landing_pages_organization_id on landing_pages(organization_id);
create index if not exists idx_landing_pages_slug on landing_pages(slug);
create index if not exists idx_landing_pages_status on landing_pages(status);

-- Secondary tables
create index if not exists idx_landing_page_scans_page_id on landing_page_scans(page_id);
create index if not exists idx_landing_page_scans_created_at on landing_page_scans(created_at);
create index if not exists idx_landing_page_scans_organization_id on landing_page_scans(organization_id);
create index if not exists idx_page_templates_category on page_templates(category);
create index if not exists idx_page_templates_is_public on page_templates(is_public);
create index if not exists idx_landing_page_components_page_id on landing_page_components(page_id);
create index if not exists idx_landing_page_components_pos on landing_page_components(page_id, position);
create index if not exists idx_landing_page_analytics_page_id on landing_page_analytics(page_id);
create index if not exists idx_landing_page_analytics_date on landing_page_analytics(date);

-- Helpful indexes for RLS lookups
create index if not exists idx_users_org_clerk on users(organization_id, clerk_id);
create index if not exists idx_lp_org on landing_pages(organization_id);

-- =====================================
-- 4) RLS
-- =====================================
alter table organizations enable row level security;
alter table users enable row level security;
alter table team_invitations enable row level security;
alter table landing_pages enable row level security;
alter table landing_page_scans enable row level security;
alter table page_templates enable row level security;
alter table landing_page_components enable row level security;
alter table landing_page_analytics enable row level security;

-- Drop existing conflicting policies
do $$
begin
  -- organizations/users/invitations/landing_pages
  perform 1;
exception when others then
  null;
end $$;

drop policy if exists "Users can only see their organization (select)" on organizations;
drop policy if exists "Users can only modify their organization" on organizations;

drop policy if exists "Users can only see their organization's users (select)" on users;
drop policy if exists "Users can only modify their organization's users" on users;

drop policy if exists "Users can only see their organization's invitations (select)" on team_invitations;
drop policy if exists "Users can only modify their organization's invitations" on team_invitations;

drop policy if exists "Users can only see their organization's pages (select)" on landing_pages;
drop policy if exists "Users can only modify their organization's pages" on landing_pages;

-- secondary tables
drop policy if exists "Landing page scans select scope" on landing_page_scans;
drop policy if exists "Landing page scans insert scope" on landing_page_scans;
drop policy if exists "Landing page scans update scope" on landing_page_scans;
drop policy if exists "Landing page scans delete scope" on landing_page_scans;

drop policy if exists "Page templates select scope" on page_templates;
drop policy if exists "Page templates insert scope" on page_templates;
drop policy if exists "Page templates update scope" on page_templates;
drop policy if exists "Page templates delete scope" on page_templates;

drop policy if exists "Landing page components select scope" on landing_page_components;
drop policy if exists "Landing page components insert scope" on landing_page_components;
drop policy if exists "Landing page components update scope" on landing_page_components;
drop policy if exists "Landing page components delete scope" on landing_page_components;

drop policy if exists "Landing page analytics select scope" on landing_page_analytics;
drop policy if exists "Landing page analytics insert scope" on landing_page_analytics;
drop policy if exists "Landing page analytics update scope" on landing_page_analytics;
drop policy if exists "Landing page analytics delete scope" on landing_page_analytics;

-- Organizations policies
create policy "org_select"
on organizations
for select to authenticated
using (
  id in (
    select organization_id from users
    where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "org_write"
on organizations
for all to authenticated
using (
  id in (
    select organization_id from users
    where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  id in (
    select organization_id from users
    where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Users policies
create policy "users_select"
on users
for select to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "users_write"
on users
for all to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Team invitations policies
create policy "invitations_select"
on team_invitations
for select to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "invitations_write"
on team_invitations
for all to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Landing pages policies
create policy "lp_select"
on landing_pages
for select to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "lp_write"
on landing_pages
for all to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- Secondary tables
-- landing_page_scans
create policy "lps_select"
on landing_page_scans
for select to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "lps_write"
on landing_page_scans
for all to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- page_templates
create policy "pt_select"
on page_templates
for select to authenticated
using (
  is_public = true or
  created_by in (
    select id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "pt_write"
on page_templates
for all to authenticated
using (
  created_by in (
    select id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  created_by in (
    select id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- landing_page_components
create policy "lpc_select"
on landing_page_components
for select to authenticated
using (
  page_id in (
    select id from landing_pages
    where organization_id in (
      select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
    )
  )
);

create policy "lpc_write"
on landing_page_components
for all to authenticated
using (
  page_id in (
    select id from landing_pages
    where organization_id in (
      select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
    )
  )
)
with check (
  page_id in (
    select id from landing_pages
    where organization_id in (
      select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
    )
  )
);

-- landing_page_analytics
create policy "lpa_select"
on landing_page_analytics
for select to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

create policy "lpa_write"
on landing_page_analytics
for all to authenticated
using (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
)
with check (
  organization_id in (
    select organization_id from users where clerk_id = (auth.jwt() ->> 'sub')
  )
);

-- =====================================
-- 5) TRIGGERS
-- =====================================
do $$
begin
  if not exists (select 1 from pg_trigger where tgname='update_page_templates_updated_at') then
    create trigger update_page_templates_updated_at
      before update on page_templates
      for each row execute function update_updated_at_column();
  end if;

  if not exists (select 1 from pg_trigger where tgname='update_landing_page_components_updated_at') then
    create trigger update_landing_page_components_updated_at
      before update on landing_page_components
      for each row execute function update_updated_at_column();
  end if;

  if not exists (select 1 from pg_trigger where tgname='update_landing_page_analytics_updated_at') then
    create trigger update_landing_page_analytics_updated_at
      before update on landing_page_analytics
      for each row execute function update_updated_at_column();
  end if;
end $$;

create or replace function update_landing_page_scan_count()
returns trigger language plpgsql as $$
begin
  update landing_pages
  set scan_count = coalesce(scan_count, 0) + 1,
      last_scan = now()
  where id = new.page_id;
  return new;
end $$;

do $$
begin
  if not exists (select 1 from pg_trigger where tgname='update_landing_page_scan_count_trigger') then
    create trigger update_landing_page_scan_count_trigger
      after insert on landing_page_scans
      for each row execute function update_landing_page_scan_count();
  end if;
end $$;

-- =====================================
-- 6) SEED / DEFAULTS
-- =====================================
insert into organizations (name, slug, plan_type, subscription_status, settings)
values ('Cosmic Portals Admin','cosmic-portals-admin','admin','active','{"is_system_admin": true, "created_by": "system"}'::jsonb)
on conflict (slug) do nothing;

insert into page_templates (name, category, description, content, is_public)
values
  ('Business Card Template','business','Professional business card landing page',
   '{
     "title":"Welcome to [Business Name]",
     "subtitle":"Your trusted partner for [services]",
     "description":"We provide exceptional [services] with a focus on quality and customer satisfaction.",
     "contact":{"email":"contact@business.com","phone":"(555) 123-4567","website":"https://business.com"},
     "social":{"facebook":"","instagram":"","linkedin":""},
     "branding":{"primaryColor":"#3B82F6","secondaryColor":"#1E40AF","accentColor":"#F59E0B"}
   }', true),
  ('Event Template','events','Event landing page with RSVP functionality',
   '{
     "title":"[Event Name]",
     "subtitle":"Join us for an unforgettable experience",
     "description":"We are excited to invite you to [Event Name]. This special event will feature [event details].",
     "contact":{"email":"events@company.com","phone":"(555) 987-6543","website":"https://company.com/events"},
     "social":{"facebook":"","instagram":"","linkedin":""},
     "branding":{"primaryColor":"#8B5CF6","secondaryColor":"#7C3AED","accentColor":"#EC4899"}
   }', true),
  ('Restaurant Template','restaurant','Restaurant landing page with menu and contact info',
   '{
     "title":"[Restaurant Name]",
     "subtitle":"Authentic flavors, exceptional dining",
     "description":"Experience the finest cuisine in a warm and welcoming atmosphere. We pride ourselves on using fresh, local ingredients.",
     "contact":{"email":"info@restaurant.com","phone":"(555) 456-7890","website":"https://restaurant.com"},
     "social":{"facebook":"","instagram":"","linkedin":""},
     "branding":{"primaryColor":"#DC2626","secondaryColor":"#B91C1C","accentColor":"#F59E0B"}
   }', true)
on conflict (name) do nothing;

-- Sample landing page only if an org exists
do $$
begin
  if exists (select 1 from organizations) then
    insert into landing_pages (organization_id, name, title, slug, content, status, is_published)
    values (
      (select id from organizations order by created_at asc limit 1),
      'Party Time Texas Landing Page',
      'Welcome to Party Time Texas!',
      'party-time-texas',
      '{
        "title":"Welcome to Party Time Texas!",
        "subtitle":"Your premier event planning and corporate entertainment company",
        "description":"We specialize in creating unforgettable experiences for corporate events, private parties, and special occasions throughout Texas.",
        "contact":{"email":"ashton@partytimetexas.com","phone":"(555) 123-4567","website":"https://partytimetexas.com"},
        "social":{
          "facebook":"https://facebook.com/partytimetexas",
          "instagram":"https://instagram.com/partytimetexas",
          "linkedin":"https://linkedin.com/company/partytimetexas"
        },
        "branding":{"primaryColor":"#FF1E56","secondaryColor":"#FF00FF","accentColor":"#00FFFF"}
      }',
      'published',
      true
    )
    on conflict do nothing;
  end if;
end $$;

-- =====================================
-- 7) VERIFICATION
-- =====================================
-- tables exist
select table_name, '✅ Created' as status
from information_schema.tables
where table_schema='public'
  and table_name in ('organizations','users','team_invitations','landing_pages');

-- policies exist
select tablename, policyname, '✅ Active' as status
from pg_policies
where schemaname='public'
  and tablename in ('organizations','users','team_invitations','landing_pages','landing_page_scans','page_templates','landing_page_components','landing_page_analytics');

-- success message
select '🎉 Database setup completed successfully! Your user type system is ready to use.' as message;
