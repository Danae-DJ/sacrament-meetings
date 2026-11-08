import MeetingsList from '@/components/MeetingsList';

export default function MeetingsPage() {
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

      <MeetingsList />
    </main>
  );
}

/*
page.tsx conserva la estructura y el encabezado.
MeetingsList.tsx solicita los datos a /api/meetings.
MeetingCard.tsx presenta cada reunión.
meetings.map(): recorre las reuniones y crea una tarjeta MeetingCard para cada una.
*/