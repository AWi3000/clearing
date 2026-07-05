# RAMS Design System

> **"Weniger, aber besser" — Less, but better.**
> A Dieter Rams · Braun-inspired *skeuomorphic-lite* design system. Warm-gray
> hardware shells, one functional orange, sage LCD displays, and disciplined
> physical light. Function as beauty; zero decoration.

This system translates the visual and interaction language of Braun's
1961–1995 industrial design into a reusable web component library — what the
source PRD calls **"New Physicality"**: the functional honesty of physical
hardware (a button looks pressable; a screen looks recessed) rendered with a
modern, restrained CSS stack.

---

## Sources

Built from the attached repository — explore it for deeper reference and more
device prototypes (clocks, calculators, pendulum/Framer experiments):

- **GitHub:** https://github.com/Jah-yee/rams-design-system
  - `RAMS-CSS-PRD.md` — the design-token PRD (color extraction, shadow system, form language).
  - `Braun Rams UI — 设计系统规范 + 组件示例（HTML 单页）.html` — the source component library (buttons, LCD, dials, toggles, grilles).
  - `RAMS Website V4 - Scrollable Masterpiece.html` — the portfolio site that the Portfolio UI kit recreates.
  - `Drams - …` / `framer*.html` — Framer reference material (not used directly).

The token values here reconcile the PRD's eyedropper palette with the V4
site's refined palette; where they differed, the V4 "masterpiece" values won.

---

## Quick start

