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
    id: "d04", date: "2026-10-04", dow: "Sun", dest: "osaka",
    title: "Landing, ramen, and the river",
    route: [
      { name: "KIX" },
      { name: "Namba", via: "Train or limousine · ~50 min", mode: "train" },
      { name: "Kitashinchi", via: "Midosuji line to Umeda · ~9 min", mode: "train" },
      { name: "Kitahama", via: "Along the river · ~20 min", mode: "walk" }
    ],
    plan: [
      { t: { k: "exact", v: "11:40" }, name: "Land at KIX", detail: "Immigration, bags, then the train or airport limousine into the city.", place: "Kansai International Airport" },
      { t: { k: "approx", v: "13:30" }, name: "Meander Osaka", detail: "Drop the bags. Nothing today has to be rushed.", wallet: "w-meander" },
      { t: { k: "part", v: "afternoon" }, name: "Namba on foot", detail: "An easy lunch and a coffee, then Dōtonbori's canal and the Glico sign a few minutes from the hotel, and the covered Shinsaibashi-suji arcade north of it. Horie, half a kilometre west, is the coffee-and-boutiques pocket if we want to sit down.", saved: "p-dotonbori" },
      { t: { k: "exact", v: "17:00" }, name: "Dinner · maren, Kitashinchi", detail: "It reopens at 17:00 on a Sunday, and arriving at opening is how to get past the queue for twelve counter seats. Midosuji up to Umeda, about nine minutes, then five on foot.", saved: "p-maren" },
      { t: { k: "seq" }, name: "Down the river to grenier", detail: "About twenty minutes on foot, over Nakanoshima and across to Kitahama. Noa's choux — but it shuts at 19:00, so we do not linger over the ramen.", saved: "p-grenier" },
      { t: { k: "part", v: "evening" }, name: "Back to Namba", detail: "Yodoyabashi is a few minutes from grenier, then three stops down the Midosuji line. The Nakanoshima riverside is lit up if we want the long way round.", saved: "p-nakanoshima" }
    ],
    logistics: ["w-meander", "w-out"],
    saved: ["p-maren", "p-grenier", "p-nakanoshima", "p-dotonbori", "p-hozenji", "p-torikizoku", "p-toratoriya", "p-gorichan", "p-gyukotsuo", "p-uniqlo", "p-nambaparks", "p-doguyasuji"]
  },

  {
    id: "d05", date: "2026-10-05", dow: "Mon", dest: "osaka",
    title: "Tokito, then the city on foot",
    route: [
      { name: "Namba" },
      { name: "Karahori", via: "On foot, via Kuromon", mode: "walk" },
      { name: "Osaka Castle", via: "Tanimachi line, or ~30 min on foot", mode: "train" },
      { name: "Kitahama", via: "Along the river · ~30 min", mode: "walk" },
      { name: "Tenjinbashisuji", via: "Over the river, up the arcade", mode: "walk" },
      { name: "Nakazakichō", via: "On foot · under 1 km", mode: "walk" },
      { name: "Umeda", via: "On foot · ~15 min", mode: "walk" },
      { name: "Shinsaibashi", via: "Midosuji line · 3 stops", mode: "train" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Kuromon market, if we are up", detail: "Optional — it is only here because the arrival day was a Sunday, when it is shut. A short walk from the hotel, and about a kilometre from Tokito, so it leads straight into lunch.", saved: "p-kuromon" },
      { t: { k: "exact", v: "11:00" }, name: "Lunch · Tokito", detail: "Noa's highlight. The wagyu sando is lunch only, 11:00–15:00, walk-in only and made in limited numbers, so we are there when it opens. Tokito posts irregular closing days on its Instagram stories.", saved: "p-tokito" },
      { t: { k: "part", v: "afternoon" }, name: "Osaka Castle", detail: "A short ride on the Tanimachi line, or about half an hour on foot. The keep is open every day, last entry 17:30. Nishinomaru Garden, in the same grounds, is closed on Mondays — and today is one.", saved: "p-osakacastle" },
      { t: { k: "seq" }, name: "Kitahama and Nakanoshima", detail: "Half an hour west along the river: architecture on the water. grenier for Noa's choux, and Brooklyn Roasting is in Kitahama too.", saved: "p-grenier" },
      { t: { k: "seq" }, name: "Tenjinbashisuji", detail: "Over the river and north up the longest shopping arcade in Japan. The food along it is local rather than aimed at visitors.", saved: "p-tenjinbashi" },
      { t: { k: "seq" }, name: "Nakazakichō", detail: "Cafés, vintage shops and quiet old streets, just west of the top of the arcade. Coffee at Yatt.", saved: "p-yatt" },
      { t: { k: "part", v: "evening" }, name: "Yodobashi Umeda", detail: "About fifteen minutes on foot from Nakazakichō, in front of Osaka Station's north gate, open until 22:00. Then the Midosuji line three stops south to Shinsaibashi.", saved: "p-yodobashi" },
      { t: { k: "exact", v: "20:30" }, name: "Dinner · Kibitaki Bettei", detail: "Booked. The chef's seven yakitori skewers, all chicken, so it is fine for Noa. On Shinsaibashi-suji, in the same block as the big UNIQLO.", saved: "p-kibitaki" }
    ],
    alts: [
      { title: "Skip the castle", when: "If the day feels long", body: "Walk straight from Tokito to Kitahama instead — about the same distance. Horie's boutiques and cafés are half a kilometre from the hotel, so they fit any evening." },
      { title: "If Tokito is closed", when: "Check its Instagram stories the night before", body: "Start at the castle and run the rest of the day as it is. Tokito's lunch is walk-in only, so there is nothing to cancel." },
      { title: "A wet day", when: "If it rains", body: "Kuromon, the Kaiyukan aquarium, Umeda Sky and the covered Shinsaibashi arcade are all indoors, and Tenjinbashisuji is an arcade too." }
    ],
    logistics: ["w-kibitaki"],
    saved: ["p-tokito", "p-kibitaki", "p-kuromon", "p-osakacastle", "p-grenier", "p-brooklyn", "p-nakanoshima", "p-tenjinbashi", "p-yatt", "p-tenma", "p-yodobashi"]
  },

  {
    id: "d06", date: "2026-10-06", dow: "Tue", dest: "osaka",
    title: "Katsuō-ji first, then down through Minoh",
    route: [
      { name: "Namba" },
      { name: "Minoh-Kayano", via: "Midosuji line, no change · 35–40 min", mode: "train" },
      { name: "Katsuō-ji", via: "Bus 30 · ~20 min", mode: "bus" },
      { name: "Minoh Falls", via: "Taxi ~5 min, then a short walk", mode: "car" },
      { name: "Minoh", via: "Down the gorge on foot · ~2.8 km", mode: "walk" },
      { name: "Umeda", via: "Hankyū · ~30 min", mode: "train" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Suitcases to the Meander desk", detail: "Before we leave. Takkyubin to MIRU is next-day, so bags sent today arrive on the 7th. Cabin trolleys stay with us.", wallet: "w-luggage" },
      { t: { k: "approx", v: "08:15" }, name: "Midosuji line to Minoh-Kayano", detail: "Straight through from Namba with no change, 35–40 minutes. Leaving around 08:15 makes the first bus with a margin.", place: "Minoh-Kayano Station" },
      { t: { k: "exact", v: "09:00" }, name: "Bus 30 to Katsuō-ji", detail: "The first weekday bus. After it they run every 30 minutes until 15:00, about 20 minutes up the hill.", place: "Minoh-Kayano Station" },
      { t: { k: "approx", v: "09:20" }, name: "Katsuō-ji", detail: "The daruma temple. It opens at 08:00, and early is the point — later in the day there are queues for photos with the daruma.", saved: "p-katsuoji" },
      { t: { k: "seq" }, name: "Taxi to Dainichi car park", detail: "Taxis wait at the temple bus stop and there are none at the falls end, which is why the temple comes first. About five minutes, roughly ¥1,300 by one visitor's count in October 2025. The alternative is walking along the road, which that visitor calls dangerous.", place: "Dainichi Parking Lot, Minoh" },
      { t: { k: "seq" }, name: "Minoh Falls", detail: "Ten to fifteen minutes on foot down from the car park.", saved: "p-minoh" },
      { t: { k: "seq" }, name: "Walk down the gorge", detail: "About 2.8 km beside the river, downhill all the way to Hankyū Minoh station.", place: "Minoh Station" },
      { t: { k: "part", v: "afternoon" }, name: "Back into the city", detail: "Hankyū to Umeda, about 30 minutes. grenier is in Kitahama if Noa did not get there yesterday." },
      { t: { k: "part", v: "evening" }, name: "Dinner near the hotel", detail: "Back to Namba for the evening, with Hōzenji Yokochō's lantern alley a couple of minutes away. Tonight is also when we check tomorrow's Kibune plan." }
    ],
    alts: [
      { title: "Taxi up for the 08:00 opening", when: "If we want the temple empty", body: "A taxi from Minoh-Kayano instead of the 09:00 bus. We have not checked that fare." }
    ],
    logistics: ["w-luggage"],
    saved: ["p-katsuoji", "p-minoh", "p-grenier"]
  },

  {
    id: "d07", date: "2026-10-07", dow: "Wed", dest: "kyoto",
    title: "Osaka → Kurama → Kibune → Kyoto",
    route: [
      { name: "Namba" },
      { name: "Demachiyanagi", via: "Metro + Keihan Ltd Exp · ~1h20", mode: "train" },
      { name: "Kurama", via: "Eizan line · ~30 min", mode: "train" },
      { name: "Kibune", via: "Over the mountain on foot", mode: "walk" },
      { name: "Gion", via: "Bus 33 · Eizan · Keihan", mode: "train" }
    ],
    plan: [
      { t: { k: "exact", v: "08:00" }, name: "Check out of Meander", detail: "Cabin trolleys only — the suitcases are already at MIRU.", wallet: "w-meander" },
      { t: { k: "seq" }, name: "Namba → Yodoyabashi → Demachiyanagi", detail: "Midōsuji line, then the Keihan limited express to the end of the line. Arrive 09:30–10:00.", place: "Demachiyanagi Station Kyoto" },
      { t: { k: "approx", v: "10:00" }, name: "Lockers at Demachiyanagi", detail: "Leave the trolleys. The day comes back through here.", place: "Demachiyanagi Station Kyoto" },
      { t: { k: "approx", v: "10:20" }, name: "Eizan line to Kurama", detail: "Stay on to the last stop — not Kibuneguchi. The maple tunnel is on the way.", place: "Kurama Station Kyoto" },
      { t: { k: "approx", v: "10:40" }, name: "Kurama-dera", detail: "Up through the Niōmon gate and the forest to the Main Hall. On foot; the cable car only if the weather or our legs say otherwise.", place: "Kurama-dera Temple Kyoto" },
      { t: { k: "seq" }, name: "Over the mountain to Kibune", detail: "40 minutes brisk, about an hour taking it slowly. One way — we do not come back over.", place: "Kurama to Kibune hiking trail" },
      { t: { k: "part", v: "afternoon" }, name: "Kifune Shrine", detail: "The red lantern steps, then the water fortunes.", place: "貴船神社" },
      { t: { k: "seq" }, name: "Lunch by the stream", detail: "Food or coffee in the village, then wander. Not a checklist." },
      { t: { k: "approx", v: "16:30" }, name: "Bus 33 back to Kibuneguchi", detail: "Eizan to Demachiyanagi, collect the trolleys, Keihan to Gion-Shijo.", place: "Kibuneguchi Station Kyoto" },
      { t: { k: "approx", v: "17:30" }, name: "MIRU Kyoto Gion", detail: "Check in and stop for a while.", wallet: "w-miru" },
      { t: { k: "part", v: "evening" }, name: "Gion Shirakawa and the Kamo", detail: "The canal, Furumonzen, then the riverbank around Sanjō.", place: "Gion Shirakawa Kyoto" },
      { t: { k: "seq" }, name: "Dinner · Ibushi-dori Ichika", detail: "Booked — time to confirm. Smoked-chicken yakitori in a machiya near Kyoto City Hall, not far from the Sanjō end of the evening walk. All chicken — for Noa, just ask about the wontons and the ground-meat omelette.", saved: "p-ichika" }
    ],
    logistics: ["w-miru", "w-luggage", "w-ichika"],
    saved: ["p-ichika", "p-gansan", "p-2050", "p-365", "p-alchemist", "p-ing"]
  },

  {
    id: "d08", date: "2026-10-08", dow: "Thu", dest: "kyoto",
    title: "Eastern Kyoto, north to south",
    route: [
      { name: "Hōnen-in" },
      { name: "Eikandō", via: "Philosopher's Path on foot", mode: "walk" },
      { name: "Gion", via: "South through Gyōjabashi", mode: "walk" }
    ],
    plan: [
      { t: { k: "exact", v: "07:00" }, name: "Check out of MIRU", detail: "They would not link the two bookings, so we check out and back in. Pack the night before.", wallet: "w-miru" },
      { t: { k: "exact", v: "07:30" }, name: "Hōnen-in", detail: "The moss gate and the courtyard before the area fills. Courtyard entry is free.", place: "Honen-in Kyoto" },
      { t: { k: "seq" }, name: "Philosopher's Path", detail: "A stretch of it walking south. We are not adding Ginkaku-ji just because it is close.", place: "Philosophers Path Kyoto" },
      { t: { k: "approx", v: "09:00" }, name: "Eikandō", detail: "The one temple of the day, around opening time. Open 09:00–17:00, last entry 16:00, ¥1,000 — the special autumn exhibition only starts in November.", place: "Eikando Zenrinji Kyoto" },
      { t: { k: "approx", v: "11:30" }, name: "Lunch · Hinode Udon", detail: "Early, a little before it opens. No reservations and cash only — the whole day is built around getting here.", saved: "p-hinode" },
      { t: { k: "seq" }, name: "Nanzen-ji and the aqueduct", detail: "Optional. Only if there is time and appetite left after Eikandō.", place: "Nanzenji Suirokaku Kyoto" },
      { t: { k: "seq" }, name: "Gyōjabashi", detail: "The narrow stone bridge over the Shirakawa near Higashiyama station — not the one over the Kamo.", saved: "p-gyojabashi" },
      { t: { k: "seq" }, name: "Furumonzen into Gion", detail: "Working down towards the river, with time for coffee and the hotel." },
      { t: { k: "exact", v: "20:00" }, name: "Dinner · BIGOLI", detail: "Booked. The bolognese specialist near Shijō-Karasuma, which turns into a wine bar at night — flat-rate wine by the half hour, and the food is just their pastas, prosciutto, cheese and nuts. For Noa: their own bolognese lists pork among its ingredients, so ask them beforehand what she can eat.", saved: "p-bigoli" }
    ],
    logistics: ["w-miru", "w-bigoli"],
    saved: ["p-bigoli", "p-hikiniku", "p-brulee", "p-uru", "p-panel"]
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
      { t: { k: "approx", v: "16:30" }, name: "Gujō Hachiman", detail: "About 2h15 from Ōmi-Hachiman on the expressways, arriving with about an hour of daylight — sunset is 17:26. The water lanes, then dinner: Daikokuya for wagyu yakiniku if we book it, and Pizzeria Gonza is the real backup.", saved: "p-daikokuya" },
      { t: { k: "seq" }, name: "Fairfield, Gujō-Yamato", detail: "About fifteen minutes north of the old town.", wallet: "w-fairfield" }
    ],
    alts: [
      { title: "The west shore instead", when: "If we want the water rather than the towns", body: "Ukimido at Katata, the temple hall standing in the lake (¥300), then Shirahige Shrine's torii in the water. Photograph it from the viewing deck in front of the shrine office and never cross Route 161 for it — someone was killed doing that in 2021. About the same amount of driving." },
      { title: "Straight to Gujō", when: "If it rains, or we are tired", body: "Kyoto to Gujō Hachiman direct is about 180 km and 2h40, which leaves the whole afternoon in town." }
    ],
    logistics: ["w-corolla", "w-fairfield"],
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
    saved: ["p-t-nakameguro", "p-yamada", "p-goodmorning"]
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
   Leave at least half a day genuinely free twice across the five nights. */
export const clusters = {
  tokyo: [
    {
      id: "c-yanaka", star: true,
      title: "Yanaka → Ueno",
      when: "Midweek, morning through evening",
      body: "Nezu and Yanaka, through the back lanes and the cemetery, into Ueno Park, then Ueno itself. The walk between them is the point — do not replace it with a train. Time the day so it ends at Ameyoko and Okachimachi: cheap izakaya, yakitori, street food and a local racket. Sensō-ji at 07:00–08:00 can start the day if it happens, but only then."
    },
    {
      id: "c-west", star: true,
      title: "West Tokyo",
      when: "A full day",
      body: "Yoyogi-Uehara for a quiet morning and coffee, then Shimokitazawa as the anchor of the day, then Harajuku, Cat Street and Omotesandō for shopping, closing in Shibuya in the evening. Do not bolt Daikanyama and Nakameguro onto this — they are their own cluster."
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
      id: "c-central",
      title: "Ginza and shopping",
      when: "An excellent rainy day",
      body: "Ginza plus whatever Noa has collected from TikTok and Instagram, konbini hunting and the department stores. Deliberately unstructured."
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
