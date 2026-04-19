# The Rooted Wisdom — Member Library

A living herbal library and membership site for [The Rooted Wisdom](https://therootedwisdom.com), built by Dara Pressley / The Sage.

---

## What This Is

This repository powers the member-facing library at The Rooted Wisdom — a living herbal school rooted in ancestral plant traditions, Afro-diasporic spiritual practice, and embodied herbalism.

The library includes herb monographs, body system studies, wisdom essays, workshop replays, and sequential learning courses, all gated by membership tier.

---

## Tech Stack

- **[11ty (Eleventy)](https://www.11ty.dev/)** — static site generator
- **[Sass](https://sass-lang.com/)** — stylesheet compilation
- **[Netlify](https://netlify.com)** — hosting and continuous deployment
- **[Memberstack](https://memberstack.com)** — membership gating and authentication
- **Obsidian** — content authoring (the `RootedWisdom/` vault is the CMS)

---

## Repository Structure

```
TheRootedWisdom/
├── .eleventy.js              ← 11ty configuration
├── package.json
├── _includes/                ← layouts and partials
├── _data/                    ← global data files
├── _styles/                     ← source stylesheets
├── assets/                   ← compiled CSS, fonts, images
├── _site/                    ← build output (gitignored)
│
└── RootedWisdom/             ← Obsidian vault (content lives here)
    ├── publish/              ← 11ty reads this folder
    │   ├── imgs/
    │   ├── index.md    
    │   ├── about.md
    │   ├── workshops/
    │   ├── retreats/
    │   └── library/
    │       ├── herbs/
    │       ├── body/
    │       ├── wisdom-studies/
    │       ├── workshop-replays/
    │       └── courses/
    ├── drafts/               ← works in progress, never published
    ├── planning/             ← business docs, not content
    ├── _foundations/         ← templates, vocabularies, architecture
    └── source-material/      ← existing vault content to mine over time
```

Only files inside `RootedWisdom/publish/` are processed by 11ty and deployed.

---

## Local Development

```bash
npm install
npm start
```

This builds Sass and starts the 11ty dev server with live reload. The site will be available at `http://localhost:8080`.

To build for production:

```bash
npm run build
```

---

## Content & Publishing Workflow

Content is authored in Obsidian inside the `RootedWisdom/` vault.

1. Write and develop content in `RootedWisdom/drafts/`
2. Add frontmatter (see `RootedWisdom/_foundations/templates/` for schemas)
3. Move the file to the appropriate folder inside `RootedWisdom/publish/library/`
4. Set `status: published` in frontmatter
5. Commit and push — Netlify deploys automatically

---

## Access Tiers

Content is gated via Memberstack. Frontmatter `access` values map to Memberstack plan names:

| Value | Tier |
|---|---|
| `herb-curios` | Herb Curios membership ($15/mo) |
| `foundations` | Foundations membership ($100/mo) |
| `workshop-[slug]` | Single workshop purchase |

Files with `free_preview: true` are visible to all visitors regardless of tier.

---

## Contact

Site: [therootedwisdom.com](https://therootedwisdom.com)  
Email: BeHerbal@therootedwisdom.com