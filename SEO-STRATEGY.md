# SEO Strategy — drosamajuma.com

Prepared 2026-09-29. Business: Dr. Osama Juma — individual inclusive-education / special-education consultant, based in Amman, Jordan, serving Jordan + GCC (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman) remotely. Template blend: **Agency/Consultancy** (primary — expertise-sold, no storefront, long consideration cycle) + **Local Service** elements (GBP/NAP, since he serves a defined geography by name).

## 1. Discovery Summary (from this session's cumulative audit history — no new research run)

- **Business type:** solo expert consultant, service-based, remote delivery, Arabic-first (ar-JO, RTL).
- **Audience:** parents/families of children with disabilities, schools/teachers, and institutions (ministries, NGOs, training academies) across Jordan + GCC.
- **Goals:** more inquiries (WhatsApp/contact form), not just traffic.
- **Current site:** static GitHub Pages site (rebuilt this session from a broken RSC-hydration architecture), 9 core "modern" pages + 36 insight articles, Person/Organization/Service/BreadcrumbList/FAQPage schema in place, GCC areaServed added, zero reviews, **zero maps-platform presence** (see [MAPS-ANALYSIS-drosamajuma.com.md](MAPS-ANALYSIS-drosamajuma.com.md)).
- **Budget/timeline:** not stated by user — plan assumes solo-operator bandwidth (no dedicated marketing team), so phases favor low-effort/high-leverage actions over paid tactics.
- **KPI focus:** inquiries (WhatsApp clicks, contact form submits, phone calls), not vanity traffic.

## 2. Competitive Landscape (carried over from prior `/seo-sxo` and `/seo-maps` research; not re-verified this pass)

| Competitor | Positioning | Gap vs. Dr. Osama |
|---|---|---|
| EICADD | Autism/therapy center, explicitly "الأردن والدول الخليجية" | Institutional, not personal-expert-led; no named consultant brand |
| Jordanian Autism Academy | Autism treatment center | Narrow (autism only) vs. Dr. Osama's broader inclusive-education scope |
| Queen Rania Teacher Academy | Government-backed teacher training | Dominates generic "تدريب معلمين التعليم الدامج" queries via institutional authority — hard to outrank head-on, but has no 1:1 consulting offer |
| Mutah/Yarmouk University programs | Academic diplomas | Competes on formal certification, not ongoing consulting relationships |

**Strategic takeaway:** none of these competitors have a personal, named, credentialed expert brand with a genuine content library — that gap is Dr. Osama's differentiator and the content strategy below leans into it. The **local map-pack space is currently uncontested** (no GBP among any of these competitors for individual-consultant queries), which is the single highest-leverage near-term opportunity.

## 3. Architecture (current state vs. target)

Current: `/`, `/family-guidance`, `/iep`, `/teacher-training`, `/institutional-consulting`, `/taleem-damej`, `/autism`, `/adhd`, `/tamhid-mubakir`, `/videos`, `/insights` (+36 article pages), `/404`.

This already matches the Agency template's core shape (services + insights/blog + about-equivalent via Person schema) reasonably well. Recommended additions, not a rebuild:
- `/about` (dedicated page) — currently identity/credentials live only in schema + scattered mentions; a real about page consolidates E-E-A-T signals (see Phase 1).
- `/reviews` or a testimonials section — blocked until real testimonials exist (Phase 2+, needs client permission).
- No `/locations` city-tree — correctly avoided; a solo remote consultant listing dozens of GCC cities would trip the Local-Service template's quality-gate warnings (30+ location pages) for zero real benefit. Country-level `areaServed` (already implemented) is the right granularity.

## 4. Content Strategy

**Content gap vs. competitors:** Dr. Osama already outproduces all 4 named competitors on independent published content (36 articles vs. their near-zero blog presence) — this is a real, defensible lead. The gap is not volume, it's **proof-of-expertise formats**: case studies, testimonials, and downloadable resources, none of which exist yet.

