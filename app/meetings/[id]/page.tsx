
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';
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

  const headersList = await headers();
  const host =
    headersList.get('x-forwarded-host') ??
    headersList.get('host');
  const protocol =
    headersList.get('x-forwarded-proto') ?? 'http';

  if (!host) {
    throw new Error('Unable to determine server host');
  }

  const response = await fetch(
    `${protocol}://${host}/api/meetings/${meetingId}`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    notFound();
  }

  const meeting: SacramentMeeting = await response.json();

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
headers() nos permite conocer el host y protocolo de la aplicación para construir una URL completa.
fetch() solicita la reunión a /api/meetings/${meetingId}.
response.ok comprueba si la API respondió correctamente.
Si la API devuelve un error, mostramos la página 404.
MeetingDetail sigue mostrando la reunión como antes.
 */