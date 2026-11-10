import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="bg-white border border-sand rounded-lg p-6 shadow-sm space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-olive">
          Sacrament Meeting
        </h2>
        <p className="text-sm mt-1">
          <strong>Date:</strong> {meeting.date}
        </p>
        <p className="text-sm">
          <strong>Meeting type:</strong> {meeting.meetingType}
        </p>
      </header>

      <section>
        <h3 className="text-lg font-semibold text-olive">Leadership</h3>
        <p><strong>Presiding:</strong> {meeting.presiding}</p>
        <p><strong>Conducting:</strong> {meeting.conducting}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-olive">Opening</h3>
        <p>
          <strong>Opening hymn:</strong> #{meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
        <p><strong>Opening prayer:</strong> {meeting.openingPrayer}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-olive">Ward Business</h3>
        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc pl-6">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p>No ward business scheduled.</p>
        )}

        {meeting.stakeBusiness && (
          <p className="mt-2">Stake business will be discussed.</p>
        )}
      </section>

      <section>
        <h3 className="text-lg font-semibold text-olive">Sacrament</h3>
        <p>
          <strong>Sacrament hymn:</strong> #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-olive">Speakers and Musical Numbers</h3>
        {meeting.speakers.map((item, index) => (
          <p key={index}>
            <strong>{item.type === 'speaker' ? 'Speaker' : 'Musical Number'}:</strong>{' '}
            {item.name} — {item.topic}
          </p>
        ))}
      </section>

      <section>
        <h3 className="text-lg font-semibold text-olive">Closing</h3>
        <p>
          <strong>Closing hymn:</strong> #{meeting.closingHymn.number} - {meeting.closingHymn.title}
        </p>
        <p><strong>Closing prayer:</strong> {meeting.closingPrayer}</p>
      </section>
    </article>
  );
}

/*
usamos meeting.stakeBusiness para mostrar información solamente cuando su valor es true
.map(): recorremos los asuntos de la congregación y los participantes para mostrarlos como elementos individuales.
*/