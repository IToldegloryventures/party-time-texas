# 🔧 **ENVIRONMENT SETUP GUIDE**

## **Required Environment Variables**

To make the user type system live, you need to configure the environment variables.

---

## **Step 1: Create .env.local File**

Create a `.env.local` file in your project root with these variables:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## **Step 2: Get Clerk Keys**

### **From Clerk Dashboard:**

1. **Go to** [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. **Select your project**
3. **Go to** "API Keys" in the left sidebar
4. **Copy** the following:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (Publishable key)
   - `CLERK_SECRET_KEY` (Secret key)
   - `CLERK_WEBHOOK_SECRET` (from webhook configuration)

---

## **Step 3: Get Supabase Keys**

### **From Supabase Dashboard:**

1. **Go to** [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. **Select your project**
3. **Go to** "Settings" → "API"
4. **Copy** the following:
   - `NEXT_PUBLIC_SUPABASE_URL` (Project URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (anon public key)
   - `SUPABASE_SERVICE_ROLE_KEY` (service_role key)

---

## **Step 4: Production Environment Variables**

For production deployment, set these in your hosting platform:

### **Vercel:**

1. **Go to** your project dashboard
2. **Navigate to** "Settings" → "Environment Variables"
3. **Add** all the variables from `.env.local`

### **Other Platforms:**

- **Netlify**: Site settings → Environment variables
- **Railway**: Project settings → Variables
- **Heroku**: Settings → Config vars

---

## **Step 5: Test Environment Variables**

Create a test file to verify your environment variables:

```typescript
// test-env.ts
console.log('Environment Variables Test:');
console.log(
  'CLERK_PUBLISHABLE_KEY:',
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? '✅ Set' : '❌ Missing'
);
console.log(
  'CLERK_SECRET_KEY:',
  process.env.CLERK_SECRET_KEY ? '✅ Set' : '❌ Missing'
);
console.log(
  'CLERK_WEBHOOK_SECRET:',
  process.env.CLERK_WEBHOOK_SECRET ? '✅ Set' : '❌ Missing'
);
console.log(
  'SUPABASE_URL:',
  process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'
);
console.log(
  'SUPABASE_ANON_KEY:',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'
);
console.log(
  'SUPABASE_SERVICE_ROLE_KEY:',
  process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing'
);
```

---

## **Step 6: Verify Configuration**

### **Test Clerk Connection:**

```typescript
// In your app, test Clerk connection
import { auth } from '@clerk/nextjs/server';

export async function testClerk() {
  try {
    const { userId } = await auth();
    console.log(
      'Clerk connection:',
      userId ? '✅ Working' : '❌ Not authenticated'
    );
  } catch (error) {
    console.error('Clerk error:', error);
  }
}
```

### **Test Supabase Connection:**

```typescript
// In your app, test Supabase connection
import { supabase } from '@/lib/supabase/client';

export async function testSupabase() {
  try {
    const { data, error } = await supabase
      .from('organizations')
      .select('count');
    console.log('Supabase connection:', error ? '❌ Error' : '✅ Working');
  } catch (error) {
    console.error('Supabase error:', error);
  }
}
```

---

## **✅ Success Indicators**

- ✅ **All environment variables** are set
- ✅ **Clerk connection** works
- ✅ **Supabase connection** works
- ✅ **Webhook secret** is configured
- ✅ **Service role key** has proper permissions

---

## **🔧 Troubleshooting**

### **Common Issues:**

1. **Missing environment variables**:
   - Check `.env.local` file exists
   - Verify variable names are correct
   - Restart your development server

2. **Clerk connection fails**:
   - Verify publishable key is correct
   - Check secret key is set
   - Ensure webhook secret is configured

3. **Supabase connection fails**:
   - Verify URL and keys are correct
   - Check service role key permissions
   - Test database connection

4. **Webhook not working**:
   - Verify webhook secret is set
   - Check webhook URL is correct
   - Test webhook endpoint

---

**Once environment variables are set up, your user type system will have the proper configuration! 🚀**
