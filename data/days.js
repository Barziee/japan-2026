/* One entry per date.

   Time is deliberately loose. `t` is either an exact clock time, an
   approximate one, or a part of the day — research that said "morning" stays
   "morning" and is never quietly promoted to 09:00. There is no completion
   state anywhere: the schedule is guidance, and the app never asks to be
   ticked off.

     { k: "exact",  v: "09:30" }   09:30
     { k: "approx", v: "10:45" }   ~10:45
     { k: "part",   v: "morning" } בוקר (morning · midday · afternoon · evening)
     { k: "seq" }                  no time, just order

   `route` is the shape of the day as a strip: the first node is where it
   starts, and every node after carries how we got there.
   `saved` points at places.js. `logistics` points at wallet.js.

   The text is Hebrew; names of places stay in English, and `place` is the
   Google Maps query, so it stays in English too. A title that mixes the two
   starts with the Hebrew, so it lays out right to left. A name that starts
   with a digit or a symbol is wrapped in ⁦ … ⁩ when it sits inside
   a Hebrew sentence, or the layout would flip its two halves. */

export const days = [
  {
    id: "d04", date: "2026-10-04", dow: "Sun", dest: "kyoto",
    title: "נוחתים, וערב ראשון רגוע",
    route: [
      { name: "KIX" },
      { name: "Kyoto", via: "JR Haruka", mode: "train" },
      { name: "Umekōji", via: "ברגל · 19 דק׳", mode: "walk" }
    ],
    plan: [
      { t: { k: "exact", v: "11:40" }, name: "נוחתים ב-KIX", detail: "ביקורת גבולות ומזוודות, ואז רכבת ל-Kyoto.", place: "Kansai International Airport", wallet: "w-out" },
      { t: { k: "seq" }, name: "ברכבת Haruka ל-Kyoto", detail: "ה-limited express של JR נוסע מהשדה ישר ל-Kyoto Station. המלון 19 דקות הליכה משם, או תחנה אחת בקו JR Sagano עד Umekōji-Kyōtonishi.", place: "Kyoto Station" },
      { t: { k: "exact", v: "15:00" }, name: "Umekoji Potel", detail: "צ׳ק-אין מ-15:00. שלושה לילות פה, ואז Gion.", wallet: "w-potel" }
    ],
    ideas: [
      { title: "נשארים קרוב", body: "Kissa Wakayama לקפה ו-Issekisancho ליקיניקו, שניהם כמה דקות הליכה מהמלון.", saved: ["p-wakayama", "p-issekisancho"] },
      { title: "או יורדים למרכז", body: "אוטובוס 207 מגיע ל-Shijō בערך ב-25 דקות. Nishiki ו-Teramachi לסיבוב ראשון, ואז איזקאיה: Onikai או ⁦365 Sakaba⁩, או Julia בשביל וואגיו.", saved: ["p-onikai", "p-365", "p-julia"] }
    ],
    logistics: ["w-out", "w-potel"],
    saved: ["p-wakayama", "p-issekisancho", "p-onikai", "p-365", "p-julia"]
  },

  {
    id: "d05", date: "2026-10-05", dow: "Mon", dest: "kyoto",
    title: "יום חופשי ב-Kyoto",
    flexible: true, bank: "kyoto",
    plan: [],
    ideas: [
      { title: "הכיוון כרגע: Osaka", body: "היום של Osaka מלמטה, ועליו שופינג: עדשה למצלמה, בגדים, ולאכול טוב בדרך.", saved: ["p-tokito", "p-maren"] },
      { title: "זה יום שני", body: "Pizzeria da Ciro סגורה בימי שני." }
    ],
    logistics: ["w-potel"],
    saved: ["p-tokito", "p-maren", "p-yatt", "p-grenier"]
  },

  {
    id: "d06", date: "2026-10-06", dow: "Tue", dest: "kyoto",
    title: "יום חופשי ב-Kyoto",
    flexible: true, bank: "kyoto",
    plan: [],
    ideas: [
      { title: "הכיוון כרגע: Kurama ו-Kibune", body: "ההליכה בהר מלמטה, אם היום יבש. אם השביל רטוב, הרכבת ל-Kibuneguchi ואוטובוס 33 מגיעים לכפר בלי לטפס.", saved: ["p-kuramadera", "p-kifune"] },
      { title: "בערב: Gion, ואז איזקאיה", body: "חוזרים לעיר, לסמטאות של Gion, ואז חוצים את הנהר ל-Kiyamachi ול-Kawaramachi.", saved: ["p-onikai", "p-julia", "p-365"] }
    ],
    logistics: ["w-potel"],
    saved: ["p-kuramadera", "p-kifune", "p-onikai", "p-julia", "p-365"]
  },

  {
    id: "d07", date: "2026-10-07", dow: "Wed", dest: "kyoto",
    title: "עוברים ל-Gion",
    flexible: true, bank: "kyoto",
    plan: [
      { t: { k: "part", v: "morning" }, name: "צ׳ק-אאוט מ-Umekoji Potel", detail: "עד 11:00. Gion בצד השני של העיר, ומונית עם המזוודות היא הדרך הפשוטה.", wallet: "w-potel" },
      { t: { k: "exact", v: "15:00" }, name: "MIRU Kyoto Gion", detail: "צ׳ק-אין מ-15:00. שני לילות, בשתי הזמנות נפרדות.", wallet: "w-miru" },
      { t: { k: "part", v: "evening" }, name: "ארוחת ערב · Ibushi-dori Ichika", detail: "מוזמן, השעה עוד לא סגורה. יקיטורי של עוף מעושן, ב-machiya ליד Kyoto City Hall. הכול עוף. לנועה: רק לשאול על הוונטונים ועל האומלט עם הבשר הטחון.", saved: "p-ichika" }
    ],
    ideas: [
      { title: "יום שמסתדר סביב המעבר", body: "אורזים בבוקר ומגיעים ל-Gion אחר הצהריים, אז משהו קרוב מתאים היום יותר מההליכה בהר. Hikiniku to Come סגור בימי רביעי." }
    ],
    logistics: ["w-potel", "w-miru", "w-ichika"],
    saved: ["p-ichika", "p-2050", "p-panel", "p-alchemist", "p-ing"]
  },

  {
    id: "d08", date: "2026-10-08", dow: "Thu", dest: "kyoto",
    title: "היום האחרון ב-Kyoto",
    flexible: true, bank: "kyoto",
    plan: [
      { t: { k: "part", v: "morning" }, name: "צ׳ק-אאוט מ-MIRU וצ׳ק-אין מחדש", detail: "הם לא הסכימו לחבר את שתי ההזמנות. אורזים ערב לפני, והם מעבירים את המזוודות.", wallet: "w-miru" },
      { t: { k: "exact", v: "19:30" }, name: "ארוחת ערב · Niku Senka Hafuu", detail: "מוזמן לשניים בסניף הראשי, דרומית לארמון הקיסרי. מקום של בקר: סטייק ו-beef cutlet. את התפריט עוד לא בדקנו לחזיר, אז לשאול לפני שנועה מזמינה.", saved: "p-hafuu", wallet: "w-hafuu" }
    ],
    logistics: ["w-miru", "w-hafuu"],
    saved: ["p-hafuu", "p-bigoli", "p-hikiniku", "p-brulee", "p-uru", "p-panel"]
  },

  {
    id: "d09", date: "2026-10-09", dow: "Fri", dest: "gujo",
    title: "דרך Ōhara ואגם Biwa ל-Gujō",
    route: [
      { name: "Kyoto" },
      { name: "Ōhara", via: "במעלה העמק · כ-30 דק׳", mode: "car" },
      { name: "Biwako Ōhashi", via: "יורדים לאגם · כ-30 דק׳", mode: "car" },
      { name: "Ōmi-Hachiman", via: "מעל הגשר · כ-25 דק׳", mode: "car" },
      { name: "Gujō Hachiman", via: "כשעתיים ורבע", mode: "car" },
      { name: "Gujō-Yamato", via: "כ-15 דק׳", mode: "car" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "בוקר קצר ב-Kyoto", detail: "קפה, אריזה, צ׳ק-אאוט. יום הנהיגה מתחיל באמת בדלפק ההשכרה." },
      { t: { k: "exact", v: "09:00" }, name: "אוספים את ה-Corolla", detail: "Toyota Rent a Car, סניף Sanjo Keihan-Kita, בכתובת 11-2 Magohashichō, Sakyō-ku. עם הניירת, בדיקת ה-ETC וההעמסה, ריאלית יוצאים לדרך בסביבות 09:45.", wallet: "w-corolla" },
      { t: { k: "approx", v: "10:15" }, name: "Ōhara · Sanzen-in", detail: "הקצה הכפרי של Kyoto, חצי שעה במעלה העמק. Sanzen-in פתוח 9:00-17:00, ¥700, ואין לו חניה משלו. חונים באחד החניונים בתשלום בכפר.", place: "Sanzen-in Ohara Kyoto" },
      { t: { k: "seq" }, name: "חוצים את Biwako Ōhashi", detail: "חצי שעה למטה אל האגם, ואז על הגשר לחוף המזרחי. אגרה של ¥150, או ¥120 עם כרטיס ה-ETC.", place: "Biwako Ohashi Bridge" },
      { t: { k: "part", v: "midday" }, name: "צהריים · La Collina Ōmi-Hachiman", detail: "כפר המתוקים של Taneya, מתחת לגג הדשא. מתחם האוכל פתוח 10:00-17:00, והמאפייה נפתחת ב-11:00 ועד שנגמר. 650 מקומות חניה.", saved: "p-lacollina" },
      { t: { k: "seq" }, name: "קפה על Hachiman-bori", detail: "ארבע דקות משם, תעלת הסוחרים הישנה. Ninosuke Coffee, ממש לידה בבית עירוני ישן, פתוח 10:00-18:00 וסגור בימי שלישי. Hori Café יושב ממש על המים, 11:30-15:00.", saved: "p-ninosuke" },
      { t: { k: "approx", v: "16:30" }, name: "Gujō Hachiman", detail: "בערך שעתיים ורבע מ-Ōmi-Hachiman בכבישים המהירים. מגיעים עם בערך שעה של אור, השקיעה ב-17:26. סמטאות המים כל עוד יש אור. ארוחת הערב כבר ליד המלון.", saved: "p-igawa" },
      { t: { k: "seq" }, name: "Fairfield, Gujō-Yamato", detail: "בערך רבע שעה צפונה מהעיר העתיקה. עושים צ׳ק-אין ומשאירים את הרכב.", wallet: "w-fairfield" },
      { t: { k: "exact", v: "20:00" }, name: "ארוחת ערב · Daikokuya", detail: "מוזמן לשניים בחדר טטאמי. יקיניקו של בקר Hida עם תפריט באנגלית על טאבלט, שבע דקות הליכה מה-Fairfield. את התפריט עוד לא בדקנו לחזיר, אז לשאול לפני שנועה מזמינה.", saved: "p-daikokuya", wallet: "w-daikokuya" }
    ],
    alts: [
      { title: "החוף המערבי במקום", when: "אם בא לנו מים יותר מעיירות", body: "Ukimido ב-Katata, אולם המקדש שעומד בתוך האגם (¥300), ואז שער הטוריי במים של Shirahige Shrine. מצלמים אותו ממרפסת התצפית שמול משרד המקדש, ואף פעם לא חוצים בשבילו את כביש 161. מישהו נהרג שם ככה ב-2021. בערך אותה כמות נהיגה." },
      { title: "ישר ל-Gujō", when: "אם יורד גשם, או שאנחנו עייפים", body: "מ-Kyoto ישר ל-Gujō Hachiman זה בערך 180 ק״מ ו-2:40 שעות, וזה משאיר את כל אחר הצהריים בעיירה." }
    ],
    logistics: ["w-corolla", "w-fairfield", "w-daikokuya"],
    saved: ["p-lacollina", "p-hachimanbori", "p-ninosuke", "p-daikokuya", "p-gonza", "p-igawa"]
  },

  {
    id: "d10", date: "2026-10-10", dow: "Sat", dest: "matsumoto",
    title: "בוקר ב-Gujō, עצירה ב-Seki, ואז Matsumoto",
    route: [
      { name: "Gujō-Yamato" },
      { name: "Gujō Hachiman", via: "כ-15 דק׳", mode: "car" },
      { name: "Seki", via: "כ-35 דק׳", mode: "car" },
      { name: "Matsumoto", via: "בכביש המהיר Chūō · כ-2:55 ש׳", mode: "car" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "צ׳ק-אאוט, ויורדים ל-Gujō Hachiman", detail: "רבע שעה למטה מהמלון.", wallet: "w-fairfield" },
      { t: { k: "part", v: "morning" }, name: "ברגל ב-Gujō Hachiman", detail: "תעלות, סמטאות המים, הרחובות שמעל הנהר. כבר היינו פה, אז אין רשימה. קפה ושיטוט, זה כל העניין.", saved: "p-igawa" },
      { t: { k: "part", v: "midday" }, name: "צהריים וקפה", detail: "Keichan בקנטינה של בניין העירייה הישן, או hōba miso ב-Izumizaka. שניהם במרכז העיירה.", saved: "p-gujoshokudo" },
      { t: { k: "approx", v: "13:05" }, name: "Gifu-Seki Cutlery Hall", detail: "שלושים וחמש דקות דרומה, יוצאים מ-Gujō בסביבות 12:30. העצירה של הסכינים: 45 עד 60 דקות להסתובב, וכנראה גם לקנות. פתוח עד 17:00, אז היום אין שעון על זה.", saved: "p-sekihall" },
      { t: { k: "approx", v: "14:05" }, name: "צפונה ב-Chūō Expressway ל-Matsumoto", detail: "בערך 2:55 שעות דרך Tajimi, Nakatsugawa, Iida ו-Ina. זה המסלול הכי מהיר של Google, ורחוק מ-Takayama ומהפסטיבל שלה. עצירה בתחנת שירות באמצע שוברת את הדרך." },
      { t: { k: "approx", v: "17:15" }, name: "Matsumoto Jujo", detail: "צ׳ק-אין, מקלחת, לנשום.", wallet: "w-jujo" },
      { t: { k: "exact", v: "20:00" }, name: "ארוחת ערב · MINATO", detail: "מוזמן, שולחן לשעתיים. בר טפאן ליד תחנת Matsumoto, בערך עשרים דקות במונית מ-Jujo. משאירים את הרכב, כי שותים. לנועה: לוותר על ה-pork ginger steak ועל ה-tonpeiyaki.", saved: "p-minato" }
    ],
    alts: [
      { title: "עצירה ב-Narai-juku בדרך", when: "רק אם ב-Gujō נגמר מהר", body: "זה כבר לא על הכביש המהיר. לפי Google היום יוצא 4:04 שעות נהיגה עם העצירה מול 3:29 בלעדיה, ו-Narai בסביבות 16:40 אומר שהשעה האחרונה של הנסיעה תהיה בחושך." }
    ],
    logistics: ["w-corolla", "w-fairfield", "w-jujo", "w-minato"],
    saved: ["p-sekihall", "p-igawa", "p-gujoshokudo", "p-izumizaka", "p-minato", "p-narai", "p-nakamachi"]
  },

  {
    id: "d11", date: "2026-10-11", dow: "Sun", dest: "matsumoto",
    title: "יום הטבע הגדול",
    flexible: true,
    lead: {
      name: "Kamikōchi",
      detail: "חונים ב-Sawando, נכנסים בשאטל, ואז הולכים מ-Taishō-ike ל-Kappa-bashi. השלכת בשיא באמצע אוקטובר, ואנחנו בדיוק בחלון.",
      place: "Kamikochi Kappa Bridge"
    },
    plan: [
      { t: { k: "part", v: "morning" }, name: "החניון של Sawando", detail: "רכבים פרטיים לא נכנסים. לשאטל פשוט באים ועולים.", place: "Sawando parking Kamikochi" },
      { t: { k: "seq" }, name: "Taishō-ike → Kappa-bashi", detail: "ההליכה בקרקעית העמק. שטוחה ואיטית." },
      { t: { k: "exact", v: "20:00" }, name: "ארוחת ערב · PIZZA MATSURI", detail: "מוזמן. פיצה נפוליטנית שתי דקות מתחנת Matsumoto. מונית מ-Jujo, בערך עשרים דקות. לנועה: המרגריטה בטוחה, וזאת עם הפרושוטו לא.", saved: "p-pizzamatsuri" }
    ],
    alts: [
      { title: "Atera Gorge", when: "אם בא לנו הרפתקה · כשעה ו-40 דק׳ לכל כיוון", body: "בריכות בצבע אמרלד מעל גרניט לבן, בעמק Kiso. חונים בחניון של אנדרטת Akahiko והולכים עד Unarijima והגשר התלוי Nakahatchō, בערך שעתיים הלוך-חזור. רכבים פרטיים מוגבלים רק בשיא הקיץ, אז באוקטובר פתוח. המים קרים והסלע חלקלק: מקסימום רגליים במים, בקצוות. זה עובד באותה מידה ב-12.10, אם העיר יכולה לחכות." },
      { title: "Senjōjiki Cirque", when: "אם Kamikōchi נראה עמוס או סגור", body: "חונים ב-Suganodai (¥500 ליום), 40 דקות באוטובוס, 8 דקות ברכבל עד 2,612 מ׳. למעלה יש מסלול מעגלי ושטוח, אז רק שם מחליטים אם לטפס ל-Kisokoma. לצפות לתורים של שעה ומעלה לרכבל בשיא השלכת, ושלג יכול להתחיל באמצע אוקטובר." },
      { title: "Utsukushigahara", when: "ראות מעולה · כשעה לכל כיוון", body: "רמה בגובה 2,000 מ׳ במעלה ה-Venus Line היפה, והלוגיסטיקה פשוטה: רוב הדברים עובדים מהרכב. לבדוק שה-Skyline פתוח. הוא נסגר בגלל שלג לקראת סוף אוקטובר." },
      { title: "Azumino ו-Daiō Wasabi", when: "מעונן או בלי כוח · 30 עד 40 דק׳", body: "חצי יום של נחלים, חוות ושדות וואסאבי, וזה מחזיק גם במזג אוויר גרוע. לשלב עם חצי יום בעיר." },
      { title: "Tsubame Onsen ו-Myōkō", when: "רק ביום בהיר שהוא לא ה-12.10", body: "שני מרחצאות פתוחים בחינם, Kawara-no-yu ו-Ōgon-no-yu, בערך רבע שעה הליכה מעל הכפר, בגובה 1,100 מ׳. פתוחים מהזריחה עד השקיעה, וסגורים בימי שני. אבל זה 1:40 עד שעתיים לכל כיוון, כלומר ארבע שעות ברכב, והשלכת ב-Myōkō רק מתחילה באמצע אוקטובר. יוצאים ב-08:00, שם ב-10:00, חוזרים עד 17:00. האוכל שם למעלה דל, אז לתכנן צהריים ב-Myōkō Kōgen או להביא איתנו. Imori Pond, מסלול מעגלי של 500 מ׳ עם Myōkō שמשתקף במים, ומפלי Naena הם הגיבוי אם המרחצאות סגורים או מלאים." },
      { title: "Norikura", when: "כנראה שלא, בתאריכים האלה", body: "Tatamidaira מעל 2,700 מ׳. רכבים פרטיים אסורים, אז זה חנה-וסע מ-Norikura Kōgen או מ-Suzuran, ושלג ראשון אפשרי. מאמץ גבוה, ותלוי מאוד במזג האוויר." }
    ],
    logistics: ["w-corolla", "w-jujo", "w-pizzamatsuri"],
    saved: ["p-pizzamatsuri", "p-atera", "p-forespa", "p-tsubame"]
  },

  {
    id: "d12", date: "2026-10-12", dow: "Mon", dest: "matsumoto",
    title: "חג ופסטיבל הסובה ב-Matsumoto",
    route: [
      { name: "Matsumoto Castle" },
      { name: "Nakamachi", via: "ברגל, דרך Nawate", mode: "walk" },
      { name: "Agatanomori", via: "כ-1.5 ק״מ מזרחה", mode: "walk" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "הטירה ופסטיבל הסובה", detail: "הפסטיבל בפארק של הטירה, 10-12.10. להגיע לפני העומס של הצהריים.", place: "Matsumoto Castle" },
      { t: { k: "seq" }, name: "Nawate Street", detail: "רחוב הצפרדעים, לאורך התעלה.", place: "Nawate Street Matsumoto" },
      { t: { k: "seq" }, name: "Nakamachi Street", detail: "מחסני kura בשחור-לבן: קרמיקה, סאקה, קפה.", saved: "p-nakamachi" },
      { t: { k: "part", v: "afternoon" }, name: "הפסקה אמיתית", detail: "צהריים וקפה, בישיבה. זה יום רגוע, לא מסע כומתה." },
      { t: { k: "seq" }, name: "התיכון הישן", detail: "旧制松本高等学校, בניין עץ בפארק Agata-no-Mori.", place: "Kyusei Matsumoto High School" },
      { t: { k: "seq" }, name: "פארק Agatanomori", detail: "מסיימים בפארק שמסביב. נחיתה רכה, לא עוד אתר.", place: "Agatanomori Park Matsumoto" }
    ],
    alts: [
      { title: "Alps Park", when: "רק עם ראות טובה", body: "שווה בשביל הנוף אל האלפים. אחרת מדלגים." },
      { title: "יום עיר מלא לגשם", when: "אם יורד גשם", body: "הטירה מבפנים, Nakamachi ו-Nawate שמקורים בחלקם, קפה, ומוזיאון האמנות של Matsumoto. בגשם לא עולים להרים." }
    ],
    logistics: ["w-jujo"],
    saved: ["p-nakamachi", "p-tsubame"]
  },

  {
    id: "d13", date: "2026-10-13", dow: "Tue", dest: "fuji",
    title: "מ-Matsumoto, דרך האגמים המערביים, ל-Gotemba",
    route: [
      { name: "Matsumoto" },
      { name: "Lake Shōji", via: "125.9 ק״מ · כשעתיים", mode: "car" },
      { name: "Lake Motosu", via: "9.7 ק״מ · 9 דק׳", mode: "car" },
      { name: "Shiraito", via: "צהריים בדרך · כ-35 דק׳", mode: "car" },
      { name: "Lake Tanuki", via: "5.3 ק״מ · 10 דק׳ · לא חובה", mode: "car" },
      { name: "Gotemba", via: "47.7 ק״מ · 50 דק׳", mode: "car" }
    ],
    plan: [
      { t: { k: "exact", v: "07:00" }, name: "יוצאים מ-Matsumoto Jujo", detail: "מוקדם, ובכוונה. זה רואד טריפ דרומה, לא סתם העברה.", wallet: "w-jujo" },
      { t: { k: "approx", v: "09:05" }, name: "Tatego-hama, Lake Shōji", detail: "הנוף של Kodaki Fuji, עם הר Ōmuro מול ה-Fuji. עשרים-שלושים דקות על החוף, בלי הליכה. אם ה-Fuji מתחבא, מקצרים או ממשיכים לנסוע.", saved: "p-shoji" },
      { t: { k: "approx", v: "09:45" }, name: "אגם Motosu, ליד Kōan", detail: "שביל ההליכה על שפת האגם, והקומפוזיציה של שטר ה-¥1,000 מהחוף. לא הטיפוס ל-Nakanokura Pass. זו יותר משעה שאין לנו היום.", saved: "p-motosu" },
      { t: { k: "approx", v: "10:25" }, name: "דרומה בכביש 139", detail: "דרך Asagiri. עשרים דקות ל-Shiraito, חצי שעה ל-Fujinomiya. ארוחת הצהריים תחליט לאן." },
      { t: { k: "approx", v: "11:15" }, name: "צהריים כמו שצריך, בישיבה", detail: "שלוש אפשרויות, כולן על המסלול: Hiraishiya עם יאקיסובה של Fujinomiya ליד Otodome, המזנון של Asagiri Food Park על כביש 139, או Masu no Ie עם פורל ממי מעיינות. בוחרים קרוב לתאריך, ובודקים שפתוח ביום שלישי.", saved: "p-masunoie" },
      { t: { k: "approx", v: "12:40" }, name: "Shiraito Falls", detail: "הלב של היום. מאה וחמישים מטר של מי מעיינות שיוצאים ישר מהסלע. Otodome באותה הליכה. שעה וחצי עד שעתיים, בלי למהר.", saved: "p-shiraito" },
      { t: { k: "approx", v: "14:30" }, name: "אגם Tanuki, אם ההר בחוץ", detail: "עשר דקות משם, ו-45 עד 60 דקות סביב המים. אם ה-Fuji בעננים או שאנחנו באיחור, מדלגים בלי להתבאס.", saved: "p-tanuki", opt: 1 },
      { t: { k: "approx", v: "16:15" }, name: "edit×seven Fuji Gotemba", detail: "חמישים דקות מ-Tanuki, ארבעים ושתיים ישר מ-Shiraito. לא חייבים לנחות בדיוק על שעת הצ׳ק-אין.", wallet: "w-editseven" }
    ],
    alts: [
      { title: "ה-Fuji מוסתר לגמרי", when: "ענן עד למטה", body: "לא מבזבזים את הבוקר על תצפיות לאגמים שאין בהן כלום. נוסעים ישר לצהריים מוקדמים, נותנים ל-Shiraito את השעתיים המלאות, כי אלה מי מעיינות וזה יפה בכל מזג אוויר, ומגיעים ל-Gotemba באור יום." },
      { title: "ה-Fuji רק חצי בחוץ", when: "עננות שבורה", body: "לוקחים את האגם החזק מבין השניים, לא את שניהם. Motosu היא הקומפוזיציה הטובה יותר. Shōji היא העצירה המהירה יותר." },
      { title: "הכול בהיר", when: "הגרסה הטובה", body: "שני האגמים בבוקר, ואז Tanuki אחרי Shiraito. זה 212 ק״מ ובערך שלוש וחצי שעות נהיגה. יום מלא, אבל נוח." }
    ],
    logistics: ["w-corolla", "w-yaris", "w-editseven", "w-jujo"],
    saved: ["p-shoji", "p-motosu", "p-shiraito", "p-otodome", "p-tanuki", "p-hiraishiya", "p-asagiri", "p-masunoie"]
  },

  {
    id: "d14", date: "2026-10-14", dow: "Wed", dest: "fuji",
    title: "רואד טריפ ב-West Izu",
    route: [
      { name: "Gotemba" },
      { name: "Ō-daru", via: "73.9 ק״מ · כביש 414, דרך מנהרת Amagi החדשה", mode: "car" },
      { name: "Kawazu", via: "9 ק״מ", mode: "car" },
      { name: "Koganezaki", via: "42.8 ק״מ, חוצים את חצי האי", mode: "car" },
      { name: "Nishina Pass", via: "14.2 ק״מ, עולים לכ-900 מ׳", mode: "car" },
      { name: "Gotemba", via: "81.7 ק״מ הביתה על הרכס, דרך Shuzenji", mode: "car" }
    ],
    plan: [
      { t: { k: "exact", v: "07:45" }, name: "יוצאים מ-edit×seven", detail: "Tōmei, אחריו Shin-Tōmei, ואז כביש 136 וכביש 414 דרך מנהרת Amagi החדשה וגשר הלולאה. על היום הזה מחליטים ערב לפני, לא בבוקר. כל היום נעול על שקיעה ב-17:16.", wallet: "w-editseven" },
      { t: { k: "approx", v: "09:30" }, name: "Ō-daru Falls", detail: "מפל של 30 מ׳, ממרפסת תצפית ציבורית ובחינם. בערך שעה וחצי פה ובעמק. לא כל שבעת המפלים.", saved: "p-odaru" },
      { t: { k: "approx", v: "11:20" }, name: "HODOHODO Base", detail: "קפה וצהריים עם הרבה ירקות ומאפים של הבית, ובלי חזיר בתפריט. זה חוסך את הבדיקה הרגילה. ארבעה מקומות חניה, אז להגיע לפני 12:00.", saved: "p-hodohodo" },
      { t: { k: "approx", v: "12:40" }, name: "חוצים לחוף המערבי", detail: "כביש 15 דרך מעבר Basara. מפותל, אבל כביש אמיתי של שני נתיבים, ועושים אותו באור יום. עוברים ליד Shimoda בלי לעצור.", place: "Basara Pass Izu" },
      { t: { k: "approx", v: "13:30" }, name: "עצירה ב-Dōgashima, לא חובה", detail: "היא יושבת על כביש 136 צפונה, אז עצירה של 15 עד 20 דקות לתצפית לא עולה כלום. השיט למערות לוקח 20 דקות ועולה ¥1,500, והוא פועל 10:00-16:00.", saved: "p-dogashima" },
      { t: { k: "approx", v: "14:30" }, name: "Koganezaki", detail: "סלע פרופיליט שנצבע בזהב באור של אחר הצהריים. זה בדיוק מה שהשם אומר. בחינם, 92 מקומות חניה, וביום בהיר רואים את ה-Fuji מעבר למפרץ Suruga. יוצאים עד 15:55: החניון נסגר ב-17:00, אז זה לא המקום לשקיעה.", saved: "p-koganezaki" },
      { t: { k: "exact", v: "16:20" }, name: "Nishina Pass", detail: "897 מ׳. שעת הזהב מתחילה ב-16:16, והשקיעה פה למעלה ב-17:16. למטה בגובה הים זה 17:12. מי שמגיע עכשיו חונה ועולה ברגל לפני האור, ולא רודף אחריו.", saved: "p-nishina" },
      { t: { k: "approx", v: "17:35" }, name: "הביתה על הרכס", detail: "נשארים על ה-Nishi-Izu Skyline עד Darumayama, ואז יורדים ל-Shuzenji. 81.7 ק״מ מול 75.1 בקו הישיר על הרכס. תשע דקות בשביל כביש רחב יותר בחושך. חוזרים בסביבות 19:10." }
    ],
    alts: [
      { title: "Panorama-dai והאגמים", when: "ראות מעולה ל-Fuji", body: "Panorama-dai, אחריו Oshino Hakkai מוקדם, ואז צפון Kawaguchiko ו-Ōishi Park." },
      { title: "נשארים קרוב", when: "מעונן חלקית", body: "Gotemba, Yamanakako, Oshino והצד המזרחי של Kawaguchiko." },
      { title: "Hakone", when: "ה-Fuji מתחבא", body: "Lake Ashi, Ōwakudani והמוזיאון הפתוח. הגיבוי הקל והקרוב." },
      { title: "מזרח Izu", when: "יום אחר לגמרי", body: "Itō, הר Ōmuro, ואז הצוקים של Jōgasaki." },
      { title: "מרכז Izu", when: "קצר וקל", body: "Shuzenji והאונסן שמסביב, אולי מפלי Jōren." }
    ],
    logistics: ["w-yaris", "w-editseven"],
    saved: ["p-odaru", "p-hodohodo", "p-koganezaki", "p-nishina", "p-dogashima"]
  },

  {
    id: "d15", date: "2026-10-15", dow: "Thu", dest: "tokyo",
    title: "בוקר אחרון מול ה-Fuji, ואז Tokyo",
    route: [
      { name: "Gotemba" },
      { name: "Shinjuku", via: "Romancecar Mt. Fuji 4 · 12:48-14:25", mode: "train" },
      { name: "Iidabashi", via: "קו JR Chūō-Sōbu local · 6 תחנות", mode: "train" },
      { name: "Kagurazaka", via: "ברגל מ-Iidabashi", mode: "walk" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "עוד תצפית אחת אחרונה", detail: "רק אם ההר מתגלה. הצ׳ק-אאוט ב-edit×seven הוא ב-10:00 או ב-11:00, תלוי בהזמנה. לשאול בקבלה." },
      { t: { k: "approx", v: "12:00" }, name: "מחזירים את ה-GR Yaris", detail: "שעתיים-שלוש לפני ההזמנה של 14:30, כי הרכבת יוצאת ב-12:48. קודם למלא דלק high-octane. הסניף של Toyota נמצא בתחנת Gotemba.", wallet: "w-yaris" },
      { t: { k: "seq" }, name: "כרטיסי נסיעה רגילים בתחנת Gotemba", detail: "הכרטיס האלקטרוני מכסה רק את התוספת של ה-limited express. קונים שני כרטיסי נייר רציפים (連絡乗車券) ל-Odakyu Shinjuku (小田急新宿), בקופה או במכונה של JR, ¥1,310 לאחד. Suica ושאר כרטיסי ה-IC לא עובדים במעבר בין JR ל-Odakyu.", place: "Gotemba Station" },
      { t: { k: "exact", v: "12:48" }, name: "Romancecar Mt. Fuji 4", detail: "קרון 5, מושבים 6C ו-6D. בלי כרטיס נייר: הקנייה בטלפון היא הכרטיס של ה-limited express. המזוודות עולות למדף שמעל, או ליד הרגליים.", wallet: "w-romancecar" },
      { t: { k: "exact", v: "14:25" }, name: "מ-Shinjuku ל-Iidabashi", detail: "יוצאים בשערים של Odakyu עם כרטיס הנייר, ואז JR עם ה-Suica: ה-Chūō-Sōbu local הצהוב, שש תחנות עד Iidabashi. לא ה-Chūō rapid הכתום. הוא לא עוצר שם.", place: "Iidabashi Station" },
      { t: { k: "approx", v: "15:00" }, name: "Metropolitan Edmont", detail: "חמש דקות הליכה מהיציאה המזרחית של JR Iidabashi.", wallet: "w-edmont" },
      { t: { k: "part", v: "evening" }, name: "Kagurazaka", detail: "עולים ברחוב הראשי, ואז לסמטאות המרוצפות שבצדדים. ביסטרו או איזקאיה.", place: "Kagurazaka Tokyo" }
    ],
    logistics: ["w-yaris", "w-romancecar", "w-edmont"],
    saved: []
  },

  {
    id: "d16", date: "2026-10-16", dow: "Fri", dest: "tokyo",
    title: "אזור אחד וערב ב-Tokyo",
    flexible: true, bank: "tokyo",
    plan: [],
    logistics: [],
    saved: []
  },

  {
    id: "d17", date: "2026-10-17", dow: "Sat", dest: "tokyo",
    title: "אזור אחד וערב ב-Tokyo",
    flexible: true, bank: "tokyo",
    plan: [],
    logistics: [],
    saved: []
  },

  {
    id: "d18", date: "2026-10-18", dow: "Sun", dest: "tokyo",
    title: "אזור אחד וערב ב-Tokyo",
    flexible: true, bank: "tokyo",
    plan: [],
    logistics: [],
    saved: []
  },

  {
    id: "d19", date: "2026-10-19", dow: "Mon", dest: "tokyo",
    title: "היום המלא האחרון ב-Tokyo",
    flexible: true, bank: "tokyo",
    plan: [
      { t: { k: "exact", v: "20:30" }, name: "ארוחת ערב · T, Nakameguro", detail: "מוזמן: קורס T Genesis, שולחן לשעתיים וחצי. טי-בון של בקר Omi, וארוחת הערב האחרונה ביפן. T בצד השני של העיר מהמלון, אז האזור של Daikanyama → Nakameguro הוא אחר הצהריים האחרון הטבעי. הוא נגמר בדיוק פה.", saved: "p-t-nakameguro" }
    ],
    logistics: ["w-t"],
    saved: ["p-t-nakameguro", "p-nakameguro", "p-onibus"]
  },

  {
    id: "d20", date: "2026-10-20", dow: "Tue", dest: "tokyo",
    title: "הביתה",
    route: [
      { name: "Iidabashi" },
      { name: "Narita", via: "כשעה וחצי · יוצאים בסביבות 14:30", mode: "train" }
    ],
    plan: [
      { t: { k: "part", v: "morning" }, name: "בוקר רגוע ליד המלון", detail: "שום דבר שצריך בשבילו רכבת לצד השני של העיר." },
      { t: { k: "approx", v: "14:30" }, name: "יוצאים ל-Narita", detail: "ה-N'EX ממרכז Tokyo לוקח בין שעה ורבע לשעה ושלושת רבעי." },
      { t: { k: "exact", v: "18:00" }, name: "המראה מ-NRT", detail: "סכינים רק במזוודה שנשלחת.", wallet: "w-home" }
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
      title: "יום ב-Osaka",
      when: "כל יום ש-Tokito פתוח. הם מפרסמים סגירות בסטוריז באינסטגרם",
      meta: [{ icon: "train", text: "כשעה ורבע לכל כיוון" }, { icon: "clock", text: "יום מלא, בלי לרוץ" }],
      body: "שופינג ואוכל, וחוזרים לישון ב-Kyoto: צהריים ב-Tokito, אחר צהריים בסמטאות ובחנויות הווינטג׳ של Nakazakichō, ו-maren בחמש.",
      steps: [
        { t: { k: "approx", v: "10:15" }, name: "מ-Kyoto ל-Osaka", detail: "JR ל-Osaka, ואז מטרו. בערך שעה ורבע מ-Umekōji עד Tokito.", place: "Osaka Station" },
        { t: { k: "approx", v: "11:30" }, name: "צהריים · Tokito", detail: "ההיילייט של נועה. ה-wagyu sando מוגש רק בצהריים, 11:00-15:00, בלי הזמנות, ובכמות מוגבלת.", saved: "p-tokito" },
        { t: { k: "seq" }, name: "Nakazakichō", detail: "בערך 20 דקות בקו Tanimachi מ-Tanimachi 6-chōme. בתי קפה, חנויות וינטג׳ ורחובות ישנים ושקטים. Yatt או pognam לקפה, MONIQUE לכוס יין.", saved: "p-yatt" },
        { t: { k: "part", v: "afternoon" }, name: "יד שנייה ווינטג׳", detail: "קודם החנויות של Nakazakichō עצמה. אם רוצים עוד, Tenjinbashisuji, הארקייד המקורה הארוך, במרחק הליכה קצרה מזרחה.", saved: "p-tenjinbashi" },
        { t: { k: "exact", v: "17:00" }, name: "ארוחת ערב · maren, Kitashinchi", detail: "20 דקות הליכה במישור מ-Nakazakichō, דרך Umeda. שנים עשר מקומות על הבר ובלי הזמנות, אז התוכנית היא להגיע מוקדם. המרק על עוף. לנועה: לשאול על הצ׳אשו.", saved: "p-maren" },
        { t: { k: "seq" }, name: "חזרה ל-Kyoto", detail: "בערך שעה עד Umekōji ב-JR מ-Osaka Station. מה-7.10, קו Hankyū ל-Kyoto-Kawaramachi הוא הנסיעה הנוחה יותר ל-Gion.", place: "Osaka Station" }
      ],
      tips: [
        { title: "grenier, אם נועה רוצה את השו", body: "ב-Kitahama, בין Tokito ל-Nakazakichō. סוגר ב-19:00." },
        { title: "עצה ממקומי ב-Osaka", body: "Naniwa-ku זה המקום שבו Osaka באמת קורית, והאוכל שם טוב ממה שהוא נראה. להסתובב בלילה ולהתיישב באיזו מסעדת פינה שנראית שקטה." }
      ],
      places: ["p-tokito", "p-yatt", "p-pognam", "p-monique", "p-tenjinbashi", "p-maren", "p-grenier", "p-glitch", "p-melt"]
    },
    {
      id: "k-kibune", star: true,
      title: "מ-Kurama מעל ההר ל-Kibune",
      when: "יום יבש. ולא ה-7.10, שהוא יום המעבר ל-Gion",
      meta: [{ icon: "train", text: "כשעה ורבע לכל כיוון" }, { icon: "clock", text: "יום מלא על שביל הררי" }],
      body: "כבר נחקר, וזה יום הטבע שלא צריך בשבילו רכב: עולים דרך Kurama-dera, חוצים את הרכס, ויורדים ל-Kibune למקדש ולצהריים ליד הנחל.",
      steps: [
        { t: { k: "approx", v: "09:00" }, name: "ל-Demachiyanagi, ואז קו Eizan", detail: "בערך שעה ורבע עד Kurama מ-Umekōji. נשארים בקו Eizan עד התחנה האחרונה, לא יורדים ב-Kibuneguchi. מנהרת עצי המייפל היא על הדרך, ובעונה הזאת היא עוד ירוקה.", place: "Demachiyanagi Station Kyoto" },
        { t: { k: "approx", v: "10:30" }, name: "Kurama-dera", detail: "פתוח 09:00-16:15. עולים דרך שער Niōmon והיער עד ה-Main Hall. ברגל. הרכבל רק אם מזג האוויר או הרגליים אומרים אחרת.", saved: "p-kuramadera" },
        { t: { k: "seq" }, name: "מעל ההר ל-Kibune", detail: "40 דקות בקצב מהיר, בערך שעה בנחת. כיוון אחד. לא חוזרים באותה דרך.", place: "Kurama to Kibune hiking trail" },
        { t: { k: "part", v: "afternoon" }, name: "Kifune Shrine", detail: "מדרגות הפנסים האדומים, ואז פתקי המזל שבמים.", saved: "p-kifune" },
        { t: { k: "seq" }, name: "צהריים ליד הנחל", detail: "הבמות שמעל הנהר יורדות בסוף ספטמבר, אז המסעדות בפנים. ואחר כך מסתובבים. זו לא רשימת משימות." },
        { t: { k: "approx", v: "16:30" }, name: "אוטובוס 33 ל-Kibuneguchi", detail: "ואז קו Eizan חזרה ל-Demachiyanagi.", place: "Kibuneguchi Station Kyoto" }
      ],
      places: ["p-kuramadera", "p-kifune"]
    },
    {
      id: "k-east", star: true,
      title: "מזרח Kyoto, מצפון לדרום",
      when: "לא ביום ראשון, כש-Hinode Udon סגור. הכי קל אחרי שעוברים ל-Gion",
      meta: [{ icon: "bus", text: "כ-50 דק׳ מ-Umekōji, פחות מ-Gion" }, { icon: "clock", text: "רגוע, אם מתחילים מוקדם" }],
      body: "כבר נחקר: Hōnen-in מוקדם, קטע מה-Philosopher's Path, Eikandō בפתיחה, צהריים ב-Hinode Udon, ואז למטה דרך Nanzen-ji אל Gion. מקדש אחד, לא ציד מקדשים.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "Hōnen-in", detail: "שער האזוב והחצר. הכניסה בחינם, ומוקדם אין שם אף אחד.", place: "Honen-in Kyoto" },
        { t: { k: "seq" }, name: "Philosopher's Path", detail: "קטע ממנו, בהליכה דרומה. Pizzeria da Ciro ליד הקצה הצפוני, אבל היא סגורה בימי שני.", place: "Philosophers Path Kyoto" },
        { t: { k: "approx", v: "09:00" }, name: "Eikandō", detail: "המקדש האחד של היום, בסביבות הפתיחה. 09:00-17:00, כניסה אחרונה ב-16:00, ¥1,000.", place: "Eikando Zenrinji Kyoto" },
        { t: { k: "part", v: "midday" }, name: "צהריים · Hinode Udon", detail: "להגיע קצת לפני הפתיחה ב-11:00. בלי הזמנות, רק מזומן, סגור בימי ראשון.", saved: "p-hinode" },
        { t: { k: "seq" }, name: "האקוודוקט של Nanzen-ji", detail: "לא חובה. Tenju-an, אחד מתתי-המקדשים שלו, נמצא ברשימת השמורים.", place: "Nanzenji Suirokaku Kyoto" },
        { t: { k: "seq" }, name: "Gyōjabashi", detail: "גשר האבן הצר מעל ה-Shirakawa, ליד תחנת Higashiyama.", saved: "p-gyojabashi" },
        { t: { k: "seq" }, name: "דרך Furumonzen אל Gion", detail: "יורדים לכיוון הנהר, עם זמן לקפה." }
      ],
      tips: [
        { title: "מה השארנו בחוץ בכוונה", body: "Ginkaku-ji לא נכנס רק כי הוא ליד השביל, ו-Fushimi Inari ו-Arashiyama נשארו מחוץ לתוכנית הישנה." }
      ],
      places: ["p-hinode", "p-daciro", "p-tenjuan", "p-gyojabashi", "p-2050"]
    },
    {
      id: "k-downtown",
      title: "מרכז העיר ברגל",
      when: "כל יום, וטוב גם לגשם. הארקיידים מקורים",
      meta: [{ icon: "bus", text: "אוטובוס 207 · כ-25 דק׳" }, { icon: "clock", text: "רגוע" }],
      body: "קפה, Nishiki והארקיידים של Teramachi, ואז Kiyamachi ו-Pontochō בערב. החלק הכי צפוף ברשימת השמורים, הכול בערך בטווח של קילומטר מ-Shijō-Kawaramachi, ואין מה להזמין מראש.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "קפה ב-uru coffee", detail: "ליד Teramachi.", saved: "p-uru" },
        { t: { k: "seq" }, name: "השוק של Nishiki ו-Teramachi", detail: "שוק האוכל והארקיידים המקורים. My Only Fragrance נמצא ב-Teramachi.", saved: "p-myonlyfragrance" },
        { t: { k: "part", v: "midday" }, name: "צהריים · KYOTO ENGINE RAMEN", detail: "ב-Shinkyōgoku. לבדוק את המרק לפני שנועה מזמינה.", saved: "p-engine" },
        { t: { k: "part", v: "afternoon" }, name: "חוצים את ה-Kamo אל Gion", detail: "Gion Shirakawa, ו-⁦2050 coffee⁩ ליד הנחל.", saved: "p-2050" },
        { t: { k: "part", v: "evening" }, name: "ארוחת ערב ב-Kiyamachi או ב-Pontochō", detail: "Yakiniku MARUTOMI בקומה 8 של Kyoto Kawaramachi Garden, Julia בשביל וואגיו, Onikai או ⁦365 Sakaba⁩ בשביל איזקאיה, או GANSAN ב-Pontochō.", saved: "p-marutomi" },
        { t: { k: "seq" }, name: "בר תקליטים לסיום", detail: "GOOD morning RECORD BAR ממש דרומית ל-Shijō, ו-RECORD BAR YAMADA יותר למטה, ליד Gojō.", saved: "p-goodmorning" }
      ],
      places: ["p-uru", "p-myonlyfragrance", "p-engine", "p-2050", "p-marutomi", "p-julia", "p-onikai", "p-365", "p-gansan", "p-goodmorning", "p-yamada"]
    },
    {
      id: "k-saiho",
      title: "המערב השקט ו-Saihō-ji",
      when: "להזמין עד 23:59 שעון יפן בלילה שלפני",
      meta: [{ icon: "bus", text: "אוטובוס 71 · כשעה" }, { icon: "clock", text: "חצי יום ומעלה" }],
      body: "מקדש האזוב, רק בהזמנה לשעה קבועה. Matsuo-taisha במרחק הליכה קצרה, ו-Arashiyama תחנה אחת בקו Hankyū. היא נשארה מחוץ לתוכנית הישנה, אבל ה-⁦% ARABICA⁩ שם נמצא ברשימת השמורים.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "Saihō-ji", detail: "מזמינים אונליין ב-intosaihoji.com: מ-¥4,000 לאחד ועוד ¥110, רק בכרטיס אשראי, וביטול בחינם עד 4 ימים לפני.", saved: "p-saihoji" },
        { t: { k: "seq" }, name: "Matsuo-taisha", detail: "המקדש הגדול ממש צפונית ל-Saihō-ji.", place: "Matsuo Taisha Kyoto" },
        { t: { k: "seq" }, name: "קפה ב-Arashiyama", detail: "תחנה אחת בקו Hankyū מ-Matsuo-taisha, ואז על גשר Togetsukyō אל ⁦% ARABICA⁩ ליד הנהר.", saved: "p-arabica" }
      ],
      places: ["p-saihoji", "p-arabica"]
    },
    {
      id: "k-ine",
      title: "ברכב ל-Ine ול-Amanohashidate",
      when: "רק ביום בהיר, ורק אם יום ארוך ברכב נשמע טוב",
      meta: [{ icon: "car", text: "ברכב · שעתיים ורבע עד שעתיים וחצי לכיוון" }, { icon: "clock", text: "יום ארוך" }],
      body: "כפר הדייגים שבו בתי הסירות יושבים על המים, 130 ק״מ צפונה, על ים יפן. יפהפה, אבל זה בערך חמש שעות נהיגה בשביל ארבע-חמש שעות שם. ההחלטה שלכם.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "רכב ליום", detail: "לא הוזמן. או השכרה נפרדת ליום אחד ב-Kyoto, או לאסוף את ה-Corolla ב-8.10 במקום ב-9.10 ולהחזיק אותה ללילה, מה שאומר למצוא חניה ב-Gion." },
        { t: { k: "seq" }, name: "Amanohashidate", detail: "בערך שעה וחמישים מ-Kyoto ב-Kyoto Jūkan Expressway, ו-20 עד 25 דקות לפני Ine. לשון החול עם האורנים היא העצירה הטבעית בדרך.", place: "Amanohashidate" },
        { t: { k: "seq" }, name: "Ine", detail: "חונים בתחנת הדרך Funaya no Sato שמעל המפרץ: חניון גדול בחינם, מרפסת תצפית ומסעדות. זה כפר שחי ועובד, ורוב בתי הסירות הם בתים פרטיים.", place: "道の駅 舟屋の里伊根" },
        { t: { k: "seq" }, name: "המפרץ בסירה", detail: "סירות התיירים הגדולות עושות סיבוב במפרץ ב-25 דקות, ¥1,200, כל 15 עד 30 דקות, מ-9:00 עד 16:00.", place: "Ine Bay Sightseeing Boat" },
        { t: { k: "approx", v: "16:00" }, name: "חזרה ל-Kyoto", detail: "בערך שעתיים ורבע עד שעתיים וחצי." }
      ],
      places: []
    },
    {
      id: "k-biwa",
      title: "ברכב לחוף הרחוק של אגם Biwa",
      when: "יום רכב שהוא לא מרתון",
      meta: [{ icon: "car", text: "ברכב · כשעה ו-35 דק׳ לכיוון" }, { icon: "clock", text: "רגוע" }],
      body: "שדרת המטסקויה ב-Takashima, שנשמרה עם ההערה שצריך לנסוע לטייל באזור הזה, ובדרך צפונה בחוף המערבי גם שער הטוריי שבאגם של Shirahige Shrine. ב-9.10 חוצים את הקצה הדרומי של האגם. זה הקצה השני.",
      steps: [
        { t: { k: "part", v: "morning" }, name: "רכב ליום", detail: "לא הוזמן. אותן שתי אפשרויות כמו ביום של Ine." },
        { t: { k: "seq" }, name: "Shirahige Shrine", detail: "בערך 65 דקות מ-Kyoto. מצלמים את הטוריי שבאגם ממרפסת התצפית שליד משרד המקדש, ואף פעם לא חוצים בשבילו את כביש 161. מישהו נהרג שם ככה ב-2021.", place: "Shirahige Shrine" },
        { t: { k: "seq" }, name: "שדרת המטסקויה", detail: "עוד חצי שעה צפונה. בתחילת אוקטובר העצים עוד ירוקים.", saved: "p-metasequoia" },
        { t: { k: "part", v: "afternoon" }, name: "חזרה דרומה לאורך האגם", detail: "בערך שעה ו-35 דקות ל-Kyoto." }
      ],
      places: ["p-metasequoia"]
    },
    {
      id: "k-minoh",
      title: "הקניון של Minoh ו-Katsuō-ji",
      when: "יום חול, עם התחלה מוקדמת",
      meta: [{ icon: "train", text: "כשעה ו-20 דק׳ לכיוון" }, { icon: "clock", text: "רוב היום" }],
      body: "כבר נחקר, עוד מהתקופה שהבסיס היה ב-Osaka: מקדש הדרומה שמעל Minoh, מונית למפלים, ואז 2.8 ק״מ ברגל במורד הקניון. מ-Kyoto הנסיעה לשם ארוכה יותר.",
      steps: [
        { t: { k: "approx", v: "07:30" }, name: "מ-Umekōji ל-Minoh-Kayano", detail: "JR ל-Shin-Osaka, ומשם קו Midōsuji ממשיך ישר עד Minoh-Kayano. בערך שעה ו-20.", place: "Minoh-Kayano Station" },
        { t: { k: "exact", v: "09:00" }, name: "אוטובוס 30 ל-Katsuō-ji", detail: "האוטובוס הראשון בימי חול, ואחריו כל 30 דקות עד 15:00. בערך 20 דקות במעלה ההר.", place: "Minoh-Kayano Station" },
        { t: { k: "approx", v: "09:20" }, name: "Katsuō-ji", detail: "מקדש הדרומה, פתוח 08:00-17:00. כל העניין הוא להגיע מוקדם. אחר כך יש תורים לתמונות עם הדרומות.", saved: "p-katsuoji" },
        { t: { k: "seq" }, name: "מונית לחניון Dainichi", detail: "מוניות מחכות בתחנת האוטובוס של המקדש, ובצד של המפלים אין בכלל. בגלל זה מתחילים במקדש. בערך חמש דקות, ובסביבות ¥1,300 לפי מבקר אחד מאוקטובר 2025.", place: "Dainichi Parking Lot, Minoh" },
        { t: { k: "seq" }, name: "Minoh Falls", detail: "עשר עד חמש עשרה דקות ברגל, בירידה מהחניון.", saved: "p-minoh" },
        { t: { k: "seq" }, name: "במורד הקניון", detail: "בערך 2.8 ק״מ לצד הנהר, כל הדרך בירידה עד תחנת Hankyū Minoh. בתחילת אוקטובר ירוק. השלכת פה היא בסוף נובמבר.", place: "Minoh Station" },
        { t: { k: "part", v: "afternoon" }, name: "חזרה ל-Kyoto", detail: "Hankyū מ-Minoh לכיוון Umeda, ומשם חזרה ל-Kyoto." }
      ],
      places: ["p-katsuoji", "p-minoh"]
    }
  ],
  tokyo: [
    {
      id: "c-yanaka", star: true,
      title: "Yanaka → Ueno",
      when: "באמצע השבוע, מהבוקר עד הערב",
      body: "Nezu ו-Yanaka, דרך הסמטאות האחוריות ובית הקברות, לתוך Ueno Park, ואז Ueno עצמה. ההליכה ביניהם היא כל העניין, אז לא מחליפים אותה ברכבת. לתזמן את היום כך שייגמר ב-Ameyoko וב-Okachimachi: איזקאיות זולות, יקיטורי, אוכל רחוב ורעש מקומי. Sensō-ji בין 07:00 ל-08:00 יכול לפתוח את היום אם זה מסתדר, אבל רק בשעות האלה."
    },
    {
      id: "c-shimokita", star: true,
      title: "Shimokitazawa",
      when: "מאחר הצהריים אל הערב",
      body: "וינטג׳, תקליטים ומועדוני הופעות, ופסטיבל הקארי רץ כל הזמן שאנחנו שם, אז צהריים מאוחרים זה קארי. הערב נגמר באחת משתי האיזקאיות ששמרנו: Ittosei, יקיטורי על פחמים וירקות, שלוקחת הזמנות אונליין וסגורה בימי שני, או Genki Club, בר רוק ותיק מלא תקליטים ושוצ׳ו נדיר, זול יותר ופתוח מ-18:00."
    },
    {
      id: "c-west", star: true,
      title: "Harajuku → Shibuya",
      when: "יום מלא",
      body: "Yoyogi-Uehara לבוקר שקט וקפה, אחר כך Harajuku, Cat Street ו-Omotesandō לשופינג, וסוגרים ב-Shibuya בערב. לא להדביק לזה את Daikanyama ו-Nakameguro. הם אזור בפני עצמו."
    },
    {
      id: "c-meguro",
      title: "Daikanyama → Nakameguro",
      when: "מאחר הצהריים אל הערב",
      body: "T-Site והבוטיקים ב-Daikanyama, ואז למטה לאורך נהר Meguro אל Nakameguro. Ebisu אם יש חשק לעוד."
    },
    {
      id: "c-local",
      title: "Nakano → Kōenji",
      when: "טוב לגשם, וטוב לערב של הופעה",
      body: "Nakano Broadway רטרו וכולו מקורה. Kōenji זה חנויות יד שנייה, תקליטים, ארקייד Pal וברים. מועדוני ההופעות פה הם הסיבה להשאיר ערב פתוח."
    },
    {
      id: "c-central", star: true,
      title: "בשביל נועה: Ginza",
      when: "שבת 17.10 או יום א׳ 18.10, מ-12:00",
      body: "בסופי שבוע Chūō-dōri, מ-Ginza 1-chōme עד 8-chōme, סגור לרכבים מ-12:00 עד 17:00. ואחר כך כל מה שנועה אספה מטיקטוק ומאינסטגרם, ציד קונביני וחנויות הכלבו. בכוונה בלי מבנה. המשטרה יכולה לבטל את הרחוב בלי רכבים במזג אוויר גרוע, אבל בזכות הכלבו זה עדיין יום גשם טוב."
    },
    {
      id: "c-kagurazaka",
      title: "מהמלון ל-Kagurazaka",
      when: "ערב של הגעה, או ערב פנוי",
      body: "מ-Iidabashi אל Kagurazaka: הרחוב הראשי, הסמטאות המרוצפות שבצדדים, Akagi-jinja, ואז ביסטרו או איזקאיה. עשר דקות מהחדר."
    }
  ]
};

export const dayById = Object.fromEntries(days.map(d => [d.id, d]));
export const dayByDate = Object.fromEntries(days.map(d => [d.date, d]));
export const daysFor = destId => days.filter(d => d.dest === destId);
