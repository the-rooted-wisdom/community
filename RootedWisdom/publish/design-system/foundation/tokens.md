---
title: Semantic Tokens
layout: design-system
eleventyExcludeFromCollections: true
---

<p class="fdn-chapter-eyebrow">Chapter 03 · Mapping</p>

# Semantic Tokens

<p class="fdn-chapter-lede">Shared token names across all themes. Only the values swap per <code>data-theme</code>. Components reference these names exclusively — never raw hex or palette variables.</p>

---

Values shown for the three core themes. Workshop variants are defined in `_themes.scss` using the same structure.

<div class="fdn-tt-wrap">
<table class="fdn-tt">
<thead>
<tr>
<th class="fdn-tt-token-head">Token</th>
<th class="fdn-tt-theme-head">main</th>
<th class="fdn-tt-theme-head">retreat</th>
<th class="fdn-tt-theme-head">zine</th>
<th class="fdn-tt-role-head">Role</th>
</tr>
</thead>
<tbody>
<tr class="fdn-tt-section"><td colspan="5">Backgrounds</td></tr>
<tr>
<td class="fdn-tt-name">--color-bg</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#f0e6cc;"><span>#f0e6cc</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#110d08;"><span>#110d08</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#0f0e14;"><span>#0f0e14</span></div></td>
<td class="fdn-tt-role">Page background</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-surface</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#ecdbb8;"><span>#ecdbb8</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#1c1410;"><span>#1c1410</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#1a1825;"><span>#1a1825</span></div></td>
<td class="fdn-tt-role">Cards, section surface</td>
</tr>
<tr class="fdn-tt-section"><td colspan="5">Text</td></tr>
<tr>
<td class="fdn-tt-name">--color-text</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#3b2010;"><span>#3b2010</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#f5f0e8;"><span>#f5f0e8</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#c8bedd;"><span>#c8bedd</span></div></td>
<td class="fdn-tt-role">Primary headings / display</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-text-mid</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#5a3a20;"><span>#5a3a20</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#110d08;"><div class="fdn-tt-rgba-fill" style="background:rgba(245,240,232,0.75);"></div><span style="color:#3b2010;">rgba(…,.75)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#9e96b0;"><span>#9e96b0</span></div></td>
<td class="fdn-tt-role">Body copy</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-text-soft</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#8a6040;"><span>#8a6040</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#110d08;"><div class="fdn-tt-rgba-fill" style="background:rgba(245,240,232,0.45);"></div><span style="color:#f5f0e8;">rgba(…,.45)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#0f0e14;"><div class="fdn-tt-rgba-fill" style="background:rgba(200,190,221,0.55);"></div><span style="color:#0f0e14;">rgba(…,.55)</span></div></td>
<td class="fdn-tt-role">Captions, labels, meta</td>
</tr>
<tr class="fdn-tt-section"><td colspan="5">Accents</td></tr>
<tr>
<td class="fdn-tt-name">--color-accent</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#b5601a;"><span>#b5601a</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#d4af6a;"><span>#d4af6a</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#b8a8d0;"><span>#b8a8d0</span></div></td>
<td class="fdn-tt-role">CTAs, links, emphasis</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-accent-hover</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4813a;"><span>#d4813a</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#f5f0e8;"><span>#f5f0e8</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#c8bedd;"><span>#c8bedd</span></div></td>
<td class="fdn-tt-role">Hover state</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-eyebrow</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#4a7a9b;"><span>#4a7a9b</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#b8933e;"><span>#b8933e</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#9e96b0;"><span>#9e96b0</span></div></td>
<td class="fdn-tt-role">Section labels, eyebrows</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-ornament</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#b87c1e;"><span>#b87c1e</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#b8933e;"><span>#b8933e</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#b8a8d0;"><span>#b8a8d0</span></div></td>
<td class="fdn-tt-role">Diamond ornaments</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-border</td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#f0e6cc;"><div class="fdn-tt-rgba-fill" style="background:rgba(59,32,16,0.12);"></div><span style="color:#3b2010;">rgba(…,.12)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#110d08;"><div class="fdn-tt-rgba-fill" style="background:rgba(245,240,232,0.1);"></div><span style="color:#f5f0e8;">rgba(…,.10)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#0f0e14;"><div class="fdn-tt-rgba-fill" style="background:rgba(200,190,221,0.12);"></div><span style="color:#c8bedd;">rgba(…,.12)</span></div></td>
<td class="fdn-tt-role">Subtle dividers</td>
</tr>
<tr class="fdn-tt-section"><td colspan="5">Navigation</td></tr>
<tr>
<td class="fdn-tt-name">--color-nav-bg</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#3b2010;"><span>#3b2010</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#110d08;"><span>#110d08</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#0f0e14;"><span>#0f0e14</span></div></td>
<td class="fdn-tt-role">Nav background</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-nav-text</td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#3b2010;"><div class="fdn-tt-rgba-fill" style="background:rgba(240,230,204,0.55);"></div><span style="color:#3b2010;">rgba(…,.55)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#110d08;"><div class="fdn-tt-rgba-fill" style="background:rgba(245,240,232,0.5);"></div><span style="color:#110d08;">rgba(…,.50)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#0f0e14;"><div class="fdn-tt-rgba-fill" style="background:rgba(200,190,221,0.55);"></div><span style="color:#0f0e14;">rgba(…,.55)</span></div></td>
<td class="fdn-tt-role">Nav link color</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-nav-active</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4a050;"><span>#d4a050</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4af6a;"><span>#d4af6a</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#c8bedd;"><span>#c8bedd</span></div></td>
<td class="fdn-tt-role">Active nav link</td>
</tr>
<tr class="fdn-tt-section"><td colspan="5">Footer</td></tr>
<tr>
<td class="fdn-tt-name">--color-footer-bg</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#3b2010;"><span>#3b2010</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#110d08;"><span>#110d08</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#0f0e14;"><span>#0f0e14</span></div></td>
<td class="fdn-tt-role">Footer background</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-footer-text</td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#3b2010;"><div class="fdn-tt-rgba-fill" style="background:rgba(240,230,204,0.54);"></div><span style="color:#3b2010;">rgba(…,.54)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#110d08;"><div class="fdn-tt-rgba-fill" style="background:rgba(245,240,232,0.65);"></div><span style="color:#110d08;">rgba(…,.65)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#0f0e14;"><div class="fdn-tt-rgba-fill" style="background:rgba(200,190,221,0.7);"></div><span style="color:#0f0e14;">rgba(…,.70)</span></div></td>
<td class="fdn-tt-role">Footer body · 4.5:1 min</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-footer-label</td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#3b2010;"><div class="fdn-tt-rgba-fill" style="background:rgba(240,230,204,0.4);"></div><span style="color:#3b2010;">rgba(…,.40)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#110d08;"><div class="fdn-tt-rgba-fill" style="background:rgba(245,240,232,0.38);"></div><span style="color:#110d08;">rgba(…,.38)</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-rgba" style="background:#0f0e14;"><div class="fdn-tt-rgba-fill" style="background:rgba(200,190,221,0.4);"></div><span style="color:#0f0e14;">rgba(…,.40)</span></div></td>
<td class="fdn-tt-role">Footer UI labels · 3:1 min</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-footer-hover</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4a050;"><span>#d4a050</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4af6a;"><span>#d4af6a</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#c8bedd;"><span>#c8bedd</span></div></td>
<td class="fdn-tt-role">Footer link hover</td>
</tr>
<tr>
<td class="fdn-tt-name">--color-footer-wordmark</td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4a050;"><span>#d4a050</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-dark" style="background:#d4af6a;"><span>#d4af6a</span></div></td>
<td class="fdn-tt-sw"><div class="fdn-tt-color fdn-on-light" style="background:#c8bedd;"><span>#c8bedd</span></div></td>
<td class="fdn-tt-role">Footer brand wordmark</td>
</tr>
</tbody>
</table>
</div>
