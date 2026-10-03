/* Weather.

   The real forecast for each place we sleep, day by day, from Open-Meteo: no
   key, open to browsers, and it reaches sixteen days ahead. The last good
   answer is kept on the phone, so the numbers survive a tunnel. A date the
   forecast does not reach yet, or a phone that never got one, falls back to
   the October average for that base, and the box says so.

   There is one forecast point per base. A day spent somewhere higher
   (Kamikōchi) or on another coast (West Izu) still shows its base, because
   that is the name the box sits next to. */

import { state, save } from "./store.js";
import { destinations, byId as destById } from "../data/destinations.js";
import { days, dayById, daysFor } from "../data/days.js";
import { climate } from "../data/lists.js";
import { svg, esc, dLabel, todayISO, SKY_ICON } from "./ui.js";

const API = "https://api.open-meteo.com/v1/forecast"
  + "?daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max"
  + "&timezone=Asia%2FTokyo&forecast_days=16"
  + "&latitude=" + destinations.map(d => d.at[0]).join(",")
  + "&longitude=" + destinations.map(d => d.at[1]).join(",");

const HOUR = 3600e3;

/* ------------------------------------------------------------ fetching */

/* Asks again only when what we hold is more than an hour old. Resolves true
   when there is something new to show. */
export async function refresh() {
  if (state.wx?.at && Date.now() - new Date(state.wx.at).getTime() < HOUR) return false;
  try {
    const r = await fetch(API, { cache: "no-store" });
    if (!r.ok) return false;
    const list = await r.json();
    if (!Array.isArray(list) || list.length !== destinations.length) return false;

    /* Merged into what is stored, so a day that has passed keeps the last
       forecast it had. Each entry is [high, low, WMO code, chance of rain]. */
    const by = { ...(state.wx?.by || {}) };
    destinations.forEach((d, i) => {
      const x = list[i]?.daily;
      if (!x?.time) return;
      const out = { ...(by[d.id] || {}) };
      x.time.forEach((date, k) => {
        const hi = x.temperature_2m_max?.[k], lo = x.temperature_2m_min?.[k], code = x.weather_code?.[k];
        if (hi == null || lo == null || code == null) return;
        out[date] = [Math.round(hi), Math.round(lo), code, x.precipitation_probability_max?.[k] ?? null];
      });
      by[d.id] = out;
    });
    state.wx = { at: new Date().toISOString(), by };
    save();
    return true;
  } catch {
    return false;                // no signal: whatever is stored still shows
  }
}

/* ------------------------------------------------------------ reading */

const WET = c => (c >= 51 && c <= 67) || (c >= 71 && c <= 77) || (c >= 80 && c <= 86) || c >= 95;

/* The daily code is the worst hour of the day, so one passing drizzle marks
   an otherwise dry day as wet. The glyph says rain only when the chance of
   rain agrees. */
function skyOf(code, pop) {
  if (WET(code)) return pop == null || pop >= 30 ? "rain" : "mixed";
  return code <= 1 ? "clear" : code === 2 ? "mixed" : "cloud";
}

const WORDS = {
  0: "בהיר", 1: "בהיר ברובו", 2: "מעונן חלקית", 3: "מעונן", 45: "ערפל", 48: "ערפל",
  51: "טפטוף", 53: "טפטוף", 55: "טפטוף", 56: "טפטוף קפוא", 57: "טפטוף קפוא",
  61: "גשם קל", 63: "גשם", 65: "גשם חזק", 66: "גשם קפוא", 67: "גשם קפוא",
  71: "שלג", 73: "שלג", 75: "שלג", 77: "שלג",
  80: "ממטרים קלים", 81: "ממטרים", 82: "ממטרים חזקים", 85: "ממטרי שלג", 86: "ממטרי שלג",
  95: "סופת רעמים", 96: "סופת רעמים עם ברד", 99: "סופת רעמים עם ברד"
};

function wordsOf(code, pop) {
  const w = WORDS[code] || "מעונן";
  const sky = WET(code) && pop != null && pop < 30 ? "מעונן חלקית, אולי " + w : w;
  return pop == null ? sky : `${sky} · ${pop}% לגשם`;
}

