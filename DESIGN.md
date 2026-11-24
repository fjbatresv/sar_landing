# Design tokens and critique

## Pass 1 — product continuity

- The landing uses the app’s navy `#141633`, indigo `#666CFF`, pale page surface `#F7F7F9`, white panels, and muted slate `#64748B`. Active elements use soft indigo `#F0F0FF`, `#C2C4FF`, and `#A3A7FF`.
- Status colors follow the application: sky `#16B1FF`, green `#3FA607`, amber `#FDB428`, and red `#E60000`. A label, icon, or step number accompanies each colored state.
- Barlow is the body face. Barlow Semi Condensed carries headings. Astro’s Fonts API downloads and serves both from the site build. Material Symbols Outlined uses an Astro Google Icons subset containing only the glyphs on the page.
- Large dashboard-like panels use a 24px radius; controls, rows, and compact panels use 12px. The site uses an editorial 72rem column and keeps the app’s navy prominent in the hero and contact close.
- The service day remains the main visual idea. Nine details reveal operational context and its system response, with native disclosure behavior and a small focus-to-open enhancement. The timeline becomes a vertical list on narrow screens.
- The architecture diagram is static SVG with separate synchronous and asynchronous paths. The product stories use HTML lists and steps as a readable alternative. No diagram or decorative motion is needed for comprehension.
- Reduced-motion preferences remove animation and smooth scrolling. Keyboard focus is visible. The page adds no client framework or icon package.

## Pass 2 — critique against the updated brief

The same navy, type, rounded white panels, and Material Symbols family link the case study to the application. The product sections vary their panel size and border treatment instead of repeating one card shape. Product capabilities, flows, engineering practices, and personal contributions have distinct information structures. The public screenshots sit in a browser or device frame on the same pale background.

Indigo is used for links and controls; dark indigo text is used where a smaller label needs more contrast. State colors never carry meaning on their own. The diagram can scroll horizontally without changing its labels or hiding the text alternative. Responsive rules cover 375, 768, 1024, and 1440px. The timeline opens by pointer or keyboard, and reduced motion disables the remaining transitions.
