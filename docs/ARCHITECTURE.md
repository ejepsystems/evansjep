# Current Evans Jep architecture

Authority: user implementation directive and attached Evans-Jep-Website-Copy-Deck.md. The original deck and private review record stay in editorial/, excluded from generated output and public GitHub pushes.

Primary navigation: About disclosure, Work, Writing, Now, Contact. Home via wordmark. About pages: /about, /about/purpose, /about/approach. Work retains /ventures; Biography & Press retains /media and is linked only from the footer.

Ten generated HTML files including 404. Writing has the supplied empty state. No draft article paths are generated. No invented dates, roles, stages or project detail pages. No downloadable press portraits until permissions/credits are confirmed. User-supplied email, WhatsApp, TikTok and X links are public.

Design: restrained serif editorial text, native system navigation/metadata, 28px mobile titles, 23px section headings, 15.5px body; modest desktop scaling. Default light theme, remembered appearance selection. My Story retains the full original monochrome image; black copy sits below it on mobile and in its right white canvas at >=800px. Purpose page uses the supplied book portrait. How I Build has no hero image or decorative dashboard.

All private editorial information remains out of dist/. Only assets used by the site are copied. No product-level functionality or form was added.

Release: private review only. No merge or production promotion without explicit approval.


## Original writing collection — 21 October 2026
`src/articles.mjs` stores nine original editorials separately from layout, with explicit publication dates, summaries, topic labels, sections and source links. These dates record this publication, never the build clock. The generator produces a chronological index and nine /writing/:slug pages with a narrow reading column. Writing navigation remains current on article routes. The homepage contains no article previews.

The legacy editorial archive remains private and ungenerated. Tests whitelist only the nine authorised article routes and reject accidental public editorial files. Total output is now 19 HTML pages including 404.
