/* Everything we deliberately saved, once. Today, Saved and Search all read
   from here — a place is never written twice.

   `note` is why WE saved it. Ratings, hours and reviews stay in Google Maps
   on purpose: they change, and ours would go stale.
   `maps` is the query Google Maps resolves — Japanese where that finds it
   more reliably than the romanised name.
   `food` lists the food types a place belongs to, for the filters.
   `cid` is the Google Maps id from our saved list, when we have it.
   `pin: true` means don't-forget-this, not favourite. Everything here is
   already saved, so a favourite flag would say nothing. */

export const places = [
  /* ============================ Kyoto ============================ */
  {
    id: "p-hikiniku", name: "Hikiniku to Come", ja: "挽肉と米", kind: "Hamburg steak", cat: "food",
    food: ["wagyu"], cid: "5604413755966420161",
    area: "kyoto", where: "Gion", pin: true,
    maps: "挽肉と米 京都",
    note: "Charcoal hamburg, ¥1,980 for the set. 100% beef, so it works for Noa. Right by Tatsumi-bashi on the Shirakawa, walking distance from MIRU. Closed Wednesdays, cashless only. With five nights in Kyoto, any night but Wednesday the 7th works. The 8 Oct online seats sold out; the other nights are worth checking. The ways in: cancellations on TableCheck, the free list that opens 7 days ahead, same-day cancellations announced on X, or the morning line — tickets from about 09:00, sometimes 08:30, and on busy days the line forms from about 07:00."
  },
  {
    id: "p-gansan", name: "Yakiniku no GANSAN", kind: "Yakiniku", cat: "food",
    food: ["yakiniku"], cid: "10243683207789044494",
    area: "kyoto", where: "Pontochō",
    maps: "Yakiniku GANSAN Pontocho Kyoto",
    note: "Beef yakiniku in Pontochō. @gansan_pontocho."
  },
  {
    id: "p-nishiki", name: "Ramen Nishiki", kind: "Ramen", cat: "food",
    food: ["ramen"], cid: "14050527343501950581",
    area: "kyoto", where: "Gion",
    maps: "Ramen Nishiki Kyoto",
    note: "Check the broth is not pork-based before Noa orders."
  },
  {
    id: "p-brulee", name: "Brulee Kyoto", ja: "烏丸五条店", kind: "Donuts", cat: "coffee",
    food: ["sweets"], cid: "14697941507550487718",
    area: "kyoto", where: "Karasuma-Gojō",
    maps: "Brulee 京都 烏丸五条店",
    note: "Donuts. The Karasuma-Gojō branch."
  },
  {
    id: "p-2050", name: "2050 coffee", ja: "祇園白川店", kind: "Coffee", cat: "coffee",
    food: ["cafe"], cid: "6006074317995937951",
    area: "kyoto", where: "Gion Shirakawa",
    maps: "2050 coffee 祇園白川店",
    note: ""
  },
  {
    id: "p-panel", name: "Panel Cafe", kind: "Café", cat: "coffee",
    food: ["cafe"], cid: "4606513294828699001",
    area: "kyoto", where: "Gion",
    maps: "Panel Cafe Kyoto",
    note: ""
  },
  {
    id: "p-uru", name: "uru coffee", kind: "Coffee", cat: "coffee",
    food: ["cafe"], cid: "12963093825151455992",
    area: "kyoto", where: "Teramachi",
    maps: "uru coffee Kyoto",
    note: ""
  },
  {
    id: "p-365", name: "365 Sakaba", kind: "Izakaya", cat: "food",
    food: ["izakaya"],
    area: "kyoto", where: "Kawaramachi",
    maps: "365 Sakaba Kawaramachi Kyoto",
    note: "Cheap, loud izakaya. Walk in, no booking."
  },
  {
    id: "p-alchemist", name: "Bar Alchemist", kind: "Cocktail bar", cat: "food",
    food: ["other"],
    area: "kyoto", where: "Kyoto",
    maps: "Bar Alchemist Kyoto",
    note: "Cocktails. Walk in."
  },
  {
    id: "p-ing", name: "Rocking Bar ING", kind: "Rock bar", cat: "food",
    food: ["other"],
    area: "kyoto", where: "Kyoto",
    maps: "Rocking Bar ING Kyoto",
    note: "Rock and records. Walk in."
  },

  /* ============================ Osaka ============================ */
  {
    id: "p-gyukotsuo", name: "Ninjomenya Gyukotsuo", ja: "人情麺屋 牛骨王", kind: "Ramen · beef broth", cat: "food",
    food: ["ramen"], cid: "2661088366737131394",
    area: "osaka", where: "Minami-Semba", pin: true,
    maps: "人情麺屋 牛骨王 南船場",
    note: "Beef-bone broth instead of pork, so it is the safe ramen for Noa. Small counter, ticket machine."
  },
  {
    id: "p-maren", name: "maren", ja: "maren 北新地本店", kind: "Ramen · chicken soy sauce", cat: "food",
    food: ["ramen"], cid: "7966177173578928033",
    area: "osaka", where: "Kitashinchi", pin: true,
    maps: "maren 北新地本店",
    note: "The main branch, in Dōjima — the one we want, not the Shinsaibashi one. Soy-sauce ramen from a washoku chef, built on jidori chicken; the 特製 special version of the chicken soy-sauce ramen is ¥1,550 and the one they push. No reservations, twelve counter seats. Sundays 11:00–15:00 and 17:00–22:00; the rest of the week the evening runs to 05:00. Four minutes from JR Kitashinchi, five from Nishi-Umeda. The broth is chicken, but the five-kinds-of-chāshū mazesoba may not be, so ask for Noa."
  },
  {
    id: "p-gorichan", name: "Onigiri Gorichan", ja: "おにぎりごりちゃん", kind: "Onigiri", cat: "food",
    food: ["other"], cid: "7379096829001949974",
    area: "osaka", where: "Nankai Namba Station",
    maps: "おにぎりごりちゃん 南海なんば駅店",
    note: "Inside Nankai Namba station. Should be 10/10 onigiri."
  },
  {
    id: "p-tokito", name: "Tokito", ja: "と木と", kind: "Wagyu sando", cat: "food",
    food: ["wagyu"], cid: "13587463603788008684",
    area: "osaka", where: "Karahori", pin: true,
    maps: "と木と 大阪 瓦屋町",
    note: "Noa's highlight. Kawarayamachi 1-2-11 (からほりかわらやえん101), a few minutes from Matsuyamachi station. The wagyu sando is a lunch thing: 11:00–15:00, walk-in only, made in limited numbers, so go at opening. Dinner, 18:00–24:00, is bookable. Closed on irregular days, posted on its Instagram stories (@tokito_karahori)."
  },
  {
    id: "p-kitan", name: "Kitan Hibiki", kind: "Burgers", cat: "food",
    food: ["wagyu"], cid: "9023255257523951743",
    area: "osaka", where: "Osaka",
    maps: "Kitan Hibiki Osaka",
    note: "We go for the burgers, and they are only served 17:00–19:00. A 20:00 booking means no burger and no refund."
  },
  {
    id: "p-joto", name: "Joto Curry", kind: "Curry", cat: "food",
    food: ["other"], cid: "9913021403327720417",
    area: "tokyo", where: "Shibuya",
    maps: "Joto Curry Shibuya Tokyo",
    note: ""
  },
  {
    id: "p-itosen", name: "Itosen", kind: "Chinese", cat: "food",
    food: ["other"], cid: "5078590716337502304",
    area: "kyoto", where: "Kamigyō",
    maps: "Itosen Kamigyo Kyoto",
    note: "Good Chinese food."
  },
  {
    id: "p-minoh", name: "Minoh Falls", ja: "箕面大滝", kind: "Waterfall walk", cat: "nature",
    area: "osaka", where: "Minoh",
    maps: "箕面大滝",
    note: "Hankyū from Umeda to Minoh-o, about 30 minutes. The gorge trail is easy and paved, roughly 2.8 km, and we walk it one way, downhill from the falls to the station. The colour here peaks in late November, so we walk it for the gorge, not the leaves."
  },
  {
    id: "p-hozenji", name: "Hōzenji Yokochō", ja: "法善寺横丁", kind: "Lantern alley", cat: "do",
    area: "osaka", where: "Namba",
    maps: "法善寺横丁",
    note: "Lantern-lit stone alley in Namba. With Ura-Namba next door it is more authentic and much less crowded than Dōtonbori."
  },
  {
    id: "p-tenjinbashi", name: "Tenjinbashisuji", ja: "天神橋筋商店街", kind: "Shopping arcade", cat: "shopping",
    area: "osaka", where: "Osaka",
    maps: "天神橋筋商店街",
    note: "The longest shopping arcade in Japan, and the food along it is local rather than aimed at visitors."
  },
  {
    id: "p-grenier", name: "grenier", ja: "北浜店", kind: "Choux pastry", cat: "coffee",
    food: ["sweets"], cid: "5906910810534897283",
    area: "osaka", where: "Kitahama",
    maps: "grenier 北浜店",
    note: "The crème brûlée choux Noa wants. Open every day, 10:00–19:00."
  },
  {
    id: "p-mooken", name: "MooKEN", kind: "Cream puffs", cat: "coffee",
    food: ["sweets"],
    area: "osaka", where: "Osaka",
    maps: "MooKEN cream puff Osaka",
    note: "Cream puffs."
  },
  {
    id: "p-brooklyn", name: "Brooklyn Roasting Company", kind: "Coffee", cat: "coffee",
    food: ["cafe"], cid: "3143396422888168986",
    area: "osaka", where: "Kitahama",
    maps: "Brooklyn Roasting Company Kitahama",
    note: "Cool coffee shop, and you can sit on the riverside."
  },
  {
    id: "p-yatt", name: "Yatt Nakazakichō", kind: "Coffee", cat: "coffee",
    food: ["cafe"], cid: "698133634341546368",
    area: "osaka", where: "Nakazakichō",
    maps: "Yatt Nakazakicho Osaka",
    note: "Stylish coffee shop."
  },
  {
    id: "p-pognam", name: "pognam", kind: "Café", cat: "coffee",
    food: ["cafe","sweets"], cid: "11685032481504675398",
    area: "osaka", where: "Nakazakichō",
    maps: "pognam Osaka",
    note: "A café that does desserts, in Nakazakichō."
  },
  {
    id: "p-flag", name: "MUSICBAR FLAG", kind: "Music bar", cat: "do",
    cid: "5561925109448909292",
    area: "osaka", where: "Nipponbashi, Naniwa-ku",
    maps: "MUSICBAR FLAG 日本橋 大阪",
    note: "Nipponbashi 5-13-7, Ueda building."
  },
  {
    id: "p-towerknives", name: "Tower Knives Osaka", kind: "Knives", cat: "shopping",
    cid: "1160808223375792125",
    area: "osaka", where: "Shinsekai", pin: true,
    maps: "Tower Knives Osaka",
    note: "Knives, next to Tsūtenkaku, English-speaking staff. This is the first knife opportunity of the trip, before Seki on 9 Oct. Whatever we buy flies home checked, never in the cabin."
  },
  {
    id: "p-katsuoji", name: "Katsuō-ji", ja: "勝尾寺", kind: "Temple", cat: "do",
    cid: "963425562183482676",
    area: "osaka", where: "Minoh",
    maps: "Katsuoji",
    note: "The daruma temple above Minoh, open 08:00–17:00. First stop on the Minoh day, because the taxis to the falls wait here and not the other way round."
  },
  {
    id: "p-fukushima", name: "Fukushima", kind: "Izakaya district", cat: "food",
    food: ["izakaya"],
    area: "osaka", where: "Osaka", area_kind: "district",
    maps: "Fukushima Osaka izakaya",
    note: "A dinner district rather than one restaurant."
  },
  {
    id: "p-tenma", name: "Tenma", kind: "Izakaya district", cat: "food",
    food: ["izakaya"], cid: "8126294779654769743",
    area: "osaka", where: "Osaka", area_kind: "district",
    maps: "Tenma Osaka izakaya",
    note: "Izakaya and bar hopping."
  },
  {
    id: "p-donchan", name: "Don-chan", ja: "肉大衆酒場ドンちゃん", kind: "Izakaya · meat, all-you-can-eat", cat: "food",
    food: ["izakaya"],
    area: "osaka", where: "Umeda Higashidōri",
    maps: "肉大衆酒場ドンちゃん 梅田",
    note: "A meat-focused all-you-can-eat-and-drink izakaya, so check what is not pork before settling in. Weekdays from 17:00, closed on irregular days."
  },

  {
    id: "p-hinode", name: "Hinode Udon", ja: "日の出うどん", kind: "Udon", cat: "food",
    food: ["noodles"], cid: "13962427309304455296",
    area: "kyoto", where: "Nanzenji", pin: true,
    maps: "日の出うどん 京都",
    note: "Sakyō-ku, Nanzenji Kitanobōchō 36. No reservations and cash only, so arrive a little before it opens. The whole eastern Kyoto day is arranged around getting here at the right time — check its hours and closing days before relying on it."
  },
  {
    id: "p-gyojabashi", name: "Gyōjabashi", ja: "行者橋", kind: "Stone bridge", cat: "do",
    area: "kyoto", where: "Higashiyama",
    maps: "行者橋 京都",
    note: "The narrow stone bridge over the Shirakawa near Higashiyama station. Not the one over the Kamo — that is the usual mix-up."
  },

  /* ============================ Mino ============================ */
  {
    id: "p-mino", name: "Mino udatsu townscape", ja: "うだつの上がる町並み", kind: "Old merchant street", cat: "do",
    area: null, where: "Mino, Gifu",
    maps: "うだつの上がる町並み 美濃市",
    note: "Edo merchant houses with udatsu — the raised fire walls between roofs that were a way of showing off. Free car parks around it; the tourist-centre car park is ¥100 for two hours. Five minutes off the Mino IC, so it costs almost nothing to drop into."
  },
  {
    id: "p-minobashi", name: "Mino Bridge", ja: "美濃橋", kind: "Suspension bridge", cat: "do",
    area: null, where: "Nagara River, Mino",
    maps: "美濃橋 美濃市",
    note: "The oldest surviving modern suspension bridge in Japan, over the Nagara. Five minutes from the old town and the reason to walk down to the river at all."
  },
  {
    id: "p-yamamizu", name: "Yamamizu Honten", ja: "山水本店", kind: "Udon and set meals", cat: "food",
    food: ["noodles"],
    area: null, where: "Mino, Gifu",
    maps: "山水本店 美濃市",
    note: "Lunch candidate for the Mino version. A Taishō-era place doing udon and teishoku that locals actually eat at. 11:00–14:30, closed Wednesdays — 9 Oct is a Friday, so open — and it has its own parking."
  },
  {
    id: "p-happastand", name: "HAPPA STAND", kind: "Tea in an old house", cat: "coffee",
    food: ["cafe"],
    area: null, where: "Mino, Gifu",
    maps: "HAPPA STAND 美濃市",
    note: "The lighter Mino option: organic tea in a renovated machiya, 8:00–15:00, closed Wednesdays and Thursdays. Good if we want the street and the river more than a full sit-down meal."
  },

  /* ============================ Gujō ============================ */
  {
    id: "p-gujoshokudo", name: "Gujō Hachiman Old Town Hall canteen", ja: "郡上八幡旧庁舎食堂", kind: "Keichan · local set meals", cat: "food",
    food: ["other"],
    area: "gujo", where: "Jōkamachi Plaza, Gujō",
    maps: "郡上八幡旧庁舎食堂",
    note: "Lunch candidate for the Gujō morning on the 10th. Keichan — chicken fried in miso — is the Gujō dish, and the set is about ¥1,080. Open 10:00–16:00 with parking, right in the middle of town, no booking."
  },
  {
    id: "p-izumizaka", name: "Izumizaka", ja: "鉄板料理 泉坂", kind: "Hōba miso on the griddle", cat: "food",
    food: ["other"],
    area: "gujo", where: "Central Gujō Hachiman",
    maps: "鉄板料理 泉坂 郡上八幡",
    note: "The other Gujō lunch: hōba-miso-yaki, meat and vegetables grilled on a magnolia leaf with miso. In the middle of the old castle town."
  },
  {
    id: "p-daikokuya", name: "Daikokuya Gujō", ja: "だいこく家 郡上店", kind: "Wagyu yakiniku", cat: "food",
    food: ["yakiniku","wagyu"], cid: "1760763851590936211",
    area: "gujo", where: "Gujō-Yamato, by the hotel", pin: true,
    maps: "だいこく家 郡上",
    note: "Requested for 9 Oct at 20:00, a tatami room for two — waiting to be accepted. Hida beef yakiniku with an English tablet menu. In Gujō-Yamato, a seven-minute walk from the Fairfield, not in the old town."
  },
  {
    id: "p-igawa", name: "Igawa Komichi", ja: "いがわ小径", kind: "Water lane", cat: "do",
    area: "gujo", where: "Gujō Hachiman",
    maps: "いがわ小径 郡上八幡",
    note: "The water channel running behind the houses with carp in it. Sōgi-sui, the spring, and Yanaka Mizu-no-Komichi are the same short walk — this is what the afternoon is for."
  },
  {
    id: "p-gonza", name: "Pizzeria Gonza", kind: "Pizza", cat: "food",
    food: ["italian"], cid: "10790362287290569115",
    area: "gujo", where: "Gujō Hachiman",
    maps: "Pizzeria Gonza Gujo",
    note: "A real backup, not a consolation prize."
  },

  /* ============================ Kiso valley ============================ */
  {
    id: "p-atera", name: "Atera Gorge", ja: "阿寺渓谷", kind: "Emerald granite gorge", cat: "nature",
    cid: "7905631490064305519",
    area: "matsumoto", where: "Ōkuwa, Kiso", pin: true,
    maps: "阿寺渓谷",
    note: "Turquoise water over white granite under cypress forest, about 15 km of valley. Park at the Akahiko monument car park and walk from there — the trail out to Unarijima and the Nakahatchō suspension bridge is the best of it. Private cars are restricted between the entrance and the campground in high summer, but not in October. About two hours there and back on foot from the car park, and an hour and forty minutes each way from Jujo, so it is a day-trip option for the 11th or 12th."
  },
  {
    id: "p-forespa", name: "Forespa Kiso canteen", ja: "フォレスパ木曽", kind: "Soba set with gohei mochi", cat: "food",
    food: ["noodles"],
    area: "matsumoto", where: "Ōkuwa, by the gorge",
    maps: "フォレスパ木曽 阿寺荘",
    note: "Lunch candidate, and the closest one to Atera — it sits at the mouth of the gorge. Soba teishoku that comes with gohei mochi. 10:00–14:00, closed Wednesdays, so open on the 11th and 12th."
  },
  {
    id: "p-nakamura", name: "Shokudō Nakamura", ja: "食堂中村", kind: "Gohei mochi", cat: "food",
    food: ["other"],
    area: "matsumoto", where: "Agematsu, Kiso",
    maps: "食堂中村 上松",
    note: "Lunch candidate on the way north. Known for gohei mochi in a sweet-savoury soy tare heavy with walnut, sesame and peanut, made by hand without additives. Small and local rather than polished."
  },
  {
    id: "p-kurumaya", name: "Kurumaya, Route 19 branch", ja: "くるまや国道店", kind: "Kiso soba", cat: "food",
    food: ["noodles"],
    area: "matsumoto", where: "Kiso-Fukushima",
    maps: "くるまや国道店 木曽福島",
    note: "Lunch candidate further north, straight off Route 19 with several car parks. Proper Kiso soba — kakiage and tenzaru. The michi-no-eki at Kiso-Fukushima is the fallback, lunch 11:00–15:00 with Ontake from the terrace."
  },
  {
    id: "p-narai", name: "Narai-juku", ja: "奈良井宿", kind: "Post town", cat: "do",
    area: "matsumoto", where: "Shiojiri, Kiso",
    maps: "奈良井宿",
    note: "The longest of the Nakasendō post towns, and it sits directly on the road north — adding it costs about two minutes of driving. Forty-five minutes to an hour is enough to walk the length of it."
  },

  /* ============================ Matsumoto ============================ */
  {
    id: "p-nakamachi", name: "Nakamachi Street", ja: "中町通り", kind: "Ceramics street", cat: "shopping",
    area: "matsumoto", where: "Matsumoto",
    maps: "Nakamachi Street Matsumoto",
    note: "Ceramics and homeware in the old kura warehouses."
  },
  {
    id: "p-tsubame", name: "Tsubame Onsen Kogane no Yu", ja: "燕温泉 黄金の湯", kind: "Free onsen", cat: "nature",
    cid: "8184347331509949303",
    area: "matsumoto", where: "Myōkō",
    maps: "燕温泉 黄金の湯",
    note: "Free open-air baths — but closed on Mondays, which rules them out on 12 Oct."
  },

  /* ============================ Fuji · Izu ============================ */
  {
    id: "p-shoji", name: "Tatego-hama, Lake Shōji", ja: "精進湖 他手合浜", kind: "Fuji viewpoint", cat: "nature",
    area: "fuji", where: "Lake Shōji", pin: true,
    maps: "精進湖 他手合浜",
    note: "The Kodaki Fuji view — Mount Ōmuro sitting in front of Fuji like a child being carried. Also searchable as 子抱き富士ビューポイント. Straight off the road, no walking."
  },
  {
    id: "p-motosu", name: "Motosuko Lakeside Walkway", ja: "本栖湖畔線歩道", kind: "Fuji viewpoint", cat: "nature",
    area: "fuji", where: "Lake Motosu, by Kōan", pin: true,
    maps: "本栖湖畔線歩道 浩庵",
    note: "The Lake Motosu and Fuji composition from the ¥1,000 note, from the shore near Kōan. The exact elevated angle on the note is up at Nakanokura Pass and takes over an hour on foot — we are not doing that one."
  },
  {
    id: "p-tanuki", name: "Lake Tanuki", ja: "田貫湖", kind: "Lake walk", cat: "nature",
    area: "fuji", where: "Fujinomiya",
    maps: "田貫湖",
    note: "Ten minutes from Shiraito. Worth 45–60 minutes if Fuji is out and there is energy left; not worth forcing if it is clouded in."
  },
  {
    id: "p-otodome", name: "Otodome Falls", ja: "音止の滝", kind: "Waterfall", cat: "nature",
    area: "fuji", where: "Beside Shiraito",
    maps: "音止の滝",
    note: "A single hard drop right next to Shiraito, on the same walk. No reason to skip it."
  },
  {
    id: "p-hiraishiya", name: "Hiraishiya", ja: "平石屋", kind: "Fujinomiya yakisoba", cat: "food",
    food: ["other"],
    area: "fuji", where: "By Otodome Falls",
    maps: "平石屋 富士宮やきそば 白糸の滝",
    note: "Lunch candidate. The local speciality, cooked on a teppan in the room, with terrace seating right by Otodome. Own car park, free with ¥600 spent. Being at the falls means zero extra driving — but confirm Tuesday opening."
  },
  {
    id: "p-asagiri", name: "Buffet Restaurant Fujisan", ja: "ビュッフェレストランふじさん", kind: "Buffet · local dairy", cat: "food",
    food: ["other"],
    area: "fuji", where: "Asagiri Food Park",
    maps: "ビュッフェレストランふじさん あさぎりフードパーク",
    note: "Lunch candidate. Inside Asagiri Food Park on Route 139, directly on the road south. Built around Asagiri dairy milk and local eggs. 11:00–15:40, last orders 14:30, big car park, no booking needed. Closures are irregular — confirm the day."
  },
  {
    id: "p-masunoie", name: "Masu no Ie", ja: "鱒の家", kind: "Rainbow trout", cat: "food",
    food: ["other"],
    area: "fuji", where: "Inokashira, Fujinomiya",
    maps: "鱒の家 猪之頭",
    note: "Lunch candidate. Trout farmed in Fuji spring water, which is what this valley is known for. Lunch only, 11:00–15:00, sets from about ¥2,100. Sit-down and unhurried. Confirm Tuesday opening."
  },
  {
    id: "p-odaru", name: "Ō-daru Falls", ja: "大滝", kind: "Waterfall", cat: "nature",
    cid: "9180743447286811627",
    area: "fuji", where: "Kawazu, Izu",
    maps: "大滝 滝見台 河津",
    note: "The viewing platform is public and free, boardwalk open 08:00–17:00 in October. Getting down to the plunge pool itself is only through AMAGISO, which charges."
  },
  {
    id: "p-hodohodo", name: "HODOHODO Base", ja: "ホドホドBase", kind: "Café · lunch", cat: "coffee",
    food: ["cafe"], cid: "17089360248133080866",
    area: "fuji", where: "Kawazu, Izu",
    maps: "ホドホドBase 河津",
    note: "静岡県河津町浜75-2. Open 10:00–16:30, closed Mondays, and only four parking spaces. Irregular closures only go up on Instagram."
  },
  {
    id: "p-koganezaki", name: "Koganezaki", ja: "黄金崎", kind: "Sea cliffs", cat: "nature",
    area: "fuji", where: "Nishiizu", pin: true,
    maps: "黄金崎公園",
    note: "Golden lava cliffs over Suruga Bay. Free, free parking, no ticket and no timeslot — 30–40 minutes is enough. Horse Rock is the one everyone photographs."
  },
  {
    id: "p-nishina", name: "Nishina Pass", ja: "仁科峠展望台", kind: "Mountain pass", cat: "nature",
    cid: "15755161444151821562",
    area: "fuji", where: "Ugusu, Nishiizu", pin: true,
    maps: "仁科峠展望台",
    note: "Amazing mountain and Fuji views. About 900 m up, facing west over the sea — the golden-hour stop on the Izu day."
  },
  {
    id: "p-dogashima", name: "Dōgashima", ja: "堂ヶ島", kind: "Sea caves", cat: "nature",
    area: "fuji", where: "Nishiizu",
    maps: "堂ヶ島",
    note: "The famous one, and it sits on the road north to Koganezaki. The tombolo out to Sanshirojima is what makes it special, and between October and February it rarely uncovers in daylight."
  },
  {
    id: "p-shiraito", name: "Shiraito Falls", ja: "白糸の滝", kind: "Waterfall", cat: "nature",
    cid: "660404680206738851",
    area: "fuji", where: "Fujinomiya", pin: true,
    maps: "白糸の滝 富士宮",
    note: "A 150 m curtain of spring water coming straight out of the rock face rather than over it. Municipal car park, 100+ spaces, ¥500 for the day. Give it an hour and a half to two hours with Otodome — this is not a photo stop."
  },
  {
    id: "p-asama", name: "Kawaguchi Asama Shrine", ja: "河口浅間神社", kind: "Shrine", cat: "do",
    cid: "8266143119040576446",
    area: "fuji", where: "Kawaguchiko",
    maps: "河口浅間神社",
    note: ""
  },
  {
    id: "p-mononoke", name: "Mononoke Forest", kind: "Forest", cat: "nature",
    cid: "1889607324312439836",
    area: null, where: "Koumi, Nagano",
    maps: "Mononoke Forest Koumi Nagano",
    note: ""
  },
  {
    id: "p-makaino", name: "Makaino Farm Resort", kind: "Farm", cat: "do",
    cid: "10960162282246731445",
    area: "fuji", where: "Fujinomiya",
    maps: "まかいの牧場",
    note: ""
  },
  {
    id: "p-moom", name: "MooM Cafe", kind: "Café", cat: "coffee",
    food: ["cafe"],
    area: "fuji", where: "Fuji area",
    maps: "MooM Cafe Japan",
    note: ""
  },

  /* ============================ Tokyo ============================ */
  {
    id: "p-t-nakameguro", name: "T", ja: "中目黒", kind: "Wagyu T-bone", cat: "food",
    food: ["wagyu"], cid: "12395878348948571615",
    area: "tokyo", where: "Nakameguro", pin: true,
    maps: "T 中目黒 ステーキ",
    note: "Omi beef T-bone. Booked for our last night in Japan: Monday 19 Oct at 20:30, the T Genesis course. Tel 03-6303-0849."
  },
  {
    id: "p-marumo", name: "pizza marumo", kind: "Pizza", cat: "food",
    food: ["italian"], cid: "12231216228328267775",
    area: "tokyo", where: "Tokyo",
    maps: "pizza marumo Tokyo",
    note: "Looks like a killer pizza."
  },
  {
    id: "p-coconemaru", name: "Coco Nemaru Ginza", kind: "Yakiniku", cat: "food",
    food: ["yakiniku","wagyu"], cid: "18325154189657589569",
    area: "tokyo", where: "Ginza",
    maps: "Coco Nemaru Ginza",
    note: ""
  },
  {
    id: "p-philocoffea", name: "PHILOCOFFEA", ja: "表参道店", kind: "Coffee", cat: "coffee",
    food: ["cafe"], cid: "4398135157958106833",
    area: "tokyo", where: "Omotesandō",
    maps: "PHILOCOFFEA 表参道店",
    note: "Cool coffee place in a basement."
  },
  {
    id: "p-melt", name: "Melt Chocolate", kind: "Chocolate", cat: "coffee",
    food: ["sweets","cafe"], cid: "8143358245469996776",
    area: "osaka", where: "Near Shinsaibashi",
    maps: "Melt Chocolate Osaka",
    note: ""
  },
  {
    id: "p-travelers", name: "Traveler's Factory", kind: "Stationery", cat: "shopping",
    cid: "17628119631650716290",
    area: "tokyo", where: "Nakameguro",
    maps: "Traveler's Factory Nakameguro",
    note: "Cool store. Stationery and travel goods — worth it if we are already in Nakameguro."
  },
  {
    id: "p-lelabo", name: "LE LABO", kind: "Perfume", cat: "shopping",
    cid: "14264834289694882970",
    area: "tokyo", where: "Daikanyama",
    maps: "LE LABO Daikanyama",
    note: ""
  },
  {
    id: "p-yamada", name: "RECORD BAR YAMADA", kind: "Record bar", cat: "do",
    cid: "12198301837067553124",
    area: "kyoto", where: "Kawaramachi-Gojō",
    maps: "RECORD BAR YAMADA Kyoto",
    note: ""
  },
  {
    id: "p-goodmorning", name: "GOOD morning RECORD BAR", kind: "Record bar", cat: "do",
    cid: "4491421517118041108",
    area: "kyoto", where: "Kawaramachi",
    maps: "GOOD morning RECORD BAR Kyoto",
    note: ""
  },

  /* ============================ On the road ============================ */
  {
    id: "p-sekihall", name: "Gifu Seki Cutlery Hall", ja: "岐阜関刃物会館", kind: "Knives", cat: "shopping",
    cid: "5465630372951617962",
    area: null, where: "Seki, Gifu", pin: true,
    maps: "岐阜関刃物会館",
    note: "関市平和通4-12-6, inside the Sekiterrace complex. Open 9:00–17:00 and closed only over New Year, so it is open on the 10th. Around 100 parking spaces. Worth 45–60 minutes — it is a direct sales hall with the output of the Seki factories rather than a museum. (The sword museum next door only runs forging demonstrations on set dates, usually the first Sunday, so not on our Saturday.) Tel 0575-22-4941."
  },
  {
    id: "p-metasequoia", name: "Avenue of Metasequoias", ja: "メタセコイア並木", kind: "Tree avenue", cat: "nature",
    cid: "13604477247831000687",
    area: null, where: "Takashima, Shiga",
    maps: "メタセコイア並木 高島",
    note: "Need to go on a drive in this area."
  },
  {
    id: "p-lacollina", name: "La Collina Ōmi-Hachiman", ja: "ラ コリーナ近江八幡", kind: "Bakery park", cat: "do",
    food: ["sweets"], cid: "17179290743664196562",
    area: null, where: "Ōmi-Hachiman, Shiga", pin: true,
    maps: "ラ コリーナ近江八幡",
    note: "Weird looking garden, park and food garage. Odd place, worth a look. It is Taneya's confectionery village under a grass-covered roof, open daily 9:00–18:00: café last orders 17:00, food court 10:00–17:00, and the bakery from 11:00 until it sells out. 650 parking spaces. Lunch stop on 9 Oct."
  },
  {
    id: "p-kuromon", name: "Kuromon Ichiba Market", ja: "黒門市場",
    kind: "Market · food and souvenirs", cat: "shopping",
    area: "osaka", where: "Nipponbashi", pin: true,
    maps: "黒門市場",
    note: "A local's pick for authentic souvenirs, and his read is that it is calmer and less tourist-trappy than Nishiki in Kyoto, which we also see. Trading runs roughly 08:00-18:00, but many stalls are 08:00-16:00 and most are winding down by 17:30. Sunday is the market's regular holiday."
  },
  {
    id: "p-doguyasuji", name: "Sennichimae Doguyasuji", ja: "千日前道具屋筋商店街",
    kind: "Kitchenware arcade", cat: "shopping",
    area: "osaka", where: "Namba", pin: true,
    maps: "千日前道具屋筋商店街",
    note: "A local pointed at the Sennichimae shopping street; the one worth the walk is this, a 150 m covered arcade of restaurant-supply and kitchenware shops a few minutes from Namba. More than a dozen of them sell knives, which is a wider choice than Tower Knives and makes this the real first knife stop before Seki on 9 Oct. Whatever we buy flies home checked."
  },
  {
    id: "p-nambaparks", name: "Namba Parks", ja: "なんばパークス",
    kind: "Mall · rooftop garden", cat: "shopping",
    area: "osaka", where: "Namba",
    maps: "なんばパークス",
    note: "A local's practical stop rather than a sight: fast shopping and konbini restocking, together with the underground streets running out of Namba station. Useful on the arrival Sunday, when Kuromon is shut."
  },
  {
    id: "p-dendentown", name: "Den Den Town", ja: "日本橋でんでんタウン",
    kind: "Electronics and anime", cat: "shopping",
    area: "osaka", where: "Nipponbashi",
    maps: "日本橋でんでんタウン",
    note: "Osaka's electronics and anime district, immediately next door to Namba. A local's if-that-is-your-thing rather than a recommendation. We are already in Nipponbashi for MUSICBAR FLAG, and Kuromon is on the same side of Namba, so all three chain together."
  },
  {
    id: "p-shinsekai", name: "Shinsekai", ja: "新世界",
    kind: "Retro district", cat: "do",
    area: "osaka", where: "Shinsekai",
    maps: "新世界",
    note: "A local's pick for a lively evening district, built around Tsutenkaku. Tower Knives is here, so the two combine into one trip. Tennoji and its park sit next door, and he singled out the zoo there as unexpectedly tranquil."
  },
  {
    id: "p-nakanoshima", name: "Nakanoshima", ja: "中之島",
    kind: "Riverside island", cat: "do",
    area: "osaka", where: "Kitahama",
    maps: "中之島公園",
    note: "A local favourite, with his own caveat: it sits closer to Hommachi than Namba, though never more than about 20 minutes away. It pairs with coffee we have already saved, since grenier and Brooklyn Roasting are both in Kitahama, directly across the water."
  },
  {
    id: "p-yodobashi", name: "Yodobashi Umeda", ja: "ヨドバシカメラ マルチメディア梅田", kind: "Electronics megastore", cat: "shopping",
    area: "osaka", where: "Umeda",
    maps: "ヨドバシカメラ マルチメディア梅田",
    note: "The local's paradise. In front of the north gate of JR Osaka Station — there is no Yodobashi in Namba, where the rival is Bic Camera. Open every day 09:30–22:00."
  },
  {
    id: "p-osakacastle", name: "Osaka Castle", ja: "大阪城天守閣", kind: "Castle keep · museum", cat: "do",
    area: "osaka", where: "Chūō-ku",
    maps: "大阪城天守閣",
    note: "The keep is open every day, 09:00–18:00, last entry 17:30. Nishinomaru Garden in the same grounds closes on Mondays."
  },
  {
    id: "p-uniqlo", name: "UNIQLO Shinsaibashi", ja: "ユニクロ 心斎橋店", kind: "Clothing · six floors", cat: "shopping",
    area: "osaka", where: "Shinsaibashi-suji",
    maps: "ユニクロ 心斎橋店",
    note: "The big one, on the Shinsaibashi-suji arcade near Shinsaibashi station, 15 to 20 minutes' walk from Namba. There is a smaller branch in Namba Walk, the underground mall beneath Namba. Tax-free above the minimum spend."
  },
  {
    id: "p-dotonbori", name: "Dōtonbori", ja: "道頓堀", kind: "Canal · neon · Glico sign", cat: "do",
    area: "osaka", where: "Namba",
    maps: "道頓堀 グリコサイン",
    note: "The canal, the neon and the Glico sign, a few minutes from Hōzenji. For actually eating, Hōzenji and Ura-Namba next door are more authentic and much calmer."
  },
  {
    id: "p-torikizoku", name: "Torikizoku", ja: "鳥貴族", kind: "Yakitori chain · ¥390 an item", cat: "food",
    food: ["yakitori","izakaya"],
    area: "osaka", where: "Dōtonbori · Sennichimae", pin: true,
    maps: "鳥貴族 難波",
    note: "Cheap yakitori, one price for everything: ¥390 including tax. You order on a tablet at the table, in English. Four branches around Namba: Dōtonbori, Dōtonbori Nakaza, Sennichimae and Sennichimae 2. For Noa, going by their own allergen table (1 Sep 2026): the tare and the salt have no pork, and every skewer is fine except the pork belly one. The things to avoid are less obvious: the signature Toriki karaage, the chicken mayo salad, the chicken hamburg steak, the kids' plates, and every noodle and rice finisher except the two donburi. Everything comes out of one kitchen."
  },
  {
    id: "p-toratoriya", name: "TORA鶏YA", ja: "炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店", kind: "Yakitori · one-bite gyoza", cat: "food",
    food: ["yakitori","izakaya"], cid: "9887640051300949949",
    area: "osaka", where: "Sennichimae",
    maps: "炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店",
    note: "The 4 Oct booking was cancelled. In Sennichimae: chicken grilled over binchotan and served off the skewer. The one-bite gyoza do not list their filling, so ask before ordering them for Noa."
  },
  {
    id: "p-kibitaki", name: "Kibitaki Bettei", ja: "YAKITORI KIBITAKI 別邸", kind: "Yakitori · chef's 7 skewers", cat: "food",
    food: ["yakitori"],
    area: "osaka", where: "Shinsaibashi-suji",
    maps: "YAKITORI KIBITAKI 別邸 心斎橋",
    note: "The 5 Oct booking was cancelled when the first nights moved to Kyoto. The chef's seven skewers, all chicken from three local breeds — Aizu jidori, Kawamata shamo and Date chicken — and nothing on the menu is pork. In the same block as the big UNIQLO."
  }
,
  {
    id: "p-minato", name: "MINATO", ja: "鉄板ダイニングバルMINATO", kind: "Teppan dining bar", cat: "food",
    food: ["other"], cid: "1006340340076078079",
    area: "matsumoto", where: "Chūō, near the station", pin: true,
    maps: "鉄板ダイニングバル MINATO 松本",
    note: "Booked for 10 Oct at 20:00. A teppan grill: chicken four ways, beef loin steak, roast beef, oysters and a seafood ajillo. For Noa, skip the pork ginger steak and the tonpeiyaki, and ask about the okonomiyaki."
  },
  {
    id: "p-pizzamatsuri", name: "PIZZA MATSURI", ja: "ピッツァ マツリ マツモト", kind: "Neapolitan pizza", cat: "food",
    food: ["italian"],
    area: "matsumoto", where: "Chūō, by the station", pin: true,
    maps: "PIZZA MATSURI MATSUMOTO 松本",
    note: "Booked for 11 Oct at 20:00. Neapolitan pizza on dough fermented for more than a day, opened in March 2026, with Shiojiri wine as well as Italian. For Noa, the margherita is safe and the prosciutto one is not. 17:30–22:00, closed Tuesdays."
  }
,
  {
    id: "p-hachimanbori", name: "Hachiman-bori", ja: "八幡堀", kind: "Old merchant canal", cat: "do",
    area: null, where: "Ōmi-Hachiman",
    maps: "八幡堀",
    note: "The old merchant canal through Ōmi-Hachiman, lined with storehouses and willows, with benches along the water. Four minutes from La Collina."
  },
  {
    id: "p-ninosuke", name: "Ninosuke Coffee", ja: "仁之助コーヒー", kind: "Siphon coffee", cat: "coffee",
    food: ["cafe"],
    area: null, where: "Ōmi-Hachiman",
    maps: "仁之助コーヒー 近江八幡",
    note: "Just off the Hachiman-bori in a renovated old townhouse — siphon coffee, toast and sweets. 10:00–18:00, closed Tuesdays and the second Wednesday, so open on our Friday."
  },
  {
    id: "p-ichika", name: "Ibushi-dori Ichika", ja: "いぶし鳥 一香", kind: "Smoked-chicken yakitori", cat: "food",
    food: ["yakitori","izakaya"], cid: "12685258170509690805",
    area: "kyoto", where: "Near Kyoto City Hall", pin: true,
    maps: "いぶし鳥 一香 京都",
    note: "Booked for 7 Oct, time to confirm. Whole domestic chicken smoked over cherry wood, in a machiya with an open kitchen; the rice is Tanba Koshihikari cooked in a hagama pot. Dinner 17:00–22:00, food last orders 21:00, closed on irregular days. No table charge. For Noa: all chicken, nothing listed as pork — ask about the wontons and the ground-meat omelette."
  },
  {
    id: "p-bigoli", name: "BIGOLI", ja: "BIGOLI 京都本店", kind: "Bolognese · wine bar at night", cat: "food",
    food: ["italian"], cid: "5741547070674036186",
    area: "kyoto", where: "Shijō-Karasuma", pin: true,
    maps: "BIGOLI 京都本店",
    note: "The 8 Oct booking was cancelled by mistake; we mean to rebook it for another night. A bolognese-only pasta specialist on thick bigoli noodles, open 11:00–22:30. At night it becomes a wine bar with about 100 wines at a flat rate by the half hour, and the food narrows to their pastas, prosciutto, cheese and nuts. For Noa: their own bolognese lists pork among its ingredients, so ask before ordering."
  },
  {
    id: "p-shimokitazawa", name: "Shimokitazawa", ja: "下北沢", kind: "Vintage, records, live houses", cat: "do",
    area: "tokyo", where: "Setagaya", pin: true,
    maps: "下北沢駅",
    note: "An afternoon into evening of its own, ending at Ittosei or Genki Club. The Shimokitazawa Curry Festival runs 8–25 Oct 2026, so it is on for our whole stay: 110 curry shops and 21 sweets shops serving festival dishes, plus a free stamp rally, with the prize desk open 12:00–20:00. The Moon Art Night flea market ends on 3–4 Oct, before we arrive. The Senrogai flea market runs on irregular dates — last year it was the October long weekend — so check @fleamarket_99 nearer the time. For Noa: a lot of Japanese curry is pork, so check each shop's."
  },
  {
    id: "p-ittosei", name: "Ittosei", ja: "焼鳥とお野菜 一等星", kind: "Yakitori and vegetable izakaya", cat: "food",
    food: ["yakitori","izakaya"], cid: "6364455420254841300",
    area: "tokyo", where: "Shimokitazawa", pin: true,
    maps: "焼鳥とお野菜 一等星 下北沢",
    note: "Yakitori over Kishū binchōtan charcoal, seasonal vegetables, cocktails and shochu. Dinner 17:00–23:30, last orders 23:00. Closed Mondays, or the Tuesday after when the Monday is a holiday. Books online through its site, ittosei-shimokita.com. About ¥4,000–6,000 a head on Google, and one reviewer mentions an English menu. Two minutes from the station's Central exit. For Noa: the menu is chicken and vegetables, with nothing listed as pork."
  },
  {
    id: "p-genkiclub", name: "Genki Club", ja: "ゲンキクラブ", kind: "Old rock bar, now an izakaya", cat: "food",
    food: ["izakaya"], cid: "17046698492958955194",
    area: "tokyo", where: "Shimokitazawa", pin: true,
    maps: "Genki Club 下北沢",
    note: "Over thirty years in Shimokitazawa. It started as a rock bar, so there are a lot of rare records — 70s–90s J-pop and Western vinyl — plus rare shochu and a long menu of simple home-style dishes. About ¥2,000–3,000 a head. Opens at 18:00; the sources disagree on whether it closes on Wednesdays, which does not touch our days. Four minutes from the station. For Noa: there is no menu online, so ask what is pork."
  },

  /* ============ From the Google Maps list, imported 29 Sep 2026 ============ */
  {
    id: "p-bingo", name: "Bingo", kind: "Izakaya", cat: "food",
    area: "kyoto", where: "Shijō-Karasuma",
    food: ["izakaya"], cid: "5256480465268384958",
    maps: "Bingo, 266 Nishinishikikojicho, Nakagyo Ward, Kyoto, 604-8226",
    note: ""
  },
  {
    id: "p-marutomi", name: "Yakiniku MARUTOMI", kind: "Yakiniku", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["yakiniku"], cid: "7415671928894784581",
    maps: "Yakiniku MARUTOMI, 〒600-8001 Kyoto, Shimogyo Ward, Shincho, 68 京都河原町ガーデン 8F",
    note: "On the 8th floor of the Kyoto Kawaramachi Garden building."
  },
  {
    id: "p-gotengo", name: "Wagyu Sukiyaki Gotengo", kind: "Wagyu sukiyaki", cat: "food",
    area: "kyoto", where: "Karasuma",
    food: ["wagyu"], cid: "12412167368837409374",
    maps: "Wagyu Sukiyaki Kyoto Gotengo Karasuma, 〒604-8142 Kyoto, Nakagyo Ward, Nishiuoyacho, 605 ＳＴビル B1F",
    note: ""
  },
  {
    id: "p-onikai", name: "Onikai", kind: "Izakaya", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["izakaya"], cid: "2874729744322046078",
    maps: "Onikai, 388 二階 Komeyacho, Nakagyo Ward, Kyoto, 604-8026",
    note: ""
  },
  {
    id: "p-julia", name: "Julia", kind: "Wagyu · charcoal izakaya", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["wagyu","izakaya"], cid: "8580301910192990551",
    maps: "Charcoal fire izakaya Julia Wagyu specialty store Kyoto",
    note: ""
  },
  {
    id: "p-hafuu", name: "Wagyu Steak Hafuu", ja: "肉専科はふう 本店", kind: "Wagyu steak", cat: "food",
    area: "kyoto", where: "Nakagyō, near Marutamachi",
    food: ["wagyu"], cid: "9765123227851010420", pin: true,
    maps: "Wagyu Steak Hafuu Honten Kyoto",
    note: "Booked for 8 Oct at 19:30, the main branch. Niku Senka Hafuu: steak and the beef cutlet. Closed on Wednesdays."
  },
  {
    id: "p-issekisancho", name: "Issekisancho", kind: "Yakiniku", cat: "food",
    area: "kyoto", where: "Umekōji, by the hotel",
    food: ["yakiniku"], cid: "4673740570661139423",
    maps: "Issekisancho Kyoto",
    note: "Yakiniku about five minutes' walk from Umekoji Potel."
  },
  {
    id: "p-engine", name: "KYOTO ENGINE RAMEN", kind: "Ramen", cat: "food",
    area: "kyoto", where: "Shinkyōgoku",
    food: ["ramen"], cid: "4771577354754246893",
    maps: "KYOTO ENGINE RAMEN, 580-2 Nakanocho, Nakagyo Ward, Kyoto, 604-8042",
    note: ""
  },
  {
    id: "p-isostand", name: "Iso Stand", kind: "Modern izakaya · wine", cat: "food",
    area: "kyoto", where: "Karasuma",
    food: ["izakaya"], cid: "7574402055496659049",
    maps: "Iso Stand Kyoto",
    note: ""
  },
  {
    id: "p-daciro", name: "Pizzeria da Ciro", kind: "Neapolitan pizza", cat: "food",
    area: "kyoto", where: "Near Ginkaku-ji",
    food: ["italian"], cid: "3679466593329750053",
    maps: "Pizzeria da Ciro Kyoto",
    note: "Looks like amazing pizza. Lunch 11:30–14:30, dinner 17:00–21:30 with last orders at 21:00, and closed on Mondays. Books online or by phone, 075-744-1228. Not to be confused with Restaurant DA CIRO in Gion — this is the pizzeria in Sakyō-ku, near the north end of the Philosopher's Path."
  },
  {
    id: "p-gojoparadiso", name: "Gojo Paradiso", kind: "Mediterranean · cocktails", cat: "food",
    area: "kyoto", where: "Gojō",
    food: ["other"], cid: "323626008905808875",
    maps: "Gojo Paradiso Restaurant & Bar Kyoto",
    note: ""
  },
  {
    id: "p-wakayama", name: "Kissa Wakayama", ja: "喫茶若山", kind: "Kissaten · coffee", cat: "coffee",
    area: "kyoto", where: "Umekōji, by the hotel",
    food: ["cafe"], cid: "11117871669393714763",
    maps: "喫茶若山 Kissa Wakayama Kyoto",
    note: "An old-style coffee house about seven minutes' walk north of Umekoji Potel."
  },
  {
    id: "p-arabica", name: "% ARABICA Arashiyama", kind: "Coffee", cat: "coffee",
    area: "kyoto", where: "Arashiyama",
    food: ["cafe"], cid: "17029760350450268096",
    maps: "% ARABICA Kyoto Arashiyama, 3-47 Sagatenryuji Susukinobabacho, Ukyo Ward, Kyoto, 616-8385",
    note: ""
  },
  {
    id: "p-saihoji", name: "Saihō-ji (Kokedera)", ja: "西芳寺", kind: "Moss temple · by reservation", cat: "do",
    area: "kyoto", where: "Matsuo, western Kyoto",
    cid: "12604676872959930581",
    maps: "Saihōji (Kokedera) Temple, 56 Matsuojingatanicho, Nishikyo Ward, Kyoto, 615-8286",
    note: "By online reservation only, at intosaihoji.com. Bookings open two months ahead and close at 23:59 Japan time the day before. From ¥4,000 each plus a ¥110 fee, card only, up to two people per booking, and nobody under 13. Free to cancel until 4 days before, 50% from 3 days, the full price on the day, and the date cannot be changed — only cancelled and rebooked. Opening days vary, so check the calendar."
  },
  {
    id: "p-kuramadera", name: "Kurama-dera", ja: "鞍馬寺", kind: "Mountain temple", cat: "do",
    area: "kyoto", where: "Kurama",
    cid: "5775934134642836536",
    maps: "Kuramadera Temple, 1074 Kuramahonmachi, Sakyo Ward, Kyoto, 601-1111",
    note: "Open 09:00–16:15, all year. Up through the Niōmon gate and the forest to the Main Hall, then over the ridge to Kibune."
  },
  {
    id: "p-kifune", name: "Kifune Shrine", ja: "貴船神社", kind: "Shrine", cat: "do",
    area: "kyoto", where: "Kibune",
    cid: "2090262746651448459",
    maps: "Kifune Shrine, 180 Kuramakibunecho, Sakyo Ward, Kyoto, 601-1112",
    note: "The red lantern steps, then the water fortunes."
  },
  {
    id: "p-tenjuan", name: "Tenju-an", ja: "天授庵", kind: "Nanzen-ji sub-temple", cat: "do",
    area: "kyoto", where: "Nanzen-ji",
    cid: "14863736009819988434",
    maps: "Tenjuan Kyoto",
    note: ""
  },
  {
    id: "p-teamlab", name: "teamLab Biovortex Kyoto", kind: "Digital art museum", cat: "do",
    area: "kyoto", where: "South of Kyoto Station",
    cid: "755170767874408507",
    maps: "teamLab Biovortex Kyoto Kyoto",
    note: "The rainy-day alternative from the old Kibune plan."
  },
  {
    id: "p-kamo-keihoku", name: "Kamo Shrine", kind: "Shrine", cat: "do",
    area: "kyoto", where: "Keihoku, north-west Kyoto",
    cid: "11230564254737400129",
    maps: "Kamo Shrine Kyoto",
    note: ""
  },
  {
    id: "p-myonlyfragrance", name: "My Only Fragrance", kind: "Fragrance shop", cat: "shopping",
    area: "kyoto", where: "Teramachi",
    cid: "11954202361893570516",
    maps: "My Only Fragrance【 TERAMACHI 】, 〒604-8061 Kyoto, Nakagyo Ward, Shikibucho, ２４５番 MPビル１階",
    note: ""
  },
  {
    id: "p-yoshitake", name: "Wagyu Sukiyaki Yoshitake", kind: "Wagyu sukiyaki", cat: "food",
    area: "osaka", where: "Semba",
    food: ["wagyu"], cid: "2980391954317132839",
    maps: "WAGYU SUKIYAKI YOSHITAKE, 〒541-0054 Osaka, Chuo Ward, Minamihonmachi, 1 Chome−3−9 サンコービル船場",
    note: ""
  },
  {
    id: "p-idaten", name: "Wagyu IDATEN", kind: "Wagyu · yakiniku", cat: "food",
    area: "osaka", where: "Namba",
    food: ["wagyu","yakiniku"], cid: "4922574177392583819",
    maps: "Wagyu IDATEN, 〒542-0076 Osaka, Chuo Ward, Namba, 1 Chome−8−20 嘉光ビル 2階",
    note: ""
  },
  {
    id: "p-maren-shinsaibashi", name: "MAREN Shinsaibashi", kind: "Ramen · chicken soy sauce", cat: "food",
    area: "osaka", where: "Shinsaibashi",
    food: ["ramen"], cid: "3364357319532619877",
    maps: "MAREN Shinsaibashi Osaka",
    note: "Chicken shoyu ramen. The Shinsaibashi branch — the main one is in Kitashinchi."
  },
  {
    id: "p-monique", name: "MONIQUE", kind: "Bistro · wine bar", cat: "food",
    area: "osaka", where: "Nakazakichō",
    food: ["other"], cid: "14562593388351391432",
    maps: "MONIQUE, 2 Chome-4-29 Nakazakinishi, Kita Ward, Osaka, 530-0015",
    note: "Wine bar."
  },
  {
    id: "p-glitch", name: "GLITCH COFFEE OSAKA", kind: "Coffee", cat: "coffee",
    area: "osaka", where: "Nakanoshima",
    food: ["cafe"], cid: "6806706993377406620",
    maps: "GLITCH COFFEE OSAKA Osaka",
    note: ""
  },
  {
    id: "p-sancya", name: "SANCYA GOOD HORUMONZ", kind: "Horumon izakaya", cat: "food",
    area: "tokyo", where: "Sangenjaya",
    food: ["izakaya","yakiniku"], cid: "16194779025572897733",
    maps: "SANCYA GOOD HORUMONZ, 2 Chome-20-7 Taishido, Setagaya City, Tokyo 154-0004",
    note: ""
  },
  {
    id: "p-azumi", name: "Azumi Steel", kind: "Teppan izakaya", cat: "food",
    area: "tokyo", where: "Sangenjaya",
    food: ["izakaya"], cid: "10706540190242190694",
    maps: "Azumi Steel, 〒154-0004 Tokyo, Setagaya City, Taishido, 4 Chome−25−11 あずみビル 1F",
    note: ""
  },
  {
    id: "p-anpontan", name: "Anpontan", kind: "Izakaya", cat: "food",
    area: "tokyo", where: "Kōenji",
    food: ["izakaya"], cid: "18443229032418548115",
    maps: "Anpontan, 4 Chome-49-1 Koenjiminami, Suginami City, Tokyo 166-0003",
    note: ""
  },
  {
    id: "p-gonpachi", name: "Gonpachi Nishi-Azabu", kind: "Izakaya · kushiyaki · soba", cat: "food",
    area: "tokyo", where: "Nishi-Azabu",
    food: ["izakaya","yakitori","noodles"], cid: "1337614840498094983",
    maps: "Gonpachi Nishi-Azabu, 1 Chome-13-11 Nishiazabu, Minato City, Tokyo 106-0031",
    note: ""
  },
  {
    id: "p-goodness", name: "goodNess Shibuya", ja: "goodNess渋谷", kind: "Brunch · wine bar", cat: "food",
    area: "tokyo", where: "Shibuya",
    food: ["cafe","other"], cid: "9284342398162977529",
    maps: "goodNess渋谷 Tokyo",
    note: ""
  },
  {
    id: "p-sabasu", name: "Sabasu", ja: "サバス", kind: "Pizza · wine bar", cat: "food",
    area: "tokyo", where: "Akasaka",
    food: ["italian"], cid: "1191721468217304870",
    maps: "Sabasu サバス Tokyo",
    note: ""
  },
  {
    id: "p-hikiniku-kichijoji", name: "Hikiniku to Come Kichijōji", kind: "Hamburg steak", cat: "food",
    area: "tokyo", where: "Kichijōji",
    food: ["wagyu"], cid: "2802556918696748575",
    maps: "Hikiniku to Come Kichijoji Tokyo",
    note: ""
  },
  {
    id: "p-shibaura", name: "Shibaura Horumon", ja: "新宿もつ焼き芝浦ホルモン", kind: "Motsuyaki izakaya", cat: "food",
    area: "tokyo", where: "Shinjuku",
    food: ["izakaya","yakitori"], cid: "17601151525547060217",
    maps: "新宿もつ焼き芝浦ホルモン Tokyo",
    note: ""
  },
  {
    id: "p-hamburgyoshi", name: "Hamburg YOSHI", kind: "Hamburg steak", cat: "food",
    area: "tokyo", where: "Harajuku",
    food: ["wagyu"], cid: "11643511632178216263",
    maps: "Hamburg YOSHI, 〒150-0001 Tokyo, Shibuya, Jingumae, 6 Chome−12−6 J-Cube B, B 1F",
    note: ""
  },
  {
    id: "p-menmitsuwi", name: "Men Mitsuwi", kind: "Ramen", cat: "food",
    area: "tokyo", where: "Tawaramachi",
    food: ["ramen"], cid: "8702679645026182796",
    maps: "Men Mitsuwi, 〒111-0042 Tokyo, Taito City, Kotobuki, 2 Chome−9−15 サカエビル 1階",
    note: ""
  },
  {
    id: "p-sushihajime", name: "Sushi Hajime", kind: "Sushi", cat: "food",
    area: "tokyo", where: "Roppongi",
    food: ["sushi"], cid: "12240280325698392858",
    maps: "Sushi Hajime Tokyo",
    note: ""
  },
  {
    id: "p-kushigin", name: "Kushigin", kind: "Standing bar · kushiyaki", cat: "food",
    area: "tokyo", where: "Akihabara",
    food: ["izakaya","yakitori"], cid: "6749378804094411146",
    maps: "Kushigin, 1 Chome-8-4 Kanda Sakumacho, Chiyoda City, Tokyo 101-0025",
    note: "Seems to have a cool, authentic atmosphere — not tried yet."
  },
  {
    id: "p-kikotsuya", name: "Kikotsuya", kind: "Iekei ramen", cat: "food",
    area: "tokyo", where: "Iwamotochō",
    food: ["ramen"], cid: "15964515600792172735",
    maps: "Kikotsuya Novel Iekei Ramen, 〒101-0032 Tokyo, Chiyoda City, Iwamotochō, 3 Chome−3−1 木村ビル 1F",
    note: "Great ramen. Add the egg and toppings yourself on the ticket machine."
  },
  {
    id: "p-menchirashi", name: "Menchirashi", kind: "Udon", cat: "food",
    area: "tokyo", where: "Harajuku",
    food: ["noodles"], cid: "6906870575870610827",
    maps: "Menchirashi, 〒150-0001 Tokyo, Shibuya, Jingumae, 6 Chome−13−7 1F",
    note: ""
  },
  {
    id: "p-age3-harajuku", name: "Age.3×Q Harajuku", kind: "Desserts · takeaway", cat: "coffee",
    area: "tokyo", where: "Harajuku",
    food: ["sweets","cafe"], cid: "13467740742160469591",
    maps: "Age.3×Q HARAJUKU Tokyo",
    note: ""
  },
  {
    id: "p-age3-asakusa", name: "Age.3 Asakusa", kind: "Desserts · takeaway", cat: "coffee",
    area: "tokyo", where: "Asakusa",
    food: ["sweets","cafe"], cid: "11424241562872171484",
    maps: "Age.3 ASAKUSA Tokyo",
    note: ""
  },
  {
    id: "p-frenchtoast", name: "The French Toast Factory", kind: "French toast · pancakes", cat: "coffee",
    area: "tokyo", where: "Akihabara · Yodobashi Akiba 8F",
    food: ["sweets","cafe"], cid: "1491459533799686070",
    maps: "The French Toast Factory Yodobashi AKIBA 8F, 〒101-0028 Tokyo, Chiyoda City, Kanda Hanaokacho, 1-1 ヨドバシAkiba8F",
    note: "Order the fluffy pancakes."
  },
  {
    id: "p-bluebottle", name: "Blue Bottle Shinagawa", kind: "Coffee", cat: "coffee",
    area: "tokyo", where: "Shinagawa",
    food: ["cafe"], cid: "339898321736944576",
    maps: "Blue Bottle Coffee - Shinagawa Cafe Tokyo",
    note: ""
  },
  {
    id: "p-onibus", name: "Onibus Coffee", kind: "Coffee", cat: "coffee",
    area: "tokyo", where: "Nakameguro",
    food: ["cafe"], cid: "11876988200528194964",
    maps: "Onibus Coffee, 2 Chome-14-1 Kamimeguro, Meguro City, Tokyo 153-0051",
    note: "A cool café looking out over the railway. Try the banana bread."
  },
  {
    id: "p-onibus-3", name: "ONIBUS COFFEE Nakameguro 3-chōme", kind: "Coffee", cat: "coffee",
    area: "tokyo", where: "Nakameguro",
    food: ["cafe"], cid: "16085544155917431543",
    maps: "ONIBUS COFFEE Nakameguro 3 Chome Tokyo",
    note: ""
  },
  {
    id: "p-turret", name: "Turret Coffee", kind: "Coffee", cat: "coffee",
    area: "tokyo", where: "Tsukiji",
    food: ["cafe"], cid: "1983689277156776805",
    maps: "Turret Coffee, 2 Chome-12-6 Tsukiji, Chuo City, Tokyo 104-0045",
    note: "Supposedly a Michelin coffee."
  },
  {
    id: "p-taw", name: "TAW.", kind: "Coffee", cat: "coffee",
    area: "tokyo", where: "Kōenji",
    food: ["cafe"], cid: "3882160721867661876",
    maps: "TAW., 4 Chome-7-6 Koenjiminami, Suginami City, Tokyo 166-0003",
    note: "Nice coffee shop."
  },
  {
    id: "p-lion", name: "Music Bar Lion", kind: "Music bar", cat: "do",
    area: "tokyo", where: "Shibuya",
    cid: "15711839861199782352",
    maps: "Music Bar Lion, 6 Chome-19-17 Jingumae, Shibuya, Tokyo 150-0001",
    note: ""
  },
  {
    id: "p-3313", name: "record bar 33 1/3rpm", kind: "Record bar", cat: "do",
    area: "tokyo", where: "Shibuya",
    cid: "9145244086491174842",
    maps: "record bar 33 1/3rpm, 〒150-0043 Tokyo, Shibuya, Dogenzaka, 1 Chome−6−2 渋谷ファイブビル 地下",
    note: "Cool bar."
  },
  {
    id: "p-senrogai", name: "Shimokita Senrogai Open Space", kind: "Open space · markets", cat: "do",
    area: "tokyo", where: "Shimokitazawa",
    cid: "14620187529602559460",
    maps: "Shimokita Senrogai Open Space Tokyo",
    note: "Where the Senrogai flea market happens, on irregular dates."
  },
  {
    id: "p-nakameguro", name: "Nakameguro", kind: "Neighbourhood", cat: "do",
    area: "tokyo", where: "Meguro",
    cid: "17770709197957331452",
    maps: "Naka-meguro Sta., 3 Chome-4-1 Kamimeguro, Meguro City, Tokyo 153-0051",
    note: "A cool, quiet neighbourhood with lots of good food."
  },
  {
    id: "p-koenji", name: "Kōenji", kind: "Neighbourhood · thrift shops", cat: "shopping",
    area: "tokyo", where: "Suginami",
    cid: "16352347383568242992",
    maps: "Kōenji Station, Suginami City, Tokyo",
    note: "Nice vibes and cool thrift shops."
  },
  {
    id: "p-nakano", name: "Nakano", kind: "Shopping avenue", cat: "shopping",
    area: "tokyo", where: "Nakano",
    cid: "5324428965627346351",
    maps: "Nakano Station, Nakano, Nakano City, Tokyo 164-0001",
    note: "Great shopping avenue."
  },
  {
    id: "p-yanakaginza", name: "Yanaka Ginza", kind: "Shopping street", cat: "shopping",
    area: "tokyo", where: "Yanaka",
    cid: "17238952707303622496",
    maps: "Yanaka Ginza, 3 Chome-13-1 Yanaka, Taito City, Tokyo 110-0001",
    note: "A cool street of shops. The whole area is calm and quiet, with fewer tourists — nice to wander."
  },
  {
    id: "p-togijin", name: "Togijin Yanaka Ginza", kind: "Knife shop", cat: "shopping",
    area: "tokyo", where: "Yanaka",
    cid: "4575324851850933702",
    maps: "Togijin Yanaka Ginza store, 〒110-0001 Tokyo, Taito City, Yanaka, 3 Chome−12 ３things.YANAKA1F",
    note: "A cool knife shop with nice prices."
  },
  {
    id: "p-meganeichiba", name: "Meganeichiba, Nakano Sun Mall", kind: "Glasses shop", cat: "shopping",
    area: "tokyo", where: "Nakano",
    cid: "17971519504980567357",
    maps: "Meganeichiba Nakanosanmoruten, 5 Chome-66-7 Nakano, Nakano City, Tokyo 164-0001",
    note: "Amazing service."
  },
  {
    id: "p-yamameya", name: "Yamameya", kind: "Izakaya", cat: "food",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["izakaya"], cid: "16924704751824104341",
    maps: "Yamameya Matsumoto",
    note: ""
  },
  {
    id: "p-asahido", name: "Asahido", kind: "Izakaya", cat: "food",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["izakaya"], cid: "9497481251916970340",
    maps: "Asahido Matsumoto",
    note: ""
  },
  {
    id: "p-marufuku", name: "Marufuku", kind: "Shinshū gyoza izakaya", cat: "food",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["izakaya"], cid: "12365337261045004971",
    maps: "Marufuku Original Shinshu Bite-Size Gyoza Matsumoto",
    note: ""
  },
  {
    id: "p-thumbsup", name: "Thumbs Up", kind: "Japanese curry", cat: "food",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["other"], cid: "2050446235743807473",
    maps: "Thumbs Up Matsumoto",
    note: "Chicken curry."
  },
  {
    id: "p-burgerchop", name: "Bar & Grill BURGER CHOP", kind: "Burgers", cat: "food",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["other"], cid: "3487380249326536418",
    maps: "Bar & Grill BURGER CHOP Matsumoto",
    note: ""
  },
  {
    id: "p-taiyo", name: "Thai Restaurant Taiyō", ja: "タイレストラン太陽", kind: "Thai", cat: "food",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["other"], cid: "8641501195763214439",
    maps: "タイレストラン太陽 Matsumoto",
    note: ""
  },
  {
    id: "p-isami", name: "Ko-Hi-ya ISAMI", kind: "Coffee", cat: "coffee",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["cafe"], cid: "8335736537805197494",
    maps: "Ko-Hi-ya ISAMI Matsumoto",
    note: ""
  },
  {
    id: "p-sioribi", name: "Sioribi", kind: "Coffee", cat: "coffee",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["cafe"], cid: "9619754640281663081",
    maps: "Sioribi Matsumoto",
    note: "Cool coffee spot."
  },
  {
    id: "p-alpscoffee", name: "Alps Coffee Lab", kind: "Coffee", cat: "coffee",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["cafe"], cid: "11680320952980335192",
    maps: "Alps Coffee Lab Matsumoto",
    note: ""
  },
  {
    id: "p-eonta", name: "Eonta", kind: "Bar · café", cat: "coffee",
    area: "matsumoto", where: "Central Matsumoto",
    food: ["cafe"], cid: "13168302814948402253",
    maps: "Eonta Matsumoto",
    note: ""
  },
  {
    id: "p-peg", name: "peg", kind: "Wine bar", cat: "do",
    area: "matsumoto", where: "Central Matsumoto",
    cid: "9282875399196466696",
    maps: "peg Matsumoto",
    note: ""
  },
  {
    id: "p-shirahone", name: "Shirahone Onsen open-air bath", kind: "Open-air onsen", cat: "do",
    area: "matsumoto", where: "Shirahone Onsen",
    cid: "2369578284189636193",
    maps: "Shirahone Onsen Open-air Bath, 〒390-1515 Nagano, Matsumoto, Azumi, 白骨4197-4",
    note: ""
  },
  {
    id: "p-norikura-vc", name: "Norikura Visitor Center", kind: "Visitor centre", cat: "nature",
    area: "matsumoto", where: "Norikura Kōgen",
    cid: "4474663904497524076",
    maps: "Chubusangaku National Park Norikura Visitor Center Matsumoto",
    note: ""
  },
  {
    id: "p-shotaudon", name: "Shōta no Udon", ja: "翔太のうどん", kind: "Udon", cat: "food",
    area: "gujo", where: "Gujō Hachiman",
    food: ["noodles"], cid: "5366817791230317481",
    maps: "翔太のうどん Gujo",
    note: "The place is packed — come early."
  },
  {
    id: "p-shiratorisou", name: "Keishōan Shiratori-sō", ja: "鶏匠庵 白鳥荘", kind: "Chicken and soba", cat: "food",
    area: "gujo", where: "North of Gujō Hachiman",
    food: ["noodles"], cid: "10517703282625269764",
    maps: "鶏匠庵 白鳥荘 Gujo",
    note: ""
  },
  {
    id: "p-genchan", name: "Yakiniku Genchan", ja: "焼肉げんちゃん", kind: "Yakiniku", cat: "food",
    area: "gujo", where: "Meihō, Gujō",
    food: ["yakiniku"], cid: "16666159911064316556",
    maps: "焼肉げんちゃん Gujo",
    note: ""
  },
  {
    id: "p-supple", name: "SUPPLE COFFEE ROASTERS", kind: "Coffee", cat: "coffee",
    area: "gujo", where: "Gujō Hachiman",
    food: ["cafe"], cid: "9125645354933986889",
    maps: "SUPPLE COFFEE ROASTERS Gujo",
    note: "Nice coffee with great river views."
  },
  {
    id: "p-konohananoyu", name: "Konohananoyu", kind: "Onsen", cat: "do",
    area: "fuji", where: "Gotemba",
    cid: "6380248877739393966",
    maps: "Konohananoyu, 2839-1 Fukasawa, Gotemba, Shizuoka 412-0023",
    note: "Onsen with Fuji views."
  },
  {
    id: "p-cycl", name: "CYCL", kind: "Sauna", cat: "do",
    area: "fuji", where: "Lake Yamanaka",
    cid: "2059891203493595106",
    maps: "CYCL Shizuoka",
    note: ""
  },
  {
    id: "p-momiji-kawaguchi", name: "Momiji Tunnel", kind: "Maple corridor", cat: "nature",
    area: "fuji", where: "Lake Kawaguchi",
    cid: "16773994468561148826",
    maps: "Momiji Tunnel Shizuoka",
    note: ""
  },
  {
    id: "p-yushin", name: "Yushin Valley", kind: "Valley", cat: "nature",
    area: "fuji", where: "Yamakita, Kanagawa",
    cid: "5426022625903707138",
    maps: "Yushin Valley, Kurokura, Yamakita, Ashigarakami District, Kanagawa 258-0202",
    note: ""
  },
  {
    id: "p-kimito", name: "Kimito Coffee Biwako Roastery", kind: "Coffee", cat: "coffee",
    area: null, where: "Hikone, Lake Biwa",
    food: ["cafe"], cid: "17204188940315059625",
    maps: "Kimito Coffee Biwako Roastery",
    note: ""
  },
  {
    id: "p-tateishi", name: "Tateishi Park", kind: "Park above Lake Suwa", cat: "nature",
    area: null, where: "Suwa",
    cid: "17302496086819496110",
    maps: "Tateishi Park",
    note: ""
  },
  {
    id: "p-tenkawa", name: "Tenkawa", kind: "Mountain village", cat: "nature",
    area: null, where: "Yoshino, Nara",
    cid: "15745788243563339427",
    maps: "Tenkawa, Yoshino District, Nara",
    note: "A village that looks amazing for a sunny day."
  },
  {
    id: "p-enza", name: "Enza Cafe & Ramen", kind: "Ramen · café", cat: "food",
    area: null, where: "Yamanouchi, Nagano",
    food: ["ramen"], cid: "559435638024647332",
    maps: "Enza Cafe & Ramen Enza, 1421-1 Hirao, Yamanochi, Shimotakai District, Nagano 381-0401",
    note: "Great chicken ramen, worth trying."
  }
];

