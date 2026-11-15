// ALL EVENT DETAILS LIVE HERE. Edit this file only.

// Helper: album('one', 1, 3) -> ['/images/one/1-1.jpg', '/images/one/1-2.jpg', '/images/one/1-3.jpg']
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const album = (folder, prefix, count) =>
  Array.from({ length: count }, (_, i) => asset(`images/${folder}/${prefix}-${i + 1}.jpg`));

export const CONFIG = {
  name: 'Shaun Matthew Inson',
  fullName: 'Shaun Matthew Amparo Inson', // shown as a handwritten signature on the opening screen
  startsAt: '2027-01-05T17:00:00+08:00', // Philippine Time (Asia/Manila)
  dateDisplay: 'January 5, 2027',
  timeDisplay: '5:00 PM',
  venue: 'Mahangin, Candijay, Bohol',
  venueFull: 'Mahangin, Candijay, Bohol, Philippines',
  mapUrl: 'https://www.google.com/maps/place/Mahangin,+Candijay,+Bohol/@9.7959091,124.4850117,39a,90y,213.34h,25.95t/data=!3m7!1e1!3m5!1sAIN99EBKlme2VWRgvRnl2g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D64.04986399298811%26panoid%3DAIN99EBKlme2VWRgvRnl2g%26yaw%3D213.33632280508695!7i16384!8i8192!4m6!3m5!1s0x33aa09b2b4bc703f:0x1961d6678a8ccfd4!8m2!3d9.8053181!4d124.4780429!16s%2Fg%2F11gbfn_b1p?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
  theme: 'A Magical First Birthday',

  // RSVP answers are saved in Supabase (table: rsvps).
  // 1) Run supabase/rsvps.sql in the Supabase SQL Editor.
  // 2) Paste your PUBLISHABLE (anon) key below. It is safe to put here:
  //    the table only allows guests to ADD an RSVP, never to read it.
  supabase: {
    url: 'https://okkftsurstnouvjvygre.supabase.co',
    anonKey: 'sb_publishable_48hh1b9Y29lHu4Ku-hHICQ_oc5_L4ib'
  },
  rsvpEmail: '', // optional backup, e.g. 'family@example.com'

  musicFile: asset('music/just.mp4'),

  // "My Little World" gallery. Files are in /public/images/little/
  // Photos (.jpg/.png) and videos (.mp4) both work. Add or remove lines freely.
  photos: [
    asset('images/little/1.jpg'),
    asset('images/little/2.jpg'),
    asset('images/little/3.jpg'),
    asset('images/little/4.jpg'),
    asset('images/little/5.jpg'),
    asset('images/little/6.mp4')
  ],
  // One caption per item above, in the same order.
  photoCaptions: [
    'The beginning of a beautiful little story.',
    'A smile that makes every day brighter.',
    'Little moments, endless happiness.',
    'Growing up surrounded by love.',
    'Our favorite little sunshine.',
    'One little boy, a whole lot of love.'
  ],
  milestoneImages: Array(12).fill(''),

  // One album per month, in order: index 0 = Month 1 ... index 11 = Month 12.
  // Months with an empty list ([]) show a "memory is waiting" placeholder.
  milestoneAlbums: [
    album('one', 1, 3),     // Month 1
    album('two', 2, 6),     // Month 2
    album('three', 3, 8),   // Month 3
    album('four', 4, 8),    // Month 4
    album('five', 5, 8),    // Month 5
    album('six', 6, 7),     // Month 6
    album('seven', 7, 12),  // Month 7
    album('eight', 8, 12),  // Month 8
    album('nine', 9, 16),   // Month 9
    album('ten', 10, 11),   // Month 10
    [],                     // Month 11 (add: album('eleven', 11, 5))
    []                      // Month 12 (add: album('twelve', 12, 5))
  ],

  // Editable captions. Replace with your own.
  milestones: [
    'A little bundle of joy.', 'Growing sweeter every day.', 'Little smiles everywhere.',
    'Discovering the world.', 'More giggles and cuddles.', 'Half a year of happiness!',
    'Little adventures begin.', 'Growing stronger every day.', 'More curious and playful.',
    'So many new discoveries.', 'Almost one!', 'ONE YEAR OF LOVE!'
  ]
};