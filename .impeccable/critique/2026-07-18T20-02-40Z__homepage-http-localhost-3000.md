---
target: "homepage (http://localhost:3000)"
total_score: 21
p0_count: 2
p1_count: 2
timestamp: 2026-07-18T20-02-40Z
slug: homepage-http-localhost-3000
---

Method: dual-agent (A: aca0ddb50811ff5d2 · B: a3a4919963384ca3d) — B's browser-visualization step is a documented fallback (no browser automation tool exposed in this environment); its CLI detector pass completed normally.

# Design Critique — Eleonora Kupczyk Landing Page

## Design Health Score

| #         | Heuristic                       | Score     | Key Issue                                                                                                      |
| --------- | ------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| 1         | Visibility of System Status     | 2         | No scroll-progress or section indicator; pinned Services scroll gives no "3 of 6" feedback                     |
| 2         | Match System / Real World       | 3         | Copy is specific and personal; "Choose →" reads slightly transactional for a coaching brand                    |
| 3         | User Control and Freedom        | 1         | No nav, no back-to-top; Services scroll-jacks with no skip/exit                                                |
| 4         | Consistency and Standards       | 2         | Internal system is consistent, but #services/#shorts/#feed/#contact anchors exist with nothing linking to them |
| 5         | Error Prevention                | 3         | No forms; Telegram links pre-fill context-aware greeting text                                                  |
| 6         | Recognition Rather Than Recall  | 2         | No persistent logo/wordmark once scrolled past Hero                                                            |
| 7         | Flexibility and Efficiency      | 1         | No jump-to-section; only control is the RU/EN toggle                                                           |
| 8         | Aesthetic and Minimalist Design | 3         | Restrained and clean, but thin on trust-building content before the pricing ask                                |
| 9         | Error Recovery                  | 2         | N/A mostly (no forms); no fallback state defined for slow/broken YouTube thumbnails                            |
| 10        | Help and Documentation          | 2         | Not very applicable to a marketing page; service descriptions self-document well                               |
| **Total** |                                 | **21/40** | **Acceptable — significant improvements needed**                                                               |

Both heuristics 3 and 7 trace to the same root cause: the header was stripped down to just a language toggle.

## Anti-Patterns Verdict

**LLM assessment**: Does not read as generic AI slop — no gradient text, no glassmorphism, no hero-metric stat rows, no decorative 01/02/03 scaffolding, no monospace-as-technical. Typography and the One Accent Rule are executed with real discipline. What it reads as instead is unfinished: two committed strategy docs (PRODUCT.md, DESIGN.md) describe a site — Header with nav + Telegram CTA, a Mission section, an About section — that doesn't exist in the shipped code anymore.

**Deterministic scan**: detect.mjs returned exit code 2 with 3 advisory findings:

1. LanguageToggle.tsx:22 — 11px font size flagged as "outside DESIGN.md ramp"
2. Contact.tsx:90 — same rule, same false-positive pattern
3. globals.css:72 — #fff in `::selection { color: #fff }`, flagged as undocumented color

Findings 1 and 2 are false positives: DESIGN.md's own Chips/Tags spec explicitly documents "11–12px bold uppercase label" — the detector checks a single fixed step rather than the documented range. Finding 3 is a legitimate minor gap.

Missed by the detector: LanguageToggle.tsx:24 uses Tailwind's `text-white` keyword for the active locale label — a hardcoded color bypassing var(--color-name).

**Visual overlays**: Not available this run — no browser automation tool is exposed in this session, so no [Human] tab overlay exists. Documented fallback path, not a silent skip.

## Overall Impression

The design system itself is genuinely well-executed — the One Accent Rule, diffuse shadows, pill buttons, and shared headline size are all followed faithfully, and the Contact section's reassurance copy and context-aware Telegram deep-links are better than most personal-brand sites bother with. But the page has drifted from its own strategy: two rounds of scope-cutting (removing the header nav/CTA, removing About/Mission) left the code thinner than the docs still claim, and nobody reconciled the two. The biggest opportunity isn't a visual fix — it's closing the gap between "a real person is behind every scroll depth" (the stated strategy) and a header that's now just a language switcher with no way to escape, jump, or re-contact until the very bottom of the page.

## What's Working

