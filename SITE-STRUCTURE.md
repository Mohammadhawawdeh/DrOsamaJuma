# Site Structure — drosamajuma.com

Compiled 2026-09-29. Current architecture vs. recommended additions (Agency + Local-Service hybrid template).

## Current URL Hierarchy (verified this session)

```
/
├── /family-guidance
├── /iep
├── /teacher-training
├── /institutional-consulting
├── /taleem-damej
├── /autism
├── /adhd
├── /tamhid-mubakir
├── /videos
├── /insights
│   └── /insights/<slug>  (36 articles)
└── /404
```

## Recommended Additions

```
/
├── /cv                         [EXISTING but was orphaned — now linked in nav + footer sitewide, Phase 1 done]
├── /reviews                    [NEW — Phase 2+, blocked on GBP reviews existing]
```

**Correction to original recommendation:** a dedicated `/about` page was not needed — `/cv/` already exists as a complete E-E-A-T page (education timeline, professional experience, published research, conferences, credentials) but was not linked from any nav or footer on the site. Implemented fix: added a "نبذة عني" link to the desktop nav, mobile nav, and footer on all 11 main pages (`/`, `/adhd`, `/autism`, `/family-guidance`, `/iep`, `/institutional-consulting`, `/taleem-damej`, `/tamhid-mubakir`, `/teacher-training`, `/videos`, `/404`), so the page is now discoverable instead of duplicating its content.

## What NOT to Add (explicit quality-gate decisions)

- **No `/locations/<city>` tree.** The Local-Service template's own quality gates warn at 30+ location pages and hard-stop at 50+. A solo remote consultant listing individual GCC cities would produce thin, duplicate-feeling pages for zero real ranking benefit — country-level `areaServed` in schema (already implemented) is the correct granularity for a Service-Area Business.
- **No `/team` section.** Solo practitioner — the Agency template's team-page pattern doesn't apply; all E-E-A-T weight should concentrate on the single `/about` page + Person schema instead of being diluted across a team structure that doesn't exist.
- **No `/case-studies` top-level section yet.** Until real case studies exist (Phase 2, pending client permission), do not scaffold empty placeholder pages — thin/empty pages actively hurt more than a missing section.

## Internal Linking Strategy

- Each of the 9 service pages (`/iep`, `/autism`, `/adhd`, etc.) already links out to relevant `/insights/<slug>` articles via "اقرأ أيضًا" (related) sections — maintain this pattern for all new articles per `CONTENT-CALENDAR.md`.
- New `/about` page should be linked from the site header/footer (currently absent) and cross-linked from every service page as the primary trust/credential anchor.
- `/videos` should continue cross-linking into related `/insights` articles where a video and article cover the same topic (partially done via the Facebook Page Plugin embed added this session).

## Sitemap

`docs/sitemap.xml` and `public/sitemap.xml` (mirrored) are current as of this session's last content batch — add entries for `/about` and any new articles per `CONTENT-CALENDAR.md` as they're built; no structural sitemap changes needed otherwise.
