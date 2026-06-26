# Vanish — agent instructions

Fully-offline privacy-coach PWA. Helps anyone remove their online persona across four tiers (Tidy Up → Reduce → Lock Down → Ghost), generates GDPR/CCPA letters. No accounts, no backend, no tracking.

## Non-negotiables
- **Zero network at runtime.** Never add `fetch`/XHR/WebSocket/analytics/web-fonts. The `connect-src 'self'` CSP in `index.html` must stay. External privacy sites are user-clicked top-level links only.
- **No backend, no accounts, no payments.** State lives in `localStorage` via `src/store/store.tsx`. Cross-device transfer is export/import JSON only.
- **Minimal dependencies.** Fewer deps = better audit/trust story for a privacy tool. Justify any new runtime dep.

## Stack
Vite + React 18 + TS + Tailwind + vite-plugin-pwa + Vitest. HashRouter (works from any sub-path / `file://`).

## Where things live
- `src/data/catalog.ts` — the 86-action catalog (the product). URLs verified ~2026-06; sourced from `docs/research/`.
- `src/data/countries.ts` — EU-27 + UK/US/other table with each country's GDPR supervisory authority. `Profile.country` (optional) drives the authority named in letters; `region` (derived via `regionForCountry`) stays the action-filtering backbone. Next slice: per-action `countries` targeting for country-specific brokers/registers.
- `src/lib/{types,score,letters,select}.ts` — model + logic. `src/views/*` — screens. `src/components/*` — shared UI.

## Working rules
- Catalog edits: run `npm run validate:data` then `npm test`.
- Always `npm run lint && npm test && npm run build` before declaring done.
- Opt-out URLs rot — keep the dead-link fallback; never claim permanent invisibility or give legal advice.
- Icons are generated: `npm run gen:icons` (dependency-free PNG encoder).
