# Evans Jep — copy-deck implementation

Existing project: ejepsystems/evansjep. Dependency-free Node static generator.

## Work locally

Run npm run build and npm test from this directory. Output: dist/. The generated site has 10 HTML pages, with clean routes on Vercel. No editorial directory is copied to the output.

## Source

- src/content.mjs: public-facing content selected from the supplied copy deck and previously confirmed venture descriptions/contact accounts.
- scripts/build.mjs: shared shell, pages and explicit asset allowlist.
- src/styles.css: consolidated mobile-first neutral editorial design, light/dark appearance.
- src/site.js: navigation disclosure, keyboard handling, focus loop and appearance.
- scripts/check.mjs: route, asset, fragment and content boundary verification.
- scripts/check-navigation.cjs: interaction tests against a DOM model, not a rendered browser.
- editorial/: local private copy deck, review record and legacy drafts. Never push this directory to the public repository or include it in website deployment.

## Release boundary

Current instruction supersedes earlier production approval: local/private preview only. No merge, public publication or production promotion. The private preview is uploaded directly from generated files; public GitHub main is unchanged. Preserve Vercel Authentication and noindex. The preview uses empty build/install commands only for its already-built output; repository Vercel build configuration remains npm run build.

## Validation

See editorial/VALIDATION.md and editorial/CONTENT_REVIEW.md in the private review package. Browser control was unavailable; do not describe the site as visually certified on mobile or desktop.
