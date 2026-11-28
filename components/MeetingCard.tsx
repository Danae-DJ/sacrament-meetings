"use client";

import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="bg-white border border-sand rounded-lg p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-olive mb-2">
        {meeting.meetingType.charAt(0).toUpperCase() +
          meeting.meetingType.slice(1)}{" "}
        Meeting
      </h2>

      <p className="text-sm mb-2">
        <strong>Date:</strong> {meeting.date}
      </p>

      <p className="text-sm mb-2">
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p className="text-sm mb-4">
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/meetings/${meeting.id}`}
          className="inline-block bg-olive text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          View Details
        </Link>

        <form
          action={deleteMeeting}
          onSubmit={(event) => {
            if (
              !window.confirm("Are you sure you want to delete this meeting?")
            ) {
              event.preventDefault();
            }
          }}
        >
          <input type="hidden" name="id" value={meeting.id} />

          <button
            type="submit"
            className="bg-red-700 text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}

/*
SacramentMeeting: importa el tipo que ya definiste.
MeetingCardProps: indica que el componente recibirá una propiedad llamada meeting con toda la estructura de una reunión.
meeting.meetingType: muestra el tipo de reunión.
meeting.date, meeting.presiding y meeting.conducting: muestran los datos principales.
Link: permite navegar a la página de detalles de esa reunión.
*/
