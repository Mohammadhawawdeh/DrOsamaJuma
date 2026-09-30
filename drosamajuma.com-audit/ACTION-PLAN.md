# Action Plan — drosamajuma.com

## Phase 1: Critical Fixes (done this session)
- [x] Add `FAQPage` JSON-LD to English homepage (matches existing visible FAQ content)
- [x] Add Twitter Card meta tags to both CV pages (ar + en)
- [x] Add English section to `llms.txt` (was Arabic-only, excluded 48 English pages from AI-agent discovery)
- [x] Shorten 34 English article `<title>` tags to fit SERP display (prior pass, same session)
- [x] Build proper 1200×630 OG social image, wire into both homepages (prior pass, same session)
- [x] Submit all 96 sitemap URLs to IndexNow API (key file confirmed live; corrects a false-negative finding from the earlier technical pass)

## Phase 2: High-Impact Improvements (this week)
- [x] Deploy `cloudflare-security-headers-worker.js` — done via `wrangler deploy` (OAuth login through the browser pane, since the Cloudflare dashboard's Monaco code editor wasn't clickable by browser automation in this session). Worker `drosamajuma-security-headers` is live, routed to `drosamajuma.com/*`. Verified live: HSTS, CSP (with `frame-ancestors 'none'` superseding the older X-Frame-Options), Permissions-Policy, Referrer-Policy, and X-Content-Type-Options all present across the homepage, articles, CV pages, videos, and 404s. Site content unaffected — confirmed real GitHub Pages content still serving correctly through the Worker on every page type checked.

## Phase 3: Content & Authority (month 2)
- [x] Editorial pass to expand the 31 English articles under 300 words — each got a genuine 4th section (topic-specific practical guidance, not filler). Median word count: 255 → 340, minimum: 205 → 310. All 96 URLs + the 31 updated ones re-submitted to IndexNow.
- [x] Same editorial pass on the 34 thin Arabic articles (30 regular + 4 research, plus 3 that were only thin in Arabic: adhd-classroom-strategies, autism-classroom-support, choose-inclusive-school). Median word count: 197 → 313, minimum: 162 → 300. All 34 updated URLs submitted to IndexNow. Content quality gap from the full audit is now closed on both languages.
- [ ] Configure free Moz API key to unlock a scoreable backlink profile (current: 0 known backlinks via live Bing Webmaster query — real but thin data for a new/small site)

## Phase 4: Monitoring & Iteration (ongoing)
- [ ] Configure Google API credentials for real CrUX Core Web Vitals field data (currently unmeasured — no PSI/CrUX access, Unlighthouse wrapper broken on this Windows environment)
- [ ] Re-run `/seo-backlinks` monthly once Moz is configured to catch link velocity changes
- [ ] Optional: `/.well-known/ai-plugin.json`, `ai-catalog.json`, `security.txt` — low-priority AI-discovery/security hygiene files, not currently scored against
