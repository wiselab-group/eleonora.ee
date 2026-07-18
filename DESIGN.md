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
  button-solid-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-alt}"
    rounded: "{rounded.full}"
    padding: "16px 26px"
  button-solid-accent:
    backgroundColor: "{colors.accent-text}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 26px"
  button-outline:
    textColor: "{colors.ink}"
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

The site reads as a real person's creative workspace, not a productized funnel: soft cream walls, terracotta accents, natural light. Every surface is warm and matte — no glass, no corporate blue. The pacing is slow and editorial, like flipping through a mentor's own portfolio rather than scrolling a SaaS pricing page. Playfair Display carries the personality (large, confident, occasionally italic for warmth); Nunito Sans stays quiet and does the informational work.

This system explicitly rejects generic SaaS/agency consultant templates — corporate blue gradients, stock-photo grids, hero-metric stat rows, gradient-text headlines — and loud influencer/hustle-culture aesthetics — neon accents, countdown urgency, aggressive upsell language. The brand is one real person's warm, editorial space.

The shipped page is deliberately hero-first and lean: **Header, Hero, Services, Shorts, Feed, Contact.** There is no persistent navigation, no header CTA, and no dedicated Mission or About section — the hero portrait and copy voice alone carry "this is a real person," and every scroll depth funnels toward the single Contact panel at the bottom. This is a considered scope choice, not an oversight; keep it in mind when adding new sections so they don't assume chrome (nav links, header CTA) that doesn't exist.

**Key Characteristics:**

- One accent color (`#c98e84`, dusty terracotta, with a darkened `#9a5548` text-safe variant) used sparingly — tags, CTAs, italic pull-quotes, selection color
- Fully rounded pill buttons and generously rounded cards (18–28px), never sharp corners
- Playfair Display italic reserved for isolated accent moments (the "Kupczyk" word in the H1, service numerals) — never a whole heading or wordmark
- A single shared headline size across all section titles, not five ad hoc values
- No section kickers except Contact's literal navigational label — kickers are not decorative section grammar here
- Flat, matte surfaces layered by warmth (parchment → paper → cream → ink), no shadows for depth except soft ambient lift on hover
- Slow reveals (0.8–1.4s) — nothing snaps or bounces
- A bare, chrome-free header: just a language toggle, no logo, no nav, no persistent CTA

## 2. Colors

A warm, low-saturation cream-and-terracotta palette — every neutral is tinted toward the brand's own hue, never cool gray.

### Primary

