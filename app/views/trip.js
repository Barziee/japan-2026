/* Trip, destination and day pages.

   Trip opens on destinations, not dates — the shape of the journey first.
   A destination page is a navigation layer: it links to its days, its stay
   and its saved places rather than restating them. */

import { destinations, byId as destById, trip } from "../../data/destinations.js";
import { days, dayById, daysFor, clusters } from "../../data/days.js";
import { places, placeById, mapsUrl } from "../../data/places.js";
import { notesForDay } from "../../data/notes.js";
import { walletById } from "../../data/wallet.js";
import { climate } from "../../data/lists.js";
import {
  svg, esc, timeLabel, isSoft, dLabel, dShort, rangeLabel,
  mapsSearch, dayRoute, NOTE_ICON, CAT_ICON, WALLET_ICON
} from "../ui.js";

/* ------------------------------------------------------------ /trip */

export function renderTrip() {
  const cards = destinations.map(d => {
    const n = daysFor(d.id).length;
    return `
      <a class="destcard" href="#/trip/${d.id}">
        <span class="t">
          <span class="dates">${esc(rangeLabel(d.from, d.to))}</span>
          <h3 class="display">${esc(d.name)}</h3>
          <span class="n">${d.nights} night${d.nights > 1 ? "s" : ""} · ${n} day${n > 1 ? "s" : ""}</span>
          <span class="l">${esc(d.places)}</span>
        </span>
        <span class="art"><span class="ja">${esc(d.ja)}</span></span>
      </a>`;
  }).join("");

  return {
    eyebrow: "Your journey",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s5)">
          <div style="font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral)">
            ${esc(trip.title)} · ${trip.year}
          </div>
          <h1 class="display" style="font-size:42px;margin-top:8px">Your trip</h1>
          <div class="muted tiny" style="margin-top:7px">
            ${esc(rangeLabel(trip.from, trip.to))} · ${trip.nights} nights · Osaka to Tokyo
          </div>
        </div>
        <div class="sect">The journey</div>
        ${cards}
        <div style="height:var(--s7)"></div>
      </div>`
  };
}

/* ------------------------------------------------------------ /trip/:id */

export function renderDestination(id) {
  const d = destById[id];
  if (!d) return null;
  const list = daysFor(id);
  const stay = walletById[d.hotel];
  const wx = climate[id];
  const saved = places.filter(p => p.area === id);

  const dayRows = list.map(x => `
    <a class="lrow" href="#/day/${x.id}">
      <span class="t">
        <span class="n">${esc(x.dow)} ${dShort(x.date).split(" ")[1]} · ${esc(x.title)}</span>
        <span class="s">${(x.plan || []).length} stop${(x.plan || []).length === 1 ? "" : "s"}${x.flexible ? " · flexible" : ""}</span>
      </span>
      <span class="go">${svg("right")}</span>
    </a>`).join("");

  return {
    eyebrow: d.name,
    back: "#/trip",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s5)">
          <h1 class="display" style="font-size:42px">${esc(d.name)}</h1>
          <div class="muted tiny" style="margin-top:8px">
            ${esc(d.ja)} · ${esc(rangeLabel(d.from, d.to))} · ${d.nights} night${d.nights > 1 ? "s" : ""}
          </div>
          <p class="muted" style="margin-top:12px;font-size:14px">${esc(d.line)}</p>
        </div>

        ${wx ? `<div class="card" style="padding:14px var(--s4);display:flex;gap:var(--s4);align-items:center">
          <span class="ic" style="color:var(--ink3)">${svg("cloud")}</span>
          <div style="flex:1">
            <div style="font-size:14px;font-weight:600">${wx.hi}° / ${wx.lo}°</div>
            <div class="tiny muted">${esc(wx.text)}</div>
          </div>
        </div>` : ""}

        <div class="sect">Your days</div>
        <div>${dayRows}</div>

        ${stay ? `
          <div class="sect">Staying</div>
          <a class="lrow" href="#/wallet/${stay.id}">
            <span class="ic">${svg("bed")}</span>
            <span class="t">
              <span class="n">${esc(stay.title)}</span>
              <span class="s">${esc(stay.where || "")}${stay.detail ? " · " + esc(stay.detail) : ""}</span>
            </span>
            <span class="go">${svg("right")}</span>
          </a>` : ""}

        ${saved.length ? `
          <div class="sect">Saved here
            <a class="more" href="#/saved?area=${id}">See all ${saved.length} →</a>
          </div>
          ${saved.slice(0, 4).map(p => `
            <a class="lrow" href="${mapsUrl(p)}" target="_blank" rel="noopener">
              <span class="ic">${svg(CAT_ICON[p.cat])}</span>
              <span class="t">
                <span class="n">${esc(p.name)}</span>
                <span class="s">${esc(p.where || "")}</span>
              </span>
              <span class="go">${svg("out")}</span>
            </a>`).join("")}` : ""}

        <div style="height:var(--s7)"></div>
      </div>`
  };
}

