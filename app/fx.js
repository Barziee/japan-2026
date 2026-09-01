/* Currency. Three fields, all editable, all live off one JPY base rate.

   Frankfurter is keyless and CORS-open. The last good rate is kept in
   localStorage so the sheet still works on a train with no signal — it just
   says which day the rate is from. No charts, no history. */

import { state, save } from "./store.js";

const API = "https://api.frankfurter.dev/v1/latest?base=JPY&symbols=ILS,USD";

/* Checked 30 Aug 2026. Only used before the first successful fetch. */
const FALLBACK = { jpy_ils: 0.018653, jpy_usd: 0.006253, at: "2026-08-30T00:00:00Z", stale: true };

export function rate() {
  return state.fx && state.fx.jpy_ils ? state.fx : FALLBACK;
}

export async function refresh() {
  try {
    const r = await fetch(API, { cache: "no-store" });
    if (!r.ok) return rate();
    const j = await r.json();
    if (!j?.rates?.ILS || !j?.rates?.USD) return rate();
    state.fx = { jpy_ils: j.rates.ILS, jpy_usd: j.rates.USD, at: new Date().toISOString() };
    save();
    return state.fx;
  } catch {
    return rate();               // offline: whatever we last stored still converts
  }
}

export const fromJPY = v => ({ ils: v * rate().jpy_ils, usd: v * rate().jpy_usd });
export const toJPYfromILS = v => v / rate().jpy_ils;
export const toJPYfromUSD = v => v / rate().jpy_usd;

export function freshness() {
  const fx = rate();
  const at = new Date(fx.at);
  if (fx.stale) return "Using a stored rate from " + at.toLocaleDateString(undefined, { month: "short", day: "numeric" });

  const mins = Math.round((Date.now() - at) / 60000);
  if (mins < 1)   return "Rates updated just now";
  if (mins < 60)  return `Rates updated ${mins} min ago`;
  if (mins < 60 * 24) return `Rates updated ${Math.round(mins / 60)} h ago`;
  return "Using rate from " + at.toLocaleString(undefined,
    { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

/* Money reads better without trailing noise: ¥1,200 but ₪22.38 */
export function fmt(n, dp) {
  if (!isFinite(n)) return "";
  return n.toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });
}
