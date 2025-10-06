import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { SignupFlowService } from '@/lib/signup-flow';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const svixId = headersList.get('svix-id');
    const svixTimestamp = headersList.get('svix-timestamp');
    const svixSignature = headersList.get('svix-signature');

    if (!svixId || !svixTimestamp || !svixSignature) {
      return NextResponse.json({ error: 'Missing svix headers' }, { status: 400 });
    }

    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');
    let event;

    try {
      event = webhook.verify(body, {
        'svix-id': svixId,
        'svix-timestamp': svixTimestamp,
        'svix-signature': svixSignature,
      });
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'user.created':
        await handleUserCreated(event.data);
        break;
      case 'user.updated':
        await handleUserUpdated(event.data);
        break;
      case 'user.deleted':
        await handleUserDeleted(event.data);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleUserCreated(data: any) {
  try {
    console.log('User created webhook received:', data.id);

    // Check if user has signup metadata
    const signupData = data.public_metadata?.signup_data;
    
    if (signupData) {
      // User signed up through our custom flow
      const result = await SignupFlowService.createOrganizationAndAdmin(
        data.id,
        signupData
      );

      if (result.success) {
        console.log('Organization and admin user created successfully');
      } else {
        console.error('Failed to create organization and admin:', result.error);
      }
    } else {
      // User signed up through default Clerk flow - redirect to onboarding
      console.log('User signed up through default flow, redirecting to onboarding');
    }
  } catch (error) {
    console.error('Error handling user created:', error);
  }
}

async function handleUserUpdated(data: any) {
  try {
    console.log('User updated webhook received:', data.id);
    // Handle user updates if needed
  } catch (error) {
    console.error('Error handling user updated:', error);
  }
}

async function handleUserDeleted(data: any) {
  try {
    console.log('User deleted webhook received:', data.id);
    // Handle user deletion if needed
  } catch (error) {
    console.error('Error handling user deleted:', error);
  }
}
