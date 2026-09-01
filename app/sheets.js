/* Bottom sheets: currency, More, and a day's alternatives.

   Small contextual things only. Anything with real content — a destination,
   a day, a wallet item — is a page with its own URL instead. */

import { svg, esc } from "./ui.js";
import * as fx from "./fx.js";

let scrim, sheet, onClose = null;

function ensure() {
  if (sheet) return;
  scrim = document.createElement("div");
  scrim.className = "scrim";
  scrim.addEventListener("click", close);

  sheet = document.createElement("div");
  sheet.className = "sheet";
  sheet.setAttribute("role", "dialog");
  sheet.setAttribute("aria-modal", "true");

  document.body.append(scrim, sheet);
}

export function open(html, opts = {}) {
  ensure();
  sheet.innerHTML = `<div class="grabber"></div>` + html;
  onClose = opts.onClose || null;
  scrim.style.display = "block";
  sheet.style.display = "block";
  /* A timeout rather than rAF: rAF is throttled in a background or hidden
     frame, and a sheet that never gets its .on class is invisible. */
  setTimeout(() => { scrim.classList.add("on"); sheet.classList.add("on"); }, 16);
  opts.wire?.(sheet);
  /* Send focus into the sheet so a keyboard user is not left behind it. */
  sheet.querySelector("input,button")?.focus({ preventScroll: true });
}

export function close() {
  if (!sheet || !sheet.classList.contains("on")) return;
  scrim.classList.remove("on");
  sheet.classList.remove("on");
  setTimeout(() => {
    if (sheet.classList.contains("on")) return;
    scrim.style.display = "none";
    sheet.style.display = "none";
    sheet.innerHTML = "";
  }, 240);
  onClose?.();
  onClose = null;
}

export const isOpen = () => !!sheet && sheet.classList.contains("on");

addEventListener("keydown", e => { if (e.key === "Escape") close(); });

/* ------------------------------------------------------------ currency */

export function currencySheet() {
  const row = (id, label, sym) => `
    <div class="fxrow">
      <label for="fx-${id}">${label}</label>
      <input id="fx-${id}" inputmode="decimal" autocomplete="off"
             aria-label="${label}" data-cur="${id}" value="">
    </div>`;

  open(`
    <h3>Convert</h3>
    ${row("jpy", "JPY")}
    ${row("ils", "ILS")}
    ${row("usd", "USD")}
    <p class="fxmeta" id="fxmeta">${esc(fx.freshness())}</p>
  `, {
    wire(el) {
      const f = Object.fromEntries(
        [...el.querySelectorAll("[data-cur]")].map(i => [i.dataset.cur, i]));

      const paint = (src, jpy) => {
        if (src !== "jpy") f.jpy.value = jpy ? fx.fmt(jpy, 0) : "";
        if (src !== "ils") f.ils.value = jpy ? fx.fmt(jpy * fx.rate().jpy_ils, 2) : "";
        if (src !== "usd") f.usd.value = jpy ? fx.fmt(jpy * fx.rate().jpy_usd, 2) : "";
      };

      const read = i => Number(String(i.value).replace(/[^0-9.]/g, "")) || 0;

      for (const [cur, input] of Object.entries(f)) {
        input.addEventListener("input", () => {
          const v = read(input);
          if (!v) return paint(cur, 0);
          const jpy = cur === "jpy" ? v
                    : cur === "ils" ? fx.toJPYfromILS(v)
                    : fx.toJPYfromUSD(v);
          paint(cur, jpy);
        });
      }

      f.jpy.value = "1000";
      paint("jpy", 1000);

      /* Refresh in the background; repaint from whatever field has focus. */
      fx.refresh().then(() => {
        const meta = el.querySelector("#fxmeta");
        if (meta) meta.textContent = fx.freshness();
        const active = document.activeElement?.dataset?.cur;
        const src = active && f[active] ? active : "jpy";
        const v = read(f[src]);
        if (v) paint(src, src === "jpy" ? v : src === "ils" ? fx.toJPYfromILS(v) : fx.toJPYfromUSD(v));
      });
    }
  });
}

/* ------------------------------------------------------------ more */

export function moreSheet(go) {
  const item = (icon, label, href) =>
    `<button class="sheetrow" data-go="${href}">${svg(icon)}<span>${label}</span></button>`;

  open(`
    <h3>More</h3>
    ${item("box",  "Travel Wallet", "#/wallet")}
    ${item("list", "Lists",         "#/lists")}
    <button class="sheetrow" data-fx-row><span style="width:18px;text-align:center;font-weight:600">¥</span><span>Currency</span></button>
    ${item("info", "Useful info",   "#/info")}
  `, {
    wire(el) {
      el.querySelectorAll("[data-go]").forEach(b =>
        b.addEventListener("click", () => { close(); go(b.dataset.go); }));
      el.querySelector("[data-fx-row]")?.addEventListener("click", () => {
        close();
        setTimeout(currencySheet, 260);   // let the first sheet finish leaving
      });
    }
  });

}

/* ------------------------------------------------------------ alternatives */

export function altsSheet(day) {
  const list = (day.alts || []).map(a => `
    <div style="padding:15px 0;border-bottom:1px solid var(--line)">
      <div style="font-size:15px;font-weight:650">${esc(a.title)}</div>
      ${a.when ? `<div style="font-size:12px;font-weight:600;color:var(--teal);margin-top:3px">${esc(a.when)}</div>` : ""}
      <p style="font-size:13.5px;color:var(--ink2);margin-top:6px">${esc(a.body)}</p>
    </div>`).join("");

  open(`<h3>If plans change</h3>${list}`);
}
