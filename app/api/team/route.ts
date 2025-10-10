import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    // Get the current user
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data from our users table
    const { data: userData } = await supabase
      .from('users')
      .select('id, organization_id, role')
      .eq('clerk_id', authUser.id)
      .single();

    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get all team members from the same organization
    const { data: teamMembers, error } = await supabase
      .from('users')
      .select('id, name, email, role, status, created_at')
      .eq('organization_id', userData.organization_id)
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching team members:', error);
      return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
    }

    // Filter out the current user and format the response
    const members = teamMembers
      ?.filter(member => member.id !== userData.id)
      .map(member => ({
        id: member.id,
        name: member.name || member.email.split('@')[0],
        email: member.email,
        role: member.role,
        status: member.status,
        created_at: member.created_at
      })) || [];

    return NextResponse.json(members);
  } catch (error) {
    console.error('Team API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
