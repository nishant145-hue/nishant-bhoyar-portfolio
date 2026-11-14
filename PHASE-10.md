# Phase 10 — Resume Integration & Professional Profiles

## Delivered
- Added the current resume PDF at `public/Nishant-Bhoyar-Resume.pdf`.
- Added a direct **Download resume** action in the hero section.
- Added a Resume download action in the desktop/mobile navigation.
- Connected the verified email address, GitHub profile and LinkedIn profile.
- Added LinkedIn beside GitHub in the hero social links.
- Updated central site metadata in `src/data/site.ts`.

## Resume URL
The resume is served from `/Nishant-Bhoyar-Resume.pdf`. Vite serves files in `public/` from the site root, so the download works in development and after deployment.

## Before publishing
1. Review the PDF for accuracy, especially experience dates, project claims and listed tools.
2. Confirm that the phone number and email are still the preferred public contact details.
3. Deploy the site, then test the resume download and all profile links on desktop and mobile.
4. Replace the PDF in `public/` whenever the resume changes.

## Run and verify
```bash
npm install
npm run dev
npm run build
```
