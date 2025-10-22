# Cosmic Portals - Layered Architecture

## Layered Architecture Overview

```mermaid
graph TB
    subgraph "Presentation Layer"
        subgraph "Web Applications"
            WEB[Next.js 15 App Router<br/>React 19 + TypeScript<br/>Tailwind CSS + shadcn/ui]
            ADMIN[Admin Dashboard<br/>Super Admin Panel<br/>Organization Management]
        end
        subgraph "Mobile Applications"
            MOBILE[React Native Mobile Apps<br/>Client App + Customer App<br/>Expo Framework]
        end
        subgraph "External Interfaces"
            NFC_SCAN[NFC Scan Interface<br/>Landing Page Redirects<br/>UTM Tracking]
        end
    end

    subgraph "API Gateway Layer"
        subgraph "Authentication Service"
            CLERK[Clerk Authentication<br/>Multi-tenant Orgs<br/>5-Tier Role System<br/>SSO + MFA<br/>JWT Tokens]
        end
    end

    subgraph "Application Layer"
        subgraph "Core Business Services"
            USER_SVC[User Management Service<br/>Organization Service<br/>Role & Permission Service]
            EVENT_SVC[Event Management Service<br/>Attendee Service<br/>Check-in Service]
            NFC_SVC[NFC Device Service<br/>Scan Tracking Service<br/>Hardware Store Service]
            PAGE_SVC[Landing Page Service<br/>Template Service<br/>Analytics Service]
        end
        subgraph "Integration Services"
            PAYMENT_SVC[Payment Service<br/>Stripe Integration<br/>Billing Engine<br/>Subscription Management]
            AI_SVC[AI Service<br/>Grok AI API<br/>Content Generation<br/>Insights]
            SOCIAL_SVC[Social Media Service<br/>Metricool Integration<br/>Campaign Management<br/>Content Scheduling]
            GEO_SVC[Geo-Marketing Service<br/>Location Intelligence<br/>Cross-marketing<br/>Regional Analytics]
        end
    end

    subgraph "Domain Layer"
        subgraph "Domain Models"
            USER_DOMAIN[User Domain<br/>Organization Domain<br/>Role Domain]
            EVENT_DOMAIN[Event Domain<br/>Attendee Domain<br/>Check-in Domain]
            NFC_DOMAIN[NFC Device Domain<br/>Scan Domain<br/>Hardware Domain]
            PAGE_DOMAIN[Landing Page Domain<br/>Template Domain<br/>Analytics Domain]
        end
        subgraph "Business Logic"
            BUSINESS_RULES[Business Rules Engine<br/>Event-driven Rules<br/>Validation Logic<br/>Workflow Orchestration<br/>Trigger Management<br/>Automation Rules]
        end
    end

    subgraph "Data Access Layer"
        subgraph "Repository Pattern"
            USER_REPO[User Repository<br/>Organization Repository<br/>Role Repository]
            EVENT_REPO[Event Repository<br/>Attendee Repository<br/>Check-in Repository]
            NFC_REPO[NFC Repository<br/>Scan Repository<br/>Hardware Repository]
            PAGE_REPO[Page Repository<br/>Template Repository<br/>Analytics Repository]
        end
        subgraph "Data Services"
            SUPABASE_REALTIME[Supabase Realtime<br/>Real-time Subscriptions<br/>Live Data Updates]
            REDIS_CACHE[Redis Cache<br/>Session Storage<br/>Query Caching<br/>Performance Optimization]
        end
    end

    subgraph "Infrastructure Layer"
        subgraph "Database Layer"
            SUPABASE[Supabase PostgreSQL<br/>Multi-tenant Data<br/>Row Level Security<br/>Real-time Subscriptions<br/>Connection Pooling]
            STORAGE[Supabase Storage<br/>File Uploads<br/>CDN Distribution<br/>Asset Management<br/>Backup & Recovery]
        end
        subgraph "External Services"
            STRIPE[Stripe API<br/>Payment Processing<br/>Subscription Management<br/>Webhooks]
            GROK[Grok AI API<br/>AI Processing<br/>Content Generation<br/>Insights]
            METRICOOL[Metricool API<br/>Social Media Management<br/>White-label Social<br/>Multi-platform Posting]
            EMAIL_SERVICE[Email Service<br/>SendGrid/Resend<br/>Transactional + Marketing<br/>Template Engine]
            SMS_SERVICE[SMS Service<br/>Twilio/MessageBird<br/>Notifications + OTP<br/>Delivery Tracking]
        end
        subgraph "Infrastructure Services"
            VERCEL[Vercel Platform<br/>Serverless Hosting<br/>Edge Computing<br/>CI/CD Pipeline<br/>Performance Optimization]
            CLOUDFLARE[Cloudflare<br/>DNS Management<br/>DDoS Protection<br/>WAF + Security<br/>SSL Certificates]
            MONITORING[System Monitoring<br/>Uptime Tracking<br/>Performance Metrics<br/>Alerting System<br/>Health Checks]
            LOGGING[Log Aggregation<br/>Error Tracking<br/>Audit Logs<br/>Performance Analysis<br/>Security Monitoring]
            SECURITY[Security Services<br/>Access Auditing<br/>Basic Security Monitoring]
        end
    end

    %% Layer Connections
    WEB --> LOAD_BALANCER
    ADMIN --> LOAD_BALANCER
    MOBILE --> LOAD_BALANCER
    NFC_SCAN --> LOAD_BALANCER

    LOAD_BALANCER --> API_GATEWAY
    API_GATEWAY --> CLERK
    API_GATEWAY --> RATE_LIMIT
    API_GATEWAY --> AUTH_ORCHESTRATION
    API_GATEWAY --> USER_SVC
    API_GATEWAY --> EVENT_SVC
    API_GATEWAY --> NFC_SVC
    API_GATEWAY --> PAGE_SVC

    USER_SVC --> USER_DOMAIN
    EVENT_SVC --> EVENT_DOMAIN
    NFC_SVC --> NFC_DOMAIN
    PAGE_SVC --> PAGE_DOMAIN

    USER_DOMAIN --> BUSINESS_RULES
    EVENT_DOMAIN --> BUSINESS_RULES
    NFC_DOMAIN --> BUSINESS_RULES
    PAGE_DOMAIN --> BUSINESS_RULES

    BUSINESS_RULES --> USER_REPO
    BUSINESS_RULES --> EVENT_REPO
    BUSINESS_RULES --> NFC_REPO
    BUSINESS_RULES --> PAGE_REPO

    USER_REPO --> SUPABASE
    EVENT_REPO --> SUPABASE
    NFC_REPO --> SUPABASE
    PAGE_REPO --> SUPABASE

    PAYMENT_SVC --> STRIPE
    SOCIAL_SVC --> METRICOOL
    AI_SVC --> GROK
    GEO_SVC --> SUPABASE

    SUPABASE --> STORAGE
    SUPABASE --> CACHE
    SUPABASE --> SEARCH
    SUPABASE --> QUERY_OPT
    SUPABASE --> DATA_SYNC

    VERCEL --> CLOUDFLARE
    VERCEL --> MONITORING
    VERCEL --> LOGGING
    VERCEL --> SECURITY

    %% Styling
    style WEB fill:#e1f5fe
    style ADMIN fill:#e1f5fe
    style MOBILE fill:#e1f5fe
    style LOAD_BALANCER fill:#fff3e0
    style API_GATEWAY fill:#fff3e0
    style CLERK fill:#fff3e0
    style RATE_LIMIT fill:#fff3e0
    style AUTH_ORCHESTRATION fill:#fff3e0
    style USER_SVC fill:#f3e5f5
    style EVENT_SVC fill:#f3e5f5
    style NFC_SVC fill:#f3e5f5
    style PAGE_SVC fill:#f3e5f5
    style SUPABASE fill:#e8f5e8
    style STRIPE fill:#e8f5e8
    style GROK fill:#fce4ec
    style METRICOOL fill:#e8f5e8
    style EMAIL_SERVICE fill:#e1f5fe
    style SMS_SERVICE fill:#e1f5fe
    style REDIS_CACHE fill:#fff3e0
    style VERCEL fill:#e3f2fd
    style CLOUDFLARE fill:#fff8e1
    style MONITORING fill:#fff8e1
    style LOGGING fill:#fff8e1
    style SECURITY fill:#fff8e1
```

