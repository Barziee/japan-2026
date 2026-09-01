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
    title: "Landing, and a soft first day",
    route: [
      { name: "KIX" },
      { name: "Namba", via: "Train or limousine · ~50 min", mode: "train" }
    ],
    plan: [
      { t: { k: "exact", v: "11:40" }, name: "Land at KIX", detail: "Immigration, bags, then the train or airport limousine into the city.", place: "Kansai International Airport" },
      { t: { k: "approx", v: "13:30" }, name: "Meander Osaka", detail: "Drop bags in Namba. Check in when the room is ready.", wallet: "w-meander" },
      { t: { k: "part", v: "afternoon" }, name: "Namba on foot", detail: "No plan beyond getting our bearings and staying awake." },
      { t: { k: "part", v: "evening" }, name: "Ura-Namba and Hōzenji", detail: "Authentic izakaya alleys, less touristy than Dōtonbori. A short taste of Dōtonbori too if we feel like it, then a light meal and an early night.", saved: "p-hozenji" }
    ],
    logistics: ["w-meander", "w-out"],
    saved: ["p-gorichan"]
  },

  {
    id: "d05", date: "2026-10-05", dow: "Mon", dest: "osaka",
    title: "Minoh by day, neighbourhoods by night",
    route: [
      { name: "Umeda" },
      { name: "Minoh", via: "Train · ~30 min", mode: "train" },
      { name: "Katsuō-ji", via: "Bus up the valley", mode: "bus" },
      { name: "Nakazakichō", via: "Back into the city", mode: "train" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Minoh Falls", detail: "Hankyū from Umeda to Minoh-o, about 30 minutes. The gorge trail is an easy paved 2.8 km each way.", saved: "p-minoh" },
      { t: { k: "seq" }, name: "Katsuō-ji", detail: "The daruma temple further up the valley — bus or taxi from the top of the trail.", saved: "p-katsuoji" },
      { t: { k: "part", v: "afternoon" }, name: "Back into the city", detail: "Nakazakichō for coffee and small shops." },
      { t: { k: "part", v: "evening" }, name: "Tenma or Fukushima", detail: "Izakaya hopping. Neither needs booking." }
    ],
    logistics: [],
    saved: ["p-katsuoji", "p-yatt", "p-tenma", "p-fukushima", "p-donchan"]
  },

  {
    id: "d06", date: "2026-10-06", dow: "Tue", dest: "osaka",
    title: "A day we left open",
    flexible: true,
    lead: {
      name: "Stay in Osaka",
      detail: "Nakanoshima, Tenjinbashisuji, Horie — coffee, arcades, small shops.",
      place: "Tenjinbashisuji Shopping Street Osaka"
    },
    plan: [
      { t: { k: "part", v: "afternoon" }, name: "Lunch · Ninjomenya Gyukotsuo", detail: "Beef-bone broth rather than pork.", saved: "p-gyukotsuo" },
      { t: { k: "part", v: "evening" }, name: "Tenma and Don-chan", detail: "Izakaya hopping, ending at Umeda Higashidōri.", saved: "p-tenma" }
    ],
    alts: [
      { title: "Nara, the quiet version", when: "A normal day", body: "Naramachi, the merchant streets, the gardens and Kasugayama forest. Not the deer circuit. About 48 minutes out." },
      { title: "Ine no Funaya", when: "Only on a genuinely clear day", body: "The fishing village built over the water. Roughly three hours each way, so it takes the whole day. There is an organised tour that removes the need for a car." },
      { title: "A wet day in Osaka", when: "If it rains", body: "Kuromon market, the Kaiyukan aquarium, Umeda Sky and the covered shopping at Shinsaibashi are all indoors." }
    ],
    logistics: [],
    saved: ["p-gyukotsuo", "p-maren", "p-tokito", "p-grenier", "p-brooklyn", "p-flag", "p-towerknives"]
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
      { t: { k: "seq" }, name: "Dinner · Yakiniku no GANSAN", detail: "In Pontochō.", saved: "p-gansan" }
    ],
    logistics: ["w-miru", "w-luggage"],
    saved: ["p-gansan", "p-2050", "p-365", "p-alchemist", "p-ing"]
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
      { t: { k: "approx", v: "09:00" }, name: "Eikandō", detail: "The one temple of the day, around opening time.", place: "Eikando Zenrinji Kyoto" },
      { t: { k: "approx", v: "11:30" }, name: "Lunch · Hinode Udon", detail: "Early, a little before it opens. No reservations and cash only — the whole day is built around getting here.", saved: "p-hinode" },
      { t: { k: "seq" }, name: "Nanzen-ji and the aqueduct", detail: "Optional. Only if there is time and appetite left after Eikandō.", place: "Nanzenji Suirokaku Kyoto" },
      { t: { k: "seq" }, name: "Gyōjabashi", detail: "The narrow stone bridge over the Shirakawa near Higashiyama station — not the one over the Kamo.", saved: "p-gyojabashi" },
      { t: { k: "seq" }, name: "Furumonzen into Gion", detail: "Working down towards the river, with time for coffee and the hotel." },
      { t: { k: "part", v: "evening" }, name: "Dinner · Hikiniku to Come", detail: "If the 1 Sep booking landed. Walking distance from MIRU.", saved: "p-hikiniku" }
    ],
    logistics: ["w-miru"],
    saved: ["p-hikiniku", "p-brulee", "p-uru", "p-panel"]
  },

  {
    id: "d09", date: "2026-10-09", dow: "Fri", dest: "gujo",
    title: "Kyoto → Seki → Gujō Hachiman",
    route: [
      { name: "Kyoto" },
      { name: "Seki", via: "Car · knives", mode: "car" },
      { name: "Gujō Hachiman", via: "185 km · 2h44 total", mode: "car" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Short Kyoto morning", detail: "Coffee and out. The driving day starts early." },
      { t: { k: "exact", v: "09:30" }, name: "Pick up the Corolla", detail: "Toyota Rent a Car, Sanjo Keihan-Kita.", wallet: "w-corolla" },
      { t: { k: "approx", v: "11:45" }, name: "Seki Cutlery Hall", detail: "45–60 minutes. A direct sales hall with the output of the Seki factories, which is what we want if the point is to buy.", saved: "p-sekihall" },
      { t: { k: "approx", v: "13:30" }, name: "Gujō Hachiman", detail: "Lunch around 14:00, then a full afternoon of light. Sunset is 17:20, so arriving now buys about three and a half hours.", wallet: "w-fairfield" },
      { t: { k: "part", v: "afternoon" }, name: "Igawa Komichi and the water", detail: "The carp channel behind the houses, the Sōgi-sui spring, Yanaka Mizu-no-Komichi, the alleys and the cafés. The castle only if we feel like it.", saved: "p-igawa" },
      { t: { k: "part", v: "evening" }, name: "Dinner · Daikokuya", detail: "Wagyu yakiniku. Small town, so this needs booking.", saved: "p-daikokuya" }
    ],
    logistics: ["w-corolla", "w-fairfield"],
    saved: ["p-daikokuya", "p-gonza"]
  },

  {
    id: "d10", date: "2026-10-10", dow: "Sat", dest: "matsumoto",
    title: "Gujō → the Kiso valley → Matsumoto",
    route: [
      { name: "Gujō" },
      { name: "Magome", via: "92.2 km · 1h23", mode: "car" },
      { name: "Tsumago", via: "~9 km on the Nakasendō", mode: "walk" },
      { name: "Matsumoto", via: "Bus back to the car, then north", mode: "car" }
    ],
    plan: [
      { t: { k: "exact", v: "06:15" }, name: "Leave Gujō", detail: "Early start. The walk is the fixed point of the day." },
      { t: { k: "exact", v: "08:00" }, name: "Walk Magome → Tsumago", detail: "Park at Magome and walk the easier direction: 600 m up to the 790 m pass, then down to Tsumago at 420 m. About 9 km and three hours with stops. Coffee first only if anything is open — most of Magome opens at 08:30.", place: "Magome-juku" },
      { t: { k: "approx", v: "11:30" }, name: "Lunch in Tsumago", detail: "The first real food since Gujō.", place: "Tsumago-juku" },
      { t: { k: "approx", v: "13:30" }, name: "Bus back to the car", detail: "The last bus is what matters, not the first." },
      { t: { k: "approx", v: "15:15" }, name: "Narai", detail: "Optional. Adds about an hour and a quarter.", place: "Narai-juku" },
      { t: { k: "approx", v: "17:15" }, name: "Matsumoto Jujo", detail: "Around 16:00 if we skip Narai. Arrive gently — dinner is 19:30–20:00.", wallet: "w-jujo" }
    ],
    alts: [
      { title: "Kiso without the walk", when: "Low energy or bad weather", body: "A slow morning in Gujō, Tsumago at 11:00 with lunch, Narai at 14:00, Matsumoto around 16:00." },
      { title: "Straight to Matsumoto", when: "If the day has gone sideways", body: "Still about 3h05 via Kiso, because the fast line passes through Takayama during the festival and we avoid it either way." }
    ],
    logistics: ["w-corolla", "w-jujo"],
    saved: ["p-nakamachi"]
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
      { t: { k: "seq" }, name: "Taishō-ike → Kappa-bashi", detail: "The valley floor walk, flat and slow." }
    ],
    alts: [
      { title: "Senjōjiki Cirque", when: "If Kamikōchi looks crowded or closed", body: "Park at Suganodai (¥500/day), 40 minutes by bus, 8 minutes of ropeway to 2,612 m. A flat loop at the top means you decide up there whether to climb Kisokoma. Expect hour-plus ropeway queues in peak colour, and snow can start mid-October." },
      { title: "Utsukushigahara", when: "Clear but tired", body: "A 2,000 m plateau reached by the scenic Venus Line. All of it from the car if that is the day we are having." },
      { title: "Azumino and Daiō Wasabi", when: "Low energy", body: "Half a day of streams, farms and wasabi fields. The easy option, deliberately." }
    ],
    logistics: ["w-corolla", "w-jujo"],
    saved: ["p-tsubame"]
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
      { title: "Alps Park", when: "Only with good visibility", body: "Worth it for the view across to the Alps, otherwise skip." }
    ],
    logistics: ["w-jujo"],
    saved: ["p-nakamachi", "p-tsubame"]
  },

  {
    id: "d13", date: "2026-10-13", dow: "Tue", dest: "fuji",
    title: "To Gotemba, and a change of car",
    route: [
      { name: "Matsumoto" },
      { name: "Gotemba", via: "171 km · 2h38", mode: "car" },
      { name: "Yamanakako", via: "First Fuji loop", mode: "car" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "Leave Matsumoto early", detail: "One stop at most on the way." },
      { t: { k: "exact", v: "14:30" }, name: "Car swap at Gotemba", detail: "Bags into edit×seven first, then the Corolla back, then the GR Yaris out.", wallet: "w-yaris" },
      { t: { k: "part", v: "afternoon" }, name: "Yamanakako", detail: "One good sunset spot. Not a chase around several lakes.", place: "Lake Yamanaka" }
    ],
    logistics: ["w-corolla", "w-yaris", "w-editseven"],
    saved: []
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
      { name: "Gotemba", via: "98.7 km home via the coast at Toi", mode: "car" }
    ],
    plan: [
      { t: { k: "exact", v: "08:30" }, name: "Leave edit×seven", detail: "Tōmei, then Shin-Tōmei, then Route 136 and Route 414 through the new Amagi tunnel and the loop bridge.", wallet: "w-editseven" },
      { t: { k: "approx", v: "10:05" }, name: "Ō-daru Falls", detail: "One waterfall, forest and river. Not all seven.", saved: "p-odaru" },
      { t: { k: "approx", v: "11:30" }, name: "HODOHODO Base", detail: "Lunch and coffee in Kawazu. Four parking spaces, so it matters when we arrive.", saved: "p-hodohodo" },
      { t: { k: "part", v: "afternoon" }, name: "Across to the west coast", detail: "Route 15 then Route 136. Past Shimoda without stopping. Iwachi and Dōgashima are on the road north if we feel like ten minutes." },
      { t: { k: "approx", v: "14:00" }, name: "Koganezaki", detail: "Golden lava cliffs over Suruga Bay. Free, no ticket, 30–40 minutes.", saved: "p-koganezaki" },
      { t: { k: "exact", v: "16:15" }, name: "Nishina Pass", detail: "Park, walk up, and be there before the light. Sunset is 17:14.", saved: "p-nishina" },
      { t: { k: "approx", v: "17:30" }, name: "Home the long way", detail: "Down to the coast at Toi and north on Route 136. Back around 19:00." }
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
      { name: "Tokyo", via: "Bus or shinkansen · ~1h40", mode: "train" },
      { name: "Kagurazaka", via: "Walk from Iidabashi", mode: "walk" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "One last viewpoint", detail: "Only if the mountain is showing." },
      { t: { k: "exact", v: "14:30" }, name: "Return the GR Yaris", detail: "Fill it with high-octane first.", wallet: "w-yaris" },
      { t: { k: "part", v: "afternoon" }, name: "Metropolitan Edmont", detail: "Check in at Iidabashi.", wallet: "w-edmont" },
      { t: { k: "part", v: "evening" }, name: "Kagurazaka", detail: "Up the main street, then the cobbled side lanes. Bistro or izakaya.", place: "Kagurazaka Tokyo" }
    ],
    logistics: ["w-yaris", "w-edmont"],
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
      { t: { k: "part", v: "evening" }, name: "Dinner · T, Nakameguro", detail: "Wagyu T-bone, and the last dinner in Japan — if the booking landed.", saved: "p-t-nakameguro" }
    ],
    logistics: [],
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
