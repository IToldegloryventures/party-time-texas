# 🔗 **CLERK WEBHOOK SETUP GUIDE**

## **Required Clerk Webhook Configuration**

To make the user type system live, you need to configure Clerk webhooks.

---

## **Step 1: Access Clerk Dashboard**

1. **Go to** [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. **Select your project** (Ash-Cosmic-Portals-SaaS)
3. **Navigate to** "Webhooks" in the left sidebar

---

## **Step 2: Create New Webhook**

1. **Click** "Add Endpoint"
2. **Endpoint URL**: `https://technexsolutions.io/api/webhooks/clerk`
   - For development: `http://localhost:3000/api/webhooks/clerk`
3. **Events to Subscribe**: Select **ALL THREE**:
   - ✅ `user.created`
   - ✅ `user.updated`
   - ✅ `user.deleted`
4. **Click** "Create"

---

## **Step 3: Get Webhook Secret**

1. **Copy the webhook secret** from the webhook configuration
2. **Add to your environment variables**:
   ```bash
   CLERK_WEBHOOK_SECRET=whsec_4MhueCsAcgGy2IvXkmCaDD/QXa2zDN2e
   ```

---

## **Step 4: Update Environment Variables**

Add these to your `.env.local` file:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

---

## **Step 5: Test Webhook**

1. **Create a test user** in your app
2. **Check the webhook logs** in Clerk dashboard
3. **Verify** that the user is created in your Supabase database
4. **Confirm** the user has the correct role and organization

---

## **Step 6: Deploy and Configure Production**

1. **Deploy your app** to production
2. **Update webhook URL** to production domain
3. **Test the complete flow**:
   - User signup → Organization creation → Role assignment
   - Team invitation → User creation → Permission assignment

---

## **✅ Success Indicators**

- ✅ **Webhook receives events** from Clerk
- ✅ **Users created** in Supabase with correct roles
- ✅ **Organizations created** during signup
- ✅ **Team invitations** work correctly
- ✅ **Permission system** functions properly

---

## **🔧 Troubleshooting**

### **Common Issues:**

1. **Webhook not receiving events**:
   - Check webhook URL is correct
   - Verify webhook secret is set
   - Check server logs for errors

2. **Users not created in database**:
   - Check Supabase connection
   - Verify service role key
   - Check webhook handler code

3. **Roles not assigned correctly**:
   - Check webhook handler logic
   - Verify organization creation
   - Check permission system

---

**Once the webhook is configured, your user type system will be fully live! 🚀**
