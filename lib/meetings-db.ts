import { neon } from '@neondatabase/serverless';
import type { SacramentMeeting } from './types';

const sql = neon(process.env.DATABASE_URL!);

const MEETINGS_PER_PAGE = 5; //5 meetings pot pagina

type MeetingRow = {
  id: number;
  date: string | Date;
  meeting_type: SacramentMeeting['meetingType'];
  presiding: string;
  conducting: string;
  announcements: string[] | null;
  opening_hymn: SacramentMeeting['openingHymn'];
  opening_prayer: string;
  ward_business: SacramentMeeting['wardBusiness'];
  stake_business: boolean;
  sacrament_hymn: SacramentMeeting['sacramentHymn'];
  speakers: SacramentMeeting['speakers'];
  closing_hymn: SacramentMeeting['closingHymn'];
  closing_prayer: string;
};

function mapMeeting(row: MeetingRow): SacramentMeeting {
  return {
    id: row.id,
    date:
      row.date instanceof Date
        ? row.date.toISOString().split('T')[0]
        : row.date,
    meetingType: row.meeting_type,
    presiding: row.presiding,
    conducting: row.conducting,
    announcements: row.announcements ?? [],
    openingHymn: row.opening_hymn,
    openingPrayer: row.opening_prayer,
    wardBusiness: row.ward_business ?? [],
    stakeBusiness: row.stake_business,
    sacramentHymn: row.sacrament_hymn,
    speakers: row.speakers ?? [],
    closingHymn: row.closing_hymn,
    closingPrayer: row.closing_prayer,
  };
}

export async function getMeetings(
  query = '',
  currentPage = 1
): Promise<SacramentMeeting[]> {
  const searchTerm = query.trim();
  const offset = (Math.max(1, currentPage) - 1) * MEETINGS_PER_PAGE;

  const rows = await sql`
    SELECT *
    FROM meetings
    WHERE (
      ${searchTerm} = ''
      OR CONCAT_WS(
        ' ',
        date::text,
        meeting_type,
        presiding,
        conducting,
        announcements::text,
        opening_hymn::text,
        ward_business::text,
        speakers::text
      ) ILIKE '%' || ${searchTerm} || '%'
    )
    ORDER BY date DESC
    LIMIT ${MEETINGS_PER_PAGE}
    OFFSET ${offset}
  `;

  return (rows as unknown as MeetingRow[]).map(mapMeeting);
}

export async function getMeetingsTotalPages(
  query = ''
): Promise<number> {
  const searchTerm = query.trim();

  const result = await sql`
    SELECT COUNT(*) AS total
    FROM meetings
    WHERE (
      ${searchTerm} = ''
      OR CONCAT_WS(
        ' ',
        date::text,
        meeting_type,
        presiding,
        conducting,
        announcements::text,
        opening_hymn::text,
        ward_business::text,
        speakers::text
      ) ILIKE '%' || ${searchTerm} || '%'
    )
  `;

  const total = Number(result[0].total);

  return Math.ceil(total / MEETINGS_PER_PAGE);
}

export async function getMeetingById(
  id: number
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT *
    FROM meetings
    WHERE id = ${id}
  `;

  if (rows.length === 0) {
    return null;
  }

  return mapMeeting(rows[0] as unknown as MeetingRow);
}

export async function getMeetingsByDate(
  date?: string | null
): Promise<SacramentMeeting[]> {
  const rows = date
    ? await sql`
        SELECT *
        FROM meetings
        WHERE date = ${date}
        ORDER BY date DESC
      `
    : await sql`
        SELECT *
        FROM meetings
        ORDER BY date DESC
      `;

  return (rows as unknown as MeetingRow[]).map(mapMeeting);
}

export async function getNextMeeting(): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT *
    FROM meetings
    WHERE date >= CURRENT_DATE
    ORDER BY date ASC
    LIMIT 1
  `;

  if (rows.length === 0) {
    return null;
  }

  return mapMeeting(rows[0] as unknown as MeetingRow);
}


// Mutation stubs — will be wired to the database in Week 04

export async function addMeeting(
  data: Omit<SacramentMeeting, 'id'>
): Promise<SacramentMeeting> {
  void data;
  throw new Error('addMeeting: database implementation coming in Week 04');
}

export async function updateMeeting(
  id: number,
  updates: Partial<SacramentMeeting>
): Promise<SacramentMeeting | null> {
  void id;
  void updates;
  throw new Error('updateMeeting: database implementation coming in Week 04');
}

export async function deleteMeeting(id: number): Promise<boolean> {
  void id;
  throw new Error('deleteMeeting: database implementation coming in Week 04');
}

/** //getNextMeeting:
1. Obtiene la fecha de hoy.
2. Busca las reuniones cuya fecha sea igual o posterior a hoy.
3. Ordena las reuniones desde la fecha más cercana hasta la más lejana.
4. Devuelve la primera reunión. Si no encuentra ninguna, devuelve null.
5. Utilizamos localeCompare() para ordenar las fechas, ya que están guardadas en formato YYYY-MM-DD.

mapMeeting();
La base de datos utiliza nombres como meeting_type y opening_hymn,
pero los componentes utilizan meetingType y openingHymn.
Esta función convierte esos nombres para que el resto del proyecto
pueda seguir trabajando con el mismo formato de antes.

addMeeting	Recibirá una reunión nueva sin id.
updateMeeting	Recibirá el id y los campos que se desean modificar.
deleteMeeting	Recibirá el id de la reunión que se eliminará.
y el throw new Error(...) y void indica que todavía no están implementadas.
*/