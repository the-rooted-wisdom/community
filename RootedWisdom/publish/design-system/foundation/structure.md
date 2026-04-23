---
title: Structure
layout: design-system
eleventyExcludeFromCollections: true
---

<p class="fdn-chapter-eyebrow">Chapter 05 · Bones</p>

# Structure

<p class="fdn-chapter-lede">Structural tokens shared across every theme. These never swap — they're the grid under the color, the spacing between breaths, the quiet measurements that hold everything steady.</p>

---

<div class="fdn-struct">
<div class="fdn-struct-card"><p class="fdn-struct-token">--space-section</p><p class="fdn-struct-val">clamp(5rem, 8vw, 7rem)</p><p class="fdn-struct-desc">Vertical padding per section</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--max-width</p><p class="fdn-struct-val">1100px</p><p class="fdn-struct-desc">Content column max-width</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--gutter</p><p class="fdn-struct-val">2.5rem</p><p class="fdn-struct-desc">Horizontal page padding · desktop</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--gutter-mobile</p><p class="fdn-struct-val">1.25rem</p><p class="fdn-struct-desc">Horizontal page padding · mobile</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--radius-card</p><p class="fdn-struct-val">3px</p><p class="fdn-struct-desc">Cards, buttons, inputs</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--p-max-width</p><p class="fdn-struct-val">68ch</p><p class="fdn-struct-desc">Body paragraph max-width (global)</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--letter-eyebrow</p><p class="fdn-struct-val">0.38em</p><p class="fdn-struct-desc">Eyebrow · label letter-spacing</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--letter-button</p><p class="fdn-struct-val">0.18em</p><p class="fdn-struct-desc">Button text letter-spacing</p></div>
<div class="fdn-struct-card"><p class="fdn-struct-token">--size-eyebrow</p><p class="fdn-struct-val">0.68rem</p><p class="fdn-struct-desc">Section label font size</p></div>
</div>

<div class="fdn-spec">Any <em>&lt;p&gt;</em> used as a layout or display element needs <em>max-width: none</em> to override the global <em>p { max-width: 68ch }</em> rule.</div>
