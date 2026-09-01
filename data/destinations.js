/* Where we sleep, in order. Everything else hangs off these ids.
   Dates are the nights, not the days present — Osaka 4-7 means three nights
   with the 7th spent travelling on to Kyoto. */

export const destinations = [
  {
    id: "osaka",
    name: "Osaka",
    ja: "大阪",
    from: "2026-10-04",
    to: "2026-10-07",
    nights: 3,
    hotel: "w-meander",
    line: "Food, atmosphere, one day trip out.",
    places: "Namba · Minoh · Nakazakichō"
  },
  {
    id: "kyoto",
    name: "Kyoto",
    ja: "京都",
    from: "2026-10-07",
    to: "2026-10-09",
    nights: 2,
    hotel: "w-miru",
    line: "Gion in the quiet hours. Not a temple hunt.",
    places: "Kibune · Kurama · Gion"
  },
  {
    id: "gujo",
    name: "Gujō Hachiman",
    ja: "郡上八幡",
    from: "2026-10-09",
    to: "2026-10-10",
    nights: 1,
    hotel: "w-fairfield",
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
    hotel: "w-jujo",
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
    hotel: "w-editseven",
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
    hotel: "w-edmont",
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
