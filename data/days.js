/* One entry per date.

   Time is deliberately loose. `t` is either an exact clock time, an
   approximate one, or a part of the day — research that said "morning" stays
   "morning" and is never quietly promoted to 09:00. There is no completion
   state anywhere: the schedule is guidance, and the app never asks to be
   ticked off.

     { k: "exact",  v: "09:30" }   09:30
     { k: "approx", v: "10:45" }   ~10:45
     { k: "part",   v: "morning" } Morning
     { k: "seq" }                  no time, just order

   `route` is the shape of the day as a strip: the first node is where it
   starts, and every node after carries how we got there.
   `saved` points at places.js. `logistics` points at wallet.js. */

export const days = [
  {
    id: "d04", date: "2026-10-04", dow: "Sun", dest: "kyoto",
    title: "Landing, and an easy first evening",
    route: [
      { name: "KIX" },
      { name: "Kyoto", via: "JR Haruka", mode: "train" },
      { name: "Umekōji", via: "On foot · 19 min", mode: "walk" }
    ],
    plan: [
      { t: { k: "exact", v: "11:40" }, name: "Land at KIX", detail: "Immigration and bags, then the train to Kyoto.", place: "Kansai International Airport", wallet: "w-out" },
      { t: { k: "seq" }, name: "Haruka to Kyoto", detail: "The JR limited express runs from the airport straight to Kyoto Station. The hotel is 19 minutes on foot from there, or one stop on the JR Sagano line to Umekōji-Kyōtonishi.", place: "Kyoto Station" },
      { t: { k: "exact", v: "15:00" }, name: "Umekoji Potel", detail: "Check-in opens at 15:00. Three nights here, then Gion.", wallet: "w-potel" }
    ],
    ideas: [
      { title: "Stay close", body: "Kissa Wakayama for coffee and Issekisancho for yakiniku are both a few minutes' walk from the hotel.", saved: ["p-wakayama", "p-issekisancho"] },
      { title: "Or go downtown", body: "Bus 207 reaches Shijō in about 25 minutes: Nishiki and Teramachi for a first wander, then an izakaya — Onikai or 365 Sakaba, or Julia for wagyu.", saved: ["p-onikai", "p-365", "p-julia"] }
    ],
    logistics: ["w-out", "w-potel"],
    saved: ["p-wakayama", "p-issekisancho", "p-onikai", "p-365", "p-julia"]
  },

  {
    id: "d05", date: "2026-10-05", dow: "Mon", dest: "kyoto",
    title: "A free day in Kyoto",
    flexible: true, bank: "kyoto",
    plan: [],
    ideas: [
      { title: "The plan for now: Osaka", body: "The Osaka day below, with shopping added: a camera lens, clothes, and eating well along the way.", saved: ["p-tokito", "p-maren"] },
      { title: "It is a Monday", body: "Pizzeria da Ciro is closed on Mondays." }
    ],
    logistics: ["w-potel"],
    saved: ["p-tokito", "p-maren", "p-yatt", "p-grenier"]
  },

  {
    id: "d06", date: "2026-10-06", dow: "Tue", dest: "kyoto",
    title: "A free day in Kyoto",
    flexible: true, bank: "kyoto",
    plan: [],
    ideas: [
      { title: "The plan for now: Kurama and Kibune", body: "The mountain walk below, if the day is dry. If the path is wet, the train to Kibuneguchi and bus 33 reach the village without the climb.", saved: ["p-kuramadera", "p-kifune"] },
      { title: "Evening: Gion, then an izakaya", body: "Back in town, Gion's lanes, then over the river to Kiyamachi and Kawaramachi.", saved: ["p-onikai", "p-julia", "p-365"] }
    ],
    logistics: ["w-potel"],
    saved: ["p-kuramadera", "p-kifune", "p-onikai", "p-julia", "p-365"]
  },

  {
    id: "d07", date: "2026-10-07", dow: "Wed", dest: "kyoto",
    title: "Across town to Gion",
    flexible: true, bank: "kyoto",
    plan: [
      { t: { k: "part", v: "morning" }, name: "Check out of Umekoji Potel", detail: "By 11:00. Gion is across town, and a taxi with the suitcases is the simple way.", wallet: "w-potel" },
      { t: { k: "exact", v: "15:00" }, name: "MIRU Kyoto Gion", detail: "Check-in opens at 15:00. Two nights, on two separate bookings.", wallet: "w-miru" },
      { t: { k: "part", v: "evening" }, name: "Dinner · Ibushi-dori Ichika", detail: "Booked — time to confirm. Smoked-chicken yakitori in a machiya near Kyoto City Hall. All chicken — for Noa, just ask about the wontons and the ground-meat omelette.", saved: "p-ichika" }
    ],
    ideas: [
      { title: "A day that fits around the move", body: "Packing in the morning and Gion in the afternoon, so something close suits today better than the mountain walk. Hikiniku to Come is closed on Wednesdays." }
    ],
    logistics: ["w-potel", "w-miru", "w-ichika"],
    saved: ["p-ichika", "p-2050", "p-panel", "p-alchemist", "p-ing"]
  },

  {
    id: "d08", date: "2026-10-08", dow: "Thu", dest: "kyoto",
    title: "The last Kyoto day",
    flexible: true, bank: "kyoto",
    plan: [
      { t: { k: "part", v: "morning" }, name: "Check out of MIRU and back in", detail: "They would not link the two bookings. Pack the night before; they move the luggage.", wallet: "w-miru" },
      { t: { k: "exact", v: "19:30" }, name: "Dinner · Niku Senka Hafuu", detail: "Booked for two at the main branch, south of the Imperial Palace. A beef specialist: steak and the beef cutlet. The menu has not been checked for pork yet, so ask before Noa orders.", saved: "p-hafuu", wallet: "w-hafuu" }
    ],
    logistics: ["w-miru", "w-hafuu"],
    saved: ["p-hafuu", "p-bigoli", "p-hikiniku", "p-brulee", "p-uru", "p-panel"]
  },

  {
    id: "d09", date: "2026-10-09", dow: "Fri", dest: "gujo",
    title: "Ōhara, Lake Biwa, then Gujō",
    route: [
      { name: "Kyoto" },
      { name: "Ōhara", via: "Up the valley · ~30 min", mode: "car" },
      { name: "Biwako Ōhashi", via: "Down to the lake · ~30 min", mode: "car" },
      { name: "Ōmi-Hachiman", via: "Over the bridge · ~25 min", mode: "car" },
      { name: "Gujō Hachiman", via: "~2h15", mode: "car" },
      { name: "Gujō-Yamato", via: "~15 min", mode: "car" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Short Kyoto morning", detail: "Coffee, pack, check out. The driving day starts properly at the rental counter." },
      { t: { k: "exact", v: "09:00" }, name: "Pick up the Corolla", detail: "Toyota Rent a Car, Sanjo Keihan-Kita — 11-2 Magohashichō, Sakyō-ku. Paperwork, ETC check and loading means we are realistically rolling about 09:45.", wallet: "w-corolla" },
      { t: { k: "approx", v: "10:15" }, name: "Ōhara · Sanzen-in", detail: "The country end of Kyoto, half an hour up the valley. Sanzen-in is 9:00–17:00, ¥700, and has no car park of its own — use one of the paid lots in the village.", place: "Sanzen-in Ohara Kyoto" },
      { t: { k: "seq" }, name: "Across the Biwako Ōhashi", detail: "Half an hour down to the lake, then over the bridge to the east shore. ¥150 toll, ¥120 on the ETC card.", place: "Biwako Ohashi Bridge" },
      { t: { k: "part", v: "midday" }, name: "Lunch · La Collina Ōmi-Hachiman", detail: "Taneya's sweets village under the grass roof. The food court runs 10:00–17:00 and the bakery opens at 11:00 until it sells out. 650 parking spaces.", saved: "p-lacollina" },
      { t: { k: "seq" }, name: "Coffee on the Hachiman-bori", detail: "Four minutes on, the old merchant canal. Ninosuke Coffee, just off it in an old townhouse, is 10:00–18:00 and closed Tuesdays; Hori Café sits right on the water, 11:30–15:00.", saved: "p-ninosuke" },
      { t: { k: "approx", v: "16:30" }, name: "Gujō Hachiman", detail: "About 2h15 from Ōmi-Hachiman on the expressways, arriving with about an hour of daylight — sunset is 17:26. The water lanes while it is light; dinner is back out by the hotel.", saved: "p-igawa" },
      { t: { k: "seq" }, name: "Fairfield, Gujō-Yamato", detail: "About fifteen minutes north of the old town. Check in and leave the car.", wallet: "w-fairfield" },
      { t: { k: "exact", v: "20:00" }, name: "Dinner · Daikokuya", detail: "Booked for two in a tatami room. Hida beef yakiniku with an English tablet menu, a seven-minute walk from the Fairfield. The menu has not been checked for pork yet, so ask before Noa orders.", saved: "p-daikokuya", wallet: "w-daikokuya" }
    ],
    alts: [
      { title: "The west shore instead", when: "If we want the water rather than the towns", body: "Ukimido at Katata, the temple hall standing in the lake (¥300), then Shirahige Shrine's torii in the water. Photograph it from the viewing deck in front of the shrine office and never cross Route 161 for it — someone was killed doing that in 2021. About the same amount of driving." },
      { title: "Straight to Gujō", when: "If it rains, or we are tired", body: "Kyoto to Gujō Hachiman direct is about 180 km and 2h40, which leaves the whole afternoon in town." }
    ],
    logistics: ["w-corolla", "w-fairfield", "w-daikokuya"],
    saved: ["p-lacollina", "p-hachimanbori", "p-ninosuke", "p-daikokuya", "p-gonza", "p-igawa"]
  },

  {
    id: "d10", date: "2026-10-10", dow: "Sat", dest: "matsumoto",
    title: "A Gujō morning, Seki, then Matsumoto",
    route: [
      { name: "Gujō-Yamato" },
      { name: "Gujō Hachiman", via: "~15 min", mode: "car" },
      { name: "Seki", via: "~35 min", mode: "car" },
      { name: "Matsumoto", via: "Chūō Expressway · ~2h55", mode: "car" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Check out, into Gujō Hachiman", detail: "Fifteen minutes down from the hotel.", wallet: "w-fairfield" },
      { t: { k: "part", v: "morning" }, name: "Gujō Hachiman on foot", detail: "Canals, the water lanes, the streets above the river. We have been here before, so there is no list — coffee and drifting is the point.", saved: "p-igawa" },
      { t: { k: "part", v: "midday" }, name: "Lunch and coffee", detail: "Keichan at the Old Town Hall canteen, or hōba miso at Izumizaka, both in the middle of town.", saved: "p-gujoshokudo" },
      { t: { k: "approx", v: "13:05" }, name: "Gifu-Seki Cutlery Hall", detail: "Thirty-five minutes south, leaving Gujō around 12:30. The knife stop — 45–60 minutes to browse and probably buy. It is open until 17:00, so there is no clock on it today.", saved: "p-sekihall" },
      { t: { k: "approx", v: "14:05" }, name: "Up the Chūō Expressway to Matsumoto", detail: "About 2h55 via Tajimi, Nakatsugawa, Iida and Ina — Google's fastest route, and far from Takayama and its festival. A service-area stop halfway breaks it up." },
      { t: { k: "approx", v: "17:15" }, name: "Matsumoto Jujo", detail: "Check in, shower, breathe.", wallet: "w-jujo" },
      { t: { k: "exact", v: "20:00" }, name: "Dinner · MINATO", detail: "Booked, two-hour table. A teppan bar near Matsumoto station, about twenty minutes from Jujo by taxi — leave the car, we will be drinking. For Noa, skip the pork ginger steak and the tonpeiyaki.", saved: "p-minato" }
    ],
    alts: [
      { title: "Narai-juku on the way", when: "Only if Gujō runs short", body: "It is off the expressway now. Google puts the day at 4h04 of driving with it against 3h29 without, and Narai at around 16:40 would mean the last hour in the dark." }
    ],
    logistics: ["w-corolla", "w-fairfield", "w-jujo", "w-minato"],
    saved: ["p-sekihall", "p-igawa", "p-gujoshokudo", "p-izumizaka", "p-minato", "p-narai", "p-nakamachi"]
  },

  {
    id: "d11", date: "2026-10-11", dow: "Sun", dest: "matsumoto",
    title: "The big nature day",
    flexible: true,
    lead: {
      name: "Kamikōchi",
      detail: "Park at Sawando, shuttle in, then Taishō-ike to Kappa-bashi. Colour peaks around mid-October and we are right in the window.",
      place: "Kamikochi Kappa Bridge"
    },
    plan: [
      { t: { k: "part", v: "morning" }, name: "Sawando car park", detail: "Private cars cannot go in. The shuttle is turn-up-and-board.", place: "Sawando parking Kamikochi" },
      { t: { k: "seq" }, name: "Taishō-ike → Kappa-bashi", detail: "The valley floor walk, flat and slow." },
      { t: { k: "exact", v: "20:00" }, name: "Dinner · PIZZA MATSURI", detail: "Booked. Neapolitan pizza two minutes from Matsumoto station — a taxi from Jujo, about twenty minutes. For Noa, the margherita is safe and the prosciutto one is not.", saved: "p-pizzamatsuri" }
    ],
    alts: [
      { title: "Atera Gorge", when: "If we feel adventurous · ~1h40 each way", body: "Emerald pools over white granite in the Kiso valley. Park at the Akahiko monument car park and walk out to Unarijima and the Nakahatchō suspension bridge — about two hours there and back. Private cars are only restricted in high summer, so October is open. The water is cold and the rock slippery: feet in at the edges at most. It works just as well on the 12th if the city can wait." },
      { title: "Senjōjiki Cirque", when: "If Kamikōchi looks crowded or closed", body: "Park at Suganodai (¥500/day), 40 minutes by bus, 8 minutes of ropeway to 2,612 m. A flat loop at the top means you decide up there whether to climb Kisokoma. Expect hour-plus ropeway queues in peak colour, and snow can start mid-October." },
      { title: "Utsukushigahara", when: "Excellent visibility · ~1 h each way", body: "A 2,000 m plateau up the scenic Venus Line, and simple logistics — most of it works from the car. Check the Skyline is open; it closes for snow towards the end of October." },
      { title: "Azumino and Daiō Wasabi", when: "Cloudy or low energy · 30–40 min", body: "Half a day of streams, farms and wasabi fields, and it holds up in poor weather. Pair it with half a day in the city." },
      { title: "Tsubame Onsen and Myōkō", when: "Only on a clear day that is not the 12th", body: "Two free outdoor baths, Kawara-no-yu and Ōgon-no-yu, about fifteen minutes' walk above the village at 1,100 m, open sunrise to sunset and closed Mondays. But it is 1h40–2h each way, so four hours in the car, and the colour at Myōkō is only starting in mid-October. Leave 08:00, be there 10:00, back by 17:00. Food up there is thin — plan lunch at Myōkō Kōgen or carry it. Imori Pond, a 500 m loop with Myōkō reflected in it, and Naena Falls are the backup if the baths are shut or full." },
      { title: "Norikura", when: "Probably not, on these dates", body: "Tatamidaira is above 2,700 m, private cars are banned so it is park-and-ride from Norikura Kōgen or Suzuran, and first snow is possible. High effort, very weather-dependent." }
    ],
    logistics: ["w-corolla", "w-jujo", "w-pizzamatsuri"],
    saved: ["p-pizzamatsuri", "p-atera", "p-forespa", "p-tsubame"]
  },

  {
    id: "d12", date: "2026-10-12", dow: "Mon", dest: "matsumoto",
    title: "Matsumoto · holiday and the soba festival",
    route: [
      { name: "Matsumoto Castle" },
      { name: "Nakamachi", via: "Via Nawate on foot", mode: "walk" },
      { name: "Agatanomori", via: "~1.5 km east", mode: "walk" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Castle and the soba festival", detail: "The festival is in the castle park, 10–12 Oct. Get there before the midday peak.", place: "Matsumoto Castle" },
      { t: { k: "seq" }, name: "Nawate Street", detail: "The frog street along the canal.", place: "Nawate Street Matsumoto" },
      { t: { k: "seq" }, name: "Nakamachi Street", detail: "Black-and-white kura warehouses — ceramics, sake, coffee.", saved: "p-nakamachi" },
      { t: { k: "part", v: "afternoon" }, name: "A real break", detail: "Lunch and coffee, sitting down. This is a slow day, not a march." },
      { t: { k: "seq" }, name: "The old high school", detail: "旧制松本高等学校, a wooden building in Agata-no-Mori park.", place: "Kyusei Matsumoto High School" },
      { t: { k: "seq" }, name: "Agatanomori park", detail: "Finish in the park around it. A soft landing, not another site.", place: "Agatanomori Park Matsumoto" }
    ],
    alts: [
      { title: "Alps Park", when: "Only with good visibility", body: "Worth it for the view across to the Alps, otherwise skip." },
      { title: "A full wet-weather city day", when: "If it rains", body: "Inside the castle, Nakamachi and Nawate which are partly covered, coffee, and the Matsumoto art museum. Do not go up into the mountains in rain." }
    ],
    logistics: ["w-jujo"],
    saved: ["p-nakamachi", "p-tsubame"]
  },

  {
    id: "d13", date: "2026-10-13", dow: "Tue", dest: "fuji",
    title: "Matsumoto → the western lakes → Gotemba",
    route: [
      { name: "Matsumoto" },
      { name: "Lake Shōji", via: "125.9 km · ~2 h", mode: "car" },
      { name: "Lake Motosu", via: "9.7 km · 9 min", mode: "car" },
      { name: "Shiraito", via: "Lunch on the way · ~35 min", mode: "car" },
      { name: "Lake Tanuki", via: "5.3 km · 10 min · optional", mode: "car" },
      { name: "Gotemba", via: "47.7 km · 50 min", mode: "car" }
    ],
    plan: [
      { t: { k: "exact", v: "07:00" }, name: "Leave Matsumoto Jujo", detail: "Early on purpose. This is a road trip south, not a transfer.", wallet: "w-jujo" },
      { t: { k: "approx", v: "09:05" }, name: "Tatego-hama, Lake Shōji", detail: "The Kodaki Fuji view, with Mount Ōmuro in front of the mountain. Twenty to thirty minutes at the shore, no walking. If Fuji is hidden, cut it short or drive on.", saved: "p-shoji" },
      { t: { k: "approx", v: "09:45" }, name: "Lake Motosu, by Kōan", detail: "The lakeside walkway and the ¥1,000-note composition from the shore. Not the climb to Nakanokura Pass — that is over an hour we do not have today.", saved: "p-motosu" },
      { t: { k: "approx", v: "10:25" }, name: "South on Route 139", detail: "Through Asagiri. Twenty minutes to Shiraito, half an hour to Fujinomiya — lunch decides which." },
      { t: { k: "approx", v: "11:15" }, name: "A proper sit-down lunch", detail: "Three candidates, all on the route: Hiraishiya for Fujinomiya yakisoba beside Otodome, the Asagiri Food Park buffet on the 139, or Masu no Ie for spring-water trout. Pick one nearer the time and check it opens on a Tuesday.", saved: "p-masunoie" },
      { t: { k: "approx", v: "12:40" }, name: "Shiraito Falls", detail: "The core of the day. A hundred and fifty metres of spring water straight out of the rock. Otodome is on the same walk. Ninety minutes to two hours, unhurried.", saved: "p-shiraito" },
      { t: { k: "approx", v: "14:30" }, name: "Lake Tanuki, if the mountain is out", detail: "Ten minutes away, and 45–60 minutes round the water. Skip it without regret if Fuji is in cloud or we are running late.", saved: "p-tanuki", opt: 1 },
      { t: { k: "approx", v: "16:15" }, name: "edit×seven Fuji Gotemba", detail: "Fifty minutes from Tanuki, forty-two straight from Shiraito. No need to land on check-in time.", wallet: "w-editseven" }
    ],
    alts: [
      { title: "Fuji is completely hidden", when: "Cloud right down", body: "Do not spend the morning collecting lake viewpoints that have nothing in them. Drive straight through to an early lunch, give Shiraito the full two hours — it is spring water and it is beautiful in any weather — and get to Gotemba in daylight." },
      { title: "Fuji is only partly out", when: "Broken cloud", body: "Take the stronger of the two lakes rather than both. Motosu is the better composition; Shōji is the quicker stop." },
      { title: "Everything is clear", when: "The good version", body: "Both lakes in the morning, then Tanuki after Shiraito. That is 212 km and about 3h30 of driving, which is a full but comfortable day." }
    ],
    logistics: ["w-corolla", "w-yaris", "w-editseven", "w-jujo"],
    saved: ["p-shoji", "p-motosu", "p-shiraito", "p-otodome", "p-tanuki", "p-hiraishiya", "p-asagiri", "p-masunoie"]
  },

  {
    id: "d14", date: "2026-10-14", dow: "Wed", dest: "fuji",
    title: "West Izu · the road trip",
    route: [
      { name: "Gotemba" },
      { name: "Ō-daru", via: "73.9 km · Route 414 through the new Amagi tunnel", mode: "car" },
      { name: "Kawazu", via: "9 km", mode: "car" },
      { name: "Koganezaki", via: "42.8 km across the peninsula", mode: "car" },
      { name: "Nishina Pass", via: "14.2 km climbing to ~900 m", mode: "car" },
      { name: "Gotemba", via: "81.7 km home over the ridge via Shuzenji", mode: "car" }
    ],
    plan: [
      { t: { k: "exact", v: "07:45" }, name: "Leave edit×seven", detail: "Tōmei, then Shin-Tōmei, then Route 136 and Route 414 through the new Amagi tunnel and the loop bridge. This is an evening-before decision, not a morning one — the whole day is locked to a 17:16 sunset.", wallet: "w-editseven" },
      { t: { k: "approx", v: "09:30" }, name: "Ō-daru Falls", detail: "A 30 m fall from a public, free viewing deck. About an hour and a half here and in the valley — not all seven falls.", saved: "p-odaru" },
      { t: { k: "approx", v: "11:20" }, name: "HODOHODO Base", detail: "Coffee and a vegetable-heavy lunch with home baking, and no pork on the menu — which removes the usual check. Four parking spaces, so arrive before 12:00.", saved: "p-hodohodo" },
      { t: { k: "approx", v: "12:40" }, name: "Across to the west coast", detail: "Route 15 over the Basara pass — winding but a proper two-lane road, and we do it in daylight. Past Shimoda without stopping.", place: "Basara Pass Izu" },
      { t: { k: "approx", v: "13:30" }, name: "Dōgashima, optional", detail: "It sits on Route 136 going north, so a 15–20 minute viewpoint stop costs nothing. The cave cruise is 20 minutes and ¥1,500, running 10:00–16:00.", saved: "p-dogashima" },
      { t: { k: "approx", v: "14:30" }, name: "Koganezaki", detail: "Propylite rock that turns gold in the afternoon light — that is literally what the name means. Free, 92 parking spaces, and Fuji across Suruga Bay on a clear day. Leave by 15:55: the car park shuts at 17:00, so this is not the sunset spot.", saved: "p-koganezaki" },
      { t: { k: "exact", v: "16:20" }, name: "Nishina Pass", detail: "897 m. Golden hour starts at 16:16 and sunset is 17:16 up here — 17:12 down at sea level. Arriving now means parking and walking up before the light, not chasing it.", saved: "p-nishina" },
      { t: { k: "approx", v: "17:35" }, name: "Home over the ridge", detail: "Stay on the Nishi-Izu Skyline to Darumayama, then down to Shuzenji. 81.7 km against 75.1 for the direct ridge line — nine minutes for a wider road in the dark. Back around 19:10." }
    ],
    alts: [
      { title: "Panorama-dai and the lakes", when: "Excellent Fuji visibility", body: "Panorama-dai, then Oshino Hakkai early, then north Kawaguchiko and Ōishi Park." },
      { title: "Stay close", when: "Partly cloudy", body: "Gotemba, Yamanakako, Oshino and the east side of Kawaguchiko." },
      { title: "Hakone", when: "Fuji hidden", body: "Lake Ashi, Ōwakudani and the open-air museum. The easy, close fallback." },
      { title: "Eastern Izu", when: "A completely different day", body: "Itō, Mount Ōmuro, then the Jōgasaki cliffs." },
      { title: "Central Izu", when: "Short and easy", body: "Shuzenji and the onsen around it, maybe Jōren Falls." }
    ],
    logistics: ["w-yaris", "w-editseven"],
    saved: ["p-odaru", "p-hodohodo", "p-koganezaki", "p-nishina", "p-dogashima"]
  },

  {
    id: "d15", date: "2026-10-15", dow: "Thu", dest: "tokyo",
    title: "A last Fuji morning, then Tokyo",
    route: [
      { name: "Gotemba" },
      { name: "Shinjuku", via: "Romancecar Mt. Fuji 4 · 12:48–14:25", mode: "train" },
      { name: "Iidabashi", via: "JR Chūō-Sōbu local · 6 stops", mode: "train" },
      { name: "Kagurazaka", via: "Walk from Iidabashi", mode: "walk" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "One last viewpoint", detail: "Only if the mountain is showing. Check-out at edit×seven is 10:00 or 11:00 depending on the listing — ask at the desk." },
      { t: { k: "approx", v: "12:00" }, name: "Return the GR Yaris", detail: "Two to three hours before its 14:30 booking, because the train leaves at 12:48. Fill it with high-octane first. The Toyota shop is at Gotemba station.", wallet: "w-yaris" },
      { t: { k: "seq" }, name: "Basic-fare tickets at Gotemba station", detail: "The e-ticket covers only the limited-express charge. Buy two paper through tickets (連絡乗車券) to Odakyu Shinjuku (小田急新宿) at the JR ticket office or machine, ¥1,310 each. Suica and other IC cards do not work across the JR–Odakyu boundary.", place: "Gotemba Station" },
      { t: { k: "exact", v: "12:48" }, name: "Romancecar Mt. Fuji 4", detail: "Car 5, seats 6C and 6D. Ticketless — the purchase on the phone is the limited-express ticket. Suitcases go on the overhead racks or at our feet.", wallet: "w-romancecar" },
      { t: { k: "exact", v: "14:25" }, name: "Shinjuku, then Iidabashi", detail: "Out through the Odakyu gates with the paper ticket, then JR on Suica: the yellow Chūō-Sōbu local, six stops to Iidabashi. Not the orange Chūō rapid — it does not stop there.", place: "Iidabashi Station" },
      { t: { k: "approx", v: "15:00" }, name: "Metropolitan Edmont", detail: "Five minutes on foot from JR Iidabashi's east exit.", wallet: "w-edmont" },
      { t: { k: "part", v: "evening" }, name: "Kagurazaka", detail: "Up the main street, then the cobbled side lanes. Bistro or izakaya.", place: "Kagurazaka Tokyo" }
    ],
    logistics: ["w-yaris", "w-romancecar", "w-edmont"],
    saved: []
  },

  {
    id: "d16", date: "2026-10-16", dow: "Fri", dest: "tokyo",
    title: "Tokyo · one cluster and an evening",
    flexible: true, bank: "tokyo",
    plan: [],
    logistics: [],
    saved: []
  },

  {
    id: "d17", date: "2026-10-17", dow: "Sat", dest: "tokyo",
    title: "Tokyo · one cluster and an evening",
    flexible: true, bank: "tokyo",
    plan: [],
    logistics: [],
    saved: []
  },

  {
    id: "d18", date: "2026-10-18", dow: "Sun", dest: "tokyo",
    title: "Tokyo · one cluster and an evening",
    flexible: true, bank: "tokyo",
    plan: [],
    logistics: [],
    saved: []
  },

  {
    id: "d19", date: "2026-10-19", dow: "Mon", dest: "tokyo",
    title: "Tokyo · the last full day",
    flexible: true, bank: "tokyo",
    plan: [
      { t: { k: "exact", v: "20:30" }, name: "Dinner · T, Nakameguro", detail: "Booked, the T Genesis course, with a 2½-hour table. Omi beef T-bone, and the last dinner in Japan. T is across town from the hotel, so the Daikanyama → Nakameguro cluster is the natural last afternoon — it ends right here.", saved: "p-t-nakameguro" }
    ],
    logistics: ["w-t"],
    saved: ["p-t-nakameguro", "p-nakameguro", "p-onibus"]
  },

  {
    id: "d20", date: "2026-10-20", dow: "Tue", dest: "tokyo",
    title: "Home",
    route: [
      { name: "Iidabashi" },
      { name: "Narita", via: "~1h30 · leave around 14:30", mode: "train" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Easy morning near the hotel", detail: "Nothing that needs a train across the city." },
      { t: { k: "approx", v: "14:30" }, name: "Leave for Narita", detail: "N'EX from central Tokyo is about 1h15–1h45." },
      { t: { k: "exact", v: "18:00" }, name: "NRT departure", detail: "Knives in the hold.", wallet: "w-home" }
    ],
    logistics: ["w-home", "w-edmont"],
    saved: []
  }
];

/* Clusters, not itineraries. One per day plus an evening — never two.
   Leave at least half a day genuinely free twice across the five nights.

   Kyoto's are fuller: `meta` is the practical line (travel, car, pace),
   `steps` an optional shape for the day in the same form as a day plan,
   `tips` anything worth knowing, and `places` the saved places it uses.
   None of it is ever assigned to a date — a day only gets a plan when we
   pick one on the phone, and that choice stays on the phone. */
export const clusters = {
  kyoto: [
    {
      id: "k-osaka", star: true,
      title: "Osaka for the day",
      when: "Any day Tokito is open — it posts closures on its Instagram stories",
      meta: [{ icon: "train", text: "~1h15 each way" }, { icon: "clock", text: "Full day, not rushed" }],
      body: "Shopping and food, and back to Kyoto to sleep: lunch at Tokito, the afternoon in Nakazakichō's lanes and vintage shops, and maren at five.",
      steps: [
        { t: { k: "approx", v: "10:15" }, name: "Kyoto to Osaka", detail: "JR to Osaka, then the metro — about an hour and a quarter from Umekōji to Tokito.", place: "Osaka Station" },
        { t: { k: "approx", v: "11:30" }, name: "Lunch · Tokito", detail: "Noa's highlight. The wagyu sando is lunch only, 11:00–15:00, walk-in, made in limited numbers.", saved: "p-tokito" },
        { t: { k: "seq" }, name: "Nakazakichō", detail: "About 20 minutes on the Tanimachi line from Tanimachi 6-chōme. Cafés, vintage shops and quiet old streets — Yatt or pognam for coffee, MONIQUE for a glass of wine.", saved: "p-yatt" },
        { t: { k: "part", v: "afternoon" }, name: "Thrift and vintage", detail: "Nakazakichō's own shops first. Tenjinbashisuji, the long covered arcade, is a short walk east if we want more.", saved: "p-tenjinbashi" },
        { t: { k: "exact", v: "17:00" }, name: "Dinner · maren, Kitashinchi", detail: "A flat 20-minute walk from Nakazakichō, through Umeda. Twelve counter seats and no bookings, so early is the plan. The broth is chicken; ask about the chāshū for Noa.", saved: "p-maren" },
        { t: { k: "seq" }, name: "Back to Kyoto", detail: "About an hour to Umekōji by JR from Osaka Station. From the 7th, the Hankyū line to Kyoto-Kawaramachi is the easier ride to Gion.", place: "Osaka Station" }
      ],
      tips: [
        { title: "grenier, if Noa wants the choux", body: "In Kitahama, between Tokito and Nakazakichō. It closes at 19:00." },
        { title: "An Osaka local's advice", body: "Naniwa-ku is where Osaka actually happens, and the food is better than it looks: walk around at night and sit down at whatever corner restaurant looks quiet." }
      ],
      places: ["p-tokito", "p-yatt", "p-pognam", "p-monique", "p-tenjinbashi", "p-maren", "p-grenier", "p-glitch", "p-melt"]
    },
    {
      id: "k-kibune", star: true,
      title: "Kurama over the mountain to Kibune",
      when: "A dry day — and not the 7th, which is the move to Gion",
      meta: [{ icon: "train", text: "~1h15 each way" }, { icon: "clock", text: "Full day on a mountain path" }],
      body: "Already researched, and the nature day that needs no car: up through Kurama-dera, over the ridge, and down into Kibune for the shrine and lunch by the stream.",
      steps: [
        { t: { k: "approx", v: "09:00" }, name: "To Demachiyanagi, then the Eizan line", detail: "About an hour and a quarter to Kurama from Umekōji. Stay on the Eizan line to the last stop, not Kibuneguchi. The maple tunnel is on the ride, still green this early.", place: "Demachiyanagi Station Kyoto" },
        { t: { k: "approx", v: "10:30" }, name: "Kurama-dera", detail: "Open 09:00–16:15. Up through the Niōmon gate and the forest to the Main Hall. On foot; the cable car only if the weather or our legs say otherwise.", saved: "p-kuramadera" },
        { t: { k: "seq" }, name: "Over the mountain to Kibune", detail: "40 minutes brisk, about an hour taking it slowly. One way — we do not come back over.", place: "Kurama to Kibune hiking trail" },
        { t: { k: "part", v: "afternoon" }, name: "Kifune Shrine", detail: "The red lantern steps, then the water fortunes.", saved: "p-kifune" },
        { t: { k: "seq" }, name: "Lunch by the stream", detail: "The river platforms come down at the end of September, so the restaurants are indoors. Then wander — it is not a checklist." },
        { t: { k: "approx", v: "16:30" }, name: "Bus 33 to Kibuneguchi", detail: "Then the Eizan line back to Demachiyanagi.", place: "Kibuneguchi Station Kyoto" }
      ],
      places: ["p-kuramadera", "p-kifune"]
    },
    {
      id: "k-east", star: true,
      title: "Eastern Kyoto, north to south",
      when: "Not a Sunday, when Hinode Udon is shut. Easiest once we are in Gion",
      meta: [{ icon: "bus", text: "~50 min from Umekōji, less from Gion" }, { icon: "clock", text: "Relaxed if we start early" }],
      body: "Already researched: Hōnen-in early, a stretch of the Philosopher's Path, Eikandō at opening, lunch at Hinode Udon, then down through Nanzen-ji into Gion. One temple, not a temple hunt.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "Hōnen-in", detail: "The moss gate and the courtyard, free to enter and empty early.", place: "Honen-in Kyoto" },
        { t: { k: "seq" }, name: "Philosopher's Path", detail: "A stretch of it walking south. Pizzeria da Ciro is near the north end, but it is shut on Mondays.", place: "Philosophers Path Kyoto" },
        { t: { k: "approx", v: "09:00" }, name: "Eikandō", detail: "The one temple of the day, around opening. 09:00–17:00, last entry 16:00, ¥1,000.", place: "Eikando Zenrinji Kyoto" },
        { t: { k: "part", v: "midday" }, name: "Lunch · Hinode Udon", detail: "Arrive a little before it opens at 11:00. No reservations, cash only, closed on Sundays.", saved: "p-hinode" },
        { t: { k: "seq" }, name: "Nanzen-ji and the aqueduct", detail: "Optional. Tenju-an, one of its sub-temples, is in the saved list.", place: "Nanzenji Suirokaku Kyoto" },
        { t: { k: "seq" }, name: "Gyōjabashi", detail: "The narrow stone bridge over the Shirakawa near Higashiyama station.", saved: "p-gyojabashi" },
        { t: { k: "seq" }, name: "Furumonzen into Gion", detail: "Down towards the river, with time for coffee." }
      ],
      tips: [
        { title: "What we deliberately left out", body: "Ginkaku-ji is not added just because it is next to the path, and Fushimi Inari and Arashiyama were left out of the old plan." }
      ],
      places: ["p-hinode", "p-daciro", "p-tenjuan", "p-gyojabashi", "p-2050"]
    },
    {
      id: "k-downtown",
      title: "Downtown on foot",
      when: "Any day, and a good one in rain — the arcades are covered",
      meta: [{ icon: "bus", text: "Bus 207 · ~25 min" }, { icon: "clock", text: "Relaxed" }],
      body: "Coffee, Nishiki and the Teramachi arcades, then Kiyamachi and Pontochō in the evening. The densest part of the saved list, all within about a kilometre of Shijō-Kawaramachi, and nothing to book.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "Coffee at uru coffee", detail: "Near Teramachi.", saved: "p-uru" },
        { t: { k: "seq" }, name: "Nishiki and Teramachi", detail: "The food market and the covered arcades. My Only Fragrance is on Teramachi.", saved: "p-myonlyfragrance" },
        { t: { k: "part", v: "midday" }, name: "Lunch · KYOTO ENGINE RAMEN", detail: "On Shinkyōgoku. Check the broth before Noa orders.", saved: "p-engine" },
        { t: { k: "part", v: "afternoon" }, name: "Over the Kamo into Gion", detail: "Gion Shirakawa, and 2050 coffee by the stream.", saved: "p-2050" },
        { t: { k: "part", v: "evening" }, name: "Dinner on Kiyamachi or Pontochō", detail: "Yakiniku MARUTOMI on the 8th floor of Kyoto Kawaramachi Garden, Julia for wagyu, Onikai or 365 Sakaba for an izakaya, or GANSAN in Pontochō.", saved: "p-marutomi" },
        { t: { k: "seq" }, name: "A record bar to finish", detail: "GOOD morning RECORD BAR is just south of Shijō, RECORD BAR YAMADA further down by Gojō.", saved: "p-goodmorning" }
      ],
      places: ["p-uru", "p-myonlyfragrance", "p-engine", "p-2050", "p-marutomi", "p-julia", "p-onikai", "p-365", "p-gansan", "p-goodmorning", "p-yamada"]
    },
    {
      id: "k-saiho",
      title: "Saihō-ji and the quiet west",
      when: "Book by 23:59 Japan time the night before",
      meta: [{ icon: "bus", text: "Bus 71 · ~1 h" }, { icon: "clock", text: "Half a day or more" }],
      body: "The moss temple, by timed reservation only. Matsuo-taisha is a short walk away, and Arashiyama one stop on the Hankyū line — it was left out of the old plan, but the % ARABICA there is in the saved list.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "Saihō-ji", detail: "Booked online at intosaihoji.com: from ¥4,000 each plus ¥110, card only, and free to cancel until 4 days before.", saved: "p-saihoji" },
        { t: { k: "seq" }, name: "Matsuo-taisha", detail: "The big shrine just north of Saihō-ji.", place: "Matsuo Taisha Kyoto" },
        { t: { k: "seq" }, name: "Arashiyama for coffee", detail: "One stop on the Hankyū line from Matsuo-taisha, then over the Togetsukyō bridge to % ARABICA by the river.", saved: "p-arabica" }
      ],
      places: ["p-saihoji", "p-arabica"]
    },
    {
      id: "k-ine",
      title: "Ine and Amanohashidate, by car",
      when: "Only on a clear day, and only if a long day in the car sounds good",
      meta: [{ icon: "car", text: "Car · 2¼–2½ h each way" }, { icon: "clock", text: "Long day" }],
      body: "The fishing village where the boathouses sit on the water, 130 km north on the Sea of Japan. Beautiful — but about five hours of driving for four or five hours there. Your call.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "A car for the day", detail: "Not booked. Either a separate one-day rental in Kyoto, or collect the Corolla on the 8th instead of the 9th and keep it overnight, which means finding a car park in Gion." },
        { t: { k: "seq" }, name: "Amanohashidate", detail: "About 1h50 from Kyoto on the Kyoto Jūkan Expressway, and 20–25 minutes short of Ine — the pine-covered sandbar is the natural stop on the way.", place: "Amanohashidate" },
        { t: { k: "seq" }, name: "Ine", detail: "Park at the Funaya no Sato roadside station above the bay: a big free car park, an observation deck and restaurants. It is a working village, and most boathouses are private homes.", place: "道の駅 舟屋の里伊根" },
        { t: { k: "seq" }, name: "The bay by boat", detail: "The big sightseeing boats loop the bay in 25 minutes for ¥1,200, every 15–30 minutes from 9:00 to 16:00.", place: "Ine Bay Sightseeing Boat" },
        { t: { k: "approx", v: "16:00" }, name: "Back to Kyoto", detail: "About 2¼–2½ hours." }
      ],
      places: []
    },
    {
      id: "k-biwa",
      title: "Lake Biwa's far shore, by car",
      when: "A car day that is not a marathon",
      meta: [{ icon: "car", text: "Car · ~1h35 each way" }, { icon: "clock", text: "Relaxed" }],
      body: "The Metasequoia avenue in Takashima — saved with \"need to go on a drive in this area\" — with Shirahige Shrine's lake torii on the way up the west shore. The 9th crosses the southern end of the lake; this is the other end.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "A car for the day", detail: "Not booked — the same two options as the Ine day." },
        { t: { k: "seq" }, name: "Shirahige Shrine", detail: "About 65 minutes from Kyoto. Photograph the torii in the lake from the viewing deck by the shrine office, and never cross Route 161 for it — someone was killed doing that in 2021.", place: "Shirahige Shrine" },
        { t: { k: "seq" }, name: "The Metasequoia avenue", detail: "Half an hour further north. The trees are still green in early October.", saved: "p-metasequoia" },
        { t: { k: "part", v: "afternoon" }, name: "Back down the lake", detail: "About 1h35 to Kyoto." }
      ],
      places: ["p-metasequoia"]
    },
    {
      id: "k-minoh",
      title: "Katsuō-ji and the Minoh gorge",
      when: "A weekday, starting early",
      meta: [{ icon: "train", text: "~1h20 each way" }, { icon: "clock", text: "Most of a day" }],
      body: "Already researched for the old Osaka base: the daruma temple above Minoh, a taxi across to the falls, then 2.8 km down the gorge on foot. From Kyoto the ride in is longer.",
      steps: [
        { t: { k: "approx", v: "07:30" }, name: "Umekōji to Minoh-Kayano", detail: "JR to Shin-Osaka, then the Midōsuji line runs straight through to Minoh-Kayano. About 1h20.", place: "Minoh-Kayano Station" },
        { t: { k: "exact", v: "09:00" }, name: "Bus 30 to Katsuō-ji", detail: "The first weekday bus, then every 30 minutes until 15:00. About 20 minutes up the hill.", place: "Minoh-Kayano Station" },
        { t: { k: "approx", v: "09:20" }, name: "Katsuō-ji", detail: "The daruma temple, open 08:00–17:00. Early is the point — later there are queues for photos with the daruma.", saved: "p-katsuoji" },
        { t: { k: "seq" }, name: "Taxi to Dainichi car park", detail: "Taxis wait at the temple bus stop and there are none at the falls end, which is why the temple comes first. About five minutes, roughly ¥1,300 by one visitor's count in October 2025.", place: "Dainichi Parking Lot, Minoh" },
        { t: { k: "seq" }, name: "Minoh Falls", detail: "Ten to fifteen minutes on foot down from the car park.", saved: "p-minoh" },
        { t: { k: "seq" }, name: "Down the gorge", detail: "About 2.8 km beside the river, downhill all the way to Hankyū Minoh station. Green in early October; the colour here is late November.", place: "Minoh Station" },
        { t: { k: "part", v: "afternoon" }, name: "Back to Kyoto", detail: "Hankyū from Minoh towards Umeda, then back to Kyoto from there." }
      ],
      places: ["p-katsuoji", "p-minoh"]
    }
  ],
  tokyo: [
    {
      id: "c-yanaka", star: true,
      title: "Yanaka → Ueno",
      when: "Midweek, morning through evening",
      body: "Nezu and Yanaka, through the back lanes and the cemetery, into Ueno Park, then Ueno itself. The walk between them is the point — do not replace it with a train. Time the day so it ends at Ameyoko and Okachimachi: cheap izakaya, yakitori, street food and a local racket. Sensō-ji at 07:00–08:00 can start the day if it happens, but only then."
    },
    {
      id: "c-shimokita", star: true,
      title: "Shimokitazawa",
      when: "Afternoon into evening",
      body: "Vintage, records and the live houses, with the Curry Festival on for our whole stay, so a late lunch is curry. The evening ends at one of the two izakayas we saved: Ittosei for charcoal yakitori and vegetables, which takes bookings online and is closed on Mondays, or Genki Club, an old rock bar full of records and rare shochu, cheaper and open from 18:00."
    },
    {
      id: "c-west", star: true,
      title: "Harajuku → Shibuya",
      when: "A full day",
      body: "Yoyogi-Uehara for a quiet morning and coffee, then Harajuku, Cat Street and Omotesandō for shopping, closing in Shibuya in the evening. Do not bolt Daikanyama and Nakameguro onto this — they are their own cluster."
    },
    {
      id: "c-meguro",
      title: "Daikanyama → Nakameguro",
      when: "Afternoon into evening",
      body: "T-Site and the boutiques in Daikanyama, then down the Meguro river into Nakameguro. Ebisu if there is appetite for more."
    },
    {
      id: "c-local",
      title: "Nakano → Kōenji",
      when: "Good in rain, good on a gig night",
      body: "Nakano Broadway is retro and entirely covered. Kōenji is second-hand shops, records, the Pal arcade and bars. The live houses here are the reason to keep an evening loose."
    },
    {
      id: "c-central", star: true,
      title: "Ginza, for Noa",
      when: "Sat 17 or Sun 18, from 12:00",
      body: "At weekends Chūō-dōri, from Ginza 1-chōme to 8-chōme, is closed to cars from 12:00 to 17:00. Then whatever Noa has collected from TikTok and Instagram, konbini hunting and the department stores. Deliberately unstructured. The police can call off the car-free street for bad weather, but the department stores still make it a good rainy day."
    },
    {
      id: "c-kagurazaka",
      title: "Kagurazaka, from the hotel",
      when: "An arrival evening or a free one",
      body: "Iidabashi into Kagurazaka: the main street, the cobbled side lanes, Akagi-jinja, then a bistro or an izakaya. Ten minutes from the room."
    }
  ]
};

export const dayById = Object.fromEntries(days.map(d => [d.id, d]));
export const dayByDate = Object.fromEntries(days.map(d => [d.date, d]));
export const daysFor = destId => days.filter(d => d.dest === destId);