## Layered Architecture Explanation

### **Load Balancer & Gateway Layer**

- **Load Balancer**: Vercel Load Balancer with SSL termination, health checks, geo-routing
- **API Gateway**: Request routing, rate limiting, authentication, geo-routing

### **Presentation Layer**

- **Web Applications**: Next.js 15 with React 19, TypeScript, Tailwind CSS
- **Mobile Applications**: React Native with Expo framework
- **External Interfaces**: NFC scan redirects, landing page interfaces

### **API Gateway Layer**

- **Authentication Service**: Clerk for multi-tenant authentication and role management
- **Security Services**: Rate limiting, request throttling, API quotas, DDoS protection

### **Application Layer**

- **Core Business Services**: User, Event, NFC, and Landing Page services
- **Integration Services**: Payment, Social, AI, and Geolocation services

### **Domain Layer**

- **Domain Models**: Business entities and their relationships
- **Business Logic**: Rules engine, validation, and workflow management

#### **Business Rules Engine - Detailed Components**

**Event-Driven Rules System**

- **NFC Scan Rules**: Auto-trigger workflows on device scans
- **Event Check-in Rules**: Automated attendee processing and notifications
- **Payment Rules**: Subscription limits, overage calculations, billing triggers
- **User Role Rules**: Permission validation, access control enforcement
- **Geo-location Rules**: Regional content delivery, cross-marketing triggers

