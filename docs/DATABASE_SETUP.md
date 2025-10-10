# 🗄️ **DATABASE SETUP GUIDE**

## **Required Supabase Database Configuration**

To make the user type system live, you need to create the database tables and policies.

---

## **Step 1: Access Supabase Dashboard**

1. **Go to** [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. **Select your project** (Ash-Cosmic-Portals-SaaS)
3. **Navigate to** "SQL Editor" in the left sidebar

---

## **Step 2: Create Database Tables**

Run these SQL commands in the Supabase SQL Editor:

### **Organizations Table:**

```sql
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  plan_type VARCHAR(50) NOT NULL, -- 'business' or 'event'
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### **Users Table:**

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  organization_id UUID REFERENCES organizations(id),
  role VARCHAR(50) NOT NULL,
  custom_permissions JSONB DEFAULT '{}',
  master_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### **Team Invitations Table:**

```sql
CREATE TABLE team_invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  organization_id UUID REFERENCES organizations(id),
  role VARCHAR(50) NOT NULL,
  invited_by UUID REFERENCES users(id),
  invitation_token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  accepted_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Landing Pages Table (if not exists):**

```sql
CREATE TABLE IF NOT EXISTS landing_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  content JSONB DEFAULT '{}',
  status VARCHAR(50) DEFAULT 'draft',
  permissions JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## **Step 3: Create Row Level Security (RLS) Policies**

### **Enable RLS on Tables:**

```sql
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE landing_pages ENABLE ROW LEVEL SECURITY;
```

### **Organizations RLS Policy:**

```sql
CREATE POLICY "Users can only see their organization" ON organizations
  FOR ALL USING (
    id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );
```

### **Users RLS Policy:**

```sql
CREATE POLICY "Users can only see their organization's users" ON users
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );
```

### **Team Invitations RLS Policy:**

```sql
CREATE POLICY "Users can only see their organization's invitations" ON team_invitations
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );
```

### **Landing Pages RLS Policy:**

```sql
CREATE POLICY "Users can only see their organization's pages" ON landing_pages
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );
```

---

## **Step 4: Create Indexes for Performance**

```sql
-- Indexes for better performance
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_users_organization_id ON users(organization_id);
CREATE INDEX idx_organizations_slug ON organizations(slug);
CREATE INDEX idx_team_invitations_token ON team_invitations(invitation_token);
CREATE INDEX idx_team_invitations_email ON team_invitations(email);
CREATE INDEX idx_landing_pages_organization_id ON landing_pages(organization_id);
CREATE INDEX idx_landing_pages_slug ON landing_pages(slug);
```

---

## **Step 5: Create Super Admin User (Optional)**

If you want to create a super admin user manually:

```sql
-- First, create a super admin organization
INSERT INTO organizations (name, slug, plan_type)
VALUES ('Cosmic Portals Admin', 'cosmic-portals-admin', 'admin');

-- Then create a super admin user (replace with your Clerk ID)
INSERT INTO users (clerk_id, email, first_name, last_name, organization_id, role, master_admin)
VALUES (
  'user_your_clerk_id_here',
  'your-email@example.com',
  'Your',
  'Name',
  (SELECT id FROM organizations WHERE slug = 'cosmic-portals-admin'),
  'super_admin',
  true
);
```

---

## **Step 6: Test Database Setup**

1. **Check tables exist**:

   ```sql
   SELECT table_name FROM information_schema.tables
   WHERE table_schema = 'public'
   AND table_name IN ('organizations', 'users', 'team_invitations', 'landing_pages');
   ```

2. **Check RLS policies**:

   ```sql
   SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
   FROM pg_policies
   WHERE tablename IN ('organizations', 'users', 'team_invitations', 'landing_pages');
   ```

3. **Test data insertion**:

   ```sql
   -- Test organization creation
   INSERT INTO organizations (name, slug, plan_type)
   VALUES ('Test Organization', 'test-org', 'business');

   -- Test user creation
   INSERT INTO users (clerk_id, email, organization_id, role)
   VALUES ('test_clerk_id', 'test@example.com',
           (SELECT id FROM organizations WHERE slug = 'test-org'),
           'business_admin');
   ```

---

## **✅ Success Indicators**

- ✅ **All tables created** successfully
- ✅ **RLS policies** are active
- ✅ **Indexes created** for performance
- ✅ **Test data** can be inserted
- ✅ **No permission errors** when querying

---

## **🔧 Troubleshooting**

### **Common Issues:**

1. **Table creation fails**:
   - Check if tables already exist
   - Verify you have the correct permissions
   - Check for syntax errors

2. **RLS policies not working**:
   - Verify RLS is enabled on tables
   - Check policy syntax
   - Test with different user contexts

3. **Permission errors**:
   - Check service role key is correct
   - Verify RLS policies are properly configured
   - Test with different user roles

---

**Once the database is set up, your user type system will have the proper data structure! 🚀**
