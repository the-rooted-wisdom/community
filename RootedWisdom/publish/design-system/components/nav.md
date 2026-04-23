---
title: Navigation
layout: design-system
eleventyExcludeFromCollections: true
---

# Navigation

**Type:** Collection &nbsp;·&nbsp; **Partial:** `partials/nav.njk` &nbsp;·&nbsp; **Data:** `_data/nav.yaml`

Sticky header with backdrop blur. Loops nav links from data file. Two CTA slots for membership state. Collapses to hamburger on mobile. Theme-aware — switches palette automatically on dark themes.

---

## Live example

*The nav at the top of this page is the live component.*

---

## Variants

**Main (default)** — parchment blur, bark/rust palette. Active on all pages without a dark theme.

**Dark** — ink blur, gold palette. Activated automatically when `theme: retreat` or `theme: workshop-*` is set in front matter.

---

## Updating nav links

Edit `_data/nav.yaml` — the partial loops this automatically. Active state is set by matching `page.url` to `link.url`.

<details class="ds-code-details">
<summary>nav.yaml shape</summary>

```yaml
links:
  - label: Learn
    url: /learn/
  - label: Workshops
    url: /workshops/
```

</details>

---

## CTA buttons

| Class | Label | Visibility |
|---|---|---|
| `.nav-cta--ghost` | My Library | `ms-member-only` — logged-in members |
| `.nav-cta--filled` | Join Us | `ms-guest-only` — guests |

Visibility is controlled by Outseta once the membership portal is wired up.

---

## Mobile behavior

- Hamburger appears below 768px
- Toggle animates to X via `aria-expanded` — no extra classes needed
- Closes on outside click or Escape key
- Mobile menu background is always bark — does not theme-swap

---

## Notes

- Lives in `base.njk` — no include needed on content pages
- No Obsidian template — this component is not dropped into content
- `[data-theme^="workshop"]` catches all workshop colorways automatically
- Script is inline in the partial — no external JS file needed
