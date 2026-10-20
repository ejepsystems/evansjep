# Evans Jep

Personal founder website: work, ideas and current focus. Source of truth: `ejepsystems/evansjep`.

## Develop

Node.js 20 or newer. No external dependencies.

```sh
npm run build
npm test
python3 -m http.server 3000 --directory dist
```

Local Python preview serves `/about.html`; Vercel clean URLs serve `/about`.

## Structure

- `src/content.mjs`: editable profile, venture directory and editorial drafts.
- `src/styles.css`: responsive editorial design.
- `src/site.js`: accessible mobile navigation.
- `scripts/build.mjs`: generates 11 static pages to `dist/`.
- `scripts/check.mjs`: validates page structure and all internal links.
- `docs/ARCHITECTURE.md`: identity and publishing rules.
- `vercel.json`: static build, clean URLs and preview indexing protection.

## Deployment

Use the existing Vercel project `evansjep` under team `team_BbJOXxnXhbaXCfAZo3FzL27X`. Framework: Other / null; build: `npm run build`; output: `dist`; root: repository root. Keep Vercel Authentication enabled. Production release is authorized. Deploy the verified main commit with target production; retain existing Vercel Authentication protection.

The first edition is a review foundation. Writing is clearly labelled editorial draft. Biography, portrait, direct contact details, personal titles and precise venture stages require approved information. No fictional achievements, testimonials or media appearances.

## Current presentation

Times-style native serif throughout. Compact two-column mobile menu, 64px header, no decorative numbering, abbreviated editorial homepage. See docs/IDENTITY.md for current authority.
