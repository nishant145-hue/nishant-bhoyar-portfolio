# Phase 15 — Advanced SEO & Social Sharing

## Implemented
- Added a post-build static HTML generation step for the three project case-study routes.
- Project routes now receive unique title, meta description, canonical URL, Open Graph metadata and Twitter large-image card metadata in their initial HTML.
- Added project-specific `CreativeWork` JSON-LD structured data using only project details described in the portfolio.
- Added branded 1200 × 630 PNG Open Graph images for the homepage and each project.
- Updated homepage canonical URL, Open Graph image and Twitter card metadata.
- Updated the Person JSON-LD homepage URL to the deployed portfolio URL.
- Added the deployed sitemap URL to `robots.txt` and included the homepage plus all three project routes in `sitemap.xml`.
- Kept the client-side project metadata update as a fallback for browser navigation.

## Build
The production build now runs:
```bash
npm run build
```
which executes TypeScript compilation, Vite build and `scripts/prerender-seo.mjs`.

The prerender script writes:
- `dist/projects/ai-root-cause-investigator/index.html`
- `dist/projects/pdf-chat-rag/index.html`
- `dist/projects/cybershield-url-scanner/index.html`

## Deployment
Push the updated project to the connected GitHub `main` branch. Vercel should run the updated build automatically.

## Verify after deployment
- Open each project route directly and refresh.
- View page source (not only DevTools Elements) and confirm unique `<title>`, description, canonical, OG image and JSON-LD are present.
- Test share previews with the LinkedIn Post Inspector and Facebook Sharing Debugger.
- Re-submit the sitemap only if Search Console reports a sitemap issue; otherwise Google can re-fetch it.

## Notes
- Search engines decide whether and when to index pages; metadata and sitemap submission do not guarantee rankings or indexing.
- Social platforms cache previews. Use their inspection/debug tools to refresh a cached preview after deployment.
- The deployed domain is currently `https://nishant-bhoyar-portfolio.vercel.app`. Update the site URL in the build script, sitemap, robots.txt and metadata if the production domain changes.
