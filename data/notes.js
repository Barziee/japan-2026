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
    id: "n-carswap", kind: "transport", day: "d13", lead: true,
    title: "One stop, three jobs, 14:30",
    body: "Bags into edit×seven first, then the Corolla back, then the Yaris out. Matsumoto to Gotemba is 171 km and 2:38 measured, so leave early with one stop at most."
  },
  {
    id: "n-yaris-boot", kind: "warning", day: "d13",
    title: "The suitcases do not fit the Yaris",
    body: "They stay at the hotel for the two Fuji days."
  },

  /* ---------------- 14 Oct · west Izu ---------------- */
  {
    id: "n-izu-shape", kind: "route", day: "d14", lead: true,
    title: "Four stops, and the driving is the point",
    body: "Forest and waterfall, local coffee, wild coast, mountain pass at sunset. 238.5 km and 4h16 of measured driving — plan on about five hours behind the wheel with stops and traffic."
  },
  {
    id: "n-izu-return", kind: "route", day: "d14", lead: true,
    title: "Take the coast home, not the ridge",
    body: "The short way stays on prefectural roads 59 and 411 for about 25 km of mountain road in the dark. Dropping to the coast at Toi and running north on Route 136 costs 24 km and 17 minutes and halves that."
  },
  {
    id: "n-izu-sunset", kind: "timing", day: "d14", lead: true,
    title: "Sunset 17:14 — arrive by 16:30",
    body: "That leaves time to park, walk up to the platform and be there before the light rather than chasing it."
  },
  {
    id: "n-izu-coast", kind: "route", day: "d14",
    title: "Koganezaki over Dōgashima",
    body: "Dōgashima is the famous one, but the tombolo out to Sanshirojima is what makes it worth stopping for, and it rarely uncovers in daylight between October and February. What is left is a timetabled boat tour. Koganezaki is free, unticketed and 15 minutes below the pass."
  },
  {
    id: "n-izu-roads", kind: "warning", day: "d14",
    title: "Avoid the old Amagi tunnel",
    body: "旧天城トンネル is a single-lane gravel road that navigation apps sometimes offer as a tourist route. The correct crossing is the new tunnel on Route 414."
  },
  {
    id: "n-izu-hodohodo", kind: "parking", day: "d14",
    title: "Four parking spaces at HODOHODO",
    body: "Open 10:00–16:30 and closed Mondays; the 14th is a Wednesday. Irregular closures are only announced on Instagram."
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
