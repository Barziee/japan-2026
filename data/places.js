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
    note: "The leading dinner candidate. 100% beef, so it works for Noa, and it is walking distance from MIRU. October seats open 1 Sep at midnight Japan time — without a booking you are queueing from 07:00, which collides with Hōnen-in."
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
    id: "p-maren", name: "MAREN", ja: "心斎橋", kind: "Ramen · chicken", cat: "food",
    area: "osaka", where: "Shinsaibashi",
    maps: "MAREN 心斎橋",
    note: "Chicken ramen — the second option for Noa after Gyukotsuo. Confirm the chāshū is not pork either."
  },
  {
    id: "p-gorichan", name: "Onigiri Gorichan", ja: "おにぎりごりちゃん", kind: "Onigiri", cat: "food",
    area: "osaka", where: "Nankai Namba Station",
    maps: "おにぎりごりちゃん 南海なんば駅店",
    note: "Inside the station we arrive at from KIX and walk from Meander. Good for an early departure morning."
  },
  {
    id: "p-tokito", name: "Tokito", ja: "ときと", kind: "Wagyu sando", cat: "food",
    area: "osaka", where: "Kawarayamachi, Chūō-ku",
    maps: "ときと 瓦屋町 大阪",
    note: "Kawarayamachi 1-2-11 (からほりかわらやえん101). Go early — the wagyu sando is made in limited numbers."
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
    note: "Hankyū from Umeda to Minoh-o, about 30 minutes. The gorge trail is easy and paved, roughly 2.8 km each way. The colour here peaks in late November, so we walk it for the gorge, not the leaves."
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
    note: "The crème brûlée choux Noa wants."
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
    note: "The daruma temple above Minoh. Already in the 5 Oct plan."
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
    id: "p-donchan", name: "Don-chan", kind: "Izakaya", cat: "food",
    area: "osaka", where: "Umeda Higashidōri",
    maps: "Don-chan Umeda Higashidori Osaka",
    note: ""
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

  /* ============================ Gujō ============================ */
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
    note: "Wagyu T-bone. The candidate for our last night in Japan on 19 Oct. October is not open for booking yet — check 1 Sep, then again 19 Sep, and confirm they open on a Monday."
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
    note: "関市平和通4-12-6, inside the Sekiterrace complex. Open 9:00–17:00 and closed only over New Year, so it is open on the 9th. Around 100 parking spaces. Worth 45–60 minutes — it is a direct sales hall with the output of the Seki factories rather than a museum. (The sword museum next door only runs forging demonstrations on set dates, usually the first Sunday, so not on a Friday.) Tel 0575-22-4941."
  },
  {
    id: "p-metasequoia", name: "Avenue of Metasequoias", ja: "メタセコイア並木", kind: "Tree avenue", cat: "nature",
    area: null, where: "Takashima, Shiga",
    maps: "メタセコイア並木 高島",
    note: "Need to go on a drive in this area."
  },
  {
    id: "p-lacollina", name: "La Collina Ōmi-Hachiman", kind: "Bakery park", cat: "do",
    area: null, where: "Ōmi-Hachiman, Shiga",
    maps: "ラ コリーナ近江八幡",
    note: "Weird looking garden, park and food garage. Odd place, worth a look."
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