**Validation Logic Engine**

- **Data Validation**: Input sanitization, format validation, business rule compliance
- **Permission Validation**: Role-based access control, organization boundaries
- **Plan Limit Validation**: Subscription tier enforcement, usage monitoring
- **Event Validation**: Capacity limits, date/time constraints, attendee limits
- **NFC Device Validation**: Device registration, scan authenticity, hardware limits

**Workflow Orchestration**

- **User Onboarding**: Multi-step organization setup, team invitation flows
- **Event Management**: Creation → Setup → Launch → Analytics workflow
- **NFC Campaign**: Device registration → Landing page linking → Analytics tracking
- **Payment Processing**: Subscription → Billing → Usage tracking → Overage alerts
- **Content Publishing**: Draft → Review → Approval → Publish → Analytics

**Trigger Management System**

- **Time-based Triggers**: Scheduled social posts, recurring billing, event reminders
- **Event-based Triggers**: NFC scans, check-ins, payments, user actions
- **Condition-based Triggers**: Plan upgrades, usage thresholds, error conditions
- **External Triggers**: Webhook events, API calls, third-party integrations

**Automation Rules Engine**

- **Email Automation**: Welcome sequences, event notifications, billing alerts
- **SMS Automation**: OTP delivery, event reminders, emergency notifications
- **Social Media Automation**: Content scheduling, cross-platform posting, engagement tracking
- **Analytics Automation**: Report generation, insight delivery, performance alerts
- **Integration Automation**: CRM sync, payment processing, data synchronization

### **Data Access Layer**

- **Repository Pattern**: Data access abstraction for each domain
- **Data Services**: Caching, search, query optimization, synchronization, backup & recovery

### **Infrastructure Layer**

