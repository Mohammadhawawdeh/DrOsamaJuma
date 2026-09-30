# Action Plan — drosamajuma.com

## Phase 1: Critical Fixes (done this session)
- [x] Add `FAQPage` JSON-LD to English homepage (matches existing visible FAQ content)
- [x] Add Twitter Card meta tags to both CV pages (ar + en)
- [x] Add English section to `llms.txt` (was Arabic-only, excluded 48 English pages from AI-agent discovery)
- [x] Shorten 34 English article `<title>` tags to fit SERP display (prior pass, same session)
- [x] Build proper 1200×630 OG social image, wire into both homepages (prior pass, same session)
- [x] Submit all 96 sitemap URLs to IndexNow API (key file confirmed live; corrects a false-negative finding from the earlier technical pass)

## Phase 2: High-Impact Improvements (this week)
- [ ] Deploy `cloudflare-security-headers-worker.js` via Cloudflare dashboard (Workers & Pages → route to `drosamajuma.com/*`), or apply the same headers as Transform Rules — cannot be done from the repo, needs manual dashboard action

## Phase 3: Content & Authority (month 2)
- [x] Editorial pass to expand the 31 English articles under 300 words — each got a genuine 4th section (topic-specific practical guidance, not filler). Median word count: 255 → 340, minimum: 205 → 310. All 96 URLs + the 31 updated ones re-submitted to IndexNow.
- [ ] Same editorial pass on the Arabic counterparts (median 197 words) — not yet done, same rationale applies
- [ ] Configure free Moz API key to unlock a scoreable backlink profile (current: 0 known backlinks via live Bing Webmaster query — real but thin data for a new/small site)

## Phase 4: Monitoring & Iteration (ongoing)
- [ ] Configure Google API credentials for real CrUX Core Web Vitals field data (currently unmeasured — no PSI/CrUX access, Unlighthouse wrapper broken on this Windows environment)
- [ ] Re-run `/seo-backlinks` monthly once Moz is configured to catch link velocity changes
- [ ] Optional: `/.well-known/ai-plugin.json`, `ai-catalog.json`, `security.txt` — low-priority AI-discovery/security hygiene files, not currently scored against
