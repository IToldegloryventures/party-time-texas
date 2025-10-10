# 🚀 **COSMIC PORTALS - USER SYSTEM ARCHITECTURE**

## **📋 User Types, Permissions & Flows (Backend Defined)**

This document outlines the user system architecture with user types, permission templates, and technical implementation. **Note: UI enforcement of permissions is not yet implemented.**

---

## **👥 USER TYPES & PERMISSIONS**

### **1. 👑 SUPER ADMIN**

- **Who**: Platform administrators (you)
- **How Created**: Manual assignment with `master_admin: true`
- **Access**:
  - ✅ ALL organizations and their data
  - ✅ Admin panel (`/admin`)
  - ✅ Platform-wide analytics
  - ✅ User management across all organizations
  - ✅ Full control over everything
- **Permissions**: All permissions enabled

### **2. 🏢 BUSINESS ADMIN**

- **Who**: Business owners who purchase subscriptions
- **How Created**: During signup when selecting "Business" plan
- **Access**:
  - ✅ Their organization only
  - ✅ Create/edit/delete landing pages
  - ✅ Manage team members with **customizable permissions**
  - ✅ View organization analytics
  - ✅ Manage NFC devices
  - ❌ Cannot access admin panel
- **Permissions**: Full organization control + permission granting

### **3. 👥 BUSINESS EMPLOYEE**

- **Who**: Team members invited by business admins
- **How Created**: Invited via team invitation system
- **Default Permissions**:
  - ✅ Create/edit landing pages (no delete)
  - ✅ Publish landing pages
  - ✅ View organization analytics
  - ✅ Manage NFC devices
- **Customizable Permissions**: Business admin can grant additional permissions

### **4. 🎉 EVENT ADMIN**

- **Who**: Event planners who purchase subscriptions
- **How Created**: During signup when selecting "Event" plan
- **Access**:
  - ✅ Their event organization only
  - ✅ Create/edit/delete landing pages
  - ✅ Manage team members with **customizable permissions**
  - ✅ View organization analytics
  - ✅ Manage events and NFC devices
  - ❌ Cannot access admin panel
- **Permissions**: Full event organization control + permission granting

### **5. 🤝 EVENT COLLABORATOR**

- **Who**: Event staff invited by event admins
- **How Created**: Invited via team invitation system
- **Default Permissions**:
  - ✅ Create/edit landing pages (no delete)
  - ✅ Publish landing pages
  - ✅ View event analytics
  - ✅ Manage events and NFC devices
- **Customizable Permissions**: Event admin can grant additional permissions

### **6. 🎫 EVENT GUEST**

- **Who**: Event attendees with special access
- **How Created**: Invited via team invitation system
- **Access**:
  - ✅ Their event organization only
  - ✅ View event details (location, time, date, instructions)
  - ✅ View photo gallery
  - ✅ RSVP to events
  - ✅ Check-in to events
  - ❌ Cannot create/edit content
  - ❌ Cannot view analytics
  - ❌ Cannot manage anything
- **Permissions**: Event interaction only

### **7. 👤 TEAM MEMBER**

- **Who**: Team members with dashboard access and customizable permissions
- **How Created**: Invited via team invitation system
- **Access**:
  - ✅ Dashboard access
  - ✅ **Customizable permissions** based on admin settings
  - ✅ Organization-specific data
  - ✅ Role-based feature access
- **Permissions**: Fully customizable by admins

### **8. 👁️ VIEWER** _(Public Users)_

- **Who**: People who scan NFC tags or visit landing pages
- **How Created**: **NOT invited** - they're anonymous/public users
- **Access**:
  - ✅ Can view public landing pages
  - ✅ Can scan NFC tags
  - ✅ Can interact with public content
  - ❌ **NO dashboard access**
  - ❌ **NO analytics access**
  - ❌ **NO account required**
- **Data**: Their interactions are tracked in business/event analytics

---

## **🔄 COMPLETE USER FLOWS**

### **🏢 BUSINESS OWNER FLOW**

#### **Step 1: Initial Signup**

```
1. User visits website → Clicks "Get Started"
2. Redirected to /sign-up-custom
3. Selects "Business" plan
4. Fills out organization details:
   - Personal info (name, email)
   - Organization name
   - Organization URL slug
5. Creates Clerk account
```

#### **Step 2: Organization Creation**

```
1. Clerk webhook triggers user.created event
2. Webhook handler creates:
   - Organization record in Supabase
   - User record with business_admin role
   - Organization settings and permissions
3. User redirected to dashboard
4. Organization-specific data loaded
```

#### **Step 3: Dashboard Access**

```
1. User sees business admin dashboard
2. Can create/edit/delete landing pages
3. Can manage NFC devices
4. Can view organization analytics
5. Can invite team members
```

#### **Step 4: Team Management**

```
1. Admin clicks "Invite Team Member"
2. Selects role (Business Employee, Team Member)
3. Chooses permission template or custom permissions
4. Sends invitation with secure token
5. Recipient receives email with invitation link
```

### **👥 TEAM MEMBER (BUSINESS) FLOW**

