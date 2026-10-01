// ============================================================
// sw.js - Service Worker for Offline Support
// Version: 15.0.0 (Final update for complete file structure)
// ============================================================

const CACHE_NAME = 'abhidhamma-matika-v15.0.0';
const OFFLINE_URL = './index.html';

// ============================================================
// යෙදුමට අවශ්‍ය සියලුම ස්ථිතික ගොනු (ඔබගේ නව ලැයිස්තුවට අනුව)
// ============================================================
const ASSETS_TO_CACHE = [
  // ========== ප්‍රධාන ගොනු ==========
  './',
  './index.html',
  './manifest.json',

  // ========== HTML ගොනු (root) ==========
  './sabbattika.html',
  './tika-matika.html',
  './duka-matika.html',
  './suttanta-matika.html',
  './paramatta.html',

  // ========== දත්ත ගොනු (root) ==========
  './sabbatika-data.js',
  './tika-data.js',
  './tika-app.js',
  './duka-app.js',
  './suttanta-data.js',
  './feedback.js',

  // ========== තික ගොනු 22 (tika folder) ==========
  './tika/01-kusala-tika.js',
  './tika/02-vedana-tika.js',
  './tika/03-vipaka-tika.js',
  './tika/04-upadinnna-tika.js',
  './tika/05-sankilittha-tika.js',
  './tika/06-vitakka-tika.js',
  './tika/07-piti-tika.js',
  './tika/08-dassana-tika.js',
  './tika/09-dassanahetu-tika.js',
  './tika/10-avayagami-tika.js',
  './tika/11-sekha-tika.js',
  './tika/12-paritta-tika.js',
  './tika/13-parittarammana-tika.js',
  './tika/14-hina-tika.js',
  './tika/15-micchatta-tika.js',
  './tika/16-maggarammana-tika.js',
  './tika/17-uppanna-tika.js',
  './tika/18-atita-tika.js',
  './tika/19-atitarammana-tika.js',
  './tika/20-ajjhatta-tika.js',
  './tika/21-ajjhattarammana-tika.js',
  './tika/22-sanidassana-tika.js',

  // ========== Citta folder ==========
  './Citta/citta.html',
  './Citta/citta-data.js',
  './Citta/citta.js',

  // ========== Rupa folder ==========
  './Rupa/rupa.html',
  './Rupa/rupa-deta.js',
  './Rupa/rupa.js',
  './Rupa/rupa-lr.html',
  './Rupa/rupa-lr.js',

  // ========== caitasika folder ==========
  './caitasika/caitasika.html',
  './caitasika/caitasika.js',
  './caitasika/caitasika.lr.html',
  './caitasika/caitasika.lr.js',
  './caitasika/samprayoga.js',

  // ========== js folder (දුක ගොනු) ==========
  // (ඔබගේ js folder එකේ ඇති ගොනු මෙහි ඇතුළත් කරන්න. උදා: )
  // './js/duka/gochhaka-01-hetu.js',
  // ... (ඔබගේ js folder එකේ ඇති සියලුම ගොනු මෙහි ලැයිස්තුගත කරන්න)

  // ========== nibbana folder ==========
  // (ඔබගේ nibbana folder එකේ ඇති ගොනු මෙහි ඇතුළත් කරන්න)
  // './nibbana/nibbana.html',
  // './nibbana/nibbana.js',

  // ========== අයිකන ගොනු (ප්‍රධාන) ==========
  './launchericon-48x48.png',
  './launchericon-192x192.png',
  './launchericon-512x512.png',
  
  // ========== අයිකන ගොනු (icons folder) ==========
  './icons/16.png',
  './icons/32.png',
  './icons/48.png',
  './icons/72.png',
  './icons/96.png',
  './icons/128.png',
  './icons/144.png',
  './icons/152.png',
  './icons/167.png',
  './icons/180.png',
  './icons/192.png',
  './icons/256.png',
  './icons/512.png',
  './icons/1024.png',

  // ========== Offline Tailwind (ඔබ භාවිතා කරන්නේ නම්) ==========
  './tailwind.min.js',
];

// ============================================================
// CDN සම්පත් (අසාර්ථක වුවද යෙදුම ක්‍රියාත්මක වේ)
// ============================================================
const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+Sinhala:wght@400;600;700&display=swap'
];

// ============================================================
// 1. INSTALL EVENT
// ============================================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installing version ' + CACHE_NAME + '...');
  
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      
      console.log('[SW] Caching local assets...');
      await Promise.allSettled(
        ASSETS_TO_CACHE.map((url) => 
          cache.add(url).catch((err) => {
            console.warn('[SW] Failed to cache (local):', url, err.message);
          })
        )
      );
      
      console.log('[SW] Caching CDN assets...');
      await Promise.allSettled(
        CDN_ASSETS.map((url) => 
          cache.add(url).catch((err) => {
            console.warn('[SW] Failed to cache (CDN):', url, err.message);
          })
        )
      );
      
      await self.skipWaiting();
      console.log('[SW] Installation complete.');
    })()
  );
});

// ============================================================
// 2. ACTIVATE EVENT
// ============================================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
      
      await self.clients.claim();
      console.log('[SW] Activation complete.');
    })()
  );
});

// ============================================================
// 3. FETCH EVENT
// ============================================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  if (request.method !== 'GET') return;
  if (!request.url.startsWith('http')) return;
  
  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // HTML navigation - Network-first
  const isHTMLNavigation = request.mode === 'navigate' || 
    (request.headers.get('accept') || '').includes('text/html');

  if (isHTMLNavigation) {
    event.respondWith(handleHTMLRequest(request));
    return;
  }

  // Assets - Cache-first
  event.respondWith(handleAssetRequest(request));
});

async function handleHTMLRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed for HTML, using cache:', request.url);
    const cachedResponse = await caches.match(request, { ignoreSearch: true });
    if (cachedResponse) return cachedResponse;
    
    const offlinePage = await caches.match(OFFLINE_URL);
    if (offlinePage) return offlinePage;
    
    return new Response(
      '<html><body style="font-family:sans-serif;text-align:center;padding:2rem;">' +
      '<h1>නොබැඳි තත්ත්වයේ සිටී</h1>' +
      '<p>කරුණාකර අන්තර්ජාල සම්බන්ධතාවය පරීක්ෂා කරන්න.</p>' +
      '</body></html>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

async function handleAssetRequest(request) {
  try {
    const cachedResponse = await caches.match(request, { ignoreSearch: true });
    if (cachedResponse) return cachedResponse;
    
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200 && networkResponse.type !== 'opaque') {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.warn('[SW] Fetch failed:', request.url, error.message);
    return new Response('', { status: 408, statusText: 'Offline - Resource not available' });
  }
}

// ============================================================
// 4. MESSAGE EVENT
// ============================================================
self.addEventListener('message', (event) => {
  if (!event.data) return;
  const { type, urls } = event.data;
  
  if (type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }
  
  if (type === 'CACHE_URLS' && Array.isArray(urls)) {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return Promise.allSettled(urls.map((url) => cache.add(url)));
      })
    );
  }
});

self.addEventListener('error', (event) => console.error('[SW] Global error:', event.error));
self.addEventListener('unhandledrejection', (event) => console.error('[SW] Unhandled rejection:', event.reason));