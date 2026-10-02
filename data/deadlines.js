/* Things that expire.

   Most of the planning is flexible; this is the part that is not. Each entry
   is a date something must happen by, and what goes wrong if it does not.
   Ordered by date, which is the only order that matters here.

   `at` is the exact moment, for the ones that happen at a clock time: those
   also show on Today from a day and a half before until a few hours after.
   `when` says that moment in words, and `link` is where to go to act. */

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
    at: "2026-10-01T00:00:00+09:00",
    when: "Wed 30 Sep · 18:00 Israel time, midnight in Japan",
    title: "Hikiniku to Come: the free list for Thu 8 Oct opens",
    urgent: true,
    body: "First come, first served, and only the seats the ¥1,000 priority tickets left. Have TableCheck open a few minutes early with name, phone and email ready — the set meal, ¥1,980 each, is paid when you book.",
    also: "The lists for 4–6 Oct have already opened, so check those days too; 7 Oct is a Wednesday, when it is closed. Cancelling costs ¥500 a meal from 7 days before and the full price on the day. If only single seats show up, one Redditor booked two singles and was seated together. Same-day cancellations are posted on X, @hikinikutocomek.",
    link: { label: "Open the booking page", url: "https://www.tablecheck.com/en/shops/hikinikutocome-kyoto/reserve" }
  },
  {
    id: "dl-saihoji",
    on: "2026-10-01",
    title: "Saihō-ji, if we want it on the 5th",
    body: "Bookings for a day close at 23:59 Japan time the night before, but cancelling is free only until 4 days before. For the 5th, booking by today keeps a free way out.",
    also: "intosaihoji.com. Up to two people per booking, card only."
  }
];

/* Verifications that only make sense once we are there. */
export const inTrip = [
  { on: "2026-10-04", title: "The evening before Osaka: is Tokito open?", body: "It posts irregular closing days on its Instagram stories (@tokito_karahori). If it is shut, the Osaka day moves." },
  { on: "2026-10-05", title: "The evening before Kibune", body: "Check the forecast, and bus 33's October timetable from Kibune back to Kibuneguchi." },
  { on: "2026-10-07", title: "Evening: Hikiniku, line or not", body: "If we still want it and have no booking, being at Tatsumi-bashi by about 07:15 is what gives a real shot at a table. Same-day cancellations are posted on X at @hikinikutocomek." },
  { on: "2026-10-10", title: "Evening: pick the 11th", body: "Choose the day trip on the forecast, and confirm that evening's restaurant booking." },
  { on: "2026-10-12", title: "Evening: plan the 13th afternoon", body: "Cloud cover for the first Fuji loop. If Toyota Gotemba does not know yet, tell them we will be one to two hours late for the 14:30 swap: 0550-81-0100." },
  { on: "2026-10-13", title: "Evening: decide the 14th", body: "West Izu is an evening-before decision, not a morning one — it starts at 08:30 and is locked to a 17:16 sunset. Check HODOHODO is open on Instagram, Izu road closures on 0558-76-5718, and the west-coast forecast. In fog there is no point going up to the pass: switch to Shuzenji or Hakone.", urgent: true },
  { on: "2026-10-14", title: "Evening: the last Fuji morning", body: "Cloud cover for the 15th, and arrange takkyubin to Tokyo if we are sending bags ahead." }
];
