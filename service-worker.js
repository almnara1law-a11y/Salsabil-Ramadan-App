self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ramadan-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        'https://i.postimg.cc/gjtQp1Sr/swrt-2026-02-18-13-38-02.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});