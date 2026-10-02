/* Suggested day plans and the day's loose ideas, shared by Today and the day
   page.

   Nothing here is a schedule. A plan becomes this day's plan only when we
   pick it, the pick lives on the phone, and picking it again clears it. The
   picked plan is listed first and opens by itself; the rest stay closed so
   the list reads as choices, not as a day to get through. */

import { clusters } from "../../data/days.js";
import { placeById, mapsUrl } from "../../data/places.js";
import { pickedPlan, togglePick } from "../store.js";
import { svg, esc, timeLabel, isSoft, mapsSearch, dowLabel } from "../ui.js";

const TITLE = { kyoto: "תוכניות יום מוכנות", tokyo: "בוחרים אזור אחד" };

/* What the hero says on a day with no pick yet. */
export const BANK_LEAD = {
  kyoto: "רעיונות, לא לו״ז. בוחרים תוכנית מלמטה, או שלא בוחרים כלום.",
  tokyo: "אזור אחד וערב. אף פעם לא שניים."
};

const META_ICON = { train: "train", bus: "bus", car: "car", walk: "walk", clock: "clock" };

const sectionHead = title => `
  <div class="sectionhead"><div class="sectiontitle">${esc(title)}</div></div>`;

const dayTag = day => dowLabel(day.date);

export function pickFor(day) {
  const id = pickedPlan(day.id);
  return id ? (clusters[day.bank] || []).find(c => c.id === id) || null : null;
}

/* Saved places as small tappable chips that open Google Maps. */
export function placeChips(ids = []) {
  const list = ids.map(id => placeById[id]).filter(Boolean);
  if (!list.length) return "";
  return `<div class="pchips">${list.map(p => `
    <a class="pchip" href="${mapsUrl(p)}" target="_blank" rel="noopener">
      <i class="k-${p.cat}"></i>${esc(p.name)}
    </a>`).join("")}</div>`;
}

function stepRows(steps) {
  return steps.map(s => {
    const href = s.saved && placeById[s.saved] ? mapsUrl(placeById[s.saved])
               : s.place ? mapsSearch(s.place + ", Japan") : null;
    return `
      <div class="trow">
        <div class="tmeta${isSoft(s.t) ? " soft" : ""}">${esc(timeLabel(s.t))}</div>
        <div class="rail"><span class="dot"></span><span class="linev"></span></div>
        <div class="tbody">
          <h3>${esc(s.name)}</h3>
          ${s.detail ? `<p>${esc(s.detail)}</p>` : ""}
          ${href ? `<a class="maps" href="${href}" target="_blank" rel="noopener"><span class="arrow">←</span> מפות</a>` : ""}
        </div>
      </div>`;
  }).join("");
}

function planCard(day, c, picked) {
  const steps = c.steps || [], tips = c.tips || [], placesUsed = c.places || [];
  const hasMore = steps.length || tips.length || placesUsed.length;
  const moreId = `pm-${day.id}-${c.id}`;
  const meta = (c.meta || []).map(m => `
    <span class="pmeta">${svg(META_ICON[m.icon] || "clock")}${esc(m.text)}</span>`).join("");

  return `
    <article class="plan${picked ? " picked" : ""}" data-plan="${c.id}">
      ${picked ? `<div class="plan-flag">${svg("check")}התוכנית ל${esc(dayTag(day))}</div>` : ""}
      <h3>${c.star ? `<span class="star" title="אחת החזקות">★</span>` : ""}${esc(c.title)}</h3>
      ${c.when ? `<div class="bankwhen">${esc(c.when)}</div>` : ""}
      ${meta ? `<div class="pmetas">${meta}</div>` : ""}
      <p>${esc(c.body)}</p>
      ${hasMore ? `
        <div class="plan-more" id="${moreId}"${picked ? "" : " hidden"}>
          ${steps.length ? `<div class="timeline">${stepRows(steps)}</div>` : ""}
          ${tips.map(t => `<div class="plan-tip"><b>${esc(t.title)}</b>${esc(t.body)}</div>`).join("")}
          ${placeChips(placesUsed)}
        </div>` : ""}
      <div class="plan-foot">
        ${hasMore ? `<button class="plan-toggle" aria-expanded="${picked}" aria-controls="${moreId}">
          <span>${picked ? "להסתיר את היום" : "להראות את היום"}</span>${svg("chev")}</button>` : "<span></span>"}
        <button class="pick" data-pick="${day.id}:${c.id}" aria-pressed="${picked}">
          ${picked ? `${svg("check")}נבחר` : `לבחור ל${esc(dayTag(day))}`}
        </button>
      </div>
    </article>`;
}

export function planBank(day) {
  const bank = clusters[day.bank] || [];
  if (!bank.length) return "";
  const pick = pickedPlan(day.id);
  const ordered = pick
    ? [...bank.filter(c => c.id === pick), ...bank.filter(c => c.id !== pick)]
    : bank;
  return `
    <div class="section">
      ${sectionHead(TITLE[day.bank] || "בוחרים אחד")}
      <div class="plans">${ordered.map(c => planCard(day, c, c.id === pick)).join("")}</div>
    </div>`;
}

/* Loose, day-specific ideas: things to mix in, never a timetable. */
export function dayIdeas(day) {
  const ideas = day.ideas || [];
  if (!ideas.length) return "";
  return `
    <div class="section">
      ${sectionHead("הכיוון להיום")}
      <div class="ideas">${ideas.map(i => `
        <div class="idea">
          <b>${esc(i.title)}</b>
          <p>${esc(i.body)}</p>
          ${placeChips(i.saved)}
        </div>`).join("")}</div>
    </div>`;
}

export function wirePlans(root, go) {
  root.querySelectorAll(".plan-toggle").forEach(b =>
    b.addEventListener("click", () => {
      const more = root.querySelector("#" + b.getAttribute("aria-controls"));
      const open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(open));
      b.querySelector("span").textContent = open ? "להסתיר את היום" : "להראות את היום";
      if (more) more.hidden = !open;
    }));

  root.querySelectorAll("[data-pick]").forEach(b =>
    b.addEventListener("click", () => {
      const [dayId, planId] = b.dataset.pick.split(":");
      togglePick(dayId, planId);
      go(location.hash);
      /* The picked plan moves to the top of the list, so follow it there
         rather than leave the reader looking at a different card. */
      document.querySelector(`[data-plan="${planId}"]`)
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    }));
}
