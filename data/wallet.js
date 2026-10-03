/* Things you might need to pull up while standing at a counter.
   `ref` is deliberately null where we genuinely do not have the confirmation
   number — the item view hides the field rather than showing a blank label.
   Fill these in as the confirmation emails arrive.

   `where` stays in English or Japanese: it is what "Open in Maps" searches. */

export const wallet = [
  /* ---------- stays ---------- */
  {
    id: "w-potel",
    kind: "stay",
    title: "Umekoji Potel Kyoto",
    where: "Umekōji, Kyoto",
    from: "2026-10-04",
    to: "2026-10-07",
    detail: "3 לילות · Garden Room, מיטה זוגית · צ׳ק-אין מ-15:00",
    ref: null, refPrivate: true,
    status: "confirmed",
    price: "שולם מראש אונליין. את מס הלינה המקומי משלמים במלון.",
    notes: [
      "הכתובת: 15 Kankijichō, Shimogyō-ku, צמוד ל-Umekōji Park. Kyoto Station במרחק 19 דקות הליכה (1.4 ק״מ). התחנה Umekōji-Kyōtonishi, תחנה אחת מ-Kyoto בקו JR Sagano, קרובה יותר.",
      "צ׳ק-אין מ-15:00 עד חצות, ואין צ׳ק-אין אחרי זה. צ׳ק-אאוט עד 11:00.",
      "ארוחת בוקר לא כלולה. הבופה עולה בערך ¥4,500 לאחד, אם בא לנו.",
      "דרכונים בצ׳ק-אין: לפי החוק ביפן המלון רושם ומצלם דרכון של כל אורח זר."
    ]
  },
  {
    id: "w-miru",
    kind: "stay",
    title: "MIRU Kyoto Gion",
    where: "Gion, Kyoto",
    from: "2026-10-07",
    to: "2026-10-09",
    detail: "2 לילות · צ׳ק-אין מ-15:00",
    ref: null,
    status: "confirmed",
    alert: "MIRU לא הסכימו לחבר את שתי ההזמנות. בבוקר של ה-8.10 עושים צ׳ק-אאוט וצ׳ק-אין מחדש.",
    notes: [
      "שתי הזמנות נפרדות: 7-8.10 חדר Deluxe, 8-9.10 חדר Superior. הם לא מאחדים אותן ולא שומרים את אותו חדר.",
      "את המזוודות הם מעבירים בשבילנו, אבל צ׳ק-אאוט וצ׳ק-אין מחדש עושים בבוקר של ה-8.10. אז אורזים בערב של ה-7.10, לא בדרך החוצה.",
      "ב-7.10, מ-Umekoji Potel עד Gion זה הצד השני של העיר. מונית עם המזוודות היא הדרך הפשוטה."
    ]
  },
  {
    id: "w-fairfield",
    kind: "stay",
    title: "Fairfield by Marriott Gifu Gujō",
    where: "Gujō-Yamato",
    from: "2026-10-09",
    to: "2026-10-10",
    detail: "לילה אחד",
    ref: null,
    status: "confirmed",
    notes: ["בערך 15 עד 20 דקות מהעיר העתיקה. אז את אחר הצהריים מבלים בעיר, וחוזרים לפה לארוחת ערב ולישון."]
  },
  {
    id: "w-jujo",
    kind: "stay",
    title: "Matsumoto Jujo",
    where: "Matsumoto",
    from: "2026-10-10",
    to: "2026-10-13",
    detail: "3 לילות · אמבט פתוח",
    ref: null,
    status: "confirmed",
    price: "¥207,900",
    notes: [
      "מדרגות הביטול מהמלון (נכון ל-15.8): מ-19.9 זה 10% (¥20,790). מ-4.10 זה 30% (¥62,370). מ-7.10 זה 50% (¥103,950). מ-9.10 זה 100% (¥207,900).",
      "מה קורה ב-no-show לא נכתב במה שהם שלחו. כנראה 100%, אבל לא להניח.",
      "הלינה הכי יקרה בטיול."
    ]
  },
  {
    id: "w-editseven",
    kind: "stay",
    title: "edit×seven Fuji Gotemba",
    where: "Gotemba",
    from: "2026-10-13",
    to: "2026-10-15",
    detail: "שני לילות",
    ref: null,
    status: "confirmed",
    notes: ["חניה בחינם, בערך 50 מקומות: מגרש ליד הכניסה וחניון קומות מעבר לכביש."]
  },
  {
    id: "w-edmont",
    kind: "stay",
    title: "Hotel Metropolitan Edmont",
    where: "Iidabashi, Tokyo",
    from: "2026-10-15",
    to: "2026-10-20",
    detail: "5 לילות",
    ref: null,
    status: "confirmed",
    notes: ["חמש דקות הליכה מהיציאה המזרחית של JR Iidabashi, שתיים מיציאה A5 של Tokyo Metro."]
  },

  /* ---------- cars ---------- */
  {
    id: "w-corolla",
    kind: "car",
    title: "Corolla Sport Hybrid",
    where: "Toyota Rent a Car · Sanjo Keihan-Kita, Kyoto",
    from: "2026-10-09T09:30:00+09:00",
    to: "2026-10-13T14:30:00+09:00",
    detail: "אוספים ב-Kyoto ב-09:30 · מחזירים ב-Gotemba ב-14:30",
    ref: null, refPrivate: true,
    status: "confirmed",
    notes: [
      "כולל NOC וביטול השתתפות עצמית בתאונה.",
      "ההחזרה ב-13.10 קבועה ל-14:30, והמסלול דרך האגמים המערביים מגיע ל-Gotemba בסביבות 16:15. להודיע לסניף ב-Gotemba (0550-81-0100) שנאחר בשעה-שעתיים. האיסוף של ה-Yaris הוא אותה פגישה.",
      "לוודא שכרטיס ה-ETC ברכב לפני שעוזבים את הדלפק.",
      "להביא לדלפק את הרישיון הבינלאומי של 2026, את הרישיון הישראלי ואת הדרכון."
    ]
  },
  {
    id: "w-yaris",
    kind: "car",
    title: "GR Yaris",
    where: "Gotemba",
    from: "2026-10-13T14:30:00+09:00",
    to: "2026-10-15T14:30:00+09:00",
    detail: "הלוך-חזור מ-Gotemba · יומיים",
    ref: null, refPrivate: true,
    status: "confirmed",
    notes: [
      "ההחלפה קורית בביקור אחד: ה-Corolla חוזרת, ה-Yaris יוצא.",
      "תא מטען קטן, אבל המזוודות נכנסות עם המושבים האחוריים.",
      "נוסע על דלק high-octane. למלא לפני שמחזירים.", "מחזירים בסביבות 12:00 ב-15.10, לפני ההזמנה של 14:30, בשביל הרכבת של 12:48.",
      "האיסוף קבוע ל-14:30 ב-13.10 ואנחנו מגיעים בסביבות 16:15. אותה שיחה לסניף ב-Gotemba (0550-81-0100) מכסה גם את זה.", "גם לאיסוף הזה להביא רישיון בינלאומי, רישיון ישראלי ודרכון.",
      "החניה ב-edit×seven בחינם."
    ]
  },
  {
    id: "w-etc",
    kind: "car",
    title: "כרטיס ETC לכבישי אגרה",
    detail: "הוזמן עם שני הרכבים",
    ref: null,
    status: "confirmed",
    notes: ["מופיע כתוספת בשני האישורים של Toyota.", "לוודא שהוא ברכב לפני שעוזבים את הדלפק. בלעדיו כל יציאה מכביש מהיר היא תור של מזומן."]
  },

  /* ---------- flights ---------- */
  {
    id: "w-out",
    kind: "flight",
    title: "TLV → KIX",
    where: "Ben Gurion",
    from: "2026-10-03T15:05:00+03:00",
    to: "2026-10-04T11:40:00+09:00",
    detail: "ממריאים ב-3.10 ב-15:05 · נוחתים ב-KIX ב-4.10 ב-11:40",
    ref: null,
    status: "confirmed",
    notes: ["Etihad. מספרי הטיסות והמושבים נמצאים במייל ההזמנה. בכוונה לא באתר הזה, כי הוא פומבי."]
  },
  {
    id: "w-home",
    kind: "flight",
    title: "NRT → TLV",
    where: "Narita",
    from: "2026-10-20T18:00:00+09:00",
    detail: "ממריאים ב-20.10 ב-18:00 · יוצאים מ-Tokyo בסביבות 14:30",
    ref: null,
    status: "confirmed",
    notes: [
      "סכינים רק במזוודה שנשלחת לבטן המטוס, אף פעם לא בתיק יד.",
      "מספרי הטיסות נמצאים במייל ההזמנה. בכוונה לא באתר הזה, כי הוא פומבי."
    ]
  },

  /* ---------- logistics ---------- */
  {
    id: "w-romancecar", kind: "train", title: "Romancecar · Gotemba → Shinjuku",
    where: "Gotemba Station",
    from: "2026-10-15T12:48:00+09:00", to: "2026-10-15T14:25:00+09:00",
    detail: "הרכבת Mt. Fuji 4 · יוצאת 12:48, מגיעה 14:25 · קרון 5, מושבים 6C ו-6D",
    ref: null, refPrivate: true, status: "confirmed",
    price: "¥3,120 לשניים. זו רק התוספת של ה-limited express.",
    notes: [
      "בלי כרטיס נייר: הקנייה בטלפון היא הכרטיס של ה-limited express.",
      "עדיין צריך: שני כרטיסי נסיעה רגילים מנייר, מ-Gotemba ל-Odakyu Shinjuku, ¥1,310 לאחד, מהקופה או מהמכונה של JR ב-Gotemba. כרטיסי IC לא עובדים במעבר בין JR ל-Odakyu.",
      "ברכבת הזאת אין אזור למזוודות. הן עולות למדף שמעל, או על הרצפה מול המושב אם השורה שלפנינו לא נשענת אחורה.",
      "Odakyu Sightseeing Service Center: 03-5909-0211 (מחוץ ליפן עם קידומת 81), 8:00-16:00."
    ]
  },
  {
    id: "w-ichika", kind: "meal", title: "Ibushi-dori Ichika · Kyoto",
    where: "京都府京都市中京区山本町410",
    from: "2026-10-07",
    detail: "השעה עוד לא סגורה · 2 סועדים · רק מקומות",
    ref: null, refPrivate: true, status: "confirmed",
    price: "רק מקומות. מזמינים במקום, ואין דמי שולחן.",
    notes: [
      "טלפון: 075-606-4364.",
      "ארבע דקות מתחנת Kyoto Shiyakusho-mae בקו Tōzai.",
      "לנועה: הכול עוף, ושום דבר בתפריט לא מסומן כחזיר. על שניים שווה לשאול: הוונטונים, והאומלט עם רוטב בשר טחון. לא כתוב שם איזה בשר."
    ]
  },
  {
    id: "w-hafuu", kind: "meal", title: "Niku Senka Hafuu · Kyoto",
    where: "京都府京都市中京区麩屋町通夷川上ル笹屋町471-1",
    from: "2026-10-08T19:30:00+09:00",
    detail: "19:30 · 2 סועדים · הסניף הראשי",
    ref: null, refPrivate: true, status: "confirmed",
    notes: [
      "טלפון: 075-257-1581.",
      "הסניף הראשי ב-Fuyachō-dōri, דרומית לארמון הקיסרי. לא הסניף של Shōgoin.",
      "לנועה: מקום של בקר, אבל את התפריט לא בדקנו לחזיר. לשאול לפני שמזמינים."
    ]
  },
  {
    id: "w-daikokuya", kind: "meal", title: "Daikokuya · Gujō",
    where: "258-1 Tsurugi, Yamato-cho, Gujo, Gifu",
    from: "2026-10-09T20:00:00+09:00",
    detail: "20:00 · 2 סועדים · חדר טטאמי",
    ref: null, refPrivate: true, status: "confirmed",
    price: "רק מקומות. מזמינים במקום.",
    notes: [
      "טלפון: 0575-88-2277.",
      "שבע דקות הליכה מה-Fairfield, בערך 500 מ׳, אז הרכב נשאר במלון.",
      "לנועה: תפריט יקיניקו שלא נבדק לחזיר. לשאול לפני שמזמינים."
    ]
  },
  {
    id: "w-minato", kind: "meal", title: "MINATO · Matsumoto",
    where: "長野県松本市中央2-5-28",
    from: "2026-10-10T20:00:00+09:00",
    detail: "20:00 · 2 סועדים · שולחן לשעתיים",
    ref: null, refPrivate: true, status: "confirmed",
    price: "רק מקומות. מזמינים במקום.",
    notes: [
      "טלפון: 0263-32-2939.",
      "הוזמן דרך Hot Pepper. שינויים וביטולים דרך ה-My Page שלהם עד חצות שבין ה-9.10 ל-10.10. אחרי זה מתקשרים למסעדה.",
      "לנועה: לוותר על ה-pork ginger steak ועל ה-tonpeiyaki, ולשאול על האוקונומיאקי. העוף, הבקר ופירות הים בסדר."
    ]
  },
  {
    id: "w-pizzamatsuri", kind: "meal", title: "PIZZA MATSURI · Matsumoto",
    where: "長野県松本市中央1-5-2",
    from: "2026-10-11T20:00:00+09:00",
    detail: "20:00 · 2 סועדים",
    ref: null, refPrivate: true, status: "confirmed",
    price: "מזמינים במקום.",
    notes: [
      "טלפון: 0263-50-7363. שינויים וביטולים רק בטלפון.",
      "שתי דקות מיציאת הטירה של Matsumoto Station. הזמנות אחרונות ב-21:30.",
      "לנועה: המרגריטה בטוחה, והפיצה עם הפרושוטו לא. על השאר לשאול."
    ]
  },
  {
    id: "w-t", kind: "meal", title: "T · Nakameguro",
    where: "東京都目黒区上目黒2-37-12 コンフォート中目黒 1F",
    from: "2026-10-19T20:30:00+09:00",
    detail: "20:30 · 2 סועדים · שולחן לשעתיים וחצי",
    ref: null, refPrivate: true, status: "confirmed",
    price: "קורס T Genesis · ¥23,000 לאדם, כולל מס",
    notes: [
      "טלפון: 03-6303-0849.",
      "זה קורס קבוע, אז שווה להגיד להם מראש שאחד מאיתנו לא אוכל חזיר."
    ]
  }
];

export const walletById = Object.fromEntries(wallet.map(w => [w.id, w]));
