---
title: Themes
layout: design-system
eleventyExcludeFromCollections: true
---

<p class="fdn-chapter-eyebrow">Chapter 01 · Architecture</p>

# Themes

<p class="fdn-chapter-lede">One component system, theme-swapped via CSS custom properties. Set a theme in front matter and every element — nav, footer, buttons, tags — shifts automatically. No component-level changes needed.</p>

---

## How themes work

Add `theme:` to any page's front matter:

```yaml
---
title: My Workshop
theme: workshop-ember
---
```

Leave it out and the page uses `main` (parchment) by default.

---

## Live previews

Click any theme below to see it applied to this page.

<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin:1.5rem 0 2.5rem;">
<a href="/design-system/foundation/themes/?preview=main" class="btn btn--ghost btn--sm">Main</a>
<a href="/design-system/foundation/themes/?preview=retreat" class="btn btn--ghost btn--sm">Retreat</a>
<a href="/design-system/foundation/themes/?preview=zine" class="btn btn--ghost btn--sm">Zine</a>
<a href="/design-system/foundation/themes/?preview=workshop-ember" class="btn btn--ghost btn--sm">Ember</a>
<a href="/design-system/foundation/themes/?preview=workshop-botanica" class="btn btn--ghost btn--sm">Botanica</a>
<a href="/design-system/foundation/themes/?preview=workshop-lunar" class="btn btn--ghost btn--sm">Lunar</a>
<a href="/design-system/foundation/themes/?preview=workshop-parchment" class="btn btn--ghost btn--sm">Parchment Light</a>
<a href="/design-system/foundation/themes/?preview=workshop-ceremony" class="btn btn--ghost btn--sm">Ceremony</a>
<a href="/design-system/foundation/themes/?preview=workshop-root" class="btn btn--ghost btn--sm">Root</a>
</div>

---

## Core themes

### Main
`data-theme="main"` · Default — no front matter needed

Parchment warm tones, bark text, rust accents. The primary site identity.

<div class="fdn-theme-card fdn-theme-card--light" style="background:#f0e6cc;">
<p style="font-size:0.58rem;letter-spacing:0.32em;text-transform:uppercase;color:#4a7a9b;margin-bottom:0.5rem;max-width:none;">Eyebrow label</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:400;color:#3b2010;margin-bottom:0.5rem;">Heading in Cormorant <em style="color:#a5500a;">Italic</em></p>
<p style="font-size:0.88rem;font-weight:300;color:#5a3a20;margin-bottom:1rem;max-width:none;">Body copy in Jost. Warm, grounded, readable.</p>
<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
<button class="btn btn--primary">Primary</button>
<button class="btn btn--ghost">Ghost</button>
<span class="tag tag--action">Nervine</span>
<span class="tag tag--system">Nervous</span>
</div>
</div>

### Retreat
`theme: retreat`

Dark atmospheric. Used for retreat pages. Deep ink with gold accents.

<div class="fdn-theme-card" style="background:#110d08;">
<p style="font-size:0.58rem;letter-spacing:0.32em;text-transform:uppercase;color:#b8933e;margin-bottom:0.5rem;max-width:none;">Eyebrow label</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:#f5f0e8;margin-bottom:0.5rem;">Heading in Cormorant <em style="color:#d4af6a;">Italic</em></p>
<p style="font-size:0.88rem;font-weight:300;color:rgba(245,240,232,0.75);margin-bottom:1rem;max-width:none;">Body copy in Jost. Dark, intimate, ceremonial.</p>
<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
<button class="btn btn--dark-primary">Primary</button>
<button class="btn btn--dark-ghost">Ghost</button>
<span class="tag tag--dark-action">Nervine</span>
<span class="tag tag--dark">Nervous</span>
</div>
</div>

### Zine
`theme: zine`

Deep ink and lavender. Editorial character, slightly cooler palette.

<div class="fdn-theme-card" style="background:#0f0e14;">
<p style="font-size:0.58rem;letter-spacing:0.32em;text-transform:uppercase;color:#9e96b0;margin-bottom:0.5rem;max-width:none;">Eyebrow label</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:#c8bedd;margin-bottom:0.5rem;">Heading in Cormorant <em style="color:#b8a8d0;">Italic</em></p>
<p style="font-size:0.88rem;font-weight:300;color:#9e96b0;margin-bottom:1rem;max-width:none;">Body copy in Jost. Ink, editorial, considered.</p>
<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
<button class="btn btn--dark-primary" style="background:#b8a8d0;border-color:#b8a8d0;color:#0f0e14;">Primary</button>
<button class="btn btn--dark-ghost" style="color:#b8a8d0;border-color:rgba(184,168,208,0.4);">Ghost</button>
</div>
</div>

