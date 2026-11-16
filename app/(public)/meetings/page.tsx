import { Suspense } from 'react';
import MeetingCard from '@/components/MeetingCard';
import MeetingSearch from '@/components/MeetingSearch';
import Pagination from '@/components/Pagination';
import {
  getMeetings,
  getMeetingsTotalPages,
} from '@/lib/meetings-db';

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const params = await searchParams;

  const query = params.query ?? '';
  const requestedPage = Math.max(1, Number(params.page) || 1);

  const totalPages = await getMeetingsTotalPages(query);

  const currentPage =
    totalPages > 0 ? Math.min(requestedPage, totalPages) : 1;

  const meetings = await getMeetings(query, currentPage);

  return (
    <main className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-olive">
          Sacrament Meetings
        </h1>

        <p className="mt-2">
          Browse the schedule and past sacrament meetings.
        </p>
      </header>

      <Suspense fallback={<p>Loading search...</p>}>
        <MeetingSearch />
      </Suspense>

      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}

      <Suspense fallback={<p>Loading pagination...</p>}>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Suspense>
    </main>
  );
}

/*
page.tsx conserva la estructura y el encabezado.
La página ahora consulta PostgreSQL directamente.
MeetingCard.tsx presenta cada reunión.
meetings.map(): recorre las reuniones y crea una tarjeta MeetingCard para cada una.
Obtiene el texto de búsqueda desde la URL.
Calcula cuántas páginas existen.
Solicita solamente las cinco reuniones correspondientes a la página actual.
*/