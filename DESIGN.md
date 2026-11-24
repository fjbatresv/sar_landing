# Design tokens and critique

## Pass 1 — service-day system

- Steel `#E6E9E8` canvas, paper `#FAFAF7` surfaces, ink `#17201D` text, slate `#56615D` secondary text, line green `#1F6F50`, ticket amber `#E8A33D` for timeline marks and the primary contact action. The CTA always uses `#17201D` text.
- Bricolage Grotesque variable display face and Public Sans body face, supplied through Astro's self-hosted Fonts API. A left-aligned 72rem column uses 16/18/24/32/48/72px sizes and readable line lengths.
- A single service-day timeline carries the expressive visual weight. Events connect to architecture sections. On small screens the timeline turns vertical; reduced-motion disables its loading sweep.
- Decision rows use a decision/trade-off split. Other content stays editorial, with thin rules, an accessible SVG architecture diagram, visible focus, and AA contrast.
- Dark mode uses tonal steel/paper and green variants while preserving amber with ink text.

## Pass 2 — critique against the brief

The timeline directly represents restaurant operations and stays the only animated graphic. The two-column trade-off rows avoid repetitive cards. Links and focus are visible, and mobile changes the timeline's geometry instead of shrinking it. Slate on steel is approximately 5.4:1; green on paper is above 5:1. Amber is reserved for marks and the main CTA and always pairs with ink. Motion is decorative and removed for reduced motion. The wide layout caps at 72rem; the title scale is responsive. No all-caps labels, emoji icons, or arrow-button copy.
