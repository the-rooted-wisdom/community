const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {

  // Global data
  eleventyConfig.addGlobalData('buildYear', () => new Date().getFullYear());

  // Pass through
  // Note: assets/css is excluded — Sass compiles directly to _site/assets/css/
  eleventyConfig.addPassthroughCopy({ "assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy("RootedWisdom/publish/imgs");

  // Don't use .gitignore to exclude files
  eleventyConfig.setUseGitIgnore(false);

  // Obsidian saves files atomically (write to temp → rename)
  // which can cause chokidar to miss the change.
  // awaitWriteFinish gives the file time to settle before triggering a rebuild.
  eleventyConfig.setChokidarConfig({
    usePolling: false,
    awaitWriteFinish: {
      stabilityThreshold: 150,
      pollInterval: 50
    }
  });

  // Small throttle so rapid Obsidian saves don't queue multiple rebuilds
  eleventyConfig.setWatchThrottleWaitTime(200);

  // Enable YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Markdown configuration
  const markdownLib = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLib);

  // ── Filters ──────────────────────────────────────────

  // split — Nunjucks has no built-in split filter. Keep this available for
  // any template that needs to split a string by delimiter.
  eleventyConfig.addFilter("split", function(str, sep) {
    if (str === null || str === undefined) return [];
    return String(str).split(sep);
  });

  // dateRange — format two YYYY-MM-DD (or Date objects) into a display range.
  //   Same month:    "October 29–31, 2026"     (en-dash)
  //   Cross-month:   "October 29 — November 1, 2026"  (em-dash)
  //   Cross-year:    "December 29, 2026 — January 2, 2027"
  //   Single date:   "October 29, 2026"
  eleventyConfig.addFilter("dateRange", function(start, end) {
    if (!start) return "";

    const parseDate = (d) => {
      if (!d) return null;
      if (d instanceof Date) return d;
      // Parse YYYY-MM-DD as local date to avoid UTC timezone shift
      const m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
      const fallback = new Date(d);
      return isNaN(fallback.getTime()) ? null : fallback;
    };

    const s = parseDate(start);
    const e = parseDate(end);
    if (!s) return "";

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const sm = months[s.getMonth()], sd = s.getDate(), sy = s.getFullYear();

    if (!e) return `${sm} ${sd}, ${sy}`;
    const em = months[e.getMonth()], ed = e.getDate(), ey = e.getFullYear();

    if (sy !== ey)                  return `${sm} ${sd}, ${sy} — ${em} ${ed}, ${ey}`;
    if (s.getMonth() !== e.getMonth()) return `${sm} ${sd} — ${em} ${ed}, ${sy}`;
    return `${sm} ${sd}–${ed}, ${sy}`;
  });

  // ── Shortcodes ───────────────────────────────────────

  // glyph — inline an SVG from /assets/img/glyphs/ so it can be tinted via currentColor.
  //   Usage: {% glyph "water-wave" %}  or  {% glyph someVar %}
  const glyphDir = path.join(__dirname, "assets", "img", "glyphs");
  const glyphCache = {};
  eleventyConfig.addShortcode("glyph", function(key) {
    if (!key) return "";
    if (glyphCache[key] !== undefined) return glyphCache[key];
    const file = path.join(glyphDir, `${key}.svg`);
    try {
      const svg = fs.readFileSync(file, "utf8");
      glyphCache[key] = svg;
      return svg;
    } catch (err) {
      glyphCache[key] = `<!-- glyph not found: ${key} -->`;
      return glyphCache[key];
    }
  });

  // ── Collections ──────────────────────────────────────

  // Workshops: all pages under /workshops/ except the index
  eleventyConfig.addCollection("workshops", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.url &&
        item.url.startsWith("/workshops/") &&
        item.url !== "/workshops/";
    }).sort((a, b) => {
      // Sort by eventDate ascending if present, otherwise by date
      const aDate = a.data.eventDate ? new Date(a.data.eventDate) : a.date;
      const bDate = b.data.eventDate ? new Date(b.data.eventDate) : b.date;
      return aDate - bDate;
    });
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "RootedWisdom/publish",
      includes: "../../_includes",
      layouts: "../../_includes/layouts",
      data: "../../_data",
      output: "_site"
    }
  };
};