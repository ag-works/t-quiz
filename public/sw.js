self.addEventListener("install", event => {
    console.log("Service Worker is being installed!", event);
    event.waitUntil(caches.open("static")
      .then(cache => {
        console.log("[Service Worker] Pre-caching App Shell!");
        cache.add("index.html");
        cache.add("main.js");
      }));
});

self.addEventListener("activate", event => {
    console.log("Service Worker getting activated!", event);
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if(response){
            return response;
          } else {
            return fetch(event.request);
          }
        })
    );
});