var CACHE_RUNTIME = self.location.hostname;
var HOSTNAME_WHITELIST = [self.location.hostname];
var FORCE_CACHE_TEST_WHITELIST = [/\.js/, /\.css/, /\.svg/, /\.woff2/, /\.jpg/];

var getFixedUrl = function (req) {
  var now = Date.now();
  var url = new URL(req.url);
  url.protocol = self.location.protocol;
  if (url.hostname === self.location.hostname) {
    url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;
  }
  return url.href;
};

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);
  if (HOSTNAME_WHITELIST.indexOf(url.hostname) > -1) {
    const cached = caches.match(event.request);
    const createFetched = () => {
      const fetched = fetch(getFixedUrl(event.request), {
        cache: 'no-store',
      });
      const fetchedCopy = fetched.then((resp) => resp.clone());
      return [fetched, fetchedCopy];
    };
    if (
      !FORCE_CACHE_TEST_WHITELIST.every(function (test) {
        return !test.test(url.pathname);
      })
    ) {
      // FORCE CACHE MODE
      event.respondWith(
        cached
          .then(
            (response) =>
              response ||
              new Promise((resolve) => {
                const [fetched, fetchedCopy] = createFetched();
                event.waitUntil(
                  Promise.all([fetchedCopy, caches.open(CACHE_RUNTIME)])
                    .then(([response, cache]) => response.ok && cache.put(event.request, response))
                    .catch((e) => {})
                );
                return fetched.then(resolve);
              })
          )
          .catch((e) => {})
      );
    } else {
      // OFFLINE CACHE MODE
      const [fetched, fetchedCopy] = createFetched();
      event.respondWith(fetched.then((response) => response || fetched).catch((_) => cached));
      event.waitUntil(
        Promise.all([fetchedCopy, caches.open(CACHE_RUNTIME)])
          .then(([response, cache]) => response.ok && cache.put(event.request, response))
          .catch((e) => {})
      );
    }
  }
});
