---
title: Social Bar
layout: design-system
eleventyExcludeFromCollections: true
---

# Social Bar

**Type:** Collection &nbsp;·&nbsp; **Partial:** `partials/social-bar.njk` &nbsp;·&nbsp; **Data:** `_data/social.yaml`

A looped row of social platform links. Reads from the central data file — add or remove platforms there, not in templates.

---

## Use in Obsidian

<div class="ds-template-callout">
<span class="ds-template-callout-label">Obsidian Template</span>
<span class="ds-template-callout-title">components/component-social-bar</span>
<p class="ds-template-callout-desc">Use as an <strong>insert template</strong> — not create new note. Places the correct include block at your cursor.</p>
<ol class="ds-template-steps">
<li>Open the page you want to add the social bar to</li>
<li>Place your cursor where the component should appear</li>
<li>Open Templater → Insert template → <strong>components/component-social-bar</strong></li>
<li>Choose your variant (icons / labeled) and theme (dark / light)</li>
<li>The correct Nunjucks block is inserted automatically</li>
</ol>
</div>

---

## Live examples

### Icons only · Dark
The default. Used in the footer — no setup needed.

<div style="background:#3b2010;padding:1.5rem 2rem;border-radius:3px;margin:1rem 0 2rem;">
{% include "partials/social-bar.njk" %}
</div>

### Icons only · Light

<div style="background:#f0e6cc;padding:1.5rem 2rem;border-radius:3px;border:1px solid rgba(139,90,30,0.15);margin:1rem 0 2rem;">
{% set socialTheme = "light" %}
{% include "partials/social-bar.njk" %}
{% set socialTheme = "dark" %}
</div>

### Labeled · Dark

<div style="background:#3b2010;padding:1.5rem 2rem;border-radius:3px;margin:1rem 0 2rem;">
{% set socialVariant = "labeled" %}
{% include "partials/social-bar.njk" %}
{% set socialVariant = "icons" %}
</div>

### Labeled · Light

<div style="background:#f0e6cc;padding:1.5rem 2rem;border-radius:3px;border:1px solid rgba(139,90,30,0.15);margin:1rem 0 2rem;">
{% set socialVariant = "labeled" %}
{% set socialTheme = "light" %}
{% include "partials/social-bar.njk" %}
{% set socialVariant = "icons" %}
{% set socialTheme = "dark" %}
</div>

---

## Parameters

| Parameter | Default | Options |
|---|---|---|
| `socialVariant` | `"icons"` | `"icons"` · `"labeled"` |
| `socialTheme` | `"dark"` | `"dark"` · `"light"` |

---

## Updating platforms

Edit `_data/social.yaml` — the partial loops this automatically. The template never needs touching.

<details class="ds-code-details">
<summary>social.yaml shape</summary>

```yaml
social:
  - name: Instagram
    handle: "@therootedwisdomherbal"
    url: https://www.instagram.com/therootedwisdomherbal
    icon: instagram
  - name: Fanbase
    handle: therootedwisdom
    url: https://fanbase.com/therootedwisdom
    icon: fanbase
    custom: true    # uses fa-kit instead of fa-brands
```

</details>

---

## Reference

<details class="ds-code-details">
<summary>Manual include syntax</summary>

```njk
{# Default — icons, dark #}
{% include "partials/social-bar.njk" %}

{# Labeled, light — reset after to prevent variable leakage #}
{% set socialVariant = "labeled" %}
{% set socialTheme = "light" %}
{% include "partials/social-bar.njk" %}
{% set socialVariant = "icons" %}
{% set socialTheme = "dark" %}
```

</details>

---

## Notes

- Footer always uses icons + dark — these are the defaults, no `set` needed
- Data lives at `social.social` not `social` — YAML top-level key matches filename
- Reset `set` variables after include to prevent leakage into the rest of the page
- Font Awesome Kit must be in `<head>` — already in `base.njk`