- **Dusty Terracotta** (#c98e84): the single accent — tag backgrounds, text selection, focus rings, the footer credit link. Used deliberately and sparingly; it never dominates a section.
- **Deep Terracotta / Accent Text** (#9a5548): a darkened variant of the primary accent, reserved for text-bearing surfaces (accent buttons, service numerals, the Shorts CTA pill) where the primary accent's own contrast against white or light backgrounds fails WCAG AA. Same hue family, not a second color.

### Neutral

- **Espresso Ink** (#3b2e26): primary text color and the dark panel background (Contact section, solid-dark buttons, Hero's image-wash gradient). Doubles as both "ink" and "deep surface" — the darkest value in the system.
- **Warm Ink Muted** (#5a4a40): body copy on light surfaces — Shorts body text.
- **Faint Ink** (#6b5a4e): secondary/tertiary text — service descriptions, durations, the SectionKicker default tone.
- **Parchment** (#ede3d5): the page background. Warm, matte, never pure white.
- **Warm Paper** (#f8f2e8): elevated surfaces — service row cards.
- **Cream Highlight** (#f6efe4): the lightest surface — dark-panel text color (`--color-on-dark`).
- **Terracotta Tint** (#e4cfc6): tag backgrounds, image placeholder fill on Shorts/Services thumbnails — a pale wash of the primary accent, not a separate hue.

### Named Rules

**The One Accent Rule.** Only `#c98e84` (dusty terracotta) carries color intent across the whole site. Every other value is a neutral tinted from the ink-to-parchment ramp. If a second saturated color is needed, tint it from the existing ramp rather than introducing a new hue.

**⚠ Known exception, not a pattern to repeat.** `GradientText.tsx` (used once, on the "Kupczyk" word in the Hero H1) animates a background-clip gradient across parchment/accent stops (`globals.css` `.gradient-text`). This is a live, animated gradient-text effect — the exact pattern this skill's own absolute-ban list forbids, and it isn't described anywhere else in this doc's component inventory. It's called out here for accuracy, not endorsed as a system pattern; do not add a second instance elsewhere on the strength of this one.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Nunito Sans (with system-ui, sans-serif fallback)

**Character:** A classic editorial serif/sans pairing — Playfair Display's high-contrast strokes and italic swashes carry all the personality and warmth, while Nunito Sans stays neutral and legible for anything functional (body copy, labels, prices).

### Hierarchy

One value per tier, shared across every section — no section picks its own size for a tier it shares with others.

- **Display** (500 weight, `clamp(72px, 13vw, 208px)` on the live Hero H1 — larger than the frontmatter's base `--text-display` token — line-height 0.84): the hero name headline only, sized bigger than the shared display token specifically for the full-bleed hero treatment. The italic variant (400 weight, animated gradient fill) marks the accent word ("Kupczyk").
- **Headline** (500 weight, `clamp(30px, 4.4vw, 58px)`, line-height 1.05): section titles — Services, Shorts, Feed, Contact titles all resolve to this single value.
- **Title** (500 weight, `clamp(20px, 2.3vw, 30px)`, line-height 1.05): service card titles, paired inline with an italic numeral and a tag pill.
- **Body** (400 weight, `clamp(15px, 1.35vw, 19px)`, line-height 1.6–1.75, max ~58ch): Hero tagline, Shorts body, Contact body, service descriptions.
- **Label** (700 weight, 11–12px, letter-spacing 0.04–0.22em, uppercase): the language toggle, tag pills, duration/price micro-labels, the footer credit line.

### Named Rules

**The Italic Warmth Rule.** Playfair Display italic is reserved for moments of personality: the accent word in the H1, service numerals. Never used for body copy, functional UI text, or an entire wordmark — it marks emotional beats only.

**The One Headline Rule.** Every section title (`<h2>`) resolves to the same `--text-headline` value. A section that wants to feel bigger earns it through layout (width, surrounding whitespace, color contrast), not through a private font-size. (The Hero H1 is a `<h1>`, not a section headline, and is exempt — it uses the larger Display tier by design.)

## 4. Elevation

The system is flat by default and warm shadows appear only as a soft, diffuse lift — never a hard drop shadow. Depth is conveyed primarily through surface layering (parchment → paper → cream → ink) rather than shadow intensity.

### Shadow Vocabulary

- **Ambient card** (`box-shadow: 0 2px 0 rgba(59, 46, 38, 0.04)`): resting state for service cards — barely visible, just enough to separate from the page background.
- **Hover lift** (`box-shadow: 0 22px 44px rgba(59, 46, 38, 0.12)`): service cards on hover, paired with a shadow-only transition (no `translateY`/scale on the card itself in the current implementation).

### Named Rules

**The Diffuse-Only Rule.** Every shadow in the system uses the ink color at low opacity (4–12%) with a large blur radius. No hard-edged or dark shadows anywhere — the warmth of the palette carries into elevation too.

## 5. Components

Soft and inviting: every interactive surface is fully rounded or generously rounded, hover states lift gently rather than snapping, and nothing reads as sharp, corporate, or clinical.

### Buttons

`Button.tsx` — three variants, all rendered as `motion.a`:

- **Shape:** full pill radius (999px), no exceptions.
- **solid-dark:** `background: var(--color-dark)` (#3b2e26), `color: var(--color-on-dark)` (#f6efe4), padding `16px 26px`, bold 14px label. Used for the Feed CTA.
- **solid-accent:** `background: var(--color-accent-text)` (#9a5548, the WCAG-safe darkened accent), white text — used for the highest-intent CTAs (Hero and Contact Telegram buttons). Never the raw `--color-accent` (#c98e84) with white text — that pairing measures 2.73:1 and fails AA.
- **outline:** border-only, `var(--color-border)`, ink text — defined in the component but not currently used on the page.
- **Hover:** opacity 0.88, no scale, no shadow change — a quiet acknowledgment, not a performance.
- **Active:** opacity 0.75.
- **Tap:** a subtle `pulseRing` — an absolutely-positioned pseudo-layer that fades/scales on `whileTap` (0→0.5→0 opacity, 1→1.35 scale, 0.6s), hidden entirely under `motion-reduce`.
- **Focus:** `outline: 2px solid var(--color-accent); outline-offset: 2px` (global `:focus-visible`, not button-specific).

### Chips / Tags

- **Style:** `background: var(--color-tag-bg)` (#e4cfc6), `color: var(--color-tag-text)` (#7a4e45), full pill radius, 11–12px bold uppercase label with 0.06–0.1em tracking.
- **Use:** service tags on ServiceCard ("online", "video", "Tallinn").

### Cards / Containers

- **Corner style:** 24px (`rounded-3xl`) on ServiceCard, 18px on smaller elements (Shorts/Feed thumbnails). The Contact panel is the one exception — it runs edge-to-edge with no radius on `md:` and up.
- **Background:** warm paper (`#f8f2e8`) for service cards; espresso ink (`#3b2e26`) for the Contact panel.
- **Shadow strategy:** see Elevation — ambient at rest, soft lift on hover (ServiceCard only).
- **Border:** none by default; the dark Contact panel uses a 1px `rgba(246, 239, 228, 0.2)` divider between stacked contact links and above the footer credit line.
- **Internal padding:** `clamp(16px, 1.6vw, 22px)` for the stacked ServiceCard row variant; `20–24px` fixed for the panel (pinned-scroll) variant.

### Navigation

- **Style:** the header (`Header.tsx`) is chrome-free — `absolute top-0 right-0`, transparent background, no blur, no border. It renders exactly one child: the language toggle.
- **No logo, no nav links, no persistent CTA at any breakpoint.** This is current and deliberate: there is no in-page navigation anywhere on the site (no anchor links point at the `#services` / `#shorts` / `#feed` / `#contact` ids the sections carry), and the Telegram CTA appears only inside Hero and Contact, not persistently.

### Language Toggle (signature component)

`LanguageToggle.tsx` — a pill-shaped segmented control (`bg-(--color-tag-bg)`, `p-1`) showing both `en`/`ru` codes side by side. The active locale sits on an animated `layoutId` pill (`bg-(--color-accent-text)`, spring transition, `duration: 0` under reduced motion) with white text; the inactive locale shows tag-text color at 55% opacity, rising to 80% on group-hover. It is the only persistent control in the header.

### Pinned Horizontal Scroll (signature component, Services)

`Services.tsx` implements two variants of the same content, chosen at runtime by `prefers-reduced-motion`:

- **`stacked`** (reduced motion, or as the honest fallback): a plain vertical list of ServiceCard rows (`grid-cols-[88px_1fr]` / `[128px_1fr_auto]` on `sm:`), each a `motion.a` with a `fadeUp` reveal.
- **`panel`** (default, motion allowed): the section height is set to `viewport height + horizontal scroll distance`, sticky-pinned at `top: 0`, and a `framer-motion` `useTransform` maps vertical `scrollYProgress` to a horizontal `x` translate on the card track — the user's vertical scroll gesture drives horizontal card movement through all 6 services before the section releases.
- No progress indicator (dot row, counter) exists for the panel variant; the pin height is proportional to `scrollDistance` with no explicit cap.

### Card Track (Shorts, Feed)

Both are `motion`-staggered CSS grids, not the pinned-scroll pattern:

- **Shorts**: 4-column grid of 9:16 vertical thumbnails (`ShortCard.tsx`), each with a bottom-up ink gradient wash and a centered play-button pill (`bg-(--color-surface-alt)/90`) that brightens slightly on hover.
- **Feed**: an asymmetric grid — one `col-span-2 row-span-2` dominant tile among four regular `aspect-[4/5]` tiles — with a `developWash` reveal (an ink-tinted wash that fades out over the image on scroll-in, evoking a photo "developing").

## 6. Do's and Don'ts

### Do:

- **Do** keep the accent color (#c98e84 / #9a5548) to a single deliberate role per section — a CTA, a tag, or the footer credit link, never more than one saturated moment per screenful.
- **Do** use full pill radius (999px) on every button, no exceptions.
- **Do** reserve Playfair Display italic for personality beats (the Hero accent word, service numerals), never for body copy, UI labels, or an entire wordmark.
- **Do** keep shadows diffuse and ink-tinted (4–12% opacity, large blur) — never a hard, dark drop shadow.
- **Do** pace reveals slowly (0.8–1.4s, `cubic-bezier(0.25, 0.1, 0.25, 1)`) — this is an editorial, unhurried brand, not a SaaS product.
- **Do** use `--color-accent-text` (#9a5548), never the raw `--color-accent`, wherever white text sits on the accent fill — the raw accent fails WCAG AA at 2.73:1.
- **Do** resolve every section headline to the single shared `--text-headline` value — a bigger-feeling section earns it through layout, not a private font-size.
- **Do** treat the header as intentionally minimal — a new feature should not assume a logo, nav links, or a persistent header CTA exist to hook into, because none currently do.
- **Do** provide a `prefers-reduced-motion` fallback for any new scroll-driven or transform-heavy interaction, following the `stacked`/`panel` pattern in Services.

### Don't:

- **Don't** introduce corporate blue gradients, stock-photo grids, hero-metric stat rows, or gradient-text headlines — the generic SaaS/agency consultant template this brand explicitly rejects. (The existing `GradientText` on "Kupczyk" is a known, isolated exception — see Colors — not license for a second instance.)
- **Don't** use neon accents, countdown urgency, or aggressive upsell language — the loud influencer/hustle-culture aesthetic this brand explicitly rejects.
- **Don't** use sharp corners or hard shadows anywhere; every corner is rounded, every shadow is soft.
- **Don't** add a second saturated hue. If more color is needed, tint further along the existing ink-to-parchment ramp.
- **Don't** use `top`/`left`/`width`/`height` in any animation — transform and opacity only, per the site's hardware-acceleration rule.
- **Don't** add a `SectionKicker` to a new section by reflex — it earns its place only when it carries real information (Contact's literal navigational label is the only current use), not as decorative section grammar repeated on every heading.
- **Don't** add new `href="#..."` anchor links assuming a nav exists to house them — there is currently no in-page navigation, and the existing section ids (`#services`, `#shorts`, `#feed`, `#contact`) are unlinked. If navigation is reintroduced, it needs a header to live in first.
- **Don't** ship a new scroll-hijacking or pinned-scroll interaction without a visible progress indicator and a viewport-based or reduced-motion opt-out — the current Services implementation doesn't have the former, which is a known, tracked gap rather than a pattern to copy verbatim.