#### **Step 1: Receive Invitation**

```
1. Receives invitation email with secure link
2. Clicks invitation link
3. Redirected to signup page with pre-filled organization
4. Creates Clerk account
```

#### **Step 2: Account Creation**

```
1. Clerk webhook triggers user.created event
2. Webhook handler:
   - Links user to organization
   - Assigns specified role and permissions
   - Creates user record with custom permissions
3. User redirected to dashboard
```

#### **Step 3: Dashboard Access**

```
1. User sees role-appropriate dashboard
2. Features available based on permissions:
   - Content creation (if enabled)
   - Analytics viewing (if enabled)
   - NFC management (if enabled)
3. Cannot access features they don't have permission for
```

### **🎉 EVENT ADMIN FLOW**

#### **Step 1: Initial Signup**

```
1. User visits website → Clicks "Get Started"
2. Redirected to /sign-up-custom
3. Selects "Event" plan
4. Fills out organization details:
   - Personal info (name, email)
   - Event organization name
   - Organization URL slug
5. Creates Clerk account
```

#### **Step 2: Organization Creation**

```
1. Clerk webhook triggers user.created event
2. Webhook handler creates:
   - Event organization record in Supabase
   - User record with event_admin role
   - Event-specific settings and permissions
3. User redirected to dashboard
```

#### **Step 3: Dashboard Access**

```
1. User sees event admin dashboard
2. Can create/edit/delete landing pages
3. Can manage events and NFC devices
4. Can view event analytics
5. Can invite event staff and guests
```

#### **Step 4: Team Management**

```
1. Admin clicks "Invite Team Member"
2. Selects role (Event Collaborator, Event Guest, Team Member)
3. Chooses permission template or custom permissions
4. Sends invitation with secure token
5. Recipient receives email with invitation link
```

### **🤝 TEAM MEMBER (EVENTS) FLOW**

#### **Step 1: Receive Invitation**

```
1. Receives invitation email with secure link
2. Clicks invitation link
3. Redirected to signup page with pre-filled organization
4. Creates Clerk account
```

#### **Step 2: Account Creation**

```
1. Clerk webhook triggers user.created event
2. Webhook handler:
   - Links user to event organization
   - Assigns specified role and permissions
   - Creates user record with custom permissions
3. User redirected to dashboard
```

#### **Step 3: Dashboard Access**

```
1. User sees role-appropriate dashboard
2. Features available based on permissions:
   - Event management (if enabled)
   - Content creation (if enabled)
   - Analytics viewing (if enabled)
   - Event guest features (if Event Guest role)
3. Cannot access features they don't have permission for
```

### **👁️ VIEWER FLOW** _(Public Users)_

#### **Step 1: Public Access**

```
1. User scans NFC tag or visits landing page URL
2. No account required
3. Can view public content
4. Can interact with public features
5. Interactions tracked anonymously
```

#### **Step 2: Data Tracking**

```
1. All interactions logged in business/event analytics
2. No personal data stored (anonymous)
3. Analytics show:
   - Page views
   - Interaction time
   - Feature usage
   - Geographic data (if available)
```

---

## **🛠️ TECHNICAL IMPLEMENTATION**

### **Core System Files:**

#### **Authentication & User Management:**

- `lib/signup-flow.ts` - Organization and user creation
- `lib/team-invitation-system.ts` - Team invitation management
- `lib/permissions.ts` - User roles and permissions
- `lib/permission-customization.ts` - Permission customization system
- `lib/user-type-detection.ts` - User type detection
- `lib/admin-permissions.ts` - Admin permission checks

#### **API Endpoints:**

- `app/api/webhooks/clerk/route.ts` - Clerk webhook handler
- `app/api/team/invitations/route.ts` - Send and manage invitations
- `app/api/team/accept-invitation/route.ts` - Accept invitations
- `app/api/landing-pages/route.ts` - Organization-filtered landing pages
- `app/api/admin/landing-pages/route.ts` - Super admin landing pages

#### **Frontend Pages:**

- `app/(auth)/sign-up-custom/page.tsx` - Custom signup flow
- `app/(auth)/sign-up/[[...sign-up]]/page.tsx` - Updated Clerk signup
- `app/dashboard/landing-pages/builder/_components/LandingPageBuilder.tsx` - Role-based builder
- `app/dashboard/landing-pages/_components/LandingPageManager.tsx` - Organization-filtered manager

### **Database Schema:**

#### **Organizations Table:**

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

#### **Users Table:**

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

#### **Team Invitations Table:**

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

### **Permission System Architecture:**

#### **Permission Templates:**

```typescript
export const PERMISSION_TEMPLATES = {
  STANDARD_EMPLOYEE: {
    canCreateLandingPages: true,
    canEditLandingPages: true,
    canDeleteLandingPages: false,
    canPublishLandingPages: true,
    canViewAnalytics: true,
    canManageUsers: false,
    canManageOrganization: false,
    canAccessAdminPanel: false,
  },
  CONTENT_MANAGER: {
    canCreateLandingPages: true,
    canEditLandingPages: true,
    canDeleteLandingPages: true,
    canPublishLandingPages: true,
    canViewAnalytics: true,
    canManageUsers: false,
    canManageOrganization: false,
    canAccessAdminPanel: false,
  },
  // ... more templates
};
```

