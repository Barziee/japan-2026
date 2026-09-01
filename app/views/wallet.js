/* Travel Wallet, Lists and Useful info — the More section.

   The wallet item view is a utility screen. Someone is standing at a counter
   with a phone in one hand, so it is fields and actions, not decoration. */

import { wallet, walletById } from "../../data/wallet.js";
import { lists, climate, weatherDays, daylight, foliage, CLIMATE_NOTE } from "../../data/lists.js";
import { deadlines, inTrip } from "../../data/deadlines.js";
import { dayById } from "../../data/days.js";
import { destinations } from "../../data/destinations.js";
import { isChecked, toggleCheck } from "../store.js";
import { svg, esc, dShort, mapsSearch, copy, WALLET_ICON } from "../ui.js";

const today = () => new Date().toISOString().slice(0, 10);
const dateOf = w => (w.from || "").slice(0, 10);

function whenLabel(w) {
  if (!w.from) return w.detail || "";
  const from = dateOf(w);
  const to = w.to ? w.to.slice(0, 10) : null;
  return to && to !== from ? `${dShort(from)} – ${dShort(to)}` : dShort(from);
}

/* ------------------------------------------------------------ /wallet */

export function renderWallet(query = {}) {
  const filter = query.f || "today";
  const now = today();

  const relevant = w => {
    const f = dateOf(w), t = (w.to || w.from || "").slice(0, 10);
    return f && f <= now && t >= now;
  };
  const upcoming = w => dateOf(w) > now;

  let list = wallet;
  if (filter === "today") list = wallet.filter(relevant);
  else if (filter === "upcoming") list = wallet.filter(upcoming);

  /* Before the trip nothing is "today", so fall back rather than showing an
     empty screen with a filter the user did not choose. */
  let note = "";
  if (filter === "today" && !list.length) {
    list = wallet.filter(upcoming);
    note = `<div class="tiny muted" style="padding-bottom:var(--s3)">Nothing is live today — showing what is coming up.</div>`;
  }

  const rows = list.map(w => `
    <a class="lrow" href="#/wallet/${w.id}">
      <span class="ic">${svg(WALLET_ICON[w.kind] || "doc")}</span>
      <span class="t">
        <span class="n">${esc(w.title)}</span>
        <span class="s">${esc([whenLabel(w), w.detail].filter(Boolean).join(" · "))}</span>
      </span>
      ${w.alert ? `<span class="pin">${svg("warn")}</span>` : ""}
      <span class="go">${svg("right")}</span>
    </a>`).join("");

  const pills = [["today", "Today"], ["upcoming", "Upcoming"], ["all", "All"]]
    .map(([id, label]) => `<button class="pill" data-f="${id}" aria-pressed="${id === filter}">${label}</button>`)
    .join("");

  return {
    eyebrow: "Travel wallet",
    back: "#/today",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s4)">
          <h1 class="display" style="font-size:38px">Wallet</h1>
          <div class="muted tiny" style="margin-top:7px">Bookings, cars, flights and the luggage plan.</div>
        </div>
        <div class="pillrow">${pills}</div>
        ${note}
        ${rows || `<div class="empty">Nothing here.</div>`}
        <div style="height:var(--s7)"></div>
      </div>`,
    wire(root, go) {
      root.querySelectorAll("[data-f]").forEach(b =>
        b.addEventListener("click", () => go(`#/wallet?f=${b.dataset.f}`)));
    }
  };
}

/* ------------------------------------------------------------ /wallet/:id */

