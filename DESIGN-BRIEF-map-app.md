# Design Brief — Japan 2026 **map app** (hosted)

For a Claude Design session. The file to redesign is **`web/index.html`** — the day-by-day itinerary
map app, live at **https://barziee.github.io/japan-2026/**.

> **Not to be confused with `DESIGN-BRIEF.md`**, which covers the *other* app —
> `japan-plan-he.html`, the offline single-file artifact with six tabs. Different constraints
> entirely (that one is fully offline, CSP-locked, and theme-toggled by the artifact host).
> **This brief is the hosted map app.** See §3 for how the two relate.

---

## 1. The ask

The owner's words, in order, across the project:

1. *"these look like long lists with a lot of text… I want it to look more like a proper itinerary
   app with maps and stuff, more visuals less text."*
2. *"I don't like the map — I want it to show the actual route, not a straight line from each base,
   and represent the stops along the way."* (reference given: a **Wanderlog** screenshot)
3. *"the map is 100% japanese, cant tell anything. can you use a map that looks similar to google maps?"*

**All three are already solved structurally.** The map draws real OSRM road geometry, stops are pinned
per day, and labels are forced to Latin script. What has *not* happened is a visual design pass: the
current look is a competent default — system font, rounded cards, one indigo accent — and reads generic.

The job: **give it a real visual identity and a considered layout**, without breaking the machinery in
§5–§6. Take one justified aesthetic risk; spend boldness in one place and keep the rest disciplined.
This is a private trip tool for two people, not a marketing site — restraint reads as quality.

**Known weak points worth attacking:**
- The **map/list relationship** is the whole product and is currently just "map on top, list below."
  This is the single biggest opportunity.
- **Desktop is an afterthought.** It's a 620px mobile column centred in a wide empty page, and the
  40vh map looks stranded. A real desktop layout (map beside the list?) is welcome.
- The **day chip rail** is functional but plain; it's the primary navigation and is on screen always.
- **Density is uneven** — some days have 8 stops, some have 3.

## 2. Subject & voice — the world to draw from

Bar (a technical artist) and Noa's 16-night autumn trip, **4–20 Oct 2026**; his 3rd time in Japan, her
1st. Route: **Ōsaka → Kyoto → Gujō-Hachiman → Matsumoto (Japan Alps) → Gotemba (Fuji) → Tokyo.**
Two rental cars — a calm Corolla for the luggage legs, a GR Yaris purely for the Fuji driving days.

The trip's spine is **deliberate slowness and weather-reactivity**: multi-night bases instead of
nightly hotel changes, neighbourhoods and food over attraction-ticking, and days that flex between a
clear-weather plan and a rain plan. It is explicitly **not** a first-timer Tokyo–Kyoto–Osaka march.

Material to mine: Japanese cartography and road signage, expressway route markers, `mapcode`, altitude
(sea level → 3,000 m at Norikura), foliage timing, ryokan calm, the two very different cars. The current
palette nods to this already — **藍 indigo** and **柿 persimmon**. That's a seed, not a mandate.

## 3. Scope — read this before designing

This app currently carries **the route only**. Four more screens still live in the *other* app
(`japan-plan-he.html`) and are expected to be folded in here later:

| Screen | Status |
|---|---|
| Route / day-by-day + map | **Here now** — this is what you're designing |
| Bookings tracker (hotels, cars, restaurants) | Not yet folded in |
| Weather (sun/rain day filtering) | Not yet folded in |
| Before-flight checklist | Not yet folded in |
| Shopping list | Not yet folded in |
| Optional events / festivals | Not yet folded in |

**So: design a system, not one screen.** Establish type scale, colour roles, card/list components and a
navigation pattern that can absorb five more screens without a second redesign. If the right answer is a
bottom tab bar or a different IA, propose it — you may add a nav shell with the other screens stubbed.

There is a real trade-off here and the owner has chosen to design now: expect the later screens to be
built *to* your system rather than the system being re-derived for them.

## 4. Hard constraints

1. **Hosted, not offline.** Unlike the other app, this one is served from GitHub Pages and is allowed
   network access. **But**: it will be used on mobile data in rural Japan. Keep it light, and
   **self-host any font into `vendor/`** — no Google Fonts / CDN calls at runtime.
2. **Public repo, search-indexable.** **Never add hotel confirmation numbers, phone numbers, or any
   personal/financial detail.** Those live only in the private offline app. This is a hard rule.
3. **Hebrew, RTL.** All UI copy is Hebrew, `dir="rtl"`. Latin/Japanese runs are wrapped in `.en`
   (`direction:ltr; unicode-bidi:isolate`) — keep that pattern for every Latin place name.
   **No negative letter-spacing on Hebrew** — it's a Latin display habit that wrecks Hebrew letterforms.
4. **Mobile-first.** Primary target is an iPhone, used one-handed, outdoors, sometimes in sun.
   Respect `env(safe-area-inset-*)`. Desktop should stop being an afterthought (see §1).
5. **Theme-aware via `prefers-color-scheme` only.** There is **no** `data-theme` attribute here (that
   exists only in the artifact app, which the artifact host stamps). Both themes must work.
   ⚠️ **The map style itself is light-only** — see §6.
