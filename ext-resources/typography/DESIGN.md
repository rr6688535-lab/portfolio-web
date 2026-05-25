---
name: Luminous Dark
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002387'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#104af0'
  secondary: '#c6c6cc'
  on-secondary: '#2f3035'
  secondary-container: '#47494e'
  on-secondary-container: '#b7b8be'
  tertiary: '#c2c7d0'
  on-tertiary: '#2c3138'
  tertiary-container: '#686d76'
  on-tertiary-container: '#ecf0fa'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#e2e2e8'
  secondary-fixed-dim: '#c6c6cc'
  on-secondary-fixed: '#1a1c20'
  on-secondary-fixed-variant: '#45474b'
  tertiary-fixed: '#dee2ec'
  tertiary-fixed-dim: '#c2c7d0'
  on-tertiary-fixed: '#171c23'
  on-tertiary-fixed-variant: '#42474f'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 150%
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding: 120px
  card-padding: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality of this design system is sophisticated, visionary, and technical. It is tailored for high-end digital agencies, portfolios, and premium SaaS products that want to convey a sense of "depth" and "precision." The UI should evoke a feeling of stepping into a high-tech studio—quiet, focused, and illuminated by digital light.

The aesthetic blends **Glassmorphism** with **Minimalism**. It relies on high-contrast typography and atmospheric lighting rather than heavy textures. The emotional response is one of reliability and innovation, achieved through a controlled palette of deep blacks and electric blues.

## Colors

The color palette is anchored by a "True Dark" foundation. The primary background should be a near-black neutral to allow glowing elements to pop. 

- **Primary:** An electric, high-vibrancy blue used for accents, active states, and light-leaks.
- **Surface Tiers:** Use deep charcoals and navy-tints for cards to create a sense of layering.
- **Gradients:** Employ radial gradients that transition from the primary blue (at low opacity) to transparent to simulate light emitting from within the components.
- **Contrast:** Typography must remain pure white (#FFFFFF) or high-light gray (#E1E1E1) to ensure legibility against the dark backgrounds.

## Typography

This design system utilizes **Manrope** for its modern, geometric, and highly readable characteristics. The typographic hierarchy is aggressive, featuring "Display" sizes for background numerical indicators and "Headline" sizes for section titles.

A key stylistic choice is the use of *italics* for specific keywords within headlines to add an editorial feel. Numerical indicators for lists (01, 02, etc.) should be rendered in the `display-lg` style with an opacity of 5-10%, acting more as a visual texture than primary content. Ensure tight tracking on larger headers to maintain a compact, premium appearance.

## Layout & Spacing

The layout follows a **Fixed Grid** model centered on the viewport. Content is organized into a vertical stack of high-impact sections. 

- **Vertical Rhythm:** Use generous `section-padding` to allow the glowing "aura" effects of components to fade out naturally without clipping.
- **Service Cards:** These should be structured in a single-column stack or a 2-column grid.
- **Content Alignment:** Headlines are typically centered, while body content within cards is left-aligned to maintain a clean reading edge.
- **Margins:** Maintain wide lateral margins to draw the eye toward the center of the experience.

## Elevation & Depth

Depth is the defining characteristic of this design system. It is achieved through **Glassmorphism** and **Ambient Glows** rather than traditional drop shadows.

- **Surface Treatment:** Cards use a semi-transparent background (approx. 40-60% opacity) with a `backdrop-filter: blur(20px)`.
- **Borders:** Use 1px "inner-glow" borders. These are subtle, high-altitude outlines with a 10-15% white opacity.
- **Glow Effects:** Apply a primary-colored outer glow (box-shadow with high spread and low opacity) to featured elements or hovered states.
- **Layering:** Background numbers sit at the lowest Z-index, followed by the glass card, then the text content.

## Shapes

The design system uses a **Rounded** shape language to soften the high-contrast tech aesthetic. 

- **Cards:** Use `rounded-lg` (1rem) for standard service cards.
- **Interactive Elements:** Buttons and input fields should follow the same `rounded-lg` logic to ensure consistency.
- **Icons:** Icons should be contained within small, rounded squares (0.5rem radius) that feature a subtle gradient background, echoing the larger card styles.

## Components

### Service Cards
The hero component of this design system. Each card must feature:
- A large, ghosted background number.
- A 1px subtle border.
- A gradient "hotspot" in the corner that uses the primary blue at 10% opacity.
- Clear vertical spacing between the icon, title, and description.

### Buttons
- **Primary:** Solid fill using the primary blue, with a soft outer glow of the same color.
- **Secondary/Ghost:** Transparent fill with a 1px white border and white text.
- **Interaction:** On hover, the primary button's glow should increase in intensity.

### Accordions / FAQ
Items are contained within dark, low-contrast horizontal bars. The "plus" or "arrow" icon should be housed in a small primary-colored square to create a focal point.

### Progress & Navigation
Use "Pill-shaped" indicators for carousels and pagination. The active state should be the primary blue, while inactive states are dark gray.

### Input Fields
Inputs should be dark and recessed, using a `tertiary_color_hex` fill and a subtle 1px border that glows primary blue when focused.