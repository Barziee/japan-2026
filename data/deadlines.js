/* Things that expire.

   Most of the planning is flexible; this is the part that is not. Each entry
   is a date something must happen by, and what goes wrong if it does not.
   Ordered by date, which is the only order that matters here.

   `at` is the exact moment, for the ones that happen at a clock time: those
   also show on Today from a day and a half before until a few hours after.
   `when` says that moment in words, and `link` is where to go to act. */

export const deadlines = [
  {
    id: "dl-matsumoto",
    on: "2026-09-10",
    title: "לסגור את שלוש ארוחות הערב ב-Matsumoto",
    urgent: true,
    body: "חלון ההזמנות ל-10-12.10 נפתח בסביבות 10-12.9. לשבת על זה סביב ה-8 ולסגור את שלושתן. זה סופ״ש ארוך וגם פסטיבל הסובה, אז מי שמחכה אוכל איפה שנשאר מקום.",
    also: "הכי קל דרך Matsumoto Jujo עצמו. זה ריוקאן, והצוות מזמין כל הזמן מקומות שלא לוקחים הזמנות אונליין. לשלוח להם מייל מראש עם שלושת הערבים."
  },
  {
    id: "dl-jujo",
    on: "2026-09-18",
    title: "היום האחרון לבטל את Matsumoto Jujo בחינם",
    urgent: true,
    body: "¥207,900. מ-19.9 זה 10%, מ-4.10 זה 30%, מ-7.10 זה 50%, ומ-9.10 הכול.",
    also: "טוב לדעת: תחזית אמיתית ל-10.10 מופיעה רק בסביבות 24.9, אז הדדליין הזה עובר לפני שמזג האוויר יכול להגיד משהו. Matsumoto היא בסיס קבוע ולא שאלה פתוחה, אבל אם היה שינוי על הפרק, ה-18 הוא היום."
  },
  {
    id: "dl-admin",
    on: "2026-09-25",
    title: "ביטוח, eSIM, מפות אופליין",
    body: "ביטוח נסיעות שמכסה עיכובים ונהיגה. eSIM. מפות אופליין ל-Kansai, Kiso ו-Nagano, Fuji ו-Tokyo. ועל הדרך לחפש את ה-mapcodes של Gujō, Matsumoto ו-Gotemba."
  },
  {
    id: "dl-final",
    on: "2026-09-28",
    title: "הבדיקות של שבוע לפני",
    body: "תחזית השלכת ל-Matsumoto ולאלפים (JMA או tenki.jp). אם ה-Utsukushigahara Skyline וכבישי ההרים פתוחים. טייפונים."
  },
  {
    id: "dl-hikiniku-online",
    on: "2026-09-30",
    at: "2026-10-01T00:00:00+09:00",
    when: "יום ד׳ 30.9 · 18:00 בישראל, חצות ביפן",
    title: "Hikiniku to Come: נפתחת הרשימה החינמית ליום ה׳ 8.10",
    urgent: true,
    body: "כל הקודם זוכה, ורק על המקומות שנשארו אחרי כרטיסי העדיפות של ¥1,000. לפתוח את TableCheck כמה דקות לפני, עם שם, טלפון ומייל מוכנים. את הארוחה, ¥1,980 לאחד, משלמים בזמן ההזמנה.",
    also: "הרשימות של 4-6.10 כבר נפתחו, אז שווה לבדוק גם אותן. 7.10 זה יום רביעי, והם סגורים. ביטול עולה ¥500 לארוחה משבוע לפני, ואת המחיר המלא באותו יום. אם יש רק מקומות בודדים: מישהו ברדיט הזמין שני בודדים והושיבו אותם יחד. ביטולים של אותו יום מתפרסמים ב-X, בחשבון hikinikutocomek.",
    link: { label: "לעמוד ההזמנות", url: "https://www.tablecheck.com/en/shops/hikinikutocome-kyoto/reserve" }
  },
  {
    id: "dl-saihoji",
    on: "2026-10-01",
    title: "Saihō-ji, אם רוצים אותו ב-5.10",
    body: "ההזמנות ליום מסוים נסגרות ב-23:59 שעון יפן בלילה שלפני, אבל ביטול בחינם רק עד 4 ימים לפני. ל-5.10, מי שמזמין עד היום עוד יכול להתחרט בלי לשלם.",
    also: "intosaihoji.com. עד שני אנשים בהזמנה, רק בכרטיס אשראי."
  }
];

/* Verifications that only make sense once we are there. */
export const inTrip = [
  { on: "2026-10-04", title: "ערב לפני Osaka: Tokito פתוח?", body: "הם מפרסמים ימי סגירה לא קבועים בסטוריז באינסטגרם (tokito_karahori). אם סגור, יום Osaka זז." },
  { on: "2026-10-05", title: "ערב לפני Kibune", body: "לבדוק תחזית, ואת לוח הזמנים של אוטובוס 33 לאוקטובר, מ-Kibune חזרה ל-Kibuneguchi." },
  { on: "2026-10-07", title: "בערב: Hikiniku, תור או לא", body: "אם עדיין רוצים ואין הזמנה, להיות ב-Tatsumi-bashi בערך ב-07:15 זה מה שנותן סיכוי אמיתי לשולחן. ביטולים של אותו יום מתפרסמים ב-X, בחשבון hikinikutocomek." },
  { on: "2026-10-10", title: "בערב: בוחרים מה עושים ב-11.10", body: "לבחור את הטיול לפי התחזית, ולוודא את ההזמנה למסעדה של אותו ערב." },
  { on: "2026-10-12", title: "בערב: לתכנן את אחר הצהריים של ה-13.10", body: "כיסוי עננים לסיבוב הראשון סביב ה-Fuji. אם Toyota Gotemba עוד לא יודעים, להגיד להם שנאחר בשעה-שעתיים להחלפה של 14:30: 0550-81-0100." },
  { on: "2026-10-13", title: "בערב: מחליטים על ה-14.10", body: "West Izu מחליטים ערב לפני, לא בבוקר. היום מתחיל ב-07:45 ונעול על שקיעה ב-17:16. לבדוק באינסטגרם ש-HODOHODO פתוח, חסימות כבישים ב-Izu בטלפון 0558-76-5718, ואת התחזית לחוף המערבי. בערפל אין טעם לעלות למעבר: עוברים ל-Shuzenji או ל-Hakone.", urgent: true },
  { on: "2026-10-14", title: "בערב: הבוקר האחרון מול ה-Fuji", body: "כיסוי עננים ל-15.10, ולסדר takkyubin ל-Tokyo אם שולחים מזוודות קדימה." }
];
