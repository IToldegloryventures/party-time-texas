# 🛠️ Scripts Documentation

This folder contains utility scripts for database management, testing, and development.

## 📁 Folder Structure

```
scripts/
├── examples/          # Sample data and test scripts
├── *.js              # Node.js utility scripts
└── *.sql             # SQL maintenance scripts
```

---

## 🔧 Utility Scripts (Node.js)

### **Database & Connection Testing**

#### `test-supabase.js`
**Purpose**: Verify Supabase connection and configuration
- Tests database connectivity
- Validates environment variables
- Checks service role key permissions
- **Usage**: `node scripts/test-supabase.js`

#### `check-clerk-connection.js`
**Purpose**: Test Clerk authentication API connection
- Validates Clerk API keys
- Tests user API endpoints
- **Usage**: `node scripts/check-clerk-connection.js`

#### `check-clerk-users.js`
**Purpose**: List and verify Clerk users
- Fetches all users from Clerk
- Displays user details
- **Usage**: `node scripts/check-clerk-users.js`

#### `verify-data.js`
**Purpose**: Verify database data integrity
- Checks organizations exist
- Validates user records
- Confirms relationships
- **Usage**: `node scripts/verify-data.js`

---

### **Security & Auditing**

#### `security-audit.js`
**Purpose**: Basic security audit of the codebase
- Checks for common security issues
- Validates environment variables
- **Usage**: `node scripts/security-audit.js`

#### `comprehensive-security-audit.js`
**Purpose**: In-depth security analysis
- Extended security checks
- RLS policy validation
- Permission verification
- **Usage**: `node scripts/comprehensive-security-audit.js`

---

### **User & Permission Management**

#### `setup-admin-user.js`
**Purpose**: Create or update a super admin user
- Sets up master admin permissions
- Links user to admin organization
- **Usage**: `node scripts/setup-admin-user.js`

#### `test-user-types.js`
**Purpose**: Test different user type configurations
- Validates user roles
- Tests permission assignments
- **Usage**: `node scripts/test-user-types.js`

---

### **Schema Management**

#### `run-landing-pages-schema.js`
**Purpose**: Run landing page schema updates
- Applies landing page table changes
- **Note**: Landing page tables are now in main `supabase-setup.sql`
- **Status**: ⚠️ Legacy - may be deprecated

---

## 🗄️ SQL Scripts

### **Data Cleanup**

#### `clear-test-data.sql`
**Purpose**: Remove all test/development data
- Clears test organizations
- Removes test users
- Preserves production data
- **⚠️ WARNING**: Use with caution!

---

### **Clerk ID Updates**

#### `update-clerk-ids.sql`
**Purpose**: Update user Clerk IDs individually
- Updates single user's Clerk ID
- Useful for fixing sync issues

#### `update-both-clerk-ids.sql`
**Purpose**: Update multiple Clerk IDs at once
- Batch update for multiple users
- Faster than individual updates

---

## 📋 Examples Folder

### `examples/`

Contains sample data scripts for testing and development:

#### Test Data Scripts
- **`create-test-data.sql`** - Generate test organizations and users
- **`create-real-data.sql`** - Create realistic sample data
- **`create-real-organizations.sql`** - Sample organization setups

#### Party Time Texas Examples
- **`register-party-time-keychain.sql`** - Example NFC device registration
- **`register-party-time-keychain-manual.sql`** - Manual NFC setup example
- **`update-party-time-texas-corporate.sql`** - Sample corporate account setup

**Note**: These are examples only. Modify with your own data before using.

---

## 🚀 Quick Start Guide

### First Time Setup

1. **Test Database Connection**
   ```bash
   node scripts/test-supabase.js
   ```

2. **Test Clerk Connection**
   ```bash
   node scripts/check-clerk-connection.js
   ```

3. **Set Up Admin User**
   ```bash
   node scripts/setup-admin-user.js
   ```

4. **Verify Data**
   ```bash
   node scripts/verify-data.js
   ```

---

### Development Workflow

1. **Before Making Changes**
   ```bash
   node scripts/verify-data.js
   ```

2. **After Schema Updates**
   - Run main schema: `supabase-setup.sql` in Supabase SQL Editor
   - Verify: `node scripts/test-supabase.js`

3. **Regular Security Checks**
   ```bash
   node scripts/security-audit.js
   ```

---

## ⚠️ Important Notes

### Environment Variables Required

All scripts require these environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

### SQL Scripts

- Always review SQL scripts before running
- Test in development environment first
- Backup data before destructive operations
- Scripts assume Supabase PostgreSQL syntax

### Node.js Scripts

- Run from project root: `node scripts/script-name.js`
- Requires Node.js 18+
- Uses ES modules

---

## 🔒 Security Best Practices

1. **Never commit** `.env` files or API keys
2. **Always use** service role key for admin operations
3. **Test scripts** in development before production
4. **Review audit** results regularly
5. **Keep examples** separate from production scripts

---

## 📝 Adding New Scripts

When adding a new script:

1. Add it to appropriate category in this README
2. Include clear purpose and usage
3. Document required environment variables
4. Add error handling
5. Include usage examples

---

## 🆘 Troubleshooting

### Common Issues

**"Cannot connect to Supabase"**
- Check `SUPABASE_SERVICE_ROLE_KEY` is set
- Verify Supabase URL is correct
- Check network connection

**"Clerk authentication failed"**
- Verify `CLERK_SECRET_KEY` is valid
- Check API key permissions
- Ensure key hasn't expired

**"Permission denied" errors**
- Verify you're using service role key
- Check RLS policies are configured
- Ensure user has proper permissions

---

**Last Updated**: October 10, 2025
**Maintained by**: Cosmic Portals Development Team

