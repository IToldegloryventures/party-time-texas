# 🎯 COSMIC PORTALS - CONSOLIDATED PRIORITY LIST

## 🚨 **IMMEDIATE PRIORITY** (Fix These NOW)

### **1. Event Assignment System** - ROOT ISSUE

**Status**: Database ready, UI/API broken
**Blocking**: Entire Events Management system

- [ ] ✅ **COMPLETED**: Fixed `/api/team` endpoint (was using wrong Supabase client)
- [ ] **TODO**: Test team API endpoint works
- [ ] **TODO**: Create event assignment UI in CreateEventModal
- [ ] **TODO**: Add "My Events" vs "All Events" toggle to dashboard
- [ ] **TODO**: Update event queries to filter by assignment
- [ ] **TODO**: Test members only see assigned events

### **2. Analytics Dashboard** - MISSING COMPLETELY

**Status**: Basic stats exist, no dashboard
**Blocking**: User value and engagement tracking

- [ ] **TODO**: Create `/app/dashboard/analytics/page.tsx`
- [ ] **TODO**: Add scan analytics charts
- [ ] **TODO**: Add event analytics
- [ ] **TODO**: Add landing page analytics
- [ ] **TODO**: Add export functionality

---

## 🔧 **CRITICAL FIXES** (Technical Debt)

### **3. Role-Based Permissions Enforcement**

**Status**: Backend exists, not enforced in UI
**Issue**: All users see same dashboard

- [ ] **TODO**: Add role checks to all dashboard components
- [ ] **TODO**: Hide/show features based on user role
- [ ] **TODO**: Add permission checks to API routes
- [ ] **TODO**: Test Super Admin vs regular user access

### **4. Organization Management UI**

**Status**: Backend exists, no UI
**Issue**: No way to edit organization settings

- [ ] **TODO**: Create organization settings page
- [ ] **TODO**: Add logo upload functionality
- [ ] **TODO**: Add organization profile editing
- [ ] **TODO**: Add team management interface

---

## 📱 **CORE FEATURES** (User Value)

### **5. Landing Page Builder Improvements**

**Status**: Basic form exists, not drag-and-drop
**Issue**: Misleading name, limited functionality

- [ ] **TODO**: Either implement actual drag-and-drop
- [ ] **TODO**: OR rename to "Landing Page Builder" (more accurate)
- [ ] **TODO**: Add more template options
- [ ] **TODO**: Add image upload functionality

### **6. NFC Device Management**

**Status**: Basic functionality works
**Issue**: Limited management features

- [ ] **TODO**: Add bulk device operations
- [ ] **TODO**: Add device templates
- [ ] **TODO**: Add device performance analytics
- [ ] **TODO**: Add QR code generation

---

## 💰 **BUSINESS FEATURES** (Revenue)

### **7. Stripe Payment Integration**

**Status**: Backend exists, no UI
**Issue**: No way to upgrade plans

- [ ] **TODO**: Create payment UI
- [ ] **TODO**: Add plan upgrade/downgrade
- [ ] **TODO**: Add billing history
- [ ] **TODO**: Test full payment flow

### **8. Task Management System**

**Status**: Database schema ready, no UI
**Issue**: Complete feature missing

- [ ] **TODO**: Create task management UI
- [ ] **TODO**: Add task assignment functionality
- [ ] **TODO**: Add task status tracking
- [ ] **TODO**: Add task templates

---

## 🚀 **NICE TO HAVE** (Future)

### **9. Advanced Features**

- [ ] Web NFC API integration
- [ ] Mobile app/PWA
- [ ] Advanced analytics
- [ ] Third-party integrations

---

## ✅ **COMPLETED TODAY**

- ✅ **NFC Device-to-Landing Page system** - Fully functional
- ✅ **Global slug uniqueness constraint** - Database errors fixed
- ✅ **Super Admin dashboard access** - Working properly
- ✅ **Landing page creation and display** - Working properly
- ✅ **Team API endpoint** - Fixed Supabase client issue

---

## 🎯 **NEXT ACTION**

**Focus on Event Assignment System** - This is the root blocker for the entire Events Management feature.

**Estimated time**: 1-2 days to complete
**Impact**: Unblocks entire Events Management system
**Priority**: HIGHEST - This is blocking core functionality

---

_This is the ONE list to follow. All other TODO files are deprecated._
