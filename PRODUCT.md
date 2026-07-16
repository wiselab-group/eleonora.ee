# Product Requirements

## Core Scope
Type: Personal brand landing page (single page, anchor-linked sections)
Target: Convert visitors into Telegram/Instagram contacts for consultations, mentorship, and content-shoot bookings
Pages: One landing page — Header, Hero, Mission, About, Services, Feed, Contact
Animation Level: subtle
Content: ready (RU/EN copy and pricing sourced from approved Soft.dc.html design)

## Sections Map

### Header
- Component: src/components/sections/Header.tsx
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
- Layout: dark rounded panel, 2-column (60/40) — heading + body + CTA left, stacked contact links (Instagram, Telegram, phone, email) right; footer line below panel
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
