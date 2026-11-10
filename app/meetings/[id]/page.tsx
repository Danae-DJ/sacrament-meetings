import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import { getMeetingById } from '@/lib/meetings-db';

export default function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="space-y-6">
      <Suspense
        fallback={
          <p className="text-center py-10">
            Loading meeting details...
          </p>
        }
      >
        <MeetingContent params={params} />
      </Suspense>
    </main>
  );
}

async function MeetingContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}



/**
params: recibe el identificador de la URL.
await params: obtiene ese identificador.
getMeeting(id): consulta nuestra API.
MeetingPage: prepara la página y establece el límite de Suspense.
MeetingContent: realiza la solicitud a la API y presenta los detalles
notFound(): muestra la página 404 si la reunión no existe.
MeetingDetail: reutiliza el componente que ya construido para presentar toda la información.
 */