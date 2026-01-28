# I.COPE.BEST — Website Repository (icopebest-site)

Public academic website for the I.COPE.BEST research project.

This repository contains only the public-facing website.
Experimental code, data, and internal documentation live in separate repositories.

---

## Project Identity (DO NOT MODIFY)

**Project:** I.COPE.BEST  
**PI:** Inga Jonaitytė, Ph.D.  
**Host:** Ca’ Foscari University of Venice – Venice School of Management  
**Funders:** European Union – NextGenerationEU; Italian Ministry for Universities and Research (MUR)  
**Programme:** Young Researchers – Seal of Excellence  
**Project code:** SOE_0000193  
**CUP:** H73C22001440001  

**Public scope:** Trust, inclusion, and legitimacy in digital / automated financial advice (post-COVID).

---

## Tech Stack

- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- Domain: https://www.icopebest.eu (Cloudflare DNS → Vercel)

---

## Repository Structure

app/                Next.js App Router pages  
components/         Shared UI components (DO NOT duplicate styles)  
lib/                Centralized content and configuration  
public/  
├─ logos/            Institutional and funder logos  
└─ documents/        Public PDFs (factsheets, reports, slides, events, reports)

---

## Routes

/            → app/page.tsx  
/project     → app/project/page.tsx  
/research    → app/research/page.tsx  
/outputs     → app/outputs/page.tsx  
/resources   → app/resources/page.tsx  
/events      → app/events/page.tsx  
/contact     → app/contact/page.tsx  

---

## Design & Content Rules (CRITICAL)

### Funding and institutional language
- Funding acknowledgment appears ONLY in the footer
- Do not duplicate funding text across pages
- Logos distinguish Host (Ca’ Foscari / VSM) from Funders (EU / MUR)

### Buttons
- Quiet, neutral pill buttons only
- No black or high-salience CTA buttons
- Do not introduce new button variants without updating shared components

### Pages
- Use shared components (PageHeader, Card, etc.)
- One semantic H1 per page
- No internal administrative or ethics documents on public pages

### Tone
- Academic / institutional
- No marketing language
- No overclaiming of results

---

## Public Documents

All public PDFs must live under:

public/documents/

Subfolders include:
- factsheet/
- reports/
- slides/
- events/
- deliverables/

Do not upload drafts, internal annexes, or sensitive material.

---

## Development Workflow

Install dependencies:
npm install

Run locally:
npm run dev

Build:
npm run build

Deployment:
- Push to main
- Vercel deploys automatically

---

## Git Hygiene

- Keep commits small and scoped
- Working tree should be clean before deploy
- No .next/ or local artifacts committed

---

## Style Governance

This repository is governed by a frozen design system.

All visual and structural rules are documented in:

STYLE_LOCK.md

Future maintainers must treat STYLE_LOCK.md as authoritative.
Do not introduce new typography, spacing, button variants, or funding
placements without explicit approval from the PI.


## Single Source of Truth

- Folder structure and content rules are defined in this README only.
- Do not duplicate architectural explanations elsewhere.
- When in doubt, update this README.
