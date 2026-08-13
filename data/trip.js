/* Trip data for the Japan 2026 app. Plain script (not a module) so it works from
   file:// as well as Pages — it hangs one global `T` off window.

   `k`  = key into route.json coords -> gets a numbered map pin AND a precise
          Google Maps route link.
   `q`  = free-text place query, used for the route link when a stop has no pin
          (small shops and paths that aren't in OpenStreetMap).
   Every stop must carry one or the other, so every row is navigable.        */
var T = (function(){

var I = {
  map:"M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Zm0 0v13m6 2.5v-13",
  cloud:"M7 18a4 4 0 0 1 .6-7.96A5.5 5.5 0 0 1 18 11a3.5 3.5 0 0 1 0 7H7Z",
  check:"M8.5 12.5 11 15l4.5-4.5M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z",
  flag:"M6 21V4m0 0 12 3.2L6 10.4",
  torii:"M4 7h16M6.5 7v12M17.5 7v12M5 4.2h14",
  bowl:"M4 11h16a8 8 0 0 1-16 0ZM9 4c-.8.8-.8 1.7 0 2.5M13 3.4c-1 1-1 2.1 0 3.1M4 21h16",
  water:"M3 8c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0M3 13c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0M3 18c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0",
  train:"M7 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm-2 6h14M8.5 20 6.5 22m9-2 2 2M9 13h.01M15 13h.01",
  car:"M4.5 13h15M6.5 13l1.2-4a2 2 0 0 1 1.9-1.4h4.8a2 2 0 0 1 1.9 1.4l1.2 4v4.5h-2.5V16h-6v1.5H6.5V13Z",
  bus:"M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H5V6Zm0 9h14v2.5a1 1 0 0 1-1 1h-1V21H7v-2.5H6a1 1 0 0 1-1-1V15ZM5 9.5h14M9 12.2h.01M15 12.2h.01",
  bed:"M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 18v2m18-2v2M6 11V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
  plane:"M21.5 12 3 19l3.2-7L3 5l18.5 7Z",
  mountain:"M2.5 19.5 9 9l3.6 5.4L14.8 11l6.7 8.5H2.5Z",
  shop:"M4.5 9.5h15l-1 10h-13l-1-10Zm4 0v-2a3.5 3.5 0 0 1 7 0v2",
  cafe:"M4 8h11v5.5A4.5 4.5 0 0 1 10.5 18h-2A4.5 4.5 0 0 1 4 13.5V8Zm11 1h2.2a2.6 2.6 0 0 1 0 5.2H15M4.5 21h11",
  walk:"M12.5 4.6a1.4 1.4 0 1 0 0-.01M10 21l1.8-5.6-2-2.2 1-4.2 3.2 2.4 2.2.8M9.5 21l1.6-4",
  pin:"M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z",
  info:"M12 16.5v-5m0-3.3v.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  star:"m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.6Z",
  alert:"M12 8v5m0 3.5v.01M10.3 3.9 1.8 18.2A2 2 0 0 0 3.5 21h17a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z",
  town:"M4 20V9.5L9 6.5l5 3V20M4 20h16M14 20v-8h6v8M7 12h.01M7 16h.01M17 15.5h.01",
  bath:"M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Zm3-1V6a2 2 0 0 1 4 0M9 3.5v.01"
};

var C = { osaka:"#B85428", kyoto:"#7A4E86", gujo:"#2E7D8A", matsumoto:"#274B8C", fuji:"#4A6FA5", tokyo:"#A03E5C" };

var DAYS = [
{d:4,dow:"א׳",base:"osaka",t:"נחיתה ויום רך",items:[
  {c:"air",n:"נחיתה ב-KIX",s:"הגירה, מזוודות, רכבת או לימוזין לעיר",t:"11:40",q:"Kansai International Airport"},
  {c:"stay",k:"osaka",n:"Meander Osaka · צ׳ק-אין",s:"מורידים תיקים ב-Namba",leg:{mode:"rail",hrs:0.85,txt:"KIX → Namba"}},
  {c:"town",n:"ערב · Ura-Namba / Hōzenji Yokochō",s:"סמטאות איזקאיה, ארוחה קלה, מוקדם לישון",q:"Hozenji Yokocho Osaka"}],
  note:"יום הגעה — בלי סייטסיאינג גדול ובלי שום דבר עם שעה קבועה."},

{d:5,dow:"ב׳",base:"osaka",t:"מינו ביום, שכונות בערב",items:[
  {c:"nature",k:"minoh",n:"פארק ומפל Minoh",s:"~30 דק׳ ברכבת Hankyū מ-Umeda · הליכת נחל קלה ומרוצפת, ~2.8 ק״מ לכל כיוון",t:"בוקר"},
  {c:"sight",n:"Katsuo-ji",s:"מקדש הדארומה — אוטובוס או מונית מלמעלה",q:"Katsuoji Temple Minoh"},
  {c:"town",n:"חוזרים לאוסקה · Nakazakichō",s:"קפה, וינטג׳, רחובות שקטים",t:"אחה״צ",q:"Nakazakicho Osaka"},
  {c:"food",n:"ערב · Fukushima",s:"אזור ארוחות ערב",q:"Fukushima Osaka izakaya"}],
  note:"חצי יום טבע ואז ערב רגוע — לא יום כפול. תחילת אוקטובר היא לפני שיא השלכת במינו."},

{d:6,dow:"ג׳",base:"osaka",t:"יום גמיש",items:[
  {c:"town",k:"nara",n:"אופציה · נארה אחרת",s:"Naramachi, רחובות סוחרים, גנים, יער Kasugayama — לא סביב האיילים",leg:{mode:"rail",hrs:0.8,txt:"אוסקה → נארה"}},
  {c:"water",k:"ine",n:"אופציה · Ine no Funaya",s:"כפר הדייגים על המים — ~3 ש׳ לכל כיוון, רק ביום צלול מאוד"},
  {c:"town",n:"אופציה · נשארים באוסקה",s:"Nakanoshima, Tenjinbashisuji, Horie — קפה, ארקדות, בוטיקים",q:"Tenjinbashisuji Shopping Street Osaka"},
  {c:"food",n:"צהריים · Ninjomenya Gyukotsuo",s:"ראמן מרק עצמות בקר במקום חזיר — בטוח לנועה. דלפק קטן, מכונת כרטיסים",q:"人情麺屋 牛骨王 南船場"},
  {c:"cafe",n:"ערב · Tenma + Don-chan",s:"קפיצות איזקאיה · Don-chan ב-Umeda Higashidōri",q:"Tenma Osaka izakaya"}],
  note:"5/10 כבר סגור על מינו, אז השאלה כאן היא רק האם עוד יציאה או לא. אם מרגיש עמוס — יום עיר בלי אשמה."},

{d:7,dow:"ד׳",base:"kyoto",t:"מעבר לקיוטו · teamLab",items:[
  {c:"town",k:"osaka",n:"בוקר אחרון באוסקה",s:"קפה, אריזה, צ׳ק-אאוט"},
  {c:"sight",k:"teamlab",n:"teamLab Biovortex Kyoto",s:"10 דק׳ הליכה משער Hachijō המזרחי — ממש על הדרך מאוסקה. 09:00–21:00, כניסה אחרונה 19:30",t:"אחה״צ",leg:{mode:"rail",hrs:0.5,txt:"אוסקה → תחנת Kyoto"}},
  {c:"stay",k:"kyoto",n:"Miru Kyoto Gion · צ׳ק-אין",s:"מונית או אוטובוס מהתחנה, 10–15 דק׳"},
  {c:"water",k:"shirakawa",n:"Gion Shirakawa והסמטאות",s:"תעלת Shirakawa, Furumonzen, רחובות קטנים"},
  {c:"water",k:"kamo",n:"נהר Kamo לפנות ערב",s:"הליכה על הגדה סביב Sanjō"},
  {c:"food",n:"ערב · Yakiniku no GANSAN",s:"יאקיניקו ב-Pontochō · @gansan_pontocho",q:"Yakiniku GANSAN Pontocho Kyoto"}],
  note:"⚠️ להזמין כרטיסי teamLab מראש — תמחור דינמי ¥3,600–5,600. Flexible Pass עדיף על שעה קבועה, זה יום מעבר."},

{d:8,dow:"ה׳",base:"kyoto",t:"מזרח קיוטו · מצפון לדרום",items:[
  {c:"sight",k:"honenin",n:"Hōnen-in · מוקדם",s:"שער האזוב והחצר לפני שהאזור מתמלא · כניסה לחצר חופשית",t:"07:30"},
  {c:"walk",k:"tetsugaku",n:"שביל הפילוסופים · קטע",s:"חיבור הליכה נעים דרומה — לא מוסיפים את Ginkaku-ji רק כי הוא קרוב"},
  {c:"sight",k:"eikando",n:"Eikandō · סביב שעת הפתיחה",s:"המקדש המרכזי והיחיד של היום",t:"~09:00"},
  {c:"food",n:"Hinode Udon · צהריים מוקדמים",s:"להגיע קצת לפני הפתיחה · מזומן בלבד · בלי הזמנות · Nanzenji Kitanobōchō 36",t:"~10:45",q:"Hinode Udon Kyoto"},
  {c:"sight",k:"nanzenji",n:"Nanzen-ji ואמת המים Suirokaku",s:"רק אם נשאר כוח וזמן",opt:1},
  {c:"walk",k:"gyojabashi",n:"Gyōjabashi · הגשר הצר",s:"גשר האבן מעל נהר Shirakawa ליד תחנת Higashiyama — לא גשר על הקאמו"},
  {c:"town",k:"shirakawa",n:"Furumonzen → Shirakawa → Gion",s:"חנויות עתיקות, סמטאות וקפה בדרך חזרה"},
  {c:"food",n:"ערב · Hikiniku to Come",s:"המבורג על גחלים ואורז · בשר בקר 100% · מכונת-בית בגיון, מרחק הליכה מהמלון",q:"挽肉と米 京都"}],
  note:"⚠️ 1 בספטמבר בחצות שעון יפן — להזמין את Hikiniku to Come. בלי הזמנה צריך תור מ-07:00, שמתנגש עם Hōnen-in. טל׳ 075-708-2529.",
  note2:"⚠️ MIRU סירבו לאחד את שתי ההזמנות — צ׳ק-אאוט וצ׳ק-אין מחדש הבוקר, הם יעבירו את המזוודות. לארוז בערב 7/10."},

{d:9,dow:"ו׳",base:"gujo",t:"בוקר קיוטו → Seki → גוג׳ו",items:[
  {c:"walk",k:"kamo",n:"בוקר קליל בגיון",s:"הליכה שקטה או גדת הקאמו, קפה, צ׳ק-אאוט"},
  {c:"drive",k:"sanjo",n:"איסוף Corolla Sport",s:"Sanjo Keihan-Kita · בדיקת רכב ו-ETC · מונית קצרה מגיון עם המזוודות",t:"09:30"},
  {c:"shop",k:"seki",n:"Gifu Seki Cutlery Hall",s:"אולם מכירה ישיר של סכיני Seki · 9:00–17:00 · ~100 מקומות חניה · שווה 45–60 דק׳",t:"~11:45",drive:"kyoto_seki"},
  {c:"town",k:"gujo",n:"Gujō-Hachiman · העיר העתיקה",s:"Igawa Komichi, Sōgi-sui, סמטאות, בתי קפה · צהריים מקומיים",t:"~13:30",drive:"seki_gujo"},
  {c:"food",n:"ערב · だいこく家 郡上店",s:"וואגיו / יאקיניקו · גיבוי: Pizzeria Gonza",q:"だいこく家 郡上"}],
  note:"העצירה ב-Seki כמעט חינם: ישיר 180 ק״מ / 2:40, דרך Seki 185 ק״מ / 2:44. מגיעים 13:30, שקיעה ~17:20 = 3.5 שעות אור.",
  note2:"⚠️ שתי המסעדות קטנות בעיירה קטנה — להזמין ברגע שאפשר, עדיף דרך המלון."},

{d:10,dow:"ש׳",base:"matsumoto",t:"גוג׳ו → קיסו → מטסומוטו",items:[
  {c:"walk",k:"tsumago",n:"אופציה A · נקאסנדו מלא",s:"יוצאים 07:30 · חונים ב-Tsumago, אוטובוס ל-Magome, הליכה 9 ק״מ חזרה (~3 ש׳) · מטסומוטו ~16:45",drive:"gujo_tsumago"},
  {c:"town",k:"narai",n:"אופציה C · קיסו בלי ההליכה",s:"בוקר רגוע בגוג׳ו · Tsumago 11:00 + צהריים · Narai 14:00 · מטסומוטו ~16:00",drive:"gujo_tsumago"},
  {c:"drive",k:"matsumoto",n:"אופציה B · ישר למטסומוטו",s:"⚠️ המסלול המהיר עובר 0.4 ק״מ ממרכז Takayama בפסטיבל — נמנעים ממנו = ~3:05 דרך קיסו בכל מקרה",drive:"gujo_matsumoto"},
  {c:"stay",k:"matsumoto",n:"Matsumoto Jujo · צ׳ק-אין",s:"צ׳ק-אין ~15:00 · הערב שמור למלון ולאמבט"}],
  note:"⚠️ פסטיבל Takayama הוא 9–10/10. Narai עולה 2 דקות נהיגה בלבד — הוא יושב על כביש 19 בין Tsumago למטסומוטו.",
  note2:"לוגיסטיקת ההליכה: חונים בסוף (Tsumago), נוסעים לתחילתו (Magome), והולכים חזרה אל הרכב. הכיוון הקל. ⚠️ לאמת לוח אוטובוסים — מצומצם ועונתי."},

{d:11,dow:"א׳",base:"matsumoto",t:"יום הטבע הגדול",items:[
  {c:"drive",k:"sawando",n:"אופציה · Kamikōchi",s:"חונים ב-Sawando (רכב פרטי אסור) ואוטובוס פנימה · Taishō-ike → Kappa-bashi",drive:"dt_sawando"},
  {c:"nature",k:"kamikochi",n:"Kappa-bashi",s:"שיא השלכת סביב אמצע אוקטובר",leg:{mode:"bus",hrs:0.5,txt:"Sawando → Kamikōchi"}},
  {c:"nature",k:"utsukushi",n:"אופציה · Utsukushigahara",s:"רמה בגובה ~2,000 מ׳, נסיעה נופית (Venus Line)",drive:"dt_utsukushi"},
  {c:"nature",k:"daio",n:"אופציה · Azumino + Daiō Wasabi",s:"חצי יום כפרי — נחלים, חוות וסאבי. האופציה הקלה",drive:"dt_azumino"}],
  note:"⚠️ אוטובוס Kamikōchi בהזמנה מראש. בוחרים ערב קודם לפי תחזית."},

{d:12,dow:"ב׳",base:"matsumoto",t:"מטסומוטו · חג ופסטיבל הסובה",items:[
  {c:"sight",k:"matsumoto",n:"טירת Matsumoto + פסטיבל הסובה",s:"הפסטיבל בפארק הטירה 10–12/10 · להגיע לפני שיא הצהריים",t:"בוקר"},
  {c:"town",n:"Nawate + Nakamachi",s:"רחוב הצפרדעים לאורך התעלה, מחסני kura, קרמיקה, קפה",q:"Nakamachi Street Matsumoto"},
  {c:"nature",n:"Alps Park",s:"רק ביום עם ראות טובה",opt:1,q:"Matsumoto City Alps Park"}],
  note:"⚠️ Sports Day + פסטיבל הסובה — העיר, החניה והמסעדות עמוסות בדיוק בלילות שלנו."},

{d:13,dow:"ג׳",base:"fuji",t:"לגוטמבה + החלפת רכב",items:[
  {c:"drive",k:"matsumoto",n:"יוצאים מוקדם ממטסומוטו",s:"עצירה אחת לכל היותר"},
  {c:"drive",k:"gotemba",n:"החלפת רכב · 14:30",s:"מזוודות ל-edit×seven → מחזירים Corolla → אוספים GR Yaris",t:"14:30",drive:"matsumoto_gotemba"},
  {c:"water",k:"yamanakako",n:"לולאה ראשונה · Yamanakako",s:"נקודת שקיעה אחת טובה — לא לרדוף אחרי כמה אגמים"}],
  note:"מזוודות נשארות במלון — לא ב-GR Yaris (תא מטען קטן)."},

{d:14,dow:"ד׳",base:"fuji",t:"יום פוג׳י · מודולרי לפי ראות",items:[
  {c:"nature",k:"panoramadai",n:"גרסה A · ראות מצוינת",s:"Panorama-dai → Oshino Hakkai מוקדם → צפון Kawaguchiko → Ōishi Park",drive:"fuji_loop"},
  {c:"nature",k:"oshino",n:"גרסה B · מעונן חלקית",s:"נשארים קרוב: Gotemba, Yamanakako, Oshino, מזרח Kawaguchiko"},
  {c:"nature",k:"hakone",n:"גרסה C · פוג׳י מוסתר → Hakone",s:"יום נהיגה נופי: אגם Ashi, Ōwakudani, המוזיאון הפתוח",drive:"fuji_hakone"}],
  note:"פוג׳י הוא הר של בקרים — בודקים עננות בערב הקודם ובבוקר, ומחליטים אז. שקיעה ~17:00."},

{d:15,dow:"ה׳",base:"tokyo",t:"בוקר פוג׳י אחרון → טוקיו",items:[
  {c:"drive",k:"gotemba",n:"בוקר אחרון + החזרת GR Yaris",s:"נקודה מזרחית אם ההר נראה · תדלוק אוקטן גבוה · החזרה 14:30",t:"14:30"},
  {c:"stay",k:"tokyo",n:"Metropolitan Edmont · צ׳ק-אין",s:"Iidabashi",leg:{mode:"rail",hrs:1.6,txt:"גוטמבה → טוקיו"}},
  {c:"town",k:"kagurazaka",n:"ערב · Kagurazaka",s:"עלייה ברחוב הראשי, סמטאות מרוצפות, ביסטרו או איזקאיה"}]},

{d:16,dow:"ו׳",base:"tokyo",t:"טוקיו · אשכול לבחירה",items:[
  {c:"sight",k:"asakusa",n:"אופציה · טוקיו הישנה",s:"Sensō-ji ב-07:00 → Kappabashi (סכינים וכלי מטבח) → Nezu-jinja → Yanaka Ginza",t:"07:00"},
  {c:"town",k:"nakameguro",n:"אופציה · מערב מעוצב",s:"Shibuya סימון-וי קצר → Daikanyama (T-Site) → Nakameguro לאורך נהר Meguro"},
  {c:"town",k:"shimokita",n:"אופציה · מערב חלופי",s:"Yoyogi-Uehara → Shimokitazawa · מאפיות, קפה, וינטג׳, תקליטים"}],
  note:"16–19/10 פתוחים בכוונה. אשכול אחד ליום ועוד ערב — לא שניים. משאירים לפחות פעמיים חצי יום ריק."},

{d:17,dow:"ש׳",base:"tokyo",t:"טוקיו · אשכול לבחירה",items:[
  {c:"shop",k:"nakano",n:"אופציה · מקומי ואלטרנטיבי",s:"Nakano Broadway (מקורה, טוב לגשם) → Koenji · יד-שנייה, תקליטים, ארקדות, ברים"},
  {c:"town",k:"kichijoji",n:"אופציה · Kichijōji",s:"פארק Inokashira, Harmonica Yokochō, רחובות קניות"},
  {c:"shop",n:"אופציה · Ginza וקניות",s:"מה שנועה תרצה — TikTok/Instagram, קניונים · יום גשום מצוין",q:"Ginza Tokyo"}]},

{d:18,dow:"א׳",base:"tokyo",t:"טוקיו · אשכול לבחירה",items:[
  {c:"town",k:"koenji",n:"אופציה · Koenji",s:"יד-שנייה, תקליטים, ארקדת Pal, קפה, live houses"},
  {c:"town",k:"yanaka",n:"אופציה · Yanaka ו-Nezu",s:"רחוב מסחר ישן, קיסאטן, בית קברות, מנהרת הטוריים"},
  {c:"town",k:"daikanyama",n:"אופציה · Daikanyama ו-Nakameguro",s:"T-Site, בוטיקים, נהר Meguro"}]},

{d:19,dow:"ב׳",base:"tokyo",t:"טוקיו · אשכול לבחירה",items:[
  {c:"sight",k:"meiji",n:"אופציה · Meiji Jingū מוקדם",s:"יער שקט, שבילי חצץ — אמצע שבוע = רגוע",t:"08:00"},
  {c:"shop",k:"kappabashi",n:"אופציה · Kappabashi",s:"רחוב המטבח — סכינים, קרמיקה, כלי מטבח"},
  {c:"town",k:"shibuya",n:"אופציה · Shibuya סימון-וי",s:"Hachiko והמעבר — שעה עד שעה וחצי, לא יותר"}],
  note:"הערב האחרון — שווה לשמור אותו לארוחה טובה ליד המלון ב-Kagurazaka."},

{d:20,dow:"ג׳",base:"tokyo",t:"יציאה · NRT 18:00",items:[
  {c:"town",k:"kagurazaka",n:"בוקר קליל ליד המלון",s:"ארוחת בוקר, קניות אחרונות, קפה"},
  {c:"air",n:"יציאה לנמל התעופה",s:"לצאת ~14:30 · טיסה 18:00 מ-NRT",t:"~14:30",q:"Narita International Airport",leg:{mode:"rail",hrs:1.3,txt:"טוקיו → NRT"}}],
  note:"בלי אזור או טיול גדול — מרווח ביטחון לשדה."}
];

var NIGHTS = [["osaka","אוסקה","4–7/10","3 לילות"],["kyoto","קיוטו","7–9/10","2 לילות"],["gujo","גוג׳ו","9–10/10","לילה"],
  ["matsumoto","מטסומוטו","10–13/10","3 לילות"],["fuji","פוג׳י · גוטמבה","13–15/10","2 לילות"],["tokyo","טוקיו","15–20/10","5 לילות"]];

/* Recommendations: ONLY places Bar named himself. Nothing invented.
   `city` colours the group so the list reads by location at a glance. */
var SCREENS = {
  book:{groups:[
    {label:"לינה",rows:[
      {lead:"1",name:"Meander Osaka · Namba",sub:"4–7/10 · 3 לילות",meta:"מאושר",tone:"ok"},
      {lead:"2",name:"Miru Kyoto Gion",sub:"7–9/10 · צ׳ק-אאוט וצ׳ק-אין מחדש ב-8/10",meta:"מאושר",tone:"ok"},
      {lead:"3",name:"Fairfield Gifu Gujō (Yamato)",sub:"9–10/10 · לילה",meta:"מאושר",tone:"ok"},
      {lead:"4",name:"Matsumoto Jujo",sub:"10–13/10 · 3 לילות · אמבט פתוח",meta:"מאושר",tone:"ok"},
      {lead:"5",name:"edit×seven Fuji Gotemba",sub:"13–15/10 · 2 לילות",meta:"מאושר",tone:"ok"},
      {lead:"6",name:"Metropolitan Edmont · Iidabashi",sub:"15–20/10 · 5 לילות",meta:"מאושר",tone:"ok"}]},
    {label:"רכבים",rows:[
      {icon:"car",name:"Corolla Sport",sub:"איסוף 9/10 09:30 · Sanjo Keihan-Kita · החזרה 13/10",meta:"מאושר",tone:"ok"},
      {icon:"car",name:"GR Yaris · ימי פוג׳י",sub:"איסוף 13/10 14:30 גוטמבה · החזרה 15/10 14:30",meta:"מאושר",tone:"ok"},
      {icon:"car",name:"ETC · כרטיס אגרה",sub:"לוודא שמגיע עם שני הרכבים",meta:"לבדוק",tone:"todo"}]},
    {label:"⚠️ להזמין — לפי דחיפות",rows:[
      {icon:"bowl",name:"Hikiniku to Come · 8/10",sub:"ההזמנות לאוקטובר נפתחות 1/9 בחצות שעון יפן · בלי זה צריך תור מ-07:00 שמתנגש עם Hōnen-in",meta:"1 בספטמבר",tone:"warn"},
      {icon:"star",name:"teamLab Biovortex · 7/10",sub:"¥3,600–5,600 · Flexible Pass · לאמת ימי סגירה",meta:"לא הוזמן",tone:"warn"},
      {icon:"bowl",name:"ארוחות ערב מטסומוטו · 10, 11, 12/10",sub:"חלון פעולה ~8–12 בספטמבר · דרך Jujo · חג + פסטיבל = עיר מלאה",meta:"לא הוזמן",tone:"warn"},
      {icon:"bowl",name:"ערב גוג׳ו · 9/10",sub:"だいこく家 או Pizzeria Gonza · עיירה קטנה",meta:"לא הוזמן",tone:"warn"},
      {icon:"bus",name:"אוטובוס Tsumago → Magome · 10/10",sub:"רק אם בוחרים אפשרות A · לוח מצומצם · מונית ~¥4,000–5,000 גיבוי",meta:"לבדוק",tone:"warn"},
      {icon:"bus",name:"אוטובוסי Kamikōchi / Norikura",sub:"הזמנה חובה אם עושים",meta:"לבדוק",tone:"warn"}]}]},

  lists:{groups:[
    {label:"מסמכים",rows:[
      {name:"רישיון נהיגה בינלאומי · טרי 2026",sub:"פנקס ז׳נבה 1949 · בלעדיו אין רכב",meta:"פתוח",tone:"warn"},
      {name:"Visit Japan Web",sub:"שני פרופילים · לשמור QR",meta:"פתוח",tone:"todo"},
      {name:"דרכונים · תוקף 6 חודשים+",sub:"",meta:"נעשה",tone:"ok"},
      {name:"ביטוח נסיעות",sub:"עיכובים + נהיגה",meta:"פתוח",tone:"todo"}]},
    {label:"טכנולוגיה וכסף",rows:[
      {name:"eSIM + כרטיס IC",sub:"Suica או ICOCA",meta:"פתוח",tone:"todo"},
      {name:"כרטיס 0% המרה",sub:"Revolut / Wise",meta:"פתוח",tone:"todo"},
      {name:"מזומן ין",sub:"Hinode Udon ומקומות קטנים — מזומן בלבד",meta:"פתוח",tone:"todo"},
      {name:"מפות אופליין",sub:"קנסאי, Kiso/Nagano, Fuji, טוקיו",meta:"פתוח",tone:"todo"},
      {name:"כבל USB-A → USB-C ל-CarPlay",sub:"כבל נתונים, לא רק טעינה",meta:"פתוח",tone:"todo"}]},
    {label:"לארוז",rows:[
      {name:"שכבות · 7–23°",sub:"נוחתים ב-24°, ועומדים על 2,000מ׳ תוך עשרה ימים",meta:"פתוח",tone:"todo"},
      {name:"נעלי הליכה אמיתיות",sub:"נקאסנדו ~9 ק״מ",meta:"פתוח",tone:"todo"},
      {name:"2–3 מתאמי חשמל Type A",sub:"+ מפצל USB",meta:"פתוח",tone:"todo"},
      {name:"תרופות בטן",sub:"לופרמיד, נגד בחילה, פרוביוטיקה",meta:"פתוח",tone:"todo"}]},
    {label:"לקנות שם",rows:[
      {icon:"shop",name:"סכין יפנית",sub:"Seki ב-9/10 · Kappabashi בטוקיו",meta:"",tone:""},
      {icon:"shop",name:"קרמיקה",sub:"Nakamachi במטסומוטו",meta:"",tone:""},
      {icon:"shop",name:"וינטג׳ ותקליטים",sub:"Koenji, Shimokitazawa, Nakano",meta:"",tone:""}]}]},

  weather:{groups:[
    {label:"ימים שנקבעים לפי התחזית",rows:[
      {name:"6/10 · יום גמיש באוסקה",sub:"נארה שקטה / Ine / יום עיר רגוע",meta:"להחליט",tone:"warn"},
      {name:"10/10 · גוג׳ו → מטסומוטו",sub:"נקאסנדו מלא / קיסו בלי הליכה / ישר",meta:"להחליט",tone:"warn"},
      {name:"11/10 · יום הטבע",sub:"Kamikōchi / Utsukushigahara / Azumino",meta:"להחליט",tone:"warn"},
      {name:"14/10 · יום פוג׳י",sub:"ראות מצוינת / מעונן חלקית / ההר מוסתר",meta:"להחליט",tone:"warn"}]},
    {label:"שלכת",rows:[
      {icon:"mountain",name:"Kamikōchi · ~1,500מ׳",sub:"שיא סביב אמצע אוקטובר",meta:"בזמן",tone:"ok"},
      {icon:"mountain",name:"Minoh ומזרח קיוטו",sub:"מוקדם מדי — ירוק ברובו",meta:"לא בעונה",tone:"todo"}]},
    {label:"אור יום",rows:[
      {name:"שקיעה בגוג׳ו · 9/10",sub:"~17:20 — לכן מגיעים ב-13:30",meta:"",tone:""},
      {name:"שקיעה באזור פוג׳י",sub:"~17:00 · ההר מתגלה בעיקר בבקרים",meta:"",tone:""}]}]},

  recs:{groups:[
    {label:"קיוטו · ארוחות ערב",city:"kyoto",rows:[
      {icon:"bowl",name:"挽肉と米 · Hikiniku to Come",sub:"המועמד המוביל · בשר בקר 100% · בגיון, מרחק הליכה מהמלון",meta:"להזמין 1/9",tone:"warn",q:"挽肉と米 京都"},
      {icon:"bowl",name:"Yakiniku no GANSAN",sub:"יאקיניקו ב-Pontochō · @gansan_pontocho · בקר",meta:"מועמד",tone:"",q:"Yakiniku GANSAN Pontocho Kyoto"}]},
    {label:"קיוטו · איזקאיה וברים",city:"kyoto",rows:[
      {icon:"cafe",name:"365 Sakaba · Kawaramachi",sub:"איזקאיה זולה ותוססת",meta:"ללא הזמנה",tone:"",q:"365 Sakaba Kawaramachi Kyoto"},
      {icon:"cafe",name:"Bar Alchemist",sub:"קוקטייל בר",meta:"ללא הזמנה",tone:"",q:"Bar Alchemist Kyoto"},
      {icon:"cafe",name:"Rocking Bar ING",sub:"בר רוק ותקליטים",meta:"ללא הזמנה",tone:"",q:"Rocking Bar ING Kyoto"}]},
    {label:"אוסקה · אוכל",city:"osaka",rows:[
      {icon:"bowl",name:"人情麺屋 牛骨王 · Ninjomenya Gyukotsuo",sub:"ראמן מרק עצמות בקר במקום חזיר · דלפק קטן · Minami-Semba",meta:"בטוח לנועה",tone:"ok",q:"人情麺屋 牛骨王 南船場"},
      {icon:"bowl",name:"Tokito · ときと",sub:"אזור Karahori, Chūō-ku · וואגיו סנדו",meta:"בוחרים אחד",tone:"",q:"ときと tokito Karahori Osaka"},
      {icon:"bowl",name:"Dekasan",sub:"אותו וואגיו סנדו — לא רודפים אחרי שניהם",meta:"בוחרים אחד",tone:"",q:"Dekasan Osaka wagyu sando"}]},
    {label:"אוסקה · מתוקים",city:"osaka",rows:[
      {icon:"cafe",name:"Grenier Patisserie · Kitahama",sub:"הפחזנייה עם הקרם ברולה של נועה",meta:"",tone:"",q:"Grenier Patisserie Kitahama Osaka"},
      {icon:"cafe",name:"MooKEN",sub:"פחזניות",meta:"",tone:"",q:"MooKEN cream puff Osaka"}]},
    {label:"אוסקה · אזורי ערב",city:"osaka",rows:[
      {icon:"bowl",name:"Fukushima",sub:"אזור ארוחות ערב",meta:"אזור",tone:"",q:"Fukushima Osaka izakaya"},
      {icon:"cafe",name:"Tenma",sub:"קפיצות איזקאיה ובארים",meta:"אזור",tone:"",q:"Tenma Osaka izakaya"},
      {icon:"cafe",name:"Don-chan · Umeda Higashidōri",sub:"",meta:"",tone:"",q:"Don-chan Umeda Higashidori Osaka"}]},
    {label:"גוג׳ו · 9/10",city:"gujo",rows:[
      {icon:"bowl",name:"だいこく家 郡上店",sub:"וואגיו / יאקיניקו · המועדף לערב הזה",meta:"להזמין",tone:"warn",q:"だいこく家 郡上"},
      {icon:"bowl",name:"Pizzeria Gonza",sub:"גיבוי אמיתי, לא פרס ניחומים",meta:"להזמין",tone:"warn",q:"Pizzeria Gonza Gujo"}]},
    {label:"מטסומוטו · 10, 11, 12/10",city:"matsumoto",rows:[
      {icon:"bowl",name:"עדיין אין מועמדים",sub:"שלוש ארוחות ערב פתוחות — לא ממציאים שמות",meta:"פתוח",tone:"warn"}]},
    {label:"טוקיו",city:"tokyo",rows:[
      {icon:"star",name:"עדיין אין מועמדים",sub:"נועה תאסוף מ-TikTok/Instagram · תשלח ואוסיף",meta:"פתוח",tone:"todo"}]}]}
};

/* October climate normals per base (published station averages, 15–30yr).
   Used as the baseline; the app overlays a live forecast when one is available. */
var WX = {
  osaka:     {hi:23, lo:15, rain:19, k:"clear", txt:"בהיר, לחות יורדת"},
  kyoto:     {hi:22, lo:13, rain:19, k:"clear", txt:"בהיר עם ענני בוקר"},
  gujo:      {hi:21, lo:12, rain:36, k:"mixed", txt:"מעונן חלקית, עמק לח"},
  matsumoto: {hi:18, lo: 8, rain:48, k:"mixed", txt:"צלול ביום, לילות קרים"},
  fuji:      {hi:21, lo:13, rain:39, k:"mixed", txt:"ההר נראה בעיקר בבקרים"},
  tokyo:     {hi:23, lo:16, rain:35, k:"rain",  txt:"מעונן, יום גשם צפוי"}
};
var WX_NOTE = "ממוצע אוקטובר · אקלים, לא תחזית";

/* lat/lon per base for the live forecast lookup */
var WX_POINT = { osaka:[34.67,135.50], kyoto:[35.01,135.77], gujo:[35.75,136.96],
                 matsumoto:[36.24,137.97], fuji:[35.31,138.93], tokyo:[35.70,139.75] };

var CAT = {
  nature:{i:I.mountain,l:"טבע"},   water:{i:I.water,l:"מים"},
  sight: {i:I.torii,   l:"אתרים"}, food: {i:I.bowl, l:"אוכל"},
  town:  {i:I.town,    l:"שכונות"},shop: {i:I.shop, l:"קניות"},
  cafe:  {i:I.cafe,    l:"קפה"},   walk: {i:I.walk, l:"הליכה"},
  drive: {i:I.car,     l:"נהיגה"}, rail: {i:I.train,l:"רכבת"},
  bus:   {i:I.bus,     l:"אוטובוס"},air: {i:I.plane,l:"טיסה"},
  stay:  {i:I.bed,     l:"לינה"},  bath:{i:I.bath, l:"אונסן"}
};

return {
  I:I, C:C, DAYS:DAYS, NIGHTS:NIGHTS, SCREENS:SCREENS, WX:WX, WX_NOTE:WX_NOTE, WX_POINT:WX_POINT, CAT:CAT,
  BASEKEY:{osaka:"osaka",kyoto:"kyoto",gujo:"gujo",matsumoto:"matsumoto",fuji:"gotemba",tokyo:"tokyo"},
  BASENAME:{osaka:"אוסקה",kyoto:"קיוטו",gujo:"גוג׳ו",matsumoto:"מטסומוטו",fuji:"גוטמבה",tokyo:"טוקיו"},
  HOTEL:{osaka:"Meander Osaka · Namba",kyoto:"Miru Kyoto Gion",gujo:"Fairfield Gifu Gujō (Yamato)",
    matsumoto:"Matsumoto Jujo · אמבט פתוח",fuji:"edit×seven Fuji Gotemba",tokyo:"Metropolitan Edmont · Iidabashi"},
  SIG_PRIO:["nature","water","sight","food","town","shop","cafe","walk","drive","rail","bus","air"],
  LEG_ICON:{car:I.car,rail:I.train,bus:I.bus,walk:I.walk}
};
})();
