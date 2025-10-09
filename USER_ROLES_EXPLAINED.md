# 👥 USER ROLES & PERMISSIONS - COSMIC PORTALS

## 🎯 **TL;DR - The Actual Roles You're Using:**

Your system has **3 main roles** (not 4):
1. **Owner** - The boss, full control
2. **Admin** - Manager, can do most things but not change org settings
3. **Member** - Regular team member, limited access

**There is NO "Editor" role in your actual schema** - it's just in the UI dropdown as a legacy option!

---

## 📊 **COMPLETE ROLE BREAKDOWN:**

### 🔴 **OWNER** (The Account Holder)
**Who is this?** The person who PAID for the account (or was set up as owner)

**What can they do?**
- ✅ Everything an Admin can do, PLUS:
- ✅ **Organization Settings** - Change org name, logo, branding
- ✅ **Billing/Subscription** - Manage payment and plan
- ✅ **Delete Organization** - Nuclear option
- ✅ **Transfer Ownership** - Make someone else the owner
- ✅ **Cannot be removed** - Only they can leave or transfer

**Permissions:**
```json
{
  "can_manage_organization": true,
  "can_manage_users": true,
  "can_manage_events": true,
  "can_manage_nfc_devices": true,
  "can_manage_landing_pages": true,
  "can_invite_team_members": true,
  "is_organization_owner": true
}
```

**Use Case:**
- Business owner who pays for the subscription
- Event organizer who runs the whole show
- Only ONE owner per organization

---

### 🟣 **ADMIN** (The Manager)
**Who is this?** Trusted team members who help run the organization

**What can they do?**
- ✅ **Manage Team** - Invite, remove, change roles (except owner)
- ✅ **Manage Events** - Create/edit/delete events
- ✅ **Manage NFC Devices** - Register, edit, delete devices
- ✅ **Manage Landing Pages** - Create, edit, publish pages
- ✅ **View Analytics** - See all org data
- ❌ **Organization Settings** - Can't change org name, logo, billing
- ❌ **Remove Owner** - Can't touch the owner's account

**Permissions:**
```json
{
  "can_manage_organization": false,
  "can_manage_users": true,
  "can_manage_events": true,
  "can_manage_nfc_devices": true,
  "can_manage_landing_pages": true,
  "can_invite_team_members": true
}
```

**Use Case:**
- Business manager who helps run operations
- Event coordinator who manages staff
- Multiple admins allowed per organization

---

### 🔵 **MEMBER** (Regular Team Member)
**Who is this?** Regular staff who need to do specific tasks

**What can they do?**
- ✅ **Manage NFC Devices** - Can add/edit devices for events
- ✅ **Manage Landing Pages** - Can create/edit content
- ✅ **View Analytics** - See basic stats for their work
- ❌ **Manage Team** - Can't invite or remove anyone
- ❌ **Manage Events** - Can't create or edit events (owner/admin only)
- ❌ **Organization Settings** - No access

**Permissions:**
```json
{
  "can_manage_organization": false,
  "can_manage_users": false,
  "can_manage_events": false,
  "can_manage_nfc_devices": true,
  "can_manage_landing_pages": true,
  "can_invite_team_members": false
}
```

**Use Case:**
- Business employee who manages NFC cards
- Event staff who handles check-ins
- Content creator who builds landing pages
- Multiple members allowed per organization

---

## 🚫 **"EDITOR" ROLE - DOES NOT EXIST!**

Your UI has an "Editor" option in the dropdown, but it's **not actually implemented**. Here's what happened:

**In your Team Management UI:**
```typescript
<option value="editor">Editor - Can edit content</option>
```

**But in your actual schema and logic:**
- ❌ No "editor" role in database
- ❌ No editor permissions defined
- ❌ Not used in any access control checks
- ✅ If someone sets role to "editor", it won't match anything and they'll have no access!

**Should you implement it?** Probably not needed. Here's why:
- **Members already can edit content** (landing pages, devices)
- **Admins can edit everything**
- Having 4 roles adds unnecessary complexity

