# יפן 2026 · בר ונועה

Day-by-day itinerary app for our October 2026 Japan trip (16 nights, Ōsaka → Kyoto → Gujō →
Matsumoto → Gotemba → Tokyo).

**Live:** https://barziee.github.io/japan-2026/

Single static page, Hebrew/RTL, mobile-first. **No booking confirmation numbers or personal
financial data are published here** — those live only in a private offline copy.

## What it does

- A rail of 17 day chips plus a trip overview; picking a day redraws the map and the plan below it.
- **Real road geometry** for the driving legs, computed once with OSRM and baked into
  `data/route.json` — the app never calls a routing API at runtime and needs no API key.
  Rail legs are drawn as dashed straight lines on purpose; they are not road routes.
- Numbered map pins that match the numbered stops in the list.
- Travel connectors showing mode, real distance and duration, and a Google Maps directions link.
- Settings: 8 colour palettes, font choice, light/dark/auto, text size (stored in `localStorage`).

## Map

MapLibre GL (self-hosted in `vendor/`) drawing **OpenFreeMap "Liberty"** vector tiles.

`data/style-liberty-latin.json` and `data/style-liberty-dark.json` are **generated** — every
name-based label layer is rewritten to `coalesce(name:latin, name_en, name)` so place names render
in Latin script rather than Japanese. Some minor streets have no Latin name in OpenStreetMap and
still show Japanese; that is a data limitation, not a bug.

**Don't hand-edit the generated style JSON.** Edit the script and re-run it:

```sh
node build-style.mjs      # regenerates both style-liberty-*.json from upstream Liberty
node add-kyoto.mjs        # geocodes places into data/route.json (Nominatim, 1 req/sec)
```

## Layout

```
index.html                     the whole app (markup, styles, logic)
data/route.json                baked coordinates + OSRM road geometry
data/style-liberty-latin.json  generated light basemap style
data/style-liberty-dark.json   generated dark basemap style
build-style.mjs                generator for both styles
add-kyoto.mjs                  geocoder that populates route.json
vendor/                        self-hosted MapLibre GL (no CDN at runtime)
DESIGN-BRIEF-map-app.md        brief used for the visual design pass
```