Consumers link the one entry stylesheet and read components off the namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Panel, LcdScreen, Dial } = window.RAMSDesignSystem_c1232f;
</script>
```

`styles.css` is an `@import` manifest only — it pulls in every token file
(`tokens/*.css`), the base reset (`base/reset.css`), and the component skin
(`base/components.css`). All design decisions live as `--rams-*` custom
properties; components are styled via `.rams-*` classes driven by those tokens.

---

## CONTENT FUNDAMENTALS

The voice is the *opposite* of marketing copy — it behaves like instrument
labeling and an engineer's notebook.

- **Plain, declarative, short.** Sentences state facts. "Good design is honest."
  No hype, no superlatives, no exclamation. If a word can be removed, remove it.
- **Two registers, by typeface.**
  - *DM Sans (display/body)* carries human prose — first person, calm, e.g.
    "I believe good design is as little design as possible."
  - *JetBrains Mono (labels/readouts)* carries machine text — terse, uppercase,
    wide-tracked: `01 — SELECTED WORKS`, `FM`, `ONLINE`, `98.4 MHz`.
- **Casing.** Headlines and prose are sentence case. Mono labels, eyebrows,
  nameplates and statuses are UPPERCASE. Product nameplates are lowercase
  (`tuner 1`, `ventilator 1`) — a Braun signature.
- **Person.** Prose may use "I"/"you" sparingly and warmly; UI chrome is
  impersonal ("Standby", "Lock", "Scan").
- **Numbers are first-class.** Readouts use tabular figures with a small unit
  suffix (`8.0 MHz`, `10:45`). Index sections with zero-padded numerals (`02`).
- **No emoji. No exclamation marks.** Status is shown with an LED or a mono
  word (`READY`, `LIVE`, `OFFLINE`), never an emoji.
- **Vibe:** a well-made appliance. Confident, quiet, exact. Good luck. ✦ (the
  source even signs a control panel "GOOD LUCK" — wry, restrained warmth.)

---

## VISUAL FOUNDATIONS

**Palette.** A nine-step *warm-gray* ramp forms every shell and surface — and
the rule is absolute: **every gray is warm-tinted** (yellow/orange undertone);
never pure neutral gray. One **functional orange** (`#FF6B35`) is the sole
accent, allowed **1–2 elements per view**, only on the true focal/interactive
point (power, primary CTA, the active control). A **sage LCD** family
(`#C8D4A8` bg / `#2A3A1A` ink) is reserved for displays. Status colors (green
`good`, amber `warn`, brick `danger`) are quiet and rare.

**Typography.** DM Sans (a geometric grotesque standing in for Braun's Futura)
for display + body; JetBrains Mono for the "instrument panel." Display runs
large and tight (weight 600, tracking −0.04em, line-height ~0.95). Body is 15px
/ 1.5, muted warm-gray. Mono runs 10–12px, uppercase, tracking 0.1–0.18em.

**Spacing & layout.** A 4→160px scale. Components sit on the small steps;
full-bleed sections breathe on the big ones (`clamp(64px,11vw,150px)` gutters).
Layouts are grid-aligned and calm. Marketing pages use **fixed chrome** — a
left nav-dot rail, a right-edge status "device", a thin page-frame border.

**Backgrounds.** No photography, no gradients-as-decoration. The page is a soft
warm **radial wash** (white → cream → cream-dark from top-left). Dark sections
invert to near-black (`#1A1917`). The signature texture is **perforation** —
speaker/vent grilles built from repeating radial/linear gradients (dot or
square), light or charcoal.

**Elevation & light.** Physicality comes from *light, not heavy shadow*. Every
raised surface gets a soft multi-step ambient shadow **plus** a 1px inner top
highlight and 1px inner bottom shade (a faux beveled plastic edge). Screens and
slots use **inset** shadows to read as recessed. The device shell uses a
5-layer progressive ambient shadow. The only colored shadow is the orange glow.

**Borders & radii.** Hairline warm-gray borders (`#C4BDB1`, ~1px). Radii follow
a **nested rule**: an inner element's radius is always *smaller* than its
container's, so corners look concentric (a 12px screen inside a 28px shell).
Pills (999px) for toggles, dials, LEDs, icon buttons.

**Cards & panels.** `Panel` is the raised hardware shell (warm gradient, bevel,
ambient shadow); `Panel--inset` is a recessed well; `Panel--dark` is charcoal.
`Card` is a lighter white content surface with a hairline border and soft drop.

**Motion.** Mechanical and brief. Hover **lifts −2px**, press **sinks +1px**
(like a real key). Reveals decelerate on one signature curve
`cubic-bezier(.16,1,.3,1)` over 150–400ms. Indicator LEDs **pulse** slowly
(2s). No bounce, no spring, no parallax. Respects `prefers-reduced-motion`.

**Hover / press states.** Buttons: lift + deepen shadow on hover, inset shadow
on press. Ghost buttons: faint white fill on hover. Cards: translateY(−4px) +
larger shadow. Nav dots & principle rows: fill orange + glow. Toggle: track
turns orange, thumb slides. Transparency/blur is used sparingly (translucent
white chips at ~55% over the warm ground); avoid heavy glassmorphism.

---

## ICONOGRAPHY

Two complementary icon vocabularies — see the **Iconography** specimen card.

1. **Line icons — Lucide.** The source uses thin, rounded stroke icons
   (`stroke-width: 1.5–2`, `stroke-linecap/linejoin: round`) in the Lucide /
   Feather family: arrow-right, power, clock, layers, grid, more (•••), play/
   pause, social glyphs. They are inline `<svg>` and inherit `currentColor`.
   Load from CDN when you need the full set:
   `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`,
   or copy individual paths inline. Size to ~1em; color via `currentColor`.
   *Substitution note: Lucide is the closest CDN match to the source's hand-drawn
   stroke icons (the source inlines Feather/Lucide-style paths); flag if you need
   an exact internal set.*

2. **Hardware motifs — CSS, not SVG.** The brand's most distinctive "icons" are
   rendered in pure CSS and ship as part of the components: the **perforation
   grille** (`Grille`), the **power glyph / grid-9 / 3-dot** chrome marks
   (`IconButton`), the **LED** lamp, and the **rotary notch** (`Dial`). Reuse
   these instead of drawing new glyphs.

No emoji, ever. Unicode is used only for true symbols (`∞`, `•`, `✦`) and for
math/units inside readouts.

---

## What's in here

**Tokens** (`tokens/`) — `colors`, `typography`, `spacing`, `radius`, `shadows`,
`motion`, `fonts`. 100 `--rams-*` custom properties.

**Base** (`base/`) — `reset.css` (brand defaults) + `components.css` (the
`.rams-*` skin).

**Components** (`components/`) — 13 primitives in 4 groups:
- `buttons/` — **Button**, **IconButton**
- `controls/` — **Toggle**, **Dial**, **Slider**
- `display/` — **LcdScreen**, **Led**, **Badge**, **Tag**
- `surface/` — **Panel**, **Card**, **Grille**, **SectionLabel**

Each has a `.d.ts` (props), `.prompt.md` (usage), and a group `@dsCard` HTML.

**UI kits** (`ui_kits/`) — full-surface recreations that compose the primitives:
- `console/` — an interactive **Hardware Console**: tuner, clock, fan, audio,
  controls — drag dials, toggle power, watch LEDs.
- `portfolio/` — the **RAMS Portfolio** site: hero, about + LCD stats, works
  bento grid, ten-principles device, contact.

**Guidelines** (`guidelines/`) — 15 foundation specimen cards (Colors, Type,
Spacing, Brand) that populate the Design System tab.

**SKILL.md** — makes this folder usable as a Claude Agent Skill.

---

## Caveats & fonts

- **Fonts load via Google Fonts CDN** (`tokens/fonts.css`). DM Sans + JetBrains
  Mono are the *actual* source typefaces (not substitutes), but they are not yet
  self-hosted — the compiler's font registry is therefore empty. To self-host,
  drop the `woff2` files into `assets/fonts/` and swap the `@import` for
  `@font-face` rules.
- **No raster brand assets** existed in the source (the identity is wordmark +
  CSS motifs), so `assets/` is light; the wordmark is rendered in type.
- **`good` green** (`#40C463`) is kept from the source; `warn`/`danger` are
  derived (harmonized) since the source had no status palette.
- UI kits are **cosmetic recreations** — state is local/faked.
