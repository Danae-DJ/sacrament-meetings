
import { NextRequest, NextResponse } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: NextRequest) {
  // Get the optional date from the URL
  const date = request.nextUrl.searchParams.get('date');

  // Retrieve all meetings or filter by date
  const meetings = getMeetings(date);

  // Return the meetings as JSON
  return NextResponse.json(meetings);
}


/**NOte
NextRequest allows us to read request information, such as URL parameters.
getMeetings(date) uses the function you already built to retrieve all meetings or filter them by date.
NextResponse.json(meetings) returns the results in JSON format.
 */