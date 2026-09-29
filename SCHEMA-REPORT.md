# Schema Markup Report — drosamajuma.com

Audit date: 2026-09-29. Live JSON-LD extracted and validated from every page template on the site (homepage, 8 service/topic pages, `/videos/`, `/cv/`, `/insights/` hub, and a sample article).

## Detection Summary

| Page(s) | Schema types present | Format |
|---|---|---|
| Homepage | Person, WebSite, ProfessionalService, ProfilePage, FAQPage | JSON-LD |
| 8 service/topic pages (`/iep/`, `/autism/`, `/adhd/`, `/teacher-training/`, `/family-guidance/`, `/taleem-damej/`, `/tamhid-mubakir/`, `/institutional-consulting/`) | Person, WebSite, Service, BreadcrumbList, FAQPage | JSON-LD |
| `/videos/` | Person, WebSite, CollectionPage, ItemList (60 items), BreadcrumbList | JSON-LD |
| `/insights/` hub | CollectionPage | JSON-LD |
| Insights articles (sampled) | Article, BreadcrumbList | JSON-LD |
| `/cv/` | Person (standalone, **not** cross-referenced — see Findings) | JSON-LD |

No Microdata or RDFa found anywhere — JSON-LD used exclusively, consistent with Google's stated preference. No `@context`/`@type` omissions found on any block.

## Validation Results

| Schema | Page(s) | Status | Issues |
|---|---|---|---|
| Person (canonical, `@id: #person`) | Homepage, all service pages, `/videos/`, articles (via `author`) | ✅ | Fully cross-referenced via `@id` everywhere except `/cv/` |
| WebSite | Homepage, service pages, `/videos/` | ✅ | Consistent `@id` reference |
| ProfessionalService | Homepage | ✅ | Added this session; valid, `areaServed` correct |
| ProfilePage | Homepage | ✅ | Valid `mainEntity` + `breadcrumb` |
| Service | 8 service/topic pages | ✅ | `@id`, `areaServed`, `provider` (`@id`-referenced), `audience` all present. Minor: no `serviceType` property (optional, Low) |
| FAQPage | Homepage + 8 service pages | ⚠️ Info | No rich-result value since May 2026 retirement — correctly retained, not flagged for removal per this skill's own guidance |
| BreadcrumbList | Service pages, `/videos/`, articles | ✅ | Valid `ListItem` position/name/item on every instance checked |
| CollectionPage + ItemList | `/videos/` | ✅ | 60 `ListItem` entries, all with `position`/`name`/absolute `url` (Facebook reel URLs). Valid but uses generic `ListItem` rather than `VideoObject` — see Recommendations |
| CollectionPage | `/insights/` hub | ⚠️ Low | Valid but minimal — no `BreadcrumbList`, no `ItemList` of articles |
| Article | Insights articles (sampled) | ✅ | `@id`, `author` (`@id`-referenced to canonical Person), `publisher` (Organization + logo), `image`, dates all present |
| **Person (standalone)** | **`/cv/`** | ❌ **High** | **Disconnected duplicate entity — no `@id`, different `url` (`/cv/` vs canonical `https://drosamajuma.com`), missing `honorificPrefix`, `hasCredential`, `telephone`, `image`, `areaServed` that the canonical node has** |

No deprecated types found anywhere (no HowTo, SpecialAnnouncement, ClaimReview, VehicleListing, etc.). No placeholder text, no relative URLs, no invalid date formats detected in any block sampled.

## Findings

### High: `/cv/` has a disconnected, duplicate Person entity

Every other page on the site (homepage, service pages, `/videos/`, and every article's `author` field) references the single canonical Person node via `{"@id": "https://drosamajuma.com/#person"}` — this is the entity-consolidation pattern already established sitewide this session. `/cv/` is the one exception: it defines a second, standalone Person object with no `@id`, a different `url` (`https://drosamajuma.com/cv/` instead of the canonical `https://drosamajuma.com`), and missing several fields the canonical node carries (`honorificPrefix`, `hasCredential`, `telephone`, `image`, `areaServed`). This risks Google treating "Dr. Osama Juma the homepage entity" and "Dr. Osama Juma the CV-page entity" as two different, less-authoritative things instead of reinforcing one strong entity — the opposite of what the rest of the site's schema work this session was designed to do.

**Fix applied:** replaced the standalone Person block on `/cv/` with a `ProfilePage` node (matching the exact pattern already used on the homepage) whose `mainEntity` references the canonical `@id`, plus a `BreadcrumbList`. No data is lost — the canonical Person node already carries everything the old `/cv/` block had, plus more.

### Low: `/insights/` hub CollectionPage is minimal

No `BreadcrumbList`, no `ItemList` enumerating the 36 published articles. Not wrong, just an easy enhancement opportunity — lower priority than the `/cv/` fix since it carries no entity-consolidation risk.

### Low: `/videos/` ItemList uses generic `ListItem` instead of `VideoObject`

Would only be worth upgrading if per-video metadata (thumbnail, upload date, duration) were readily available without scraping each of the 60 Facebook reels individually — not worth the effort for the likely rich-result gain given these are third-party-hosted reels, not self-hosted video.

### Low: `Service` blocks could add `serviceType`

Optional property, e.g. `"serviceType": "التربية الخاصة"` — cosmetic completeness, not a validation issue.

## Recommendations Applied This Pass

1. **Fixed:** `/cv/` Person entity fragmentation (see above) — implemented, pushed.

## Recommendations Not Applied (Low priority, available on request)

1. Add `BreadcrumbList` + `ItemList` to `/insights/` hub.
2. Add `serviceType` to the 8 `Service` blocks.
3. Consider `VideoObject` for `/videos/` if per-reel metadata ever becomes available.
