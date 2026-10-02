/* Saved — the places we already did the homework on.

   Rows expand in place. Opening one closes the last, and nothing navigates
   away, because losing your position in a long list to read one note is the
   wrong trade. Full pages are reserved for days and wallet items.

   Filtering happens in place too: search, area, category and food type all
   narrow the same rendered list without a re-render, so typing never drops
   the keyboard. The address bar is kept in step so a refresh or the back
   button lands on the same view. */

import { places, placeById, CATEGORIES, FOOD_TYPES, mapsUrl } from "../../data/places.js";
import { areas, areaById } from "../../data/destinations.js";
import { isPinned, togglePin } from "../store.js";
import { svg, esc, CAT_ICON } from "../ui.js";

const catLabel = id => CATEGORIES.find(c => c.id === id)?.label || id;
const foodLabel = id => FOOD_TYPES.find(t => t.id === id)?.label || id;
const norm = s => String(s || "").toLowerCase();

/* Pork is the one thing Noa cannot bend on. A restaurant whose note says
   nothing about it says so plainly rather than looking safe by silence. */
const porkUnchecked = p =>
  p.cat === "food" && !/חזיר|נועה/.test(p.note || "") && !/(^|[\s·])בר([\s·,]|$)|אזור/.test(p.kind || "");

/* Everything a search should find a place by, including its food types.
   Built once per place: the filters run on every keystroke. */
const HAY = new Map();
export const haystack = p => {
  if (!HAY.has(p.id)) HAY.set(p.id, norm([
    p.name, p.ja, p.kind, p.where, p.note, areaById[p.area]?.name, areaById[p.area]?.he,
    ...(p.food || []).map(foodLabel)
  ].join(" ")));
  return HAY.get(p.id);
};