- **Database Layer**: Supabase PostgreSQL with RLS and real-time subscriptions
- **External Services**: Stripe, Grok AI, Metricool, CRM, Email, SMS
- **Infrastructure Services**: Vercel hosting, Cloudflare security, monitoring, logging

### **Security & Compliance Layer**

- **Authentication**: Multi-factor auth, SSO integration, audit logs
- **Authorization**: Row Level Security, role-based access, permission matrix
- **Data Protection**: Encryption at rest + in transit, key management, backup encryption
- **Basic Security**: Access auditing, basic security monitoring
- **Audit & Monitoring**: Activity tracking, access auditing, compliance reports

## Technical Architecture Diagram

```mermaid
graph TB
    subgraph "Client Layer"
        WEB_CLIENT[Web Browser<br/>Next.js 15 + React 19<br/>TypeScript + Tailwind]
        MOBILE_CLIENT[Mobile Device<br/>React Native App<br/>Expo Framework]
        NFC_DEVICE[NFC Device<br/>Physical Touchpoint<br/>Scan Redirect]
    end

    subgraph "CDN & Edge Layer"
        CLOUDFLARE_CDN[Cloudflare CDN<br/>Global Distribution<br/>DDoS Protection<br/>WAF Security]
        VERCEL_EDGE[Vercel Edge<br/>Edge Functions<br/>Geo-routing<br/>Regional Content]
    end

    subgraph "Load Balancer & Gateway"
        LOAD_BALANCER[Vercel Load Balancer<br/>Request Distribution<br/>SSL Termination<br/>Health Checks]
        API_GATEWAY[API Gateway<br/>Rate Limiting<br/>Authentication<br/>Request Routing]
    end

    subgraph "Application Layer"
        subgraph "Web Application Server"
            NEXTJS_SERVER[Next.js Server<br/>App Router<br/>Server Components<br/>API Routes]
        end

        subgraph "Authentication Service"
            CLERK_AUTH[Clerk Authentication<br/>Multi-tenant Auth<br/>Role Management<br/>SSO + MFA]
        end

        subgraph "Business Logic Services"
            USER_SERVICE[User Service<br/>Organization Management<br/>Team Management<br/>Permission Engine]
            EVENT_SERVICE[Event Service<br/>Event Management<br/>Attendee Tracking<br/>Check-in System]
            NFC_SERVICE[NFC Service<br/>Device Management<br/>Scan Tracking<br/>Hardware Store]
            PAGE_SERVICE[Page Service<br/>Landing Page Builder<br/>Template Engine<br/>Analytics Engine]
        end

        subgraph "Integration Services"
            PAYMENT_SERVICE[Payment Service<br/>Stripe Integration<br/>Billing Engine<br/>Subscription Management]
            SOCIAL_SERVICE[Social Service<br/>Metricool Integration<br/>Campaign Management<br/>Content Scheduling]
            AI_SERVICE[AI Service<br/>Grok AI Integration<br/>Content Generation<br/>Predictive Analytics]
            GEO_SERVICE[Geo Service<br/>Location Services<br/>Regional Analytics<br/>Cross-marketing]
        end
    end

    subgraph "Data Layer"
        subgraph "Primary Database"
            SUPABASE_DB[(Supabase PostgreSQL<br/>Multi-tenant Data<br/>Row Level Security<br/>Real-time Subscriptions)]
        end

        subgraph "Storage Layer"
            SUPABASE_STORAGE[Supabase Storage<br/>File Management<br/>CDN Distribution<br/>Asset Optimization]
        end

        subgraph "Cache Layer"
            REDIS_CACHE[(Redis Cache<br/>Session Storage<br/>Query Caching<br/>Performance Optimization)]
        end

        subgraph "Search Layer"
            SEARCH_INDEX[Search Index<br/>Full-text Search<br/>Content Indexing<br/>Query Optimization]
        end
    end

    subgraph "External Services Layer"
        subgraph "Payment Services"
            STRIPE_API[Stripe API<br/>Payment Processing<br/>Webhook Handling<br/>Billing Analytics]
        end

        subgraph "AI Services"
            GROK_API[Grok AI API<br/>AI Processing<br/>Content Generation<br/>Predictive Analytics]
        end

        subgraph "Social Services"
            METRICOOL_API[Metricool API<br/>Social Media Management<br/>White-label Social<br/>Multi-platform Posting]
        end

        subgraph "Communication Services"
            EMAIL_SERVICE[Email Service<br/>SendGrid/Resend<br/>Transactional + Marketing<br/>Template Engine]
            SMS_SERVICE[SMS Service<br/>Twilio/MessageBird<br/>Notifications + OTP<br/>Delivery Tracking]
        end

        subgraph "CRM Services"
            CRM_SERVICE[CRM Integration<br/>Salesforce/HubSpot<br/>Customer Data Sync<br/>Lead Management]
        end
    end

    subgraph "Infrastructure Layer"
        subgraph "Hosting Platform"
            VERCEL_PLATFORM[Vercel Platform<br/>Serverless Hosting<br/>Edge Computing<br/>CI/CD Pipeline]
        end

        subgraph "Security Services"
            CLOUDFLARE_SEC[Cloudflare Security<br/>DNS Management<br/>DDoS Protection<br/>WAF + Security Rules]
        end

        subgraph "Monitoring Services"
            SYSTEM_MONITOR[System Monitoring<br/>Uptime Tracking<br/>Performance Metrics<br/>Alerting System]
            LOG_AGGREGATION[Log Aggregation<br/>Error Tracking<br/>Audit Logs<br/>Performance Analysis]
        end
    end

    %% Client to CDN/Edge
    WEB_CLIENT --> CLOUDFLARE_CDN
    MOBILE_CLIENT --> CLOUDFLARE_CDN
    NFC_DEVICE --> CLOUDFLARE_CDN

    %% CDN to Load Balancer
    CLOUDFLARE_CDN --> LOAD_BALANCER
    VERCEL_EDGE --> LOAD_BALANCER

    %% Load Balancer to Gateway
    LOAD_BALANCER --> API_GATEWAY

    %% Gateway to Application Services
    API_GATEWAY --> NEXTJS_SERVER
    API_GATEWAY --> CLERK_AUTH
    API_GATEWAY --> USER_SERVICE
    API_GATEWAY --> EVENT_SERVICE
    API_GATEWAY --> NFC_SERVICE
    API_GATEWAY --> PAGE_SERVICE

    %% Application Services to Data Layer
    USER_SERVICE --> SUPABASE_DB
    EVENT_SERVICE --> SUPABASE_DB
    NFC_SERVICE --> SUPABASE_DB
    PAGE_SERVICE --> SUPABASE_DB

    %% Integration Services to External APIs
    PAYMENT_SERVICE --> STRIPE_API
    SOCIAL_SERVICE --> METRICOOL_API
    AI_SERVICE --> GROK_API
    GEO_SERVICE --> SUPABASE_DB

    %% Data Layer Connections
    SUPABASE_DB --> SUPABASE_STORAGE
    SUPABASE_DB --> REDIS_CACHE
    SUPABASE_DB --> SEARCH_INDEX

    %% Infrastructure Connections
    VERCEL_PLATFORM --> CLOUDFLARE_SEC
    VERCEL_PLATFORM --> SYSTEM_MONITOR
    VERCEL_PLATFORM --> LOG_AGGREGATION

    %% Styling
    style WEB_CLIENT fill:#e1f5fe
    style MOBILE_CLIENT fill:#e1f5fe
    style NFC_DEVICE fill:#e1f5fe
    style CLOUDFLARE_CDN fill:#fff8e1
    style VERCEL_EDGE fill:#e3f2fd
    style LOAD_BALANCER fill:#fff3e0
    style API_GATEWAY fill:#fff3e0
    style NEXTJS_SERVER fill:#f3e5f5
    style CLERK_AUTH fill:#fff3e0
    style USER_SERVICE fill:#f3e5f5
    style EVENT_SERVICE fill:#f3e5f5
    style NFC_SERVICE fill:#f3e5f5
    style PAGE_SERVICE fill:#f3e5f5
    style SUPABASE_DB fill:#e8f5e8
    style STRIPE_API fill:#e8f5e8
    style GROK_API fill:#fce4ec
    style VERCEL_PLATFORM fill:#e3f2fd
    style CLOUDFLARE_SEC fill:#fff8e1
```

