/* Checklists and climate. Both live in More, not in the main navigation.

   Tick state is stored per item id in localStorage — it is the one place in
   the app where marking something off is genuinely useful, because these are
   real tasks with deadlines rather than an itinerary to be audited. */

export const lists = [
  {
    id: "l-before",
    title: "לפני יפן",
    groups: [
      {
        title: "מסמכים",
        items: [
          { id: "c-idp", name: "רישיון נהיגה בינלאומי · הונפק ב-2026", note: "חייב להיות הפנקס של ז׳נבה 1949. בלי זה אין רכב.", done: true },
          { id: "c-vjw", name: "Visit Japan Web", note: "שני פרופילים. לשמור את שני קודי ה-QR אופליין.", done: true },
          { id: "c-passports", name: "דרכונים בתוקף ל-6 חודשים ומעלה", note: "", done: true },
          { id: "c-insurance", name: "ביטוח נסיעות", note: "שיכסה עיכובים ונהיגה." }
        ]
      },
      {
        title: "טכנולוגיה וכסף",
        items: [
          { id: "c-esim", name: "eSIM וכרטיס IC", note: "Suica או ICOCA." },
          { id: "c-card", name: "כרטיס בלי עמלת המרה", note: "Revolut או Wise." },
          { id: "c-cash", name: "ין במזומן", note: "Hinode Udon והמקומות הקטנים לוקחים רק מזומן." },
          { id: "c-offlinemaps", name: "מפות אופליין", note: "Kansai, Kiso ו-Nagano, Fuji, Tokyo." },
          { id: "c-cable", name: "כבל USB-A ל-USB-C בשביל CarPlay", note: "כבל דאטה, לא כזה שרק מטעין." }
        ]
      },
      {
        title: "אריזה",
        items: [
          { id: "c-layers", name: "שכבות ל-7 עד 23 מעלות", note: "נוחתים ב-24 מעלות, ותוך עשרה ימים עומדים בגובה 2,000 מ׳." },
          { id: "c-shoes", name: "נעלי הליכה אמיתיות", note: "Kurama זה שביל הררי, וב-Atera וב-Kamikōchi הולכים שעות." },
          { id: "c-adapters", name: "שניים-שלושה מתאמי Type A", note: "ועוד מפצל USB." },
          { id: "c-meds", name: "תרופות לבטן", note: "לופרמיד, משהו נגד בחילה, פרוביוטיקה." }
        ]
      }
    ]
  },
  {
    id: "l-buy",
    title: "לקנות ביפן",
    groups: [
      {
        title: "שווה לסחוב הביתה",
        items: [
          { id: "c-knife", name: "סכין יפנית", note: "Tower Knives ביום ב-Osaka, או Seki ב-10.10. בדרך הביתה רק במזוודה שנשלחת לבטן המטוס." },
          { id: "c-ceramics", name: "קרמיקה", note: "Nakamachi ב-Matsumoto, 10-13.10." }
        ]
      }
    ]
  }
];

/* October climate averages for each base. This is climate, not forecast —
   it exists to support packing and weather-dependent choices, nothing more. */
export const climate = {
  osaka:     { hi: 23, lo: 15, rain: 19, sky: "clear", text: "בהיר, הלחות יורדת" },
  kyoto:     { hi: 22, lo: 13, rain: 19, sky: "clear", text: "בהיר, עם ענן בבוקר" },
  gujo:      { hi: 21, lo: 12, rain: 36, sky: "mixed", text: "מעונן חלקית, עמק לח" },
  matsumoto: { hi: 18, lo: 8,  rain: 48, sky: "mixed", text: "ימים בהירים, לילות קרים" },
  fuji:      { hi: 21, lo: 13, rain: 39, sky: "mixed", text: "ההר מתגלה בעיקר בבקרים" },
  tokyo:     { hi: 23, lo: 16, rain: 35, sky: "rain",  text: "מעונן, לצפות ליום גשום אחד" }
};

export const CLIMATE_NOTE = "ממוצע של אוקטובר · זה אקלים, לא תחזית";

/* Days whose shape is decided on the forecast the night before. */
export const weatherDays = [
  { day: "d11", title: "יום הטבע", options: "Kamikōchi · Atera Gorge · Senjōjiki · Utsukushigahara · Azumino" },
  { day: "d14", title: "יום ה-Fuji", options: "רואד טריפ ב-West Izu · אגמים · Hakone" }
];

export const daylight = [
  { title: "שקיעה ב-Gujō · 9.10", body: "ב-17:26. מגיעים בסביבות 16:30, אז יש בערך שעה של אור." },
  { title: "שקיעה באזור ה-Fuji", body: "בסביבות 17:00. ההר מתגלה בעיקר בבקרים." },
  { title: "שקיעה ב-Nishina Pass · 14.10", body: "17:14. המטרה להגיע בין 16:15 ל-16:30." }
];

export const foliage = [
  { title: "Kamikōchi · בערך 1,500 מ׳", status: "on time", body: "השיא באמצע אוקטובר, אז אנחנו בדיוק בחלון." },
  { title: "Minoh ומזרח Kyoto", status: "too early", body: "השלכת ב-Kyoto היא באמצע נובמבר. כשאנחנו שם זה עוד בעיקר ירוק." }
];
