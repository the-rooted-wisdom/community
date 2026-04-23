---
title: Hero Banner
layout: design-system
eleventyExcludeFromCollections: true
---

# Hero Banner

**Type:** Component &nbsp;·&nbsp; **Partial:** `partials/hero.njk` &nbsp;·&nbsp; **SCSS:** `_styles/partials/_hero.scss` &nbsp;·&nbsp; **Obsidian class:** `hero`

Full-width page hero driven entirely by `hero` frontmatter. One component, theme-swapped — the same partial produces the home hero, the retreat hero, the zine hero, and the simplified workshop hero. Renders nothing if no `hero` data is present.

---

## Live examples

*The live component in its current themes:*

- **Main theme** — [home](/) · parchment, watercolor pools, rust + blue CTAs
- **Retreat theme** — [retreats landing](/retreats/) · ink vignette, gold CTAs, date line
- **Zine theme** — *(page not yet built)*
- **Workshop compact** — *(page not yet built)*

---

## Configure in Obsidian

<div class="ds-template-callout">
<span class="ds-template-callout-label">Obsidian Class</span>
<span class="ds-template-callout-title">hero</span>
<p class="ds-template-callout-desc">Apply the <code>hero</code> class via the MetaMenu plugin on any page. The class provides a guided field editor for every hero option so the frontmatter stays structured — no manual YAML.</p>
<ol class="ds-template-steps">
<li>Open the page's properties panel</li>
<li>Add <code>class: hero</code> (or apply via MetaMenu)</li>
<li>Expand the <strong>hero</strong> object and fill in eyebrow, title, description, CTAs, etc.</li>
<li>Save — the partial renders automatically from <code>base.njk</code></li>
</ol>
</div>

No Obsidian insert template exists for this component — it's always configured in frontmatter, never dropped into content.

---

## Fields

All fields live under the top-level `hero:` object in frontmatter.

| Field | Required | Type | Purpose |
|---|---|---|---|
| `eyebrow` | yes | string | Small uppercase label above title |
| `title` | yes | string | Main display heading. Supports pipe syntax for italic — see below |
| `description` | yes | string | Paragraph below the title block |
| `logo` | no | string | Key resolved to an image path — see *Logo* |
| `kicker` | no | string | Secondary announcement line with flanking dashes. Sits between eyebrow and title |
| `subtitle` | no | string | Italic serif line below the title (or below the date on retreats) |
| `divider` | no | string | Ornament under title — SVG key from `/assets/img/glyphs/` |
| `date` | no | object | Retreat-only. `start-date` + `end-date` render as a formatted range |
| `cta` | no | array | 1–2 buttons. Order in array = visual order (btn[0] is leftmost) |
| `glyphs` | no | object | Up to 4 corner decorations. Each corner independently optional |
| `size` | no | string | `full` (default, 100vh) or `compact` (content-sized) |

Top-level `theme:` frontmatter (outside the `hero:` object) swaps the palette and atmospheric treatment. Default is main. See *Themes & atmosphere* below.

---

## Title pipe syntax

The title supports an italicized second portion via a pipe character. The partial splits on `|` and wraps the second half in an italic `<em>` that inherits `--color-accent`.

```yaml
title: The Rooted | Wisdom
# renders: The Rooted
#          Wisdom     (italic, rust on main theme)
```

Without a pipe, the title renders as one solid line.

```yaml
title: SAGE
# renders: SAGE      (single line, no italic)
```

---

## Logo

The `logo` field takes a short key, not a file path. Keys resolve to paths in a map inside the partial. This keeps Obsidian editors from typing filenames and keeps logos in their canonical `/assets/img/` location (shared with nav and footer).

Current keys:

| Key | Resolves to |
|---|---|
| `logo` | `/assets/img/logo.png` |
| `rooted` | `/assets/img/logo.png` *(alias, pending logo reorganization)* |
| `sage` | `/assets/img/logos/sage.png` *(not yet uploaded)* |

The `sage` key also applies a gentle float animation for the zine hero.

**To add a new logo:** drop the file in `/assets/img/logos/` and add a key to the `logoMap` at the top of `_includes/partials/hero.njk`.

---

## Glyphs

Decorative SVGs in each corner. Every corner is independently optional.

```yaml
glyphs:
  top-left: water-wave-hero
  top-right: celestial-sun-hero
  bottom-left: water-wave-hero
  bottom-right: water-wave-hero
```

Each value is a filename (without `.svg`) from `/assets/img/glyphs/`. The partial inlines the SVG so it can be tinted via `currentColor`; every glyph adopts `--color-ornament` automatically per theme.

Available glyphs:

| Key | Use |
|---|---|
| `water-wave-hero` | Two flowing lines with a terminal dot |
| `celestial-sun-hero` | Sun with 8 rays |
| `frame-divider-full` | Horizontal divider — typically used with the `divider` field, not a corner |

**To add a new glyph:** save the SVG to `/assets/img/glyphs/`. Use `currentColor` for strokes and fills — don't hard-code hex values. Then reference by filename in frontmatter.

---

## Divider

Optional ornament directly under the title. Uses the same inline-SVG system as glyphs.

```yaml
divider: frame-divider-full
```

Works on any theme. Scoped to content position only — it doesn't replace the title, it appears beneath it and pushes subsequent content down.

---

## Date range (retreat only)

The retreat hero formats a date range using a custom `dateRange` Nunjucks filter. Date fields are managed as real dates in the MetaMenu picker.

