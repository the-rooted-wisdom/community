---
title: Buttons
layout: design-system
eleventyExcludeFromCollections: true
---

# Buttons

**Type:** Element &nbsp;·&nbsp; **SCSS:** `_styles/partials/_buttons.scss`

Buttons come in two forms: real `<button>` elements for forms, and links styled as buttons using `markdown-it-attrs`. Both use the same classes and render identically.

---

## Use in Obsidian

<div class="ds-template-callout">
<span class="ds-template-callout-label">Obsidian Template</span>
<span class="ds-template-callout-title">components/component-button</span>
<p class="ds-template-callout-desc">Use as an <strong>insert template</strong> — not create new note. Prompts for type (link/form), variant, size, and context, then inserts the correct syntax.</p>
<ol class="ds-template-steps">
<li>Place cursor where the button should appear</li>
<li>Templater → Insert template → <strong>components/component-button</strong></li>
<li>Choose link or form button, then variant, size, and context</li>
<li>Enter label text (and URL if it's a link)</li>
</ol>
</div>

Or write it by hand in markdown:

```md
[Register Now](/workshops/spring/){.btn .btn--primary}
[Learn more](/about/){.btn .btn--ghost .btn--sm}
```

```html
<button class="btn btn--primary">Submit</button>
<button class="btn btn--ghost" disabled>Unavailable</button>
```

---

## Live examples

### Light context

<div style="background:#f0e6cc;padding:1.5rem 2rem;border-radius:3px;border:1px solid rgba(139,90,30,0.15);margin:1rem 0 2rem;">
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;margin-bottom:1rem;">
<button class="btn btn--primary">Primary</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--subtle">Subtle</button>
</div>
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;margin-bottom:1rem;">
<button class="btn btn--blue">Blue Fill</button>
<button class="btn btn--blue-ghost">Blue Ghost</button>
</div>
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;margin-bottom:1rem;">
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Medium</button>
<button class="btn btn--primary btn--lg">Large</button>
</div>
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;">
<button class="btn btn--primary btn--disabled">Disabled</button>
<button class="btn btn--ghost btn--disabled">Disabled</button>
<button class="btn btn--subtle btn--disabled">Disabled</button>
</div>
</div>

### Dark context

<div style="background:#3b2010;padding:1.5rem 2rem;border-radius:3px;margin:1rem 0 2rem;">
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;margin-bottom:1rem;">
<button class="btn btn--dark-primary">Primary</button>
<button class="btn btn--dark-ghost">Ghost</button>
</div>
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;">
<button class="btn btn--dark-primary btn--disabled">Disabled</button>
<button class="btn btn--dark-ghost btn--disabled">Disabled</button>
</div>
</div>

---

## Classes

### Variants

| Class | Context | Use |
|---|---|---|
| `.btn--primary` | Light | Main CTA — filled rust |
| `.btn--ghost` | Light | Secondary CTA — outline rust |
| `.btn--subtle` | Light | Low-weight action, e.g. Cancel |
| `.btn--blue` | Light | Filled blue — membership, info contexts |
| `.btn--blue-ghost` | Light | Outline blue |
| `.btn--dark-primary` | Dark | Main CTA on bark backgrounds |
| `.btn--dark-ghost` | Dark | Secondary CTA on bark backgrounds |

### Sizes

| Class | Use |
|---|---|
| `.btn--sm` | Compact — inline CTAs, tight layouts |
| *(none)* | Default |
| `.btn--lg` | Hero CTAs, prominent actions |

### States

| Class / Attribute | Effect |
|---|---|
| `.btn--disabled` | Faded, non-interactive — for links and spans |
| `disabled` attribute | Same effect — for `<button>` elements |

---

## Reference

<details class="ds-code-details">
<summary>All classes at a glance</summary>

```html
<!-- Link as button -->
<a href="/url/" class="btn btn--primary">Primary</a>
<a href="/url/" class="btn btn--ghost">Ghost</a>
<a href="/url/" class="btn btn--subtle">Subtle</a>
<a href="/url/" class="btn btn--primary btn--sm">Small</a>
<a href="/url/" class="btn btn--primary btn--lg">Large</a>
<a href="/url/" class="btn btn--primary btn--disabled">Disabled</a>

<!-- Dark context -->
<a href="/url/" class="btn btn--dark-primary">Dark Primary</a>
<a href="/url/" class="btn btn--dark-ghost">Dark Ghost</a>

<!-- Form button -->
<button class="btn btn--primary">Submit</button>
<button class="btn btn--primary" disabled>Unavailable</button>
```

</details>

<details class="ds-code-details">
<summary>Markdown-it-attrs syntax</summary>

```md
[Button label](/url/){.btn .btn--primary}
[Small ghost](/url/){.btn .btn--ghost .btn--sm}
[Large CTA](/url/){.btn .btn--primary .btn--lg}
```

Note: each class needs its own `.` prefix. The `{.class}` syntax applies to the preceding element.

</details>

---

## Notes

- `.btn` is always required — it's the base class, variants don't work without it
- Dark variants (`.btn--dark-*`) are named explicitly — they don't auto-switch with `data-theme`. Use them intentionally when placing a button inside a dark section
- `.btn--subtle` is not disabled — it's a lower-visual-weight button for secondary actions like Cancel or Skip
- For actual form submission, always use `<button type="submit">` not `<a>`