| Priority | Content type | Count/cadence |
|---|---|---|
| High | Case studies (anonymized, family-permission) | 2-3 to start, add as consulting relationships allow |
| High | Downloadable IEP template/checklist (real asset, gated or ungated) | 1 flagship asset |
| Medium | Continue insights articles | 2-4/month, GCC and format variety (video-transcript articles, myth-busting) |
| Medium | Video content (already has a videos page + FB embed) | leverage existing FB video output, cross-link into articles |
| Low | Guest posts / interviews on education outlets (Petra, Al-Dustour — outreach templates already drafted this session) | opportunistic |

## 5. Technical Foundation

- Static GitHub Pages + Cloudflare — stable now after the hydration rebuild; no framework migration needed.
- Schema: Person/Organization/Service/BreadcrumbList/FAQPage present; **ProfessionalService schema recommended** (drafted in the Maps report) — add in Phase 1.
- Core Web Vitals: not independently re-measured this pass; prior session audits found no major CWV blockers post-rebuild.
- AI/GEO readiness: crawler access, llms.txt, passage-level citability already addressed in prior `/seo-geo` pass.
- Mobile: verified working in prior full-site audits this session.

## 6. Implementation Roadmap

### Phase 1 — Foundation (Weeks 1-4)
1. Claim **Google Business Profile** as a Service-Area Business (Educational Consultant category, GCC countries as service area) — highest-leverage single action available (Critical, from Maps audit).
2. Claim **Bing Places** listing.
3. Add **ProfessionalService JSON-LD** (already drafted, ready to implement — I can do this on request).
4. Build a dedicated `/about` page consolidating credentials, photo, and a first-person narrative (currently schema-only).
5. Set up basic inquiry tracking if not already present (WhatsApp click events, contact form submits) so Phase 2+ has a real KPI baseline.

### Phase 2 — Expansion (Weeks 5-12)
1. Begin collecting reviews on the new GBP (18-day cadence target per Whitespark guidance).
2. Produce first 2 case studies (needs family permission — flag to user).
3. Build the flagship downloadable IEP resource.
4. Continue insights cadence (2-4 articles/month).
5. Add an OpenStreetMap node for the business (free, permanent).

### Phase 3 — Scale (Weeks 13-24)
1. Outreach using the drafted backlink email templates (Petra, Al-Dustour, University of Jordan).
2. Expand case studies to 4-5.
3. Re-run `/seo-maps` once GBP has enough history to show real signal (geo-grid becomes meaningful only with DataForSEO — flag as optional paid step).
4. Monitor competitor visibility for "استشاري تربية خاصة عمان" and similar — currently unclaimed territory.

### Phase 4 — Authority (Months 7-12)
1. Pursue speaking/media mentions (thought-leadership angle — Dr. Osama's academic credential + GCC reach is a genuine differentiator vs. institutional competitors).
2. Apple Business Connect claiming once Google/Bing are established.
3. Continuous schema/content refresh based on GSC query data (already being monitored this session).

## 7. KPI Targets

| Metric | Baseline (2026-09-29) | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| WhatsApp/contact inquiries | Unmeasured (no tracking confirmed) | Establish baseline | +25% vs. baseline | +75% vs. baseline |
| GBP presence | None | Claimed + verified | 5+ reviews | 15+ reviews |
| Published articles | 36 | 40-44 | 48-56 | 60+ |
| Indexed pages (GSC) | Per last GSC check this session | Stable, redirect issues resolved | Growing with new content | Growing |
| Maps Health Score | 8/100 | 40+/100 (GBP claimed & built out) | 55+/100 | 65+/100 |

Domain Authority and organic-traffic baselines are intentionally left blank — no GA4/Ahrefs/Moz access has been confirmed this session; fill in once `seo-google`/`seo-dataforseo`/`seo-backlinks` agents are run with live credentials.

## 8. Success Criteria & Risks

- **Success = inquiry growth**, not traffic growth — every phase above is sequenced toward that (GBP → trust signals → conversion-ready content).
- **Biggest risk:** Phase 1's top action (GBP claim) requires the site owner's own Google account and cannot be done by me — flag this explicitly to the user as the #1 blocker to resolve first.
- **Dependency:** case studies and testimonials (Phase 2) depend on real client permission — cannot be fabricated; flagged as a standing constraint from this session's norms.
