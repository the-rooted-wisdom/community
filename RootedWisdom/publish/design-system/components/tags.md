---
title: Tags
layout: design-system
eleventyExcludeFromCollections: true
---

# Tags

**Type:** Element &nbsp;·&nbsp; **SCSS:** `_styles/partials/_buttons.scss`

Small inline labels for categorizing content. The class controls the color treatment — the text is always whatever you write. Tags can be plain text or links.

---

## Use in Obsidian

<div class="ds-template-callout">
<span class="ds-template-callout-label">Obsidian Template</span>
<span class="ds-template-callout-title">components/component-tag</span>
<p class="ds-template-callout-desc">Use as an <strong>insert template</strong> — not create new note. Prompts for plain or linked, category, and text.</p>
<ol class="ds-template-steps">
<li>Place cursor where the tag should appear</li>
<li>Templater → Insert template → <strong>components/component-tag</strong></li>
<li>Choose plain or linked, then pick a category</li>
<li>Enter the tag text (and URL if linked)</li>
</ol>
</div>

Or write it by hand in markdown:

```md
Nervine{.tag .tag--action}
[Nervous System](/library/body/nervous/){.tag .tag--system}
```

---

## Live examples

### Light context

<div style="background:#f0e6cc;padding:1.5rem 2rem;border-radius:3px;border:1px solid rgba(139,90,30,0.15);margin:1rem 0;">
<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
<span class="tag tag--default">Any text</span>
<span class="tag tag--action">Nervine</span>
<span class="tag tag--system">Nervous System</span>
<span class="tag tag--season">Spring</span>
<span class="tag tag--energetic">Cooling</span>
</div>
<div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
<a href="#" class="tag tag--action">Clickable action</a>
<a href="#" class="tag tag--system">Clickable system</a>
<a href="#" class="tag tag--default">Clickable default</a>
</div>
</div>

### Dark context

<div style="background:#3b2010;padding:1.5rem 2rem;border-radius:3px;margin:1rem 0 2rem;">
<div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
<span class="tag tag--dark">Any text</span>
<span class="tag tag--dark-action">Nervine</span>
<span class="tag tag--dark">Spring</span>
<span class="tag tag--dark-action">Cooling</span>
</div>
</div>

---

## Classes

| Class | Context | Typical use |
|---|---|---|
| `.tag--default` | Light | General labels, anything that doesn't fit a category |
| `.tag--action` | Light | Herbal actions — nervine, adaptogen, carminative... |
| `.tag--system` | Light | Body systems — nervous, digestive, respiratory... |
| `.tag--season` | Light | Seasons — spring, summer, autumn, winter |
| `.tag--energetic` | Light | Energetics — cooling, moistening, warming... |
| `.tag--dark` | Dark | General labels on bark backgrounds |
| `.tag--dark-action` | Dark | Highlighted label on bark backgrounds |

The category class controls color only — write any text you like inside.

---

## Reference

<details class="ds-code-details">
<summary>Markdown-it-attrs syntax</summary>

```md
{# Plain tag — just styled text #}
Nervine{.tag .tag--action}
Spring{.tag .tag--season}

{# Linked tag — navigates on click #}
[Nervine](/library/actions/nervine/){.tag .tag--action}
[Nervous System](/library/body/nervous/){.tag .tag--system}
```

</details>

<details class="ds-code-details">
<summary>HTML syntax</summary>

```html
<!-- Plain -->
<span class="tag tag--action">Nervine</span>

<!-- Linked -->
<a href="/library/actions/nervine/" class="tag tag--action">Nervine</a>
```

</details>

---

## Notes

- `.tag` is always required — it's the base, category classes don't work without it
- Dark variants don't auto-switch with `data-theme` — use `.tag--dark` and `.tag--dark-action` explicitly inside dark sections
- Linked tags (`<a>`) automatically get a hover treatment (brightness shift) — no extra class needed
- Dismissible tags (×) are deferred to the community/application build
