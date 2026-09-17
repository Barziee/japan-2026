/* Know before you go.

   These are the researched findings, kept as facts and decisions rather than
   travel prose. Today shows the two or three most relevant for the day and
   links to the rest; the day page shows all of them.

   kind drives the small leading glyph and nothing else:
     route · transport · timing · warning · culture · food · parking · weather
   `day` scopes a note to one date, `dest` to a whole destination, `trip` to
   the whole thing. `lead: true` marks the ones worth surfacing on Today. */

export const notes = [
  /* ---------------- trip-wide ---------------- */
  {
    id: "n-pork", kind: "food", trip: true, lead: true,
    title: "Noa does not eat pork, and Japan makes that hard",
    body: "Most ramen is tonkotsu, and chāshū, gyoza and plenty of otherwise neutral broths carry pork too. A non-pork broth does not guarantee a non-pork topping, so ask about both. Two Osaka answers that work: Gyukotsuo on beef bone and MAREN on chicken — verify the chāshū at each. Ramen Nishiki in Kyoto is unverified on both counts."
  },
  {
    id: "n-knives", kind: "warning", trip: true,
    title: "Knives fly checked",
    body: "Anything bought at Tower Knives or Seki goes in the hold on the way home, never in the cabin."
  },
  {
    id: "n-matsumoto-dinners", kind: "warning", trip: true,
    title: "Matsumoto dinners are the urgent one",
    body: "Three evenings on 10, 11 and 12 Oct are still open. The city is hard to walk into without a booking, and we land on a long weekend plus Sports Day plus the soba festival. Act around 8–12 Sep — do not assume availability."
  },

  /* ---------------- 4 Oct · arrival ---------------- */
  {
    id: "n-arrival", kind: "transport", day: "d04", lead: true,
    title: "KIX to Namba is about 50 minutes",
    body: "Train or airport limousine. Nankai Namba is the station you arrive into and the one you walk from all week."
  },
  {
    id: "n-firstnight", kind: "timing", day: "d04", lead: true,
    title: "Keep the first evening light",
    body: "Dinner is booked at TORA鶏YA at 19:30, a short walk from the hotel, with a two-hour table and Hōzenji next door. After a fourteen-hour door-to-door day that is the right size of evening."
  },

  /* ---------------- 5 Oct · the neighbourhoods ---------------- */
  {
    id: "n-city-day", kind: "route", day: "d05", lead: true,
    title: "Tokito first, then a loop north",
    body: "Tokito opens at 11:00, about a kilometre from Kuromon. From the castle it is all walking: along the river to Kitahama, over it and up Tenjinbashisuji to Nakazakichō, then Umeda. No single walk is much over two kilometres. Yodobashi is the last stop up north, then the Midosuji line runs three stops south to Shinsaibashi for dinner at 20:30."
  },
  {
    id: "n-monday", kind: "warning", day: "d05",
    title: "It is a Monday",
    body: "Osaka Castle's keep is open, but Nishinomaru Garden in the same grounds is not. grenier is open every day."
  },

  /* ---------------- 6 Oct · Katsuō-ji and Minoh ---------------- */
  {
    id: "n-minoh-order", kind: "route", day: "d06", lead: true,
    title: "Temple first, then down",
    body: "Taxis wait at Katsuō-ji and there are none at the falls, so this order is the reliable one: bus up to the temple, taxi across to the car park above the falls, then walk down the gorge to the station. The advice comes from someone who did it the other way round, walked up to the car park in the rain, and only got to the temple because a taxi happened to drop someone off."
  },
  {
    id: "n-minoh-bus", kind: "transport", day: "d06", lead: true,
    title: "The first bus is 09:00",
    body: "Bus 30 from Minoh-Kayano runs every 30 minutes on weekdays, 09:00 to 15:00. Some English guides still say every one to two hours; the current timetable says otherwise. The Midosuji line runs through from Namba to Minoh-Kayano, so there is no change of train."
  },
  {
    id: "n-minoh-colour", kind: "timing", day: "d06",
    title: "Minoh is green in early October",
    body: "The colour here peaks around late November. We walk the gorge for the gorge, not the leaves."
  },

  /* ---------------- 7 Oct · Kurama → Kibune ---------------- */
  {
    id: "n-kurama-hours", kind: "timing", day: "d07", lead: true,
    title: "Kurama-dera closes at 16:15",
    body: "Open 09:00–16:15, all year. Reaching Kurama by 10:15–10:30 is what makes the crossing unhurried — the whole route including a café stop runs 4–5 hours."
  },
  {
    id: "n-kurama-direction", kind: "route", day: "d07", lead: true,
    title: "Enter from the Kurama side, and do not get off early",
    body: "Stay on the Eizan line to the last stop. Climbing from Kurama through the temple grounds and descending into Kibune is one way — we do not walk back over the mountain. The descent alone is 40 minutes brisk, about 60 taking photographs."
  },
  {
    id: "n-lockers", kind: "transport", day: "d07", lead: true,
    title: "Lockers at Demachiyanagi, Gion-Shijo as backup",
    body: "Demachiyanagi is both the end of the Keihan run and the start of the Eizan line, so the day returns there anyway. If the lockers are full, Gion-Shijo is one stop earlier on the same line — stash on the way in and collect on the way to the hotel."
  },
  {
    id: "n-luggage", kind: "warning", day: "d07",
    title: "Suitcases travel without us",
    body: "Forwarded from Meander to MIRU on 5–6 Oct. Confirm MIRU will receive and store them before sending. On the 7th we carry cabin trolleys only."
  },
  {
    id: "n-kibune-season", kind: "timing", day: "d07",
    title: "Green, not red, and no river platforms",
    body: "Kyoto's colour is mid-November. The kawadoko dining platforms over the stream come down at the end of September, so on 7 Oct Kibune is green and the restaurants are indoors."
  },
  {
    id: "n-kibune-scope", kind: "route", day: "d07",
    title: "Kibune is not a checklist",
    body: "The shrine, the lantern steps, the water fortunes, food by the stream, and then wandering. Treat the walk and the temple grounds as the day rather than another site to tick."
  },
  {
    id: "n-teamlab", kind: "route", day: "d07",
    title: "teamLab is off this day",
    body: "Biovortex was the rainy-day alternative to Kibune, not an addition to it. It stays an open option for another slot; do not buy tickets for the 7th."
  },
  {
    id: "n-momiji-tunnel", kind: "culture", day: "d07",
    title: "The maple tunnel is on the ride",
    body: "The Eizan line passes through it on the way to Kurama. It is famous lit up in autumn, which is later than we are there — but you go through it either way."
  },

  {
    id: "n-arrival-noplan", kind: "route", day: "d04",
    title: "Everything today is on foot",
    body: "Dōtonbori is a few minutes from the hotel and Shinsaibashi about a kilometre further, so nothing today needs a train, and the only booking is dinner. Yodobashi Camera has no store in Namba — it is in Umeda, so it is on tomorrow's route. Bic Camera is its Namba rival if we want electronics today."
  },

  /* ---------------- 8 Oct · East Kyoto ---------------- */
  {
    id: "n-honenin", kind: "timing", day: "d08", lead: true,
    title: "Hōnen-in at 07:30, before anyone",
    body: "The moss gate and the courtyard are free to enter and empty that early. This is the reason the day starts north and works south."
  },
  {
    id: "n-hikiniku-risk", kind: "food", day: "d08",
    title: "Hikiniku: the morning line",
    body: "Closed Wednesdays, so the 8th is the only night. Tickets are handed out at the door from about 09:00, earlier on busy days — Reddit reports 08:30 to 08:35. In 2026 people found 40 in line by 08:34, and one person in line at 08:30 got nothing. From 08:15 to 08:30 on weekdays, some still got dinner. But twice, people in line at 07:45 were offered lunch only, because dinner had already gone online. Expect 40 to 45 minutes in line. One of us can probably hold the place, but both must be there at the table time, and more than 10 minutes late cancels it. The time on the ticket is not a seat — there is more waiting, and the Waiting Bar upstairs is the place to do it. Cashless only. The beef is 100%, which works for Noa."
  },
  {
    id: "n-eastkyoto-order", kind: "route", day: "d08", lead: true,
    title: "North to south, one temple only",
    body: "Hōnen-in, a stretch of the Philosopher's Path, then Eikandō around opening. We are not adding Ginkaku-ji just because it is close."
  },
  {
    id: "n-room-change", kind: "warning", day: "d08", lead: true,
    title: "Check out and back in this morning",
    body: "MIRU refused to link the two bookings, so we pack on the evening of the 7th and check out before leaving. They will move the luggage. This is why the day starts at 07:00 rather than 07:30."
  },
  {
    id: "n-hinode", kind: "food", day: "d08", lead: true,
    title: "Hinode Udon is cash only, no bookings",
    body: "Nanzenji Kitanobōchō 36. Arrive a little before it opens. The whole shape of this day is built around getting there at the right time, so check its hours and closing days before relying on it."
  },
  {
    id: "n-gyojabashi", kind: "route", day: "d08",
    title: "Gyōjabashi crosses the Shirakawa",
    body: "The narrow stone bridge near Higashiyama station, not the one over the Kamo. It is a common mix-up."
  },
  {
    id: "n-kyoto-dropped", kind: "route", day: "d08",
    title: "What we deliberately left out",
    body: "Fushimi Inari and Arashiyama are off this day, Ginkaku-ji is not added just because it is next to the path, and Kiyomizu-dera came off the arrival day. Eikandō is the one temple."
  },

  /* ---------------- 9 Oct · Kyoto → Seki → Gujō ---------------- */
  {
    id: "n-car-pickup", kind: "transport", day: "d09", lead: true,
    title: "Car between 09:00 and 09:30, on the road by 09:45",
    body: "Toyota Rent a Car, Sanjo Keihan-Kita, 11-2 Magohashichō, Sakyō-ku. Paperwork, the ETC card and loading the boot all take time, so plan the day from 09:45 rather than from the booking slot. Kyoto to Seki is 147.5 km and 2h14, which puts us at the Cutlery Hall around noon."
  },
  {
    id: "n-mino-free", kind: "route", day: "d09", lead: true,
    title: "Mino costs one kilometre and three minutes",
    body: "Via Mino the day is 185.0 km and 2h47; straight past it, 184.0 km and 2h44. It sits directly on the Seki-to-Gujō line, so this is never a routing decision — it is only whether we would rather spend 75 minutes there or 75 more minutes in Gujō."
  },
  {
    id: "n-mino-lunch", kind: "food", day: "d09",
    title: "Where to eat in Mino, and what to avoid",
    body: "Yamamizu Honten is the proper option — a Taishō-era udon and teishoku place with its own parking, 11:00–14:30, closed Wednesdays, so open on our Friday. HAPPA STAND is the lighter version, tea in a renovated machiya, 8:00–15:00. Do not aim for みのカフェ makana: it closes on Fridays, which is the day we are there."
  },
  {
    id: "n-seki", kind: "culture", day: "d09", lead: true,
    title: "Seki is the knife stop",
    body: "Seven centuries of blade-making, and it is directly on the route. The second and last knife opportunity after Tower Knives in Osaka."
  },

  {
    id: "n-seki-hall", kind: "culture", day: "d09",
    title: "Cutlery Hall, not the sword museum",
    body: "岐阜関刃物会館 is open 9:00–17:00, closed only over New Year, with about 100 parking spaces. It is a direct sales hall carrying the Seki factories' output — right if the point is to buy. The sword museum next door only runs forging demonstrations on set dates, usually the first Sunday, so a Friday is unlikely to have one."
  },
  {
    id: "n-gujo-light", kind: "timing", day: "d09", lead: true,
    title: "Either way there is real daylight in Gujō",
    body: "Sunset is around 17:20. Stopping in Mino puts us in Gujō about 14:40, which still leaves two and a half hours; going straight there lands about 13:20 and gives nearly four. If anything runs long, Mino is the thing to drop — daylight in Gujō is what the early start was for."
  },
  {
    id: "n-gujo-known", kind: "route", day: "d09",
    title: "We have been here before",
    body: "So there is no checklist. Canals, the water lanes, the streets above the river, coffee if we want it. The castle only if it happens to fit, and Monet's pond stays off — it costs daylight in the town we actually came for."
  },

  /* ---------------- 10 Oct · Atera Gorge ---------------- */
  {
    id: "n-atera-cars", kind: "parking", day: "d10", lead: true,
    title: "Private cars are allowed in on 10 October",
    body: "Ōkuwa village restricts vehicles between the gorge entrance and the campground in high summer. For 2026 that ran 18 July to 6 September, plus 12–13 September and 19–23 September. Our date sits well outside all of it, so we drive in and park at Akahiko rather than paying ¥1,000 and taking the shuttle. The village publishes this each year, so confirm it nearer the time."
  },
  {
    id: "n-atera-walk", kind: "route", day: "d10", lead: true,
    title: "Park at Akahiko and walk from there",
    body: "From the Akahiko monument car park it is about 15 minutes to Tanuki-ga-fuchi and around 30 to Unarijima, with the Nakahatchō suspension bridge looking back down the valley. Turning around there makes a comfortable two hours with real time by the water. Kumaga-fuchi and Ushiga-fuchi are further up the car road — reachable, but they mean driving deeper into the forest for diminishing returns."
  },
  {
    id: "n-atera-water", kind: "warning", day: "d10", lead: true,
    title: "Feet in, maybe. Do not assume it is swimmable",
    body: "This is a mountain stream in October and it will be cold. Wet granite is slippery, and pools that look still can be moving underneath. Check recent rainfall, the water level and any local advisory on the day, keep to shallow edges, and stay out of anything deep or fast. Treat a dip as a bonus that might not happen."
  },
  {
    id: "n-atera-timing", kind: "timing", day: "d10",
    title: "There are about two hours of slack in this day",
    body: "Gujō to the gorge is 1h30 and the gorge to Matsumoto is 1h36, so even with two hours of walking and a proper lunch we reach Matsumoto by mid-afternoon. Nothing here needs rushing, and dinner is deliberately at 19:30."
  },
  {
    id: "n-atera-saturday", kind: "timing", day: "d10",
    title: "A Saturday, and the start of a long weekend",
    body: "Sports Day falls on the Monday, so the 10th is the front of a three-day weekend. The colour at Atera peaks later in October, which should keep the crowd down, but arriving around 09:00 is still the difference between having the water to ourselves and sharing it."
  },
  {
    id: "n-takayama", kind: "route", day: "d10",
    title: "This route already avoids Takayama",
    body: "The festival is on 9–10 Oct and the old fast line to Matsumoto passed 400 m from the centre. Gujō to Atera on Routes 256 and 257 stays 40 km clear of it, so the problem solves itself."
  },
  {
    id: "n-narai-cheap", kind: "route", day: "d10",
    title: "Narai costs two minutes",
    body: "Going Gujō–Atera–Narai–Matsumoto is 198.4 km against 198.1 direct, because Narai sits on the road north anyway. So it is never a driving decision — only whether we want another hour on our feet after the gorge."
  },

  /* ---------------- 11 Oct · the big nature day ---------------- */
  {
    id: "n-kamikochi-cars", kind: "parking", day: "d11", lead: true,
    title: "Private cars cannot enter Kamikōchi",
    body: "Park at Sawando and take the shuttle in. The buses are not reserved — you turn up and board. Reservations only apply to the long-distance coaches from Tokyo and Osaka, which we are not using."
  },
  {
    id: "n-kamikochi-season", kind: "timing", day: "d11", lead: true,
    title: "Colour peaks around mid-October",
    body: "We are right in the window. Decide the night before on the forecast — this is the day worth spending the good weather on."
  },
  {
    id: "n-senjojiki", kind: "transport", day: "d11",
    title: "Senjōjiki is the same shape of day",
    body: "Park at Suganodai (¥500/day), bus about 40 minutes, then eight minutes of ropeway to 2,612 m. The cirque has a flat loop at the top, so it works without committing to the climb. Two catches: peak autumn means hour-plus ropeway queues, and snow starts falling again mid-October."
  },

  /* ---------------- 12 Oct · Matsumoto ---------------- */
  {
    id: "n-matsumoto-book", kind: "food", day: "d10", lead: true,
    title: "Book the dinners through Jujo",
    body: "Jujo is a ryokan and its staff routinely book the good restaurants in town, including ones that take no online reservations. Email them with all three evenings. Then TableCheck or the restaurant's own site, then Tabelog filtered by area and open-on-date, then the phone — which Jujo will also dial for you. For the 10th ask explicitly for 19:30–20:00: we arrive around 17:00–18:00 after three hours of walking and three of driving, and want a shower first."
  },
  {
    id: "n-matsumoto-evenings", kind: "food", day: "d11",
    title: "What each evening wants to be",
    body: "The 11th is the special one — Shinshu beef as yakiniku or steak, or a light kaiseki — and it is the hardest to get, so book it first. The 12th wants good soba, which Matsumoto is known for, or an izakaya doing Shinshu plates: basashi, mountain vegetables, local sake. Some soba places close in the afternoon or at weekends, so confirm the evening specifically."
  },
  {
    id: "n-sportsday", kind: "warning", day: "d12", lead: true,
    title: "Sports Day and the soba festival, both",
    body: "The festival runs 10–12 Oct in the castle park and the 12th is a national holiday. The city, the parking and the restaurants are full on exactly our nights."
  },
  {
    id: "n-castle-timing", kind: "timing", day: "d12", lead: true,
    title: "Castle before the midday peak",
    body: "Then Nawate, then Nakamachi, then a real break. This is a slow day, not a march."
  },
  {
    id: "n-tsubame-monday", kind: "warning", day: "d12",
    title: "Tsubame Onsen is shut on Mondays",
    body: "The free open-air baths close exactly on the day we could otherwise have used them."
  },

  /* ---------------- 13 Oct · to Gotemba ---------------- */
  {
    id: "n-carswap", kind: "warning", day: "d13", lead: true,
    title: "The car swap is booked for 14:30 and this route lands at 16:15",
    body: "Both rentals are timed to 14:30 at Gotemba — the Corolla back and the GR Yaris out. Going via the western lakes gets us there closer to 16:15, so something has to give. Moving both bookings to about 16:30 is one phone call; the alternative is dropping Tanuki and cutting Shiraito short, which takes the point out of the day. Sort it well before the 13th, not on the morning."
  },
  {
    id: "n-carswap-order", kind: "transport", day: "d13",
    title: "Three jobs in one stop",
    body: "Bags into edit×seven first, then the Corolla back, then the Yaris out. Doing it in that order means never carrying luggage that does not fit the car we are picking up."
  },
  {
    id: "n-d13-route", kind: "route", day: "d13", lead: true,
    title: "Two hours to the first lake, then it is all short hops",
    body: "Matsumoto to Tatego-hama is 125.9 km and about two hours — the long leg is done before the day really starts. After that: Shōji to Motosu is nine minutes, Motosu to Shiraito twenty, Shiraito to Tanuki ten, Tanuki to Gotemba fifty. The whole day with every stop is 212 km and about 3h30 of driving."
  },
  {
    id: "n-d13-lunch", kind: "food", day: "d13", lead: true,
    title: "Eat properly, and early",
    body: "Leaving at 07:00 means real hunger by 11:00. Three candidates sit on the route: Hiraishiya for Fujinomiya yakisoba right beside Otodome, the Asagiri Food Park buffet on Route 139 for local dairy, and Masu no Ie for trout raised in Fuji spring water. None needs a booking. All three need their Tuesday hours confirmed nearer the time — nothing here is locked in."
  },
  {
    id: "n-d13-nakanokura", kind: "route", day: "d13",
    title: "Not the ¥1,000-note climb",
    body: "The exact banknote angle is from Nakanokura Pass, which is a solid uphill walk and over an hour of the day. We want the easy shore view near Kōan instead — same lake, same mountain, no climb."
  },
  {
    id: "n-d13-kawaguchiko", kind: "route", day: "d13",
    title: "West of the mountain, not east",
    body: "Kawaguchiko is deliberately not on this route. The western lakes flow naturally into Asagiri and Shiraito; going east would add distance and put us in the busiest part of the Five Lakes for no gain."
  },
  {
    id: "n-yaris-boot", kind: "warning", day: "d13",
    title: "The suitcases do not fit the Yaris",
    body: "They stay at the hotel for the two Fuji days, which is why the bags go into edit×seven before the swap rather than after."
  },

  /* ---------------- 14 Oct · west Izu ---------------- */
  {
    id: "n-izu-shape", kind: "route", day: "d14", lead: true,
    title: "Four stops, and the driving is the point",
    body: "Forest and waterfall, local coffee, wild coast, mountain pass at sunset. 220 km and about 4h10 measured — plan on five hours behind the wheel, because Izu's roads wind and the routing engine does not price that in."
  },
  {
    id: "n-izu-return", kind: "route", day: "d14", lead: true,
    title: "Come home the long way over the ridge",
    body: "Two routes were measured. The direct one drops off the ridge to Route 136 and the expressway: 75.1 km, 1h12. Staying on the Nishi-Izu Skyline to Darumayama and descending to Shuzenji is 81.7 km, 1h21. Nine minutes for a wider road after dark, and neither doubles back down the climb we came up."
  },
  {
    id: "n-izu-sunset", kind: "timing", day: "d14", lead: true,
    title: "Sunset 17:16 at the pass, golden hour from 16:16",
    body: "Computed for the pass itself at 897 m with a sea horizon west; 17:12 down at sea level. Arriving 16:15–16:30 lands exactly on the start of the good light rather than chasing the end of it."
  },
  {
    id: "n-izu-coast", kind: "route", day: "d14",
    title: "Koganezaki over Dōgashima",
    body: "Koganezaki peaks exactly when we are there — the rock is propylite and turns gold in afternoon light, which is what the name says. Volcanic, free, and 15 minutes below the pass against Dōgashima's 21. Dōgashima's draw is the tombolo out to Sanshirojima, and local sources suggest the daytime low between October and February does not uncover it — but the town's own page just points at a tide table, so treat that as unconfirmed for the 14th rather than settled. Either way it sits on Route 136 going north, so a short viewpoint stop costs nothing."
  },
  {
    id: "n-izu-roads", kind: "warning", day: "d14",
    title: "Roads to know about",
    body: "Avoid 旧天城トンネル, the old Amagi tunnel — a single-lane gravel road that navigation apps offer as a tourist route. The correct crossing is the new tunnel on Route 414. The cross-peninsula leg uses prefectural road 15 over the Basara pass: winding, but a proper two-lane road, and we take it in daylight. The climb to the pass is the one narrow, steep stretch of the day and we go up it at 15:55 in full light. Check closures beforehand on 0558-76-5718."
  },
  {
    id: "n-izu-hodohodo", kind: "parking", day: "d14",
    title: "Four parking spaces at HODOHODO",
    body: "Open 10:00–16:30 and closed Mondays; the 14th is a Wednesday. Irregular closures are only announced on Instagram."
  },

  {
    id: "n-izu-decide", kind: "timing", day: "d14", lead: true,
    title: "This one is decided the night before",
    body: "West Izu starts at 07:45 and is locked to a 17:16 sunset, so it cannot be chosen at 10:00 over breakfast. On the evening of the 13th: check HODOHODO is open on Instagram, check Izu road closures, and check the west-coast forecast. In fog there is no reason to go up to the pass — switch to Shuzenji or Hakone, which stay morning decisions."
  },
  {
    id: "n-fuji-mornings", kind: "weather", dest: "fuji", lead: true,
    title: "Fuji is a mountain of mornings",
    body: "It shows early and hides by afternoon. Sunrise is about 05:50 and sunset 17:00–17:05, so there are roughly eleven hours of light. Check Windy, tenki.jp and the Kawaguchiko live cameras the evening before and again on waking."
  },
  {
    id: "n-fuji-parking", kind: "parking", dest: "fuji",
    title: "The good viewpoints have paid car parks that fill",
    body: "Ōishi Park, Oshino and Panorama-dai all fill on a fine morning and at weekends. Early or not at all. Hotel parking at edit×seven still needs confirming."
  },

  /* ---------------- 15 Oct · to Tokyo ---------------- */
  {
    id: "n-yaris-return", kind: "transport", day: "d15", lead: true,
    title: "Yaris back at 14:30, tank full of high-octane",
    body: "One last eastern viewpoint in the morning if the mountain is showing. Gotemba to Tokyo is about 1:30–1:45."
  },

  /* ---------------- Tokyo ---------------- */
  {
    id: "n-tokyo-clusters", kind: "route", dest: "tokyo", lead: true,
    title: "One cluster a day, and never two",
    body: "The day-by-day Tokyo plan was dropped. Clusters are not assigned to dates — we pick one each morning for the weather, our energy, a booking or whatever is playing. Leave at least half a day genuinely free twice across the five nights."
  },
  {
    id: "n-tokyo-classic", kind: "timing", dest: "tokyo",
    title: "The famous ones, early or midweek only",
    body: "Meiji Jingū and Sensō-ji are worth it at 07:00–08:00 or on a weekday, and not otherwise. Bar has done Tokyo before; this is Noa's first time, so a measured taste of the classic city is the point rather than the whole trip."
  },
  {
    id: "n-tokyo-rain", kind: "weather", dest: "tokyo",
    title: "Wet-day clusters",
    body: "Nakano Broadway, Ginza, T-Site and the live houses in Kōenji and Shimokitazawa are all under cover."
  },
  {
    id: "n-kappabashi", kind: "route", dest: "tokyo",
    title: "Kappabashi is off the list",
    body: "Dropped deliberately — the kitchenware street stopped being interesting to us."
  },
  {
    id: "n-tokyo-lastnight", kind: "food", dest: "tokyo",
    title: "The last dinner is booked: T, 19 Oct at 20:30",
    body: "Wagyu T-bone in Nakameguro. The flight home is not until 18:00 on the 20th, so a late dinner costs nothing."
  },
  {
    id: "n-departure", kind: "timing", day: "d20", lead: true,
    title: "NRT 18:00 — leave Tokyo around 14:30",
    body: "An easy morning near the hotel, nothing that needs a train across the city."
  },
  {
    id: "n-namba-local", kind: "culture", dest: "osaka",
    title: "Why Namba is the right base",
    body: "From a local: Umeda is the city centre, but Naniwa-ku is where Osaka actually happens, and Namba is the neighbourhood everyone loves. The food is better and things are cheaper, so the move is to spend less on the hotel and more on dinner, which is what we have done. His real advice is the unstructured kind though: walk the area at night and sit down at whatever corner restaurant looks quiet, because the food is better than it looks. Even the Glico sign is closer from here than from Umeda, a short walk or one stop on the metro."
  },
  {
    id: "n-kuromon-sunday", kind: "timing", day: "d04",
    title: "Kuromon is shut on arrival day",
    body: "Sunday is the market's regular holiday and 4 Oct is a Sunday, so Kuromon moves to Monday morning, before we head north. Most stalls close between 16:00 and 17:30 even on trading days, so it is never a late-afternoon plan."
  },
  {
    id: "n-toriki-noa", kind: "food", dest: "osaka",
    title: "At Torikizoku, Noa sticks to the skewers",
    body: "Their allergen table, updated 1 Sep 2026: the tare and the salt contain no pork, and neither does any skewer except the pork belly. Pork is in the signature Toriki karaage, the chicken mayo salad, the chicken hamburg steak, the kids' plates, the chicken paitan noodles, the chicken-salt ramen, the kamameshi, the zosui and the rice set. Of the rice dishes only the two donburi are clear. It is all one kitchen, so shared equipment is possible."
  }
];

export const notesForDay = (dayId, destId) =>
  notes.filter(n => n.day === dayId || (destId && n.dest === destId));

export const leadNotes = (dayId, destId, max = 3) =>
  notesForDay(dayId, destId).filter(n => n.lead).slice(0, max);
