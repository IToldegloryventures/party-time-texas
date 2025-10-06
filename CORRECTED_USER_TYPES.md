# 👥 **COSMIC PORTALS - CORRECTED USER TYPES**

## **✅ Updated User Type Definitions**

This document reflects the corrected understanding of user types across the platform.

---

## **🔧 CORRECTED USER TYPES**

### **1. 👑 SUPER ADMIN**
- **Who**: Platform administrators (you)
- **How Created**: Manual assignment with `master_admin: true`
- **Access**: 
  - ✅ ALL organizations and their data
  - ✅ Admin panel (`/admin`)
  - ✅ Platform-wide analytics
  - ✅ User management across all organizations
  - ✅ Full control over everything

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

### **7. 👤 TEAM MEMBER** *(NEW)*
- **Who**: Team members with dashboard access and customizable permissions
- **How Created**: Invited via team invitation system
- **Access**:
  - ✅ Dashboard access
  - ✅ **Customizable permissions** based on admin settings
  - ✅ Organization-specific data
  - ✅ Role-based feature access

### **8. 👁️ VIEWER** *(CORRECTED)*
- **Who**: People who scan NFC tags or visit landing pages
- **How Created**: **NOT invited** - they're anonymous/public users
- **Access**:
  - ✅ Can view public landing pages
  - ✅ Can scan NFC tags
  - ✅ Can interact with public content
  - ❌ **NO dashboard access**
  - ❌ **NO analytics access**
  - ❌ **NO account required**
- **Data**: Their interactions are tracked in the business/event analytics

---

## **🔧 PERMISSION CUSTOMIZATION SYSTEM**

### **Permission Templates Available:**

#### **Standard Employee** (Default)
- Create/edit content, view analytics
- Cannot delete content or manage users

#### **Content Manager**
- All content permissions including deletion
- Cannot manage users

#### **Analytics Viewer**
- View analytics only
- Cannot create/edit content

#### **Event Coordinator** (Event only)
- Full event management permissions
- Cannot manage users

#### **Read Only**
- View content and analytics only
- Cannot create/edit anything

### **Custom Permission Features:**
- ✅ **Business Admin** can customize permissions for business employees and team members
- ✅ **Event Admin** can customize permissions for event collaborators and team members
- ✅ **Permission templates** for easy setup
- ✅ **Granular control** over specific features
- ✅ **Validation** to prevent permission escalation

---

## **📊 UPDATED USER TYPE MATRIX**

| User Type | How Created | Dashboard Access | Content Creation | Analytics Access | Custom Permissions | Public Access |
|-----------|-------------|------------------|------------------|------------------|-------------------|---------------|
| **Super Admin** | Manual | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Business Admin** | Signup | ✅ | ✅ | ✅ | ✅ (Grant) | ❌ |
| **Business Employee** | Invitation | ✅ | ✅ | ✅ | ✅ (Receive) | ❌ |
| **Event Admin** | Signup | ✅ | ✅ | ✅ | ✅ (Grant) | ❌ |
| **Event Collaborator** | Invitation | ✅ | ✅ | ✅ | ✅ (Receive) | ❌ |
| **Event Guest** | Invitation | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Team Member** | Invitation | ✅ | ✅ (Custom) | ✅ (Custom) | ✅ (Receive) | ❌ |
| **Viewer** | Public | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## **🔄 CORRECTED USER FLOWS**

### **For Public Users (Viewers):**
1. **Scan NFC tag** or **visit landing page**
2. **View content** without account
3. **Interactions tracked** in business analytics
4. **No dashboard access** - they're anonymous

### **For Business Owners:**
1. **Sign up** → Become **Business Admin**
2. **Invite team members** with customizable permissions
3. **Grant specific permissions** to each team member
4. **Track public interactions** in analytics

### **For Event Planners:**
1. **Sign up** → Become **Event Admin**
2. **Invite event staff** with customizable permissions
3. **Invite event guests** for special access
4. **Track public interactions** in analytics

---

## **🎯 KEY CORRECTIONS MADE**

### **✅ Viewer Definition Fixed:**
- **Before**: Invited team member with read-only access
- **After**: Anonymous public users who scan NFC/visit pages

### **✅ Permission Customization Added:**
- **Business Admin** can customize permissions for team members
- **Event Admin** can customize permissions for collaborators
- **Permission templates** for easy setup
- **Granular control** over specific features

### **✅ Team Member Role Added:**
- **Dashboard access** with customizable permissions
- **Flexible role** for various team needs
- **Permission-based** feature access

### **✅ Analytics Tracking Clarified:**
- **Public interactions** tracked in business/event analytics
- **No account required** for public users
- **Admin dashboards** show all interactions

---

## **🚀 IMPLEMENTATION STATUS**

✅ **User types corrected and updated**
✅ **Permission customization system created**
✅ **Team invitation system updated**
✅ **Analytics tracking clarified**
✅ **Public user flow defined**

**The user type system now correctly reflects that viewers are anonymous public users, while team members have dashboard access with customizable permissions! 🚀**
