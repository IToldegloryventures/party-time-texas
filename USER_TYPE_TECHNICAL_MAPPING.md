# 🎯 **COSMIC PORTALS - USER TYPE TO TECHNICAL MAPPING**

## **HOW USER TYPES CONNECT TO TECHNICAL ARCHITECTURE**

This document shows exactly how each user type interacts with specific technical components and features.

---

## **👑 SUPER ADMIN**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    SUPER ADMIN ACCESS                                         │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Web App       │  │   Database      │  │   External      │  │   Security      │              │
│  │   - Admin Panel │  │   - ALL Tables │  │   - ALL APIs    │  │   - Full Access │              │
│  │   - Analytics   │  │   - ALL Orgs   │  │   - Billing     │  │   - Monitoring  │              │
│  │   - User Mgmt   │  │   - ALL Data   │  │   - Payments    │  │   - Logs        │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Super Admin → Web App → Authentication → API Gateway → Database (ALL ACCESS)
                ↓
            External Services (Billing, Analytics, Monitoring)
```

### **Features Access:**

- **Platform Management**: All organizations, users, billing
- **System Monitoring**: Performance, errors, security
- **Analytics**: Platform-wide metrics and insights
- **User Management**: Create, modify, delete any user
- **Billing Management**: All subscriptions and payments

---

## **🏢 BUSINESS ADMIN (Client Type)**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  BUSINESS ADMIN ACCESS                                        │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Web App       │  │   Database      │  │   External      │  │   Mobile App    │              │
│  │   - Dashboard   │  │   - Org Data    │  │   - AI Content │  │   - Management  │              │
│  │   - Analytics   │  │   - Team Data   │  │   - Payments   │  │   - Monitoring  │              │
│  │   - Campaigns   │  │   - Events      │  │   - Email/SMS │  │   - Reports     │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Business Admin → Web App → Authentication → API Gateway → Database (ORG-LEVEL ACCESS)
                ↓
            External Services (AI, Payments, Communications)
                ↓
            Mobile App (Management & Monitoring)
```

### **Features Access:**

- **Organization Management**: Company settings, team management
- **NFC Device Management**: Register, track, analyze devices
- **Event Management**: Create, manage, analyze events
- **Analytics Dashboard**: ROI, engagement, performance metrics
- **Team Collaboration**: Invite employees, assign roles
- **Billing Management**: Subscription, usage, payments

---

## **👥 BUSINESS EMPLOYEE**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  BUSINESS EMPLOYEE ACCESS                                     │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Mobile App   │  │   Database      │  │   External      │  │   Web App       │              │
│  │   - NFC Scan   │  │   - Employee    │  │   - Push Notifs │  │   - Limited     │              │
│  │   - Check-in   │  │   - Profile     │  │   - Awards      │  │   - Dashboard   │              │
│  │   - Recognition│  │   - Team Data  │  │   - Updates     │  │   - Reports     │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Business Employee → Mobile App → Authentication → API Gateway → Database (EMPLOYEE-LEVEL ACCESS)
                    ↓
                External Services (Push Notifications, Recognition)
                    ↓
                Web App (Limited Dashboard Access)
```

### **Features Access:**

- **NFC Scanning**: Business cards, signage, devices
- **Employee Portal**: Profile, team updates, recognition
- **Spot Awards**: Receive and view recognition
- **Team Collaboration**: View team updates, announcements
- **Limited Analytics**: Personal performance metrics
- **Check-in/Check-out**: Time tracking, location data

---

## **🎉 EVENT ADMIN (Event Planner/Host)**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  EVENT ADMIN ACCESS                                          │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Web App       │  │   Database      │  │   External      │  │   Mobile App    │              │
│  │   - Event Mgmt  │  │   - Event Data  │  │   - AI Content │  │   - Event Tools │              │
│  │   - RSVP Mgmt   │  │   - Guest Lists │  │   - Email/SMS │  │   - Check-ins   │              │
│  │   - Analytics   │  │   - Photos      │  │   - Notifications│  │   - Monitoring │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Event Admin → Web App → Authentication → API Gateway → Database (EVENT-LEVEL ACCESS)
                ↓
            External Services (AI, Communications, File Storage)
                ↓
            Mobile App (Event Management Tools)
```

### **Features Access:**

- **Event Creation**: Life events, business events, sports events
- **Guest Management**: Invitations, RSVP tracking, guest lists
- **RSVP Management**: Responses, updates, reminders
- **Check-in System**: Real-time attendance tracking
- **Photo Gallery**: Upload, manage, share event photos
- **Analytics**: Event performance, engagement metrics
- **Communications**: Email invitations, SMS updates, push notifications

---

## **👤 EVENT GUEST**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  EVENT GUEST ACCESS                                          │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Mobile App   │  │   Database      │  │   External      │  │   Web App       │              │
│  │   - NFC Scan   │  │   - Guest       │  │   - Push Notifs │  │   - Event Info  │              │
│  │   - RSVP       │  │   - Profile     │  │   - Updates     │  │   - Photos      │              │
│  │   - Check-in   │  │   - Event Data  │  │   - Reminders  │  │   - Sharing     │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Event Guest → Mobile App → Authentication → API Gateway → Database (GUEST-LEVEL ACCESS)
                ↓
            External Services (Notifications, File Storage)
                ↓
            Web App (Event Information Access)
