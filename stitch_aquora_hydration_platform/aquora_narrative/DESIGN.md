---
name: Aquora Narrative
colors:
  surface: '#0f1417'
  surface-dim: '#0f1417'
  surface-bright: '#353a3d'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#171c1f'
  surface-container: '#1b2023'
  surface-container-high: '#262b2e'
  surface-container-highest: '#313539'
  on-surface: '#dfe3e7'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#dfe3e7'
  inverse-on-surface: '#2c3134'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#41e4c0'
  on-secondary: '#00382d'
  secondary-container: '#00c7a5'
  on-secondary-container: '#004d3f'
  tertiary: '#b6c6ed'
  on-tertiary: '#20304f'
  tertiary-container: '#061836'
  on-tertiary-container: '#7282a5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#5ffbd6'
  secondary-fixed-dim: '#38debb'
  on-secondary-fixed: '#002019'
  on-secondary-fixed-variant: '#005142'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6ed'
  on-tertiary-fixed: '#091b39'
  on-tertiary-fixed-variant: '#374767'
  background: '#0f1417'
  on-background: '#dfe3e7'
  surface-variant: '#313539'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the intersection of high-science and restorative wellness. It evokes a sense of deep-sea tranquility combined with the precision of a laboratory. The aesthetic is **Modern Minimalist with Glassmorphic accents**, prioritizing clarity, breathable space, and a premium "liquid" feel.

The UI should feel immersive. Use full-bleed deep navy sections to establish authority and trust, transitioning into bright, airy white sections for educational content. The emotional response is one of "calm confidence"—the user should feel they are in the hands of experts who value both data and aesthetics. Visual interest is driven by high-quality translucent layers and subtle motion that mimics the gentle ebb and flow of water.

## Colors

The palette leverages a high-contrast relationship between deep oceanic tones and luminous aqua highlights.

- **Primary Deep Navy (#0A192F):** Used for primary backgrounds, deep-dive sections, and "Scientific" mode surfaces.
- **Secondary Aqua (#64FFDA):** The "Life" color. Used for primary CTAs, active states, and data visualization highlights.
- **Surface Deep (#112240):** Used for card backgrounds and secondary containers within dark mode to create subtle depth.
- **Light Neutral (#F0F4F8):** Used for high-readability blog content or informational white-papers.

**Functional Application:** 
Always pair Aqua text against Deep Navy backgrounds for maximum legibility and "glow" effect. Use the translucent blue `rgba(100, 255, 218, 0.1)` for hover states and subtle glass backgrounds.

## Typography

This design system utilizes a dual-sans serif approach. **Manrope** provides a geometric, modern, and slightly warm feel for headlines, while **Inter** ensures maximum legibility for data-heavy and technical body content.

Headlines should be bold and confident, often used with tight letter-spacing to feel "locked-in" and authoritative. Display sizes are reserved for hero sections and key scientific claims. All body text maintains a generous line height to prevent the UI from feeling cramped, reinforcing the "breathable" brand pillar.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with high internal padding. 

- **Desktop:** 12-column grid with 24px gutters. Use generous vertical margins (80px–120px) between sections to maintain the premium, airy feel.
- **Tablet:** 8-column grid.
- **Mobile:** 4-column grid with 20px side margins.

Content should often be centered or staggered to mimic the organic flow of water. Avoid "brick-like" layouts; instead, use staggered heights in card grids. Use the 8px base unit for all component-level spacing (padding, gaps).

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Level 1 (Base):** Deep Navy (#0A192F).
- **Level 2 (Containers):** Ocean Blue (#112240) with a 1px border of `rgba(255, 255, 255, 0.05)`.
- **Level 3 (Interactive/Glass):** Surfaces use a background blur (20px-40px) with a semi-transparent fill of `rgba(17, 34, 64, 0.7)`.
- **Shadows:** When used, shadows must be "Ambient"—highly diffused, using a dark navy tint rather than pure black (e.g., `0 20px 40px rgba(0, 0, 0, 0.3)`).

Curved separators (sinusoidal paths) should be used to transition between color blocks, reinforcing the hydration theme.

## Shapes

The shape language is "Soft-Modern." All primary containers, buttons, and input fields utilize a 16px (`rounded-lg`) to 24px (`rounded-xl`) corner radius. This removes the harshness of the scientific theme, making the brand feel more approachable and "human." 

Data visualization elements (bars, progress indicators) should always have fully rounded ends (pill-shaped) to keep the liquid metaphor consistent.

## Components

### Buttons
- **Primary:** Bright Aqua (#64FFDA) background with Deep Navy text. Bold weight. High-pill shape. On hover, apply a soft "glow" (outer shadow with aqua tint) and a 2px lift.
- **Secondary/Ghost:** 1px Aqua border with transparent background. White text.

### Glassmorphic Cards
Used for product features and scientific data. Features a 1px stroke (`rgba(255, 255, 255, 0.1)`), a 32px backdrop blur, and internal padding of at least 32px.

### Inputs & Selects
Dark navy backgrounds (#112240) with a 1px border that glows Aqua when focused. Use Inter for input text for maximum clarity.

### Data Visualizations
Charts should use gradients of Aqua to Cyan. Lines should be smoothed (curved) rather than jagged. Background grids for charts should be extremely subtle (5% opacity white).

### Progress Circles
Used for "Hydration Tracking" or "Purity Scores." Thin stroke widths, using a gradient fill to represent liquid volume.