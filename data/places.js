/* Everything we deliberately saved, once. Today, Saved and Search all read
   from here — a place is never written twice.

   `note` is why WE saved it. Ratings, hours and reviews stay in Google Maps
   on purpose: they change, and ours would go stale.
   `maps` is the query Google Maps resolves — Japanese where that finds it
   more reliably than the romanised name.
   `food` lists the food types a place belongs to, for the filters.
   `cid` is the Google Maps id from our saved list, when we have it.
   `pin: true` means don't-forget-this, not favourite. Everything here is
   already saved, so a favourite flag would say nothing.

   Names stay in English; `kind`, `where` and `note` are in Hebrew. */

export const places = [
  /* ============================ Kyoto ============================ */
  {
    id: "p-hikiniku", name: "Hikiniku to Come", ja: "挽肉と米", kind: "המבורג סטייק", cat: "food",
    food: ["wagyu"], cid: "5604413755966420161",
    area: "kyoto", where: "Gion", pin: true,
    maps: "挽肉と米 京都",
    note: "המבורג על פחמים, ¥1,980 לארוחה. 100% בקר, אז מתאים לנועה. ממש ליד Tatsumi-bashi על ה-Shirakawa, במרחק הליכה מ-MIRU. סגור בימי רביעי, ורק תשלום בכרטיס. עם חמישה לילות ב-Kyoto, כל ערב חוץ מיום רביעי ה-7.10 עובד. המקומות האונליין ל-8.10 נגמרו, אבל את שאר הערבים שווה לבדוק. הדרכים להיכנס: ביטולים ב-TableCheck, הרשימה החינמית שנפתחת 7 ימים מראש, ביטולים של אותו יום שמתפרסמים ב-X, או התור של הבוקר. הכרטיסים מחולקים בערך מ-09:00, לפעמים מ-08:30, ובימים עמוסים התור מתחיל להתארגן כבר בסביבות 07:00."
  },
  {
    id: "p-gansan", name: "Yakiniku no GANSAN", kind: "יקיניקו", cat: "food",
    food: ["yakiniku"], cid: "10243683207789044494",
    area: "kyoto", where: "Pontochō",
    maps: "Yakiniku GANSAN Pontocho Kyoto",
    note: "יקיניקו של בקר ב-Pontochō. באינסטגרם: gansan_pontocho."
  },
  {
    id: "p-nishiki", name: "Ramen Nishiki", kind: "ראמן", cat: "food",
    food: ["ramen"], cid: "14050527343501950581",
    area: "kyoto", where: "Gion",
    maps: "Ramen Nishiki Kyoto",
    note: "לבדוק שהמרק לא על בסיס חזיר לפני שנועה מזמינה."
  },
  {
    id: "p-brulee", name: "Brulee Kyoto", ja: "烏丸五条店", kind: "דונאטס", cat: "coffee",
    food: ["sweets"], cid: "14697941507550487718",
    area: "kyoto", where: "Karasuma-Gojō",
    maps: "Brulee 京都 烏丸五条店",
    note: "דונאטס. הסניף של Karasuma-Gojō."
  },
  {
    id: "p-2050", name: "2050 coffee", ja: "祇園白川店", kind: "קפה", cat: "coffee",
    food: ["cafe"], cid: "6006074317995937951",
    area: "kyoto", where: "Gion Shirakawa",
    maps: "2050 coffee 祇園白川店",
    note: ""
  },
  {
    id: "p-panel", name: "Panel Cafe", kind: "בית קפה", cat: "coffee",
    food: ["cafe"], cid: "4606513294828699001",
    area: "kyoto", where: "Gion",
    maps: "Panel Cafe Kyoto",
    note: ""
  },
  {
    id: "p-uru", name: "uru coffee", kind: "קפה", cat: "coffee",
    food: ["cafe"], cid: "12963093825151455992",
    area: "kyoto", where: "Teramachi",
    maps: "uru coffee Kyoto",
    note: ""
  },
  {
    id: "p-365", name: "365 Sakaba", kind: "איזקאיה", cat: "food",
    food: ["izakaya"],
    area: "kyoto", where: "Kawaramachi",
    maps: "365 Sakaba Kawaramachi Kyoto",
    note: "איזקאיה זולה ורועשת. נכנסים בלי הזמנה."
  },
  {
    id: "p-alchemist", name: "Bar Alchemist", kind: "בר קוקטיילים", cat: "food",
    food: ["other"],
    area: "kyoto", where: "Kyoto",
    maps: "Bar Alchemist Kyoto",
    note: "קוקטיילים. נכנסים בלי הזמנה."
  },
  {
    id: "p-ing", name: "Rocking Bar ING", kind: "בר רוק", cat: "food",
    food: ["other"],
    area: "kyoto", where: "Kyoto",
    maps: "Rocking Bar ING Kyoto",
    note: "רוק ותקליטים. נכנסים בלי הזמנה."
  },

  /* ============================ Osaka ============================ */
  {
    id: "p-gyukotsuo", name: "Ninjomenya Gyukotsuo", ja: "人情麺屋 牛骨王", kind: "ראמן · מרק בקר", cat: "food",
    food: ["ramen"], cid: "2661088366737131394",
    area: "osaka", where: "Minami-Semba", pin: true,
    maps: "人情麺屋 牛骨王 南船場",
    note: "מרק על עצמות בקר במקום חזיר, אז זה הראמן הבטוח לנועה. בר קטן, ומזמינים במכונת כרטיסים."
  },
  {
    id: "p-maren", name: "maren", ja: "maren 北新地本店", kind: "ראמן · עוף ורוטב סויה", cat: "food",
    food: ["ramen"], cid: "7966177173578928033",
    area: "osaka", where: "Kitashinchi", pin: true,
    maps: "maren 北新地本店",
    note: "הסניף הראשי, ב-Dōjima. זה שאנחנו רוצים, לא זה של Shinsaibashi. ראמן רוטב סויה של שף וואשוקו, על בסיס עוף jidori. הגרסה המיוחדת 特製 של ראמן העוף והסויה עולה ¥1,550, וזו שהם דוחפים. בלי הזמנות, שנים עשר מקומות על הבר. בימי ראשון 11:00-15:00 ו-17:00-22:00. בשאר השבוע הערב נמשך עד 05:00. ארבע דקות מ-JR Kitashinchi, חמש מ-Nishi-Umeda. המרק על עוף, אבל ב-mazesoba עם חמשת סוגי הצ׳אשו אולי לא הכול עוף, אז לשאול בשביל נועה."
  },
  {
    id: "p-gorichan", name: "Onigiri Gorichan", ja: "おにぎりごりちゃん", kind: "אוניגירי", cat: "food",
    food: ["other"], cid: "7379096829001949974",
    area: "osaka", where: "Nankai Namba Station",
    maps: "おにぎりごりちゃん 南海なんば駅店",
    note: "בתוך תחנת Nankai Namba. אמור להיות אוניגירי של 10 מ-10."
  },
  {
    id: "p-tokito", name: "Tokito", ja: "と木と", kind: "סנדוויץ׳ וואגיו", cat: "food",
    food: ["wagyu"], cid: "13587463603788008684",
    area: "osaka", where: "Karahori", pin: true,
    maps: "と木と 大阪 瓦屋町",
    note: "ההיילייט של נועה. הכתובת: Kawarayamachi 1-2-11 (からほりかわらやえん101), כמה דקות מתחנת Matsuyamachi. ה-wagyu sando הוא עניין של צהריים: 11:00-15:00, רק בלי הזמנה, ובכמות מוגבלת, אז מגיעים לפתיחה. לארוחת ערב, 18:00-24:00, אפשר להזמין מקום. סגור בימים לא קבועים, שמתפרסמים בסטוריז באינסטגרם (tokito_karahori)."
  },
  {
    id: "p-kitan", name: "Kitan Hibiki", kind: "המבורגרים", cat: "food",
    food: ["wagyu"], cid: "9023255257523951743",
    area: "osaka", where: "Osaka",
    maps: "Kitan Hibiki Osaka",
    note: "באים בשביל ההמבורגרים, והם מוגשים רק 17:00-19:00. הזמנה ל-20:00 אומרת בלי המבורגר ובלי החזר."
  },
  {
    id: "p-joto", name: "Joto Curry", kind: "קארי", cat: "food",
    food: ["other"], cid: "9913021403327720417",
    area: "tokyo", where: "Shibuya",
    maps: "Joto Curry Shibuya Tokyo",
    note: ""
  },
  {
    id: "p-itosen", name: "Itosen", kind: "סיני", cat: "food",
    food: ["other"], cid: "5078590716337502304",
    area: "kyoto", where: "Kamigyō",
    maps: "Itosen Kamigyo Kyoto",
    note: "אוכל סיני טוב."
  },
  {
    id: "p-minoh", name: "Minoh Falls", ja: "箕面大滝", kind: "הליכה למפל", cat: "nature",
    area: "osaka", where: "Minoh",
    maps: "箕面大滝",
    note: "Hankyū מ-Umeda ל-Minoh-o, בערך 30 דקות. השביל בקניון קל וסלול, בערך 2.8 ק״מ, והולכים אותו בכיוון אחד, בירידה מהמפל לתחנה. השלכת פה בשיא בסוף נובמבר, אז הולכים בשביל הקניון, לא בשביל העלים."
  },
  {
    id: "p-hozenji", name: "Hōzenji Yokochō", ja: "法善寺横丁", kind: "סמטת פנסים", cat: "do",
    area: "osaka", where: "Namba",
    maps: "法善寺横丁",
    note: "סמטת אבן מוארת בפנסים ב-Namba. יחד עם Ura-Namba שלידה, זה אותנטי יותר והרבה פחות עמוס מ-Dōtonbori."
  },
  {
    id: "p-tenjinbashi", name: "Tenjinbashisuji", ja: "天神橋筋商店街", kind: "ארקייד קניות", cat: "shopping",
    area: "osaka", where: "Osaka",
    maps: "天神橋筋商店街",
    note: "ארקייד הקניות הכי ארוך ביפן, והאוכל לאורכו מקומי ולא מכוון לתיירים."
  },
  {
    id: "p-grenier", name: "grenier", ja: "北浜店", kind: "פחזניות שו", cat: "coffee",
    food: ["sweets"], cid: "5906910810534897283",
    area: "osaka", where: "Kitahama",
    maps: "grenier 北浜店",
    note: "שו הקרם ברולה שנועה רוצה. פתוח כל יום, 10:00-19:00."
  },
  {
    id: "p-mooken", name: "MooKEN", kind: "פחזניות קרם", cat: "coffee",
    food: ["sweets"],
    area: "osaka", where: "Osaka",
    maps: "MooKEN cream puff Osaka",
    note: "פחזניות קרם."
  },
  {
    id: "p-brooklyn", name: "Brooklyn Roasting Company", kind: "קפה", cat: "coffee",
    food: ["cafe"], cid: "3143396422888168986",
    area: "osaka", where: "Kitahama",
    maps: "Brooklyn Roasting Company Kitahama",
    note: "בית קפה מגניב, ואפשר לשבת על שפת הנהר."
  },
  {
    id: "p-yatt", name: "Yatt Nakazakichō", kind: "קפה", cat: "coffee",
    food: ["cafe"], cid: "698133634341546368",
    area: "osaka", where: "Nakazakichō",
    maps: "Yatt Nakazakicho Osaka",
    note: "בית קפה מעוצב."
  },
  {
    id: "p-pognam", name: "pognam", kind: "בית קפה", cat: "coffee",
    food: ["cafe","sweets"], cid: "11685032481504675398",
    area: "osaka", where: "Nakazakichō",
    maps: "pognam Osaka",
    note: "בית קפה עם קינוחים, ב-Nakazakichō."
  },
  {
    id: "p-flag", name: "MUSICBAR FLAG", kind: "בר מוזיקה", cat: "do",
    cid: "5561925109448909292",
    area: "osaka", where: "Nipponbashi, Naniwa-ku",
    maps: "MUSICBAR FLAG 日本橋 大阪",
    note: "הכתובת: Nipponbashi 5-13-7, בניין Ueda."
  },
  {
    id: "p-towerknives", name: "Tower Knives Osaka", kind: "סכינים", cat: "shopping",
    cid: "1160808223375792125",
    area: "osaka", where: "Shinsekai", pin: true,
    maps: "Tower Knives Osaka",
    note: "סכינים, ליד Tsūtenkaku, והצוות מדבר אנגלית. ההזדמנות הראשונה לסכין בטיול, לפני Seki ב-10.10. מה שקונים טס הביתה במזוודה שנשלחת, אף פעם לא בתיק יד."
  },
  {
    id: "p-katsuoji", name: "Katsuō-ji", ja: "勝尾寺", kind: "מקדש", cat: "do",
    cid: "963425562183482676",
    area: "osaka", where: "Minoh",
    maps: "Katsuoji",
    note: "מקדש הדרומה שמעל Minoh, פתוח 08:00-17:00. התחנה הראשונה ביום של Minoh, כי המוניות למפלים מחכות פה ולא להפך."
  },
  {
    id: "p-fukushima", name: "Fukushima", kind: "אזור איזקאיות", cat: "food",
    food: ["izakaya"],
    area: "osaka", where: "Osaka", area_kind: "district",
    maps: "Fukushima Osaka izakaya",
    note: "אזור של ארוחות ערב, לא מסעדה אחת."
  },
  {
    id: "p-tenma", name: "Tenma", kind: "אזור איזקאיות", cat: "food",
    food: ["izakaya"], cid: "8126294779654769743",
    area: "osaka", where: "Osaka", area_kind: "district",
    maps: "Tenma Osaka izakaya",
    note: "סיבוב איזקאיות וברים."
  },
  {
    id: "p-donchan", name: "Don-chan", ja: "肉大衆酒場ドンちゃん", kind: "איזקאיה · בשר, אכול כפי יכולתך", cat: "food",
    food: ["izakaya"],
    area: "osaka", where: "Umeda Higashidōri",
    maps: "肉大衆酒場ドンちゃん 梅田",
    note: "איזקאיה של בשר, אכול ושתה כפי יכולתך, אז לבדוק מה לא חזיר לפני שמתיישבים. בימי חול מ-17:00, סגור בימים לא קבועים."
  },

  {
    id: "p-hinode", name: "Hinode Udon", ja: "日の出うどん", kind: "אודון", cat: "food",
    food: ["noodles"], cid: "13962427309304455296",
    area: "kyoto", where: "Nanzenji", pin: true,
    maps: "日の出うどん 京都",
    note: "הכתובת: Sakyō-ku, Nanzenji Kitanobōchō 36. בלי הזמנות ורק מזומן, אז להגיע קצת לפני הפתיחה. כל היום של מזרח Kyoto בנוי סביב להגיע לפה בזמן הנכון. לבדוק שעות וימי סגירה לפני שסומכים על זה."
  },
  {
    id: "p-gyojabashi", name: "Gyōjabashi", ja: "行者橋", kind: "גשר אבן", cat: "do",
    area: "kyoto", where: "Higashiyama",
    maps: "行者橋 京都",
    note: "גשר האבן הצר מעל ה-Shirakawa, ליד תחנת Higashiyama. לא זה שמעל ה-Kamo. זה הבלבול הקבוע."
  },

  /* ============================ Mino ============================ */
  {
    id: "p-mino", name: "Mino udatsu townscape", ja: "うだつの上がる町並み", kind: "רחוב סוחרים ישן", cat: "do",
    area: null, where: "Mino, Gifu",
    maps: "うだつの上がる町並み 美濃市",
    note: "בתי סוחרים מתקופת Edo עם udatsu, קירות האש המוגבהים בין הגגות, שהיו דרך להשוויץ. יש חניונים בחינם מסביב, והחניון של מרכז התיירות עולה ¥100 לשעתיים. חמש דקות מה-Mino IC, אז לקפוץ לשם כמעט לא עולה כלום."
  },
  {
    id: "p-minobashi", name: "Mino Bridge", ja: "美濃橋", kind: "גשר תלוי", cat: "do",
    area: null, where: "נהר Nagara, Mino",
    maps: "美濃橋 美濃市",
    note: "הגשר התלוי המודרני הכי ישן ששרד ביפן, מעל ה-Nagara. חמש דקות מהעיר העתיקה, והסיבה בכלל לרדת לנהר."
  },
  {
    id: "p-yamamizu", name: "Yamamizu Honten", ja: "山水本店", kind: "אודון וארוחות קבועות", cat: "food",
    food: ["noodles"],
    area: null, where: "Mino, Gifu",
    maps: "山水本店 美濃市",
    note: "מועמד לצהריים בגרסה של Mino. מקום מתקופת Taishō עם אודון ו-teishoku, שמקומיים באמת אוכלים בו. 11:00-14:30, סגור בימי רביעי. ה-9.10 הוא יום שישי, אז פתוח. ויש לו חניה משלו."
  },
  {
    id: "p-happastand", name: "HAPPA STAND", kind: "תה בבית ישן", cat: "coffee",
    food: ["cafe"],
    area: null, where: "Mino, Gifu",
    maps: "HAPPA STAND 美濃市",
    note: "האפשרות הקלה יותר ב-Mino: תה אורגני ב-machiya משופץ, 8:00-15:00, סגור בימי רביעי וחמישי. טוב אם רוצים את הרחוב ואת הנהר יותר מארוחה מלאה בישיבה."
  },

  /* ============================ Gujō ============================ */
  {
    id: "p-gujoshokudo", name: "Gujō Hachiman Old Town Hall canteen", ja: "郡上八幡旧庁舎食堂", kind: "מנת Keichan · ארוחות מקומיות", cat: "food",
    food: ["other"],
    area: "gujo", where: "Jōkamachi Plaza, Gujō",
    maps: "郡上八幡旧庁舎食堂",
    note: "מועמד לצהריים בבוקר של Gujō, ב-10.10. Keichan, עוף מוקפץ במיסו, הוא המנה של Gujō, והארוחה עולה בערך ¥1,080. פתוח 10:00-16:00, עם חניה, ממש במרכז העיירה, בלי הזמנה."
  },
  {
    id: "p-izumizaka", name: "Izumizaka", ja: "鉄板料理 泉坂", kind: "מנת Hōba miso על הפלטה", cat: "food",
    food: ["other"],
    area: "gujo", where: "מרכז Gujō Hachiman",
    maps: "鉄板料理 泉坂 郡上八幡",
    note: "הצהריים האחרים של Gujō: hōba-miso-yaki, בשר וירקות שנצלים על עלה מגנוליה עם מיסו. במרכז עיירת הטירה העתיקה."
  },
  {
    id: "p-daikokuya", name: "Daikokuya Gujō", ja: "だいこく家 郡上店", kind: "יקיניקו וואגיו", cat: "food",
    food: ["yakiniku","wagyu"], cid: "1760763851590936211",
    area: "gujo", where: "Gujō-Yamato, ליד המלון", pin: true,
    maps: "だいこく家 郡上",
    note: "מוזמן ל-9.10 ב-20:00, חדר טטאמי לשניים. יקיניקו של בקר Hida עם תפריט באנגלית על טאבלט. ב-Gujō-Yamato, שבע דקות הליכה מה-Fairfield, לא בעיר העתיקה."
  },
  {
    id: "p-igawa", name: "Igawa Komichi", ja: "いがわ小径", kind: "סמטת מים", cat: "do",
    area: "gujo", where: "Gujō Hachiman",
    maps: "いがわ小径 郡上八幡",
    note: "תעלת המים שעוברת מאחורי הבתים, עם דגי קרפיון. Sōgi-sui, המעיין, ו-Yanaka Mizu-no-Komichi נמצאים באותה הליכה קצרה. בשביל זה יש את אחר הצהריים."
  },
  {
    id: "p-gonza", name: "Pizzeria Gonza", kind: "פיצה", cat: "food",
    food: ["italian"], cid: "10790362287290569115",
    area: "gujo", where: "Gujō Hachiman",
    maps: "Pizzeria Gonza Gujo",
    note: "גיבוי אמיתי, לא פרס ניחומים."
  },

  /* ============================ Kiso valley ============================ */
  {
    id: "p-atera", name: "Atera Gorge", ja: "阿寺渓谷", kind: "קניון גרניט בצבע אמרלד", cat: "nature",
    cid: "7905631490064305519",
    area: "matsumoto", where: "Ōkuwa, Kiso", pin: true,
    maps: "阿寺渓谷",
    note: "מים בצבע טורקיז מעל גרניט לבן, מתחת ליער ברושים, בערך 15 ק״מ של עמק. חונים בחניון של אנדרטת Akahiko והולכים משם. השביל עד Unarijima והגשר התלוי Nakahatchō הוא הקטע הכי יפה. בשיא הקיץ רכבים פרטיים מוגבלים בין הכניסה לקמפינג, אבל לא באוקטובר. בערך שעתיים הלוך-חזור ברגל מהחניון, ושעה וארבעים לכל כיוון מ-Jujo, אז זו אפשרות לטיול יום ב-11.10 או ב-12.10."
  },
  {
    id: "p-forespa", name: "Forespa Kiso canteen", ja: "フォレスパ木曽", kind: "סובה עם gohei mochi", cat: "food",
    food: ["noodles"],
    area: "matsumoto", where: "Ōkuwa, ליד הקניון",
    maps: "フォレスパ木曽 阿寺荘",
    note: "מועמד לצהריים, והכי קרוב ל-Atera. הוא יושב ממש בפתח הקניון. Soba teishoku שמגיע עם gohei mochi. 10:00-14:00, סגור בימי רביעי, אז פתוח ב-11.10 וב-12.10."
  },
  {
    id: "p-nakamura", name: "Shokudō Nakamura", ja: "食堂中村", kind: "Gohei mochi", cat: "food",
    food: ["other"],
    area: "matsumoto", where: "Agematsu, Kiso",
    maps: "食堂中村 上松",
    note: "מועמד לצהריים בדרך צפונה. מפורסם ב-gohei mochi ברוטב סויה מתוק-מלוח, עמוס באגוזי מלך, שומשום ובוטנים, בעבודת יד ובלי תוספים. קטן ומקומי, לא מלוטש."
  },
  {
    id: "p-kurumaya", name: "Kurumaya, Route 19 branch", ja: "くるまや国道店", kind: "סובה של Kiso", cat: "food",
    food: ["noodles"],
    area: "matsumoto", where: "Kiso-Fukushima",
    maps: "くるまや国道店 木曽福島",
    note: "מועמד לצהריים יותר צפונה, ממש על כביש 19, עם כמה חניונים. סובה אמיתית של Kiso: kakiage ו-tenzaru. ה-michi-no-eki של Kiso-Fukushima הוא הגיבוי, צהריים 11:00-15:00 עם נוף ל-Ontake מהמרפסת."
  },
  {
    id: "p-narai", name: "Narai-juku", ja: "奈良井宿", kind: "עיירת דרכים עתיקה", cat: "do",
    area: "matsumoto", where: "Shiojiri, Kiso",
    maps: "奈良井宿",
    note: "הארוכה מבין עיירות הדרכים של ה-Nakasendō. ארבעים וחמש דקות עד שעה מספיקות כדי ללכת אותה לכל האורך. במסלול של ה-10.10 היא כבר לא על הדרך: עם העצירה יוצא 4:04 שעות נהיגה, מול 3:29 בלעדיה."
  },

  /* ============================ Matsumoto ============================ */
  {
    id: "p-nakamachi", name: "Nakamachi Street", ja: "中町通り", kind: "רחוב קרמיקה", cat: "shopping",
    area: "matsumoto", where: "Matsumoto",
    maps: "Nakamachi Street Matsumoto",
    note: "קרמיקה וכלי בית במחסני ה-kura הישנים."
  },
  {
    id: "p-tsubame", name: "Tsubame Onsen Kogane no Yu", ja: "燕温泉 黄金の湯", kind: "אונסן בחינם", cat: "nature",
    cid: "8184347331509949303",
    area: "matsumoto", where: "Myōkō",
    maps: "燕温泉 黄金の湯",
    note: "מרחצאות פתוחים בחינם. אבל סגור בימי שני, וזה מוריד אותם מהפרק ב-12.10."
  },

  /* ============================ Fuji · Izu ============================ */
  {
    id: "p-shoji", name: "Tatego-hama, Lake Shōji", ja: "精進湖 他手合浜", kind: "תצפית ל-Fuji", cat: "nature",
    area: "fuji", where: "אגם Shōji", pin: true,
    maps: "精進湖 他手合浜",
    note: "הנוף של Kodaki Fuji: הר Ōmuro יושב מול ה-Fuji כמו ילד על הידיים. אפשר לחפש גם 子抱き富士ビューポイント. ממש מהכביש, בלי הליכה."
  },
  {
    id: "p-motosu", name: "Motosuko Lakeside Walkway", ja: "本栖湖畔線歩道", kind: "תצפית ל-Fuji", cat: "nature",
    area: "fuji", where: "אגם Motosu, ליד Kōan", pin: true,
    maps: "本栖湖畔線歩道 浩庵",
    note: "הקומפוזיציה של אגם Motosu וה-Fuji משטר ה-¥1,000, מהחוף ליד Kōan. הזווית המוגבהת המדויקת שבשטר היא למעלה ב-Nakanokura Pass, ולוקחת יותר משעה ברגל. את זה אנחנו לא עושים."
  },
  {
    id: "p-tanuki", name: "Lake Tanuki", ja: "田貫湖", kind: "הליכה סביב אגם", cat: "nature",
    area: "fuji", where: "Fujinomiya",
    maps: "田貫湖",
    note: "עשר דקות מ-Shiraito. שווה 45 עד 60 דקות אם ה-Fuji בחוץ ונשאר כוח. לא שווה להתעקש אם הוא בעננים."
  },
  {
    id: "p-otodome", name: "Otodome Falls", ja: "音止の滝", kind: "מפל", cat: "nature",
    area: "fuji", where: "ליד Shiraito",
    maps: "音止の滝",
    note: "מפל אחד חזק ממש ליד Shiraito, באותה הליכה. אין סיבה לדלג."
  },
  {
    id: "p-hiraishiya", name: "Hiraishiya", ja: "平石屋", kind: "יאקיסובה של Fujinomiya", cat: "food",
    food: ["other"],
    area: "fuji", where: "ליד Otodome Falls",
    maps: "平石屋 富士宮やきそば 白糸の滝",
    note: "מועמד לצהריים. המנה המקומית, שמכינים על טפאן בתוך החדר, עם מקומות ישיבה על מרפסת ממש ליד Otodome. חניה משלו, בחינם למי שמוציא ¥600. הוא במפלים עצמם, אז אפס נהיגה נוספת. רק לוודא שפתוח ביום שלישי."
  },
  {
    id: "p-asagiri", name: "Buffet Restaurant Fujisan", ja: "ビュッフェレストランふじさん", kind: "מזנון · מוצרי חלב מקומיים", cat: "food",
    food: ["other"],
    area: "fuji", where: "Asagiri Food Park",
    maps: "ビュッフェレストランふじさん あさぎりフードパーク",
    note: "מועמד לצהריים. בתוך Asagiri Food Park על כביש 139, ממש על הדרך דרומה. בנוי סביב חלב מהמחלבות של Asagiri וביצים מקומיות. 11:00-15:40, הזמנות אחרונות ב-14:30, חניון גדול, לא צריך הזמנה. הסגירות לא קבועות, אז לוודא את היום."
  },
  {
    id: "p-masunoie", name: "Masu no Ie", ja: "鱒の家", kind: "פורל", cat: "food",
    food: ["other"],
    area: "fuji", where: "Inokashira, Fujinomiya",
    maps: "鱒の家 猪之頭",
    note: "מועמד לצהריים. פורל שגדל במי המעיינות של ה-Fuji, וזה מה שהעמק הזה ידוע בו. רק צהריים, 11:00-15:00, ארוחות מ-¥2,100 בערך. בישיבה ובלי למהר. לוודא שפתוח ביום שלישי."
  },
  {
    id: "p-odaru", name: "Ō-daru Falls", ja: "大滝", kind: "מפל", cat: "nature",
    cid: "9180743447286811627",
    area: "fuji", where: "Kawazu, Izu",
    maps: "大滝 滝見台 河津",
    note: "מרפסת התצפית ציבורית ובחינם, ושביל העץ פתוח 08:00-17:00 באוקטובר. לרדת לבריכה שלמרגלות המפל אפשר רק דרך AMAGISO, וזה בתשלום."
  },
  {
    id: "p-hodohodo", name: "HODOHODO Base", ja: "ホドホドBase", kind: "בית קפה · צהריים", cat: "coffee",
    food: ["cafe"], cid: "17089360248133080866",
    area: "fuji", where: "Kawazu, Izu",
    maps: "ホドホドBase 河津",
    note: "静岡県河津町浜75-2. פתוח 10:00-16:30, סגור בימי שני, ויש רק ארבעה מקומות חניה. סגירות לא קבועות מתפרסמות רק באינסטגרם."
  },
  {
    id: "p-koganezaki", name: "Koganezaki", ja: "黄金崎", kind: "צוקי ים", cat: "nature",
    area: "fuji", where: "Nishiizu", pin: true,
    maps: "黄金崎公園",
    note: "צוקי לבה זהובים מעל מפרץ Suruga. בחינם, חניה בחינם, בלי כרטיס ובלי שעה קבועה. 30 עד 40 דקות מספיקות. Horse Rock הוא זה שכולם מצלמים."
  },
  {
    id: "p-nishina", name: "Nishina Pass", ja: "仁科峠展望台", kind: "מעבר הרים", cat: "nature",
    cid: "15755161444151821562",
    area: "fuji", where: "Ugusu, Nishiizu", pin: true,
    maps: "仁科峠展望台",
    note: "נוף מטורף להרים ול-Fuji. בערך 900 מ׳ גובה, פונה מערבה מעל הים. העצירה של שעת הזהב ביום של Izu."
  },
  {
    id: "p-dogashima", name: "Dōgashima", ja: "堂ヶ島", kind: "מערות ים", cat: "nature",
    area: "fuji", where: "Nishiizu",
    maps: "堂ヶ島",
    note: "המפורסמת, והיא יושבת על הדרך צפונה ל-Koganezaki. מה שמיוחד בה הוא לשון החול שנחשפת עד Sanshirojima, ובין אוקטובר לפברואר היא כמעט לא נחשפת באור יום."
  },
  {
    id: "p-shiraito", name: "Shiraito Falls", ja: "白糸の滝", kind: "מפל", cat: "nature",
    cid: "660404680206738851",
    area: "fuji", where: "Fujinomiya", pin: true,
    maps: "白糸の滝 富士宮",
    note: "מסך של 150 מ׳ של מי מעיינות שיוצאים ישר מתוך קיר הסלע, לא מעליו. חניון עירוני, 100 מקומות ומעלה, ¥500 ליום. לתת לזה שעה וחצי עד שעתיים, יחד עם Otodome. זו לא עצירת צילום."
  },
  {
    id: "p-asama", name: "Kawaguchi Asama Shrine", ja: "河口浅間神社", kind: "מקדש שינטו", cat: "do",
    cid: "8266143119040576446",
    area: "fuji", where: "Kawaguchiko",
    maps: "河口浅間神社",
    note: ""
  },
  {
    id: "p-mononoke", name: "Mononoke Forest", kind: "יער", cat: "nature",
    cid: "1889607324312439836",
    area: null, where: "Koumi, Nagano",
    maps: "Mononoke Forest Koumi Nagano",
    note: ""
  },
  {
    id: "p-makaino", name: "Makaino Farm Resort", kind: "חווה", cat: "do",
    cid: "10960162282246731445",
    area: "fuji", where: "Fujinomiya",
    maps: "まかいの牧場",
    note: ""
  },
  {
    id: "p-moom", name: "MooM Cafe", kind: "בית קפה", cat: "coffee",
    food: ["cafe"],
    area: "fuji", where: "אזור ה-Fuji",
    maps: "MooM Cafe Japan",
    note: ""
  },

  /* ============================ Tokyo ============================ */
  {
    id: "p-t-nakameguro", name: "T", ja: "中目黒", kind: "טי-בון וואגיו", cat: "food",
    food: ["wagyu"], cid: "12395878348948571615",
    area: "tokyo", where: "Nakameguro", pin: true,
    maps: "T 中目黒 ステーキ",
    note: "טי-בון של בקר Omi. מוזמן ללילה האחרון שלנו ביפן: יום שני 19.10 ב-20:30, קורס T Genesis. טלפון: 03-6303-0849."
  },
  {
    id: "p-marumo", name: "pizza marumo", kind: "פיצה", cat: "food",
    food: ["italian"], cid: "12231216228328267775",
    area: "tokyo", where: "Tokyo",
    maps: "pizza marumo Tokyo",
    note: "נראית פיצה מטורפת."
  },
  {
    id: "p-coconemaru", name: "Coco Nemaru Ginza", kind: "יקיניקו", cat: "food",
    food: ["yakiniku","wagyu"], cid: "18325154189657589569",
    area: "tokyo", where: "Ginza",
    maps: "Coco Nemaru Ginza",
    note: ""
  },
  {
    id: "p-philocoffea", name: "PHILOCOFFEA", ja: "表参道店", kind: "קפה", cat: "coffee",
    food: ["cafe"], cid: "4398135157958106833",
    area: "tokyo", where: "Omotesandō",
    maps: "PHILOCOFFEA 表参道店",
    note: "מקום קפה מגניב במרתף."
  },
  {
    id: "p-melt", name: "Melt Chocolate", kind: "שוקולד", cat: "coffee",
    food: ["sweets","cafe"], cid: "8143358245469996776",
    area: "osaka", where: "ליד Shinsaibashi",
    maps: "Melt Chocolate Osaka",
    note: ""
  },
  {
    id: "p-travelers", name: "Traveler's Factory", kind: "כלי כתיבה", cat: "shopping",
    cid: "17628119631650716290",
    area: "tokyo", where: "Nakameguro",
    maps: "Traveler's Factory Nakameguro",
    note: "חנות מגניבה. כלי כתיבה ודברים לטיולים. שווה אם אנחנו כבר ב-Nakameguro."
  },
  {
    id: "p-lelabo", name: "LE LABO", kind: "בשמים", cat: "shopping",
    cid: "14264834289694882970",
    area: "tokyo", where: "Daikanyama",
    maps: "LE LABO Daikanyama",
    note: ""
  },
  {
    id: "p-yamada", name: "RECORD BAR YAMADA", kind: "בר תקליטים", cat: "do",
    cid: "12198301837067553124",
    area: "kyoto", where: "Kawaramachi-Gojō",
    maps: "RECORD BAR YAMADA Kyoto",
    note: ""
  },
  {
    id: "p-goodmorning", name: "GOOD morning RECORD BAR", kind: "בר תקליטים", cat: "do",
    cid: "4491421517118041108",
    area: "kyoto", where: "Kawaramachi",
    maps: "GOOD morning RECORD BAR Kyoto",
    note: ""
  },

  /* ============================ On the road ============================ */
  {
    id: "p-sekihall", name: "Gifu Seki Cutlery Hall", ja: "岐阜関刃物会館", kind: "סכינים", cat: "shopping",
    cid: "5465630372951617962",
    area: null, where: "Seki, Gifu", pin: true,
    maps: "岐阜関刃物会館",
    note: "関市平和通4-12-6, בתוך מתחם Sekiterrace. פתוח 9:00-17:00 וסגור רק בראש השנה האזרחית, אז ב-10.10 פתוח. בערך 100 מקומות חניה. שווה 45 עד 60 דקות. זה אולם מכירה ישירה של המפעלים של Seki, לא מוזיאון. (מוזיאון החרבות ליד עושה הדגמות חישול רק בתאריכים קבועים, בדרך כלל ביום ראשון הראשון בחודש, אז לא בשבת שלנו.) טלפון: 0575-22-4941."
  },
  {
    id: "p-metasequoia", name: "Avenue of Metasequoias", ja: "メタセコイア並木", kind: "שדרת עצים", cat: "nature",
    cid: "13604477247831000687",
    area: null, where: "Takashima, Shiga",
    maps: "メタセコイア並木 高島",
    note: "צריך לנסוע לטייל באזור הזה."
  },
  {
    id: "p-lacollina", name: "La Collina Ōmi-Hachiman", ja: "ラ コリーナ近江八幡", kind: "מתחם מאפים ומתוקים", cat: "do",
    food: ["sweets"], cid: "17179290743664196562",
    area: null, where: "Ōmi-Hachiman, Shiga", pin: true,
    maps: "ラ コリーナ近江八幡",
    note: "גן מוזר למראה, פארק ומוסך אוכל. מקום משונה, שווה הצצה. זה כפר המתוקים של Taneya מתחת לגג מכוסה דשא, פתוח כל יום 9:00-18:00: הזמנות אחרונות בבית הקפה ב-17:00, מתחם האוכל 10:00-17:00, והמאפייה מ-11:00 ועד שנגמר. 650 מקומות חניה. עצירת הצהריים של ה-9.10."
  },
  {
    id: "p-kuromon", name: "Kuromon Ichiba Market", ja: "黒門市場",
    kind: "שוק · אוכל ומזכרות", cat: "shopping",
    area: "osaka", where: "Nipponbashi", pin: true,
    maps: "黒門市場",
    note: "הבחירה של מקומי למזכרות אותנטיות. לדעתו השוק רגוע יותר ופחות מלכודת תיירים מ-Nishiki ב-Kyoto, שגם אותו נראה. המסחר בערך 08:00-18:00, אבל הרבה דוכנים עובדים 08:00-16:00, ורובם מתקפלים עד 17:30. יום ראשון הוא יום החופש הקבוע של השוק."
  },
  {
    id: "p-doguyasuji", name: "Sennichimae Doguyasuji", ja: "千日前道具屋筋商店街",
    kind: "ארקייד כלי מטבח", cat: "shopping",
    area: "osaka", where: "Namba", pin: true,
    maps: "千日前道具屋筋商店街",
    note: "מקומי הצביע על רחוב הקניות Sennichimae, ומה ששווה שם את ההליכה זה זה: ארקייד מקורה של 150 מ׳ עם חנויות ציוד למסעדות וכלי מטבח, כמה דקות מ-Namba. יותר מתריסר מהן מוכרות סכינים. זה מבחר רחב יותר מ-Tower Knives, וזה הופך אותו לעצירת הסכינים הראשונה האמיתית, לפני Seki ב-10.10. מה שקונים טס הביתה במזוודה שנשלחת."
  },
  {
    id: "p-nambaparks", name: "Namba Parks", ja: "なんばパークス",
    kind: "קניון · גן על הגג", cat: "shopping",
    area: "osaka", where: "Namba",
    maps: "なんばパークス",
    note: "עצירה פרקטית של מקומי, לא אטרקציה: קניות מהירות והצטיידות בקונביני, יחד עם הרחובות התת-קרקעיים שיוצאים מתחנת Namba. שימושי ביום ראשון, כש-Kuromon סגור."
  },
  {
    id: "p-dendentown", name: "Den Den Town", ja: "日本橋でんでんタウン",
    kind: "אלקטרוניקה ואנימה", cat: "shopping",
    area: "osaka", where: "Nipponbashi",
    maps: "日本橋でんでんタウン",
    note: "אזור האלקטרוניקה והאנימה של Osaka, צמוד ל-Namba. המקומי הזכיר אותו בקטע של אם זה הקטע שלכם, לא כהמלצה. MUSICBAR FLAG נמצא ב-Nipponbashi, ו-Kuromon באותו צד של Namba, אז שלושתם מתחברים."
  },
  {
    id: "p-shinsekai", name: "Shinsekai", ja: "新世界",
    kind: "שכונת רטרו", cat: "do",
    area: "osaka", where: "Shinsekai",
    maps: "新世界",
    note: "הבחירה של מקומי לשכונת ערב תוססת, סביב Tsutenkaku. Tower Knives נמצא פה, אז השניים מתחברים לסיבוב אחד. Tennoji והפארק שלו ממש ליד, והוא ציין במיוחד שגן החיות שם שליו בצורה מפתיעה."
  },
  {
    id: "p-nakanoshima", name: "Nakanoshima", ja: "中之島",
    kind: "אי על הנהר", cat: "do",
    area: "osaka", where: "Kitahama",
    maps: "中之島公園",
    note: "מקום שמקומי אוהב, עם הסתייגות שלו: זה קרוב יותר ל-Hommachi מאשר ל-Namba, אבל אף פעם לא יותר מ-20 דקות בערך. מתחבר לקפה שכבר שמרנו, כי grenier ו-Brooklyn Roasting שניהם ב-Kitahama, ממש מעבר למים."
  },
  {
    id: "p-yodobashi", name: "Yodobashi Umeda", ja: "ヨドバシカメラ マルチメディア梅田", kind: "חנות ענק לאלקטרוניקה", cat: "shopping",
    area: "osaka", where: "Umeda",
    maps: "ヨドバシカメラ マルチメディア梅田",
    note: "גן העדן של המקומי. מול השער הצפוני של JR Osaka Station. ב-Namba אין Yodobashi, ושם המתחרה הוא Bic Camera. פתוח כל יום 09:30-22:00."
  },
  {
    id: "p-osakacastle", name: "Osaka Castle", ja: "大阪城天守閣", kind: "מגדל הטירה · מוזיאון", cat: "do",
    area: "osaka", where: "Chūō-ku",
    maps: "大阪城天守閣",
    note: "המגדל פתוח כל יום, 09:00-18:00, כניסה אחרונה ב-17:30. גן Nishinomaru שבאותו מתחם סגור בימי שני."
  },
  {
    id: "p-uniqlo", name: "UNIQLO Shinsaibashi", ja: "ユニクロ 心斎橋店", kind: "בגדים · שש קומות", cat: "shopping",
    area: "osaka", where: "Shinsaibashi-suji",
    maps: "ユニクロ 心斎橋店",
    note: "הגדול, בארקייד Shinsaibashi-suji ליד תחנת Shinsaibashi, 15 עד 20 דקות הליכה מ-Namba. יש סניף קטן יותר ב-Namba Walk, הקניון התת-קרקעי שמתחת ל-Namba. טקס-פרי מעל סכום המינימום."
  },
  {
    id: "p-dotonbori", name: "Dōtonbori", ja: "道頓堀", kind: "תעלה · ניאון · השלט של Glico", cat: "do",
    area: "osaka", where: "Namba",
    maps: "道頓堀 グリコサイン",
    note: "התעלה, הניאון והשלט של Glico, כמה דקות מ-Hōzenji. בשביל לאכול באמת, Hōzenji ו-Ura-Namba שלידו אותנטיים יותר והרבה יותר רגועים."
  },
  {
    id: "p-torikizoku", name: "Torikizoku", ja: "鳥貴族", kind: "רשת יקיטורי · ¥390 למנה", cat: "food",
    food: ["yakitori","izakaya"],
    area: "osaka", where: "Dōtonbori · Sennichimae", pin: true,
    maps: "鳥貴族 難波",
    note: "יקיטורי זול, מחיר אחד לכל דבר: ¥390 כולל מס. מזמינים בטאבלט שעל השולחן, באנגלית. ארבעה סניפים סביב Namba: Dōtonbori, Dōtonbori Nakaza, Sennichimae ו-Sennichimae 2. לנועה, לפי טבלת האלרגנים שלהם (1.9.2026): ברוטב ה-tare ובמלח אין חזיר, וכל השיפודים בסדר חוץ משיפוד בטן החזיר. ממה להיזהר זה פחות ברור מאליו: ה-Toriki karaage המפורסם, סלט העוף והמיונז, המבורג העוף, מנות הילדים, וכל מנות האטריות והאורז לסיום חוץ משני ה-donburi. הכול יוצא ממטבח אחד."
  },
  {
    id: "p-toratoriya", name: "TORA鶏YA", ja: "炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店", kind: "יקיטורי · גיוזה בביס", cat: "food",
    food: ["yakitori","izakaya"], cid: "9887640051300949949",
    area: "osaka", where: "Sennichimae",
    maps: "炭火焼鳥と一口餃子 TORA鶏YA 難波千日前店",
    note: "ההזמנה ל-4.10 בוטלה. ב-Sennichimae: עוף שנצלה על binchotan ומוגש בלי השיפוד. ב-gyoza של הביס האחד לא כתוב מה המילוי, אז לשאול לפני שמזמינים אותן לנועה."
  },
  {
    id: "p-kibitaki", name: "Kibitaki Bettei", ja: "YAKITORI KIBITAKI 別邸", kind: "יקיטורי · 7 שיפודים של השף", cat: "food",
    food: ["yakitori"],
    area: "osaka", where: "Shinsaibashi-suji",
    maps: "YAKITORI KIBITAKI 別邸 心斎橋",
    note: "ההזמנה ל-5.10 בוטלה כשהלילות הראשונים עברו ל-Kyoto. שבעה שיפודים של השף, הכול עוף משלושה זנים מקומיים: Aizu jidori, Kawamata shamo ו-Date chicken. ואין בתפריט שום חזיר. באותו בלוק של ה-UNIQLO הגדול."
  }
,
  {
    id: "p-minato", name: "MINATO", ja: "鉄板ダイニングバルMINATO", kind: "בר טפאן", cat: "food",
    food: ["other"], cid: "1006340340076078079",
    area: "matsumoto", where: "Chūō, ליד התחנה", pin: true,
    maps: "鉄板ダイニングバル MINATO 松本",
    note: "מוזמן ל-10.10 ב-20:00. גריל טפאן: עוף בארבע דרכים, סטייק בקר (loin), רוסטביף, צדפות ו-ajillo של פירות ים. לנועה: לוותר על ה-pork ginger steak ועל ה-tonpeiyaki, ולשאול על האוקונומיאקי."
  },
  {
    id: "p-pizzamatsuri", name: "PIZZA MATSURI", ja: "ピッツァ マツリ マツモト", kind: "פיצה נפוליטנית", cat: "food",
    food: ["italian"],
    area: "matsumoto", where: "Chūō, ליד התחנה", pin: true,
    maps: "PIZZA MATSURI MATSUMOTO 松本",
    note: "מוזמן ל-11.10 ב-20:00. פיצה נפוליטנית על בצק שתופח יותר מיממה, נפתח במרץ 2026, עם יין מ-Shiojiri וגם איטלקי. לנועה: המרגריטה בטוחה, וזאת עם הפרושוטו לא. 17:30-22:00, סגור בימי שלישי."
  }
,
  {
    id: "p-hachimanbori", name: "Hachiman-bori", ja: "八幡堀", kind: "תעלת סוחרים ישנה", cat: "do",
    area: null, where: "Ōmi-Hachiman",
    maps: "八幡堀",
    note: "תעלת הסוחרים הישנה שעוברת ב-Ōmi-Hachiman, עם מחסנים וערבות לאורכה וספסלים על המים. ארבע דקות מ-La Collina."
  },
  {
    id: "p-ninosuke", name: "Ninosuke Coffee", ja: "仁之助コーヒー", kind: "קפה סיפון", cat: "coffee",
    food: ["cafe"],
    area: null, where: "Ōmi-Hachiman",
    maps: "仁之助コーヒー 近江八幡",
    note: "ממש ליד Hachiman-bori, בבית עירוני ישן ומשופץ. קפה סיפון, טוסט ומתוקים. 10:00-18:00, סגור בימי שלישי וביום רביעי השני בחודש, אז ביום שישי שלנו פתוח."
  },
  {
    id: "p-ichika", name: "Ibushi-dori Ichika", ja: "いぶし鳥 一香", kind: "יקיטורי של עוף מעושן", cat: "food",
    food: ["yakitori","izakaya"], cid: "12685258170509690805",
    area: "kyoto", where: "ליד Kyoto City Hall", pin: true,
    maps: "いぶし鳥 一香 京都",
    note: "מוזמן ל-7.10, השעה עוד לא סגורה. עוף מקומי שלם שמעושן על עץ דובדבן, ב-machiya עם מטבח פתוח. האורז הוא Tanba Koshihikari שמתבשל בסיר hagama. ארוחת ערב 17:00-22:00, הזמנות אחרונות לאוכל ב-21:00, סגור בימים לא קבועים. בלי דמי שולחן. לנועה: הכול עוף ושום דבר לא מסומן כחזיר. לשאול על הוונטונים ועל האומלט עם הבשר הטחון."
  },
  {
    id: "p-bigoli", name: "BIGOLI", ja: "BIGOLI 京都本店", kind: "בולונז · בלילה בר יין", cat: "food",
    food: ["italian"], cid: "5741547070674036186",
    area: "kyoto", where: "Shijō-Karasuma", pin: true,
    maps: "BIGOLI 京都本店",
    note: "ההזמנה ל-8.10 בוטלה בטעות, ומתכוונים להזמין מחדש לערב אחר. מקום שעושה רק בולונז, על אטריות bigoli עבות, פתוח 11:00-22:30. בלילה הוא הופך לבר יין עם בערך 100 יינות במחיר קבוע לחצי שעה, והאוכל מצטמצם לפסטות שלהם, פרושוטו, גבינות ואגוזים. לנועה: ברשימת המרכיבים של הבולונז שלהם מופיע חזיר, אז לשאול לפני שמזמינים."
  },
  {
    id: "p-shimokitazawa", name: "Shimokitazawa", ja: "下北沢", kind: "וינטג׳, תקליטים, הופעות", cat: "do",
    area: "tokyo", where: "Setagaya", pin: true,
    maps: "下北沢駅",
    note: "אחר צהריים שגולש לערב, בפני עצמו, ונגמר ב-Ittosei או ב-Genki Club. פסטיבל הקארי של Shimokitazawa רץ ב-8-25.10.2026, כלומר כל הזמן שאנחנו שם: 110 מסעדות קארי ו-21 מקומות של מתוקים עם מנות של הפסטיבל, ועוד ראלי חותמות בחינם. דלפק הפרסים פתוח 12:00-20:00. שוק הפשפשים Moon Art Night נגמר ב-3-4.10, לפני שאנחנו מגיעים. שוק הפשפשים של Senrogai מתקיים בתאריכים לא קבועים. בשנה שעברה זה היה בסופ״ש הארוך של אוקטובר, אז לבדוק קרוב לתאריך באינסטגרם, בחשבון fleamarket_99. לנועה: בהרבה קארי יפני יש חזיר, אז לבדוק בכל מקום."
  },
  {
    id: "p-ittosei", name: "Ittosei", ja: "焼鳥とお野菜 一等星", kind: "איזקאיה של יקיטורי וירקות", cat: "food",
    food: ["yakitori","izakaya"], cid: "6364455420254841300",
    area: "tokyo", where: "Shimokitazawa", pin: true,
    maps: "焼鳥とお野菜 一等星 下北沢",
    note: "יקיטורי על פחמי Kishū binchōtan, ירקות עונתיים, קוקטיילים ושוצ׳ו. ארוחת ערב 17:00-23:30, הזמנות אחרונות ב-23:00. סגור בימי שני, או ביום שלישי שאחרי כשיום שני הוא חג. מזמינים אונליין דרך האתר, ittosei-shimokita.com. בערך ¥4,000-6,000 לאדם לפי Google, ומישהו בביקורות מזכיר תפריט באנגלית. שתי דקות מהיציאה המרכזית של התחנה. לנועה: התפריט הוא עוף וירקות, ושום דבר לא מסומן כחזיר."
  },
  {
    id: "p-genkiclub", name: "Genki Club", ja: "ゲンキクラブ", kind: "בר רוק ותיק, היום איזקאיה", cat: "food",
    food: ["izakaya"], cid: "17046698492958955194",
    area: "tokyo", where: "Shimokitazawa", pin: true,
    maps: "Genki Club 下北沢",
    note: "יותר משלושים שנה ב-Shimokitazawa. התחיל בתור בר רוק, אז יש הרבה תקליטים נדירים, J-pop ומוזיקה מערבית משנות ה-70 עד ה-90, ועוד שוצ׳ו נדיר ותפריט ארוך של מנות ביתיות פשוטות. בערך ¥2,000-3,000 לאדם. נפתח ב-18:00. המקורות חלוקים אם הוא סגור בימי רביעי, וזה לא נוגע לימים שלנו. ארבע דקות מהתחנה. לנועה: אין תפריט אונליין, אז לשאול מה חזיר."
  },

  /* ============ From the Google Maps list, imported 29 Sep 2026 ============ */
  {
    id: "p-bingo", name: "Bingo", kind: "איזקאיה", cat: "food",
    area: "kyoto", where: "Shijō-Karasuma",
    food: ["izakaya"], cid: "5256480465268384958",
    maps: "Bingo, 266 Nishinishikikojicho, Nakagyo Ward, Kyoto, 604-8226",
    note: ""
  },
  {
    id: "p-marutomi", name: "Yakiniku MARUTOMI", kind: "יקיניקו", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["yakiniku"], cid: "7415671928894784581",
    maps: "Yakiniku MARUTOMI, 〒600-8001 Kyoto, Shimogyo Ward, Shincho, 68 京都河原町ガーデン 8F",
    note: "בקומה 8 של בניין Kyoto Kawaramachi Garden."
  },
  {
    id: "p-gotengo", name: "Wagyu Sukiyaki Gotengo", kind: "סוקיאקי וואגיו", cat: "food",
    area: "kyoto", where: "Karasuma",
    food: ["wagyu"], cid: "12412167368837409374",
    maps: "Wagyu Sukiyaki Kyoto Gotengo Karasuma, 〒604-8142 Kyoto, Nakagyo Ward, Nishiuoyacho, 605 ＳＴビル B1F",
    note: ""
  },
  {
    id: "p-onikai", name: "Onikai", kind: "איזקאיה", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["izakaya"], cid: "2874729744322046078",
    maps: "Onikai, 388 二階 Komeyacho, Nakagyo Ward, Kyoto, 604-8026",
    note: ""
  },
  {
    id: "p-julia", name: "Julia", kind: "וואגיו · איזקאיה על פחמים", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["wagyu","izakaya"], cid: "8580301910192990551",
    maps: "Charcoal fire izakaya Julia Wagyu specialty store Kyoto",
    note: ""
  },
  {
    id: "p-hafuu", name: "Wagyu Steak Hafuu", ja: "肉専科はふう 本店", kind: "סטייק וואגיו", cat: "food",
    area: "kyoto", where: "Nakagyō, ליד Marutamachi",
    food: ["wagyu"], cid: "9765123227851010420", pin: true,
    maps: "Wagyu Steak Hafuu Honten Kyoto",
    note: "מוזמן ל-8.10 ב-19:30, בסניף הראשי. Niku Senka Hafuu: סטייק ו-beef cutlet. סגור בימי רביעי."
  },
  {
    id: "p-issekisancho", name: "Issekisancho", kind: "יקיניקו", cat: "food",
    area: "kyoto", where: "Umekōji, ליד המלון",
    food: ["yakiniku"], cid: "4673740570661139423",
    maps: "Issekisancho Kyoto",
    note: "יקיניקו בערך חמש דקות הליכה מ-Umekoji Potel."
  },
  {
    id: "p-engine", name: "KYOTO ENGINE RAMEN", kind: "ראמן", cat: "food",
    area: "kyoto", where: "Shinkyōgoku",
    food: ["ramen"], cid: "4771577354754246893",
    maps: "KYOTO ENGINE RAMEN, 580-2 Nakanocho, Nakagyo Ward, Kyoto, 604-8042",
    note: ""
  },
  {
    id: "p-isostand", name: "Iso Stand", kind: "איזקאיה מודרנית · יין", cat: "food",
    area: "kyoto", where: "Karasuma",
    food: ["izakaya"], cid: "7574402055496659049",
    maps: "Iso Stand Kyoto",
    note: ""
  },
  {
    id: "p-daciro", name: "Pizzeria da Ciro", kind: "פיצה נפוליטנית", cat: "food",
    area: "kyoto", where: "ליד Ginkaku-ji",
    food: ["italian"], cid: "3679466593329750053",
    maps: "Pizzeria da Ciro Kyoto",
    note: "נראית פיצה מדהימה. צהריים 11:30-14:30, ערב 17:00-21:30 עם הזמנות אחרונות ב-21:00, וסגור בימי שני. מזמינים אונליין או בטלפון, 075-744-1228. לא להתבלבל עם Restaurant DA CIRO ב-Gion. זו הפיצרייה ב-Sakyō-ku, ליד הקצה הצפוני של ה-Philosopher's Path."
  },
  {
    id: "p-gojoparadiso", name: "Gojo Paradiso", kind: "ים תיכוני · קוקטיילים", cat: "food",
    area: "kyoto", where: "Gojō",
    food: ["other"], cid: "323626008905808875",
    maps: "Gojo Paradiso Restaurant & Bar Kyoto",
    note: ""
  },
  {
    id: "p-wakayama", name: "Kissa Wakayama", ja: "喫茶若山", kind: "קיסאטן · קפה של פעם", cat: "coffee",
    area: "kyoto", where: "Umekōji, ליד המלון",
    food: ["cafe"], cid: "11117871669393714763",
    maps: "喫茶若山 Kissa Wakayama Kyoto",
    note: "בית קפה של פעם, בערך שבע דקות הליכה צפונה מ-Umekoji Potel."
  },
  {
    id: "p-arabica", name: "% ARABICA Arashiyama", kind: "קפה", cat: "coffee",
    area: "kyoto", where: "Arashiyama",
    food: ["cafe"], cid: "17029760350450268096",
    maps: "% ARABICA Kyoto Arashiyama, 3-47 Sagatenryuji Susukinobabacho, Ukyo Ward, Kyoto, 616-8385",
    note: ""
  },
  {
    id: "p-saihoji", name: "Saihō-ji (Kokedera)", ja: "西芳寺", kind: "מקדש האזוב · רק בהזמנה", cat: "do",
    area: "kyoto", where: "Matsuo, מערב Kyoto",
    cid: "12604676872959930581",
    maps: "Saihōji (Kokedera) Temple, 56 Matsuojingatanicho, Nishikyo Ward, Kyoto, 615-8286",
    note: "רק בהזמנה אונליין, ב-intosaihoji.com. ההזמנות נפתחות חודשיים מראש ונסגרות ב-23:59 שעון יפן ביום שלפני. מ-¥4,000 לאחד ועוד עמלה של ¥110, רק בכרטיס אשראי, עד שני אנשים בהזמנה, ובלי ילדים מתחת לגיל 13. ביטול בחינם עד 4 ימים לפני, 50% מ-3 ימים לפני, ומחיר מלא באותו יום. את התאריך אי אפשר לשנות, רק לבטל ולהזמין מחדש. ימי הפתיחה משתנים, אז לבדוק בלוח השנה שלהם."
  },
  {
    id: "p-kuramadera", name: "Kurama-dera", ja: "鞍馬寺", kind: "מקדש בהר", cat: "do",
    area: "kyoto", where: "Kurama",
    cid: "5775934134642836536",
    maps: "Kuramadera Temple, 1074 Kuramahonmachi, Sakyo Ward, Kyoto, 601-1111",
    note: "פתוח 09:00-16:15, כל השנה. עולים דרך שער Niōmon והיער עד ה-Main Hall, ואז מעל הרכס ל-Kibune."
  },
  {
    id: "p-kifune", name: "Kifune Shrine", ja: "貴船神社", kind: "מקדש שינטו", cat: "do",
    area: "kyoto", where: "Kibune",
    cid: "2090262746651448459",
    maps: "Kifune Shrine, 180 Kuramakibunecho, Sakyo Ward, Kyoto, 601-1112",
    note: "מדרגות הפנסים האדומים, ואז פתקי המזל שבמים."
  },
  {
    id: "p-tenjuan", name: "Tenju-an", ja: "天授庵", kind: "תת-מקדש של Nanzen-ji", cat: "do",
    area: "kyoto", where: "Nanzen-ji",
    cid: "14863736009819988434",
    maps: "Tenjuan Kyoto",
    note: ""
  },
  {
    id: "p-teamlab", name: "teamLab Biovortex Kyoto", kind: "מוזיאון אמנות דיגיטלית", cat: "do",
    area: "kyoto", where: "דרומית ל-Kyoto Station",
    cid: "755170767874408507",
    maps: "teamLab Biovortex Kyoto Kyoto",
    note: "החלופה ליום גשום, מהתוכנית הישנה של Kibune."
  },
  {
    id: "p-kamo-keihoku", name: "Kamo Shrine", kind: "מקדש שינטו", cat: "do",
    area: "kyoto", where: "Keihoku, צפון-מערב Kyoto",
    cid: "11230564254737400129",
    maps: "Kamo Shrine Kyoto",
    note: ""
  },
  {
    id: "p-myonlyfragrance", name: "My Only Fragrance", kind: "חנות בשמים", cat: "shopping",
    area: "kyoto", where: "Teramachi",
    cid: "11954202361893570516",
    maps: "My Only Fragrance【 TERAMACHI 】, 〒604-8061 Kyoto, Nakagyo Ward, Shikibucho, ２４５番 MPビル１階",
    note: ""
  },
  {
    id: "p-yoshitake", name: "Wagyu Sukiyaki Yoshitake", kind: "סוקיאקי וואגיו", cat: "food",
    area: "osaka", where: "Semba",
    food: ["wagyu"], cid: "2980391954317132839",
    maps: "WAGYU SUKIYAKI YOSHITAKE, 〒541-0054 Osaka, Chuo Ward, Minamihonmachi, 1 Chome−3−9 サンコービル船場",
    note: ""
  },
  {
    id: "p-idaten", name: "Wagyu IDATEN", kind: "וואגיו · יקיניקו", cat: "food",
    area: "osaka", where: "Namba",
    food: ["wagyu","yakiniku"], cid: "4922574177392583819",
    maps: "Wagyu IDATEN, 〒542-0076 Osaka, Chuo Ward, Namba, 1 Chome−8−20 嘉光ビル 2階",
    note: ""
  },
  {
    id: "p-maren-shinsaibashi", name: "MAREN Shinsaibashi", kind: "ראמן · עוף ורוטב סויה", cat: "food",
    area: "osaka", where: "Shinsaibashi",
    food: ["ramen"], cid: "3364357319532619877",
    maps: "MAREN Shinsaibashi Osaka",
    note: "ראמן עוף ושויו. הסניף של Shinsaibashi. הראשי נמצא ב-Kitashinchi."
  },
  {
    id: "p-monique", name: "MONIQUE", kind: "ביסטרו · בר יין", cat: "food",
    area: "osaka", where: "Nakazakichō",
    food: ["other"], cid: "14562593388351391432",
    maps: "MONIQUE, 2 Chome-4-29 Nakazakinishi, Kita Ward, Osaka, 530-0015",
    note: "בר יין."
  },
  {
    id: "p-glitch", name: "GLITCH COFFEE OSAKA", kind: "קפה", cat: "coffee",
    area: "osaka", where: "Nakanoshima",
    food: ["cafe"], cid: "6806706993377406620",
    maps: "GLITCH COFFEE OSAKA Osaka",
    note: ""
  },
  {
    id: "p-sancya", name: "SANCYA GOOD HORUMONZ", kind: "איזקאיה של horumon", cat: "food",
    area: "tokyo", where: "Sangenjaya",
    food: ["izakaya","yakiniku"], cid: "16194779025572897733",
    maps: "SANCYA GOOD HORUMONZ, 2 Chome-20-7 Taishido, Setagaya City, Tokyo 154-0004",
    note: ""
  },
  {
    id: "p-azumi", name: "Azumi Steel", kind: "איזקאיה טפאן", cat: "food",
    area: "tokyo", where: "Sangenjaya",
    food: ["izakaya"], cid: "10706540190242190694",
    maps: "Azumi Steel, 〒154-0004 Tokyo, Setagaya City, Taishido, 4 Chome−25−11 あずみビル 1F",
    note: ""
  },
  {
    id: "p-anpontan", name: "Anpontan", kind: "איזקאיה", cat: "food",
    area: "tokyo", where: "Kōenji",
    food: ["izakaya"], cid: "18443229032418548115",
    maps: "Anpontan, 4 Chome-49-1 Koenjiminami, Suginami City, Tokyo 166-0003",
    note: ""
  },
  {
    id: "p-gonpachi", name: "Gonpachi Nishi-Azabu", kind: "איזקאיה · שיפודים · סובה", cat: "food",
    area: "tokyo", where: "Nishi-Azabu",
    food: ["izakaya","yakitori","noodles"], cid: "1337614840498094983",
    maps: "Gonpachi Nishi-Azabu, 1 Chome-13-11 Nishiazabu, Minato City, Tokyo 106-0031",
    note: ""
  },
  {
    id: "p-goodness", name: "goodNess Shibuya", ja: "goodNess渋谷", kind: "בראנץ׳ · בר יין", cat: "food",
    area: "tokyo", where: "Shibuya",
    food: ["cafe","other"], cid: "9284342398162977529",
    maps: "goodNess渋谷 Tokyo",
    note: ""
  },
  {
    id: "p-sabasu", name: "Sabasu", ja: "サバス", kind: "פיצה · בר יין", cat: "food",
    area: "tokyo", where: "Akasaka",
    food: ["italian"], cid: "1191721468217304870",
    maps: "Sabasu サバス Tokyo",
    note: ""
  },
  {
    id: "p-hikiniku-kichijoji", name: "Hikiniku to Come Kichijōji", kind: "המבורג סטייק", cat: "food",
    area: "tokyo", where: "Kichijōji",
    food: ["wagyu"], cid: "2802556918696748575",
    maps: "Hikiniku to Come Kichijoji Tokyo",
    note: ""
  },
  {
    id: "p-shibaura", name: "Shibaura Horumon", ja: "新宿もつ焼き芝浦ホルモン", kind: "איזקאיה של motsuyaki", cat: "food",
    area: "tokyo", where: "Shinjuku",
    food: ["izakaya","yakitori"], cid: "17601151525547060217",
    maps: "新宿もつ焼き芝浦ホルモン Tokyo",
    note: ""
  },
  {
    id: "p-hamburgyoshi", name: "Hamburg YOSHI", kind: "המבורג סטייק", cat: "food",
    area: "tokyo", where: "Harajuku",
    food: ["wagyu"], cid: "11643511632178216263",
    maps: "Hamburg YOSHI, 〒150-0001 Tokyo, Shibuya, Jingumae, 6 Chome−12−6 J-Cube B, B 1F",
    note: ""
  },
  {
    id: "p-menmitsuwi", name: "Men Mitsuwi", kind: "ראמן", cat: "food",
    area: "tokyo", where: "Tawaramachi",
    food: ["ramen"], cid: "8702679645026182796",
    maps: "Men Mitsuwi, 〒111-0042 Tokyo, Taito City, Kotobuki, 2 Chome−9−15 サカエビル 1階",
    note: ""
  },
  {
    id: "p-sushihajime", name: "Sushi Hajime", kind: "סושי", cat: "food",
    area: "tokyo", where: "Roppongi",
    food: ["sushi"], cid: "12240280325698392858",
    maps: "Sushi Hajime Tokyo",
    note: ""
  },
  {
    id: "p-kushigin", name: "Kushigin", kind: "בר עמידה · שיפודים", cat: "food",
    area: "tokyo", where: "Akihabara",
    food: ["izakaya","yakitori"], cid: "6749378804094411146",
    maps: "Kushigin, 1 Chome-8-4 Kanda Sakumacho, Chiyoda City, Tokyo 101-0025",
    note: "נראה שיש שם אווירה מגניבה ואותנטית. עוד לא ניסינו."
  },
  {
    id: "p-kikotsuya", name: "Kikotsuya", kind: "ראמן Iekei", cat: "food",
    area: "tokyo", where: "Iwamotochō",
    food: ["ramen"], cid: "15964515600792172735",
    maps: "Kikotsuya Novel Iekei Ramen, 〒101-0032 Tokyo, Chiyoda City, Iwamotochō, 3 Chome−3−1 木村ビル 1F",
    note: "ראמן מעולה. את הביצה והתוספות מוסיפים לבד במכונת הכרטיסים."
  },
  {
    id: "p-menchirashi", name: "Menchirashi", kind: "אודון", cat: "food",
    area: "tokyo", where: "Harajuku",
    food: ["noodles"], cid: "6906870575870610827",
    maps: "Menchirashi, 〒150-0001 Tokyo, Shibuya, Jingumae, 6 Chome−13−7 1F",
    note: ""
  },
  {
    id: "p-age3-harajuku", name: "Age.3×Q Harajuku", kind: "קינוחים · טייק-אוויי", cat: "coffee",
    area: "tokyo", where: "Harajuku",
    food: ["sweets","cafe"], cid: "13467740742160469591",
    maps: "Age.3×Q HARAJUKU Tokyo",
    note: ""
  },
  {
    id: "p-age3-asakusa", name: "Age.3 Asakusa", kind: "קינוחים · טייק-אוויי", cat: "coffee",
    area: "tokyo", where: "Asakusa",
    food: ["sweets","cafe"], cid: "11424241562872171484",
    maps: "Age.3 ASAKUSA Tokyo",
    note: ""
  },
  {
    id: "p-frenchtoast", name: "The French Toast Factory", kind: "פרנץ׳ טוסט · פנקייקים", cat: "coffee",
    area: "tokyo", where: "Akihabara · Yodobashi Akiba 8F",
    food: ["sweets","cafe"], cid: "1491459533799686070",
    maps: "The French Toast Factory Yodobashi AKIBA 8F, 〒101-0028 Tokyo, Chiyoda City, Kanda Hanaokacho, 1-1 ヨドバシAkiba8F",
    note: "להזמין את הפנקייקים האווריריים."
  },
  {
    id: "p-bluebottle", name: "Blue Bottle Shinagawa", kind: "קפה", cat: "coffee",
    area: "tokyo", where: "Shinagawa",
    food: ["cafe"], cid: "339898321736944576",
    maps: "Blue Bottle Coffee - Shinagawa Cafe Tokyo",
    note: ""
  },
  {
    id: "p-onibus", name: "Onibus Coffee", kind: "קפה", cat: "coffee",
    area: "tokyo", where: "Nakameguro",
    food: ["cafe"], cid: "11876988200528194964",
    maps: "Onibus Coffee, 2 Chome-14-1 Kamimeguro, Meguro City, Tokyo 153-0051",
    note: "בית קפה מגניב שמשקיף על פסי הרכבת. לנסות את הבננה ברד."
  },
  {
    id: "p-onibus-3", name: "ONIBUS COFFEE Nakameguro 3-chōme", kind: "קפה", cat: "coffee",
    area: "tokyo", where: "Nakameguro",
    food: ["cafe"], cid: "16085544155917431543",
    maps: "ONIBUS COFFEE Nakameguro 3 Chome Tokyo",
    note: ""
  },
  {
    id: "p-turret", name: "Turret Coffee", kind: "קפה", cat: "coffee",
    area: "tokyo", where: "Tsukiji",
    food: ["cafe"], cid: "1983689277156776805",
    maps: "Turret Coffee, 2 Chome-12-6 Tsukiji, Chuo City, Tokyo 104-0045",
    note: "אומרים שזה קפה עם מישלן."
  },
  {
    id: "p-taw", name: "TAW.", kind: "קפה", cat: "coffee",
    area: "tokyo", where: "Kōenji",
    food: ["cafe"], cid: "3882160721867661876",
    maps: "TAW., 4 Chome-7-6 Koenjiminami, Suginami City, Tokyo 166-0003",
    note: "בית קפה נחמד."
  },
  {
    id: "p-lion", name: "Music Bar Lion", kind: "בר מוזיקה", cat: "do",
    area: "tokyo", where: "Shibuya",
    cid: "15711839861199782352",
    maps: "Music Bar Lion, 6 Chome-19-17 Jingumae, Shibuya, Tokyo 150-0001",
    note: ""
  },
  {
    id: "p-3313", name: "record bar 33 1/3rpm", kind: "בר תקליטים", cat: "do",
    area: "tokyo", where: "Shibuya",
    cid: "9145244086491174842",
    maps: "record bar 33 1/3rpm, 〒150-0043 Tokyo, Shibuya, Dogenzaka, 1 Chome−6−2 渋谷ファイブビル 地下",
    note: "אחלה בר."
  },
  {
    id: "p-senrogai", name: "Shimokita Senrogai Open Space", kind: "מתחם פתוח · שווקים", cat: "do",
    area: "tokyo", where: "Shimokitazawa",
    cid: "14620187529602559460",
    maps: "Shimokita Senrogai Open Space Tokyo",
    note: "פה מתקיים שוק הפשפשים של Senrogai, בתאריכים לא קבועים."
  },
  {
    id: "p-nakameguro", name: "Nakameguro", kind: "שכונה", cat: "do",
    area: "tokyo", where: "Meguro",
    cid: "17770709197957331452",
    maps: "Naka-meguro Sta., 3 Chome-4-1 Kamimeguro, Meguro City, Tokyo 153-0051",
    note: "שכונה מגניבה ושקטה, עם מלא אוכל טוב."
  },
  {
    id: "p-koenji", name: "Kōenji", kind: "שכונה · יד שנייה", cat: "shopping",
    area: "tokyo", where: "Suginami",
    cid: "16352347383568242992",
    maps: "Kōenji Station, Suginami City, Tokyo",
    note: "וייב נחמד וחנויות יד שנייה שוות."
  },
  {
    id: "p-nakano", name: "Nakano", kind: "שדרת קניות", cat: "shopping",
    area: "tokyo", where: "Nakano",
    cid: "5324428965627346351",
    maps: "Nakano Station, Nakano, Nakano City, Tokyo 164-0001",
    note: "שדרת קניות מעולה."
  },
  {
    id: "p-yanakaginza", name: "Yanaka Ginza", kind: "רחוב קניות", cat: "shopping",
    area: "tokyo", where: "Yanaka",
    cid: "17238952707303622496",
    maps: "Yanaka Ginza, 3 Chome-13-1 Yanaka, Taito City, Tokyo 110-0001",
    note: "רחוב חנויות מגניב. כל האזור רגוע ושקט, עם פחות תיירים. כיף להסתובב."
  },
  {
    id: "p-togijin", name: "Togijin Yanaka Ginza", kind: "חנות סכינים", cat: "shopping",
    area: "tokyo", where: "Yanaka",
    cid: "4575324851850933702",
    maps: "Togijin Yanaka Ginza store, 〒110-0001 Tokyo, Taito City, Yanaka, 3 Chome−12 ３things.YANAKA1F",
    note: "חנות סכינים שווה עם מחירים טובים."
  },
  {
    id: "p-meganeichiba", name: "Meganeichiba, Nakano Sun Mall", kind: "חנות משקפיים", cat: "shopping",
    area: "tokyo", where: "Nakano",
    cid: "17971519504980567357",
    maps: "Meganeichiba Nakanosanmoruten, 5 Chome-66-7 Nakano, Nakano City, Tokyo 164-0001",
    note: "שירות מדהים."
  },
  {
    id: "p-yamameya", name: "Yamameya", kind: "איזקאיה", cat: "food",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["izakaya"], cid: "16924704751824104341",
    maps: "Yamameya Matsumoto",
    note: ""
  },
  {
    id: "p-asahido", name: "Asahido", kind: "איזקאיה", cat: "food",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["izakaya"], cid: "9497481251916970340",
    maps: "Asahido Matsumoto",
    note: ""
  },
  {
    id: "p-marufuku", name: "Marufuku", kind: "איזקאיה של גיוזה מ-Shinshū", cat: "food",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["izakaya"], cid: "12365337261045004971",
    maps: "Marufuku Original Shinshu Bite-Size Gyoza Matsumoto",
    note: ""
  },
  {
    id: "p-thumbsup", name: "Thumbs Up", kind: "קארי יפני", cat: "food",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["other"], cid: "2050446235743807473",
    maps: "Thumbs Up Matsumoto",
    note: "קארי עוף."
  },
  {
    id: "p-burgerchop", name: "Bar & Grill BURGER CHOP", kind: "המבורגרים", cat: "food",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["other"], cid: "3487380249326536418",
    maps: "Bar & Grill BURGER CHOP Matsumoto",
    note: ""
  },
  {
    id: "p-taiyo", name: "Thai Restaurant Taiyō", ja: "タイレストラン太陽", kind: "תאילנדי", cat: "food",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["other"], cid: "8641501195763214439",
    maps: "タイレストラン太陽 Matsumoto",
    note: ""
  },
  {
    id: "p-isami", name: "Ko-Hi-ya ISAMI", kind: "קפה", cat: "coffee",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["cafe"], cid: "8335736537805197494",
    maps: "Ko-Hi-ya ISAMI Matsumoto",
    note: ""
  },
  {
    id: "p-sioribi", name: "Sioribi", kind: "קפה", cat: "coffee",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["cafe"], cid: "9619754640281663081",
    maps: "Sioribi Matsumoto",
    note: "אחלה מקום לקפה."
  },
  {
    id: "p-alpscoffee", name: "Alps Coffee Lab", kind: "קפה", cat: "coffee",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["cafe"], cid: "11680320952980335192",
    maps: "Alps Coffee Lab Matsumoto",
    note: ""
  },
  {
    id: "p-eonta", name: "Eonta", kind: "בר · בית קפה", cat: "coffee",
    area: "matsumoto", where: "מרכז Matsumoto",
    food: ["cafe"], cid: "13168302814948402253",
    maps: "Eonta Matsumoto",
    note: ""
  },
  {
    id: "p-peg", name: "peg", kind: "בר יין", cat: "do",
    area: "matsumoto", where: "מרכז Matsumoto",
    cid: "9282875399196466696",
    maps: "peg Matsumoto",
    note: ""
  },
  {
    id: "p-shirahone", name: "Shirahone Onsen open-air bath", kind: "אונסן פתוח", cat: "do",
    area: "matsumoto", where: "Shirahone Onsen",
    cid: "2369578284189636193",
    maps: "Shirahone Onsen Open-air Bath, 〒390-1515 Nagano, Matsumoto, Azumi, 白骨4197-4",
    note: ""
  },
  {
    id: "p-norikura-vc", name: "Norikura Visitor Center", kind: "מרכז מבקרים", cat: "nature",
    area: "matsumoto", where: "Norikura Kōgen",
    cid: "4474663904497524076",
    maps: "Chubusangaku National Park Norikura Visitor Center Matsumoto",
    note: ""
  },
  {
    id: "p-shotaudon", name: "Shōta no Udon", ja: "翔太のうどん", kind: "אודון", cat: "food",
    area: "gujo", where: "Gujō Hachiman",
    food: ["noodles"], cid: "5366817791230317481",
    maps: "翔太のうどん Gujo",
    note: "המקום מפוצץ. לבוא מוקדם."
  },
  {
    id: "p-shiratorisou", name: "Keishōan Shiratori-sō", ja: "鶏匠庵 白鳥荘", kind: "עוף וסובה", cat: "food",
    area: "gujo", where: "צפונית ל-Gujō Hachiman",
    food: ["noodles"], cid: "10517703282625269764",
    maps: "鶏匠庵 白鳥荘 Gujo",
    note: ""
  },
  {
    id: "p-genchan", name: "Yakiniku Genchan", ja: "焼肉げんちゃん", kind: "יקיניקו", cat: "food",
    area: "gujo", where: "Meihō, Gujō",
    food: ["yakiniku"], cid: "16666159911064316556",
    maps: "焼肉げんちゃん Gujo",
    note: ""
  },
  {
    id: "p-supple", name: "SUPPLE COFFEE ROASTERS", kind: "קפה", cat: "coffee",
    area: "gujo", where: "Gujō Hachiman",
    food: ["cafe"], cid: "9125645354933986889",
    maps: "SUPPLE COFFEE ROASTERS Gujo",
    note: "קפה טוב עם נוף מעולה לנהר."
  },
  {
    id: "p-konohananoyu", name: "Konohananoyu", kind: "אונסן", cat: "do",
    area: "fuji", where: "Gotemba",
    cid: "6380248877739393966",
    maps: "Konohananoyu, 2839-1 Fukasawa, Gotemba, Shizuoka 412-0023",
    note: "אונסן עם נוף ל-Fuji."
  },
  {
    id: "p-cycl", name: "CYCL", kind: "סאונה", cat: "do",
    area: "fuji", where: "אגם Yamanaka",
    cid: "2059891203493595106",
    maps: "CYCL Shizuoka",
    note: ""
  },
  {
    id: "p-momiji-kawaguchi", name: "Momiji Tunnel", kind: "מנהרת מייפל", cat: "nature",
    area: "fuji", where: "אגם Kawaguchi",
    cid: "16773994468561148826",
    maps: "Momiji Tunnel Shizuoka",
    note: ""
  },
  {
    id: "p-yushin", name: "Yushin Valley", kind: "עמק", cat: "nature",
    area: "fuji", where: "Yamakita, Kanagawa",
    cid: "5426022625903707138",
    maps: "Yushin Valley, Kurokura, Yamakita, Ashigarakami District, Kanagawa 258-0202",
    note: ""
  },
  {
    id: "p-kimito", name: "Kimito Coffee Biwako Roastery", kind: "קפה", cat: "coffee",
    area: null, where: "Hikone, אגם Biwa",
    food: ["cafe"], cid: "17204188940315059625",
    maps: "Kimito Coffee Biwako Roastery",
    note: ""
  },
  {
    id: "p-tateishi", name: "Tateishi Park", kind: "פארק מעל אגם Suwa", cat: "nature",
    area: null, where: "Suwa",
    cid: "17302496086819496110",
    maps: "Tateishi Park",
    note: ""
  },
  {
    id: "p-tenkawa", name: "Tenkawa", kind: "כפר בהרים", cat: "nature",
    area: null, where: "Yoshino, Nara",
    cid: "15745788243563339427",
    maps: "Tenkawa, Yoshino District, Nara",
    note: "כפר שנראה מדהים ליום שמשי."
  },
  {
    id: "p-enza", name: "Enza Cafe & Ramen", kind: "ראמן · בית קפה", cat: "food",
    area: null, where: "Yamanouchi, Nagano",
    food: ["ramen"], cid: "559435638024647332",
    maps: "Enza Cafe & Ramen Enza, 1421-1 Hirao, Yamanochi, Shimotakai District, Nagano 381-0401",
    note: "ראמן עוף מעולה, שווה לנסות."
  },

  /* ============ Added to the Google Maps list since, imported 3 Oct 2026 ============ */
  {
    id: "p-inoichi", name: "Men-ya Inoichi Hanare", ja: "麺屋 猪一 離れ", kind: "ראמן · מרק דגים", cat: "food",
    area: "kyoto", where: "Shijō-Karasuma",
    food: ["ramen"], cid: "9308459117682630403",
    maps: "Men-ya Inoichi Hanare, Kyoto, Shimogyo Ward, Senshojicho, 463",
    note: "המרק כולו דגים, בלי שומן מהחי. יש dashi soba ברוטב סויה לבן, ויש גרסה עם וואגיו צרוב ברוטב סויה שחור. לנועה: לשאול מה הצ׳אשו במנה הרגילה."
  },
  {
    id: "p-sugari", name: "Wajoryomen Sugari", ja: "和醸良麺 すがり", kind: "ראמן · צוקמן", cat: "food",
    area: "kyoto", where: "Shijō-Karasuma",
    food: ["ramen"], cid: "2521468783158862043",
    maps: "Wajoryomen Sugari, Kyoto, Nakagyo Ward, Kannondocho, 471-1",
    note: "ידוע בצוקמן עם motsu, כלומר מעיים. לפי מה שמצאנו המרק על עצמות חזיר ודגים, אז לנועה כנראה לא מתאים. לשאול."
  },
  {
    id: "p-roku", name: "Chinese Noodles ROKU", ja: "中華そば 六", kind: "ראמן", cat: "food",
    area: "kyoto", where: "Kawaramachi",
    food: ["ramen"], cid: "9020426365839451458",
    maps: "Chinese Noodles ROKU, Kyoto, Shimogyo Ward, Inaricho, 二丁目318-6 GOOD NATURE STATION 2階",
    note: "בקומה 2 של GOOD NATURE STATION. מרק צלול מחמישה סוגי עצמות: ברווז, עוף, צבי, בקר וחזיר. סגור בימי רביעי. לנועה: במרק הרגיל יש חזיר. יש להם גם chicken paitan, לשאול אם הוא נקי."
  },
  {
    id: "p-motoigyoza", name: "MOTOI Gyoza", ja: "モトイギョーザ", kind: "גיוזה", cat: "food",
    area: "kyoto", where: "ליד Nishiki Market",
    food: ["other"], cid: "13108102059948347991",
    maps: "MOTOI Gyoza, 470-2 Setoyacho, Nakagyo Ward, Kyoto, 604-8122",
    note: "מקום הגיוזה של השף של MOTOI, המסעדה הצרפתית עם כוכב המישלן. לנועה: ה-Motoi Gyoza על חזיר. ה-Papa Gyoza היא שרימפס ועירית בלי שום, ועליה לשאול."
  },
  {
    id: "p-taqueria", name: "Taqueria Tacos", ja: "タケリア タコス", kind: "טאקוס", cat: "food",
    area: "kyoto", where: "ליד Nishiki Market",
    food: ["other"], cid: "16013147241548043485",
    maps: "Taqueria Tacos, Kyoto, Nakagyo Ward, Nishiuoyacho, 593",
    note: ""
  },
  {
    id: "p-maumu", name: "Bistro Maumu", kind: "ביסטרו צרפתי · בר יין", cat: "food",
    area: "kyoto", where: "Shijō-Karasuma",
    food: ["other"], cid: "1346641608953121493",
    maps: "Bistro Maumu, Kyoto, Shimogyo Ward, Ayazaimokucho, １９９番地４",
    note: "ביסטרו צרפתי עם נגיעות איטלקיות וספרדיות, ויינות שבוחר סומלייה. אפשר קורס ואפשר מנות בודדות. סגור בימי רביעי."
  },
  {
    id: "p-katsugyu", name: "Gyukatsu Kyoto Katsugyu", ja: "牛カツ京都勝牛 先斗町本店", kind: "שניצל בקר", cat: "food",
    area: "kyoto", where: "Pontochō",
    food: ["wagyu"], cid: "5588240214050569350",
    maps: "GYUKATSU Kyoto Katsugyu Pontocho Honten, 188 Zaimokucho, Nakagyo Ward, Kyoto, 604-8017",
    note: "הסניף המקורי של הרשת. שניצל בקר שמטגנים מדיום-רייר ומסיימים לבד על פלטה בשולחן. ארבעה נתחים, כולם בקר: סרלוין של וואגיו, loin, פילה ולשון. לנועה: המנות עצמן בקר. לשאול רק על רוטב הקארי."
  },
  {
    id: "p-nikuteishin", name: "Gion Nikutei Shin", ja: "祇園肉亭 新", kind: "וואגיו · יקיניקו", cat: "food",
    area: "kyoto", where: "Gion",
    food: ["wagyu","yakiniku"], cid: "14770075270920964879",
    maps: "Gion Nikutei Shin, 366-2 Kiyomotocho, Higashiyama Ward, Kyoto, 605-0084",
    note: "בקר Ōmi ושאר וואגיו, עם דגים ופירות ים של העונה. מזמינים ב-TableCheck."
  },
  {
    id: "p-esu", name: "Yakiniku Genshu Esu", ja: "やき肉玄趣 江洲", kind: "יקיניקו וואגיו", cat: "food",
    area: "kyoto", where: "Hyakumanben",
    food: ["yakiniku","wagyu"], cid: "11805871223651986419",
    maps: "やき肉玄趣 江洲, 103 Tanaka Monzencho, Sakyo Ward, Kyoto, 606-8225",
    note: "יקיניקו של בקר Ōmi. כל המקומות בחדרים פרטיים, מול גינה יפנית."
  },
  {
    id: "p-k36", name: "K36 The Bar & Rooftop", kind: "בר על הגג", cat: "food",
    area: "kyoto", where: "Kiyomizu",
    food: ["other"], cid: "552495149033616966",
    maps: "K36 (The Bar & Rooftop), Kyoto, Higashiyama Ward, Kiyomizu, 2 Chome−204-2 4F The Hotel Seiryu",
    note: "בקומה 4 של The Hotel Seiryu Kyoto Kiyomizu, עם נוף ל-Yasaka Pagoda. המקומות מתמלאים מהר, אז להגיע בפתיחה."
  },
  {
    id: "p-hachimonjiya", name: "Hachimonjiya", ja: "八文字屋", kind: "בר", cat: "food",
    area: "kyoto", where: "Kiyamachi",
    food: ["other"], cid: "6503794241573479908",
    maps: "Hachimonjiya, Kyoto, Nakagyo Ward, Nabeyacho, 209-3 3F",
    note: "הבר של הצלם Kai Fusayoshi, בקומה 3. מקום מפגש של אנשי תרבות ב-Kyoto."
  }
];