export const CATEGORIES = [
  { id: "food", label: "Food" },
  { id: "coffee", label: "Coffee" },
  { id: "do", label: "Things to do" },
  { id: "shopping", label: "Shopping" },
  { id: "nature", label: "Nature" }
];

/* Food types are practical filters, not decoration. A place can carry more
   than one — a yakitori-ya is often an izakaya too. Tagged by hand from the
   Google category and the menu we know, never from the name alone. */
export const FOOD_TYPES = [
  { id: "sushi",    label: "Sushi" },
  { id: "ramen",    label: "Ramen" },
  { id: "yakiniku", label: "Yakiniku" },
  { id: "izakaya",  label: "Izakaya" },
  { id: "yakitori", label: "Yakitori" },
  { id: "wagyu",    label: "Wagyu / Steak" },
  { id: "italian",  label: "Italian" },
  { id: "noodles",  label: "Udon / Soba" },
  { id: "tempura",  label: "Tempura" },
  { id: "cafe",     label: "Cafés / Coffee" },
  { id: "sweets",   label: "Desserts / Bakeries" },
  { id: "other",    label: "Other" }
];

export const placeById = Object.fromEntries(places.map(p => [p.id, p]));

/* A place imported from the Google Maps list keeps its Maps id, which opens
   the exact pin rather than whatever a text search lands on. */
export function mapsUrl(place) {
  if (place.cid) return "https://www.google.com/maps?cid=" + place.cid;
  return "https://www.google.com/maps/search/?api=1&query=" +
         encodeURIComponent(place.maps || place.name);
}
