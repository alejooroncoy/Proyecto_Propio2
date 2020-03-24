workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(/https?\/\/www.themealdb.com\/api\/.*/, workbox.strategies.StaleWhileRevalidate(), 'GET');


workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.suppressWarnings();

workbox.routing.registerNavigationRoute('/index.html');

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
        new workbox.expiration.Plugin({
            maxAgeSeconds: 30 * 24 * 60 * 60
        }),
    ]
}), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images'
}))
workbox.routing.registerRoute(
    /\^https?.*/,
    workbox.strategies.networkFirst(), 
    'GET',
  );
  
precacheAndRoute(self.__WB_MANIFEST);