```yaml
date:
  start-date: 2026-10-29
  end-date: 2026-11-01
```

Renders as:

- **Same month** — `October 29–31, 2026` (en-dash)
- **Cross-month** — `October 29 — November 1, 2026` (em-dash)
- **Cross-year** — `December 29, 2026 — January 2, 2027`
- **Single date** (no end) — `October 29, 2026`

---

## CTAs

Array of button objects. Array order = visual order — **btn[0] is leftmost** (or topmost on mobile). The convention is: put the primary action first.

```yaml
cta:
  - btn:
      btn-label: Reserve Your Spot
      btn-link: /stripe-link
      btn-class: dark-primary
  - btn:
      btn-label: Learn More
      btn-link: /#convergence
      btn-class: dark-ghost
```

**`btn-class` is direct pass-through** to the button system. Whatever you write gets prefixed with `btn--`. No theme awareness, no aliases, no translation — frontmatter is the source of truth.

Valid values (from `_buttons.scss`):

| Light context | Dark context |
|---|---|
| `primary` | `dark-primary` |
| `ghost` | `dark-ghost` |
| `subtle` | |
| `blue` | |
| `blue-ghost` | |

Writing a value with no matching class (e.g. `secondary`) will render a visible but unstyled button — intentional, so the mismatch is obvious.

---

## Size variants

```yaml
size: full      # default — 100vh, scroll indicator shown
size: compact   # content-sized, scroll indicator hidden
```

Full heroes anchor content to ~20vh from the top. Compact heroes use tighter padding for secondary landing pages (workshop landing, tier pages).

The scroll indicator is **automatic** based on size — no separate field. Full → shown. Compact → hidden.

---

## Themes & atmosphere

The top-level `theme:` frontmatter controls the palette *and* the atmospheric background of the hero.

| Theme | Background treatment |
|---|---|
| `main` *(or unset)* | Watercolor pool gradients — blue + amber blurred circles in the corners |
| `retreat` | Ink vignette — radial gradient from ink-lift to ink |
| `zine` | Midnight glow — radial gradient, cool center |
| `workshop-parchment` | Subtle pool wash — lighter than main |
| Other workshop themes | Flat rich background, no atmospheric layer |

All themes share a faint noise grain overlay at 3% opacity.

---

## Reference

<details class="ds-code-details">
<summary>Full frontmatter example — retreat</summary>

```yaml
---
layout: base.njk
class: hero
theme: retreat
hero:
  eyebrow: A Rooted Wisdom Retreat
  kicker: Early Bird Now Open
  title: An Ancestral | Excursion
  subtitle: New Orleans, Louisiana
  description: An intimate journey to one of the most ancestrally charged cities in the African diaspora — held at the convergence of Samhain, Día de los Muertos, and Halloween.
  date:
    start-date: 2026-10-29
    end-date: 2026-11-01
  cta:
    - btn:
        btn-label: Reserve Your Spot
        btn-link: /stripe-link
        btn-class: dark-primary
    - btn:
        btn-label: Learn More
        btn-link: /#convergence
        btn-class: dark-ghost
---
```

</details>

<details class="ds-code-details">
<summary>Full frontmatter example — home</summary>

```yaml
---
layout: base.njk
class: hero
hero:
  eyebrow: A Living Herbal School
  title: The Rooted | Wisdom
  subtitle: Rooted in Spirit, Ancestors, and Earth
  description: Where ancestral knowledge, plant medicine, and sacred practice come together — not as separate disciplines, but as one living system. For herbalists, healers, and seekers ready to go deeper.
  logo: logo
  glyphs:
    top-left: water-wave-hero
    top-right: celestial-sun-hero
    bottom-left: water-wave-hero
    bottom-right: water-wave-hero
  cta:
    - btn:
        btn-label: Apply to the Apprenticeship
        btn-link: /learn/apprenticeship/apply
        btn-class: primary
    - btn:
        btn-label: Explore the Community
        btn-link: /learn
        btn-class: blue
---
```

</details>

<details class="ds-code-details">
<summary>Compact variant — workshop landing</summary>

```yaml
---
layout: base.njk
class: hero
theme: workshop-parchment
hero:
  eyebrow: Workshops
  title: Short, focused | classes
  divider: frame-divider-full
  description: Single-session offerings on seasonal medicine, ritual, and the everyday practice of working with plants.
  size: compact
  cta:
    - btn:
        btn-label: Browse All Workshops
        btn-link: /workshops/
        btn-class: primary
---
```

</details>

---

## Notes

- The partial renders only when `hero:` exists in frontmatter. Pages without it pass through untouched.
- Included automatically in `base.njk` above `{{ content }}` — no per-page include needed.
- `subtitle` is generic: on home it reads as a tagline, on retreat as a location. Use it for any italic serif line below the title.
- Title pipe syntax trims whitespace around the `|`. `"The Rooted|Wisdom"` and `"The Rooted | Wisdom"` render identically.
- Glyphs use `currentColor` and inherit `--color-ornament`. Don't hard-code hex in glyph SVGs.
- Custom Nunjucks filter `dateRange` is defined in `.eleventy.js` — restart `npm start` if you modify it.
- Custom shortcode `{% glyph "key" %}` is defined in `.eleventy.js` and available to any template, not just the hero.
- For now, `scroll: true` in frontmatter is ignored — scroll indicator visibility is tied to `size`.
