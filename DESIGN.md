---
name: Kinetic Horizon
colors:
  surface: '#fff8f5'
  surface-dim: '#e3d8d2'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fdf1eb'
  surface-container: '#f7ece5'
  surface-container-high: '#f1e6e0'
  surface-container-highest: '#ece0da'
  on-surface: '#201b17'
  on-surface-variant: '#44474f'
  inverse-surface: '#352f2b'
  inverse-on-surface: '#faefe8'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#455e90'
  primary: '#00173d'
  on-primary: '#ffffff'
  primary-container: '#0f2c5c'
  on-primary-container: '#7d95cb'
  inverse-primary: '#aec6ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#271500'
  on-tertiary: '#ffffff'
  tertiary-container: '#432800'
  on-tertiary-container: '#d08500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#2d4677'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fff8f5'
  on-background: '#201b17'
  surface-variant: '#ece0da'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a "tech-for-good" logistics infrastructure, balancing high-stakes reliability with human-centric warmth. The brand personality is **Trustworthy, Visionary, and Grounded**. It avoids the coldness of typical Silicon Valley SaaS in favor of a "Cinematic Tech" aesthetic—incorporating high-fidelity photography of local landscapes and infrastructure paired with precise, grid-aligned interface elements.

The visual style is **Modern Corporate with Tactile Warmth**. It utilizes generous whitespace to reduce cognitive load in complex logistical workflows. Authenticity is maintained through a photographic art direction that prioritizes natural light, high-resolution textures, and real-world contexts, ensuring the platform feels like a bridge between digital efficiency and physical reality.

## Colors

The palette is rooted in the "Tech-for-Good" narrative, combining institutional stability with the vibrancy of growth.

*   **Primary (Deep Sapphire):** Used for navigation, primary actions, and core branding to establish authority and trust.
*   **Secondary (Emerald Green):** Represents success, system health, and logistics "movement." It should be used sparingly for high-signal success states and growth indicators.
*   **Tertiary (Golden Hour):** Inspired by the warmth of the sun, this color provides highlights and draws attention to critical calls-to-action or navigational waypoints.
*   **Earthy Neutrals:** Moving away from sterile grays, the neutrals utilize sandy tones and warm charcoals to ensure the interface feels approachable and integrated with the local environment.

The default mode is **Light**, optimized for high-visibility in outdoor environments where logistical personnel often operate.

## Typography

This design system utilizes **Inter** exclusively to ensure maximum legibility across all device types, particularly for coordinate-heavy logistics data. 

Hierarchy is established through weight and purposeful shifts in scale rather than typeface variety. Headlines are tight and impactful with slight negative letter-spacing for a modern feel. Body copy is prioritized for readability with a generous 1.5x line-height. Label styles are used for metadata and status indicators, often employing medium or semi-bold weights to remain distinct from body text.

## Layout & Spacing

The layout philosophy follows a **strictly aligned 12-column fluid grid** for desktop and a **4-column grid** for mobile. 

We employ a 4px baseline grid to ensure vertical rhythm. Desktop layouts feature "cinematic" margins (64px+) to focus the user’s eye on central data and professional photography. Spacing is used to group related logistical information—using tight `8px` increments for internal card elements and larger `48px` or `80px` gaps to separate major sections. This "breathable" approach prevents the dashboard from feeling overwhelming despite the density of logistical data.

## Elevation & Depth

Depth in the design system is achieved through **Tonal Layers** and **Ambient Shadows** rather than stark borders.

1.  **Level 0 (Base):** The sandy-neutral background (`#FDFBF7`).
2.  **Level 1 (Cards):** Pure white surfaces with a soft, diffused shadow (15% opacity of the primary sapphire) to create a subtle lift.
3.  **Level 2 (Overlays/Modals):** High-elevation surfaces with a 24px blur shadow, used for critical inputs and address confirmations.

We avoid heavy borders in favor of subtle 1px "ghost" outlines using a 10% opacity version of the neutral tone to define boundaries without adding visual noise.

## Shapes

The design system uses a **Soft** shape language. Elements are slightly rounded (`4px` to `8px`) to feel approachable and modern, while maintaining the crispness required for a professional tool.

*   **Buttons & Inputs:** `4px` (Small) radius for a precise, technical feel.
*   **Cards & Containers:** `8px` (Medium) radius for a softer, contained look.
*   **Progress Bars & Tags:** `12px` (Large) for distinct differentiation from core UI components.

## Components

*   **Buttons:** Primary buttons use the Deep Sapphire background with white Inter Medium text. Secondary buttons use a ghost style with a subtle Sapphire border. Success actions (e.g., "Complete Delivery") utilize the Emerald Green.
*   **Inputs:** Fields are defined by a light-neutral stroke. On focus, the stroke shifts to Deep Sapphire with a 2px outer glow. Labels always sit above the field in Inter Semi-bold.
*   **Status Chips:** Small, rounded containers with a 10% opacity background of their status color (e.g., Emerald for "Delivered", Golden Hour for "In Transit").
*   **Cards:** The fundamental building block. Cards have no borders, relying on Level 1 shadows. They feature high-resolution imagery at the top or left when representing physical locations.
*   **Data Lists:** High-density logistics lists use zebra-striping with a very faint sandy-neutral tone to assist row-tracking without adding heavy lines.
*   **Map Markers:** Custom pin components using the Primary color with a secondary-colored "pulse" for live tracking animations.