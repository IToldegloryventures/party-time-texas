# Party Time Odoo 19 - Odoo.sh Setup

Odoo 19 Production System for Party Time Texas

## Repository Structure (Odoo.sh Compliant)

```
/
├─ addons/
│  └─ custom/          # Custom Odoo modules go here
├─ odoo/               # Odoo 19.0 source code (submodule - READ ONLY)
│  └─ odoo-bin         # REQUIRED - Odoo executable
├─ .gitmodules         # Submodule configuration
├─ .gitignore          # Git ignore rules
└─ README.md           # This file
```

## Required Branches (Odoo.sh Mapping)

This repository has three branches that map to Odoo.sh environments:

- **`dev`** → Development environment (auto-rebuilds on push)
- **`staging`** → Staging/UAT environment (manual upgrade required)
- **`production`** → Production environment (manual upgrade required)

## Deployment Workflow (STRICT)

**ALL code MUST flow: dev → staging → production**

### Development (dev branch)
- Purpose: Active development, model changes, testing
- Behavior: Database auto-rebuilds on every push
- **DO NOT** treat dev data as persistent

### Staging (staging branch)
- Purpose: Configuration validation, UAT, accounting validation
- Behavior: Manual upgrade required after merge
- Process: `git merge dev` → Trigger "Upgrade" in Odoo.sh UI

### Production (production branch)
- Purpose: Live business operations, financial source of truth
- Behavior: Manual upgrade ONLY, no auto-rebuilds
- Process: `git merge staging` → Trigger "Upgrade" in Odoo.sh UI

## Initial Setup

### 1. Verify Odoo Source Code
The `odoo/` directory contains the official Odoo 19.0 source code from https://github.com/odoo/odoo.git

**CRITICAL**: Do NOT modify files in the `odoo/` directory. It is read-only.

### 2. Custom Modules
Place all custom Odoo modules in: `addons/custom/<module_name>`

Odoo.sh automatically loads:
- `/addons`
- `/addons/custom`

### 3. First Deployment (dev branch)

```powershell
# Ensure you're on dev branch
git checkout dev

# Add and commit all files
git add .
git commit -m "Initial Odoo 19 setup for odoo.sh"

# Push to GitHub
git push -u origin dev
```

### 4. Connect to Odoo.sh

1. Log into https://www.odoo.sh
2. Your project should already be created (empty repo)
3. Odoo.sh will automatically detect:
   - The `dev`, `staging`, and `production` branches
   - The Odoo submodule
   - The `addons/custom` directory

### 5. Promote Code (After dev builds successfully)

```powershell
# Promote dev → staging
git checkout staging
git merge dev
git push origin staging

# After staging builds cleanly, promote → production
git checkout production
git merge staging
git push origin production
```

## Important Rules

### ✅ ALLOWED
- Development work on `dev` branch
- Module installs/uninstalls in dev
- Breaking schema changes in dev
- Configuration testing in staging
- Live data entry in production

### ❌ FORBIDDEN
- Working directly on `production` branch
- Skipping `staging` environment
- Modifying files in `odoo/` directory
- Force-pushing shared branches
- Treating dev data as persistent

## Database Creation

- **Production**: Automatically created when production branch is detected
- **Staging**: Create manually from Odoo.sh UI → Staging environment → "Create Database"
  - Type: Staging
  - Enable demo data: NO

## Local Development (Optional)

For local development:
- Python 3.10 or 3.11
- PostgreSQL
- Node.js (for web assets)

See Odoo documentation for detailed local setup instructions.
