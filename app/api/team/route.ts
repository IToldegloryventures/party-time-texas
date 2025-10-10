import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: userData } = await supabase
      .from('users')
      .select('organization_id')
      .eq('clerk_id', userId)
      .single();

    if (!userData || !userData.organization_id) {
      return NextResponse.json({ error: 'User or organization not found' }, { status: 404 });
    }

    const { data: teamMembers, error } = await supabase
      .from('users')
      .select('id, email, first_name, last_name')
      .eq('organization_id', userData.organization_id)
      .order('first_name', { ascending: true });

    if (error) {
      console.error('Error fetching team members:', error);
      return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
    }

    const formattedMembers = teamMembers.map(member => ({
      id: member.id,
      name: `${member.first_name || ''} ${member.last_name || ''}`.trim() || member.email,
      email: member.email,
    }));

    return NextResponse.json(formattedMembers);
  } catch (error) {
    console.error('API error fetching team members:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}