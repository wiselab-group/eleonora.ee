# Product

## Register

brand

## Platform

web

## Users

Primary: aspiring content creators and bloggers, mostly in Tallinn and the wider Baltic region, who want to start or grow a personal blog or social presence. They land here unsure how to begin or stuck at a plateau, and are looking for direct, personal coaching rather than a generic course — an account review, a content shoot, or ongoing mentorship. They need to feel this is a real person who will pay attention to their specific situation, not a templated funnel.

## Product Purpose

A personal-brand landing page for Eleonora Kupczyk, a Tallinn-based SMM/UGC marketer and content coach. It exists to convert visitors into direct Telegram conversations about her services: blog reviews, account audits, UGC coaching, mentorship, and content shoots. Success is a visitor messaging her on Telegram with enough context (which service, what they need) that the conversation starts warm.

## Positioning

Personal, hands-on guidance — unlike a generic course or agency, Eleonora personally reviews your account, shoots your content, and mentors you one-on-one. Every section reinforces that a real person is behind the offer, not a productized funnel.

## Conversion & proof

- Primary and secondary CTA: Message on Telegram (primary, repeated in Header/Hero/Contact); browse the Instagram feed (secondary, for visitors not ready to message yet — the Feed section surfaces real content as proof before asking for contact).
- The line a visitor remembers after 10 seconds: "This is a real, warm person who will personally help me figure out my blog — not a course."
- Belief ladder: (1) She's a real, warm, credible person — carried by the hero portrait and About section. (2) One of her six services fits my exact need — carried by the Services section's specific, differentiated offers. (3) The price is fair for the value — carried by transparent per-service pricing, no "contact for pricing." (4) Reaching out is easy and low-risk — carried by a direct Telegram link everywhere, no form, no funnel.
- Proof on hand: Instagram feed preview (6 tiles, linked to @eleonora.kupczyk) serves as the primary social proof; no testimonials or case studies collected yet.

## Brand Personality

Warm, confident, approachable. The voice is direct and personal (first-person "I" copy, "Привет, меня зовут Элеонора"), never corporate or hype-driven. Confidence comes from specificity — named services, real prices, real duration — not from superlatives.

## Anti-references

Generic SaaS/agency consultant templates: corporate blue gradients, stock-photo grids, hero-metric stat rows, gradient-text headlines. Also avoid loud influencer/hustle-culture aesthetics — neon accents, countdown urgency, aggressive upsell language. The brand should read as one real person's warm, editorial space, not a mass-produced funnel.

## Design Principles

- One real person, always visible — portraits, first-person voice, and direct contact links over abstracted forms or funnels.
- Specificity over superlatives — exact prices, durations, and deliverables build more trust than generic claims of expertise.
- Slow, editorial pacing — motion and layout should feel considered and unhurried, matching a coach's attentiveness rather than a SaaS product's urgency.
- Practice what's taught — a marketer teaching content creation should visibly demonstrate good content/design taste on her own site.
- Low-friction contact — every path leads to a direct Telegram message, never a form or gated funnel.

## Accessibility & Inclusion

WCAG 2.1 AA: minimum 4.5:1 contrast for body text, 3:1 for large text; visible focus rings on all interactive elements; full `prefers-reduced-motion` fallback (already implemented in globals.css).

---

# Implementation Reference

The strategic context above guides design decisions. The technical detail below documents the current implementation.

## Core Scope
Type: Personal brand landing page (single page, anchor-linked sections)
Target: Convert visitors into Telegram/Instagram contacts for consultations, mentorship, and content-shoot bookings
Pages: One landing page — Header, Hero, Mission, About, Services, Feed, Contact
Animation Level: subtle
Content: ready (RU/EN copy and pricing sourced from approved Soft.dc.html design)

## Sections Map

### Header
- Component: src/components/layout/Header.tsx
- Layout: sticky top bar, logo left, nav center (desktop only), language toggle + Telegram CTA right
- Animation: backdrop-blur on scroll (already applied), no scroll-triggered reveal (persistent chrome)
- Data: nav labels (i18n), Telegram link

### Hero
- Component: src/components/sections/Hero.tsx
- Layout: 2-column grid (55/45) — headline + tagline + CTAs left, portrait image with floating badge right; stacks to 1 column on mobile
- Animation: fade+translateY reveal on load (not scroll-triggered, above the fold), staggered children
- Data: name, tagline, hero image, badge text, CTA links (i18n)

### Mission
- Component: src/components/sections/Mission.tsx
- Layout: centered pill-background band with kicker label + large serif pull-quote
- Animation: fade+translateY reveal on scroll entry
- Data: mission label, mission statement (i18n)

### About
- Component: src/components/sections/About.tsx
- Layout: 2-column grid (45/55) — square portrait left, kicker + heading + body + italic pull-quote right; stacks on mobile
- Animation: fade+translateY reveal on scroll entry, image and text staggered
- Data: portrait image, kicker, title, body, quote (i18n)

### Services
- Component: src/components/sections/Services.tsx
- Layout: centered heading, vertical stack of 6 service rows (image thumb + title/tag/desc + price/CTA), each row a link
- Animation: staggered fade+translateY reveal per row on scroll entry; hover translateY(-3px) + shadow on each row
- Data: 6 services array (num, title, tag, duration, price, desc, img) — i18n per locale

### Feed
- Component: src/components/sections/Feed.tsx
- Layout: heading + Instagram CTA row, 6-column image grid below (2 rows on mobile)
- Animation: staggered fade-in per tile on scroll entry
- Data: 6 feed tile images, Instagram link

### Contact
- Component: src/components/sections/Contact.tsx
- Layout: dark rounded panel, 2-column (60/40) — heading + body + CTA left, stacked contact links (Instagram, Telegram, VK, phone, email) right; footer line below panel
- Animation: fade+translateY reveal on scroll entry
- Data: contact copy, contact links (i18n)

## User Flow
Hero CTA or nav → Services (browse offers + pricing) → Contact (Telegram CTA) or direct Telegram/Instagram links in Header/Hero/Contact at every scroll depth.

## Technical Constraints
- Images:     next/image, sizes attribute, blur placeholder — always, no exceptions
- SEO:        Semantic HTML. JSON-LD structured data at build time (Person + Organization schema)
- Forms:      N/A — all contact via Telegram/Instagram/phone/email links, no form submission
- Analytics:  N/A (not requested in brief)
- CMS:        N/A — content is static, hardcoded i18n dictionaries (RU default, EN toggle)
- i18n:       client-side RU/EN toggle via React context, RU is default locale

## Out of Scope (v1)
- Contact form / newsletter signup
- CMS-driven content editing
- Analytics integration
- Blog/article pages
- Editorial and Minimal alternate designs (not selected)
- Payment/booking integration — links go to Telegram only

## Performance Budget
- LCP:              < 2.5s
- CLS:              0.00 (no layout shifts)
- INP:              < 200ms
- JS first load:    < 150KB gzipped
- No render-blocking resources
- No unoptimized images
