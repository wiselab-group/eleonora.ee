# Design & Motion System

## Typography
Display: Playfair Display, weight 500 (italic 400 for accent words), clamp(46px, 8vw, 104px), tracking -0.01em
Heading: Playfair Display, weight 500, clamp(26px, 4.4vw, 76px), tracking normal
Body: Nunito Sans, weight 400, clamp(15px, 1.4vw, 20px), line-height 1.6–1.75
Label/Kicker: Nunito Sans, weight 700, 11–12px, tracking 0.18–0.22em, uppercase

Font import: https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Nunito+Sans:wght@300;400;500;600;700&display=swap

## Color Tokens
:root {
  --color-primary: #3B2E26;
  --color-secondary: #C98E84;
  --color-accent: #C98E84;
  --color-bg: #EDE3D5;
  --color-text: #3B2E26;
  --color-text-muted: #5A4A40;
  --color-text-faint: #6B5A4E;
  --color-surface: #F8F2E8;
  --color-surface-alt: #F6EFE4;
  --color-border: rgba(59, 46, 38, 0.2);
  --color-tag-bg: #E4CFC6;
  --color-tag-text: #7A4E45;
  --color-dark: #3B2E26;
  --color-on-dark: #F6EFE4;
}

## Spacing System (8px base grid)
--space-1:   8px
--space-2:   16px
--space-3:   24px
--space-4:   32px
--space-6:   48px
--space-8:   64px
--space-12:  96px
--space-16:  128px
--space-20:  160px
--spacing-section-y: clamp(64px, 10vw, 120px)

## Motion Principles
Easing Reveal: cubic-bezier(0.25, 0.1, 0.25, 1.0) — slow, calm ease-out
Easing Transition: cubic-bezier(0.25, 0.1, 0.25, 1.0) — same curve for all UI motion, consistent editorial feel

Timing:
- Micro (hover): 250ms
- Reveal (scroll entry): 800ms–1000ms
- Page transition: 600ms–800ms
- Stagger delay between children: 0.08s

### Universal motion rules (apply to ALL styles)
- Page transitions: complete within 600ms–800ms maximum
- Named easing aliases (use these names in code comments):
  - `--ease-reveal`: cubic-bezier(0.25, 0.1, 0.25, 1.0)
  - `--ease-transition`: cubic-bezier(0.25, 0.1, 0.25, 1.0)
  - `--ease-premium-out`: cubic-bezier(0.16, 1, 0.3, 1)   /* fallback default */
  - `--ease-expressive`: cubic-bezier(0.76, 0, 0.24, 1)   /* fallback default */
- GPU acceleration: will-change: transform, opacity — only on actively animating nodes
- NEVER use default CSS `ease` or `linear` easing
- NEVER animate: top, left, width, height — causes layout shift and jank

Reveal pattern (Framer Motion, pseudocode):
```
initial: { opacity: 0, y: 16 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }
viewport: { once: true, margin: "-80px" }
staggerChildren: 0.08
```

## Component States
Buttons (pill CTAs):
- Default: solid fill (--color-dark or --color-accent), full radius (999px)
- Hover: opacity 0.88, no scale
- Active: opacity 0.75
- Focus: outline 2px solid var(--color-accent), outline-offset 2px
- Disabled: opacity 0.4, cursor not-allowed

Text links (nav, inline links):
- Default: no underline, or thin bottom border for emphasized links
- Hover: underline reveals via border-bottom transition, or opacity 0.7
- Focus: outline 2px solid var(--color-accent), outline-offset 2px

Cards / Interactive surfaces (service rows, feed tiles):
- Default: --color-surface background, radius 24px, subtle shadow
- Hover: translateY(-3px) + shadow expansion (box-shadow only, transform+opacity safe)
- Focus: outline 2px solid var(--color-accent), outline-offset 2px

### Universal component rules (apply to ALL styles)
- All images inside animated or parallax containers: wrap in a container with `overflow: hidden` class (never inline style)
- Every interactive element must have: default / hover / active / focus / disabled state
- Disabled: `opacity: 0.4; cursor: not-allowed; pointer-events: none`

## Responsive Breakpoints
- sm:  640px
- md:  768px
- lg:  1024px
- xl:  1280px
- 2xl: 1536px

Container: max-width 1440px, padding clamp(16px, 5vw, 80px)

## Accessibility (mandatory — never remove)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
- Focus rings: visible on all interactive elements (outline: 2px solid var(--color-accent))
- Color contrast: min 4.5:1 body text, 3:1 large text (WCAG 2.1 AA)
