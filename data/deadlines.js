/* Things that expire.

   Most of the planning is flexible; this is the part that is not. Each entry
   is a date something must happen by, and what goes wrong if it does not.
   Ordered by date, which is the only order that matters here. */

export const deadlines = [
  {
    id: "dl-matsumoto",
    on: "2026-09-10",
    title: "Book all three Matsumoto dinners",
    urgent: true,
    body: "The booking window for 10–12 Oct opens around 10–12 Sep. Sit down around the 8th and close all three. This is a holiday weekend plus the soba festival, so waiting means eating wherever has space.",
    also: "Easiest route is Matsumoto Jujo itself — it is a ryokan and the staff routinely book places that take no online reservations. Email them in advance with all three evenings."
  },
  {
    id: "dl-jujo",
    on: "2026-09-18",
    title: "Last day to cancel Matsumoto Jujo free",
    urgent: true,
    body: "¥207,900. From 19 Sep it is 10%, from 4 Oct 30%, from 7 Oct 50%, from 9 Oct the lot.",
    also: "Worth knowing: a real forecast for 10 Oct only appears around 24 Sep, so this deadline passes before the weather can tell you anything. Matsumoto is a fixed base rather than an open question, but if a change was ever going to be considered, the 18th is the day."
  },
  {
    id: "dl-admin",
    on: "2026-09-25",
    title: "Insurance, eSIM, offline maps",
    body: "Travel insurance covering delays and driving. eSIM. Offline maps for Kansai, Kiso and Nagano, Fuji and Tokyo. Look up the mapcodes for Gujō, Matsumoto and Gotemba while you are at it."
  },
  {
    id: "dl-final",
    on: "2026-09-28",
    title: "The week-before checks",
    body: "Foliage forecast for Matsumoto and the Alps (JMA or tenki.jp). Whether the Utsukushigahara Skyline and the mountain roads are open. Typhoons."
  },
  {
    id: "dl-hikiniku-online",
    on: "2026-09-30",
    title: "Hikiniku: the last online chances for 8 Oct",
    urgent: true,
    body: "Until today, priority-ticket holders can cancel for free, so seats can reappear on TableCheck. Worth a look every day or two until then. Tonight at 18:00 Israel time (midnight in Japan), the free standard list for 8 Oct opens, first come first served. If the ¥1,000 priority tickets took every seat, nothing is released.",
    also: "If only single seats show up, one Redditor booked two singles and was seated together."
  }
];

/* Verifications that only make sense once we are there. */
export const inTrip = [
  { on: "2026-10-04", title: "Evening: is Tokito open tomorrow?", body: "It posts irregular closing days on its Instagram stories (@tokito_karahori). If it is shut, start 5 Oct at the castle instead." },
  { on: "2026-10-06", title: "Evening: confirm the Kibune plan", body: "Check the forecast for the 7th. Confirm bus 33's weekday October timetable, that the Demachiyanagi lockers are realistic, and that somewhere in Kibune will feed us on a Wednesday." },
  { on: "2026-10-07", title: "Evening: Hikiniku, line or not", body: "If there is still no booking, decide tonight whether to queue at Tatsumi-bashi tomorrow. Being there by about 07:15 is what gives a real shot at dinner, and it pushes Hōnen-in later. Same-day cancellations are posted on X at @hikinikutocomek." },
  { on: "2026-10-10", title: "Evening: pick the 11th", body: "Choose the day trip on the forecast, and confirm that evening's restaurant booking." },
  { on: "2026-10-12", title: "Evening: plan the 13th afternoon", body: "Cloud cover for the first Fuji loop. If Toyota Gotemba does not know yet, tell them we will be one to two hours late for the 14:30 swap: 0550-81-0100." },
  { on: "2026-10-13", title: "Evening: decide the 14th", body: "West Izu is an evening-before decision, not a morning one — it starts at 08:30 and is locked to a 17:16 sunset. Check HODOHODO is open on Instagram, Izu road closures on 0558-76-5718, and the west-coast forecast. In fog there is no point going up to the pass: switch to Shuzenji or Hakone.", urgent: true },
  { on: "2026-10-14", title: "Evening: the last Fuji morning", body: "Cloud cover for the 15th, and arrange takkyubin to Tokyo if we are sending bags ahead." }
];
