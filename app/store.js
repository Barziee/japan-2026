/* Everything the app remembers between visits, in one place.

   Only lightweight UI state lives here: checklist ticks, pinned places, the
   alternative we picked for a flexible day, the last exchange rate. The
   itinerary itself is bundled with the app and never written to.

   Deliberately absent: any notion of an itinerary stop being "done". */

const KEY = "jp2026:v4";

const empty = {
  checks: {},      // checklist item id -> true
  pins: {},        // place id -> true (overrides the bundled default)
  chosenAlt: {},   // day id -> alternative index
  stopOffset: {},  // day id -> manual nudge to Up Next, UI only
  fx: null         // { jpy_ils, jpy_usd, at }
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : { ...empty };
  } catch { return { ...empty }; }
}

export const state = load();

let saveT;
export function save() {
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* private mode */ }
  }, 120);
}

export function toggleCheck(id) {
  state.checks[id] = !state.checks[id];
  if (!state.checks[id]) delete state.checks[id];
  save();
}

export function isChecked(id, fallback = false) {
  return id in state.checks ? state.checks[id] : fallback;
}

export function togglePin(id, fallback = false) {
  const next = !(id in state.pins ? state.pins[id] : fallback);
  state.pins[id] = next;
  save();
  return next;
}

export function isPinned(place) {
  return place.id in state.pins ? state.pins[place.id] : !!place.pin;
}
