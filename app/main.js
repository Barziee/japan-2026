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
      <button class="iconbtn" data-more aria-label="More">${svg("dots")}</button>
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

function render() {
  const view = resolve();
  const path = location.hash;

  app.innerHTML = topbar(view) + `<main id="view">${view.html}</main>` + tabbar(view.tab);

  const root = app.querySelector("#view");

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
