# Evans Jep identity — revised 20 October 2026

## Reference and typography

The Neptlium screenshot is the visual reference for a traditional Times-style serif. Source Serif 4 and Inter have been removed. All text uses `"Times New Roman", Times, serif`, with regular 400 and bold 700. No third-party font request is required. This matches the requested font category; the exact font file in the screenshot has not been verified. Native serif fallback can differ between operating systems.

Mobile: hero 38px (36px at narrow widths), page title 36px, section heading 29px, card title 23px, introduction 19px, body 18px, menu 16px, controls 14–15px, labels 11–13px. Upright bold headings; no oversized italic emphasis.

## Palette

Obsidian #111210; ivory #F2EEE5; monochrome accents. Light mode uses ivory background, forest #182019 text, and black #111210 accent. Preserve remembered appearance choice.

## Navigation

Mobile: 64px sticky header, compact right-aligned menu panel (310px maximum), two columns and three rows, 44px minimum touch targets, appearance control in a slim bottom row. No numbering or large menu captions. Desktop uses horizontal links. Escape, focus cycling, background inert and reduced-motion support remain.

## Homepage

Concise introduction, two actions, three selected venture rows, short perspective statement, two clearly labelled editorial draft links, and contact. Remove the large decorative falcon panel and repeated generic positioning sections. Retain the small falcon wordmark and favicon.

## Release

Production updates authorized. Verify generated links, numbering removal, typography declarations, menu behaviour and deployed routes. Visual real-device review remains necessary; do not claim an exact font-file match from a screenshot alone.

## Current palette authority

Black accents on ivory; ivory accents on obsidian. No brown/champagne highlights. This supersedes earlier palette proposals.

## Approved About and work architecture — 20 October 2026

About now has three destinations: My Story (/about), Purpose & Principles (/about/purpose), How I Build (/about/approach). Personal history, faith/principles, and practice live separately, with shared local navigation. The disclosure is a real button with aria-expanded, hidden submenu, outside/focus dismissal, and Escape handling. Mobile links have 48px touch targets. Main-menu focus cycling excludes hidden links.

The header wordmark is an outlined SVG using Nimbus Roman Bold, a Times-style serif, with adjusted spacing. This freezes the wordmark drawing across devices; body copy retains the native Times stack. Falcon remains a simple single-colour vector. Mobile lockup uses a 128px wordmark plus 23px falcon; desktop 155px wordmark. No shadow, glow or bevel.

Selected work uses branded editorial panels rather than screenshots. Do not label them screenshots: they pair verified site wording with a brand surface. Quincestone logo downloaded from https://www.quincestone.com/quincestone-logo.svg; Emperor Armani logo from https://emperor-armani-web-clesla.vercel.app/brand/emperor-armani-horizontal-dark.svg; Jeclazon live site uses a text wordmark. Jeclazon's Arial fallback is used in the panel rather than inventing a symbol. These logos are retained under src/brands. Quincestone leads on desktop, followed by two features; mobile is single column. Links use verified sites, with a note that Vercel previews may require access. No authentication bypass links are published.

This section supersedes earlier descriptions of the homepage venture rows, two-part About, and text-rendered header wordmark.
