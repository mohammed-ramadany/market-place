# Shams Connect

Next.js port of the Shams Connect clickable prototype — a business community marketplace for Shams-licensed companies.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

| Path | Role |
|------|------|
| `src/app/` | Next.js App Router entry (`layout`, `page`, global styles) |
| `src/components/ShamsConnect.tsx` | Main interactive UI (all screens) |
| `src/lib/data.ts` | Sample companies, offers, requests, events |
| `src/lib/useShamsApp.ts` | Client state and derived view model |
| `src/lib/types.ts` | Shared TypeScript types |
| `src/app/prototype.css` | Styles from the original design prototype |

## Screens

Home, Company directory, Company profile, Member offers, Opportunities, Messages, Events, Company dashboard, and Admin console — matching the original prototype interactions (connect, claim offers, RSVP, messaging, moderation, etc.).