## Data Flow Architecture

```mermaid
sequenceDiagram
    participant U as User
    participant N as NFC Device
    participant F as Frontend
    participant A as API
    participant D as Database
    participant AI as AI Service
    participant P as Payment
    participant E as External

    U->>N: Scans NFC Device
    N->>F: Redirects to Landing Page
    F->>A: Track Scan Event
    A->>D: Store Analytics Data
    A->>AI: Generate Insights
    AI-->>A: Return AI Analysis
    A->>D: Store Insights
    A->>E: Trigger Workflows
    E-->>U: Send Email/SMS
    F-->>U: Display Personalized Content

    Note over U,E: Complete NFC-to-Conversion Flow
```

## Multi-Tenant Data Architecture

```mermaid
graph TB
    subgraph "Platform Level"
        SA[Super Admin<br/>Platform Management<br/>All Organizations<br/>Revenue Analytics]
    end

    subgraph "Organization A"
        OA[Organization Owner<br/>Billing + Settings]
        OAA[Organization Admin<br/>Team + Content]
        OAM[Team Members<br/>Tasks + Events]
        OAG[Guests<br/>Event Participation]

        subgraph "Data A"
            EA[Events A]
            LPA[Landing Pages A]
            NFCA[NFC Devices A]
            TA[Tasks A]
            AA[Analytics A]
        end
    end

    subgraph "Organization B"
        OB[Organization Owner<br/>Billing + Settings]
        OBA[Organization Admin<br/>Team + Content]
        OBM[Team Members<br/>Tasks + Events]
        OBG[Guests<br/>Event Participation]

        subgraph "Data B"
            EB[Events B]
            LPB[Landing Pages B]
            NFCB[NFC Devices B]
            TB[Tasks B]
            AB[Analytics B]
        end
    end

    SA --> OA
    SA --> OB
    SA --> EA
    SA --> EB

    OA --> EA
    OA --> LPA
    OA --> NFCA
    OA --> TA
    OA --> AA

    OB --> EB
    OB --> LPB
    OB --> NFCB
    OB --> TB
    OB --> AB

    style SA fill:#ff4444
    style OA fill:#ff8800
    style OB fill:#ff8800
```

