var STATIC_CACHE = "static";
var DYNAMIC_CACHE = "dynamic";

self.addEventListener("install", event => {
  console.log("Service Worker is being installed!", event);
  event.waitUntil(caches.open(STATIC_CACHE)
    .then(cache => {
      console.log("[Service Worker] Pre-caching App Shell!");
      cache.addAll([
        "/index.html",
        "/main.js"
      ]);
    }));
});

self.addEventListener("activate", event => {
    console.log("Service Worker getting activated!", event);
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if(key !== STATIC_CACHE && key !== DYNAMIC_CACHE){
          console.log("[Service Worker] Removing old cache", key);
          return caches.delete(key);
        }
      }));
    })
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if(response){
            return response;
          } else {
            return fetch(event.request)
              .then(res => {
                return caches.open(DYNAMIC_CACHE)
                  .then(cache => {
                    cache.put(event.request.url, res.clone());
                    return res;
                  })
              });
          }
        })
    );
});