// Timeline of the life of Prophet Muhammad ﷺ (the Seerah).
//
// Dates follow the most widely cited traditional accounts. Some early dates are
// approximate — classical sources differ by a year or two — so they are best
// understood as "around" the year given. The Islamic (Hijri / AH) calendar
// begins at the Hijra (622 CE), so events before that have no AH year.

export type SeerahCategory =
  | 'birth'
  | 'childhood'
  | 'revelation'
  | 'migration'
  | 'battle'
  | 'treaty'
  | 'passing';

export interface SeerahLocation {
  id: string;
  /** Short name shown on the map / pin label. */
  label: string;
  /** Position on the stylised SVG map (viewBox 0 0 360 480). */
  x: number;
  y: number;
}

export interface SeerahEvent {
  id: string;
  title: string;
  /** Gregorian year label, e.g. "570 CE". */
  ce: string;
  /** Hijri year label, e.g. "1 AH". Undefined for pre-Hijra events. */
  ah?: string;
  /** How old he ﷺ was, e.g. "Age 40", "Birth", "≈ Age 63". */
  age: string;
  /** Key into seerahLocations. */
  locationId: string;
  /** Specific place name shown on the card (may be more precise than the pin). */
  place: string;
  category: SeerahCategory;
  icon: string;
  /** One or two lines, always visible. */
  summary: string;
  /** Longer detail, revealed when the card is expanded. */
  detail: string;
}

// Stylised map points. Coordinates are schematic (relative positions of the
// Hejaz and the wider region), not a precise geographic projection.
export const seerahLocations: Record<string, SeerahLocation> = {
  makkah: { id: 'makkah', label: 'Makkah', x: 205, y: 320 },
  hira: { id: 'hira', label: 'Cave of Hira', x: 216, y: 305 },
  arafat: { id: 'arafat', label: 'Arafat', x: 222, y: 334 },
  taif: { id: 'taif', label: 'Taif', x: 238, y: 336 },
  madinah: { id: 'madinah', label: 'Madinah', x: 188, y: 230 },
  uhud: { id: 'uhud', label: 'Mt. Uhud', x: 184, y: 216 },
  quba: { id: 'quba', label: 'Quba', x: 194, y: 240 },
  badr: { id: 'badr', label: 'Badr', x: 166, y: 286 },
  hudaybiyyah: { id: 'hudaybiyyah', label: 'Hudaybiyyah', x: 184, y: 304 },
  jerusalem: { id: 'jerusalem', label: 'Jerusalem', x: 138, y: 78 },
  busra: { id: 'busra', label: 'Busra (Syria)', x: 172, y: 60 },
  abyssinia: { id: 'abyssinia', label: 'Abyssinia', x: 78, y: 408 },
};

export const categoryStyles: Record<
  SeerahCategory,
  { label: string; dot: string; ring: string; chip: string }