```

### **Features Access:**

- **NFC Scanning**: Event invitations, information access
- **RSVP System**: Respond to invitations, update attendance
- **Check-in**: Event attendance, location tracking
- **Photo Gallery**: View, upload, share event photos
- **Event Information**: Details, schedule, updates
- **Notifications**: Event reminders, updates, announcements
- **Social Features**: Share photos, connect with other guests

---

## **🛍️ CUSTOMER (Account Holder)**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  CUSTOMER ACCESS                                             │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Mobile App   │  │   Database      │  │   External      │  │   Web App       │              │
│  │   - NFC Scan   │  │   - Customer    │  │   - Push Notifs │  │   - Account     │              │
│  │   - Account    │  │   - Profile     │  │   - Promotions  │  │   - History     │              │
│  │   - History    │  │   - Interactions│  │   - Updates     │  │   - Preferences │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Customer → Mobile App → Authentication → API Gateway → Database (CUSTOMER-LEVEL ACCESS)
            ↓
        External Services (Notifications, Marketing)
            ↓
        Web App (Account Management)
```

### **Features Access:**

- **NFC Scanning**: Business cards, products, services
- **Account Creation**: Profile setup, preferences
- **Interaction History**: Scan history, engagement tracking
- **Notifications**: Promotions, updates, offers
- **Preferences**: Communication settings, interests
- **Loyalty Features**: Rewards, special offers, exclusive content

---

## **👤 BASIC USER (Anonymous Scanner)**

### **Technical Access Points:**

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  BASIC USER ACCESS                                           │
│                                                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Mobile App   │  │   Database      │  │   External      │  │   Web App       │              │
│  │   - NFC Scan   │  │   - Anonymous   │  │   - Basic       │  │   - Limited     │              │
│  │   - Basic Info │  │   - Tracking    │  │   - Content     │  │   - Public      │              │
│  │   - No Account │  │   - Analytics   │  │   - Access       │  │   - Information │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### **Data Flow:**

```
Basic User → Mobile App → API Gateway → Database (ANONYMOUS ACCESS)
                ↓
            External Services (Basic Content)
                ↓
            Web App (Public Information)
```

### **Features Access:**

- **NFC Scanning**: Basic information access
- **Public Content**: Event details, business information
- **No Account Required**: Anonymous access
- **Limited Features**: Basic information only
- **No Personalization**: Generic content and experience
- **No History**: No tracking of interactions

---

## **🔄 CROSS-FUNCTIONAL USER JOURNEYS**

### **Business Owner Using Multiple Features:**

```
1. Marketing Campaigns → NFC Devices → Analytics → ROI Tracking
2. Internal Events → Employee Management → Recognition → Team Building
3. Customer Engagement → Landing Pages → Analytics → Conversion Tracking
```

### **Event Planner Managing Multiple Events:**

```
1. Wedding Planning → Guest Management → RSVP → Check-in → Photo Gallery
2. Corporate Event → Employee Engagement → Analytics → Follow-up
3. Sports Event → Fan Engagement → Merchandise → Social Media
```

### **School Administrator:**

```
1. Student Management → NFC Cards → Attendance → Parent Portal
2. Sports Events → Team Management → Fan Engagement → Analytics
3. Parent Communication → Notifications → Updates → Engagement
```

---

## **📊 FEATURE-TO-TECHNOLOGY MAPPING**

### **NFC Device Management:**

- **Web App**: Device registration, tracking, analytics
- **Mobile App**: NFC scanning, real-time updates
- **Database**: Device data, scan history, location tracking
- **External Services**: Push notifications, location services

### **Event Management:**

- **Web App**: Event creation, guest management, RSVP tracking
- **Mobile App**: Check-in, photo upload, real-time updates
- **Database**: Event data, attendee information, photos
- **External Services**: Email invitations, SMS updates, file storage

### **Analytics & Reporting:**

- **Web App**: Dashboard, reports, insights
- **Mobile App**: Real-time metrics, notifications
- **Database**: Analytics data, user behavior, performance metrics
- **External Services**: AI insights, data processing, reporting

### **Photo Gallery:**

- **Web App**: Photo management, sharing, moderation
- **Mobile App**: Photo upload, real-time sharing, offline access
- **Database**: Photo metadata, user permissions, sharing settings
- **External Services**: File storage, CDN, image processing

---

## **🔒 SECURITY & ACCESS CONTROL**

### **Row Level Security (RLS) Implementation:**

```
Super Admin: ALL ACCESS
Business Admin: ORGANIZATION-LEVEL ACCESS
Business Employee: EMPLOYEE-LEVEL ACCESS
Event Admin: EVENT-LEVEL ACCESS
Event Guest: GUEST-LEVEL ACCESS
Customer: CUSTOMER-LEVEL ACCESS
Basic User: PUBLIC ACCESS
```

### **API Endpoint Access:**

```
/api/admin/* → Super Admin only
/api/business/* → Business Admin + Business Employee
/api/events/* → Event Admin + Event Guest
/api/customer/* → Customer + Basic User
/api/public/* → All users
```

### **Database Table Access:**

```
organizations → Super Admin + Business Admin
users → Super Admin + Business Admin
nfc_devices → Business Admin + Business Employee
events → Event Admin + Event Guest
attendees → Event Admin + Event Guest
analytics → Business Admin + Event Admin
```

---

**This mapping shows exactly how each user type connects to specific technical components, ensuring proper access control and feature availability based on user roles and permissions.**

