/* Global search — a fast index of the trip research.

   Typing a place name is the main case: "Kyoto" returns every saved Kyoto
   place grouped by category, and "Osaka" works too even though it is a day
   out rather than a base. The food chips under the box answer the other
   common question — "where was that ramen place?" — across every area at
   once, and narrow a typed search when both are used. Days and notes come
   after places, because the usual question is "what did we save around here?" */

import { places, CATEGORIES, FOOD_TYPES } from "../../data/places.js";
import { areas, areaById } from "../../data/destinations.js";
import { days } from "../../data/days.js";
import { notes } from "../../data/notes.js";
import { placeRow, wirePlaceRows, haystack } from "./saved.js";
import { svg, esc, dLabel, rangeLabel, nights } from "../ui.js";

const norm = s => String(s || "").toLowerCase();

function matchArea(q) {
  return areas.find(a => norm(a.name).startsWith(q) || norm(a.ja).includes(q) || (a.he || "").startsWith(q));
}

const group = (title, list) => list.length ? `
  <div class="sectionhead"><div class="sectiontitle">${esc(title)}</div></div>
  <div class="savedrows">${list.map(placeRow).join("")}</div>` : "";

export function results(raw, type = null) {
  const q = norm(raw).trim();
  if (!q && !type) return "";

  const area = q ? matchArea(q) : null;
  const typeLabel = type ? FOOD_TYPES.find(t => t.id === type)?.label : "";

  /* An area query means "show me everything there", so the area does the
     work rather than plain text matching. */
  let matched = !q ? places
    : area ? places.filter(p => p.area === area.id)
    : places.filter(p => haystack(p).includes(q));
  if (type) matched = matched.filter(p => (p.food || []).includes(type));

  let html = "";

  if (area && !area.daytrip) {
    html += `
      <a class="destcard" href="#/trip/${area.id}" style="margin-top:var(--s3)">
        <span class="t">
          <span class="dates">${esc(rangeLabel(area.from, area.to))}</span>
          <h3 class="display">${esc(area.name)}</h3>
          <span class="n">${nights(area.nights)}</span>
        </span>
        <span class="art"><span class="ja">${esc(area.ja)}</span></span>
      </a>`;
  }

  if (type) {
    /* One food type across the whole trip reads best by where it is. */
    for (const a of [...areas, { id: null, name: "בדרך ובמקומות אחרים" }])
      html += group(a.name, matched.filter(p => (p.area || null) === a.id));
  } else {
    /* Grouped by category, in the order the categories are defined. */
    for (const c of CATEGORIES) html += group(c.label, matched.filter(p => p.cat === c.id));
  }

  if (q) {
    const dayHits = days.filter(d =>
      norm(d.title).includes(q) ||
      (d.plan || []).some(s => norm(s.name).includes(q)));
    if (dayHits.length && !type) {
      html += `<div class="sectionhead"><div class="sectiontitle">ימים</div></div>` + dayHits.slice(0, 6).map(d => `
        <a class="lrow" href="#/day/${d.id}">
          <span class="ic">${svg("today")}</span>
          <span class="t"><span class="n">${esc(d.title)}</span>
          <span class="s">${esc(dLabel(d.date))}</span></span>
          <span class="go">${svg("right")}</span>
        </a>`).join("");
    }

    const noteHits = notes.filter(n =>
      norm(n.title).includes(q) || norm(n.body).includes(q));
    if (noteHits.length && !type) {
      html += `<div class="sectionhead"><div class="sectiontitle">הערות</div></div>` + noteHits.slice(0, 6).map(n => `
        <div class="note k-${n.kind}" style="padding-top:var(--s2)">
          <span class="g g-${n.kind}">${svg("info")}</span>
          <div><h4>${esc(n.title)}</h4><p>${esc(n.body)}</p></div>
        </div>`).join("");
    }
  }

  if (html) return html;
  return type
    ? `<div class="empty">לא מצאתי ${esc(typeLabel)} עם ״${esc(raw)}״.</div>`
    : `<div class="empty">לא מצאתי כלום על ״${esc(raw)}״.</div>`;
}

export function mount(go) {
  /* Only types we actually have a place for; the rest would be dead ends. */
  const types = FOOD_TYPES.filter(t => places.some(p => (p.food || []).includes(t.id)));

  const el = document.createElement("section");
  el.className = "searchwrap";
  el.innerHTML = `
    <div class="searchbar">
      <div class="box">
        ${svg("search")}
        <input id="q" type="search" placeholder="חיפוש: מקומות, אוכל, ימים, הערות"
               autocomplete="off" autocapitalize="off" spellcheck="false"
               enterkeyhint="search" aria-label="חיפוש בכל הטיול">
      </div>
      <button class="btn btn-text" id="cancel">ביטול</button>
    </div>
    <div class="searchtypes">
      <div class="pillrow foods" role="group" aria-label="סוג אוכל">${types.map(t => `
        <button class="pill" data-type="${t.id}" aria-pressed="false">${esc(t.label)}</button>`).join("")}
      </div>
    </div>
    <div class="searchresults v10" id="out"></div>`;
  document.body.appendChild(el);

  const input = el.querySelector("#q");
  const out = el.querySelector("#out");
  let type = null;

  const run = () => {
    out.innerHTML = results(input.value, type);
    wirePlaceRows(out);
    out.querySelectorAll("a[href^='#/']").forEach(a =>
      a.addEventListener("click", () => close()));
  };

  el.querySelectorAll("[data-type]").forEach(b =>
    b.addEventListener("click", () => {
      type = type === b.dataset.type ? null : b.dataset.type;
      el.querySelectorAll("[data-type]").forEach(x =>
        x.setAttribute("aria-pressed", String(x.dataset.type === type)));
      out.scrollTop = 0;
      run();
    }));

  let t;
  input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(run, 90); });
  el.querySelector("#cancel").addEventListener("click", () => close());

  function open() {
    el.classList.add("on");
    /* iOS only raises the keyboard for a focus inside the same gesture. */
    input.focus({ preventScroll: true });
    if (input.value || type) run();
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
