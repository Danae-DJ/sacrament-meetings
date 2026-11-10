//NO TOCAR, LO UNICO QUE IMPORTA ES QUE FUNCIONA!!!!
import { Suspense } from 'react';
import { connection } from 'next/server';
import { getNextMeeting } from '@/lib/meetings-db';
import MeetingDetail from '@/components/MeetingDetail';

export default function CurrentMeetingPage() {
  return (
    <main className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-olive">
          Upcoming Sacrament Meeting
        </h1>

        <p className="mt-2">
          Here is the next scheduled sacrament meeting for Greenvilla Ward.
        </p>
      </header>

      <Suspense
        fallback={
          <p className="text-center py-10">
            Loading upcoming meeting...
          </p>
        }
      >
        <CurrentMeetingContent />
      </Suspense>
    </main>
  );
}

async function CurrentMeetingContent() {
  await connection();

  const meeting = getNextMeeting();

  return meeting ? (
    <MeetingDetail meeting={meeting} />
  ) : (
    <p className="text-center py-10">
      No upcoming meetings are scheduled.
    </p>
  );
}

/*Notas despues de mucho ensayo y error:
getNextMeeting() obtiene la reunión más próxima.
MeetingDetail reutiliza el diseño que ya construimos para mostrar los detalles.
El operador meeting ? ... : ... comprueba si encontramos una reunión:
- Si existe, muestra sus detalles.
- Si no existe, muestra un mensaje informativo.
Nota importante:
await connection() le indica a Next.js que espere a una solicitud real
antes de continuar con el código que depende de información dinámica; 
así, new Date() se ejecutará cuando alguien visite la página 
y podremos seleccionar la reunión más próxima según la fecha actual.
CurrentMeetingPage: muestra la estructura de la página y el límite de Suspense.
CurrentMeetingContent: obtiene la fecha actual, 
busca la próxima reunión y muestra sus detalles.
Es decir, tanto connection() como getNextMeeting() se ejecutan dentro de Suspense.
*/