/* Checklists and climate. Both live in More, not in the main navigation.

   Tick state is stored per item id in localStorage — it is the one place in
   the app where marking something off is genuinely useful, because these are
   real tasks with deadlines rather than an itinerary to be audited. */

export const lists = [
  {
    id: "l-before",
    title: "Before Japan",
    groups: [
      {
        title: "Documents",
        items: [
          { id: "c-idp", name: "International driving permit · issued 2026", note: "Must be the 1949 Geneva booklet. Without it there is no car." },
          { id: "c-vjw", name: "Visit Japan Web", note: "Two profiles. Save both QR codes offline." },
          { id: "c-passports", name: "Passports valid 6+ months", note: "", done: true },
          { id: "c-insurance", name: "Travel insurance", note: "Cover delays and driving." }
        ]
      },
      {
        title: "Tech and money",
        items: [
          { id: "c-esim", name: "eSIM and an IC card", note: "Suica or ICOCA." },
          { id: "c-card", name: "Zero-conversion card", note: "Revolut or Wise." },
          { id: "c-cash", name: "Yen in cash", note: "Hinode Udon and the smaller places are cash only." },
          { id: "c-offlinemaps", name: "Offline maps", note: "Kansai, Kiso and Nagano, Fuji, Tokyo." },
          { id: "c-cable", name: "USB-A to USB-C cable for CarPlay", note: "A data cable, not a charge-only one." }
        ]
      },
      {
        title: "Packing",
        items: [
          { id: "c-layers", name: "Layers for 7–23°", note: "We land in 24° and stand at 2,000 m within ten days." },
          { id: "c-shoes", name: "Real walking shoes", note: "The Nakasendō is about 9 km, and Kurama is a mountain path." },
          { id: "c-adapters", name: "Two or three Type A adapters", note: "Plus a USB splitter." },
          { id: "c-meds", name: "Stomach medicine", note: "Loperamide, anti-nausea, probiotics." }
        ]
      }
    ]
  },
  {
    id: "l-buy",
    title: "Buy in Japan",
    groups: [
      {
        title: "Worth carrying home",
        items: [
          { id: "c-knife", name: "A Japanese knife", note: "Tower Knives in Osaka on 4–7 Oct, or Seki on the 9th. Checked baggage on the way home." },
          { id: "c-ceramics", name: "Ceramics", note: "Nakamachi in Matsumoto, 10–13 Oct." }
        ]
      }
    ]
  }
];

/* October climate averages for each base. This is climate, not forecast —
   it exists to support packing and weather-dependent choices, nothing more. */
export const climate = {
  osaka:     { hi: 23, lo: 15, rain: 19, sky: "clear", text: "Bright, humidity dropping" },
  kyoto:     { hi: 22, lo: 13, rain: 19, sky: "clear", text: "Bright with morning cloud" },
  gujo:      { hi: 21, lo: 12, rain: 36, sky: "mixed", text: "Partly cloudy, damp valley" },
  matsumoto: { hi: 18, lo: 8,  rain: 48, sky: "mixed", text: "Clear days, cold nights" },
  fuji:      { hi: 21, lo: 13, rain: 39, sky: "mixed", text: "The mountain shows mostly in the mornings" },
  tokyo:     { hi: 23, lo: 16, rain: 35, sky: "rain",  text: "Cloudy, expect a wet day" }
};

export const CLIMATE_NOTE = "October average · climate, not forecast";

/* Days whose shape is decided on the forecast the night before. */
export const weatherDays = [
  { day: "d06", title: "Flexible day in Osaka", options: "Quiet Nara · Ine · a slow city day" },
  { day: "d10", title: "Gujō to Matsumoto", options: "Full Nakasendō walk · Kiso without walking · straight through" },
  { day: "d11", title: "The nature day", options: "Kamikōchi · Senjōjiki · Utsukushigahara · Azumino" },
  { day: "d14", title: "The Fuji day", options: "West Izu road trip · lakes · Hakone" }
];

export const daylight = [
  { title: "Sunset at Gujō · 9 Oct", body: "Around 17:20, which is why we aim to arrive by 13:30." },
  { title: "Sunset in the Fuji area", body: "Around 17:00. The mountain mostly shows in the mornings." },
  { title: "Sunset at Nishina Pass · 14 Oct", body: "17:14. Target arrival 16:15–16:30." }
];

export const foliage = [
  { title: "Kamikōchi · ~1,500 m", status: "on time", body: "Peaks around mid-October — we are in the window." },
  { title: "Minoh and eastern Kyoto", status: "too early", body: "Kyoto's colour is mid-November. Mostly green while we are there." }
];
