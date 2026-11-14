# Nishant Bhoyar — AI Engineer Portfolio

A responsive React + TypeScript portfolio designed for AI engineering job applications and freelance client acquisition.

## Phase 1 — Foundation & architecture

- React 18 + TypeScript + Vite foundation.
- Lucide React icon library.
- Organized folders for components, sections, pages, hooks, services, data, types, utilities and styles.
- Shared global stylesheet separated into `src/styles/globals.css`.
- Starter reusable Button component and shared site metadata/types.
- `.gitignore` and safe frontend environment-variable example.

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Verify production build

```bash
npm run build
npm run preview
```

## Project structure

```text
public/
  images/
src/
  assets/
  components/
    layout/
    ui/
  data/
  hooks/
  pages/
  sections/
  services/
  styles/
  types/
  utils/
  App.tsx
  main.tsx
```

## Before publishing

Update the email and LinkedIn placeholders in `src/App.tsx` and `src/data/site.ts`. Verify all project descriptions and repository URLs, and only claim features that are implemented and can be demonstrated. Do not put private API keys in frontend environment variables.

## Roadmap

This repository currently contains the existing homepage plus Phase 1 foundation scaffolding. Navigation/design-system refinement, section modularization, case studies, forms, backend integration, SEO, testing and deployment are subsequent phases.

## Phase 5 — Services
The Services section now presents six detailed offerings with deliverables, example use cases, technology tags and project inquiry email links. See `PHASE-5.md` for details. Replace the placeholder email in `src/App.tsx` before publishing.


## Phase 6 — Featured Projects

The Projects section is now a dedicated responsive component with visual project panels, capability summaries, technology tags, and links to the three GitHub repositories. See `PHASE-6.md` for the phase checklist.


## Phase 7 — Project case studies

The portfolio now includes individual project pages at `/projects/ai-root-cause-investigator`, `/projects/pdf-chat-rag`, and `/projects/cybershield-url-scanner`. CyberShield is intentionally presented as a private-repository project. See `PHASE-7.md` for details and accuracy notes.


## Phase 10 — Resume integration & professional profiles
A downloadable resume is available from the hero and navigation. Email, GitHub and LinkedIn links are connected. See `PHASE-10.md` for the checklist and publishing steps.

## Phase 11 — Contact & Lead Generation
The contact inquiry flow is included. It opens Gmail with the inquiry details prefilled; the visitor must press Send in Gmail. It does not store submissions or send email in the background.

## Phase 12 — SEO, Performance & Production Deployment
SEO metadata, social sharing metadata, structured person data, favicon, web manifest, crawler starter file, SPA deployment configuration and GitHub Actions build workflow are included. Read `PHASE-12.md` and replace the deployment URL placeholder after deploying to a real domain.
