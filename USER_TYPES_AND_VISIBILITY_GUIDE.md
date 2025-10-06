# 👥 **COSMIC PORTALS - USER TYPES & VISIBILITY GUIDE**

## **🎯 Complete User Type Breakdown**

This document clarifies exactly what each user type can see and do in the Cosmic Portals system.

---

## **👑 SUPER ADMIN**

### **Who They Are:**
- Platform administrators
- Users with `master_admin: true` in organization settings
- Role: `owner` in the master organization

### **Visibility:**
- ✅ **ALL organizations** and their data
- ✅ **ALL landing pages** across all organizations
- ✅ **ALL users** across all organizations
- ✅ **ALL NFC devices** across all organizations
- ✅ **ALL events** across all organizations
- ✅ **ALL analytics** and platform metrics

### **Features:**
- ✅ Create/edit/delete any landing page
- ✅ Access admin panel (`/admin`)
- ✅ Manage any organization
- ✅ View all analytics
- ✅ Create pages for any organization
- ✅ Assign permissions to any user
- ✅ Platform-wide oversight

### **Data Isolation:**
- **NO isolation** - can see everything
- **Purpose**: Platform management and oversight

---

## **🏢 BUSINESS ADMIN**

### **Who They Are:**
- Business owners/managers
- Role: `owner` or `admin` in their organization
- Organization plan: Business (not event-focused)

### **Visibility:**
- ✅ **ONLY their organization's** landing pages
- ✅ **ONLY their organization's** users
- ✅ **ONLY their organization's** NFC devices
- ✅ **ONLY their organization's** events
- ✅ **ONLY their organization's** analytics

### **Features:**
- ✅ Create/edit/delete landing pages for their org
- ✅ Manage team members in their org
- ✅ Assign permissions to team members
- ✅ View analytics for their org
- ✅ Manage NFC devices for their org
- ❌ Cannot access admin panel
- ❌ Cannot see other organizations' data

### **Data Isolation:**
- **Organization-level isolation** - only their org's data
- **Purpose**: Business management within their organization

---

## **👥 BUSINESS EMPLOYEE**

### **Who They Are:**
- Team members in business organizations
- Role: `member` in business organization
- Organization plan: Business

### **Visibility:**
- ✅ **ONLY their organization's** landing pages
- ✅ **ONLY their organization's** users (limited info)
- ✅ **ONLY their organization's** NFC devices
- ✅ **ONLY their organization's** events
- ✅ **ONLY their organization's** analytics

### **Features:**
- ✅ Create/edit landing pages (no delete)
- ✅ Publish landing pages
- ✅ View analytics for their org
- ✅ Manage NFC devices for their org
- ❌ Cannot delete landing pages
- ❌ Cannot manage team members
- ❌ Cannot access admin panel

### **Data Isolation:**
- **Organization-level isolation** - only their org's data
- **Purpose**: Team member with limited permissions

---

## **🎉 EVENT ADMIN**

### **Who They Are:**
- Event planners/hosts
- Role: `member` in event-focused organization
- Organization plan: Event

### **Visibility:**
- ✅ **ONLY their organization's** landing pages
- ✅ **ONLY their organization's** users (limited info)
- ✅ **ONLY their organization's** NFC devices
- ✅ **ONLY their organization's** events
- ✅ **ONLY their organization's** analytics

### **Features:**
- ✅ Create/edit landing pages for events
- ✅ Publish event landing pages
- ✅ View event analytics
- ✅ Manage event NFC devices
- ❌ Cannot delete landing pages
- ❌ Cannot manage team members
- ❌ Cannot access admin panel

### **Data Isolation:**
- **Organization-level isolation** - only their org's data
- **Purpose**: Event management within their organization

---

## **👁️ VIEWER**

### **Who They Are:**
- Read-only team members
- Role: `viewer` or limited permissions
- Any organization type

### **Visibility:**
- ✅ **ONLY pages they have explicit access to**
- ✅ **ONLY their organization's** users (limited info)
- ✅ **ONLY their organization's** analytics (if granted)

