# Evans Jep website architecture

## Identity

Evans Jep is the personal website identity. Jeclazon is the public-facing technology company/master technology brand. EJEP Systems remains the underlying legal/corporate entity. Independent ventures retain their own identities.

## Experience

Home → About → Ventures → Writing (three draft article pages) → Now → Media → Contact. The homepage presents identity, selected work, working notes, approach and contact. Every page has direct navigation and a useful next step.

## Content authority

The initial copy is proposed website language. Do not assert CEO/founder titles, education, awards, customers, investors, revenue or launch stages without verification. Do not fabricate a portrait. Quincestone, Emperor Armani and Clesla are named project references; their exact stage is not assumed. Jeclazon is referenced separately as the technology company identity.

Editorial drafts must remain labelled until approved. Public media records and assets must come from real sources. The only contact destination currently provided is the verified organisation GitHub profile, labelled accordingly.

## Delivery

Dependency-free static generation with Node, responsive CSS and progressively enhanced navigation. Vercel project `evansjep`; output `dist`. Preserve deployment protection. Preview remains noindex through HTML, robots and response headers. No authentication application, checkout, dashboard or unrequested APIs.

## Next approved content inputs

Full biography and exact professional title; real portrait with permission; business email; verified social URLs; venture relationship and development stage; approved essays and actual media appearances.

## About and work revision — 20 October 2026

13 static pages. About routes: /about (My Story), /about/purpose (Purpose & Principles), /about/approach (How I Build). Shared disclosure navigation and local section links. Homepage and /ventures use the same selected-work component with independent brand panels and direct verified website destinations. Brand SVG assets are copied from src/brands to dist/brands. The Evans Jep wordmark uses outlined paths for consistent rendering.
