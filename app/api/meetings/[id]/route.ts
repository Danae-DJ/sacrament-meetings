import { NextRequest, NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Get the ID from the URL
  const { id } = await params;

  // Convert the ID to a number
  const meetingId = Number(id);

  // Check if the ID is valid
  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    return NextResponse.json(
      { error: 'Invalid meeting ID' },
      { status: 400 }
    );
  }

  // Find the meeting
  const meeting = getMeetingById(meetingId);

  // Return 404 if the meeting does not exist
  if (!meeting) {
    return NextResponse.json(
      { error: 'Meeting not found' },
      { status: 404 }
    );
  }

  // Return the meeting
  return NextResponse.json(meeting);
}

//Just after to create meetings/route, 
// is necesary to create this  for endpoints.

//An important clarification: in Next.js 16, `params` 
// is a promise, which is why we use `await params` 
// before retrieving the ID.