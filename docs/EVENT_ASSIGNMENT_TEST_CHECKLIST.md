# 🧪 Event Assignment System Test Checklist

## 📋 **TESTING OVERVIEW**

This checklist verifies that the Event Assignment System is working correctly and that members only see their assigned events.

---

## 🔍 **PRE-TEST SETUP**

### **1. Database Verification**
- [ ] Run `scripts/test-event-assignment-system.sql` in Supabase
- [ ] Verify `events` table exists with `assigned_members` column
- [ ] Check that RLS policies include `super_admin` role
- [ ] Confirm test data is created successfully

### **2. API Endpoints Verification**
- [ ] `/api/events` - List events with filtering
- [ ] `/api/events` - Create new events
- [ ] `/api/events/{id}` - Get/Update/Delete individual events
- [ ] `/api/events/{id}/assign` - Assign members to events
- [ ] `/api/team` - Get team members for assignment

---

## 🎯 **ROLE-BASED ACCESS TESTS**

### **🔴 Super Admin Tests**
- [ ] **Can see all events** across all organizations
- [ ] **Can create events** in any organization
- [ ] **Can assign members** to any event
- [ ] **Can edit/delete** any event
- [ ] **Filter toggle shows** "All Events" and "My Events"

### **🟠 Owner Tests**
- [ ] **Can see all events** in their organization only
- [ ] **Can create events** in their organization
- [ ] **Can assign members** to events in their organization
- [ ] **Can edit/delete** events in their organization
- [ ] **Filter toggle shows** "All Events" and "My Events"

### **🟣 Admin Tests**
- [ ] **Can see all events** in their organization only
- [ ] **Can create events** in their organization
- [ ] **Can assign members** to events in their organization
- [ ] **Can edit/delete** events in their organization
- [ ] **Filter toggle shows** "All Events" and "My Events"

### **🔵 Member Tests**
- [ ] **Can only see events** they're assigned to
- [ ] **Cannot create events** (no "Create Event" button)
- [ ] **Cannot assign members** (no "Assign Members" button)
- [ ] **Cannot edit/delete** events (no edit/delete buttons)
- [ ] **No filter toggle** (only sees their assigned events)

### **🟢 Guest Tests**
- [ ] **Can only see events** they're specifically invited to
- [ ] **Cannot create events** (no "Create Event" button)
- [ ] **Cannot assign members** (no "Assign Members" button)
- [ ] **Cannot edit/delete** events (no edit/delete buttons)
- [ ] **No filter toggle** (only sees their assigned events)

---

## 🔧 **FUNCTIONALITY TESTS**

### **Event Creation Tests**
- [ ] **Form validation** works correctly
- [ ] **Team member selection** shows available members
- [ ] **Event assignment** saves correctly to database
- [ ] **Role restrictions** prevent unauthorized creation

### **Event Assignment Tests**
- [ ] **Member selection** shows all team members
- [ ] **Assignment updates** are saved to database
- [ ] **Assigned members count** displays correctly
- [ ] **Assignment persists** after page refresh

### **Event Filtering Tests**
- [ ] **"All Events" filter** shows appropriate events per role
- [ ] **"My Events" filter** shows only assigned events
- [ ] **Filter persistence** works across page refreshes
- [ ] **Empty states** display correctly when no events

### **Event Management Tests**
- [ ] **Inline editing** works for authorized users
- [ ] **Status updates** save correctly
- [ ] **Event deletion** works for authorized users
- [ ] **Error handling** displays appropriate messages

---

## 🚨 **SECURITY TESTS**

### **RLS Policy Tests**
- [ ] **Database level security** prevents unauthorized access
- [ ] **Cross-organization isolation** works correctly
- [ ] **Role-based restrictions** enforced at database level
- [ ] **API endpoint security** matches database policies

### **API Security Tests**
- [ ] **Unauthorized requests** return 403 Forbidden
- [ ] **Invalid event IDs** return 404 Not Found
- [ ] **Missing authentication** returns 401 Unauthorized
- [ ] **Role validation** works on all endpoints

---

## 📊 **DATA INTEGRITY TESTS**

### **Assignment Data Tests**
- [ ] **assigned_members** column stores JSONB array correctly
- [ ] **Member IDs** are valid user IDs
- [ ] **Assignment updates** don't corrupt existing data
- [ ] **Empty assignments** are handled correctly

### **Event Data Tests**
- [ ] **Event creation** populates all required fields
- [ ] **Event updates** preserve existing assignments
- [ ] **Event deletion** doesn't affect other events
- [ ] **Date/time handling** works correctly

---

## 🎯 **USER EXPERIENCE TESTS**

### **UI/UX Tests**
- [ ] **Loading states** display during API calls
- [ ] **Error messages** are user-friendly
- [ ] **Success feedback** confirms actions
- [ ] **Responsive design** works on mobile

### **Performance Tests**
- [ ] **Page load time** is acceptable (< 2 seconds)
- [ ] **API response time** is fast (< 500ms)
- [ ] **Large event lists** don't cause performance issues
- [ ] **Concurrent users** don't cause conflicts

---

## ✅ **TEST COMPLETION CHECKLIST**

### **Before Marking Complete:**
- [ ] All role-based access tests pass
- [ ] All functionality tests pass
- [ ] All security tests pass
- [ ] All data integrity tests pass
- [ ] All user experience tests pass
- [ ] No console errors in browser
- [ ] No server errors in logs
- [ ] Database queries are optimized

### **Documentation:**
- [ ] Test results documented
- [ ] Any issues found and fixed
- [ ] Performance metrics recorded
- [ ] Security validation completed

---

## 🚀 **NEXT STEPS AFTER TESTING**

Once all tests pass:

1. **Deploy to production** environment
2. **Monitor user feedback** for any edge cases
3. **Move to next foundational piece** (NFC Linking or Analytics)
4. **Update documentation** with any changes made

---

## 📝 **TEST NOTES**

**Test Environment:** Local development
**Database:** Supabase (PostgreSQL)
**Authentication:** Clerk
**Frontend:** Next.js 15 + React 19
**Backend:** Next.js API Routes

**Last Updated:** Today
**Tested By:** [Your Name]
**Status:** [ ] In Progress [ ] Complete [ ] Needs Fixes
