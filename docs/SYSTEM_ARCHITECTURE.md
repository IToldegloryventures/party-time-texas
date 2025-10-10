# 🏗️ COSMIC PORTALS - System Architecture

## 📊 **User Role Hierarchy**

```mermaid
graph TD
    A[Super Admin] --> B[Platform Management]
    A --> C[All Organizations]
    A --> D[Billing & Payments]
    A --> E[System Settings]
    
    F[Organization Owner] --> G[Organization Settings]
    F --> H[Team Management]
    F --> I[Billing Management]
    F --> J[Content Management]
    
    K[Organization Admin] --> L[Team Management]
    K --> M[Event Management]
    K --> N[Landing Pages]
    K --> O[NFC Devices]
    
    P[Team Member] --> Q[Assigned Events]
    P --> R[Landing Pages]
    P --> S[Task Management]
    P --> T[Personal Analytics]
    
    U[Guest] --> V[Event Participation]
    U --> W[RSVP System]
    U --> X[Photo Gallery]
    
    style A fill:#ff4444
    style F fill:#ff8800
    style K fill:#8844ff
    style P fill:#4488ff
    style U fill:#44ff88
```

## 🔄 **User Journey Flow**

```mermaid
flowchart TD
    A[User Visits Site] --> B{Authenticated?}
    B -->|No| C[Sign In/Sign Up]
    B -->|Yes| D[Load Dashboard]
    
    C --> E[Choose Plan]
    E --> F[Payment Processing]
    F --> G[Organization Setup]
    G --> D
    
    D --> H{User Role?}
    H -->|Super Admin| I[Platform Dashboard]
    H -->|Owner/Admin| J[Organization Dashboard]
    H -->|Member| K[Team Dashboard]
    H -->|Guest| L[Event Dashboard]
    
    I --> M[Manage All Organizations]
    J --> N[Manage Team & Content]
    K --> O[Work on Assigned Tasks]
    L --> P[Participate in Events]
    
    style A fill:#e1f5fe
    style D fill:#f3e5f5
    style I fill:#ffebee
    style J fill:#fff3e0
    style K fill:#e8f5e8
    style L fill:#f1f8e9
```

## 🏢 **Multi-Tenant Architecture**

```mermaid
graph TB
    subgraph "Platform Level"
        SA[Super Admin Panel]
        PL[Platform Analytics]
        BL[Billing System]
    end
    
    subgraph "Organization A"
        OA[Organization Owner]
        OAA[Organization Admin]
        OAM[Team Members]
        OAG[Guests]
        
        subgraph "Data A"
            EA[Events A]
            LPA[Landing Pages A]
            NFCA[NFC Devices A]
            TA[Tasks A]
        end
    end
    
    subgraph "Organization B"
        OB[Organization Owner]
        OBA[Organization Admin]
        OBM[Team Members]
        OBG[Guests]
        
        subgraph "Data B"
            EB[Events B]
            LPB[Landing Pages B]
            NFCB[NFC Devices B]
            TB[Tasks B]
        end
    end
    
    SA --> OA
    SA --> OB
    PL --> EA
    PL --> EB
    BL --> OA
    BL --> OB
    
    OA --> EA
    OA --> LPA
    OA --> NFCA
    OA --> TA
    
    OB --> EB
    OB --> LPB
    OB --> NFCB
    OB --> TB
    
    style SA fill:#ff4444
    style OA fill:#ff8800
    style OB fill:#ff8800
```

## 🔐 **Permission Matrix**

```mermaid
graph LR
    subgraph "Permissions"
        P1[Platform Management]
        P2[Organization Management]
        P3[Team Management]
        P4[Content Management]
        P5[Event Management]
        P6[Analytics Access]
    end
    
    subgraph "Roles"
        SA[Super Admin]
        OW[Owner]
        AD[Admin]
        MB[Member]
        GS[Guest]
    end
    
    SA --> P1
    SA --> P2
    SA --> P3
    SA --> P4
    SA --> P5
    SA --> P6
    
    OW --> P2
    OW --> P3
    OW --> P4
    OW --> P5
    OW --> P6
    
    AD --> P3
    AD --> P4
    AD --> P5
    AD --> P6
    
    MB --> P4
    MB --> P6
    
    GS --> P5
    
    style SA fill:#ff4444
    style OW fill:#ff8800
    style AD fill:#8844ff
    style MB fill:#4488ff
    style GS fill:#44ff88
```

