// Bakes a Latin-label-only MapLibre style from OpenFreeMap "Liberty".
// Liberty ships "Latin\nJapanese" labels; we want Latin only so the map is readable.
// Output is committed so the app has one less runtime dependency.
import { writeFileSync } from "node:fs";

const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
const style = await (await fetch(STYLE_URL)).json();

// Prefer the transliterated Latin name, then the English name, then whatever exists.
const LATIN = ["coalesce", ["get", "name:latin"], ["get", "name_en"], ["get", "name"]];

let patched = 0, skipped = [];
for (const layer of style.layers) {
  const tf = layer.layout && layer.layout["text-field"];
  if (!tf) continue;
  const s = JSON.stringify(tf);
  // Only touch name-based labels. Shields/ref labels must keep their own expression.
  if (!/name:latin|name_en|"name"/.test(s)) { skipped.push(layer.id); continue; }
  layer.layout["text-field"] = LATIN;
  patched++;
}

// Japanese place names transliterate long; give labels a bit more room.
for (const layer of style.layers) {
  if (layer.type === "symbol" && layer.layout && layer.layout["text-field"]) {
    layer.layout["text-max-width"] = layer.layout["text-max-width"] ?? 8;
  }
}

const out = "D:/japan-trip/web/data/style-liberty-latin.json";
writeFileSync(out, JSON.stringify(style));
console.log(`patched ${patched} name-based label layers`);
console.log(`left alone (non-name labels): ${skipped.join(", ") || "none"}`);
console.log(`wrote ${out} (${(JSON.stringify(style).length / 1024).toFixed(0)} KB)`);
