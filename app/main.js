/* Shell and router.

   Hash routing on purpose: GitHub Pages serves this from a subpath, the app
   is installed to a home screen, and a hash route survives a refresh and an
   offline start with no server rules and no 404 fallback to keep in sync. */

import { svg, esc } from "./ui.js";
import * as sheets from "./sheets.js";
import * as searchView from "./views/search.js";
import * as today from "./views/today.js";
import * as tripView from "./views/trip.js";
import * as savedView from "./views/saved.js";
import * as walletView from "./views/wallet.js";
import { altsSheet } from "./sheets.js";
import { dayById } from "../data/days.js";

const app = document.getElementById("app");
let search;

/* ------------------------------------------------------------ routing */

function parse() {
  const raw = location.hash.replace(/^#\/?/, "");
  const [path, qs] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  const query = Object.fromEntries(new URLSearchParams(qs || ""));
  return { parts, query };
}

export function go(href) {
  if (location.hash === href) return render();
  location.hash = href.replace(/^#/, "");
}

function resolve() {
  const { parts, query } = parse();
  const [a, b] = parts;

  switch (a) {
    case undefined:
    case "today":  return { tab: "today", ...today.render() };
    case "trip":   return b
      ? { tab: "trip", ...(tripView.renderDestination(b) || notFound()) }
      : { tab: "trip", ...tripView.renderTrip() };
    case "day":    return { tab: "trip", ...(tripView.renderDay(b) || notFound()) };
    case "saved":  return { tab: "saved", ...savedView.renderSaved(query) };
    case "wallet": return b
      ? { tab: null, ...(walletView.renderWalletItem(b) || notFound()) }
      : { tab: null, ...walletView.renderWallet(query) };
    case "lists":  return { tab: null, ...walletView.renderLists() };
    case "info":   return { tab: null, ...walletView.renderInfo() };
    default:       return { tab: "today", ...notFound() };
  }
}

const notFound = () => ({
  eyebrow: "Not found",
  back: "#/today",
  html: `<div class="screen"><div class="empty">That page does not exist.</div></div>`
});

/* ------------------------------------------------------------ chrome */

const TABS = [
  ["today", "Today", "today"],
  ["trip",  "Trip",  "trip"],
  ["saved", "Saved", "saved"]
];

function topbar(view) {
  return `
    <header class="topbar">
      ${view.back ? `<button class="iconbtn" data-back aria-label="Back">${svg("left")}</button>` : ""}
      <div class="eyebrow">${esc(view.eyebrow || "")}</div>
      <button class="iconbtn" data-search aria-label="Search">${svg("search")}</button>
      <button class="iconbtn yen" data-fx aria-label="Currency converter">¥</button>
      <button class="iconbtn more" data-more aria-label="More">${svg("dots")}</button>
    </header>`;
}

function tabbar(active) {
  return `
    <nav class="tabbar"><div class="inner">
      ${TABS.map(([id, label, icon]) => `
        <a class="tab" href="#/${id}" ${active === id ? 'aria-current="page"' : ""}>
          ${svg(icon)}<span>${label}</span>
        </a>`).join("")}
    </div></nav>`;
}

/* ------------------------------------------------------------ render */

let lastPath = null;
let slideDir = null;      // set by a swipe so the incoming screen moves with it

/* Swipe left and right between the three main tabs.

   Listens on touch first, because that is what iOS Safari delivers, and
   falls back to pointer events for a trackpad. Drags that start inside
   something which scrolls sideways — the filter rows, the route strip — are
   left alone, as are gestures more vertical than horizontal, so the page
   still scrolls normally. */
function wireSwipe(root, activeTab) {
  const order = TABS.map(t => t[0]);
  const at = order.indexOf(activeTab);
  if (at < 0) return;

  let x0 = 0, y0 = 0, t0 = 0, live = false;

  const startsInScroller = target => {
    let n = target;
    while (n && n !== root) {
      if (n.scrollWidth > n.clientWidth + 4) return true;
      n = n.parentElement;
    }
    return false;
  };

  const begin = (x, y, target) => {
    if (startsInScroller(target)) { live = false; return; }
    x0 = x; y0 = y; t0 = Date.now(); live = true;
  };

  const finish = (x, y) => {
    if (!live) return;
    live = false;
    const dx = x - x0, dy = y - y0;
    if (Date.now() - t0 > 800) return;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.6) return;
    const next = order[at + (dx < 0 ? 1 : -1)];
    if (!next) return;
    slideDir = dx < 0 ? "from-right" : "from-left";
    go("#/" + next);
  };

  root.addEventListener("touchstart", e => {
    const t = e.changedTouches[0];
    begin(t.clientX, t.clientY, e.target);
  }, { passive: true });

  root.addEventListener("touchend", e => {
    const t = e.changedTouches[0];
    finish(t.clientX, t.clientY);
  }, { passive: true });

  root.addEventListener("pointerdown", e => {
    if (e.pointerType === "touch") return;          // touch path handles it
    if (e.button !== 0) return;
    begin(e.clientX, e.clientY, e.target);
  }, { passive: true });

  root.addEventListener("pointerup", e => {
    if (e.pointerType === "touch") return;
    finish(e.clientX, e.clientY);
  }, { passive: true });
}

function render() {
  const view = resolve();
  const path = location.hash;

  app.innerHTML = topbar(view) + `<main id="view">${view.html}</main>` + tabbar(view.tab);

  const root = app.querySelector("#view");

  if (slideDir) {
    root.querySelector(".screen")?.classList.add(slideDir);
    slideDir = null;
  }
  wireSwipe(root, view.tab);

  /* Scroll to the top on a genuine navigation, but not when a filter
     re-renders the same screen underneath the reader. */
  const samePage = lastPath && path.split("?")[0] === lastPath.split("?")[0];
  if (!samePage) window.scrollTo(0, 0);
  lastPath = path;

  app.querySelector("[data-back]")?.addEventListener("click", () => {
    if (history.length > 1) history.back(); else go(view.back);
  });
  app.querySelector("[data-search]").addEventListener("click", () => search.open());
  app.querySelector("[data-fx]").addEventListener("click", () => sheets.currencySheet());
  app.querySelector("[data-more]").addEventListener("click", () => sheets.moreSheet(go));

  root.querySelectorAll("[data-alts]").forEach(b =>
    b.addEventListener("click", () => altsSheet(dayById[b.dataset.alts])));

  view.wire?.(root, go);
}

/* ------------------------------------------------------------ boot */

addEventListener("hashchange", () => { sheets.close(); render(); });

search = searchView.mount(go);
if (!location.hash) location.replace("#/today");
render();

/* Re-evaluate Up Next when the app comes back from the background — the
   relevant stop is usually different by then. */
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && (location.hash === "#/today" || location.hash === "")) render();
});

if ("serviceWorker" in navigator) {
  addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
