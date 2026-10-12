// Serves the Salim Technology SPA (Vite build in ./dist).
// Preserves existing routing behavior:
//   /index.html      -> 307 to /
//   /*.html          -> 307 to clean URL (e.g. /terms.html -> /terms)
//   /terms|/privacy|/refund|/delivery -> static HTML file
//   /sitemap.xml     -> XML sitemap
//   unknown routes   -> SPA fallback (index.html, 200)

const STATIC_PAGES = new Set(['/terms', '/privacy', '/refund', '/delivery']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/index.html') {
      return Response.redirect(url.origin + '/', 307);
    }

    if (path.endsWith('.html')) {
      const clean = path.slice(0, -5) || '/';
      return Response.redirect(url.origin + clean, 307);
    }

    if (STATIC_PAGES.has(path)) {
      return env.ASSETS.fetch(new URL(path + '.html', url.origin));
    }

    if (path === '/sitemap.xml') {
      const res = await env.ASSETS.fetch(new URL('/sitemap.xml', url.origin));
      return new Response(res.body, {
        status: 200,
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
      });
    }

    // Unknown routes fall back to the SPA via not_found_handling above.
    return env.ASSETS.fetch(request);
  },
};
