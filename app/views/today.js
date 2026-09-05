/* Today — the home screen, always.

   Visual direction ported from the approved v10 prototype: an image-first
   hero with an indigo action bar, a solid indigo route block, a warm sand
   context surface, teal logistics and a live coral countdown. The section
   order, the data and every piece of logic are unchanged — this is the same
   Today, composed the way v10 composes it. */

import { days, clusters } from "../../data/days.js";
import { byId as destById, trip } from "../../data/destinations.js";
import { placeById, mapsUrl } from "../../data/places.js";
import { notesForDay, leadNotes } from "../../data/notes.js";
import { walletById } from "../../data/wallet.js";
import { climate } from "../../data/lists.js";
import { state, save } from "../store.js";
import {
  svg, esc, timeLabel, isSoft, minutesOf, dLabel, mapsSearch, mapsDir,
  dayRoute, NOTE_ICON, CAT_ICON, WALLET_ICON, SKY_ICON
} from "../ui.js";

/* Which day the app should be showing. Before departure this is day one, so
   Today never becomes an empty pre-trip dashboard. */
export function currentDay() {
  const iso = new Date().toISOString().slice(0, 10);
  return days.find(d => d.date === iso)
      || (iso < days[0].date ? days[0] : days[days.length - 1]);
}

const isLive = day => day.date === new Date().toISOString().slice(0, 10);

/* The step we are probably heading for. Times are generous on purpose: a
   plan is guidance, and nothing here is ever marked complete. */
function upNextIndex(day) {
  const steps = day.plan || [];
  if (!steps.length) return -1;
  let idx = 0;
  if (isLive(day)) {
    const now = new Date().getHours() * 60 + new Date().getMinutes();
    const found = steps.findIndex(s => {
      const m = minutesOf(s.t);
      return m !== null && m >= now - 30;
    });
    idx = found === -1 ? steps.length - 1 : found;
  }
  const nudge = state.stopOffset[day.id] || 0;
  return Math.max(0, Math.min(steps.length - 1, idx + nudge));
}

const stepTarget = step =>
  step.saved && placeById[step.saved] ? mapsUrl(placeById[step.saved])
  : step.place ? mapsSearch(step.place + ", Japan") : null;

function stepDirections(step) {
  if (step.saved && placeById[step.saved]) {
    const p = placeById[step.saved];
    return mapsDir((p.maps || p.name) + ", Japan");
  }
  return step.place ? mapsDir(step.place + ", Japan") : null;
}

/* ------------------------------------------------------------ countdown */
/* Target is the real outbound departure: TLV wheels-up at 15:00 Israel time
   on 3 October. Not the KIX arrival, not a midnight boundary. */
const DEPARTURE = () => new Date(trip.departure).getTime();
const pad = n => String(n).padStart(2, "0");

const cdParts = ms => ({
  d: Math.floor(Math.max(0, ms) / 86400000),
  h: Math.floor(Math.max(0, ms) / 3600000) % 24,
  m: Math.floor(Math.max(0, ms) / 60000) % 60,
  s: Math.floor(Math.max(0, ms) / 1000) % 60
});

function countdown() {
  const ms = DEPARTURE() - Date.now();
  if (ms <= 0) return "";                       // trip has started; it goes away
  const p = cdParts(ms);
  const part = (k, v, label) =>
    `<span class="clockpart"><strong data-cd="${k}">${v}</strong><small>${label}</small></span>`;
  return `
    <div class="flight-countdown" id="countdown" role="timer">
      <span class="intro">
        <i class="pip"></i>
        <span class="intro-copy"><b>Flight in</b><span>Japan ${trip.year}</span></span>
      </span>
      <span class="clock">
        ${part("d", p.d, "Days")}<span class="clocksep">:</span>
        ${part("h", pad(p.h), "Hours")}<span class="clocksep">:</span>
        ${part("m", pad(p.m), "Min")}<span class="clocksep">:</span>
        ${part("s", pad(p.s), "Sec")}
      </span>
    </div>`;
}

let cdTimer = null;
function startCountdown(root) {
  clearInterval(cdTimer);
  const el = root.querySelector("#countdown");
  if (!el) return;
  const cells = {};
  el.querySelectorAll("[data-cd]").forEach(n => { cells[n.dataset.cd] = n; });
  const tick = () => {
    const ms = DEPARTURE() - Date.now();
    if (ms <= 0) { clearInterval(cdTimer); el.remove(); return; }
    const p = cdParts(ms);
    cells.d.textContent = p.d;
    cells.h.textContent = pad(p.h);
    cells.m.textContent = pad(p.m);
    cells.s.textContent = pad(p.s);
  };
  tick();
  cdTimer = setInterval(tick, 1000);
}

/* ------------------------------------------------------------ header */

