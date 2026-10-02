/* Where we sleep, in order. Everything else hangs off these ids.
   Dates are the nights, not the days present — Kyoto 4-9 means five nights
   with the 9th spent driving on to Gujō.

   Names stay in English, as they appear on signs and in Google Maps. `he` is
   only there so a search typed in Hebrew finds the place. */

export const destinations = [
  {
    id: "kyoto",
    name: "Kyoto",
    ja: "京都",
    he: "קיוטו",
    from: "2026-10-04",
    to: "2026-10-09",
    nights: 5,
    hotels: ["w-potel", "w-miru"],
    line: "חמישה לילות, שני מלונות, ואפס חובות. Osaka היא יום טיול מפה.",
    places: "Umekōji · Gion · יום ב-Osaka"
  },
  {
    id: "gujo",
    name: "Gujō Hachiman",
    ja: "郡上八幡",
    he: "גוג׳ו",
    from: "2026-10-09",
    to: "2026-10-10",
    nights: 1,
    hotels: ["w-fairfield"],
    line: "עיירה עם אופי. לא סתם עצירה בדרך.",
    places: "העיר העתיקה · תעלות · אחר צהריים רגוע"
  },
  {
    id: "matsumoto",
    name: "Matsumoto",
    ja: "松本",
    he: "מצומוטו",
    from: "2026-10-10",
    to: "2026-10-13",
    nights: 3,
    hotels: ["w-jujo"],
    line: "בסיס גמיש: גם העיר, גם ההרים.",
    places: "הטירה · Nakamachi · האלפים"
  },
  {
    id: "fuji",
    name: "Fuji · Gotemba",
    ja: "御殿場",
    he: "פוג׳י",
    from: "2026-10-13",
    to: "2026-10-15",
    nights: 2,
    hotels: ["w-editseven"],
    line: "פה הכול גמיש. ההר מחליט בבוקר.",
    places: "אגמים · Izu · המעבר בשעת הזהב"
  },
  {
    id: "tokyo",
    name: "Tokyo",
    ja: "東京",
    he: "טוקיו",
    from: "2026-10-15",
    to: "2026-10-20",
    nights: 5,
    hotels: ["w-edmont"],
    line: "שכונות. אחת ליום.",
    places: "Yanaka · Nakameguro · Shimokitazawa · Kōenji"
  }
];

export const trip = {
  title: "יפן",
  year: 2026,
  from: "2026-10-04",
  to: "2026-10-20",
  nights: 16,
  /* Wheels-up from TLV. Israel is still on IDT (UTC+3) on 3 October. */
  departure: "2026-10-03T15:00:00+03:00",
  arrival: "2026-10-04T11:40:00+09:00",
  home: "2026-10-20T18:00:00+09:00"
};

export const byId = Object.fromEntries(destinations.map(d => [d.id, d]));

/* Areas are what saved places hang off: every base, plus places we only
   visit for a day. Osaka is a day out from Kyoto, not somewhere we sleep,
   so it is an area without being a destination. */
export const areas = [
  byId.kyoto,
  { id: "osaka", name: "Osaka", ja: "大阪", he: "אוסקה", daytrip: true },
  ...destinations.filter(d => d.id !== "kyoto")
];
export const areaById = Object.fromEntries(areas.map(a => [a.id, a]));