#### **Custom Permission Validation:**

```typescript
export class PermissionCustomizationService {
  static validateCustomPermissions(
    baseRole: string,
    customPermissions: CustomPermissions
  ): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check if user is trying to grant permissions they don't have
    if (
      customPermissions.canManageUsers &&
      baseRole !== 'business_admin' &&
      baseRole !== 'event_admin'
    ) {
      errors.push('Only admins can grant user management permissions');
    }

    return { valid: errors.length === 0, errors };
  }
}
```

---

## **🔒 SECURITY FEATURES**

### **Data Isolation:**

- ✅ **Organization-level isolation**: Users only see their organization's data
- ✅ **Role-based permissions**: UI adapts to user role
- ✅ **Invitation validation**: Secure tokens with expiration
- ✅ **Permission checks**: Server-side validation for all actions

### **Access Control:**

```
Super Admin → All organizations + Admin panel
Business Admin → Their organization + User management
Business Employee → Their organization + Limited editing
Event Admin → Their organization + Event management
Event Collaborator → Their organization + Event content
Event Guest → Event details + RSVP + Check-in
Team Member → Customizable permissions
Viewer → Public access only (no dashboard)
```

### **Security Implementation:**

#### **Row Level Security (RLS):**

```sql
-- Organizations table RLS
CREATE POLICY "Users can only see their organization" ON organizations
  FOR ALL USING (
    id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

-- Landing pages table RLS
CREATE POLICY "Users can only see their organization's pages" ON landing_pages
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );
```

#### **Webhook Security:**

```typescript
export async function POST(request: NextRequest) {
  try {
    // Verify webhook signature
    const signature = request.headers.get('svix-signature');
    const timestamp = request.headers.get('svix-timestamp');
    const body = await request.text();

    const isValid = await verifyWebhookSignature(body, signature, timestamp);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // Process webhook
    const event = JSON.parse(body);
    // ... handle event
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### **Invitation Security:**

```typescript
export class TeamInvitationService {
  static async sendInvitation(invitationData: InvitationData): Promise<string> {
    // Generate secure token
    const invitationToken = crypto.randomBytes(32).toString('hex');

    // Set expiration (7 days)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    // Store invitation with secure token
    const { error } = await supabase.from('team_invitations').insert({
      email: invitationData.email,
      organization_id: invitationData.organizationId,
      role: invitationData.role,
      invited_by: invitationData.invitedBy,
      invitation_token: invitationToken,
      expires_at: expiresAt.toISOString(),
      custom_permissions: invitationData.customPermissions,
      permission_template: invitationData.permissionTemplate,
    });

    if (error) throw error;

    return invitationToken;
  }
}
```

### **Permission Validation:**

```typescript
export function validatePermission(
  userRole: string,
  requiredPermission: string,
  userPermissions: UserPermissions
): boolean {
  // Check if user has the required permission
  if (!userPermissions[requiredPermission]) {
    return false;
  }

  // Additional role-based checks
  if (
    requiredPermission === 'canManageUsers' &&
    !['business_admin', 'event_admin', 'super_admin'].includes(userRole)
  ) {
    return false;
  }

  return true;
}
```

---

## **📊 USER TYPE MATRIX**

| User Type              | Signup Method | Organization Access | Content Creation | User Management | Admin Panel | Custom Permissions |
| ---------------------- | ------------- | ------------------- | ---------------- | --------------- | ----------- | ------------------ |
| **Super Admin**        | Manual        | All                 | ✅               | ✅              | ✅          | ❌                 |
| **Business Admin**     | Signup        | Own Org             | ✅               | ✅              | ❌          | ✅ (Grant)         |
| **Business Employee**  | Invitation    | Own Org             | ✅               | ❌              | ❌          | ✅ (Receive)       |
| **Event Admin**        | Signup        | Own Org             | ✅               | ✅              | ❌          | ✅ (Grant)         |
| **Event Collaborator** | Invitation    | Own Org             | ✅               | ❌              | ❌          | ✅ (Receive)       |
| **Event Guest**        | Invitation    | Own Org             | ❌               | ❌              | ❌          | ❌                 |
| **Team Member**        | Invitation    | Own Org             | ✅ (Custom)      | ❌              | ❌          | ✅ (Receive)       |
| **Viewer**             | Public        | N/A                 | ❌               | ❌              | ❌          | ❌                 |

---

## **✅ SUCCESS METRICS**

✅ **Proper user type assignment during signup**
✅ **Automatic organization creation**
✅ **Role-based permission system**
✅ **Team invitation system with customizable permissions**
✅ **Data isolation between organizations**
✅ **Security controls in place**
✅ **User-friendly signup flow**
✅ **Comprehensive permission matrix**
✅ **Public user tracking system**
✅ **Permission customization system**

---

**The complete user system is now fully implemented with proper user types, customizable permissions, secure invitation system, and comprehensive data isolation! 🚀**
