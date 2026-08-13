/* build-style.mjs — regenerates data/style-liberty-latin.json and data/style-liberty-dark.json
 *
 *   node build-style.mjs
 *
 * Source of truth is upstream OpenFreeMap "Liberty". Two transforms are applied:
 *
 *   1. LATIN LABELS (unchanged from the original script)
 *      Every *name-based* symbol layer has its text-field rewritten to
 *      coalesce(name:latin, name_en, name). The 3 highway-shield layers use `ref`
 *      and are left alone.
 *
 *   2. DARK VARIANT (new)
 *      A second pass recolours background / fill / line paint by layer id prefix.
 *      Nothing structural changes — same layer list, same order, same filters —
 *      so the route overlay code and the pin geometry keep working identically.
 *      Label halos flip to the dark surface colour so Latin place names stay legible.
 *
 * Do not hand-edit the generated JSON.
 */

import { readFile, writeFile } from "node:fs/promises";

const UPSTREAM = "https://tiles.openfreemap.org/styles/liberty";
const OUT_LIGHT = "data/style-liberty-latin.json";
const OUT_DARK  = "data/style-liberty-dark.json";

const LATIN = ["coalesce", ["get", "name:latin"], ["get", "name_en"], ["get", "name"]];

/* layers keyed off `ref` (route shields) must keep their text-field */
const REF_LAYERS = /^(highway-shield|road-shield|highway-name-motorway)/;

function latinise(style) {
  let n = 0;
  for (const l of style.layers) {
    if (l.type !== "symbol" || !l.layout || !l.layout["text-field"]) continue;
    if (REF_LAYERS.test(l.id)) continue;
    const tf = JSON.stringify(l.layout["text-field"]);
    if (!/name/.test(tf) || /\bref\b/.test(tf)) continue;
    l.layout["text-field"] = LATIN;
    n++;
  }
  console.log(`latinised ${n} symbol layers`);
  return style;
}

/* ---------- dark palette ----------
 * Tuned against the app's dark surface (#0C0F13) so that the six per-base colours
 * — Ōsaka #B85428, Kyōto #7A4E86, Gujō #2E7D8A, Matsumoto #274B8C, Fuji #4A6FA5,
 * Tōkyō #A03E5C — all stay readable as route lines and pin plates on top of it.
 * Roads are deliberately de-emphasised: the route overlay is the figure, the
 * basemap is ground.
 */
/* Roads must read clearly against the ground — the first pass sat everything in
   a 0F–2A band and the map became an unreadable dark smear. Ground stays low,
   roads step up well clear of it, labels are bright. */
const DARK = {
  background:   "#1B2028",
  water:        "#12385C",
  waterway:     "#16416B",
  landuse:      "#20262F",
  park:         "#1C2A22",
  wood:         "#1A2620",
  sand:         "#282619",
  glacier:      "#2A323C",
  building:     "#262C36",
  buildingLine: "#313945",
  motorway:     "#6E7C90",
  trunk:        "#5D6A7C",
  primary:      "#515D6E",
  secondary:    "#465162",
  minor:        "#3B4554",
  path:         "#39424F",
  rail:         "#4A5466",
  boundary:     "#5A6474",
  aeroway:      "#39424F",
  label:        "#C2CAD6",
  labelStrong:  "#F0F4FA",
  halo:         "#12161C",
  waterLabel:   "#7FA6C9",
  parkLabel:    "#7FB394"
};

/* id-prefix → colour, first match wins */
const FILL_RULES = [
  [/^background/,                          DARK.background],
  [/^(water|ocean|sea)/,                   DARK.water],
  [/^waterway/,                            DARK.waterway],
  [/(park|grass|golf|pitch|cemetery)/,     DARK.park],
  [/(wood|forest)/,                        DARK.wood],
  [/(sand|beach)/,                         DARK.sand],
  [/(glacier|ice)/,                        DARK.glacier],
  [/^building/,                            DARK.building],
  [/^landcover|^landuse/,                  DARK.landuse],
  [/^aeroway/,                             DARK.aeroway]
];

const LINE_RULES = [
  [/motorway/,                             DARK.motorway],
  [/trunk/,                                DARK.trunk],
  [/primary/,                              DARK.primary],
  [/secondary|tertiary/,                   DARK.secondary],
  [/(path|pedestrian|track|footway)/,      DARK.path],
  [/(rail|transit|subway)/,                DARK.rail],
  [/boundary|admin/,                       DARK.boundary],
  [/^building/,                            DARK.buildingLine],
  [/^water|^waterway/,                     DARK.waterway],
  [/^road|^bridge|^tunnel|^highway/,       DARK.minor]
];

function pick(rules, id) {
  for (const [re, col] of rules) if (re.test(id)) return col;
  return null;
}

/* replace a paint value that may be a plain colour or a zoom/data expression */
function recolour(value, col) {
  if (typeof value === "string") return col;
  if (Array.isArray(value)) return col;   // flatten interpolations — dark map is flat by design
  if (value && typeof value === "object" && value.stops) return col;
  return col;
}

function darken(style) {
  style.id = "liberty-latin-dark";
  style.name = "Liberty (Latin) · dark";
  for (const l of style.layers) {
    l.paint = l.paint || {};
    if (l.type === "background") {
      l.paint["background-color"] = DARK.background;
      delete l.paint["background-pattern"];
    } else if (l.type === "fill" || l.type === "fill-extrusion") {
      const col = pick(FILL_RULES, l.id) || DARK.landuse;
      const key = l.type === "fill" ? "fill-color" : "fill-extrusion-color";
      l.paint[key] = recolour(l.paint[key], col);
      if (l.paint["fill-outline-color"] !== undefined) l.paint["fill-outline-color"] = DARK.buildingLine;
      delete l.paint["fill-pattern"];
    } else if (l.type === "line") {
      const col = pick(LINE_RULES, l.id) || DARK.minor;
      l.paint["line-color"] = recolour(l.paint["line-color"], col);
    } else if (l.type === "symbol") {
      const strong = /(place|country|state|city|town)/.test(l.id);
      const water  = /(water|ocean|sea|marine)/.test(l.id);
      const park   = /(park|forest|wood)/.test(l.id);
      l.paint["text-color"] = water ? DARK.waterLabel : park ? DARK.parkLabel : strong ? DARK.labelStrong : DARK.label;
      l.paint["text-halo-color"] = DARK.halo;
      l.paint["text-halo-width"] = 1.1;
      l.paint["text-halo-blur"]  = 0.3;
      if (l.paint["icon-color"]) l.paint["icon-color"] = DARK.label;
      if (l.paint["icon-halo-color"]) l.paint["icon-halo-color"] = DARK.halo;
    }
  }
  return style;
}

const upstream = await (await fetch(UPSTREAM)).json();

const light = latinise(structuredClone(upstream));
await writeFile(OUT_LIGHT, JSON.stringify(light));
console.log("wrote", OUT_LIGHT);

const dark = darken(latinise(structuredClone(upstream)));
await writeFile(OUT_DARK, JSON.stringify(dark));
console.log("wrote", OUT_DARK);
