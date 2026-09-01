/* Small shared vocabulary: icons, escaping, time formatting, links, toast.
   Everything here is pure except toast(). */

const P = {
  search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35",
  dots:"M5 12h.01M12 12h.01M19 12h.01",
  today:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2",
  trip:"M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Zm0 0v13m6 2.5v-13",
  saved:"M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z",
  chev:"M7 10l5 5 5-5",
  right:"M9 6l6 6-6 6",
  left:"M15 6l-6 6 6 6",
  out:"M8 16 16 8m0 0H9m7 0v7",
  pin:"M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z",
  nav:"m21 3-8.5 18-2.2-7.3L3 11.5 21 3Z",
  star:"m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.6Z",
  check:"M5 12.5 10 17l9-9",
  copy:"M9 9h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm-3 6H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1",
  close:"M6 6l12 12M18 6 6 18",

  train:"M7 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm-2 6h14M8.5 20 6.5 22m9-2 2 2M9 13h.01M15 13h.01",
  walk:"M12.5 4.6a1.4 1.4 0 1 0 0-.01M10 21l1.8-5.6-2-2.2 1-4.2 3.2 2.4 2.2.8M9.5 21l1.6-4",
  car:"M4.5 13h15M6.5 13l1.2-4a2 2 0 0 1 1.9-1.4h4.8a2 2 0 0 1 1.9 1.4l1.2 4v4.5h-2.5V16h-6v1.5H6.5V13Z",
  bus:"M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H5V6Zm0 9h14v2.5a1 1 0 0 1-1 1h-1V21H7v-2.5H6a1 1 0 0 1-1-1V15ZM5 9.5h14M9 12.2h.01M15 12.2h.01",
  plane:"M21.5 12 3 19l3.2-7L3 5l18.5 7Z",
  bed:"M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 18v2m18-2v2M6 11V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
  box:"M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Zm0 0 8 4.5m0 0 8-4.5m-8 4.5V20",
  doc:"M7 3h7l4 4v14H7V3Zm7 0v4h4M10 12h6M10 16h6",

  bowl:"M4 11h16a8 8 0 0 1-16 0ZM9 4c-.8.8-.8 1.7 0 2.5M13 3.4c-1 1-1 2.1 0 3.1M4 21h16",
  cafe:"M4 8h11v5.5A4.5 4.5 0 0 1 10.5 18h-2A4.5 4.5 0 0 1 4 13.5V8Zm11 1h2.2a2.6 2.6 0 0 1 0 5.2H15M4.5 21h11",
  shop:"M4.5 9.5h15l-1 10h-13l-1-10Zm4 0v-2a3.5 3.5 0 0 1 7 0v2",
  mountain:"M2.5 19.5 9 9l3.6 5.4L14.8 11l6.7 8.5H2.5Z",

  route:"M6 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm12-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v3a4 4 0 0 1-4 4h-4a4 4 0 0 0-4 4",
  clock:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2",
  warn:"M12 8v5m0 3.5v.01M10.3 3.9 1.8 18.2A2 2 0 0 0 3.5 21h17a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z",
  torii:"M4 7h16M6.5 7v12M17.5 7v12M5 4.2h14",
  parking:"M8 20V4h5a4.5 4.5 0 0 1 0 9H8",
  cloud:"M7 18a4 4 0 0 1 .6-7.96A5.5 5.5 0 0 1 18 11a3.5 3.5 0 0 1 0 7H7Z",
  info:"M12 16.5v-5m0-3.3v.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  list:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"
};

export const svg = (name, cls = "") =>
  `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true"><path d="${P[name] || P.pin}"/></svg>`;

export const esc = s => String(s ?? "").replace(/[&<>"']/g,
  c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

/* note kind -> glyph */
export const NOTE_ICON = {
  route:"route", transport:"train", timing:"clock", culture:"torii",
  food:"bowl", parking:"parking", warning:"warn", weather:"cloud"
};

/* place category -> glyph */
export const CAT_ICON = {
  food:"bowl", coffee:"cafe", do:"star", shopping:"shop", nature:"mountain"
};

/* wallet kind -> glyph */
export const WALLET_ICON = {
  stay:"bed", car:"car", flight:"plane", transport:"box", document:"doc"
};

export const MODE_ICON = { train:"train", walk:"walk", car:"car", bus:"bus" };

/* ---------------------------------------------------------------- time */
/* Research that said "morning" stays morning. Nothing is ever promoted
   to a precise clock time it never had. */
export function timeLabel(t) {
  if (!t) return "";
  if (t.k === "exact")  return t.v;
  if (t.k === "approx") return "~" + t.v;
  if (t.k === "part")   return t.v.charAt(0).toUpperCase() + t.v.slice(1);
  return "";
}
export const isSoft = t => !t || t.k === "part" || t.k === "seq";

/* Minutes into the day, for working out which stop is current.
   Parts of the day get generous windows on purpose. */
export function minutesOf(t) {
  if (!t) return null;
  if (t.k === "exact" || t.k === "approx") {
    const [h, m] = t.v.split(":").map(Number);
    return h * 60 + m;
  }
  if (t.k === "part") return { morning: 9 * 60, afternoon: 14 * 60, evening: 19 * 60 }[t.v] ?? null;
  return null;
}

/* ---------------------------------------------------------------- dates */
const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DOW = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export function dLabel(iso) {
  const d = new Date(iso + "T00:00:00");
  return `${DOW[d.getDay()]}, ${MON[d.getMonth()]} ${d.getDate()}`;
}
export function dShort(iso) {
  const d = new Date(iso + "T00:00:00");
  return `${MON[d.getMonth()]} ${d.getDate()}`;
}
export function rangeLabel(from, to) {
  const a = new Date(from + "T00:00:00"), b = new Date(to + "T00:00:00");
  return a.getMonth() === b.getMonth()
    ? `${MON[a.getMonth()]} ${a.getDate()}–${b.getDate()}`
    : `${MON[a.getMonth()]} ${a.getDate()} – ${MON[b.getMonth()]} ${b.getDate()}`;
}

/* ---------------------------------------------------------------- links */
export const mapsSearch = q =>
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

export const mapsDir = q =>
  "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(q);

/* A whole day as one Google Maps route. Waypoints cap at 9 on the web. */
export function dayRoute(day) {
  const stops = (day.route || []).map(r => r.name);
  if (stops.length < 2) return null;
  const origin = stops[0], destination = stops[stops.length - 1];
  const way = stops.slice(1, -1).slice(0, 9);
  let u = "https://www.google.com/maps/dir/?api=1"
        + "&origin=" + encodeURIComponent(origin + ", Japan")
        + "&destination=" + encodeURIComponent(destination + ", Japan");
  if (way.length) u += "&waypoints=" + way.map(w => encodeURIComponent(w + ", Japan")).join("|");
  return u;
}

/* ---------------------------------------------------------------- toast */
let toastEl, toastT;
export function toast(msg) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  requestAnimationFrame(() => toastEl.classList.add("on"));
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove("on"), 1900);
}

export async function copy(text, label = "Copied") {
  try { await navigator.clipboard.writeText(text); toast(label); }
  catch { toast("Could not copy"); }
}