1. Contact's reassurance copy — "I reply personally and help you pick the right format for your goal" is exactly the specific, human line that counters "message a stranger" anxiety, placed right at the highest-stakes moment.
2. Context-aware Telegram deep links — every CTA pre-fills a greeting naming the specific service and price.
3. Shadow and motion discipline — ServiceCard's resting/hover shadows match DESIGN.md's rgba/blur spec almost exactly, hover lift uses translateY + soft shadow with no scale.

## Priority Issues

**[P0] Header has no navigation and no persistent Telegram CTA**
Why it matters: PRODUCT.md states the Telegram CTA is "repeated in Header/Hero/Contact" at "every scroll depth." Header.tsx renders only a LanguageToggle.
Fix: Restore a minimal persistent CTA in the header — DESIGN.md's own mobile spec already describes the pattern ("logo + language toggle + icon-only Telegram button").
Suggested command: /impeccable craft

**[P0] Anchor IDs exist with nothing linking to them; no way to jump or escape a section**
Why it matters: #services, #shorts, #feed, #contact are present in the DOM with zero href="#..." anywhere in components. Combined with the Services pinned scroll-jack, a visitor has no way to skip or jump.
Fix: Restore a lightweight in-page nav, or remove the now-pointless ids and dead nav i18n fields.
Suggested command: /impeccable craft

**[P1] About/Mission removal breaks the documented trust ladder; PRODUCT.md no longer matches the shipped page**
Why it matters: PRODUCT.md's belief ladder assigns "she's a real, warm, credible person" to "the hero portrait and About section," which no longer exists.
Fix: Reintroduce a compact bio/trust beat, or deliberately update PRODUCT.md to reflect the new, thinner strategy.
Suggested command: /impeccable shape or /impeccable document

**[P1] Services' pinned scroll-jack has no progress indicator and no viewport-based opt-out**
Why it matters: Pins scroll and translates 6 cards horizontally via scrollYProgress with no dots/counter. Runs on mobile too, hijacking natural thumb-scroll.
Fix: Add a progress indicator during the pin; cap pinned scroll distance or default to stacked variant below a viewport threshold.
Suggested command: /impeccable optimize or /impeccable clarify

**[P2] Footer credit line fails WCAG AA contrast**
Why it matters: Contact.tsx's bottom bar computes to ≈3.44:1, below the 4.5:1 AA minimum PRODUCT.md itself commits to.
Fix: Raise opacity to ≥65–70%, or use a dedicated lighter neutral token.
Suggested command: /impeccable audit or /impeccable polish

## Persona Red Flags

**Jordan (Confused First-Timer)**: No logo/nav signals there's more to explore. Gets scroll-jacked into 6 similarly-priced cards with nothing marked "start here." Never encounters an About section. No escape if confused mid-carousel.

**Riley (Deliberate Stress Tester)**: Looks for a nav link to jump to pricing/contact — none exists. Tab-navigates and hits an absolutely-positioned language toggle first, out of visual flow. Footer contrast provably fails AA (3.44:1).

**Casey (Distracted Mobile User)**: Pinned Services interaction runs on mobile too — vertical scroll hijacked into horizontal card sequence. No persistent Telegram button in mobile header, contradicting DESIGN.md's own spec.

## Minor Observations

- Dead i18n fields (nav_services, nav_feed, nav_contact, heroBadge, servicesKicker, feedKicker) declared/translated in both locales but referenced nowhere.
- ShortCard.tsx's next/image omits placeholder="blur", inconsistent with CLAUDE.md's "always, no exceptions" rule.
- No scroll-margin-top set anywhere in globals.css — worth adding proactively if section nav is restored.
- The hero portrait's sepia-[0.12] saturate-[0.85] treatment is a tasteful way to warm the photo without a heavy-handed overlay — fits "The Warm Studio" well.

## Questions to Consider

- Was cutting About/Mission and the header nav a deliberate pivot toward "hero-only, ultra-minimal," or scope-cutting that never got reconciled with the strategy docs?
- If the Telegram CTA's whole value proposition is "always available, every scroll depth," why is it missing from the one piece of UI that's actually present at every scroll depth?
- Is the Services scroll-jack earning its complexity, in a brief that explicitly asks for "slow, editorial pacing" and rejects "SaaS energy"?
