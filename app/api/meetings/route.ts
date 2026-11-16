import { NextRequest, NextResponse } from 'next/server';
import { getMeetingsByDate } from '@/lib/meetings-db';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date');

  const meetings = await getMeetingsByDate(date);

  return NextResponse.json(meetings);
}


/**NOte
NextRequest allows us to read request information, such as URL parameters.
getMeetings(date) uses the function you already built to retrieve all meetings or filter them by date.
NextResponse.json(meetings) returns the results in JSON format.
 */