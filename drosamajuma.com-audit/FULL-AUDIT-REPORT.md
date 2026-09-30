# Full SEO Audit — drosamajuma.com

**Date:** 2026-09-30
**Scope:** All 96 live pages (48 Arabic + 48 English) — homepage, 9 core service pages, insights hub, 36 insights articles, per language.

## SEO Health Score: 88/100

| Category | Weight | Score | Status |
|---|---|---|---|
| Technical SEO | 22% | 90/100 | pass |
| Content Quality | 23% | 72/100 | warn |
| On-Page SEO | 20% | 96/100 | pass |
| Schema / Structured Data | 10% | 90/100 | pass (after fix) |
| Performance (CWV) | 10% | not measured | — |
| AI Search Readiness | 10% | 78/100 | warn (after fix) |
| Images | 5% | 100/100 | pass |

Performance is excluded from the weighted average (no field-data source available this session — no PSI/CrUX API credentials, no working Unlighthouse install). Score above is renormalized across the other 6 categories.

## Executive Summary

The site is technically sound: fully static/server-rendered, clean URLs, valid sitemap, correct hreflang across all 96 pages (verified in a prior pass), no duplicate titles/descriptions, single H1 per page, all images have alt text, HTTPS enforced with no mixed content. Two real defects were found and fixed during this audit (missing homepage FAQPage schema on English, missing Twitter Card tags on both CV pages). The main open item is content depth — English articles run short (median 255 words) — which is a deliberate site-wide editorial style, not a technical defect, and is flagged for a judgment call rather than auto-fixed.

