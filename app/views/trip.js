/* Trip, destination and day pages, on the v10 system.

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
  mapsSearch, dayRoute, NOTE_ICON, CAT_ICON, WALLET_ICON, SKY_ICON
} from "../ui.js";

const sectionHead = (title, link) => `
  <div class="sectionhead">
    <div class="sectiontitle">${esc(title)}</div>
    ${link || ""}
  </div>`;

const weatherBox = wx => wx ? `
  <div class="weather">
    <span class="sun">${svg(SKY_ICON[wx.sky] || "partly")}</span>
    <span><b>${wx.hi}°</b><small>${wx.lo}° low</small></span>
  </div>` : "";

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
        <span class="art"><img src="./assets/${d.id}.jpg" alt="" loading="lazy" decoding="async"></span>
      </a>`;
  }).join("");

  return {
    eyebrow: "Your journey",
    html: `
      <div class="screen v10">
        <div class="destination">
          <div class="destination-copy">
            <div class="kicker">${esc(trip.title)} · ${trip.year}</div>
            <h1>Noa &amp; Bar</h1>
            <p class="subtitle">${esc(rangeLabel(trip.from, trip.to))} · ${trip.nights} nights · Osaka all the way to Tokyo</p>
          </div>
        </div>
        <div class="section">
          ${sectionHead("The journey")}
          ${cards}
        </div>
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
  const saved = places.filter(p => p.area === id);

  const dayRows = list.map(x => `
    <a class="drow" href="#/day/${x.id}">
      <span class="dwhen">${esc(x.dow)} ${dShort(x.date).split(" ")[1]}</span>
      <span class="dwhat">
        <b>${esc(x.title)}</b>
        <small>${x.flexible ? "Flexible" : (x.plan || []).length + " stop" + ((x.plan || []).length === 1 ? "" : "s")}</small>
      </span>
      <span class="chev">${svg("right")}</span>
    </a>`).join("");

  return {
    eyebrow: d.name,
    back: "#/trip",
    html: `
      <div class="screen v10">
        <div class="destbanner"><img src="./assets/${d.id}.jpg" alt="" decoding="async"></div>
        <div class="destination">
          <div class="destination-copy">
            <div class="kicker">${esc(rangeLabel(d.from, d.to))} · ${d.nights} night${d.nights > 1 ? "s" : ""}</div>
            <h1>${esc(d.name)}</h1>
            <p class="subtitle">${esc(d.line)}</p>
          </div>
          ${weatherBox(climate[id])}
        </div>

        <div class="section">
          ${sectionHead("Your days")}
          <div class="drows">${dayRows}</div>
        </div>

        ${stay ? `
          <div class="section">
            ${sectionHead("Staying")}
            <div class="logistics">
              <a class="lrow" href="#/wallet/${stay.id}">
                <span class="lic">${svg("bed")}</span>
                <span><b>${esc(stay.title)}</b><small>${esc(stay.where || "")}${stay.detail ? " · " + esc(stay.detail) : ""}</small></span>
                <span class="chev">${svg("right")}</span>
              </a>
            </div>
          </div>` : ""}

        ${saved.length ? `
          <div class="section">
            ${sectionHead("Saved here", `<a href="#/saved?area=${id}">See all ${saved.length} →</a>`)}
            <div class="savedrows">
              ${saved.slice(0, 4).map(p => `
                <a class="srow" href="${mapsUrl(p)}" target="_blank" rel="noopener">
                  <span class="sq k-${p.cat}">${svg(CAT_ICON[p.cat])}</span>
                  <span><b>${esc(p.name)}</b><small>${esc(p.kind || "")}</small></span>
                  <span class="where">${esc(p.where || "")}</span>
                </a>`).join("")}
            </div>
          </div>` : ""}

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
  const n = days.findIndex(x => x.id === day.id) + 1;

  const steps = (day.plan || []).map(s => {
    const href = s.saved && placeById[s.saved] ? mapsUrl(placeById[s.saved])
               : s.place ? mapsSearch(s.place + ", Japan") : null;
    return `
      <div class="trow">
        <div class="tmeta${isSoft(s.t) ? " soft" : ""}">${esc(timeLabel(s.t))}</div>
        <div class="rail"><span class="dot"></span><span class="linev"></span></div>
        <div class="tbody">
          <h3>${esc(s.name)}</h3>
          ${s.detail ? `<p>${esc(s.detail)}</p>` : ""}
          ${href ? `<a class="maps" href="${href}" target="_blank" rel="noopener"><span class="arrow">→</span> Maps</a>` : ""}
        </div>
      </div>`;
  }).join("");

  /* The first note takes the sand editorial surface; the rest stay a flat
     list so the headline still reads as the headline. */
  const [head, ...rest] = all;
  const notes = all.length ? `
    <div class="section">
      ${sectionHead("Know before you go")}
      <div class="context">
        <h3>${esc(head.title)}</h3>
        <p>${esc(head.body)}</p>
      </div>
      ${rest.length ? `<div class="notelist">${rest.map(x => `
        <div class="noterow">
          <span class="ng g-${x.kind}">${svg(NOTE_ICON[x.kind] || "info")}</span>
          <div><b>${esc(x.title)}</b><p>${esc(x.body)}</p></div>
        </div>`).join("")}</div>` : ""}
    </div>` : "";

  const logi = (day.logistics || []).map(w => walletById[w]).filter(Boolean);

  return {
    eyebrow: dLabel(day.date).toUpperCase(),
    back: `#/trip/${day.dest}`,
    html: `
      <div class="screen v10">
        <div class="destination">
          <div class="destination-copy">
            <div class="kicker">Day ${n} of ${days.length} · ${esc(dest.name)}</div>
            <h1 class="dayname">${esc(day.title)}</h1>
          </div>
          ${weatherBox(climate[day.dest])}
        </div>

        ${day.bank && (clusters[day.bank] || []).length ? `
          <div class="section">
            ${sectionHead("Pick one cluster")}
            <div class="bank">${clusters[day.bank].map(c => `
              <div class="bankrow">
                <div class="bankhead">${c.star ? `<span class="star">★</span>` : ""}<b>${esc(c.title)}</b></div>
                <div class="bankwhen">${esc(c.when)}</div>
                <p>${esc(c.body)}</p>
              </div>`).join("")}</div>
          </div>` : ""}

        ${day.flexible && day.lead ? `
          <div class="section">
            ${sectionHead("Recommended")}
            <div class="context">
              <h3>${esc(day.lead.name)}</h3>
              <p>${esc(day.lead.detail)}</p>
            </div>
          </div>` : ""}

        ${(day.route || []).length > 1 ? `
          <div class="section route">
            <div class="routebox">
              <div class="routehead">
                <div class="sectiontitle">Route</div>
                ${url ? `<a href="${url}" target="_blank" rel="noopener">Open route ↗</a>` : ""}
              </div>
              <div class="routeflow">${day.route.map((r, i) => (i ? `
                <span class="connector"><span class="line"></span><small>${esc(r.via || "")}</small></span>` : "")
                + `<span class="stop">${esc(r.name)}</span>`).join("")}</div>
            </div>
          </div>` : ""}

        ${steps ? `<div class="section">${sectionHead("The plan")}<div class="timeline">${steps}</div></div>` : ""}
        ${notes}

        ${logi.length ? `
          <div class="section">
            ${sectionHead("Logistics")}
            <div class="logistics">${logi.map(w => `
              <a class="lrow" href="#/wallet/${w.id}">
                <span class="lic">${svg(WALLET_ICON[w.kind] || "doc")}</span>
                <span><b>${esc(w.title)}</b><small>${esc(w.detail || w.where || "")}</small></span>
                <span class="chev">${svg("right")}</span>
              </a>`).join("")}</div>
          </div>` : ""}

        ${(day.alts || []).length ? `
          <div class="section">
            ${sectionHead("If plans change")}
            <div class="bank">${day.alts.map(a => `
              <div class="bankrow">
                <div class="bankhead"><b>${esc(a.title)}</b></div>
                ${a.when ? `<div class="bankwhen">${esc(a.when)}</div>` : ""}
                <p>${esc(a.body)}</p>
              </div>`).join("")}</div>
          </div>` : ""}

        <div style="height:var(--s7)"></div>
      </div>`
  };
}
