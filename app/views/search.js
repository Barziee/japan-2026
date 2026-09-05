/* Global search — a fast index of the trip research.

   Typing a destination name is the main case: "Osaka" should return every
   saved Osaka place grouped by category. Days and notes come after places,
   because the usual question is "what did we save around here?" */

import { places, CATEGORIES } from "../../data/places.js";
import { destinations, byId as destById } from "../../data/destinations.js";
import { days } from "../../data/days.js";
import { notes } from "../../data/notes.js";
import { placeRow, wirePlaceRows } from "./saved.js";
import { svg, esc, dLabel, rangeLabel } from "../ui.js";

const norm = s => String(s || "").toLowerCase();

function matchDestination(q) {
  return destinations.find(d => norm(d.name).startsWith(q) || norm(d.ja).includes(q));
}

export function results(raw) {
  const q = norm(raw).trim();
  if (q.length < 1) return "";

  const dest = matchDestination(q);

  /* A destination query means "show me everything there", so the area
     filter does the work rather than plain text matching. */
  const matched = dest
    ? places.filter(p => p.area === dest.id)
    : places.filter(p =>
        norm(p.name).includes(q) || norm(p.ja).includes(q) ||
        norm(p.where).includes(q) || norm(p.note).includes(q) ||
        norm(destById[p.area]?.name).includes(q));

  let html = "";

  if (dest) {
    html += `
      <a class="destcard" href="#/trip/${dest.id}" style="margin-top:var(--s3)">
        <span class="t">
          <span class="dates">${esc(rangeLabel(dest.from, dest.to))}</span>
          <h3 class="display">${esc(dest.name)}</h3>
          <span class="n">${dest.nights} nights</span>
        </span>
        <span class="art"><span class="ja">${esc(dest.ja)}</span></span>
      </a>`;
  }

  /* Grouped by category, in the order the categories are defined. */
  for (const c of CATEGORIES) {
    const group = matched.filter(p => p.cat === c.id);
    if (!group.length) continue;
    html += `<div class="sect">${esc(c.label)}</div>
             <div class="rows">${group.map(placeRow).join("")}</div>`;
  }

  const dayHits = days.filter(d =>
    norm(d.title).includes(q) ||
    (d.plan || []).some(s => norm(s.name).includes(q)));
  if (dayHits.length) {
    html += `<div class="sect">Days</div>` + dayHits.slice(0, 6).map(d => `
      <a class="lrow" href="#/day/${d.id}">
        <span class="ic">${svg("today")}</span>
        <span class="t"><span class="n">${esc(d.title)}</span>
        <span class="s">${esc(dLabel(d.date))}</span></span>
        <span class="go">${svg("right")}</span>
      </a>`).join("");
  }

  const noteHits = notes.filter(n =>
    norm(n.title).includes(q) || norm(n.body).includes(q));
  if (noteHits.length) {
    html += `<div class="sect">Notes</div>` + noteHits.slice(0, 6).map(n => `
      <div class="note k-${n.kind}" style="padding-top:var(--s2)">
        <span class="g g-${n.kind}">${svg("info")}</span>
        <div><h4>${esc(n.title)}</h4><p>${esc(n.body)}</p></div>
      </div>`).join("");
  }

  return html || `<div class="empty">Nothing matches “${esc(raw)}”.</div>`;
}

export function mount(go) {
  const el = document.createElement("section");
  el.className = "searchwrap";
  el.innerHTML = `
    <div class="searchbar">
      <div class="box">
        ${svg("search")}
        <input id="q" type="search" placeholder="Search places, days, notes"
               autocomplete="off" autocapitalize="off" spellcheck="false"
               enterkeyhint="search" aria-label="Search the trip">
      </div>
      <button class="btn btn-text" id="cancel">Cancel</button>
    </div>
    <div class="searchresults" id="out"></div>`;
  document.body.appendChild(el);

  const input = el.querySelector("#q");
  const out = el.querySelector("#out");

  const run = () => {
    out.innerHTML = results(input.value);
    wirePlaceRows(out);
    out.querySelectorAll("a[href^='#/']").forEach(a =>
      a.addEventListener("click", () => close()));
  };

  let t;
  input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(run, 90); });
  el.querySelector("#cancel").addEventListener("click", () => close());

  function open() {
    el.classList.add("on");
    /* iOS only raises the keyboard for a focus inside the same gesture. */
    input.focus({ preventScroll: true });
    if (input.value) run();
  }
  function close() {
    el.classList.remove("on");
    input.blur();
  }

  addEventListener("keydown", e => {
    if (e.key === "Escape" && el.classList.contains("on")) close();
  });

  return { open, close, isOpen: () => el.classList.contains("on") };
}