**My Recommendation:** Remove "editor" from the dropdown to avoid confusion!

---

## 🔐 **SPECIAL ROLE: MASTER ADMIN (Super Admin)**

This is **separate** from the Owner/Admin/Member hierarchy.

**Who is this?** You (Ashton) - the platform owner

**What can they do?**
- ✅ Everything in ALL organizations (not just one)
- ✅ Access `/admin` panel to see all accounts
- ✅ Manage all landing pages across all orgs
- ✅ View platform-wide analytics
- ✅ This is for YOU to manage the entire SaaS platform

**Permission:**
```json
{
  "master_admin": true
}
```

**Use Case:**
- You managing your SaaS platform
- Support team helping customers (if you hire one)
- Only 1-2 people should have this globally

---

## 📋 **COMPARISON TABLE:**

| Feature | Owner | Admin | Member | Editor* |
|---------|-------|-------|--------|---------|
| Organization Settings | ✅ | ❌ | ❌ | ❌ |
| Manage Team | ✅ | ✅ | ❌ | ❌ |
| Invite Users | ✅ | ✅ | ❌ | ❌ |
| Manage Events | ✅ | ✅ | ❌ | ❌ |
| Manage NFC Devices | ✅ | ✅ | ✅ | N/A |
| Manage Landing Pages | ✅ | ✅ | ✅ | N/A |
| View Analytics | ✅ | ✅ | ✅ | N/A |
| Billing/Subscription | ✅ | ❌ | ❌ | ❌ |
| Can be removed | ❌ | ✅ | ✅ | ✅ |

\* Editor role doesn't exist in your system

---

## 🎯 **REAL-WORLD EXAMPLES:**

### **Example 1: Party Time Texas (Your Event Business)**
```
Owner: You (ashton@partytimetexas.com)
├─ Can manage billing, org settings, everything
│
Admin: Sarah (Event Coordinator)
├─ Can create events, manage staff, can't touch billing
│
Member: John (Event Staff)
├─ Can scan NFC badges, view attendee lists
│
Member: Lisa (Content Manager)
└─ Can create landing pages for events
```

### **Example 2: Corporate Business Account**
```
Owner: CEO (John Smith)
├─ Pays for subscription, controls everything
│
Admin: Marketing Manager (Jane Doe)
├─ Manages team, creates campaigns, can't change billing
│
Member: Sales Rep 1 (Bob)
├─ Uses NFC business cards, views their analytics
│
Member: Sales Rep 2 (Alice)
└─ Creates landing pages, manages their devices
```

---

## 🛠️ **QUICK FIX NEEDED:**

**Remove "Editor" from the Team Management UI:**

In `app/dashboard/team/_components/TeamManagement.tsx`, change:

```typescript
// CURRENT (WRONG):
<option value="member">Member</option>
<option value="editor">Editor</option>  // ❌ This doesn't exist!
<option value="admin">Admin</option>

// SHOULD BE:
<option value="member">Member - Basic Access</option>
<option value="admin">Admin - Full Management</option>
```

---

## 💡 **KEY TAKEAWAYS:**

1. **You have 3 roles:** Owner, Admin, Member (NOT 4)
2. **Editor doesn't exist** - remove it from UI to avoid confusion
3. **Owner = 1 per org** - The account holder
4. **Admin = Multiple** - Trusted managers
5. **Member = Multiple** - Regular staff
6. **Master Admin = You** - Platform owner (separate from org roles)

---

## 🔥 **SIMPLIFIED ANSWER TO YOUR QUESTION:**

**"So wtf is the difference between admin, members, and editors lol"**

**Short Answer:**
- **Admin** = Manager (can do almost everything, invite people, manage events)
- **Member** = Worker (can do their job, manage devices/pages, can't manage people)
- **Editor** = DOESN'T EXIST (it's a UI bug - remove it!)

**Even Shorter Answer:**
- **Admin** = Boss
- **Member** = Employee
- **Editor** = Ghost 👻 (not real)

---

That's it! Your role system is actually pretty simple - just need to clean up that "editor" option in the UI! 🎉

