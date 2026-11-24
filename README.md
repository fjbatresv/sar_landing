# SAR architecture case study

A bilingual portfolio page and sanitized architecture notes for a restaurant operations platform. The public site contains no SAR application source code.

## Local build

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run build
node tools/check-sanitized.mjs
```

For GitHub Pages, set `ASTRO_SITE` and `ASTRO_BASE`. The workflow uses the repository's `PAGES_CUSTOM_DOMAIN` variable to select the domain root or repository subpath.

The Angular screenshot runner is `tools/screenshots/capture.mjs`. It expects the SAR workspace dependencies, a local frontend server, and `NG_APP_API` / `NG_APP_CDN` pointed at `.demo.invalid` hosts; it intercepts those hosts and uses only fictional session data.