> = {
  birth: {
    label: 'Birth',
    dot: 'bg-amber-400',
    ring: 'ring-amber-400/40',
    chip: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
  childhood: {
    label: 'Early Life',
    dot: 'bg-sky-400',
    ring: 'ring-sky-400/40',
    chip: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  },
  revelation: {
    label: 'Revelation',
    dot: 'bg-emerald-400',
    ring: 'ring-emerald-400/40',
    chip: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  migration: {
    label: 'Migration',
    dot: 'bg-violet-400',
    ring: 'ring-violet-400/40',
    chip: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  },
  battle: {
    label: 'Battle',
    dot: 'bg-rose-400',
    ring: 'ring-rose-400/40',
    chip: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  },
  treaty: {
    label: 'Treaty',
    dot: 'bg-teal-400',
    ring: 'ring-teal-400/40',
    chip: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
  },
  passing: {
    label: 'Passing',
    dot: 'bg-slate-300',
    ring: 'ring-slate-300/40',
    chip: 'bg-slate-400/15 text-slate-200 border-slate-400/30',
  },
};

export const seerahTimeline: SeerahEvent[] = [
  {
    id: 'birth',
    title: 'Birth in the Year of the Elephant',
    ce: '570 CE',
    age: 'Birth',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'birth',
    icon: '⭐',
    summary:
      'Muhammad ﷺ was born in Makkah into the noble clan of Banu Hashim. His father, Abdullah, had passed away before his birth.',
    detail:
      'He ﷺ was born on a Monday in the month of Rabi al-Awwal, in the "Year of the Elephant" — the year the army of Abraha came to destroy the Ka\'bah and was turned back by Allah. His grandfather, Abdul-Muttalib, named him Muhammad ("the Praised One"). As was the custom of Makkah, he was sent to be nursed in the desert by Halimah as-Sa\'diyyah of the Banu Sa\'d tribe.',
  },
  {
    id: 'mother-death',
    title: 'Death of his Mother Aminah',
    ce: '≈ 576 CE',
    age: 'Age 6',
    locationId: 'madinah',
    place: 'Al-Abwa (between Makkah & Madinah)',
    category: 'childhood',
    icon: '🕊️',
    summary:
      'His mother Aminah passed away at Al-Abwa while returning from a visit to Madinah, leaving him an orphan of both parents.',
    detail:
      'After living briefly with his mother, she took him to visit his maternal relatives in Yathrib (later Madinah). On the journey home she fell ill and died at Al-Abwa. His devoted nurse Umm Ayman brought him back to Makkah, where he was taken into the care of his grandfather, Abdul-Muttalib.',
  },
  {
    id: 'grandfather-uncle',
    title: 'Raised by his Grandfather, then his Uncle',
    ce: '≈ 578 CE',
    age: 'Age 8',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'childhood',
    icon: '🤲',
    summary:
      'When Abdul-Muttalib died, his uncle Abu Talib took him in and protected and loved him for decades.',
    detail:
      'Abdul-Muttalib cared deeply for his grandson but died when the boy was about eight. Guardianship passed to Abu Talib, a respected but not wealthy leader of Banu Hashim. Abu Talib loved him dearly and would remain his fiercest protector against the Quraysh long into his prophethood.',
  },
  {
    id: 'bahira',
    title: 'Journey to Syria & the Monk Bahira',
    ce: '≈ 582 CE',
    age: 'Age 12',
    locationId: 'busra',
    place: 'Busra, Syria',
    category: 'childhood',
    icon: '🐫',
    summary:
      'Travelling with a trade caravan, the young Muhammad ﷺ met the Christian monk Bahira, who recognised signs of prophethood in him.',
    detail:
      'Abu Talib took his nephew on a trading journey to Syria. At Busra, the monk Bahira observed the boy and the descriptions in his scriptures, and warned Abu Talib to guard him carefully and return him home, for he foresaw a great future for him.',
  },
  {
    id: 'khadijah',
    title: 'Marriage to Khadijah (ra)',
    ce: '≈ 595 CE',
    age: 'Age 25',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'childhood',
    icon: '💍',
    summary:
      'Known as Al-Amin ("the Trustworthy"), he managed the trade of Khadijah bint Khuwaylid and then married her.',
    detail:
      'His honesty and skill in trade so impressed the noble and wealthy widow Khadijah (ra) that she proposed marriage. He was 25 and she around 40. Their marriage was one of deep love and partnership; she bore most of his children and would become the first person to believe in his message.',
  },
  {
    id: 'kabah-arbitration',
    title: 'Rebuilding the Ka\'bah & the Black Stone',
    ce: '≈ 605 CE',
    age: 'Age 35',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'childhood',
    icon: '🕋',
    summary:
      'When the clans of Quraysh nearly came to war over who would place the Black Stone, he ﷺ resolved it wisely.',
    detail:
      'After a flood damaged the Ka\'bah, the Quraysh rebuilt it but quarrelled bitterly over the honour of setting the Black Stone in place. They agreed to accept the judgement of the next man to enter — and it was Muhammad ﷺ. He placed the stone on a cloak and had a leader of each clan lift a corner, then set it himself, satisfying everyone.',
  },
  {
    id: 'first-revelation',
    title: 'The First Revelation',
    ce: '610 CE',
    age: 'Age 40',
    locationId: 'hira',
    place: 'Cave of Hira, Makkah',
    category: 'revelation',
    icon: '📖',
    summary:
      'In the Cave of Hira, the Angel Jibril (Gabriel) brought the first words of the Qur\'an: "Read, in the name of your Lord…"',
    detail:
      'He ﷺ would retreat to the Cave of Hira to worship and reflect. There the Angel Jibril appeared and commanded him to "Read!" (Iqra), revealing the opening verses of Surah Al-\'Alaq. Shaken, he returned to Khadijah (ra), who comforted and reassured him. This marked the beginning of his prophethood.',
  },
  {
    id: 'public-call',
    title: 'The Public Call to Islam',
    ce: '≈ 613 CE',
    age: 'Age 43',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'revelation',
    icon: '📣',
    summary:
      'After years of private preaching, he ﷺ was commanded to proclaim the message openly, and faced fierce opposition from Quraysh.',
    detail:
      'For about three years the call was private among family and close friends. Then the command came to "proclaim openly what you are commanded." From the hill of Safa he called the people of Makkah to worship Allah alone. The Quraysh leaders responded with mockery, boycott, and harsh persecution of the early Muslims, especially the weak and enslaved.',
  },
  {
    id: 'abyssinia',
    title: 'Migration to Abyssinia',
    ce: '≈ 615 CE',
    age: 'Age 45',
    locationId: 'abyssinia',
    place: 'Abyssinia (Habashah)',
    category: 'migration',
    icon: '⛵',
    summary:
      'To escape persecution, a group of Muslims migrated across the Red Sea to the just Christian king (Negus) of Abyssinia.',
    detail:
      'As persecution intensified, the Prophet ﷺ advised a group of companions to seek refuge with the Negus (Najashi), a Christian king known for his justice. When Quraysh sent envoys demanding their return, Ja\'far ibn Abi Talib (ra) recited verses about Jesus and Mary from Surah Maryam, moving the king to tears. The Negus refused to hand them over.',
  },
  {
    id: 'year-of-sorrow',
    title: 'The Year of Sorrow',
    ce: '≈ 619 CE',
    age: 'Age 49',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'childhood',
    icon: '🥀',
    summary:
      'Within a short span he ﷺ lost both his beloved wife Khadijah (ra) and his protective uncle Abu Talib.',
    detail:
      'These two deaths removed his closest emotional support and his shield against the Quraysh, who grew bolder in their hostility. Tradition calls this period \'Am al-Huzn — the Year of Sorrow.',
  },
  {
    id: 'taif',
    title: 'The Journey to Taif',
    ce: '≈ 619 CE',
    age: 'Age 50',
    locationId: 'taif',
    place: 'Taif',
    category: 'migration',
    icon: '🏔️',
    summary:
      'Seeking new support, he ﷺ went to Taif but was rejected and stoned — yet responded with mercy, not curses.',
    detail:
      'He travelled to the town of Taif hoping its leaders would accept Islam, but they mocked him and set children to stone him until his feet bled. When the angel of the mountains offered to crush the town, he ﷺ refused, praying instead that their descendants might one day worship Allah. It stands as a profound example of patience and mercy.',
  },
  {
    id: 'isra-miraj',
    title: 'Al-Isra wal-Mi\'raj',
    ce: '≈ 621 CE',
    age: 'Age 51',
    locationId: 'jerusalem',
    place: 'Makkah → Jerusalem → the Heavens',
    category: 'revelation',
    icon: '🌙',
    summary:
      'The miraculous Night Journey from Makkah to Jerusalem, and the ascension through the heavens, where the five daily prayers were ordained.',
    detail:
      'In a single night he ﷺ was carried from the Sacred Mosque in Makkah to Al-Aqsa in Jerusalem (Al-Isra), then ascended through the seven heavens (Al-Mi\'raj), meeting earlier prophets and reaching a station near his Lord. There the five daily prayers (Salah) were prescribed for the Muslims.',
  },
  {
    id: 'aqabah',
    title: 'The Pledges of Aqabah',
    ce: '621–622 CE',
    age: 'Age 51–52',
    locationId: 'makkah',
    place: 'Aqabah, near Mina (Makkah)',
    category: 'migration',
    icon: '🤝',
    summary:
      'Pilgrims from Yathrib (Madinah) accepted Islam and pledged to support and protect the Prophet ﷺ, opening the door to the Hijra.',
    detail:
      'At the hill of Aqabah, groups from the Yathrib tribes of Aws and Khazraj embraced Islam over two successive years. In the second pledge, some seventy of them vowed to protect the Prophet ﷺ as they would their own families. This set the stage for the migration of the Muslims to their city.',
  },
  {
    id: 'hijra',
    title: 'The Hijra to Madinah',
    ce: '622 CE',
    ah: '1 AH',
    age: 'Age 52',
    locationId: 'quba',
    place: 'Makkah → Quba → Madinah',
    category: 'migration',
    icon: '🌅',
    summary:
      'The Prophet ﷺ migrated to Yathrib — renamed Madinah. This event marks the start of the Islamic (Hijri) calendar.',
    detail:
      'Escaping a Quraysh plot to kill him, he ﷺ left Makkah with Abu Bakr (ra), hiding in the Cave of Thawr before journeying north. He first reached Quba, where he built the first mosque, then entered Madinah to a joyful welcome. There he built the Prophet\'s Mosque, established brotherhood between the Migrants (Muhajirun) and Helpers (Ansar), and drew up the Constitution of Madinah. The Hijra became year 1 of the Islamic calendar.',
  },
  {
    id: 'badr',
    title: 'The Battle of Badr',
    ce: '624 CE',
    ah: '2 AH',
    age: 'Age 53',
    locationId: 'badr',
    place: 'Badr',
    category: 'battle',
    icon: '⚔️',
    summary:
      'Around 313 Muslims defeated a far larger Makkan army — a decisive victory the Qur\'an calls the "Day of Criterion".',
    detail:
      'A small, poorly equipped Muslim force met a Quraysh army roughly three times its size near the wells of Badr. Against the odds they won a decisive victory, with several Quraysh leaders killed. The Qur\'an describes angels sent to aid the believers. Badr transformed the standing of the young Muslim community in Arabia.',
  },
  {
    id: 'uhud',
    title: 'The Battle of Uhud',
    ce: '625 CE',
    ah: '3 AH',
    age: 'Age 55',
    locationId: 'uhud',
    place: 'Mount Uhud, near Madinah',
    category: 'battle',
    icon: '🛡️',
    summary:
      'Quraysh returned for revenge. An early Muslim advantage was lost when archers left their post, and the Prophet ﷺ was wounded.',
    detail:
      'The Makkans came to avenge Badr. The Muslims first gained the upper hand, but a group of archers abandoned their assigned hill to gather spoils, allowing the cavalry of Khalid ibn al-Walid (then not yet Muslim) to strike from behind. Many companions were martyred, including the Prophet\'s uncle Hamza (ra), and the Prophet ﷺ himself was injured. The battle was a hard lesson in discipline and obedience.',
  },
  {
    id: 'khandaq',
    title: 'The Battle of the Trench (Khandaq)',
    ce: '627 CE',
    ah: '5 AH',
    age: 'Age 57',
    locationId: 'madinah',
    place: 'Madinah',
    category: 'battle',
    icon: '🏗️',
    summary:
      'A huge confederate army besieged Madinah, but a defensive trench — suggested by Salman al-Farsi (ra) — thwarted them.',
    detail:
      'An alliance (the "Confederates", or Ahzab) of around ten thousand laid siege to Madinah. On the advice of Salman al-Farsi (ra), the Muslims dug a trench across the city\'s exposed northern flank — a tactic unknown to the Arabs — which the cavalry could not cross. After a tense siege, a fierce wind and division among the enemy forced them to withdraw, ending the Quraysh threat to Madinah.',
  },
  {
    id: 'hudaybiyyah',
    title: 'The Treaty of Hudaybiyyah',
    ce: '628 CE',
    ah: '6 AH',
    age: 'Age 58',
    locationId: 'hudaybiyyah',
    place: 'Hudaybiyyah, near Makkah',
    category: 'treaty',
    icon: '📜',
    summary:
      'A ten-year truce with Quraysh that seemed unfavourable, yet the Qur\'an called it a "manifest victory".',
    detail:
      'Setting out to perform Umrah, the Muslims were stopped at Hudaybiyyah. The resulting treaty included terms that many companions found difficult, but it brought peace, recognised the Muslims as an equal party, and opened the way for Islam to spread rapidly. Within two years the number of Muslims grew dramatically. Surah Al-Fath was revealed about it.',
  },
  {
    id: 'conquest-makkah',
    title: 'The Conquest of Makkah',
    ce: '630 CE',
    ah: '8 AH',
    age: 'Age 60',
    locationId: 'makkah',
    place: 'Makkah',
    category: 'migration',
    icon: '🕋',
    summary:
      'After Quraysh broke the treaty, the Prophet ﷺ entered Makkah almost without bloodshed and forgave his former persecutors.',
    detail:
      'When an ally of Quraysh violated the treaty, the Prophet ﷺ marched on Makkah with some ten thousand Muslims. The city surrendered with almost no fighting. Entering humbly, he forgave the people who had driven him out and tortured his followers, declaring "Go, for you are free." He cleansed the Ka\'bah of its 360 idols, restoring it to the pure worship of Allah.',
  },
  {
    id: 'farewell-hajj',
    title: 'The Farewell Pilgrimage & Sermon',
    ce: '632 CE',
    ah: '10 AH',
    age: 'Age 63',
    locationId: 'arafat',
    place: 'Mount Arafat, Makkah',
    category: 'revelation',
    icon: '🏞️',
    summary:
      'On his only Hajj, he ﷺ delivered the Farewell Sermon to over 100,000 Muslims, summarising the faith\'s core principles.',
    detail:
      'Standing at Arafat before a vast gathering, he ﷺ gave the Farewell Sermon (Khutbat al-Wada\'), affirming the sanctity of life and property, the rights of women, the equality of all people regardless of race, and the duty to hold fast to the Qur\'an and his Sunnah. There the verse was revealed: "This day I have perfected for you your religion." It was a fitting summary of his mission.',
  },
  {
    id: 'passing',
    title: 'The Passing of the Prophet ﷺ',
    ce: '632 CE',
    ah: '11 AH',
    age: '≈ Age 63',
    locationId: 'madinah',
    place: 'Madinah',
    category: 'passing',
    icon: '🕊️',
    summary:
      'After a short illness, he ﷺ passed away in Madinah in the room of his wife Aisha (ra), his mission complete.',
    detail:
      'A few months after the Farewell Pilgrimage he ﷺ fell ill. In his final days he asked Abu Bakr (ra) to lead the prayers. He passed away on a Monday in Rabi al-Awwal, in the room of Aisha (ra), and was buried there. He left behind no wealth, but a complete religion and a community that would carry his message across the world. Inna lillahi wa inna ilayhi raji\'un.',
  },
];
