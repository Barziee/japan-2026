/* Where we sleep, in order. Everything else hangs off these ids.
   Dates are the nights, not the days present — Kyoto 4-9 means five nights
   with the 9th spent driving on to Gujō. */

export const destinations = [
  {
    id: "kyoto",
    name: "Kyoto",
    ja: "京都",
    from: "2026-10-04",
    to: "2026-10-09",
    nights: 5,
    hotels: ["w-potel", "w-miru"],
    line: "Five nights, two hotels, and nothing we have to do. Osaka is a day out.",
    places: "Umekōji · Gion · Osaka for a day"
  },
  {
    id: "gujo",
    name: "Gujō Hachiman",
    ja: "郡上八幡",
    from: "2026-10-09",
    to: "2026-10-10",
    nights: 1,
    hotels: ["w-fairfield"],
    line: "A town with character, not a waypoint.",
    places: "Old town · canals · a slow afternoon"
  },
  {
    id: "matsumoto",
    name: "Matsumoto",
    ja: "松本",
    from: "2026-10-10",
    to: "2026-10-13",
    nights: 3,
    hotels: ["w-jujo"],
    line: "A flexible base for the city and the mountains.",
    places: "Castle · Nakamachi · the Alps"
  },
  {
    id: "fuji",
    name: "Fuji · Gotemba",
    ja: "御殿場",
    from: "2026-10-13",
    to: "2026-10-15",
    nights: 2,
    hotels: ["w-editseven"],
    line: "Modular. The mountain decides in the morning.",
    places: "Lakes · Izu · the pass at golden hour"
  },
  {
    id: "tokyo",
    name: "Tokyo",
    ja: "東京",
    from: "2026-10-15",
    to: "2026-10-20",
    nights: 5,
    hotels: ["w-edmont"],
    line: "Neighbourhoods, one per day.",
    places: "Yanaka · Nakameguro · Shimokitazawa · Kōenji"
  }
];

export const trip = {
  title: "Japan",
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
  { id: "osaka", name: "Osaka", ja: "大阪", daytrip: true },
  ...destinations.filter(d => d.id !== "kyoto")
];
export const areaById = Object.fromEntries(areas.map(a => [a.id, a]));