## Revenue Streams Architecture

```mermaid
graph LR
    subgraph "Primary Revenue"
        SUB[Subscription Plans<br/>Starter: $29/mo<br/>Professional: $99/mo<br/>Enterprise: $299/mo]
        WHITE[White-label Add-ons<br/>+$15-50/mo<br/>Custom Branding<br/>Domain Management]
    end

    subgraph "Secondary Revenue"
        HARDWARE[Hardware Sales<br/>NFC Devices<br/>Business Cards<br/>Event Badges]
        COMMUNITY[Community Pricing<br/>Schools: 50% off<br/>HOAs: 30% off<br/>Non-profits: 25% off]
        OVERAGE[Overage Charges<br/>$5/user over limit<br/>$2/GB storage<br/>$5/device over limit]
    end

    subgraph "Enterprise Revenue"
        CUSTOM[Custom Integrations<br/>+$100/mo<br/>Dedicated Support<br/>SLA Guarantees]
        CONSULTING[Consulting Services<br/>Implementation<br/>Training<br/>Support]
    end

    SUB --> STRIPE
    WHITE --> STRIPE
    HARDWARE --> STRIPE
    COMMUNITY --> STRIPE
    OVERAGE --> STRIPE
    CUSTOM --> STRIPE
    CONSULTING --> STRIPE

    style SUB fill:#e8f5e8
    style WHITE fill:#fff3e0
    style HARDWARE fill:#e1f5fe
    style COMMUNITY fill:#f3e5f5
    style OVERAGE fill:#fce4ec
    style CUSTOM fill:#fff8e1
    style CONSULTING fill:#f1f8e9
```