function header(day, dest) {
  const wx = climate[day.dest];
  const n = days.findIndex(d => d.id === day.id) + 1;
  const kicker = `Day ${n} of ${days.length}${day.flexible ? " · flexible" : ""}`;
  return `
    <div class="destination">
      <div class="destination-copy">
        <div class="kicker">${esc(kicker)}</div>
        <h1>${esc(dest.name)}</h1>
        <p class="subtitle">${esc(day.title)}</p>
      </div>
      ${wx ? `<div class="weather">
        <span class="sun">${svg(SKY_ICON[wx.sky] || "partly")}</span>
        <span><b>${wx.hi}°</b><small>${wx.lo}° low</small></span>
      </div>` : ""}
    </div>`;
}

/* ------------------------------------------------------------ hero */

function hero(day, idx) {
  const steps = day.plan || [];
  const step = steps[idx];

  /* A cluster day or a flexible day has no single next thing, so the hero
     carries the recommendation instead of a stop. */
  const lead = day.bank
    ? { name: destById[day.dest].name, label: "Today is yours",
        detail: "One cluster and an evening — never two.",
        when: "Pick one", sub: "", href: `#/day/${day.id}`, dir: null }
    : day.flexible && day.lead
      ? { name: day.lead.name, label: "Ideas for today", detail: day.lead.detail,
          when: "Recommended", sub: "", href: `#/day/${day.id}`,
          dir: day.lead.place ? mapsDir(day.lead.place + ", Japan") : null }
      : step
        ? { name: step.name, label: "Up next", detail: step.detail || "",
            when: timeLabel(step.t),
            sub: step.place || (step.saved && placeById[step.saved]?.name) || "",
            href: `#/day/${day.id}`, dir: stepDirections(step) }
        : null;
  if (!lead) return "";

  const canStep = !day.bank && !day.flexible && steps.length > 1;
  return `
    <div class="hero">
      <div class="hero-image">
        <img src="./assets/${day.dest}.jpg" alt="" decoding="async">
        <span class="hero-label">${esc(lead.label)}</span>
        ${canStep ? `<span class="hero-step">
          <button data-nudge="-1" aria-label="Show previous stop"${idx === 0 ? " disabled" : ""}>${svg("left")}</button>
          <button data-nudge="1" aria-label="Show next stop"${idx >= steps.length - 1 ? " disabled" : ""}>${svg("right")}</button>
        </span>` : ""}
        <div class="hero-copy">
          <h2>${esc(lead.name)}</h2>
          ${lead.detail ? `<p>${esc(lead.detail)}</p>` : ""}
        </div>
      </div>
      <div class="hero-actions">
        <div class="hero-when">
          <b>${esc(lead.when || "")}</b>
          ${lead.sub ? `<span>${esc(lead.sub)}</span>` : ""}
        </div>
        <div class="hero-btns">
          ${lead.dir ? `<a class="btn btn-ghost" href="${lead.dir}" target="_blank" rel="noopener">Directions</a>` : ""}
          <a class="btn btn-light" href="${lead.href}">Details</a>
        </div>
      </div>
    </div>
    ${state.stopOffset[day.id] ? `<button class="resetline" data-reset="${day.id}">Reset to schedule</button>` : ""}`;
}

/* ------------------------------------------------------------ sections */

const sectionHead = (title, link) => `
  <div class="sectionhead">
    <div class="sectiontitle">${esc(title)}</div>
    ${link || ""}
  </div>`;

function routeBlock(day) {
  const nodes = day.route || [];
  if (nodes.length < 2) return "";
  const url = dayRoute(day);
  const flow = nodes.map((r, i) => (i ? `
    <span class="connector"><span class="line"></span><small>${esc(r.via || "")}</small></span>` : "")
    + `<span class="stop">${esc(r.name)}</span>`).join("");
  return `
    <div class="section route">
      <div class="routebox">
        <div class="routehead">
          <div class="sectiontitle">Today's route</div>
          ${url ? `<a href="${url}" target="_blank" rel="noopener">Open route ↗</a>` : ""}
        </div>
        <div class="routeflow">${flow}</div>
      </div>
    </div>`;
}

function timeline(day, activeIdx) {
  const steps = day.plan || [];
  if (!steps.length) return "";
  const rows = steps.map((s, i) => {
    const href = stepTarget(s);
    return `
      <div class="trow${i === activeIdx && isLive(day) ? " now" : ""}">
        <div class="tmeta${isSoft(s.t) ? " soft" : ""}">${esc(timeLabel(s.t))}</div>
        <div class="rail"><span class="dot"></span><span class="linev"></span></div>
        <div class="tbody">
          <h3>${esc(s.name)}</h3>
          ${s.detail ? `<p>${esc(s.detail)}</p>` : ""}
          ${href ? `<a class="maps" href="${href}" target="_blank" rel="noopener"><span class="arrow">→</span> Maps</a>` : ""}
        </div>
      </div>`;
  }).join("");
  return `<div class="section">${sectionHead("Today's plan")}<div class="timeline">${rows}</div></div>`;
}