/* One day at its base: the forecast when we have one, the average when not. */
export function forDay(day) {
  const f = state.wx?.by?.[day.dest]?.[day.date];
  if (f) {
    const [hi, lo, code, pop] = f;
    return { live: true, hi, lo, pop, sky: skyOf(code, pop), text: wordsOf(code, pop) };
  }
  const c = climate[day.dest];
  return c ? { live: false, hi: c.hi, lo: c.lo, pop: null, sky: c.sky, text: c.text + " · ממוצע של אוקטובר" } : null;
}

/* A whole stay: the typical day and night across the days the forecast
   covers, and the sky most of them have. A tie goes to the duller one. */
export function forStay(destId) {
  const live = daysFor(destId).map(forDay).filter(w => w && w.live);
  if (!live.length) {
    const c = climate[destId];
    return c ? { live: false, hi: c.hi, lo: c.lo, pop: null, sky: c.sky } : null;
  }
  const mean = k => Math.round(live.reduce((s, w) => s + w[k], 0) / live.length);
  const sky = ["rain", "cloud", "mixed", "clear"]
    .map(s => [s, live.filter(w => w.sky === s).length])
    .sort((a, b) => b[1] - a[1])[0][0];
  return { live: true, hi: mean("hi"), lo: mean("lo"), pop: null, sky };
}

/* ------------------------------------------------------------ drawing */
/* Every piece carries data-wx, so a forecast that arrives after the screen
   is drawn is painted into place rather than re-rendering the page under
   the reader. */

const box = (w, key) => !w ? "" : `
  <div class="weather" data-wx="${key}">
    <span class="sun">${svg(SKY_ICON[w.sky] || "partly")}</span>
    <span><b>${w.hi}°</b><small>מינ׳ ${w.lo}°</small>${
      !w.live ? `<small>ממוצע</small>`
      : w.pop >= 30 ? `<small>גשם ${w.pop}%</small>` : ""}</span>
  </div>`;

export const dayBox = day => box(forDay(day), "day:" + day.id);
export const stayBox = destId => box(forStay(destId), "stay:" + destId);

/* The compact form for a row of days: glyph and high, forecast only. */
export function rowWx(day) {
  const w = forDay(day);
  return `<span class="dwx" data-wx="row:${day.id}">${
    w && w.live ? `${svg(SKY_ICON[w.sky] || "partly")}<b>${w.hi}°</b>` : ""}</span>`;
}

function ago(at) {
  const mins = Math.round((Date.now() - at) / 60000);
  if (mins < 2)  return "ממש עכשיו";
  if (mins < 60) return `לפני ${mins} דק׳`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return "לפני " + (hours === 1 ? "שעה" : hours === 2 ? "שעתיים" : hours + " שעות");
  return `ב-${at.getDate()}.${at.getMonth() + 1}`;
}

export function freshLine() {
  const text = state.wx?.at
    ? `התחזית עודכנה ${ago(new Date(state.wx.at))}. יום שהיא עוד לא מגיעה אליו מוצג כממוצע של אוקטובר.`
    : "עוד אין תחזית בטלפון הזה, אז אלה הממוצעים של אוקטובר.";
  return `<div class="muted tiny wxfresh" data-wx="fresh">${esc(text)}</div>`;
}

/* The days still ahead of us, one row each, for the Good to know screen. */
export function listHtml() {
  const today = todayISO();
  const rows = days.filter(d => d.date >= today).map(d => {
    const w = forDay(d);
    return !w ? "" : `
      <a class="lrow" href="#/day/${d.id}">
        <span class="ic">${svg(SKY_ICON[w.sky] || "partly")}</span>
        <span class="t"><span class="n">${esc(dLabel(d.date))} · ${esc(destById[d.dest].name)}</span>
        <span class="s">${esc(w.text)}</span></span>
        <span class="go">${w.hi}° / ${w.lo}°</span>
      </a>`;
  }).join("");
  return `<div data-wx="list">${rows ? `
    <div class="sect">מזג האוויר, יום אחרי יום</div>${rows}
    <p class="tiny wxsrc">הנתונים מ-<a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>, למקום שישנים בו באותו לילה.</p>` : ""}</div>`;
}

export function paint(root = document) {
  root.querySelectorAll("[data-wx]").forEach(el => {
    const [kind, id] = el.dataset.wx.split(":");
    const html = kind === "day" ? dayBox(dayById[id])
               : kind === "stay" ? stayBox(id)
               : kind === "row" ? rowWx(dayById[id])
               : kind === "list" ? listHtml()
               : kind === "fresh" ? freshLine() : null;
    if (html) el.outerHTML = html;
  });
}
