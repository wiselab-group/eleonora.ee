---
name: Eleonora Kupczyk
description: Warm editorial landing page for a Tallinn-based SMM/UGC marketer and content coach
colors:
  primary: "#c98e84"
  accent-text: "#9a5548"
  ink: "#3b2e26"
  ink-muted: "#5a4a40"
  ink-faint: "#6b5a4e"
  bg: "#ede3d5"
  surface: "#f8f2e8"
  surface-alt: "#f6efe4"
  tag-bg: "#e4cfc6"
  tag-text: "#7a4e45"
  border: "rgba(59, 46, 38, 0.2)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.875rem, 8vw, 6.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 4.4vw, 3.625rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.3vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  body:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "clamp(0.9375rem, 1.35vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  sm: "16px"
  md: "24px"
  lg: "28px"
  full: "999px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
  section-y: "clamp(64px, 10vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-alt}"
    rounded: "{rounded.full}"
    padding: "16px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-alt}"
  button-accent:
    backgroundColor: "{colors.accent-text}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 26px"
  service-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
---

# Design System: Eleonora Kupczyk

## 1. Overview

**Creative North Star: "The Warm Studio"**

The site reads as a real person's creative workspace, not a productized funnel: soft cream walls, terracotta accents, natural light. Every surface is warm and matte — no gradients, no glass, no corporate blue. The pacing is slow and editorial, like flipping through a mentor's own portfolio rather than scrolling a SaaS pricing page. Playfair Display carries the personality (large, confident, occasionally italic for warmth); Nunito Sans stays quiet and does the informational work.

This system explicitly rejects generic SaaS/agency consultant templates — corporate blue gradients, stock-photo grids, hero-metric stat rows, gradient-text headlines — and loud influencer/hustle-culture aesthetics — neon accents, countdown urgency, aggressive upsell language. The brand is one real person's warm, editorial space.

**Key Characteristics:**
- One accent color (`#c98e84`, dusty terracotta, with a darkened `#9a5548` text-safe variant) used sparingly — tags, CTAs, italic pull-quotes, selection color
- Fully rounded pill buttons and generously rounded cards (24–28px), never sharp corners
- Playfair Display italic reserved for isolated accent moments (one word in the H1 and logo, pull-quotes, badges) — never a whole heading or wordmark
- A single shared headline size across all section titles, not five ad hoc values
- Section kickers used only where they carry real information (About, Contact), not repeated as decorative scaffolding on every section
- Flat, matte surfaces layered by warmth (cream → tan → terracotta → near-black), no shadows for depth except soft ambient lift on hover
- Slow reveals (0.8–1.0s) — nothing snaps or bounces

## 2. Colors

A warm, low-saturation cream-and-terracotta palette — every neutral is tinted toward the brand's own hue, never cool gray.

### Primary
- **Dusty Terracotta** (#c98e84): the single accent — tag backgrounds, text selection, focus rings, kicker labels on light surfaces. Used deliberately and sparingly; it never dominates a section.
- **Deep Terracotta / Accent Text** (#9a5548): a darkened variant of the primary accent, reserved for text-bearing surfaces (accent buttons, service numerals, pull-quotes) where the primary accent's own contrast against white or light backgrounds fails WCAG AA. Same hue family, not a second color.

### Neutral
- **Espresso Ink** (#3b2e26): primary text color and the dark panel background (Contact section, header logo, buttons). Doubles as both "ink" and "deep surface" — the darkest value in the system.
- **Warm Ink Muted** (#5a4a40): body copy on light surfaces — taglines, descriptions, bio text.
- **Faint Ink** (#6b5a4e): secondary/tertiary text — nav links, service descriptions, durations.
- **Parchment** (#ede3d5): the page background. Warm, matte, never pure white.
- **Warm Paper** (#f8f2e8): elevated surfaces — service row cards.
- **Cream Highlight** (#f6efe4): the lightest surface — floating badges, dark-panel text color, hero image placeholder fill.
- **Terracotta Tint** (#e4cfc6): tag backgrounds, the mission-band surface — a pale wash of the primary accent, not a separate hue.

### Named Rules
**The One Accent Rule.** Only `#c98e84` (dusty terracotta) carries color intent across the whole site. Every other value is a neutral tinted from the ink-to-parchment ramp. If a second saturated color is needed, tint it from the existing ramp rather than introducing a new hue.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Nunito Sans (with system-ui, sans-serif fallback)

**Character:** A classic editorial serif/sans pairing — Playfair Display's high-contrast strokes and italic swashes carry all the personality and warmth, while Nunito Sans stays neutral and legible for anything functional (body copy, labels, prices).

### Hierarchy
One value per tier, shared across every section — no section picks its own size for a tier it shares with others.
- **Display** (500 weight, `clamp(46px, 8vw, 104px)`, line-height 0.98): the hero name headline only. The italic variant (400 weight) marks the accent word ("Kupczyk").
- **Headline** (500 weight, `clamp(30px, 4.4vw, 58px)`, line-height 1.05–1.14): section titles — Mission quote, About title, Services title, Feed title, Contact title all resolve to this single value.
- **Title** (500 weight, `clamp(20px, 2.3vw, 30px)`, line-height 1.05): service row titles, paired inline with an italic numeral and a tag pill.
- **Body** (400 weight, `clamp(15px, 1.35vw, 20px)`, line-height 1.6–1.75, max ~64ch): taglines, bio copy, service descriptions.
- **Label** (700 weight, 12px fixed, letter-spacing 0.06–0.22em, uppercase): section kickers, tag pills, duration/price micro-labels.

### Named Rules
**The Italic Warmth Rule.** Playfair Display italic is reserved for moments of personality: the accent word in the H1 and header logo, pull-quotes, the floating hero badge, service numerals. Never used for body copy, functional UI text, or an entire wordmark — it marks emotional beats only.

**The One Headline Rule.** Every section title (`<h2>`) resolves to the same `--text-headline` value. A section that wants to feel bigger earns it through layout (width, surrounding whitespace, color contrast), not through a private font-size.

## 4. Elevation

The system is flat by default and warm shadows appear only as a soft, diffuse lift — never a hard drop shadow. Depth is conveyed primarily through surface layering (parchment → paper → cream → ink) rather than shadow intensity.

### Shadow Vocabulary
- **Ambient card** (`box-shadow: 0 2px 0 rgba(59, 46, 38, 0.04)`): resting state for service rows — barely visible, just enough to separate from the page background.
- **Hover lift** (`box-shadow: 0 22px 44px rgba(59, 46, 38, 0.12)`): service rows and interactive cards on hover, paired with `translateY(-3px)`.
- **Floating badge** (`box-shadow: 0 16px 36px rgba(59, 46, 38, 0.14)`): the hero's floating quote badge and other overlapping elements.
- **Hero portrait** (`box-shadow: 0 30px 60px rgba(59, 46, 38, 0.16)`): the largest, softest shadow in the system — reserved for the single most prominent image.

### Named Rules
**The Diffuse-Only Rule.** Every shadow in the system uses the ink color at low opacity (4–16%) with a large blur radius. No hard-edged or dark shadows anywhere — the warmth of the palette carries into elevation too.

## 5. Components

Soft and inviting: every interactive surface is fully rounded or generously rounded, hover states lift gently rather than snapping, and nothing reads as sharp, corporate, or clinical.

### Buttons
- **Shape:** full pill radius (999px), no exceptions.
- **Primary (dark):** `background: var(--color-dark)` (#3b2e26), `color: var(--color-on-dark)` (#f6efe4), padding 16px 26px, bold 14px label.
- **Accent:** `background: var(--color-accent-text)` (#9a5548, the WCAG-safe darkened accent), white text — used for the highest-intent CTAs (Telegram links). Never the raw `--color-accent` (#c98e84) with white text — that pairing measures 2.73:1 and fails AA.
- **Hover:** opacity 0.88, no scale, no shadow change — a quiet acknowledgment, not a performance.
- **Active:** opacity 0.75.
- **Focus:** `outline: 2px solid var(--color-accent); outline-offset: 2px`.
- **Disabled:** `opacity: 0.4; cursor: not-allowed; pointer-events: none`.

### Chips / Tags
- **Style:** `background: var(--color-tag-bg)` (#e4cfc6), `color: var(--color-tag-text)` (#7a4e45), full pill radius, 11–12px bold uppercase label with 0.06–0.08em tracking.
- **Use:** hero eyebrow ("SMM · UGC · Tallinn"), service tags ("online", "video", "Tallinn").

### Cards / Containers
- **Corner style:** 24–28px radius on section-level cards (Mission band, service rows, Contact panel), 16–18px on smaller elements (feed tiles, image thumbnails).
- **Background:** warm paper (`#f8f2e8`) for service rows; terracotta tint (`#e4cfc6`) for the Mission band; espresso ink (`#3b2e26`) for the Contact panel.
- **Shadow strategy:** see Elevation — ambient at rest, soft lift on hover.
- **Border:** none by default; the dark Contact panel uses a 1px `rgba(246, 239, 228, 0.2)` divider between stacked contact links only.
- **Internal padding:** clamp(16px, 1.6vw, 22px) for service rows; clamp(28px, 5vw, 80px) for section-level panels.

### Navigation
- **Style:** sticky header, `background: rgba(237, 227, 213, 0.85)` with `backdrop-filter: blur(10px)`, no border or shadow.
- **Typography:** `--text-label` (12px) bold, faint-ink color (#6b5a4e).
- **Default/hover:** no underline at rest; hover reveals a terracotta bottom border via transition.
- **Mobile:** nav links and full CTA label hidden below `md`/`sm`; the header shrinks to logo + language toggle + an icon-only Telegram button so the primary CTA never clips off-screen.

### Language Toggle (signature component)
A small pill button (border only, no fill) showing the *other* language's code (EN when viewing RU, RU when viewing EN) — a quiet, low-emphasis control that never competes with the primary Telegram CTA beside it.

### Section Kicker (used sparingly)
A small uppercase tracked label (`--text-label`, `SectionKicker.tsx`) used only where it carries real information, not as decorative section grammar. Currently used in exactly two places: **About** (a concrete fact — "Tallinn · SMM & UGC" — not a generic "About me" category word) and **Contact** (a literal navigational label before a list of contact links). Mission, Services, and Feed lead straight into their headline with no kicker — their content is self-explanatory without a category label above it.

## 6. Do's and Don'ts

### Do:
- **Do** keep the accent color (#c98e84 / #9a5548) to a single deliberate role per section — a CTA, a tag, or a pull-quote, never more than one saturated moment per screenful.
- **Do** use full pill radius (999px) on every button, no exceptions.
- **Do** reserve Playfair Display italic for personality beats (accent words, quotes, badges), never for body copy, UI labels, or an entire wordmark.
- **Do** keep shadows diffuse and ink-tinted (4–16% opacity, large blur) — never a hard, dark drop shadow.
- **Do** pace reveals slowly (0.8–1.0s, `cubic-bezier(0.25, 0.1, 0.25, 1)`) — this is an editorial, unhurried brand, not a SaaS product.
- **Do** use `--color-accent-text` (#9a5548), never the raw `--color-accent`, wherever white text sits on the accent fill — the raw accent fails WCAG AA at 2.73:1.
- **Do** resolve every section headline to the single shared `--text-headline` value — a bigger-feeling section earns it through layout, not a private font-size.

### Don't:
- **Don't** introduce corporate blue gradients, stock-photo grids, hero-metric stat rows, or gradient-text headlines — the generic SaaS/agency consultant template this brand explicitly rejects.
- **Don't** use neon accents, countdown urgency, or aggressive upsell language — the loud influencer/hustle-culture aesthetic this brand explicitly rejects.
- **Don't** use sharp corners or hard shadows anywhere; every corner is rounded, every shadow is soft.
- **Don't** add a second saturated hue. If more color is needed, tint further along the existing ink-to-parchment ramp.
- **Don't** use `top`/`left`/`width`/`height` in any animation — transform and opacity only, per the site's hardware-acceleration rule.
- **Don't** add a `SectionKicker` to a new section by reflex because "landing pages do this" — it earns its place only when it carries real information (About's location/specialty fact, Contact's navigational label), not as decorative section grammar repeated on every heading.
