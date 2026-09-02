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
    body: "Ura-Namba and Hōzenji are five minutes from the hotel. After a fourteen-hour door-to-door day that is the right size of evening."
  },

  /* ---------------- 5 Oct · Minoh ---------------- */
  {
    id: "n-minoh-fixed", kind: "route", day: "d05", lead: true,
    title: "This day is settled",
    body: "Minoh, the waterfall and Katsuō-ji in the morning, then a neighbourhood evening in Nakazakichō, Tenma or Fukushima. Umeda to Minoh is about 30 minutes."
  },
  {
    id: "n-minoh-order", kind: "route", day: "d05",
    title: "Walk up, ride down",
    body: "The waterfall trail climbs gently from the station. Katsuō-ji sits further up the valley and needs the bus."
  },

  /* ---------------- 6 Oct · flexible ---------------- */
  {
    id: "n-day6-open", kind: "route", day: "d06", lead: true,
    title: "Deliberately unplanned",
    body: "5 Oct is already fixed on Minoh, so the only question here is whether we want another trip out at all. If it feels heavy, a city day is not a failure."
  },
  {
    id: "n-ine", kind: "transport", day: "d06",
    title: "Ine is a three-hour commitment each way",
    body: "The fishing village on the water is only worth it on a genuinely clear day, and it eats the whole day."
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
    title: "No attraction list today",
    body: "Drop the bags, walk Namba, eat something light and sleep early. Ura-Namba and Hōzenji are more authentic and far less crowded than Dōtonbori — a short taste of Dōtonbori is enough."
  },
  {
    id: "n-minoh-colour", kind: "timing", day: "d05",
    title: "Minoh is green in early October",
    body: "The colour here peaks around late November. We walk the gorge for the gorge, not the leaves."
  },

  /* ---------------- 8 Oct · East Kyoto ---------------- */
  {
    id: "n-honenin", kind: "timing", day: "d08", lead: true,
    title: "Hōnen-in at 07:30, before anyone",
    body: "The moss gate and the courtyard are free to enter and empty that early. This is the reason the day starts north and works south."
  },
  {
    id: "n-hikiniku-risk", kind: "food", day: "d08",
    title: "Two things to confirm about Hikiniku",
    body: "English sources give its closing day as Wednesday, which would put 7 Oct out and leave the 8th as the only night. It is also card or QR only, no cash. The beef is 100% per the official site, so it works for Noa — some English guides call it a beef-and-pork mince, and that is wrong for this branch. Ask anyway when booking."
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
    title: "Car at 09:30, Sanjo Keihan-Kita",
    body: "Kyoto to Seki to Gujō is 185 km and 2h44 measured. Short Kyoto morning, then go."
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
    title: "Arriving at 13:30 buys three and a half hours of light",
    body: "Sunset in Gujō is around 17:20. That is the whole reason for the early start and for not adding Mino City or Monet's pond — they cost daylight in the town we actually came for."
  },

  /* ---------------- 10 Oct · Kiso valley ---------------- */
  {
    id: "n-takayama", kind: "warning", day: "d10", lead: true,
    title: "Do not route through Takayama",
    body: "The Takayama festival runs 9–10 Oct. The fast line from Gujō passes 400 m from the centre. Avoiding it costs nothing — the Kiso route is about 3h05 either way."
  },
  {
    id: "n-nakasendo", kind: "route", day: "d10", lead: true,
    title: "Magome to Tsumago, not the reverse",
    body: "Park at Magome, walk the easier direction, and take the bus back to the car. About 9 km, climbing at first and then downhill."
  },
  {
    id: "n-nakasendo-bus", kind: "transport", day: "d10",
    title: "The last bus governs, not the first",
    body: "The Tsumago to Magome return is what gets us back to the car. Verify the October 2026 timetable, and a pre-booked taxi at ¥3,000–5,000 is the safer version."
  },
  {
    id: "n-magome-coffee", kind: "timing", day: "d10",
    title: "Coffee in Magome is not guaranteed",
    body: "Most of the town opens at 08:30–09:00 and we want to be walking by 08:00. Nice if something is open, but do not build the morning on it."
  },
  {
    id: "n-nakasendo-food", kind: "food", day: "d10",
    title: "Almost no food on the trail",
    body: "Take water and snacks. Coffee in Magome before setting off if anything is open. Lunch waits until Tsumago."
  },
  {
    id: "n-nakasendo-dist", kind: "transport", day: "d10",
    title: "Measured distances",
    body: "Gujō→Magome 92.2 km / 1:23. Magome→Narai 66.8 / 1:12. Narai→Matsumoto 44.6 / 0:46. Straight from Magome 111.2 / 1:56."
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
    title: "19 Oct is the last dinner in Japan",
    body: "T in Nakameguro is the candidate. October bookings are not open yet — check 1 Sep and again 19 Sep, and confirm they trade on a Monday."
  },
  {
    id: "n-departure", kind: "timing", day: "d20", lead: true,
    title: "NRT 18:00 — leave Tokyo around 14:30",
    body: "An easy morning near the hotel, nothing that needs a train across the city."
  }
];

export const notesForDay = (dayId, destId) =>
  notes.filter(n => n.day === dayId || (destId && n.dest === destId));

export const leadNotes = (dayId, destId, max = 3) =>
  notesForDay(dayId, destId).filter(n => n.lead).slice(0, max);