### **Features:**
- ✅ View landing pages (read-only)
- ✅ View analytics (if granted access)
- ❌ Cannot create/edit/delete anything
- ❌ Cannot publish pages
- ❌ Cannot manage users
- ❌ Cannot access admin panel

### **Data Isolation:**
- **Page-level isolation** - only pages they have access to
- **Purpose**: Read-only access for team members

---

## **🔒 DATA ISOLATION IMPLEMENTATION**

### **API Level Protection:**

#### **Regular Users (Business Admin, Employee, Event Admin, Viewer):**
```typescript
// API automatically filters by organization
const orgData = await getUserOrganizationData(userId);
const pages = await supabase
  .from('landing_pages')
  .select('*')
  .eq('organization_id', orgData.organization.id); // ONLY their org
```

#### **Super Admin:**
```typescript
// Admin API with super admin validation
const isAdmin = await validateAdminAccess(userId);
if (!isAdmin) return 403;

const pages = await supabase
  .from('landing_pages')
  .select('*'); // ALL organizations
```

### **Database Level Protection:**
- **Row Level Security (RLS)** implemented
- **Organization-based filtering** in all queries
- **Permission-based access** for individual pages

### **Frontend Level Protection:**
- **Permission checks** before rendering components
- **Role-based UI** controls
- **Access denied screens** for unauthorized users

---

## **📊 VISIBILITY MATRIX**

| User Type | Own Org Pages | Other Org Pages | Admin Panel | Analytics | User Management |
|-----------|---------------|-----------------|-------------|-----------|-----------------|
| **Super Admin** | ✅ All | ✅ All | ✅ Full | ✅ All | ✅ All |
| **Business Admin** | ✅ All | ❌ None | ❌ None | ✅ Org Only | ✅ Org Only |
| **Business Employee** | ✅ Limited | ❌ None | ❌ None | ✅ Org Only | ❌ None |
| **Event Admin** | ✅ Event Only | ❌ None | ❌ None | ✅ Org Only | ❌ None |
| **Viewer** | ✅ Assigned Only | ❌ None | ❌ None | ✅ If Granted | ❌ None |

---

## **🛡️ SECURITY FEATURES**

### **Multi-Layer Protection:**
1. **Authentication** - Clerk user verification
2. **Authorization** - Role-based permission checks
3. **Data Filtering** - Organization-level isolation
4. **API Validation** - Server-side permission verification
5. **UI Controls** - Frontend permission-based rendering

### **Access Control Flow:**
```
User Login → Role Detection → Permission Check → Data Filtering → UI Rendering
```

### **Permission Validation:**
- **Server-side**: All API endpoints validate permissions
- **Client-side**: UI components check permissions before rendering
- **Database**: RLS policies enforce organization isolation

---

## **✅ VERIFICATION CHECKLIST**

### **Super Admin Can:**
- [ ] See all organizations' landing pages
- [ ] Access admin panel
- [ ] Create pages for any organization
- [ ] View platform-wide analytics

### **Business Admin Can:**
- [ ] See only their organization's pages
- [ ] Create/edit/delete their org's pages
- [ ] Manage team members
- [ ] View their org's analytics
- [ ] Cannot see other organizations' data

### **Business Employee Can:**
- [ ] See only their organization's pages
- [ ] Create/edit (not delete) their org's pages
- [ ] View their org's analytics
- [ ] Cannot manage team members
- [ ] Cannot see other organizations' data

### **Event Admin Can:**
- [ ] See only their organization's pages
- [ ] Create/edit event pages
- [ ] View their org's analytics
- [ ] Cannot manage team members
- [ ] Cannot see other organizations' data

### **Viewer Can:**
- [ ] See only pages they have access to
- [ ] View analytics (if granted)
- [ ] Cannot create/edit/delete anything
- [ ] Cannot see other organizations' data

---

## **🎯 SUMMARY**

**✅ Each business can only see their own landing pages**
**✅ Super admin can see all pages for platform management**
**✅ Proper data isolation implemented at all levels**
**✅ Role-based permissions working correctly**
**✅ Security controls in place**

The system ensures complete data isolation between organizations while allowing super admins to manage the entire platform. Each user type has appropriate visibility and feature access based on their role and organization.
