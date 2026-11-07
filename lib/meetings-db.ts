import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-09-20',
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
    id: 2,
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
    id: 3,
    date: '2026-10-04',
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
    date: '2026-10-11',
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
    date: '2026-10-18',
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
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}