/* One compact row plus its drawer. Shared with search results. */
export function placeRow(p) {
  const pinned = isPinned(p);
  const area = p.area ? areaById[p.area]?.name : null;
  /* What it is comes first and in the category's colour; where it is follows
     in grey. This is the line Noa reads instead of guessing from the name. */
  const what = p.kind || catLabel(p.cat);
  const where = p.where || area;

  return `
    <div class="prow" data-place="${p.id}" aria-expanded="false">
      <button class="head" data-toggle="${p.id}" aria-label="${esc(p.name)}">
        <span class="sq k-${p.cat}">${svg(CAT_ICON[p.cat])}</span>
        <span class="t">
          <b>${esc(p.name)}</b>
          <small style="color:var(--c-${p.cat})">
            <em>${esc(what)}</em>${where ? `<span class="where"> · ${esc(where)}</span>` : ""}
          </small>
        </span>
        ${pinned ? `<span class="pin">${svg("star")}</span>` : ""}
        <span class="chev">${svg("chev")}</span>
      </button>
      <div class="drawer"><div><div class="inner">
        ${p.note ? `<p>${esc(p.note)}</p>` : `<p style="color:var(--ink3)">עוד אין הערה.</p>`}
        ${porkUnchecked(p) ? `<p class="porknote">לא בדקנו פה חזיר. לשאול לפני שנועה מזמינה.</p>` : ""}
        <div class="acts">
          <a class="btn btn-secondary" href="${mapsUrl(p)}" target="_blank" rel="noopener">
            ${svg("pin")}Google Maps
          </a>
          ${p.tabelog ? `<a class="btn btn-secondary" href="${esc(p.tabelog)}" target="_blank" rel="noopener">Tabelog ↖</a>` : ""}
          <button class="btn btn-secondary" data-pin="${p.id}">
            ${svg("star")}${pinned ? "להסיר נעיצה" : "לנעוץ"}
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
      btn.innerHTML = svg("star") + (now ? "להסיר נעיצה" : "לנעוץ");
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

/* ------------------------------------------------------------ filtering */

const FOODISH = new Set(["all", "food", "coffee"]);

function matches(p, f, skip) {
  if (skip !== "area") {
    if (f.area === "pinned" ? !isPinned(p) : f.area !== "all" && p.area !== f.area) return false;
  }
  if (skip !== "cat" && f.cat !== "all" && p.cat !== f.cat) return false;
  if (skip !== "food" && f.food !== "all" && !(p.food || []).includes(f.food)) return false;
  if (f.q && !haystack(p).includes(f.q)) return false;
  return true;
}

function hashFor(f) {
  const qs = new URLSearchParams();
  for (const k of ["area", "cat", "food"]) if (f[k] !== "all") qs.set(k, f[k]);
  if (f.raw) qs.set("q", f.raw);
  const s = qs.toString();
  return "#/saved" + (s ? "?" + s : "");
}

/* ------------------------------------------------------------ screen */

export function renderSaved(query = {}) {
  const f = {
    area: query.area || "all",
    cat: query.cat || "all",
    food: FOODISH.has(query.cat || "all") ? query.food || "all" : "all",
    raw: query.q || "",
    q: norm(query.q).trim()
  };

  const areaPills = [
    { id: "all", label: "הכול" },
    ...areas.map(a => ({ id: a.id, label: a.name })),
    { id: "pinned", label: "נעוצים" }
  ].map(a => `
    <button class="pill" data-area="${a.id}" aria-pressed="${a.id === f.area}">${esc(a.label)}</button>`).join("");

  const catPills = [{ id: "all", label: "הכול" }, ...CATEGORIES].map(c => `
    <button class="pill" data-cat="${c.id}" aria-pressed="${c.id === f.cat}">${esc(c.label)}</button>`).join("");

  const foodPills = [{ id: "all", label: "כל האוכל" }, ...FOOD_TYPES].map(t => `
    <button class="pill" data-food="${t.id}" aria-pressed="${t.id === f.food}">
      ${esc(t.label)}${t.id === "all" ? "" : `<span class="n"></span>`}
    </button>`).join("");

  /* Grouped by area in trip order, with anything outside the bases last. */
  const groups = [...areas.map(a => ({ id: a.id, name: a.name })), { id: "", name: "בדרך ובמקומות אחרים" }]
    .map(g => ({ ...g, list: places.filter(p => (p.area || "") === g.id) }))
    .filter(g => g.list.length);

  const body = groups.map(g => `
    <div class="sgroup" data-group="${g.id}">
      <div class="sgroup-head"><span>${esc(g.name)}</span><small></small></div>
      <div class="savedrows">${g.list.map(placeRow).join("")}</div>
    </div>`).join("");

  return {
    eyebrow: "מקומות שמורים",
    html: `
      <div class="screen v10">
        <div class="destination">
          <div class="destination-copy">
            <div class="kicker">${places.length} מקומות</div>
            <h1>שמורים</h1>
          </div>
        </div>
        <label class="savedsearch">
          ${svg("search")}
          <input type="search" id="sq" value="${esc(f.raw)}" placeholder="חיפוש: שם, אוכל, הערה"
                 autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search"
                 aria-label="חיפוש במקומות השמורים">
          <button type="button" class="clearq" aria-label="לנקות חיפוש"${f.raw ? "" : " hidden"}>${svg("close")}</button>
        </label>
        <div class="pillrow areas" role="group" aria-label="אזור">${areaPills}</div>
        <div class="pillrow cats" role="group" aria-label="קטגוריה">${catPills}</div>
        <div class="pillrow foods" role="group" aria-label="סוג אוכל">${foodPills}</div>
        <div class="filterline" aria-live="polite">
          <span class="shown"></span>
          <button type="button" class="clearall">לנקות סינון</button>
        </div>
        <div class="savedgroups">${body}</div>
        <div class="empty" hidden>אין שמור כזה. <button type="button" class="clearall">לנקות סינון</button></div>
        <div style="height:var(--s7)"></div>
      </div>`,
    wire(root) {
      wirePlaceRows(root);

      const input = root.querySelector("#sq");
      const clearq = root.querySelector(".clearq");
      const foodRow = root.querySelector(".pillrow.foods");
      const rowEls = [...root.querySelectorAll(".prow")].map(el => ({ el, p: placeById[el.dataset.place] }));

      const apply = () => {
        let shown = 0;
        for (const { el, p } of rowEls) {
          const on = matches(p, f);
          el.hidden = !on;
          if (on) shown++;
        }
        root.querySelectorAll(".sgroup").forEach(g => {
          const n = g.querySelectorAll(".prow:not([hidden])").length;
          g.hidden = n === 0;
          g.querySelector(".sgroup-head small").textContent = n;
        });

        /* Food types only make sense among food and coffee. Each count is what
           that chip would show given everything else that is set, so a chip
           never leads to an empty list; types with nothing are hidden. */
        foodRow.hidden = !FOODISH.has(f.cat);
        foodRow.querySelectorAll("[data-food]").forEach(b => {
          const id = b.dataset.food;
          b.setAttribute("aria-pressed", String(id === f.food));
          if (id === "all") return;
          const n = places.filter(p => (p.food || []).includes(id) && matches(p, f, "food")).length;
          b.querySelector(".n").textContent = n;
          b.hidden = n === 0 && id !== f.food;
        });
        root.querySelectorAll("[data-area]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.area === f.area)));
        root.querySelectorAll("[data-cat]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === f.cat)));

        const filtered = f.area !== "all" || f.cat !== "all" || f.food !== "all" || f.q;
        root.querySelector(".shown").textContent = filtered
          ? `${shown} מתוך ${places.length} מקומות` : `${places.length} מקומות`;
        root.querySelectorAll(".clearall").forEach(b => { b.hidden = !filtered; });
        root.querySelector(".empty").hidden = shown > 0;
        clearq.hidden = !f.raw;

        const next = hashFor(f);
        if (location.hash !== next) history.replaceState(null, "", next);
      };

      root.querySelectorAll("[data-area]").forEach(b =>
        b.addEventListener("click", () => { f.area = b.dataset.area; apply(); }));
      root.querySelectorAll("[data-cat]").forEach(b =>
        b.addEventListener("click", () => {
          f.cat = b.dataset.cat;
          if (!FOODISH.has(f.cat)) f.food = "all";
          apply();
        }));
      /* Tapping the chosen type again goes back to all food. */
      root.querySelectorAll("[data-food]").forEach(b =>
        b.addEventListener("click", () => {
          f.food = b.dataset.food === f.food ? "all" : b.dataset.food;
          apply();
        }));

      let t;
      input.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(() => { f.raw = input.value; f.q = norm(input.value).trim(); apply(); }, 70);
      });
      clearq.addEventListener("click", () => {
        input.value = ""; f.raw = ""; f.q = ""; apply(); input.focus({ preventScroll: true });
      });
      root.querySelectorAll(".clearall").forEach(b =>
        b.addEventListener("click", () => {
          Object.assign(f, { area: "all", cat: "all", food: "all", raw: "", q: "" });
          input.value = "";
          apply();
        }));

      apply();
    }
  };
}