6. **Accessibility floor:** visible `:focus-visible`, `prefers-reduced-motion` honoured, tap targets
   ≥ ~24px. The day chips and the map's own controls must both stay reachable.
7. **Don't rename the data files.** `data/route.json` and `data/style-liberty-latin.json` are loaded by
   path. `vendor/maplibre-gl.js` + `.css` are self-hosted deliberately.

## 5. FUNCTIONAL CONTRACT — do not break these hooks

Almost the entire UI is **rendered by JavaScript** from the `DAYS` array. Restyle freely, but these must
keep working (or be updated in the JS in the same pass — it's ~190 readable lines at the end of the file).

| Behavior | What the JS depends on |
|---|---|
| Day navigation | `#daybar` container; chips built in JS as `.chip` (+ `.chip.all` for the overview, `.chip.on` for active) containing `.dw` (weekday) and `.dn` (date) |
| Screen body | `#content`, fully replaced by `render()` on every chip click |
| Map container | `#map`; failure state adds class `.mapfail` and injects `.mapmsg` |
| Map pins | markers are DOM elements `div.pin > span[style="--c:<color>"]` holding the stop number. **The number in `.badge` must match the number in the pin** — that pairing is the core idea of the layout |
| Fly-to-stop | any element carrying `data-jump="<coordKey>"`; the handler reads `node.dataset.jump` and calls `map.flyTo` |
| Per-day colour | each base has a colour in `C`; it is passed **inline** as the custom property `--c` on `.item`, `.tag.c` and pins. Keep `--c` as the mechanism |
| Row anatomy | `.item > .badge + .ib > (.iname, .isub, .itime?)`; optional stops get `.opt`; lodging row uses `.badge.bed` |
| Travel connector | `.leg` between stops, containing `.m` (mode) and an `<a>` to Google Maps directions |
| Day note | `.note`, plus `.note.warn` when the note text begins with `⚠️` |

**No localStorage in this app** (the offline app has it; this one is stateless). Nothing to migrate.

## 6. The map — what a restyle must respect

The map is MapLibre GL 5.6.0 (self-hosted) drawing **OpenFreeMap "Liberty"** vector tiles, via a baked
style at `data/style-liberty-latin.json`.

- That style is **generated, not hand-written.** It is upstream Liberty with the `text-field` of its 20
  *name-based* symbol layers rewritten to `coalesce(name:latin, name_en, name)` so labels come out in
  Latin script. The build script is `build-style.mjs`. **If you want to restyle the basemap itself
  (colours, de-emphasised roads, a dark variant), edit the build script and re-run it — don't hand-edit
  the generated JSON.** The 3 highway-shield layers use `ref` and must stay untouched.
- **A dark basemap does not exist yet.** In dark mode the page is dark and the map stays light. Fixing
  that is a legitimate and welcome part of this pass (bake a second, dark style and switch on
  `prefers-color-scheme`) — but it is optional, not required.
- **Route lines** are a GeoJSON source `routes` with two layers: `routes-solid` (driving legs, real road
  geometry) and `routes-dash` (rail legs, deliberately straight — do not "fix" these into roads, the
  straightness is honest). Line colour is data-driven from a `color` feature property.
- Overlays are drawn on **`style.load`**, not `load`, on purpose — `load` also waits for a rendered
  frame, which never arrives in a background tab. Don't change that.
- Attribution (`.maplibregl-ctrl-attrib`) is a licence requirement — restyle it, don't remove it.

## 7. Current design system (know it, then keep / evolve / replace)

- **Tokens** in one `:root` block + a `prefers-color-scheme:dark` override: `--bg --card --sunk`, ink ramp
  `--ink/--ink2/--ink3`, `--line`, `--accent` (#274B8C indigo) + `--accent-soft`, and safe-area vars.
  Radius is hardcoded 11–13px in places — worth tokenising.
- **Per-base colours** (JS `C`): Ōsaka `#B85428`, Kyoto `#7A4E86`, Gujō `#2E7D8A`, Matsumoto `#274B8C`,
  Fuji `#4A6FA5`, Tokyo `#A03E5C`. These carry real meaning (which base a day belongs to) and appear on
  pins, badges and route lines. **Both themes must keep them legible against map and card backgrounds** —
  this is the trickiest colour problem in the app.
- **Font is currently a system stack** (`"Assistant", "Segoe UI", system-ui`). Assistant is a good Hebrew
  face but isn't actually bundled. Choosing and self-hosting a real Hebrew + Latin pairing is one of the
  highest-leverage moves available.
- **Components:** `.head`, `#map`, `.daybar/.chip`, `.dayhead/.tag`, `.items/.item/.badge/.ib`, `.leg`,
  `.note`, `.foot`. That's the whole vocabulary — it's small, which makes it cheap to redo properly.

## 8. Deliverable

Return **`web/index.html`**, redesigned, with all current content and behaviour intact and §5 passing.
Show the concept on **the overview + one dense day (8 Oct, Kyoto — 8 stops) and one driving day
(10 Oct, Gujō→Narai→Matsumoto)**; those three cover every component in the app.

Keep copy in Hebrew. If you rewrite microcopy, keep it plain and specific — no travel-brochure voice.
If you add a font or asset, put it in `vendor/` and keep it self-hosted.
