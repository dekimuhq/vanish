# Vanish

**Disappear from the internet, one tier at a time.**

A fully-offline privacy coach that guides anyone through removing their online persona — organised into escalating tiers, with a built-in GDPR/CCPA deletion-letter generator. No accounts, no servers, no tracking. Install it on Android or self-host the static files anywhere.

<p align="center"><em>Tidy Up → Reduce → Lock Down → Ghost</em></p>

---

## Why Vanish

The privacy-removal market is split between **link directories** that teach you nothing and **cloud services** that make you hand over your full PII and pay forever. Vanish is the guided middle:

- 🪜 **A tiered ladder, not a link dump** — 72 concrete actions across four threat-model tiers, from "the 20 minutes everyone should spend" to "go fully ghost." Climb at your own pace.
- 🧭 **It coaches** — every action has a plain-language why, how-to steps, effort/impact signals, and a direct link to the real opt-out page.
- ✍️ **It forges letters** — GDPR Art.17 erasure, GDPR Art.15 access, and CCPA/CPRA deletion requests, generated on your device and sent by you.
- 📈 **It tracks momentum** — a weighted privacy score, per-tier progress, broker re-check reminders, streaks, and a printable plan.
- ⬡ **It never phones home** — a `connect-src 'self'` Content-Security-Policy blocks every third-party request. Verify it yourself in your browser's Network tab: nothing.

## Privacy guarantees

| Guarantee | How |
|---|---|
| Nothing leaves your device | All state in `localStorage`; the CSP blocks third-party network requests. |
| No account, no backend | There is no server. Transfer between devices via an export/import JSON file. |
| No tracking | No analytics, no cookies, no telemetry. MIT, open-source, auditable. |
| Works offline | PWA precaches the whole app; install it and use it on a plane. |

The only outbound "network" calls are (1) the service worker caching the app from its own origin, and (2) links to real opt-out pages, which **you** click.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server with HMR. |
| `npm run build` | Type-check + production build to `dist/` (static + PWA service worker). |
| `npm run preview` | Serve the production build locally. |
| `npm test` | Run the Vitest suite. |
| `npm run lint` | `tsc --noEmit` type check. |
| `npm run validate:data` | Verify the action catalog (unique ids, valid https URLs, letter refs). |

## Project layout

```
src/
  data/catalog.ts      ← the 72-action catalog (the heart of the app)
  lib/
    types.ts           ← domain model (Action, Tier, Profile, …)
    score.ts           ← privacy score, re-checks, momentum
    letters.ts         ← GDPR/CCPA letter templates + mailto
    select.ts          ← region filtering, quick-win sort, panic ordering
  store/store.tsx      ← localStorage-backed React store (+ defensive sanitize)
  components/          ← ActionCard, ScoreRing, Pills, Layout
  views/               ← Onboarding, Dashboard, Plan, Brokers, Letters, Panic, Report, Settings
docs/
  specs/               ← product spec
  research/            ← competitor + content research (URL-verified catalog source)
scripts/
  gen-icons.mjs        ← dependency-free PNG icon generator
  validate-data.ts     ← CI-friendly catalog validator
```

## Deploy / self-host

Vanish builds to a folder of static files (`dist/`) with **no runtime dependencies**. Host it anywhere:

```bash
npm run build
```

**Any static host** — copy `dist/` to Netlify, Vercel, Cloudflare Pages, GitHub Pages, an S3 bucket, or your own box:

```bash
# nginx / caddy / apache: point the web root at dist/
# or serve it with anything:
npx serve dist
python3 -m http.server -d dist 8080
```

The app uses **relative asset paths and a HashRouter**, so it works from a sub-path (`example.com/vanish/`) or even straight off the filesystem with no rewrites. No SPA fallback config required.

**Install on Android (or desktop):** open the hosted URL in Chrome → menu → *Install app* / *Add to Home screen*. It then runs full-screen and works offline. (Installability requires HTTPS — any of the hosts above provide it.)

**Recommended hardening for your host:** Vanish ships an in-page CSP via `<meta>`. For defence-in-depth, also send these as HTTP response headers from your server:

```
Content-Security-Policy: default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
```

(`frame-ancestors` only works as a header, not in `<meta>` — that's why it lives here.)

## Updating the catalog

Opt-out URLs rot. To refresh:

1. Edit `src/data/catalog.ts`.
2. `npm run validate:data` (checks ids, https URLs, letter refs).
3. `npm test && npm run build`.
4. Re-deploy. PWA clients auto-update on next load.

## Troubleshooting

**`ENOSPC: System limit for number of file watchers reached` on `npm run dev`** — your OS ran out of inotify watchers (common on Linux when running inside a large monorepo or with many editors open). Two fixes:

```bash
# Quick, no sudo — poll instead of using native watchers:
npm run dev:poll

# Permanent — raise the kernel limits:
echo -e "fs.inotify.max_user_watches=524288\nfs.inotify.max_user_instances=512" | sudo tee /etc/sysctl.d/60-inotify.conf
sudo sysctl -p /etc/sysctl.d/60-inotify.conf
```

`npm run preview` and `npm run build` never watch files, so they're unaffected.

## Disclaimer

The letter templates are provided for convenience and are **not legal advice**. Opt-out links change and removed data can reappear — treat removal as a recurring habit, not a one-time fix. Verify the right recipient and your local rights before acting.

## License

MIT — see [LICENSE](LICENSE).
