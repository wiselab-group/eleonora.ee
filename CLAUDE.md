# CLAUDE.md — System Core Guidance

## WHAT
Eleonora Kupczyk — personal brand landing page for a Tallinn-based SMM/UGC marketer, consultant, and content coach.
Stack: Next.js 15, Tailwind CSS v4, Framer Motion

## WHY
- Awwwards/FWA visual quality — Editorial aesthetic (warm, soft, magazine-like), originality over benchmark scores
- Core Web Vitals targets: Performance 85+ desktop / 75+ mobile, Accessibility 100, SEO 100, CLS 0.00
- Every interactive element has explicit hover, active, focus, and loading states
- Zero generic or Bootstrap-style components

## COMMANDS
- Dev:        `npm run dev`
- Build:      `npm run build`
- Lint:       `npm run lint`
- Type-check: `npm run typecheck`
- Rule: run `npm run lint` before marking ANY task as complete. Zero warnings = done.

## DESIGN TOKENS
--color-primary: #3B2E26;
--color-secondary: #C98E84;
--color-accent: #C98E84;
--color-bg: #EDE3D5;
--color-text: #3B2E26;
--spacing-section-y: clamp(64px, 10vw, 120px);
--transition-reveal: cubic-bezier(0.25, 0.1, 0.25, 1.0) 0.9s;
--transition-hover: cubic-bezier(0.25, 0.1, 0.25, 1.0) 250ms;

## ANIMATION RULES
- Hardware acceleration ONLY: transform and opacity. Never animate top/left/width/height.
- will-change: transform, opacity — only on nodes that actively animate
- Hover: underline reveals, opacity shifts — no scale, no shadow pop on text links
- Reveal: fade + slight translateY(16px) on scroll entry, slow and deliberate (0.8s–1.0s), staggered by 0.08s per child
- Always implement prefers-reduced-motion fallback

## CODE RULES
- TypeScript strict — zero `any` types allowed
- Components: max 150 lines — split into sub-components if larger
- No raw hex colors — always var(--color-name)
- No inline styles except dynamic computed values (e.g. JS-driven positions)
- All images: next/image with blur placeholder and explicit width/height
- Semantic HTML only: <main>, <section>, <article>, <nav>, <header>, <footer>
- No console.log in any committed file

## FORBIDDEN
- Fast/snappy animations (this is a slow, editorial-paced site)
- Decorative effects unrelated to content (particles, glitch, chrome gradients)
- Multiple accent colors beyond --color-accent
- Layout-shifting properties in animations (top, left, height, width)
- setTimeout for animation delays — use animation library delays
- Raw hardcoded color or spacing values
