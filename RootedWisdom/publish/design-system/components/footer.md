---
title: Footer
layout: design-system
eleventyExcludeFromCollections: true
---

# Footer

**Type:** Collection &nbsp;·&nbsp; **Partial:** `partials/footer.njk` &nbsp;·&nbsp; **Data:** `_data/social.yaml`

Bark background, 4-column grid. Brand column with logo, wordmark, tagline, social bar, and email. Three nav columns. Gradient divider. Base bar with copyright and legal links. Fully token-driven — adapts to all themes automatically.

---

## Live example

*The footer at the bottom of this page is the live component.*

---

## Layout

`2fr 1fr 1fr 1fr` — brand column takes the left, three nav columns fill the right. Collapses to 2-col at 900px (brand spans full width), 1-col at 600px.

---

## Tokens used

| Token | Role | Min contrast |
|---|---|---|
| `--color-footer-bg` | Background | — |
| `--color-footer-wordmark` | Brand name | 4.5:1 |
| `--color-footer-text` | Links, tagline, email | 4.5:1 |
| `--color-footer-label` | Col headings, copyright | 3:1 |
| `--color-footer-hover` | Link hover state | — |

All five must be defined in every theme block in `_themes.scss`.

---

## `buildYear`

Copyright year is computed at build time — never hardcode it. Defined in `.eleventy.js` via `addGlobalData`, referenced in the partial as `{{ buildYear }}`.

---

## Notes

- Lives in `base.njk` — no include needed on content pages
- No Obsidian template — this component is not dropped into content
- Social bar uses icons + dark defaults automatically — no `set` needed
- Never add `container` wrapper classes — max-width is managed internally
- All `<p>` elements inside have `max-width: none` to override the 68ch rule