## 🎯 **NFC Device Flow**

```mermaid
sequenceDiagram
    participant U as User
    participant N as NFC Device
    participant S as Scan API
    participant D as Database
    participant L as Landing Page
    
    U->>N: Scans NFC Device
    N->>S: Redirects to /scan/{deviceId}
    S->>D: Fetch device info
    D-->>S: Device + Landing Page data
    S->>D: Increment scan count
    S->>D: Record scan event
    S->>L: Redirect to landing page
    L-->>U: Display landing page
    L->>D: Increment view count
```

## 📊 **Data Flow Architecture**

```mermaid
graph TB
    subgraph "Frontend Layer"
        WEB[Next.js Frontend]
        DASH[Dashboard Components]
        BUILDER[Landing Page Builder]
        ADMIN[Admin Panels]
    end
    
    subgraph "API Layer"
        AUTH[Authentication API]
        EVENTS[Events API]
        PAGES[Landing Pages API]
        DEVICES[NFC Devices API]
        ANALYTICS[Analytics API]
    end
    
    subgraph "Database Layer"
        DB[(Supabase PostgreSQL)]
        RLS[Row Level Security]
        ORG[Organizations]
        USERS[Users]
        EVENTS_DB[Events]
        PAGES_DB[Landing Pages]
        DEVICES_DB[NFC Devices]
    end
    
    subgraph "External Services"
        CLERK[Clerk Auth]
        STRIPE[Stripe Payments]
        GEMINI[Google Gemini AI]
    end
    
    WEB --> AUTH
    DASH --> EVENTS
    DASH --> ANALYTICS
    BUILDER --> PAGES
    ADMIN --> DEVICES
    
    AUTH --> CLERK
    EVENTS --> DB
    PAGES --> DB
    DEVICES --> DB
    ANALYTICS --> DB
    
    DB --> RLS
    RLS --> ORG
    RLS --> USERS
    RLS --> EVENTS_DB
    RLS --> PAGES_DB
    RLS --> DEVICES_DB
    
    style WEB fill:#e3f2fd
    style DB fill:#f3e5f5
    style CLERK fill:#fff3e0
    style STRIPE fill:#e8f5e8
    style GEMINI fill:#fce4ec
```

## 🔄 **Event Assignment System Flow**

```mermaid
flowchart TD
    A[Admin Creates Event] --> B[Select Team Members]
    B --> C[Assign Members to Event]
    C --> D[Store in assigned_members JSONB]
    
    E[Member Logs In] --> F{View Events}
    F -->|My Events| G[Filter by assigned_members]
    F -->|All Events| H[Show all org events]
    
    G --> I[Display Assigned Events]
    H --> J[Display All Events]
    
    I --> K[Member Can Participate]
    J --> L[Member Can View Only]
    
    style A fill:#ff8800
    style E fill:#4488ff
    style I fill:#e8f5e8
    style J fill:#fff3e0
```

## 📈 **Analytics Data Flow**

```mermaid
graph LR
    subgraph "Data Collection"
        SCAN[NFC Scans]
        VIEW[Page Views]
        EVENT[Event Participation]
        USER[User Actions]
    end
    
    subgraph "Processing"
        AGG[Data Aggregation]
        FILTER[Filter by Organization]
        CALC[Calculate Metrics]
    end
    
    subgraph "Storage"
        RAW[Raw Analytics Data]
        METRICS[Processed Metrics]
        CACHE[Cached Results]
    end
    
    subgraph "Display"
        DASH[Dashboard Charts]
        REPORTS[Custom Reports]
        EXPORT[Data Export]
    end
    
    SCAN --> AGG
    VIEW --> AGG
    EVENT --> AGG
    USER --> AGG
    
    AGG --> FILTER
    FILTER --> CALC
    CALC --> RAW
    CALC --> METRICS
    METRICS --> CACHE
    
    CACHE --> DASH
    METRICS --> REPORTS
    RAW --> EXPORT
    
    style SCAN fill:#e3f2fd
    style DASH fill:#f3e5f5
    style EXPORT fill:#e8f5e8
```

---

*This architecture supports the multi-tenant SaaS model with proper data isolation, role-based access control, and scalable analytics.*