---

## Workshop themes

All workshop themes use `data-theme="workshop-[name]"`. Each has its own distinct palette while sharing the same component structure.

<div class="fdn-workshop-grid">
<div class="fdn-workshop-card" style="background:#1a0f08;">
<p style="font-size:0.6rem;letter-spacing:0.28em;text-transform:uppercase;color:#c9882a;margin-bottom:0.4rem;max-width:none;">workshop-ember</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#f0d8b0;margin-bottom:0.4rem;">Deep fire · amber glow</p>
<p style="font-size:0.75rem;color:rgba(240,216,176,0.65);max-width:none;">Warm candlelight. Rich bark textures.</p>
</div>
<div class="fdn-workshop-card" style="background:#0d130c;">
<p style="font-size:0.6rem;letter-spacing:0.28em;text-transform:uppercase;color:#7a8a5a;margin-bottom:0.4rem;max-width:none;">workshop-botanica</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#d4e0c0;margin-bottom:0.4rem;">Forest floor · moss green</p>
<p style="font-size:0.75rem;color:rgba(212,224,192,0.65);max-width:none;">Lush, grounded, alive.</p>
</div>
<div class="fdn-workshop-card" style="background:#08101a;">
<p style="font-size:0.6rem;letter-spacing:0.28em;text-transform:uppercase;color:#4a7a9b;margin-bottom:0.4rem;max-width:none;">workshop-lunar</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#c8ddf0;margin-bottom:0.4rem;">Midnight sky · cool water</p>
<p style="font-size:0.75rem;color:rgba(200,221,240,0.65);max-width:none;">Moonlit, still, expansive.</p>
</div>
<div class="fdn-workshop-card fdn-workshop-card--light" style="background:#f0e6cc;">
<p style="font-size:0.6rem;letter-spacing:0.28em;text-transform:uppercase;color:#4a7a9b;margin-bottom:0.4rem;max-width:none;">workshop-parchment</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#3b2010;margin-bottom:0.4rem;">Warm daylight · main variant</p>
<p style="font-size:0.75rem;color:#5a3a20;max-width:none;">Like main, slightly deeper surface.</p>
</div>
<div class="fdn-workshop-card" style="background:#0e0814;">
<p style="font-size:0.6rem;letter-spacing:0.28em;text-transform:uppercase;color:#7a5aaa;margin-bottom:0.4rem;max-width:none;">workshop-ceremony</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#e0d0f0;margin-bottom:0.4rem;">Deep violet · sacred night</p>
<p style="font-size:0.75rem;color:rgba(224,208,240,0.65);max-width:none;">Ceremonial, devotional, still.</p>
</div>
<div class="fdn-workshop-card" style="background:#100a06;">
<p style="font-size:0.6rem;letter-spacing:0.28em;text-transform:uppercase;color:#c9882a;margin-bottom:0.4rem;max-width:none;">workshop-root</p>
<p style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#e8d0b0;margin-bottom:0.4rem;">Earth dark · deep rust</p>
<p style="font-size:0.75rem;color:rgba(232,208,176,0.65);max-width:none;">Grounded, ancient, elemental.</p>
</div>
</div>

---

## Adding a new theme

1. Add a new block to `_styles/partials/_themes.scss`:

```scss
[data-theme="workshop-newname"] {
  --color-bg:              #...;
  --color-surface:         #...;
  --color-text:            #...;
  --color-text-mid:        #...;
  --color-text-soft:       #...;
  --color-accent:          #...;
  --color-accent-hover:    #...;
  --color-eyebrow:         #...;
  --color-ornament:        #...;
  --color-border:          ...;
  --color-footer-bg:       #...;
  --color-footer-text:     ...;
  --color-footer-label:    ...;
  --color-footer-hover:    #...;
  --color-footer-wordmark: #...;
  --color-nav-bg:          #...;
  --color-nav-text:        ...;
  --color-nav-active:      #...;
}
```

2. Run a contrast audit — `--color-footer-text` and `--color-text-mid` must hit 4.5:1 against their backgrounds; `--color-footer-label` must hit 3:1.

3. Add the theme to the Workshop Themes grid on this page.

4. Use in front matter: `theme: workshop-newname`

---

## Notes

- Leaving `theme:` out of front matter defaults to `main` via `body:not([data-theme])` in the CSS.
- Workshop themes use `[data-theme^="workshop"]` in nav SCSS — any theme starting with `workshop-` gets the dark nav treatment automatically.
- Never mix tokens across theme zones — parchment palette values don't belong in dark themes and vice versa.
- Missing any token on a new theme = that element renders unstyled. Define all tokens, no exceptions.
