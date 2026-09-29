# Maps Intelligence Analysis — drosamajuma.com

Audit date: 2026-09-29. Business: Dr. Osama Juma (د. أسامه جمعه), inclusive-education/special-education consultant, Amman, Jordan, serving Jordan + 6 GCC countries remotely.

## 1. Maps Health Score: 8/100

| Dimension | Weight | Score | Why |
|---|---|---|---|
| GBP presence & completeness | 40% | 0/40 | No Google Business Profile exists at all — confirmed repeatedly this session via direct Google Search (no map pack, no knowledge panel for brand searches) |
| Review signals | 20% | 0/20 | Zero reviews on any platform |
| Cross-platform NAP consistency | 20% | 4/20 | Only the website itself carries consistent NAP (in schema); not found on Bing Places, OSM, or Apple |
| Schema / structured data | 10% | 4/10 | Person schema exists with homeLocation + telephone, but no LocalBusiness/ProfessionalService node |
| Competitive visibility | 10% | 0/10 | Not discoverable in any maps-adjacent local search performed |

**This is a pre-existing, already-known finding** — not new information, just now scored against the Maps-specific rubric rather than the website-side rubric `/seo local` used earlier.

## 2. Capability Tier Detected: Tier 0 (Free)

No DataForSEO MCP tools are available in this session, so this audit uses Overpass API, Nominatim, and direct WebFetch checks only. **No geo-grid rank tracking, no live GBP field data, no review velocity/sentiment analysis, and no paid competitor density scoring were possible.** Everything below is what Tier 0 can actually verify — install the DataForSEO extension for the deeper checks.

## 3. Geo-Grid Heatmap: Not available (Tier 1+ only)

## 4. GBP Profile Audit (Tier 0 — manual/static, since no profile exists to fetch)

| Field | Status |
|---|---|
| Business claimed | **Missing (Critical)** |
| Primary category | N/A — no profile |
| Service-area vs. storefront setup | Should be Service-Area Business — no public address exists on-site (correct for a remote consultant) |
| Phone | Available in site schema (+962776121914) but not yet attached to any GBP |
| Website link | N/A |
| Hours | N/A — by-appointment, but should still be set once claimed |
| Photos | One profile photo exists (dr-osama.jpg); no gallery |
| Posts | N/A |
| Q&A | N/A |
| Reviews | Zero |

All 25 checklist fields are effectively "Missing" because there is no profile to populate. This is the single highest-leverage action across every audit run on this site this session.

## 5. Review Intelligence: Not available (Tier 1+ only)

Zero reviews exist on any platform (confirmed by absence, not measured via API). No velocity, sentiment, or distribution data possible until a profile exists and starts collecting reviews.

## 6. Competitor Landscape (Tier 0 — Overpass, cross-referenced with this session's prior WebSearch findings)

**Overpass API query** (educational institutions within ~10km of central Amman) returned only 4 nodes, none in this niche: DJUCO, Misbah Center, Sijal Institute (Arabic language/culture), Al-Umma Studies Center. **OpenStreetMap has essentially no coverage of individual special-education consultants or small inclusive-education practices in Amman** — this is a real data gap in OSM itself, not evidence of an empty market.

The real competitive landscape, from this session's earlier keyword-level research, is more useful than what Tier 0 maps APIs can surface for this niche:

| Competitor | Type | Notable |
|---|---|---|
| EICADD | Autism/therapy center | Explicitly serves **"الأردن والدول الخليجية"** — Jordan AND Gulf countries, the exact same combined market Dr. Osama targets |
| Jordanian Autism Academy (الأكاديمية الأردنية للتوحد) | Autism-focused center | Positions on treatment outcomes, not educational consulting |
| Queen Rania Teacher Academy | Government-backed teacher training | Dominates "تدريب معلمين التعليم الدامج" searches with institutional authority |
| Mutah University / Yarmouk University | Academic diploma programs | Compete on formal teacher-training certification, not consulting |

None of these appear on Google Maps for searches an individual family would actually run locally (e.g. "استشاري تربية خاصة عمان" was previously confirmed dominated by unrelated doctor-booking directories, not these named competitors either) — meaning the local map-pack space for this specific query is currently uncontested. That's an opportunity, not just a gap.

## 7. Cross-Platform Presence