export function renderWalletItem(id) {
  const w = walletById[id];
  if (!w) return null;

  const field = (k, v, mono) => v
    ? `<div class="bigfield"><div class="k">${esc(k)}</div><div class="v${mono ? " mono" : ""}">${esc(v)}</div></div>`
    : "";

  return {
    eyebrow: w.title,
    back: "#/wallet",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s3)">
          <div class="tiny muted">${esc(w.kind === "stay" ? "Accommodation" : w.kind === "car" ? "Car rental" : w.kind === "flight" ? "Flight" : "Logistics")}</div>
          <h1 class="display" style="font-size:34px;margin-top:6px">${esc(w.title)}</h1>
        </div>

        ${w.alert ? `<div class="alert">${svg("warn")}<p>${esc(w.alert)}</p></div>` : ""}

        <div style="margin-top:var(--s4)">
          ${field("When", whenLabel(w) + (w.detail ? " · " + w.detail : ""))}
          ${field("Where", w.where)}
          ${field("Reference", w.ref, true)}
          ${field("Price", w.price)}
        </div>

        <div style="display:flex;gap:var(--s2);flex-wrap:wrap;margin-top:var(--s5)">
          ${w.where ? `<a class="btn btn-primary" href="${mapsSearch(w.where + ", Japan")}" target="_blank" rel="noopener">${svg("pin")}Open in Maps</a>` : ""}
          ${w.ref ? `<button class="btn btn-secondary" data-copy="${esc(w.ref)}">${svg("copy")}Copy reference</button>` : ""}
        </div>

        ${(w.notes || []).length ? `
          <div class="sect">Notes</div>
          ${w.notes.map(n => `<p class="muted" style="font-size:13.5px;margin-bottom:11px">${esc(n)}</p>`).join("")}` : ""}

        ${!w.ref ? `<p class="tiny" style="color:var(--ink3);margin-top:var(--s5)">
          No confirmation number stored yet. Add it to <code>data/wallet.js</code> when the email arrives.</p>` : ""}

        <div style="height:var(--s7)"></div>
      </div>`,
    wire(root) {
      root.querySelectorAll("[data-copy]").forEach(b =>
        b.addEventListener("click", () => copy(b.dataset.copy, "Reference copied")));
    }
  };
}

/* ------------------------------------------------------------ /lists */

export function renderLists() {
  const html = lists.map(l => `
    <div class="sect">${esc(l.title)}</div>
    ${l.groups.map(g => `
      <div style="font-size:12px;font-weight:700;letter-spacing:.05em;color:var(--ink3);padding:var(--s3) 0 2px">${esc(g.title)}</div>
      ${g.items.map(it => {
        const on = isChecked(it.id, !!it.done);
        return `
          <button class="check" data-check="${it.id}" data-def="${it.done ? 1 : 0}" role="checkbox" aria-checked="${on}">
            <span class="box">${svg("check")}</span>
            <span class="t"><span class="n">${esc(it.name)}</span>
            ${it.note ? `<span class="s">${esc(it.note)}</span>` : ""}</span>
          </button>`;
      }).join("")}`).join("")}`).join("");

  return {
    eyebrow: "Lists",
    back: "#/today",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s2)">
          <h1 class="display" style="font-size:38px">Lists</h1>
          <div class="muted tiny" style="margin-top:7px">Ticks are saved on this device.</div>
        </div>
        ${html}
        <div style="height:var(--s7)"></div>
      </div>`,
    wire(root) {
      root.querySelectorAll("[data-check]").forEach(b =>
        b.addEventListener("click", () => {
          const id = b.dataset.check;
          const def = b.dataset.def === "1";
          const now = !isChecked(id, def);
          /* Persist the value, not a flip, so a default-done item behaves. */
          toggleCheckTo(id, now, def);
          b.setAttribute("aria-checked", String(now));
        }));
    }
  };
}

/* toggleCheck flips; this sets an explicit value against the bundled default */
function toggleCheckTo(id, value, def) {
  const cur = isChecked(id, def);
  if (cur !== value) toggleCheck(id);
}

/* ------------------------------------------------------------ /info */

export function renderInfo() {
  const wxRows = destinations.map(d => {
    const c = climate[d.id];
    return `
      <div class="lrow">
        <span class="ic">${svg("cloud")}</span>
        <span class="t"><span class="n">${esc(d.name)}</span><span class="s">${esc(c.text)}</span></span>
        <span class="go">${c.hi}° / ${c.lo}°</span>
      </div>`;
  }).join("");

  const wd = weatherDays.map(w => {
    const d = dayById[w.day];
    return `
      <a class="lrow" href="#/day/${w.day}">
        <span class="ic">${svg("route")}</span>
        <span class="t"><span class="n">${esc(w.title)}</span><span class="s">${esc(w.options)}</span></span>
        <span class="go">${esc(dShort(d.date))}</span>
      </a>`;
  }).join("");

  /* Deadlines first — they are the only part of this screen that expires. */
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = deadlines.filter(x => x.on >= today);
  const dueList = (upcoming.length ? upcoming : deadlines).concat(inTrip.filter(x => x.on >= today));
  const dueRows = dueList.length ? `
    <div class="sect">What expires, and when</div>
    ${dueList.map(x => `
      <div style="padding:13px 0;border-bottom:1px solid var(--line)">
        <div style="display:flex;align-items:baseline;gap:8px">
          <span style="font-size:11px;font-weight:700;letter-spacing:.06em;color:${x.urgent ? "var(--coral)" : "var(--ink3)"};white-space:nowrap">${esc(dShort(x.on)).toUpperCase()}</span>
          <span style="font-size:14.5px;font-weight:650">${esc(x.title)}</span>
        </div>
        <p class="muted tiny" style="margin-top:4px">${esc(x.body)}</p>
        ${x.also ? `<p class="tiny" style="margin-top:5px;color:var(--ink3)">${esc(x.also)}</p>` : ""}
      </div>`).join("")}` : "";

  const block = (title, items) => `
    <div class="sect">${title}</div>
    ${items.map(x => `
      <div style="padding:11px 0;border-bottom:1px solid var(--line)">
        <div style="font-size:14px;font-weight:650">${esc(x.title)}</div>
        <p class="muted tiny" style="margin-top:3px">${esc(x.body)}</p>
      </div>`).join("")}`;

  return {
    eyebrow: "Useful info",
    back: "#/today",
    html: `
      <div class="screen">
        <div style="padding-bottom:var(--s2)">
          <h1 class="display" style="font-size:38px">Useful info</h1>
          <div class="muted tiny" style="margin-top:7px">${esc(CLIMATE_NOTE)}</div>
        </div>
        ${dueRows}
        <div class="sect">Climate by base</div>${wxRows}
        <div class="sect">Days decided on the forecast</div>${wd}
        ${block("Daylight", daylight)}
        ${block("Autumn colour", foliage)}
        <div style="height:var(--s7)"></div>
      </div>`
  };
}
