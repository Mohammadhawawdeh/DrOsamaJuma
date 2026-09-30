/**
 * Cloudflare Worker: adds standard security response headers to
 * drosamajuma.com. GitHub Pages (the origin) does not let you set
 * custom response headers from the repo, so this runs in front of it
 * via Cloudflare, which is already proxying the domain.
 *
 * Deploy:
 *   1. Cloudflare dashboard -> Workers & Pages -> Create Worker
 *   2. Paste this file as the Worker script, deploy it
 *   3. Workers & Pages -> your worker -> Settings -> Triggers -> Add Route
 *        Route:  drosamajuma.com/*
 *        Zone:   drosamajuma.com
 *   4. (Alternative, no Worker needed) Cloudflare dashboard -> Rules ->
 *      Transform Rules -> Modify Response Header, and add the same
 *      headers there instead - simpler if you don't want to manage a
 *      Worker script long-term.
 */

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  // frame-ancestors covers the old X-Frame-Options use case and is the
  // modern replacement; 'none' since this site doesn't need to be framed.
  "Content-Security-Policy":
    "default-src 'self'; " +
    "img-src 'self' data: https://drosamajuma.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; " +
    "connect-src 'self' https://www.google-analytics.com; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'",
};

export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    const newHeaders = new Headers(response.headers);

    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      newHeaders.set(name, value);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
