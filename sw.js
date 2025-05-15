self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('3dcity-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/3D.City/index.html',
        '/3D.City/manifest.json',
        '/3D.City/images/icon-192x192.png',
        '/3D.City/images/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
