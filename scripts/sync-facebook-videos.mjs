// Syncs new Facebook Page videos/reels into docs/videos/index.html.
//
// Requires the environment variable FB_PAGE_ACCESS_TOKEN (a long-lived Facebook
// Page access token with pages_read_engagement permission for this page).
// Never hardcode that token in this file or commit it anywhere.
//
// Run locally with: FB_PAGE_ACCESS_TOKEN=xxx node scripts/sync-facebook-videos.mjs
// Add DRY_RUN=1 to see what would change without writing any files.

import fs from "node:fs";
import path from "node:path";

const PAGE_ID = "61582179417619";
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.DRY_RUN === "1";
const GRAPH_VERSION = "v19.0";
const VIDEOS_FILE = path.resolve("docs/videos/index.html");
const SITEMAP_FILES = ["docs/sitemap.xml", "public/sitemap.xml"];

const PLAY_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>';
const EXT_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>';

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Turn a raw Facebook caption into a short, presentable title.
function deriveTitle(raw) {
  if (!raw) return "فيديو جديد";
  let t = raw
    .replace(/https?:\/\/\S+/g, "")
    .replace(/#\S+/g, "")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/\s+/g, " ")
    .replace(/…\s*See more$/i, "")
    .trim();
  // Prefer the first sentence-like chunk.
  const firstSentence = t.split(/(?<=[؟?!.])\s/)[0];
  if (firstSentence && firstSentence.length >= 12) t = firstSentence;
  if (t.length > 90) t = t.slice(0, 87).trim() + "…";
  return t || "فيديو جديد";
}

async function fetchLatestVideos() {
  if (!TOKEN) throw new Error("FB_PAGE_ACCESS_TOKEN is not set");

  const attempts = [
    `https://graph.facebook.com/${GRAPH_VERSION}/${PAGE_ID}/video_reels?fields=id,description,permalink_url&limit=15&access_token=${TOKEN}`,
    `https://graph.facebook.com/${GRAPH_VERSION}/${PAGE_ID}/videos?fields=id,description,permalink_url,title&limit=15&access_token=${TOKEN}`,
  ];

  for (const url of attempts) {
    const res = await fetch(url);
    const body = await res.json();
    if (res.ok && Array.isArray(body.data)) {
      console.log(`Fetched ${body.data.length} items from ${url.split("?")[0]}`);
      return body.data;
    }
    console.warn(`Attempt failed (${url.split("?")[0]}):`, body.error?.message || res.status);
  }
  throw new Error("All Graph API attempts failed — see warnings above.");
}

function extractExistingIds(html) {
  const ids = new Set();
  for (const m of html.matchAll(/facebook\.com\/(?:reel|watch\/?\?v=|[^/"]+\/videos)\/?(\d+)/g)) {
    ids.add(m[1]);
  }
  return ids;
}

function maxVideoNumber(html) {
  let max = 0;
  for (const m of html.matchAll(/video-number">(\d+)</g)) {
    max = Math.max(max, parseInt(m[1], 10));
  }
  return max;
}

function buildCard(item, number, permalink) {
  const title = escapeHtml(deriveTitle(item.description || item.title));
  return (
    `<li><a class="video-card" href="${permalink}" target="_blank" rel="noopener noreferrer" ` +
    `aria-label="${title} — مشاهدة على فيسبوك"><span class="video-card-top">` +
    `<span class="video-play" aria-hidden="true">${PLAY_SVG}</span>` +
    `<span class="video-number">${String(number).padStart(2, "0")}</span></span>` +
    `<strong>${title}</strong><span class="video-card-link">مشاهدة الفيديو الأصلي${EXT_SVG}</span></a></li>`
  );
}

function normalizePermalink(item) {
  if (item.permalink_url) {
    return item.permalink_url.startsWith("http")
      ? item.permalink_url
      : `https://www.facebook.com${item.permalink_url}`;
  }
  return `https://www.facebook.com/${PAGE_ID}/videos/${item.id}/`;
}

async function main() {
  const html = fs.readFileSync(VIDEOS_FILE, "utf-8");
  const existingIds = extractExistingIds(html);
  const items = await fetchLatestVideos();

  const newItems = items.filter((it) => {
    const permalink = normalizePermalink(it);
    const idMatch = permalink.match(/(\d+)\/?(?:\?.*)?$/);
    const id = idMatch ? idMatch[1] : it.id;
    return !existingIds.has(id) && !existingIds.has(it.id);
  });

  if (newItems.length === 0) {
    console.log("No new videos found. Nothing to do.");
    return;
  }

  console.log(`Found ${newItems.length} new video(s).`);

  let nextNumber = maxVideoNumber(html) + 1;
  const cardsHtml = newItems
    .map((it) => {
      const card = buildCard(it, nextNumber, normalizePermalink(it));
      nextNumber += 1;
      return card;
    })
    .join("");

  const startMarker = "<!-- AUTO-VIDEOS-START -->";
  const endMarker = "<!-- AUTO-VIDEOS-END -->";
  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error("AUTO-VIDEOS markers not found in docs/videos/index.html");
  }

  const existingAuto = html.slice(startIdx + startMarker.length, endIdx);
  let updated =
    html.slice(0, startIdx + startMarker.length) +
    cardsHtml +
    existingAuto +
    html.slice(endIdx);

  // Bump the "latest" nav badge count.
  const currentCountMatch = updated.match(/id="latest-count">(\d+)</);
  const currentCount = currentCountMatch ? parseInt(currentCountMatch[1], 10) : 0;
  updated = updated.replace(
    /id="latest-count">\d+</,
    `id="latest-count">${currentCount + newItems.length}<`
  );

  if (DRY_RUN) {
    console.log("--- DRY RUN: would write the following cards ---");
    console.log(cardsHtml);
    return;
  }

  fs.writeFileSync(VIDEOS_FILE, updated, "utf-8");

  const today = new Date().toISOString().replace(/\.\d+Z$/, ".000Z");
  for (const sitemapFile of SITEMAP_FILES) {
    if (!fs.existsSync(sitemapFile)) continue;
    let sitemap = fs.readFileSync(sitemapFile, "utf-8");
    sitemap = sitemap.replace(
      /(<loc>https:\/\/drosamajuma\.com\/videos\/<\/loc>\s*<lastmod>)[^<]*(<\/lastmod>)/,
      `$1${today}$2`
    );
    fs.writeFileSync(sitemapFile, sitemap, "utf-8");
  }

  console.log(`Wrote ${newItems.length} new video card(s) to docs/videos/index.html.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
