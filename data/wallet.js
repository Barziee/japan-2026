/* Things you might need to pull up while standing at a counter.
   `ref` is deliberately null where we genuinely do not have the confirmation
   number — the item view hides the field rather than showing a blank label.
   Fill these in as the confirmation emails arrive. */

export const wallet = [
  /* ---------- stays ---------- */
  {
    id: "w-potel",
    kind: "stay",
    title: "Umekoji Potel Kyoto",
    where: "Umekōji, Kyoto",
    from: "2026-10-04",
    to: "2026-10-07",
    detail: "3 nights · Garden Room, double bed · check-in from 15:00",
    ref: null, refPrivate: true,
    status: "confirmed",
    price: "Prepaid online. The local accommodation tax is paid at the hotel.",
    notes: [
      "15 Kankijichō, Shimogyō-ku, beside Umekōji Park. Kyoto Station is 19 minutes on foot (1.4 km); Umekōji-Kyōtonishi, one stop from Kyoto on the JR Sagano line, is closer.",
      "Check-in 15:00 to midnight — there is no after-hours check-in. Check-out by 11:00.",
      "No breakfast in the rate. The buffet is about ¥4,500 each if we want it.",
      "Passports at check-in: Japanese law has hotels record and copy them for every foreign guest."
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
      "From Umekoji Potel on the 7th, Gion is across town: a taxi with the suitcases is the simple way."
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
    notes: ["Free parking, about 50 spaces: a lot by the entrance and a multi-storey across the street."]
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
    notes: ["Five minutes on foot from JR Iidabashi's east exit, two from Tokyo Metro exit A5."]
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
    ref: null, refPrivate: true,
    status: "confirmed",
    notes: [
      "Includes NOC and the collision waiver.",
      "The 13 Oct return is booked for 14:30 and the western-lakes route reaches Gotemba around 16:15. Tell the Gotemba shop (0550-81-0100) we will be one to two hours late — the Yaris pickup is the same appointment.",
      "Check the ETC card is in the car before leaving the counter.",
      "Bring the 2026 IDP, the Israeli licence and the passport to the counter."
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
    ref: null, refPrivate: true,
    status: "confirmed",
    notes: [
      "Swap happens in one visit: Corolla back, Yaris out.",
      "Small boot, but the suitcases fit using the back seats.",
      "Takes high-octane fuel — fill before returning it.", "Returning around 12:00 on 15 Oct, ahead of the 14:30 booking, for the 12:48 train.",
      "Pickup is booked for 14:30 on 13 Oct and we arrive around 16:15 — the same call to the Gotemba shop (0550-81-0100) covers it.", "Bring the IDP, the Israeli licence and the passport to this pickup too.",
      "Parking at edit×seven is free."
    ]
  },
  {
    id: "w-etc",
    kind: "car",
    title: "ETC toll card",
    where: "With both rentals",
    detail: "Booked with both rentals",
    ref: null,
    status: "confirmed",
    notes: ["Listed as an option on both Toyota confirmations.", "Check it is in the car before leaving the counter — without it every expressway exit is a cash queue."]
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
    notes: ["Etihad. Flight numbers and seats are in the booking email, kept off this public site."]
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
      "Flight numbers are in the booking email, kept off this public site."
    ]
  },

  /* ---------- logistics ---------- */
  {
    id: "w-romancecar", kind: "train", title: "Romancecar · Gotemba → Shinjuku",
    where: "Gotemba Station",
    from: "2026-10-15T12:48:00+09:00", to: "2026-10-15T14:25:00+09:00",
    detail: "Mt. Fuji 4 · 12:48 → 14:25 · car 5, seats 6C and 6D",
    ref: null, refPrivate: true, status: "confirmed",
    price: "¥3,120 for two — the limited-express charge only",
    notes: [
      "Ticketless: the purchase on the phone is the limited-express ticket.",
      "Still needed: two paper basic-fare tickets, Gotemba to Odakyu Shinjuku, ¥1,310 each, from the JR ticket office or machine at Gotemba. IC cards do not work across the JR–Odakyu boundary.",
      "This train has no luggage area. Suitcases go on the overhead racks, or on the floor in front of the seat if the row ahead does not recline.",
      "Odakyu Sightseeing Service Center: +81-3-5909-0211, 8:00–16:00."
    ]
  },
  {
    id: "w-ichika", kind: "meal", title: "Ibushi-dori Ichika · Kyoto",
    where: "京都府京都市中京区山本町410",
    from: "2026-10-07",
    detail: "Time to confirm · 2 guests · seats only",
    ref: null, refPrivate: true, status: "confirmed",
    price: "Seats only — we order on the night; no table charge",
    notes: [
      "Tel 075-606-4364.",
      "Four minutes from Kyoto Shiyakusho-mae station on the Tōzai line.",
      "For Noa: everything is chicken and nothing on the menu is listed as pork. The two to ask about are the wontons and the omelette with ground-meat sauce, which do not say what the meat is."
    ]
  },
  {
    id: "w-hafuu", kind: "meal", title: "Niku Senka Hafuu · Kyoto",
    where: "京都府京都市中京区麩屋町通夷川上ル笹屋町471-1",
    from: "2026-10-08T19:30:00+09:00",
    detail: "19:30 · 2 guests · main branch",
    ref: null, refPrivate: true, status: "confirmed",
    notes: [
      "Tel 075-257-1581.",
      "The main branch on Fuyachō-dōri, south of the Imperial Palace — not the Shōgoin branch.",
      "For Noa: a beef specialist, but the menu has not been checked for pork. Ask before ordering."
    ]
  },
  {
    id: "w-daikokuya", kind: "meal", title: "Daikokuya · Gujō",
    where: "258-1 Tsurugi, Yamato-cho, Gujo, Gifu",
    from: "2026-10-09T20:00:00+09:00",
    detail: "20:00 · 2 guests · tatami room · waiting to be accepted",
    ref: null, refPrivate: true, status: "requested",
    price: "Seats only — we order on the night",
    notes: [
      "Tel 0575-88-2277.",
      "A request, not yet a booking: the booking page still has to show it as accepted.",
      "A seven-minute walk from the Fairfield, about 500 m, so the car stays at the hotel.",
      "For Noa: a yakiniku menu that has not been checked for pork. Ask before ordering."
    ]
  },
  {
    id: "w-minato", kind: "meal", title: "MINATO · Matsumoto",
    where: "長野県松本市中央2-5-28",
    from: "2026-10-10T20:00:00+09:00",
    detail: "20:00 · 2 guests · 2-hour table",
    ref: null, refPrivate: true, status: "confirmed",
    price: "Seats only — we order on the night",
    notes: [
      "Tel 0263-32-2939.",
      "Booked through Hot Pepper. Changes and cancellations go through its My Page until midnight at the start of 10 Oct; after that, phone the restaurant.",
      "For Noa: skip the pork ginger steak and the tonpeiyaki, and ask about the okonomiyaki. The chicken, beef and seafood are fine."
    ]
  },
  {
    id: "w-pizzamatsuri", kind: "meal", title: "PIZZA MATSURI · Matsumoto",
    where: "長野県松本市中央1-5-2",
    from: "2026-10-11T20:00:00+09:00",
    detail: "20:00 · 2 guests",
    ref: null, refPrivate: true, status: "confirmed",
    price: "We order on the night",
    notes: [
      "Tel 0263-50-7363 — changes and cancellations are by phone.",
      "Two minutes from Matsumoto Station's castle exit. Last orders 21:30.",
      "For Noa: the margherita is safe and the prosciutto pizza is not. Ask about the others."
    ]
  },
  {
    id: "w-t", kind: "meal", title: "T · Nakameguro",
    where: "東京都目黒区上目黒2-37-12 コンフォート中目黒 1F",
    from: "2026-10-19T20:30:00+09:00",
    detail: "20:30 · 2 guests · 2 h 30 min table",
    ref: null, refPrivate: true, status: "confirmed",
    price: "T Genesis course · ¥23,000 per person, tax included",
    notes: [
      "Tel 03-6303-0849.",
      "It is a set course, so it is worth telling them one guest does not eat pork."
    ]
  }
];

export const walletById = Object.fromEntries(wallet.map(w => [w.id, w]));
