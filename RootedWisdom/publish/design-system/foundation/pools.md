---
title: Watercolor Pools
layout: design-system
eleventyExcludeFromCollections: true
---

<p class="fdn-chapter-eyebrow">Chapter 07 · Atmospheric</p>

# Watercolor Pools

<p class="fdn-chapter-lede">Soft blurred color pools that create atmospheric depth on main-site pages. A main-site motif only — never on retreat or zine themes. Use sparingly on workshop-parchment.</p>

---

<div class="fdn-pool-demo">
<div class="fdn-pool" style="width:380px;height:280px;background:#7aaec8;top:-10%;left:-10%;opacity:0.22;"></div>
<div class="fdn-pool" style="width:280px;height:220px;background:#5b8aaa;top:5%;right:-5%;opacity:0.18;"></div>
<div class="fdn-pool" style="width:320px;height:200px;background:#c9882a;bottom:0%;left:-2%;opacity:0.20;"></div>
<div class="fdn-pool" style="width:240px;height:180px;background:#b87c1e;bottom:-5%;right:5%;opacity:0.14;"></div>
<p class="fdn-pool-caption">Content floats above the pools</p>
</div>

<table class="fdn-pool-table">
<thead>
<tr><th>Pool</th><th>Color</th><th>Hex</th><th>Opacity</th><th>Typical Position</th></tr>
</thead>
<tbody>
<tr><td>Blue Light</td><td><span class="fdn-pool-chip" style="background:#7aaec8;"></span>blue-wc2</td><td style="font-family:monospace;">#7aaec8</td><td>0.18–0.22</td><td>Top left, large</td></tr>
<tr><td>Blue Mid</td><td><span class="fdn-pool-chip" style="background:#5b8aaa;"></span>blue-wc</td><td style="font-family:monospace;">#5b8aaa</td><td>0.12–0.18</td><td>Top right or mid</td></tr>
<tr><td>Amber Warm</td><td><span class="fdn-pool-chip" style="background:#c9882a;"></span>amber-wc</td><td style="font-family:monospace;">#c9882a</td><td>0.15–0.20</td><td>Bottom left</td></tr>
<tr><td>Gold</td><td><span class="fdn-pool-chip" style="background:#b87c1e;"></span>gold</td><td style="font-family:monospace;">#b87c1e</td><td>0.10–0.14</td><td>Bottom right, small</td></tr>
</tbody>
</table>

<div class="fdn-spec">
Each pool: <em>position: absolute · border-radius: 50% · filter: blur(60–70px) · pointer-events: none</em><br>
Container: <em>position: relative · overflow: hidden</em><br>
Never animate pools.
</div>