/* The editorial moment: the strongest researched note becomes the headline,
   the next becomes the tip beneath it. Real notes, never filler. */
function context(day) {
  const all = notesForDay(day.id, day.dest);
  if (!all.length) return "";
  const lead = leadNotes(day.id, day.dest, 3);
  const picked = lead.length ? lead : all.slice(0, 2);
  const main = picked[0], tip = picked[1];
  return `
    <div class="section">
      ${sectionHead("Know before you go", `<a href="#/day/${day.id}">All notes · ${all.length}</a>`)}
      <div class="context">
        <h3>${esc(main.title)}</h3>
        <p>${esc(main.body)}</p>
        ${tip ? `<div class="tip">
          <i>${svg(NOTE_ICON[tip.kind] || "info")}</i>
          <div><b>${esc(tip.title)}</b>${esc(tip.body)}</div>
        </div>` : ""}
      </div>
    </div>`;
}

function savedNearby(day) {
  const ids = (day.saved || []).slice(0, 3).map(id => placeById[id]).filter(Boolean);
  if (!ids.length) return "";
  const rows = ids.map(p => `
    <a class="srow" href="${mapsUrl(p)}" target="_blank" rel="noopener">
      <span class="sq k-${p.cat}">${svg(CAT_ICON[p.cat])}</span>
      <span><b>${esc(p.name)}</b><small>${esc(p.kind || "")}</small></span>
      <span class="where">${esc(p.where || "")}</span>
    </a>`).join("");
  return `
    <div class="section">
      ${sectionHead("Saved near today's plan",
        (day.saved || []).length > 3 ? `<a href="#/saved?area=${day.dest}">See all →</a>` : "")}
      <div class="savedrows">${rows}</div>
    </div>`;
}

function logistics(day) {
  const items = (day.logistics || []).map(id => walletById[id]).filter(Boolean);
  if (!items.length) return "";
  const rows = items.map(w => `
    <a class="lrow" href="#/wallet/${w.id}">
      <span class="lic">${svg(WALLET_ICON[w.kind] || "doc")}</span>
      <span><b>${esc(w.title)}</b><small>${esc(w.detail || w.where || "")}</small></span>
      <span class="chev">${svg("right")}</span>
    </a>`).join("");
  return `<div class="section">${sectionHead("Logistics")}<div class="logistics">${rows}</div></div>`;
}

function clusterBank(day) {
  const bank = clusters[day.bank] || [];
  if (!bank.length) return "";
  const rows = bank.map(c => `
    <div class="bankrow">
      <div class="bankhead">${c.star ? `<span class="star">★</span>` : ""}<b>${esc(c.title)}</b></div>
      <div class="bankwhen">${esc(c.when)}</div>
      <p>${esc(c.body)}</p>
    </div>`).join("");
  return `<div class="section">${sectionHead("Pick one")}<div class="bank">${rows}</div></div>`;
}

function alternatives(day) {
  const n = (day.alts || []).length;
  if (!n) return "";
  return `
    <div class="section">
      <button class="altbtn" data-alts="${day.id}">
        <span class="t">
          <span class="n">Plans changed?</span>
          <span class="s">${n} alternative${n > 1 ? "s" : ""}</span>
        </span>
        ${svg("right")}
      </button>
    </div>`;
}

/* ------------------------------------------------------------ render */

export function render() {
  const day = currentDay();
  const dest = destById[day.dest];
  const idx = upNextIndex(day);

  return {
    eyebrow: dLabel(day.date).toUpperCase(),
    html: `
      <div class="screen today-v10">
        ${countdown()}
        ${header(day, dest)}
        ${hero(day, idx)}
        ${clusterBank(day)}
        ${routeBlock(day)}
        ${timeline(day, idx)}
        ${context(day)}
        ${savedNearby(day)}
        ${logistics(day)}
        ${alternatives(day)}
        <div style="height:var(--s7)"></div>
      </div>`,
    day,
    wire(root, go) {
      startCountdown(root);
      root.querySelectorAll("[data-nudge]").forEach(b =>
        b.addEventListener("click", () => {
          nudge(day.id, Number(b.dataset.nudge));
          go(location.hash);
        }));
      root.querySelectorAll("[data-reset]").forEach(b =>
        b.addEventListener("click", () => {
          delete state.stopOffset[day.id];
          save();
          go(location.hash);
        }));
    }
  };
}

/* Nudging Up Next changes what the app shows and nothing else — it never
   records that a stop happened. */
export function nudge(dayId, delta) {
  state.stopOffset[dayId] = (state.stopOffset[dayId] || 0) + delta;
  save();
}
