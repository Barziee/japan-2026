/* Today — the home screen, always.

   Order follows the brief: where we are, what is next, the shape of the day,
   the plan, what we already learned about this place, saved things nearby,
   logistics, then alternatives. Every section renders only if it has
   something to say. */

import { days } from "../../data/days.js";
import { byId as destById, trip } from "../../data/destinations.js";
import { placeById, mapsUrl } from "../../data/places.js";
import { notesForDay, leadNotes } from "../../data/notes.js";
import { walletById } from "../../data/wallet.js";
import { climate } from "../../data/lists.js";
import { state, save } from "../store.js";
import {
  svg, esc, timeLabel, isSoft, minutesOf, dLabel, mapsSearch, mapsDir,
  dayRoute, NOTE_ICON, CAT_ICON, WALLET_ICON, MODE_ICON
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

function stepTarget(step) {
  if (step.saved && placeById[step.saved]) return mapsUrl(placeById[step.saved]);
  if (step.place) return mapsSearch(step.place + ", Japan");
  return null;
}

function stepDirections(step) {
  if (step.saved && placeById[step.saved]) {
    const p = placeById[step.saved];
    return mapsDir((p.maps || p.name) + ", Japan");
  }
  if (step.place) return mapsDir(step.place + ", Japan");
  return null;
}

/* ------------------------------------------------------------ countdown */

function countdown() {
  const ms = new Date(trip.departure) - Date.now();
  if (ms <= 0) return "";
  const d = Math.floor(ms / 86400000);
  const h = Math.floor(ms / 3600000) % 24;
  return `<div class="countdown"><i></i>Flight in ${d}d ${h}h</div>`;
}

/* ------------------------------------------------------------ sections */

function routeStrip(day) {
  if (!(day.route || []).length || day.route.length < 2) return "";
  const url = dayRoute(day);
  const nodes = day.route.map((r, i) => {
    const link = i === 0 ? "" : `
      <div class="rlink">
        <div class="bar"></div>
        <div class="v">${esc(r.via || "")}</div>
      </div>`;
    return link + `<div class="rnode"><div class="n">${esc(r.name)}</div></div>`;
  }).join("");

  return `
    <div class="sect">Today's route
      ${url ? `<a class="more" href="${url}" target="_blank" rel="noopener">Open route ↗</a>` : ""}
    </div>
    <div class="routestrip">${nodes}</div>`;
}

function timeline(day, activeIdx) {
  const steps = day.plan || [];
  if (!steps.length) return "";

  const rows = steps.map((s, i) => {
    const label = timeLabel(s.t);
    const soft = isSoft(s.t);
    const href = stepTarget(s);
    const mode = s.mode && MODE_ICON[s.mode];
    return `
      <div class="tl${i === activeIdx && isLive(day) ? " now" : ""}">
        <div class="time${soft ? " soft" : ""}">${esc(label)}</div>
        <div class="rail"><span class="dot"></span><span class="line"></span></div>
        <div class="body">
          <h4>${esc(s.name)}</h4>
          ${s.detail ? `<p>${esc(s.detail)}</p>` : ""}
          ${href ? `<a class="meta" href="${href}" target="_blank" rel="noopener">${svg("pin")}Maps</a>` : ""}
          ${mode ? `<span class="meta">${svg(mode)}</span>` : ""}
        </div>
      </div>`;
  }).join("");

  return `<div class="sect">Today's plan</div><div class="timeline">${rows}</div>`;
}

function knowBefore(day) {
  const all = notesForDay(day.id, day.dest);
  if (!all.length) return "";
  const lead = leadNotes(day.id, day.dest, 3);
  const shown = lead.length ? lead : all.slice(0, 2);
  const rest = all.length - shown.length;

  const items = shown.map(n => `
    <div class="note">
      <span class="g g-${n.kind}">${svg(NOTE_ICON[n.kind] || "info")}</span>
      <div><h4>${esc(n.title)}</h4><p>${esc(n.body)}</p></div>
    </div>`).join("");

  return `
    <div class="sect">Know before you go
      ${rest > 0 ? `<a class="more" href="#/day/${day.id}">All notes · ${all.length}</a>` : ""}
    </div>
    ${items}`;
}

function savedNearby(day) {
  const ids = day.saved || [];
  if (!ids.length) return "";
  const shown = ids.slice(0, 3).map(id => placeById[id]).filter(Boolean);
  if (!shown.length) return "";

  const rows = shown.map(p => `
    <a class="lrow" href="${mapsUrl(p)}" target="_blank" rel="noopener">
      <span class="ic">${svg(CAT_ICON[p.cat])}</span>
      <span class="t">
        <span class="n">${esc(p.name)}</span>
        <span class="s">${esc(p.note ? p.note.split(". ")[0] + "." : p.where || "")}</span>
      </span>
      <span class="go">${esc(p.where || "")}</span>
    </a>`).join("");

  return `
    <div class="sect">Saved near today's plan
      ${ids.length > 3 ? `<a class="more" href="#/saved?area=${day.dest}">See all ${ids.length} →</a>` : ""}
    </div>
    <div>${rows}</div>`;
}

function logistics(day) {
  const ids = day.logistics || [];
  if (!ids.length) return "";
  const items = ids.map(id => walletById[id]).filter(Boolean);
  if (!items.length) return "";

  const rows = items.map(w => `
    <a class="lrow" href="#/wallet/${w.id}">
      <span class="ic">${svg(WALLET_ICON[w.kind] || "doc")}</span>
      <span class="t">
        <span class="n">${esc(w.title)}</span>
        <span class="s">${esc(w.detail || "")}</span>
      </span>
      <span class="go">${svg("right")}</span>
    </a>`).join("");

  return `<div class="sect">Logistics</div><div>${rows}</div>`;
}

function alternatives(day) {
  const n = (day.alts || []).length;
  if (!n) return "";
  return `
    <div style="margin-top:var(--s6)">
      <button class="altbtn" data-alts="${day.id}">
        <span class="t">
          <span class="n">Plans changed?</span>
          <span class="s">${n} alternative${n > 1 ? "s" : ""}</span>
        </span>
        ${svg("right")}
      </button>
    </div>`;
}

/* ------------------------------------------------------------ up next */

const stepBtn = (delta, label, icon, off) =>
  `<button class="iconbtn step" data-nudge="${delta}" aria-label="${label}"${off ? " disabled" : ""}>${svg(icon)}</button>`;

function upNext(day, idx) {
  /* A flexible day has no fixed next stop — it has a recommendation. */
  if (day.flexible && day.lead) {
    const p = day.lead;
    return `
      <div class="upnext">
        <div class="body">
          <span class="tag">Ideas for today</span>
          <h2 class="display">${esc(p.name)}</h2>
          <div class="sub">${esc(p.detail)}</div>
          <div class="acts">
            ${p.place ? `<a class="btn btn-secondary" href="${mapsDir(p.place + ", Japan")}" target="_blank" rel="noopener">Directions</a>` : ""}
            <a class="btn btn-primary" href="#/day/${day.id}">View details</a>
          </div>
        </div>
      </div>`;
  }

  const step = (day.plan || [])[idx];
  if (!step) return "";
  const dir = stepDirections(step);
  const label = timeLabel(step.t);
  const leg = (day.route || []).find(r => r.name === step.name && r.via);

  return `
    <div class="upnext">
      <div class="body">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--s2)">
          <span class="tag">Up next</span>
          <span class="nudge">
            ${stepBtn("-1", "Show previous stop", "left", idx === 0)}
            ${stepBtn("1", "Show next stop", "right", idx >= (day.plan || []).length - 1)}
          </span>
        </div>
        <h2 class="display">${esc(step.name)}</h2>
        ${step.detail ? `<div class="sub">${esc(step.detail)}</div>` : ""}
        ${label ? `<div class="when">${isSoft(step.t) ? "" : "Planned around "}${esc(label)}</div>` : ""}
        ${leg ? `<div class="how">${esc(leg.via)}</div>` : ""}
        <div class="acts">
          ${dir ? `<a class="btn btn-secondary" href="${dir}" target="_blank" rel="noopener">Directions</a>` : ""}
          <a class="btn btn-primary" href="#/day/${day.id}">View details</a>
          ${state.stopOffset[day.id] ? `<button class="btn btn-text" data-reset="${day.id}">Reset to schedule</button>` : ""}
        </div>
      </div>
    </div>`;
}

/* ------------------------------------------------------------ render */

export function render() {
  const day = currentDay();
  const dest = destById[day.dest];
  const wx = climate[day.dest];
  const idx = upNextIndex(day);

  return {
    eyebrow: dLabel(day.date).toUpperCase(),
    html: `
      <div class="screen">
        ${countdown()}
        <div class="todayhead">
          <div>
            <h1 class="display">${esc(dest.name)}</h1>
            <div class="ja">${esc(dest.ja)} · ${esc(day.title)}</div>
          </div>
          ${wx ? `<div class="wx">
            <div class="t">${wx.hi}°</div>
            <div class="d">${esc(wx.text)} · ${wx.lo}°</div>
          </div>` : ""}
        </div>
        ${upNext(day, idx)}
        ${routeStrip(day)}
        ${timeline(day, idx)}
        ${knowBefore(day)}
        ${savedNearby(day)}
        ${logistics(day)}
        ${alternatives(day)}
        <div style="height:var(--s7)"></div>
      </div>`,
    day,
    wire(root, go) {
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
