# CLAUDE.md

## Project Overview

Club Connect Demo Site — a static marketing/showcase site for the Club Connect community sports platform. It presents annotated iPhone screenshots inside phone-frame mockups, organized into feature sections (onboarding, club creation, AI events, messaging, etc.). Visitors can click any phone to open a full-screen "exploded view" with positioned callout annotations explaining each feature.

## Tech Stack

- **Framework**: Astro 5.x (static output, no SSR/islands)
- **Language**: TypeScript (strict mode)
- **Styling**: Scoped Astro `<style>` blocks + `src/styles/global.css` design tokens
- **Fonts**: Oxanium (headlines/numbers) + Poppins (body/UI) via `@fontsource`
- **Images**: Astro `<Image>` with Sharp for WebP optimization
- **Interactivity**: Vanilla TypeScript — no React/Vue/Svelte
- **Package Manager**: npm

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── pages/
│   └── index.astro              # Single-page landing (all sections)
├── layouts/
│   └── BaseLayout.astro         # HTML shell, meta, global CSS import
├── components/
│   ├── Navbar.astro             # Fixed top nav with scroll-blur effect
│   ├── PhoneFrame.astro         # iPhone mockup wrapper (clickable → exploded view)
│   ├── ExplodedView.astro       # Full-screen annotation overlay (dialog)
│   ├── SectionHeader.astro      # Reusable section title + subtitle
│   ├── FeatureBadge.astro       # Pill-style feature highlight
│   ├── PainPointCard.astro      # Problem/benefit card
│   ├── MetricCard.astro         # Animated stat counter
│   ├── FlowCarousel.astro       # Horizontal screenshot carousel with dots
│   └── Footer.astro             # Site footer
├── scripts/
│   ├── animations.ts            # Scroll reveals, parallax, counters, carousels
│   ├── exploded-view.ts         # Annotation overlay logic + keyboard nav
│   └── typing-demo.ts           # Typewriter text effect
├── data/
│   └── annotations.ts           # Screen annotation definitions (callout positions)
├── assets/
│   ├── logo-light.png / logo-dark.png
│   └── screenshots/             # Organized by feature flow
│       ├── first-run/
│       ├── create-club/
│       ├── ai-create-event/
│       ├── create-new-event/
│       └── messages/
└── styles/
    └── global.css               # Design tokens, resets, utilities
```

## Design System

### Brand Colours (CSS custom properties)
| Token                      | Value                    | Usage                  |
|----------------------------|--------------------------|------------------------|
| `--cc-primary`             | `#C3FF4D` (lime green)   | Primary accent, CTAs   |
| `--cc-primary-dark`        | `#88DB04`                | Hover/active states    |
| `--cc-secondary-accent`    | `#EEA172` (warm orange)  | Secondary highlights   |
| `--cc-destructive`         | `#FF7C70`                | Destructive actions    |
| `--cc-bg-deep`             | `#0a0a0a`                | Page background        |
| `--cc-bg-card`             | `#1a1a1a`                | Card surfaces          |
| `--cc-text-primary`        | `#FEFFFF`                | Primary text           |
| `--cc-text-secondary`      | `#98989E`                | Secondary/muted text   |

### Typography
- **Oxanium** (400–800): Headlines, stat numbers, impact text
- **Poppins** (300–700): Body copy, UI labels, form fields
- Fluid sizing via `clamp()` — see `--fs-*` tokens in `global.css`

### Spacing
Token scale: `--space-xs` (0.5rem) through `--space-xl` (6rem). Section padding uses `--section-padding`.

## Key Patterns

### Astro Components
```astro
---
// Frontmatter: imports, typed props, logic
import { Image } from 'astro:assets';
interface Props { title: string; }
const { title } = Astro.props;
---

<div class="component">
  <h2>{title}</h2>
  <slot />
</div>

<style>
  /* Scoped to this component */
  .component { ... }
</style>
```

### Scroll Animations
Add `data-animate="fade-up|fade-down|fade-left|fade-right|scale"` to any element. The `animations.ts` IntersectionObserver handles reveal on scroll. Supports `data-delay` for staggering.

### Annotation Data
`src/data/annotations.ts` maps screenshot filenames to `ScreenAnnotation` objects:
```ts
{ title: string; description: string; callouts: { x: number; y: number; label: string; detail: string }[] }
```
Callout `x`/`y` values are percentages positioning the marker on the screenshot.

### Exploded View Flow
1. User clicks a `PhoneFrame` → dispatches custom event with screen ID
2. `ExplodedView` opens as a full-screen dialog overlay
3. Shows enlarged screenshot with callout markers + sidebar info
4. Supports prev/next navigation and keyboard controls (Escape, Arrow keys)

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `role="dialog"` on overlays
- `aria-label` on icon buttons
- Keyboard navigation: Enter/Space to activate, Escape to close, Arrow keys for nav
- `prefers-reduced-motion` respected — animations disabled when set

## Performance

- Static output — no client-side framework runtime
- Sharp-based WebP image optimization (quality: 82)
- Lazy loading on images with configurable delay
- `requestAnimationFrame`-throttled scroll listeners
- `IntersectionObserver` for scroll-triggered animations
- Passive event listeners where applicable

## Conventions

- **TypeScript everywhere** — strict mode, explicit type annotations on props and data structures
- **Scoped styles** — use Astro `<style>` blocks; only design tokens live in `global.css`
- **No external UI libraries** — vanilla TS for interactivity, keep bundle minimal
- **Path alias**: `@/*` maps to `src/*` (configured in `tsconfig.json`)
- **Image imports**: Use `import img from '@/assets/...'` + Astro `<Image>` component
- Keep changes focused; avoid over-engineering
- Dark theme only — all designs assume dark backgrounds

## Reference Docs

- `UI_DESIGN_SPECIFICATION.md` — iOS app colour system and component spec (reference for consistency)
- `brand-typography.md` — Font pairing rationale (Oxanium + Poppins)
