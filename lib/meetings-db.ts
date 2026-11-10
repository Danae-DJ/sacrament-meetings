import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-09-27',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Manson',
    openingHymn: { number: 157, title: 'Blessings of God' },
    openingPrayer: 'Brother Jackson',
    wardBusiness: [{ description: 'Baptism of new members' }],
    stakeBusiness: false,
    sacramentHymn: { number: 189, title: "All is well" },
    speakers: [
      { name: 'Sister Mackey', topic: 'Repentance and Forgiveness', type: 'speaker' },
      { name: 'Brother Wilson', topic: 'Baptism', type: 'speaker' }
    ],
    closingHymn: { number: 101, title: 'Foundation of my Blessings' },
    closingPrayer: 'Brother Miller',
    announcements: ['Ward temple night: Oct 10']
  },
  {
    id: 2,
    date: '2026-10-04',
    meetingType: 'general',
    presiding: 'Prophet Dallin H. Oacks',
    conducting: 'Apostle Henry B. Eyring',
    openingHymn: { number: 56, title: 'oh, creations of the Lord' },
    openingPrayer: 'Sister Sommers',
    wardBusiness: [{ description: 'Finances' }],
    stakeBusiness: false,
    sacramentHymn: { number: 234, title: "Called to serve" },
    speakers: [
      { name: 'Sister Lee', topic: 'Charity', type: 'speaker' },
      { name: 'Brother Neil', topic: 'Hope', type: 'speaker' }
    ],
    closingHymn: { number: 88, title: 'when you teach your children' },
    closingPrayer: 'Brother Job',
    announcements: ['Temples']
  },
  {
    id: 3,
    date: '2026-10-11',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Bishop Smith',
    openingHymn: { number: 25, title: 'Charity' },
    openingPrayer: 'Sister Sommers',
    wardBusiness: [{ description: 'New members' }],
    stakeBusiness: false,
    sacramentHymn: { number: 203, title: "I Am a Child of God" },
    speakers: [
      { name: 'Sister Lee', topic: 'Charity', type: 'speaker' },
      { name: 'Brother Neil', topic: 'Hope', type: 'speaker' }
    ],
    closingHymn: { number: 88, title: 'I going to go the temple' },
    closingPrayer: 'Brother Anderson',
    announcements: ['Ward temple night: Oct 10']
  },
  {
    id: 4,
    date: '2026-10-18',
    meetingType: 'stake',
    presiding: 'President of Stake Timothy',
    conducting: 'Bishop Smith',
    openingHymn: { number: 2, title: 'Spirit of the Lord' },
    openingPrayer: 'Brother Sander',
    wardBusiness: [{ description: 'genealogy work' }],
    stakeBusiness: false,
    sacramentHymn: { number: 180, title: "I love seeing the temple" },
    speakers: [
      { name: 'Brother John', topic: 'Genealogy', type: 'speaker' },
      { name: 'Brother Manson', topic: 'Atonement', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' },
      { name: 'President of Stake Timothy', topic: 'Visit of the Temple', type: 'speaker' }
    ],
    closingHymn: { number: 22, title: 'Beautiful Zion' },
    closingPrayer: 'Brother Anderson',
    announcements: ['Working about genealogy and temple work']
  },
  {
    id: 5,
    date: '2026-10-25',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Manson',
    openingHymn: { number: 5, title: 'God of Israel' },
    openingPrayer: 'Sister Jenny',
    wardBusiness: [{ description: 'Family Camping' }],
    stakeBusiness: false,
    sacramentHymn: { number: 18, title: "Eternal Families" },
    speakers: [
      { name: 'Brother Greyson', topic: 'Eternal Family', type: 'speaker' },
      { name: 'Sister Hans', topic: 'Marriage', type: 'speaker' },
    ],
    closingHymn: { number: 56, title: 'We Are All Children of God' },
    closingPrayer: 'Brother Franklin',
    announcements: ['Working about genealogy and temple work']
  },
  {
    id: 6,
    date: '2026-11-01',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: Oct 10']
  },
  {
    id: 7,
    date: '2026-11-08',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Manson',
    openingHymn: { number: 157, title: 'Blessings of God' },
    openingPrayer: 'Brother Jackson',
    wardBusiness: [{ description: 'Baptism of new members' }],
    stakeBusiness: false,
    sacramentHymn: { number: 189, title: "All is well" },
    speakers: [
      { name: 'Sister Mackey', topic: 'Repentance and Forgiveness', type: 'speaker' },
      { name: 'Brother Wilson', topic: 'Baptism', type: 'speaker' }
    ],
    closingHymn: { number: 101, title: 'Foundation of my Blessings' },
    closingPrayer: 'Brother Miller',
    announcements: ['Ward temple night: Oct 10']
  },
  {
    id: 8,
    date: '2026-11-15',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Johson',
    openingHymn: { number: 7, title: 'another year' },
    openingPrayer: 'Brother Jackson',
    wardBusiness: [{ description: 'New babies' }],
    stakeBusiness: false,
    sacramentHymn: { number: 100, title: "it happened on a distant hill" },
    speakers: [
      { name: 'Sister Monsier', topic: 'Agreements', type: 'speaker' },
      { name: 'Brother Sona', topic: 'Holy Ghost', type: 'speaker' }
    ],
    closingHymn: { number: 15, title: 'Praise to the prophet' },
    closingPrayer: 'Brother Miller',
    announcements: ['Ward cleanup']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}

export function getNextMeeting(): SacramentMeeting | null {
  const today = new Date();

  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');

  const upcomingMeetings = getMeetings()
    .filter((meeting) => meeting.date >= todayString)
    .sort((a, b) => a.date.localeCompare(b.date));

  return upcomingMeetings[0] ?? null;
}

/** //getNextMeeting:
1. Obtiene la fecha de hoy.
2. Busca las reuniones cuya fecha sea igual o posterior a hoy.
3. Ordena las reuniones desde la fecha más cercana hasta la más lejana.
4. Devuelve la primera reunión. Si no encuentra ninguna, devuelve null.
5. Utilizamos localeCompare() para ordenar las fechas, ya que están guardadas en formato YYYY-MM-DD.
 */