// Adds the new fixed-interest Kyoto places to route.json. Additive only:
// existing coords and all baked OSRM drives are preserved untouched.
import { readFileSync, writeFileSync } from "node:fs";

const UA = { "User-Agent": "japan-2026-itinerary/1.0 (personal trip planner)" };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const PATH = "D:/japan-trip/web/data/route.json";
const data = JSON.parse(readFileSync(PATH, "utf8"));

// Japanese queries geocode far more reliably than romaji (learned the hard way).
const NEW = [
  ["honenin",    "法然院 京都市左京区"],
  ["tetsugaku",  "哲学の道 京都市左京区"],
  ["eikando",    "永観堂 禅林寺 京都市左京区"],
  ["hinode",     "日の出うどん 京都市左京区南禅寺北ノ坊町"],
  ["nanzenji",   "南禅寺 水路閣 京都市左京区"],
  ["gyojabashi", "行者橋 京都市東山区"],
  ["shirakawa",  "祇園白川 京都市東山区"],
  ["pontocho",   "先斗町 京都市中京区"],
  ["kamo",       "三条大橋 京都市"],
];

// Everything above must land inside greater Kyoto, else the geocode is junk.
const KYOTO = { latMin: 34.90, latMax: 35.15, lonMin: 135.62, lonMax: 135.90 };

for (const [key, q] of NEW) {
  if (data.coords[key]) { console.log(`${key.padEnd(12)} already present, skipping`); continue; }
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`;
  const j = await (await fetch(url, { headers: UA })).json();
  if (!j.length) { console.log(`${key.padEnd(12)} *** NO RESULT  "${q}"`); data.coords[key] = null; }
  else {
    const lat = +j[0].lat, lon = +j[0].lon;
    const ok = lat > KYOTO.latMin && lat < KYOTO.latMax && lon > KYOTO.lonMin && lon < KYOTO.lonMax;
    data.coords[key] = ok ? [+lat.toFixed(5), +lon.toFixed(5)] : null;
    console.log(`${key.padEnd(12)} ${ok ? "ok  " : "*** OUTSIDE KYOTO"} ${lat.toFixed(5)},${lon.toFixed(5)}  ${j[0].display_name.slice(0, 60)}`);
  }
  await sleep(1100);
}

data.generated = new Date().toISOString().slice(0, 10);
writeFileSync(PATH, JSON.stringify(data));
const missing = Object.entries(data.coords).filter(([, v]) => !v).map(([k]) => k);
console.log(`\ncoords: ${Object.keys(data.coords).length}  drives: ${Object.keys(data.drives).length}`);
console.log(`missing coords: ${missing.join(", ") || "none"}`);