| Platform | Status |
|---|---|
| Google Maps / GBP | **Not found** — confirmed via direct search this session |
| Bing Places | **Not found** — WebFetch of Bing Maps search returned no listing result |
| Apple Business Connect | **Unknown** — no public API to verify; likely unclaimed given the Google/Bing pattern, but not independently confirmed |
| OpenStreetMap | **Not found** — no matching node for the business name |

Consistent story across every platform checked: zero maps-platform presence anywhere, not just Google.

## 8. Schema Recommendation

The site currently has Person schema (with `homeLocation`, `telephone`, `hasCredential`, `areaServed`) but no dedicated LocalBusiness-family schema. Recommended addition (to homepage and/or `/institutional-consulting/`), as a **ProfessionalService** — the most accurate subtype for an individual consultant, service-area business, no public storefront:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://drosamajuma.com/#business",
  "name": "د. أسامه جمعه — خبير التعليم الدامج",
  "image": "https://drosamajuma.com/dr-osama.jpg",
  "url": "https://drosamajuma.com",
  "telephone": "+962776121914",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "عمّان",
    "addressCountry": "JO"
  },
  "areaServed": [
    {"@type": "Country", "name": "الأردن"},
    {"@type": "Country", "name": "السعودية"},
    {"@type": "Country", "name": "الإمارات"},
    {"@type": "Country", "name": "قطر"},
    {"@type": "Country", "name": "الكويت"},
    {"@type": "Country", "name": "البحرين"},
    {"@type": "Country", "name": "عُمان"}
  ],
  "founder": {"@id": "https://drosamajuma.com/#person"}
}
```

**Not included:** `aggregateRating` (no real reviews exist — self-serving review markup with no reviews would be worse than omitting it; add only once genuine reviews exist on a claimed profile) and `openingHoursSpecification` (by-appointment; add once confirmed with the site owner).

## 9. Top 10 Prioritized Actions

1. **(Critical)** Claim and fully build a Google Business Profile as a Service-Area Business, category "Educational Consultant," service area = Jordan + the 6 named GCC countries. This alone would move the score from 8/100 to a fundamentally different starting point — it's the one action every audit this session has converged on.
2. **(Critical)** Once claimed, verify via phone/postcard per Google's process (site owner's account, not something I can do).
3. **(High)** Claim a Bing Places listing — free, low-effort, currently completely absent.
4. **(High)** Add the ProfessionalService schema above (I can implement this directly — say the word).
5. **(High)** Begin collecting reviews immediately after GBP goes live — zero baseline means every review from day one meaningfully changes the picture.
6. **(Medium)** Add an OpenStreetMap node for the business (anyone can contribute via osm.org) — free, permanent, feeds Nominatim/Overpass-based tools broadly.
7. **(Medium)** Investigate Apple Business Connect claiming (requires an Apple ID + business verification, site owner's action).
8. **(Medium)** Once GBP exists, monitor competitor visibility for "استشاري تربية خاصة عمان" and similar — currently no real competitor occupies this exact local-pack space, a genuine first-mover opportunity.
9. **(Low)** Add photos beyond the single profile image once a GBP exists (before/after workshop photos, session setup, etc. — needs real assets from the owner).
10. **(Low)** Revisit this analysis with DataForSEO installed for live geo-grid tracking once a GBP exists and has enough history to actually rank-track.

## 10. Cost Report

Tier 0 only — no DataForSEO credits consumed. Overpass API and Nominatim are free/open. No paid API calls were made.

## 11. Limitations

- No DataForSEO access this session — no geo-grid rank tracking, no live GBP field pull, no review velocity/sentiment, no paid competitor density scoring. Everything here is presence/absence verification, not ranking measurement.
- OpenStreetMap has near-zero coverage of small individual consultancies in this niche in Amman — the "competitor landscape" section relies on this session's earlier keyword-level WebSearch findings instead, which is a different (less local-map-specific) kind of evidence.
- Bing Places and Apple Business checks were done via unauthenticated WebFetch, which can't fully replicate what a logged-in map search or the Bing Places dashboard would show — absence here is a strong signal but not a 100%-certain negative.
- Item 1-2 (GBP claim + verification) and item 7 (Apple) require the site owner's own account access; I flagged them rather than attempting any workaround.
