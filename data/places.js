/* Everything we deliberately saved, once. Today, Saved and Search all read
   from here — a place is never written twice.

   `note` is why WE saved it. Ratings, hours and reviews stay in Google Maps
   on purpose: they change, and ours would go stale.
   `maps` is the query Google Maps resolves — Japanese where that finds it
   more reliably than the romanised name.
   `pin: true` means don't-forget-this, not favourite. Everything here is
   already saved, so a favourite flag would say nothing. */

export const places = [
  /* ============================ Kyoto ============================ */
  {
    id: "p-hikiniku", name: "Hikiniku to Come", ja: "挽肉と米", kind: "Hamburg steak", cat: "food",
    area: "kyoto", where: "Gion", pin: true,
    maps: "挽肉と米 京都",
    note: "Charcoal hamburg, ¥1,980 for the set. 100% beef, so it works for Noa. Right by Tatsumi-bashi on the Shirakawa, walking distance from MIRU. Closed Wednesdays, cashless only. The 8 Oct online seats sold out. The remaining ways in: cancellations on TableCheck until 30 Sep, the free list that opens 7 days ahead, same-day cancellations announced on X, or the morning line — tickets from about 09:00, sometimes 08:30, and on busy days the line forms from about 07:00."
  },
  {
    id: "p-gansan", name: "Yakiniku no GANSAN", kind: "Yakiniku", cat: "food",
    area: "kyoto", where: "Pontochō",
    maps: "Yakiniku GANSAN Pontocho Kyoto",
    note: "Beef yakiniku in Pontochō. @gansan_pontocho."
  },
  {
    id: "p-nishiki", name: "Ramen Nishiki", kind: "Ramen", cat: "food",
    area: "kyoto", where: "Kyoto",
    maps: "Ramen Nishiki Kyoto",
    note: "Check the broth is not pork-based before Noa orders."
  },
  {
    id: "p-brulee", name: "Brulee Kyoto", ja: "烏丸五条店", kind: "Donuts", cat: "coffee",
    area: "kyoto", where: "Karasuma-Gojō",
    maps: "Brulee 京都 烏丸五条店",
    note: "Donuts. The Karasuma-Gojō branch."
  },
  {
    id: "p-2050", name: "2050 coffee", ja: "祇園白川店", kind: "Coffee", cat: "coffee",
    area: "kyoto", where: "Gion Shirakawa",
    maps: "2050 coffee 祇園白川店",
    note: ""
  },
  {
    id: "p-panel", name: "Panel Cafe", kind: "Café", cat: "coffee",
    area: "kyoto", where: "Kyoto",
    maps: "Panel Cafe Kyoto",
    note: ""
  },
  {
    id: "p-uru", name: "uru coffee", kind: "Coffee", cat: "coffee",
    area: "kyoto", where: "Kyoto",
    maps: "uru coffee Kyoto",
    note: ""
  },
  {
    id: "p-365", name: "365 Sakaba", kind: "Izakaya", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    maps: "365 Sakaba Kawaramachi Kyoto",
    note: "Cheap, loud izakaya. Walk in, no booking."
  },
  {
    id: "p-alchemist", name: "Bar Alchemist", kind: "Cocktail bar", cat: "food",
    area: "kyoto", where: "Kyoto",
    maps: "Bar Alchemist Kyoto",
    note: "Cocktails. Walk in."
  },
  {
    id: "p-ing", name: "Rocking Bar ING", kind: "Rock bar", cat: "food",
    area: "kyoto", where: "Kyoto",
    maps: "Rocking Bar ING Kyoto",
    note: "Rock and records. Walk in."
  },

  /* ============================ Osaka ============================ */
  {
    id: "p-gyukotsuo", name: "Ninjomenya Gyukotsuo", ja: "人情麺屋 牛骨王", kind: "Ramen · beef broth", cat: "food",
    area: "osaka", where: "Minami-Semba", pin: true,
    maps: "人情麺屋 牛骨王 南船場",
    note: "Beef-bone broth instead of pork, so it is the safe ramen for Noa. Small counter, ticket machine."
  },
  {
    id: "p-maren", name: "maren", ja: "maren 北新地本店", kind: "Ramen · chicken soy sauce", cat: "food",
    area: "osaka", where: "Kitashinchi", pin: true,
    maps: "maren 北新地本店",
    note: "The main branch, in Dōjima — the one we want, not the Shinsaibashi one. Soy-sauce ramen from a washoku chef, built on jidori chicken; the 特製 special version of the chicken soy-sauce ramen is ¥1,550 and the one they push. No reservations, twelve counter seats. Sundays 11:00–15:00 and 17:00–22:00; the rest of the week the evening runs to 05:00. Four minutes from JR Kitashinchi, five from Nishi-Umeda. The broth is chicken, but the five-kinds-of-chāshū mazesoba may not be, so ask for Noa."
  },
  {
    id: "p-gorichan", name: "Onigiri Gorichan", ja: "おにぎりごりちゃん", kind: "Onigiri", cat: "food",
    area: "osaka", where: "Nankai Namba Station",
    maps: "おにぎりごりちゃん 南海なんば駅店",
    note: "Inside the station we arrive at from KIX and walk from Meander. Good for an early departure morning."
  },
  {
    id: "p-tokito", name: "Tokito", ja: "と木と", kind: "Wagyu sando", cat: "food",
    area: "osaka", where: "Karahori", pin: true,
    maps: "と木と 大阪 瓦屋町",
    note: "Noa's highlight. Kawarayamachi 1-2-11 (からほりかわらやえん101), a few minutes from Matsuyamachi station. The wagyu sando is a lunch thing: 11:00–15:00, walk-in only, made in limited numbers, so go at opening. Dinner, 18:00–24:00, is bookable. Closed on irregular days, posted on its Instagram stories (@tokito_karahori)."
  },
  {
    id: "p-kitan", name: "Kitan Hibiki", kind: "Burgers", cat: "food",
    area: "osaka", where: "Osaka",
    maps: "Kitan Hibiki Osaka",
    note: "We go for the burgers, and they are only served 17:00–19:00. A 20:00 booking means no burger and no refund."
  },
  {
    id: "p-joto", name: "Joto Curry", kind: "Curry", cat: "food",
    area: "osaka", where: "Osaka",
    maps: "Joto Curry Osaka",
    note: ""
  },
  {
    id: "p-itosen", name: "Itosen", kind: "Chinese", cat: "food",
    area: "osaka", where: "Osaka",
    maps: "Itosen Osaka",
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
    note: "Lantern-lit stone alley five minutes from Meander. With Ura-Namba it is the whole of the arrival evening — more authentic and much less crowded than Dōtonbori."
  },
  {
    id: "p-tenjinbashi", name: "Tenjinbashisuji", ja: "天神橋筋商店街", kind: "Shopping arcade", cat: "shopping",
    area: "osaka", where: "Osaka",
    maps: "天神橋筋商店街",
    note: "The longest shopping arcade in Japan, and the food along it is local rather than aimed at visitors."
  },
  {
    id: "p-grenier", name: "grenier", ja: "北浜店", kind: "Choux pastry", cat: "coffee",
    area: "osaka", where: "Kitahama",
    maps: "grenier 北浜店",
    note: "The crème brûlée choux Noa wants. Open every day, 10:00–19:00."
  },
  {
    id: "p-mooken", name: "MooKEN", kind: "Cream puffs", cat: "coffee",
    area: "osaka", where: "Osaka",
    maps: "MooKEN cream puff Osaka",
    note: "Cream puffs."
  },
  {
    id: "p-brooklyn", name: "Brooklyn Roasting Company", kind: "Coffee", cat: "coffee",
    area: "osaka", where: "Kitahama",
    maps: "Brooklyn Roasting Company Kitahama",
    note: ""
  },
  {
    id: "p-yatt", name: "Yatt Nakazakichō", kind: "Coffee", cat: "coffee",
    area: "osaka", where: "Nakazakichō",
    maps: "Yatt Nakazakicho Osaka",
    note: ""
  },
  {
    id: "p-pognam", name: "pognam", kind: "Café", cat: "coffee",
    area: "osaka", where: "Osaka",
    maps: "pognam Osaka",
    note: "Sent through without details — worth working out what it is before we go."
  },
  {
    id: "p-flag", name: "MUSICBAR FLAG", kind: "Music bar", cat: "do",
    area: "osaka", where: "Nipponbashi, Naniwa-ku",
    maps: "MUSICBAR FLAG 日本橋 大阪",
    note: "Nipponbashi 5-13-7, Ueda building."
  },
  {
    id: "p-towerknives", name: "Tower Knives Osaka", kind: "Knives", cat: "shopping",
    area: "osaka", where: "Shinsekai", pin: true,
    maps: "Tower Knives Osaka",
    note: "Knives, next to Tsūtenkaku, English-speaking staff. This is the first knife opportunity of the trip, before Seki on 9 Oct. Whatever we buy flies home checked, never in the cabin."
  },
  {
    id: "p-katsuoji", name: "Katsuō-ji", ja: "勝尾寺", kind: "Temple", cat: "do",
    area: "osaka", where: "Minoh",
    maps: "Katsuoji",
    note: "The daruma temple above Minoh, open 08:00–17:00. First stop on 6 Oct, because the taxis to the falls wait here and not the other way round."
  },
  {
    id: "p-fukushima", name: "Fukushima", kind: "Izakaya district", cat: "food",
    area: "osaka", where: "Osaka", area_kind: "district",
    maps: "Fukushima Osaka izakaya",
    note: "A dinner district rather than one restaurant."
  },
  {
    id: "p-tenma", name: "Tenma", kind: "Izakaya district", cat: "food",
    area: "osaka", where: "Osaka", area_kind: "district",
    maps: "Tenma Osaka izakaya",
    note: "Izakaya and bar hopping."
  },
  {
    id: "p-donchan", name: "Don-chan", ja: "肉大衆酒場ドンちゃん", kind: "Izakaya · meat, all-you-can-eat", cat: "food",
    area: "osaka", where: "Umeda Higashidōri",
    maps: "肉大衆酒場ドンちゃん 梅田",
    note: "A meat-focused all-you-can-eat-and-drink izakaya, so check what is not pork before settling in. Weekdays from 17:00, closed on irregular days."
  },

  {
    id: "p-hinode", name: "Hinode Udon", ja: "日の出うどん", kind: "Udon", cat: "food",
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
    area: null, where: "Mino, Gifu",
    maps: "山水本店 美濃市",
    note: "Lunch candidate for the Mino version. A Taishō-era place doing udon and teishoku that locals actually eat at. 11:00–14:30, closed Wednesdays — 9 Oct is a Friday, so open — and it has its own parking."
  },
  {
    id: "p-happastand", name: "HAPPA STAND", kind: "Tea in an old house", cat: "coffee",
    area: null, where: "Mino, Gifu",
    maps: "HAPPA STAND 美濃市",
    note: "The lighter Mino option: organic tea in a renovated machiya, 8:00–15:00, closed Wednesdays and Thursdays. Good if we want the street and the river more than a full sit-down meal."
  },

  /* ============================ Gujō ============================ */
  {
    id: "p-gujoshokudo", name: "Gujō Hachiman Old Town Hall canteen", ja: "郡上八幡旧庁舎食堂", kind: "Keichan · local set meals", cat: "food",
    area: "gujo", where: "Jōkamachi Plaza, Gujō",
    maps: "郡上八幡旧庁舎食堂",
    note: "Lunch candidate for the Gujō morning on the 10th. Keichan — chicken fried in miso — is the Gujō dish, and the set is about ¥1,080. Open 10:00–16:00 with parking, right in the middle of town, no booking."
  },
  {
    id: "p-izumizaka", name: "Izumizaka", ja: "鉄板料理 泉坂", kind: "Hōba miso on the griddle", cat: "food",
    area: "gujo", where: "Central Gujō Hachiman",
    maps: "鉄板料理 泉坂 郡上八幡",
    note: "The other Gujō lunch: hōba-miso-yaki, meat and vegetables grilled on a magnolia leaf with miso. In the middle of the old castle town."
  },
  {
    id: "p-daikokuya", name: "Daikokuya Gujō", ja: "だいこく家 郡上店", kind: "Wagyu yakiniku", cat: "food",
    area: "gujo", where: "Gujō Hachiman", pin: true,
    maps: "だいこく家 郡上",
    note: "Wagyu yakiniku. First choice for the one Gujō evening — small town, so book it."
  },
  {
    id: "p-igawa", name: "Igawa Komichi", ja: "いがわ小径", kind: "Water lane", cat: "do",
    area: "gujo", where: "Gujō Hachiman",
    maps: "いがわ小径 郡上八幡",
    note: "The water channel running behind the houses with carp in it. Sōgi-sui, the spring, and Yanaka Mizu-no-Komichi are the same short walk — this is what the afternoon is for."
  },
  {
    id: "p-gonza", name: "Pizzeria Gonza", kind: "Pizza", cat: "food",
    area: "gujo", where: "Gujō Hachiman",
    maps: "Pizzeria Gonza Gujo",
    note: "A real backup, not a consolation prize."
  },

  /* ============================ Kiso valley ============================ */
  {
    id: "p-atera", name: "Atera Gorge", ja: "阿寺渓谷", kind: "Emerald granite gorge", cat: "nature",
    area: "matsumoto", where: "Ōkuwa, Kiso", pin: true,
    maps: "阿寺渓谷",
    note: "Turquoise water over white granite under cypress forest, about 15 km of valley. Park at the Akahiko monument car park and walk from there — the trail out to Unarijima and the Nakahatchō suspension bridge is the best of it. Private cars are restricted between the entrance and the campground in high summer, but not in October. About two hours there and back on foot from the car park, and an hour and forty minutes each way from Jujo, so it is a day-trip option for the 11th or 12th."
  },
  {
    id: "p-forespa", name: "Forespa Kiso canteen", ja: "フォレスパ木曽", kind: "Soba set with gohei mochi", cat: "food",
    area: "matsumoto", where: "Ōkuwa, by the gorge",
    maps: "フォレスパ木曽 阿寺荘",
    note: "Lunch candidate, and the closest one to Atera — it sits at the mouth of the gorge. Soba teishoku that comes with gohei mochi. 10:00–14:00, closed Wednesdays, so open on the 11th and 12th."
  },
  {
    id: "p-nakamura", name: "Shokudō Nakamura", ja: "食堂中村", kind: "Gohei mochi", cat: "food",
    area: "matsumoto", where: "Agematsu, Kiso",
    maps: "食堂中村 上松",
    note: "Lunch candidate on the way north. Known for gohei mochi in a sweet-savoury soy tare heavy with walnut, sesame and peanut, made by hand without additives. Small and local rather than polished."
  },
  {
    id: "p-kurumaya", name: "Kurumaya, Route 19 branch", ja: "くるまや国道店", kind: "Kiso soba", cat: "food",
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
    area: "fuji", where: "By Otodome Falls",
    maps: "平石屋 富士宮やきそば 白糸の滝",
    note: "Lunch candidate. The local speciality, cooked on a teppan in the room, with terrace seating right by Otodome. Own car park, free with ¥600 spent. Being at the falls means zero extra driving — but confirm Tuesday opening."
  },
  {
    id: "p-asagiri", name: "Buffet Restaurant Fujisan", ja: "ビュッフェレストランふじさん", kind: "Buffet · local dairy", cat: "food",
    area: "fuji", where: "Asagiri Food Park",
    maps: "ビュッフェレストランふじさん あさぎりフードパーク",
    note: "Lunch candidate. Inside Asagiri Food Park on Route 139, directly on the road south. Built around Asagiri dairy milk and local eggs. 11:00–15:40, last orders 14:30, big car park, no booking needed. Closures are irregular — confirm the day."
  },
  {
    id: "p-masunoie", name: "Masu no Ie", ja: "鱒の家", kind: "Rainbow trout", cat: "food",
    area: "fuji", where: "Inokashira, Fujinomiya",
    maps: "鱒の家 猪之頭",
    note: "Lunch candidate. Trout farmed in Fuji spring water, which is what this valley is known for. Lunch only, 11:00–15:00, sets from about ¥2,100. Sit-down and unhurried. Confirm Tuesday opening."
  },
  {
    id: "p-odaru", name: "Ō-daru Falls", ja: "大滝", kind: "Waterfall", cat: "nature",
    area: "fuji", where: "Kawazu, Izu",
    maps: "大滝 滝見台 河津",
    note: "The viewing platform is public and free, boardwalk open 08:00–17:00 in October. Getting down to the plunge pool itself is only through AMAGISO, which charges."
  },
  {
    id: "p-hodohodo", name: "HODOHODO Base", ja: "ホドホドBase", kind: "Café · lunch", cat: "coffee",
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
    area: "fuji", where: "Fujinomiya", pin: true,
    maps: "白糸の滝 富士宮",
    note: "A 150 m curtain of spring water coming straight out of the rock face rather than over it. Municipal car park, 100+ spaces, ¥500 for the day. Give it an hour and a half to two hours with Otodome — this is not a photo stop."
  },
  {
    id: "p-asama", name: "Kawaguchi Asama Shrine", ja: "河口浅間神社", kind: "Shrine", cat: "do",
    area: "fuji", where: "Kawaguchiko",
    maps: "河口浅間神社",
    note: ""
  },
  {
    id: "p-mononoke", name: "Mononoke Forest", kind: "Forest", cat: "nature",
    area: "fuji", where: "Fujinomiya",
    maps: "Mononoke Forest Japan",
    note: ""
  },
  {
    id: "p-makaino", name: "Makaino Farm Resort", kind: "Farm", cat: "do",
    area: "fuji", where: "Fujinomiya",
    maps: "まかいの牧場",
    note: ""
  },
  {
    id: "p-moom", name: "MooM Cafe", kind: "Café", cat: "coffee",
    area: "fuji", where: "Fuji area",
    maps: "MooM Cafe Japan",
    note: ""
  },

  /* ============================ Tokyo ============================ */
  {
    id: "p-t-nakameguro", name: "T", ja: "中目黒", kind: "Wagyu T-bone", cat: "food",
    area: "tokyo", where: "Nakameguro", pin: true,
    maps: "T 中目黒 ステーキ",
    note: "Omi beef T-bone. Booked for our last night in Japan: Monday 19 Oct at 20:30, the T Genesis course. Tel 03-6303-0849."
  },
  {
    id: "p-marumo", name: "pizza marumo", kind: "Pizza", cat: "food",
    area: "tokyo", where: "Tokyo",
    maps: "pizza marumo Tokyo",
    note: ""
  },
  {
    id: "p-coconemaru", name: "Coco Nemaru Ginza", kind: "Yakiniku", cat: "food",
    area: "tokyo", where: "Ginza",
    maps: "Coco Nemaru Ginza",
    note: ""
  },
  {
    id: "p-philocoffea", name: "PHILOCOFFEA", ja: "表参道店", kind: "Coffee", cat: "coffee",
    area: "tokyo", where: "Omotesandō",
    maps: "PHILOCOFFEA 表参道店",
    note: ""
  },
  {
    id: "p-melt", name: "Melt Chocolate", kind: "Chocolate", cat: "coffee",
    area: "tokyo", where: "Tokyo",
    maps: "Melt Chocolate Tokyo",
    note: ""
  },
  {
    id: "p-travelers", name: "Traveler's Factory", kind: "Stationery", cat: "shopping",
    area: "tokyo", where: "Nakameguro",
    maps: "Traveler's Factory Nakameguro",
    note: "Cool store. Stationery and travel goods — worth it if we are already in Nakameguro."
  },
  {
    id: "p-lelabo", name: "LE LABO", kind: "Perfume", cat: "shopping",
    area: "tokyo", where: "Daikanyama",
    maps: "LE LABO Daikanyama",
    note: ""
  },
  {
    id: "p-yamada", name: "RECORD BAR YAMADA", kind: "Record bar", cat: "do",
    area: "tokyo", where: "Tokyo",
    maps: "RECORD BAR YAMADA Tokyo",
    note: ""
  },
  {
    id: "p-goodmorning", name: "GOOD morning RECORD BAR", kind: "Record bar", cat: "do",
    area: "tokyo", where: "Tokyo",
    maps: "GOOD morning RECORD BAR Tokyo",
    note: ""
  },

  /* ============================ On the road ============================ */
  {
    id: "p-sekihall", name: "Gifu Seki Cutlery Hall", ja: "岐阜関刃物会館", kind: "Knives", cat: "shopping",
    area: null, where: "Seki, Gifu", pin: true,
    maps: "岐阜関刃物会館",
    note: "関市平和通4-12-6, inside the Sekiterrace complex. Open 9:00–17:00 and closed only over New Year, so it is open on the 10th. Around 100 parking spaces. Worth 45–60 minutes — it is a direct sales hall with the output of the Seki factories rather than a museum. (The sword museum next door only runs forging demonstrations on set dates, usually the first Sunday, so not on our Saturday.) Tel 0575-22-4941."
  },
  {
    id: "p-metasequoia", name: "Avenue of Metasequoias", ja: "メタセコイア並木", kind: "Tree avenue", cat: "nature",
    area: null, where: "Takashima, Shiga",
    maps: "メタセコイア並木 高島",
    note: "Need to go on a drive in this area."
  },
  {
    id: "p-lacollina", name: "La Collina Ōmi-Hachiman", ja: "ラ コリーナ近江八幡", kind: "Bakery park", cat: "do",
    area: null, where: "Ōmi-Hachiman, Shiga", pin: true,
    maps: "ラ コリーナ近江八幡",
    note: "Weird looking garden, park and food garage. Odd place, worth a look. It is Taneya's confectionery village under a grass-covered roof, open daily 9:00–18:00: café last orders 17:00, food court 10:00–17:00, and the bakery from 11:00 until it sells out. 650 parking spaces. Lunch stop on 9 Oct."
  },
  {
    id: "p-kuromon", name: "Kuromon Ichiba Market", ja: "黒門市場",
    kind: "Market · food and souvenirs", cat: "shopping",
    area: "osaka", where: "Nipponbashi", pin: true,
    maps: "黒門市場",
    note: "A local's pick for authentic souvenirs, and his read is that it is calmer and less tourist-trappy than Nishiki in Kyoto, which we also see. Trading runs roughly 08:00-18:00, but many stalls are 08:00-16:00 and most are winding down by 17:30. Sunday is the market's regular holiday, so it is the optional first stop on Monday the 5th."
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
    note: "The local's paradise. In front of the north gate of JR Osaka Station — there is no Yodobashi in Namba, where the rival is Bic Camera. Open every day 09:30–22:00, so it can be the last stop up north on the 5th, after the castle and before dinner in Shinsaibashi."
  },
  {
    id: "p-osakacastle", name: "Osaka Castle", ja: "大阪城天守閣", kind: "Castle keep · museum", cat: "do",
    area: "osaka", where: "Chūō-ku",
    maps: "大阪城天守閣",
    note: "The keep is open every day, 09:00–18:00, last entry 17:30. Nishinomaru Garden in the same grounds closes on Mondays, and 5 Oct is a Monday."
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
    note: "The canal, the neon and the Glico sign, the same few minutes from Meander as Hōzenji. For actually eating, Hōzenji and Ura-Namba next door are more authentic and much calmer."
  },
  {
    id: "p-torikizoku", name: "Torikizoku", ja: "鳥貴族", kind: "Yakitori chain · ¥390 an item", cat: "food",
    area: "osaka", where: "Dōtonbori · Sennichimae", pin: true,
    maps: "鳥貴族 難波",
    note: "Cheap yakitori, one price for everything: ¥390 including tax. You order on a tablet at the table, in English. Four branches within a short walk of the hotel: Dōtonbori, Dōtonbori Nakaza, Sennichimae and Sennichimae 2. For Noa, going by their own allergen table (1 Sep 2026): the tare and the salt have no pork, and every skewer is fine except the pork belly one. The things to avoid are less obvious: the signature Toriki karaage, the chicken mayo salad, the chicken hamburg steak, the kids' plates, and every noodle and rice finisher except the two donburi. Everything comes out of one kitchen."
  },
  {
    id: "p-toratoriya", name: "TORA鶏YA", ja: "炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店", kind: "Yakitori · one-bite gyoza", cat: "food",
    area: "osaka", where: "Sennichimae",
    maps: "炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店",
    note: "The 4 Oct booking was cancelled in favour of maren. Still an option two minutes from the hotel: chicken grilled over binchotan and served off the skewer. The one-bite gyoza do not list their filling, so ask before ordering them for Noa."
  },
  {
    id: "p-kibitaki", name: "Kibitaki Bettei", ja: "YAKITORI KIBITAKI 別邸", kind: "Yakitori · chef's 7 skewers", cat: "food",
    area: "osaka", where: "Shinsaibashi-suji", pin: true,
    maps: "YAKITORI KIBITAKI 別邸 心斎橋",
    note: "Booked for 5 Oct at 20:30, the chef's seven skewers. All chicken from three local breeds — Aizu jidori, Kawamata shamo and Date chicken — and nothing on the menu is pork. In the same block as the big UNIQLO."
  }
,
  {
    id: "p-minato", name: "MINATO", ja: "鉄板ダイニングバルMINATO", kind: "Teppan dining bar", cat: "food",
    area: "matsumoto", where: "Chūō, near the station", pin: true,
    maps: "鉄板ダイニングバル MINATO 松本",
    note: "Booked for 10 Oct at 20:00. A teppan grill: chicken four ways, beef loin steak, roast beef, oysters and a seafood ajillo. For Noa, skip the pork ginger steak and the tonpeiyaki, and ask about the okonomiyaki."
  },
  {
    id: "p-pizzamatsuri", name: "PIZZA MATSURI", ja: "ピッツァ マツリ マツモト", kind: "Neapolitan pizza", cat: "food",
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
    area: null, where: "Ōmi-Hachiman",
    maps: "仁之助コーヒー 近江八幡",
    note: "Just off the Hachiman-bori in a renovated old townhouse — siphon coffee, toast and sweets. 10:00–18:00, closed Tuesdays and the second Wednesday, so open on our Friday."
  },
  {
    id: "p-ichika", name: "Ibushi-dori Ichika", ja: "いぶし鳥 一香", kind: "Smoked-chicken yakitori", cat: "food",
    area: "kyoto", where: "Near Kyoto City Hall", pin: true,
    maps: "いぶし鳥 一香 京都",
    note: "Booked for 7 Oct, time to confirm. Whole domestic chicken smoked over cherry wood, in a machiya with an open kitchen; the rice is Tanba Koshihikari cooked in a hagama pot. Dinner 17:00–22:00, food last orders 21:00, closed on irregular days. No table charge. For Noa: all chicken, nothing listed as pork — ask about the wontons and the ground-meat omelette."
  },
  {
    id: "p-bigoli", name: "BIGOLI", ja: "BIGOLI 京都本店", kind: "Bolognese · wine bar at night", cat: "food",
    area: "kyoto", where: "Shijō-Karasuma", pin: true,
    maps: "BIGOLI 京都本店",
    note: "Booked for 8 Oct at 20:00. A bolognese-only pasta specialist on thick bigoli noodles, open 11:00–22:30. At night it becomes a wine bar with about 100 wines at a flat rate by the half hour, and the food narrows to their pastas, prosciutto, cheese and nuts. For Noa: their own bolognese lists pork among its ingredients, so ask before ordering."
  }
];

export const CATEGORIES = [
  { id: "food", label: "Food" },
  { id: "coffee", label: "Coffee" },
  { id: "do", label: "Things to do" },
  { id: "shopping", label: "Shopping" },
  { id: "nature", label: "Nature" }
];

export const placeById = Object.fromEntries(places.map(p => [p.id, p]));

export function mapsUrl(place) {
  return "https://www.google.com/maps/search/?api=1&query=" +
         encodeURIComponent(place.maps || place.name);
}
