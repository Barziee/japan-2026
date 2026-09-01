/* Saved — the places we already did the homework on.

   Rows expand in place. Opening one closes the last, and nothing navigates
   away, because losing your position in a list of fifty places to read one
   note is the wrong trade. Full pages are reserved for days and wallet items. */

import { places, placeById, CATEGORIES, mapsUrl } from "../../data/places.js";
import { byId as destById, destinations } from "../../data/destinations.js";
import { isPinned, togglePin } from "../store.js";
import { svg, esc, CAT_ICON } from "../ui.js";

const catLabel = id => CATEGORIES.find(c => c.id === id)?.label || id;

/* One compact row plus its drawer. Shared with search results. */
export function placeRow(p) {
  const pinned = isPinned(p);
  const area = p.area ? destById[p.area]?.name : null;
  /* What it is comes first and in the category's colour; where it is follows
     in grey. This is the line Noa reads instead of guessing from the name. */
  const what = p.kind || catLabel(p.cat);
  const where = p.where || area;

  return `
    <div class="prow" data-place="${p.id}" aria-expanded="false">
      <button class="head" data-toggle="${p.id}" aria-label="${esc(p.name)}">
        <span class="sw k-${p.cat}">${svg(CAT_ICON[p.cat])}</span>
        <span class="t">
          <span class="n">${esc(p.name)}</span>
          <span class="c" style="color:var(--c-${p.cat})">
            <em>${esc(what)}</em>${where ? `<span class="where"> · ${esc(where)}</span>` : ""}
          </span>
        </span>
        ${pinned ? `<span class="pin">${svg("star")}</span>` : ""}
        <span class="chev">${svg("chev")}</span>
      </button>
      <div class="drawer"><div><div class="inner">
        ${p.note ? `<p>${esc(p.note)}</p>` : `<p style="color:var(--ink3)">No note yet.</p>`}
        <div class="acts">
          <a class="btn btn-secondary" href="${mapsUrl(p)}" target="_blank" rel="noopener">
            ${svg("pin")}Google Maps
          </a>
          ${p.tabelog ? `<a class="btn btn-secondary" href="${esc(p.tabelog)}" target="_blank" rel="noopener">Tabelog ↗</a>` : ""}
          <button class="btn btn-secondary" data-pin="${p.id}">
            ${svg("star")}${pinned ? "Unpin" : "Pin"}
          </button>
        </div>
      </div></div></div>
    </div>`;
}

/* Only one drawer open at a time. */
export function wirePlaceRows(root) {
  root.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".prow");
      const open = row.getAttribute("aria-expanded") === "true";
      root.querySelectorAll('.prow[aria-expanded="true"]').forEach(r =>
        r.setAttribute("aria-expanded", "false"));
      row.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  root.querySelectorAll("[data-pin]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const p = placeById[btn.dataset.pin];
      const now = togglePin(p.id, !!p.pin);
      const row = btn.closest(".prow");
      btn.innerHTML = svg("star") + (now ? "Unpin" : "Pin");
      let mark = row.querySelector(".pin");
      if (now && !mark) {
        mark = document.createElement("span");
        mark.className = "pin";
        mark.innerHTML = svg("star");
        row.querySelector(".chev").before(mark);
      } else if (!now && mark) mark.remove();
    });
  });
}

/* ------------------------------------------------------------ screen */

export function renderSaved(query = {}) {
  const cat = query.cat || "all";
  const area = query.area || "all";

  let list = places.slice();
  if (area === "pinned") list = list.filter(isPinned);
  else if (area !== "all") list = list.filter(p => p.area === area);
  if (cat !== "all") list = list.filter(p => p.cat === cat);

  const areas = [
    { id: "all", label: "Everywhere" },
    ...destinations.map(d => ({ id: d.id, label: d.name })),
    { id: "pinned", label: "Pinned" }
  ];

  const catPills = [{ id: "all", label: "All" }, ...CATEGORIES].map(c => `
    <button class="pill" data-cat="${c.id}" aria-pressed="${c.id === cat}">${esc(c.label)}</button>`).join("");

  const areaPills = areas.map(a => `
    <button class="pill" data-area="${a.id}" aria-pressed="${a.id === area}">${esc(a.label)}</button>`).join("");

  const rows = list.length
    ? `<div class="rows">${list.map(placeRow).join("")}</div>`
    : `<div class="empty">Nothing saved here yet.</div>`;

  return {
    eyebrow: "Saved places",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s4)">
          <h1 class="display" style="font-size:42px">Saved</h1>
        </div>
        <div class="pillrow areas">${areaPills}</div>
        <div class="pillrow cats">${catPills}</div>
        ${rows}
        <div style="height:var(--s7)"></div>
      </div>`,
    wire(root, go) {
      wirePlaceRows(root);
      root.querySelectorAll("[data-cat]").forEach(b =>
        b.addEventListener("click", () =>
          go(`#/saved?cat=${b.dataset.cat}${area !== "all" ? `&area=${area}` : ""}`)));
      root.querySelectorAll("[data-area]").forEach(b =>
        b.addEventListener("click", () =>
          go(`#/saved?area=${b.dataset.area}${cat !== "all" ? `&cat=${cat}` : ""}`)));
    }
  };
}
