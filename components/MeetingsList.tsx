'use client';

import { useEffect, useState } from 'react';
import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingsList() {
  const [meetings, setMeetings] = useState<SacramentMeeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMeetings() {
      try {
        const response = await fetch('/api/meetings');

        if (!response.ok) {
          throw new Error('Failed to fetch meetings');
        }

        const data: SacramentMeeting[] = await response.json();
        setMeetings(data);
      } catch {
        setError('Unable to load meetings. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchMeetings();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading meetings...</p>;
  }

  if (error) {
    return <p className="text-center py-10">{error}</p>;
  }

  if (meetings.length === 0) {
    return <p>No meetings found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}