// service-worker.js

const CACHE_NAME = 'my-cache';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/index.html', // 指定要缓存的文件
        '/static/css/main.css',
        '/static/js/main.js',
        // 添加其他需要缓存的文件
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