export const CATEGORIES = [
  { id: "food", label: "אוכל" },
  { id: "coffee", label: "קפה ומתוק" },
  { id: "do", label: "מה עושים" },
  { id: "shopping", label: "שופינג" },
  { id: "nature", label: "טבע" }
];

/* Food types are practical filters, not decoration. A place can carry more
   than one — a yakitori-ya is often an izakaya too. Tagged by hand from the
   Google category and the menu we know, never from the name alone. */
export const FOOD_TYPES = [
  { id: "sushi",    label: "סושי" },
  { id: "ramen",    label: "ראמן" },
  { id: "yakiniku", label: "יקיניקו" },
  { id: "izakaya",  label: "איזקאיה" },
  { id: "yakitori", label: "יקיטורי" },
  { id: "wagyu",    label: "וואגיו וסטייק" },
  { id: "italian",  label: "איטלקי" },
  { id: "noodles",  label: "אודון וסובה" },
  { id: "tempura",  label: "טמפורה" },
  { id: "cafe",     label: "בתי קפה" },
  { id: "sweets",   label: "מתוקים ומאפים" },
  { id: "other",    label: "אחר" }
];

export const placeById = Object.fromEntries(places.map(p => [p.id, p]));

/* A place imported from the Google Maps list keeps its Maps id, which opens
   the exact pin rather than whatever a text search lands on. */
export function mapsUrl(place) {
  if (place.cid) return "https://www.google.com/maps?cid=" + place.cid;
  return "https://www.google.com/maps/search/?api=1&query=" +
         encodeURIComponent(place.maps || place.name);
}
