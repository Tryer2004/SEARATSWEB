const CACHE_NAME = "sea-rats-game-v1";

const FILES_TO_CACHE = [
"/",
"/index.html"
];

//install service worker
self.addEventListener ("install", event => {
    eventwaitUntil (
        caches.open (CACHE_NAME).then (cache => {
        return cache.addAll(FILES_TO_CACHE);

        })
);
});

// give cached files when offline 
self.addEventListener ("fetch" , event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );

});

