/* Things you might need to pull up while standing at a counter.
   `ref` is deliberately null where we genuinely do not have the confirmation
   number — the item view hides the field rather than showing a blank label.
   Fill these in as the confirmation emails arrive. */

export const wallet = [
  /* ---------- stays ---------- */
  {
    id: "w-meander",
    kind: "stay",
    title: "Meander Osaka",
    where: "Namba, Osaka",
    from: "2026-10-04",
    to: "2026-10-07",
    detail: "3 nights",
    ref: null,
    status: "confirmed",
    notes: [
      "Booked 4–8 originally; the request to shorten to 4–7 still needs confirming.",
      "Big suitcases get forwarded from here to MIRU Kyoto Gion on 5–6 Oct."
    ]
  },
  {
    id: "w-miru",
    kind: "stay",
    title: "MIRU Kyoto Gion",
    where: "Gion, Kyoto",
    from: "2026-10-07",
    to: "2026-10-09",
    detail: "2 nights · check-in from 15:00",
    ref: null,
    status: "confirmed",
    alert: "MIRU refused to link the two bookings. Check out and back in on the morning of 8 Oct.",
    notes: [
      "Two separate bookings: 7–8 Deluxe, 8–9 Superior. They will not merge them and will not hold the same room.",
      "They will move the luggage for us, but we check out and re-check in on the morning of 8 Oct — so pack on the evening of the 7th, not on the way out of the door.",
      "This is what sets the departure time for Hōnen-in at 07:30.",
      "They are receiving our forwarded suitcases — but confirm it before anything is sent. They already said no once."
    ]
  },
  {
    id: "w-fairfield",
    kind: "stay",
    title: "Fairfield by Marriott Gifu Gujō",
    where: "Gujō-Yamato",
    from: "2026-10-09",
    to: "2026-10-10",
    detail: "1 night",
    ref: null,
    status: "confirmed",
    notes: ["About 15–20 minutes from the old town, so the afternoon happens in town and we come back out to sleep."]
  },
  {
    id: "w-jujo",
    kind: "stay",
    title: "Matsumoto Jujo",
    where: "Matsumoto",
    from: "2026-10-10",
    to: "2026-10-13",
    detail: "3 nights · open-air bath",
    ref: null,
    status: "confirmed",
    price: "¥207,900",
    alert: "Cancellation is only free until 18 Sep.",
    notes: [
      "Cancellation ladder from the hotel (15 Aug): from 19 Sep — 10% (¥20,790). From 4 Oct — 30% (¥62,370). From 7 Oct — 50% (¥103,950). From 9 Oct — 100% (¥207,900).",
      "The no-show percentage was not stated in what they sent. Probably 100%, but do not assume it.",
      "The most expensive stay of the trip."
    ]
  },
  {
    id: "w-editseven",
    kind: "stay",
    title: "edit×seven Fuji Gotemba",
    where: "Gotemba",
    from: "2026-10-13",
    to: "2026-10-15",
    detail: "2 nights",
    ref: null,
    status: "confirmed",
    notes: ["Suitcases stay here on 14 Oct — the GR Yaris boot is small."]
  },
  {
    id: "w-edmont",
    kind: "stay",
    title: "Hotel Metropolitan Edmont",
    where: "Iidabashi, Tokyo",
    from: "2026-10-15",
    to: "2026-10-20",
    detail: "5 nights",
    ref: null,
    status: "confirmed",
    notes: []
  },

  /* ---------- cars ---------- */
  {
    id: "w-corolla",
    kind: "car",
    title: "Corolla Sport Hybrid",
    where: "Toyota Rent a Car · Sanjo Keihan-Kita, Kyoto",
    from: "2026-10-09T09:30:00+09:00",
    to: "2026-10-13T14:30:00+09:00",
    detail: "Pick up Kyoto 09:30 · drop Gotemba 14:30",
    ref: null,
    status: "confirmed",
    notes: [
      "Includes NOC and the collision waiver.",
      "Kyoto → Gujō direct is 180.4 km / 2:40. Going via Seki is 185.3 km / 2:44 — the knife stop costs 4.9 km and five minutes of driving.",
      "Check the ETC card is in the car before leaving the counter."
    ]
  },
  {
    id: "w-yaris",
    kind: "car",
    title: "GR Yaris",
    where: "Gotemba",
    from: "2026-10-13T14:30:00+09:00",
    to: "2026-10-15T14:30:00+09:00",
    detail: "Gotemba return trip · two days",
    ref: null,
    status: "confirmed",
    notes: [
      "Swap happens in one visit: bags to edit×seven first, then Corolla back, then Yaris out.",
      "Small boot. Luggage stays at the hotel.",
      "Takes high-octane fuel — fill before returning it."
    ]
  },
  {
    id: "w-etc",
    kind: "car",
    title: "ETC toll card",
    where: "With both rentals",
    detail: "Confirm it ships with each car",
    ref: null,
    status: "todo",
    notes: ["Without it every expressway exit is a cash queue."]
  },

  /* ---------- flights ---------- */
  {
    id: "w-out",
    kind: "flight",
    title: "TLV → KIX",
    where: "Ben Gurion",
    from: "2026-10-03T15:00:00+03:00",
    to: "2026-10-04T11:40:00+09:00",
    detail: "Departs 3 Oct 15:00 · lands KIX 4 Oct 11:40",
    ref: null,
    status: "confirmed",
    notes: ["Etihad. Flight numbers and seat details still need adding here."]
  },
  {
    id: "w-home",
    kind: "flight",
    title: "NRT → TLV",
    where: "Narita",
    from: "2026-10-20T18:00:00+09:00",
    detail: "Departs 20 Oct 18:00 · leave Tokyo around 14:30",
    ref: null,
    status: "confirmed",
    notes: [
      "Knives travel in checked baggage, never carry-on.",
      "Flight numbers still need adding here."
    ]
  },

  /* ---------- logistics ---------- */
  {
    id: "w-luggage",
    kind: "transport",
    title: "Luggage forwarding",
    where: "Meander Osaka → MIRU Kyoto Gion",
    from: "2026-10-05",
    to: "2026-10-07",
    detail: "Takkyubin · send 5–6 Oct",
    ref: null,
    status: "todo",
    notes: [
      "Osaka to Kyoto is a next-day service, not same-day. Send on the 6th to arrive on the 7th; send on the 5th if we want a margin, but then MIRU hold it an extra night and that needs confirming too.",
      "Roughly ¥1,500–2,000 per suitcase, from a convenience store or the Meander desk.",
      "Confirm MIRU will receive and store it before sending anything.",
      "On 7 Oct we travel with cabin trolleys only — they go in a coin locker at Demachiyanagi."
    ]
  }
];

export const walletById = Object.fromEntries(wallet.map(w => [w.id, w]));