/* ------------------------------------------------------------ /day/:id */

export function renderDay(id) {
  const day = dayById[id];
  if (!day) return null;
  const dest = destById[day.dest];
  const all = notesForDay(day.id, day.dest);
  const url = dayRoute(day);

  const steps = (day.plan || []).map(s => {
    const href = s.saved && placeById[s.saved] ? mapsUrl(placeById[s.saved])
               : s.place ? mapsSearch(s.place + ", Japan") : null;
    return `
      <div class="tl">
        <div class="time${isSoft(s.t) ? " soft" : ""}">${esc(timeLabel(s.t))}</div>
        <div class="rail"><span class="dot"></span><span class="line"></span></div>
        <div class="body">
          <h4>${esc(s.name)}</h4>
          ${s.detail ? `<p>${esc(s.detail)}</p>` : ""}
          ${href ? `<a class="meta" href="${href}" target="_blank" rel="noopener">${svg("pin")}Maps</a>` : ""}
        </div>
      </div>`;
  }).join("");

  const noteItems = all.map(n => `
    <div class="note">
      <span class="g g-${n.kind}">${svg(NOTE_ICON[n.kind] || "info")}</span>
      <div><h4>${esc(n.title)}</h4><p>${esc(n.body)}</p></div>
    </div>`).join("");

  const logi = (day.logistics || []).map(w => walletById[w]).filter(Boolean);

  return {
    eyebrow: dLabel(day.date).toUpperCase(),
    back: `#/trip/${day.dest}`,
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s4)">
          <div class="tiny muted">${esc(dest.name)}</div>
          <h1 class="display" style="font-size:34px;margin-top:6px">${esc(day.title)}</h1>
        </div>

        ${day.bank && (clusters[day.bank] || []).length ? `
          <div class="sect">Pick one cluster</div>
          ${clusters[day.bank].map(c => `
            <div style="padding:15px 0;border-bottom:1px solid var(--line)">
              <div style="display:flex;align-items:baseline;gap:7px">
                ${c.star ? '<span style="color:var(--coral);font-size:12px">\u2605</span>' : ""}
                <div style="font-size:15.5px;font-weight:650">${esc(c.title)}</div>
              </div>
              <div style="font-size:12px;font-weight:600;color:var(--teal);margin-top:3px">${esc(c.when)}</div>
              <p class="muted tiny" style="margin-top:6px">${esc(c.body)}</p>
            </div>`).join("")}` : ""}

        ${day.flexible && day.lead ? `
          <div class="card" style="padding:var(--s4)">
            <div style="font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal)">Recommended</div>
            <div style="font-size:17px;font-weight:650;margin-top:6px">${esc(day.lead.name)}</div>
            <p class="muted tiny" style="margin-top:4px">${esc(day.lead.detail)}</p>
          </div>` : ""}

        ${(day.route || []).length > 1 ? `
          <div class="sect">Route
            ${url ? `<a class="more" href="${url}" target="_blank" rel="noopener">Open route ↗</a>` : ""}
          </div>
          <div class="routestrip">${day.route.map((r, i) => (i ? `
            <div class="rlink"><div class="bar"></div><div class="v">${esc(r.via || "")}</div></div>` : "")
            + `<div class="rnode"><div class="n">${esc(r.name)}</div></div>`).join("")}</div>` : ""}

        ${steps ? `<div class="sect">The plan</div><div class="timeline">${steps}</div>` : ""}
        ${noteItems ? `<div class="sect">Know before you go</div>${noteItems}` : ""}

        ${logi.length ? `<div class="sect">Logistics</div>` + logi.map(w => `
          <a class="lrow" href="#/wallet/${w.id}">
            <span class="ic">${svg(WALLET_ICON[w.kind] || "doc")}</span>
            <span class="t"><span class="n">${esc(w.title)}</span><span class="s">${esc(w.detail || "")}</span></span>
            <span class="go">${svg("right")}</span>
          </a>`).join("") : ""}

        ${(day.alts || []).length ? `
          <div class="sect">If plans change</div>
          ${day.alts.map(a => `
            <div style="padding:14px 0;border-bottom:1px solid var(--line)">
              <div style="font-size:14.5px;font-weight:650">${esc(a.title)}</div>
              ${a.when ? `<div style="font-size:12px;font-weight:600;color:var(--teal);margin-top:3px">${esc(a.when)}</div>` : ""}
              <p class="muted tiny" style="margin-top:5px">${esc(a.body)}</p>
            </div>`).join("")}` : ""}

        <div style="height:var(--s7)"></div>
      </div>`
  };
}
