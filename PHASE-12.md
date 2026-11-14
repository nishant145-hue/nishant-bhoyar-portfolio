# Phase 12 — SEO, Performance & Production Deployment

## Included
- Search-engine title, description, author and indexing directives.
- Open Graph and Twitter sharing metadata.
- Person structured data (JSON-LD) with GitHub and LinkedIn profiles.
- SVG favicon and web app manifest.
- `robots.txt` starter file.
- Vercel and Netlify SPA fallback rules so direct project URLs work after deployment.
- Basic security and static-asset caching headers.
- GitHub Actions workflow that runs the production build on pushes and pull requests.

## Before publishing — required
1. Deploy the site and choose the final public URL/custom domain.
2. Replace `REPLACE_WITH_DEPLOYED_PORTFOLIO_URL` in `index.html` with that exact URL.
3. Replace the sitemap comment in `public/robots.txt` with the real sitemap URL.
4. Create `public/sitemap.xml` using the final domain. Include `/` and the three project routes:
   - `/projects/ai-root-cause-investigator`
   - `/projects/pdf-chat-rag`
   - `/projects/cybershield-url-scanner`
5. Verify every project detail, resume download, email/Gmail inquiry flow, LinkedIn and GitHub link on the live domain.
6. Add the domain to Google Search Console, verify ownership, submit the sitemap and request indexing.

## Deploy with Vercel
1. Push this project to a GitHub repository.
2. Sign in to Vercel and import that repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy, then add your custom domain in Project Settings → Domains.
5. Keep `vercel.json`; it provides SPA rewrites for direct project-page visits.

## Deploy with Netlify
1. Push this project to GitHub and import it in Netlify.
2. Build command: `npm run build`; publish directory: `dist`.
3. Deploy and configure the custom domain under Domain management.
4. Keep `netlify.toml`; it configures SPA fallback and headers.

## Local verification
```bash
npm install
npm run build
npm run preview
```

The actual domain connection, DNS changes, Search Console verification and indexing must be completed by the site owner after choosing a domain. No public URL is assumed or fabricated in this project.

## Performance checklist after deployment
- Run Lighthouse in Chrome for mobile and desktop.
- Check image dimensions and compress any future portfolio images to WebP/AVIF.
- Confirm no console errors and all direct project URLs load after refresh.
- Test on a real mobile connection as well as Wi-Fi.