## Security & Compliance Architecture

```mermaid
graph TB
    subgraph "Authentication Layer"
        CLERK_AUTH[Clerk Authentication<br/>Multi-factor Auth<br/>SSO Integration<br/>Audit Logs]
    end

    subgraph "Authorization Layer"
        RLS_POLICIES[Row Level Security<br/>Organization Isolation<br/>Role-based Access<br/>Permission Matrix]
    end

    subgraph "Data Protection"
        ENCRYPTION[Data Encryption<br/>At Rest + In Transit<br/>Key Management<br/>Backup Encryption]
        BACKUP[Automated Backups<br/>Point-in-time Recovery<br/>Cross-region Replication<br/>Disaster Recovery]
    end

    subgraph "Network Security"
        WAF[Web Application Firewall<br/>DDoS Protection<br/>Rate Limiting<br/>Geo-blocking]
        SSL[SSL/TLS Certificates<br/>HTTPS Everywhere<br/>Certificate Management<br/>Security Headers]
    end

    subgraph "Monitoring & Compliance"
        SECURITY_MONITOR[Basic Security Monitoring<br/>Access Auditing<br/>Basic Security Monitoring]
        BASIC_SECURITY[Basic Security Framework<br/>Access Auditing<br/>Basic Security Monitoring]
    end

    CLERK_AUTH --> RLS_POLICIES
    RLS_POLICIES --> ENCRYPTION
    ENCRYPTION --> BACKUP
    WAF --> SSL
    SSL --> SECURITY_MONITOR
    SECURITY_MONITOR --> COMPLIANCE

    style CLERK_AUTH fill:#fff3e0
    style RLS_POLICIES fill:#e8f5e8
    style ENCRYPTION fill:#f3e5f5
    style WAF fill:#e1f5fe
    style SECURITY_MONITOR fill:#fce4ec
    style COMPLIANCE fill:#fff8e1
```

## Technology Stack Summary

### Core Platform

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase, Vercel Edge Functions
- **Database**: Supabase PostgreSQL with RLS
- **Authentication**: Clerk (multi-tenant, roles, SSO)
- **Payments**: Stripe (subscriptions, billing, webhooks)

### AI & Analytics

- **AI**: Grok AI (insights, content, predictions)
- **Social Media**: Metricool (white-label social management, multi-platform posting)
- **Analytics**: Built-in analytics engine (event tracking, UTM campaigns, conversion funnels)
- **Monitoring**: System monitoring (uptime, performance, alerting)

### Infrastructure

- **Hosting**: Vercel (CDN, edge computing, CI/CD)
- **Security**: Cloudflare (DNS, DDoS, WAF, security)
- **Storage**: Supabase Storage (files, CDN distribution)

### Mobile & External

- **Mobile**: React Native with Expo (Client App + Customer App)
- **Hardware Store**: NFC devices, business cards, event badges
- **Integrations**: Email, SMS services
- **White-label**: Custom domains, branding, themes
- **Geo-Marketing**: Location intelligence, cross-marketing, regional analytics

### Monitoring & Observability

- **System**: Custom monitoring (uptime, metrics, alerts)
- **Performance**: Vercel analytics and monitoring

This architecture supports the full Cosmic Portals platform with all features, revenue streams, and scalability requirements.