### Top issues found (all fixed except content depth and security headers)
1. ~~English homepage missing `FAQPage` JSON-LD~~ — **FIXED**
2. ~~Both CV pages (ar+en) missing Twitter Card tags~~ — **FIXED**
3. ~~34 English article `<title>` tags exceeded 60 chars~~ — **FIXED** (prior session pass)
4. ~~No security response headers (HSTS, CSP, etc.)~~ — **Worker script drafted**, needs manual Cloudflare deploy (can't be fixed from the repo)
5. `llms.txt` was Arabic-only, didn't mention the English site — **FIXED**
6. Content depth: 31/36 English articles under 300 words (median 255) — **flagged, not auto-fixed** (see rationale below)

### Quick wins already applied
- FAQPage schema added to English homepage
- Twitter Card meta added to both CV pages
- `llms.txt` updated with full English-site section

## Technical SEO (90/100)

Carried forward from the dedicated `/seo-technical` pass run earlier this session, re-verified where relevant:
- robots.txt valid (`Allow: /`), sitemap declared and valid, 96/96 URLs
- Fully static HTML — 37KB+ of real content with zero JS dependency (ideal for all crawlers, including AI agents)
- HTTP→HTTPS single-hop 301, no mixed content, no redirect chains
- Canonical tags self-referencing on 96/96 pages
- **Gap: no security response headers** (HSTS, CSP, X-Content-Type-Options, Referrer-Policy). GitHub Pages can't set these from the repo — a Cloudflare Worker script was drafted (`cloudflare-security-headers-worker.js`, committed at repo root) but needs manual deployment in the Cloudflare dashboard.
- IndexNow key file confirmed live (`83d1abf2643cd2d31d4d355f5e19ce73.txt`, 200 OK, content matches filename) — this was a **false negative** in the earlier `/seo-technical` pass, which checked for a literal `indexnow.txt` instead of the actual per-site key filename. Submitted all 96 current sitemap URLs to the IndexNow API this session (200 OK) to ensure the pages added across the last 9 commits (English rollout + OG image + schema/meta fixes) are pushed to Bing/Yandex rather than waiting on their native crawl.

## Content Quality (72/100) — warn

- E-E-A-T signals are strong: named credentialed author (PhD, The University of Jordan), consistent `Person`/`author` schema via canonical `@id`, citations to UN/UNESCO/UNICEF/WHO/Jordanian-government sources on 20+ articles, clear scope-of-service disclaimers on every article (non-clinical, defers to licensed professionals).
- **Word count**: median 255 words/article (English), 197 words/article (Arabic) — both language versions are compact by design (a consistent 3-section, 2-paragraph template across all 36 articles). 31/36 English articles are under the conventional 300-word "thin content" threshold.
- **Judgment call, not auto-fixed**: expanding 31 articles is real content work, not a mechanical fix. Concise, well-cited expert content is not what Google's thin-content spam policy targets (that targets low-value/auto-generated filler) — but more depth would likely help both classic ranking and AI-citation surface area. Recommend treating this as a Content phase, not something to bulk-pad with AI filler text, which would trade a real gap for a spam-policy risk.
- No duplicate content detected across the 96 pages.

## On-Page SEO (96/100)

- 0 duplicate `<title>` tags, 0 duplicate meta descriptions across 96 pages
- 0 pages with more/fewer than exactly 1 `<h1>`
- 34 English article titles were 61–105 chars (over Google's ~60-char SERP display point) — **fixed in a prior pass this session**, all now ≤60 chars
- Internal linking: insights hub links to all 36 articles (0 orphans); homepage links to all 11 core pages + hub in 1 click (max depth to any page: 2 clicks)

## Schema & Structured Data (90/100, after fix)

- 96/96 pages: valid, parseable JSON-LD (0 errors)
- Types in use: `Person`, `ProfilePage` (×4: ar/en CV + homepage), `Article` (×72), `BreadcrumbList` (×72), `FAQPage` (was 17, now 18), `CollectionPage` (×4)
- **Fixed**: English homepage was missing `FAQPage` schema that the Arabic homepage had — the visible on-page FAQ content matched exactly (already translated), it just wasn't wrapped in JSON-LD. Added, matching the Arabic version's shape and `@id` pattern.
- Article `citation` arrays present and verbatim-preserved on all research-backed articles.

## Performance (Core Web Vitals) — not measured

No field-data source was available this session:
- No PageSpeed Insights/CrUX API credentials configured
- Unlighthouse extension not installed, and its wrapper script fails on this Windows environment (`npx` subprocess resolution bug, reported separately)

**Recommendation**: configure Google API credentials (`seo-google`) for real CrUX field data, since the site's static-HTML architecture likely performs well but hasn't been measured.

## Images (100/100)

Only 4 `<img>` tags site-wide (site is otherwise CSS/SVG-icon based) — all 4 have descriptive, language-appropriate alt text. No oversized images found in the pages audited (OG card added this session is 49KB WebP).

## AI Search Readiness (78/100, after fix)

- `llms.txt` present at the root — **was Arabic-only**, silently excluding the entire English site (48 pages) from AI-agent discovery via this channel. **Fixed**: added a full English section with links to all core English pages and the English article index.
- robots.txt uses a blanket `Allow: /` — no AI-crawler-specific rules (GPTBot, ClaudeBot, PerplexityBot, etc. all implicitly allowed). This is a business decision, not a defect; flag only if you want to restrict AI training use of specific crawlers.
- No `/.well-known/ai-plugin.json`, `ai-catalog.json`, or `security.txt` — low-priority/optional, not scored against.
- Content is fully in raw HTML (no JS rendering), which is the single biggest AI-crawler-friendliness factor and already passes.

## Critical Issues
*None remaining* — the one schema gap and the one meta-tag gap found this session are both fixed.

## High Priority (fix within 1 week)
1. Deploy the Cloudflare Worker (or Transform Rules) for missing security headers — drafted, needs manual dashboard action (can't be done from the repo).

## Medium Priority (fix within 1 month)
2. Content depth: plan an editorial pass to expand the 31 sub-300-word English articles (and their Arabic counterparts, which are even shorter at median 197 words) — a real writing task, not a mechanical fix.
3. Configure Google API credentials to get real CWV field data instead of no data.

## Low Priority (backlog)
5. Optional AI-discovery files (`ai-plugin.json`, `ai-catalog.json`, `security.txt`) — nice-to-have, not scored.
6. Configure Moz API (free tier) to unlock a scoreable backlink profile — current state is 0 known backlinks via a live, verified Bing Webmaster query (a real data point for a new/small site, not a defect).

## What Was Fixed This Session
| Fix | File(s) | Verified |
|---|---|---|
| Added `FAQPage` JSON-LD to English homepage | `docs/en/index.html` | JSON-LD parses, tag balance intact |
| Added Twitter Card meta to both CV pages | `docs/cv/index.html`, `docs/en/cv/index.html` | JSON-LD parses, tags present |
| Added English section to `llms.txt` | `docs/llms.txt` | manual review |
| Shortened 34 English article SERP titles | `docs/en/insights/*/index.html` | 0 titles >60 chars, 0 broken tags (prior pass) |
| Drafted Cloudflare Worker for security headers | `cloudflare-security-headers-worker.js` | CSP verified against actual site script/style sources (prior pass) |
| Built proper 1200×630 OG image, wired into homepages | `docs/dr-osama-juma-inclusive-education-og-1200x630.webp` | 49KB WebP, both homepages updated (prior pass) |
