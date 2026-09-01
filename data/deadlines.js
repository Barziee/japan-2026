/* Things that expire.

   Most of the planning is flexible; this is the part that is not. Each entry
   is a date something must happen by, and what goes wrong if it does not.
   Ordered by date, which is the only order that matters here. */

export const deadlines = [
  {
    id: "dl-hikiniku",
    on: "2026-09-01",
    title: "Book Hikiniku to Come for 8 Oct",
    urgent: true,
    body: "October seats open at midnight Japan time on 1 Sep, on the first-of-the-month-for-next-month rule. Miss it and the only way in is queueing from 07:00, which collides with Hōnen-in at 07:30. Tel 075-708-2529, or TableCheck about a week ahead. Reports say a Japanese phone number may be required — check both routes.",
    also: "While you are there, check its closing day. English sources say Wednesday, which would mean 7 Oct is shut and the 8th is our only shot. It is also card or QR only, no cash."
  },
  {
    id: "dl-t-first",
    on: "2026-09-01",
    title: "Try T · Nakameguro for 19 Oct",
    body: "October is not bookable yet and we do not know their rule. Either the 1st-for-next-month model, same as Hikiniku, or a rolling month ahead. Try today, and if it is shut, come back on 19 Sep.",
    also: "Confirm they open on a Monday — 19 Oct is one, and a lot of Tokyo closes then. If not, move T to the 18th and leave the 19th for Kagurazaka near the hotel."
  },
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
    id: "dl-t-second",
    on: "2026-09-19",
    title: "Second attempt at T · Nakameguro",
    body: "If 1 Sep was too early, this is the rolling-month date."
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
    body: "Foliage forecast for Matsumoto and the Alps (JMA or tenki.jp). Whether the Utsukushigahara Skyline and the mountain roads are open. Typhoons. Visit Japan Web for both of us.",
    also: "And verify Hinode Udon's hours and closing days, and Eikandō's opening time and price. The whole of 8 Oct is built on those two."
  }
];

/* Verifications that only make sense once we are there. */
export const inTrip = [
  { on: "2026-10-06", title: "Evening: confirm the Kibune plan", body: "Check the forecast for the 7th. Confirm bus 33's weekday October timetable, that the Demachiyanagi lockers are realistic, and that somewhere in Kibune will feed us on a Wednesday." },
  { on: "2026-10-10", title: "Evening: pick the 11th", body: "Choose the day trip on the forecast, and confirm that evening's restaurant booking." },
  { on: "2026-10-12", title: "Evening: plan the 13th afternoon", body: "Cloud cover for the first Fuji loop." },
  { on: "2026-10-13", title: "Evening: decide the 14th", body: "West Izu is an evening-before decision, not a morning one — it starts at 08:30 and is locked to a 17:16 sunset. Check HODOHODO is open on Instagram, Izu road closures on 0558-76-5718, and the west-coast forecast. In fog there is no point going up to the pass: switch to Shuzenji or Hakone.", urgent: true },
  { on: "2026-10-14", title: "Evening: the last Fuji morning", body: "Cloud cover for the 15th, and arrange takkyubin to Tokyo if we are sending bags ahead." }
];
