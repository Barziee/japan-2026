/* Offline shell.

   Everything the app needs is bundled, so the whole itinerary works on a
   train with no signal. Our own files are network-first so a deploy always
   arrives, with the cache as the offline fallback. Fonts go the other way -
   cache-first, since they never change.

   The exchange-rate call is deliberately never cached — a stale rate served
   silently is worse than the app knowing it is offline and saying so. */

const VERSION = "jp2026-v7-2026-09-06";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./app/styles.css",
  "./app/main.js",
  "./app/ui.js",
  "./app/store.js",
  "./app/fx.js",
  "./app/sheets.js",
  "./app/views/today.js",
  "./app/views/trip.js",
  "./app/views/saved.js",
  "./app/views/search.js",
  "./app/views/wallet.js",
  "./data/destinations.js",
  "./data/days.js",
  "./data/places.js",
  "./data/notes.js",
  "./data/wallet.js",
  "./data/lists.js",
  "./data/deadlines.js",
  "./assets/osaka.jpg",
  "./assets/kyoto.jpg",
  "./assets/gujo.jpg",
  "./assets/matsumoto.jpg",
  "./assets/fuji.jpg",
  "./assets/tokyo.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.all(SHELL.map(url =>
        /* reload, not addAll: addAll would happily precache whatever the
           HTTP cache still holds from before the deploy. */
        fetch(new Request(url, { cache: "reload" }))
          .then(res => res.ok ? c.put(url, res) : null)
          .catch(() => null)
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const { request } = e;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  /* Live rates always go to the network; fx.js already falls back to the
     stored rate when this fails. */
  if (url.hostname.endsWith("frankfurter.dev")) return;

  /* Fonts: use what we have, refresh in the background. */
  if (url.hostname.endsWith("gstatic.com") || url.hostname.endsWith("googleapis.com")) {
    e.respondWith(
      caches.match(request).then(hit =>
        hit || fetch(request).then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(request, copy)).catch(() => {});
          return res;
        }).catch(() => hit)
      )
    );
    return;
  }

  if (url.origin !== location.origin) return;

  /* Network first for our own files, and revalidating so the HTTP cache
     cannot hand back a stale copy either. The app is small, so the cost is a
     conditional request that usually answers 304. The cache stays the offline
     safety net rather than the primary source. */
  e.respondWith(
    fetch(new Request(request, { cache: "no-cache" }))
      .then(res => {
        if (res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(request, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(request).then(hit =>
          hit || (request.mode === "navigate" ? caches.match("./index.html") : undefined)
        )
      )
  );
});
