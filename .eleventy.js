const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("RootedWisdom/publish/imgs");

  // Don't use .gitignore to exclude files
  eleventyConfig.setUseGitIgnore(false);

  // Enable YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Markdown configuration
  const markdownLib = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLib);

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