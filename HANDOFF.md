# Vanish — Handoff

<!-- LIVE:BEGIN -->
**Repo:** dekimuhq/vanish (PRIVATE) · `main` at `a562386` synced + **deployed to vanish.cat** (Pages + CI green) · working tree clean. This session shipped: ics-deadlines + auto-escalation (`440bf83`) and the WCAG 2.1 AA launch-gate (`6f2ecb3` + focus-radius fix `a562386`). HANDOFF.md is now git-tracked (was untracked). **Open launch item: one live keyboard + screen-reader pass** (markup is correct/AA, just unverified on a real SR).
**State:** 114-action catalog · 10-language i18n · EU-27 country/DPA layer · proprietary-INTERIM license · vanish.cat via GitHub Pages · cat brand mark on onboarding hero · letter lifecycle tracker + durable encrypted backup + per-action provenance (schema v2) · **Kensho QA PASS 2026-06-27 (commit `c9b378a`, 77 tests) — import boundary hardened + ErrorBoundary added**.

- [x] id:a11y-launch-gate | DONE `2b36fe3` (branch `feat/a11y-launch-gate`) — WCAG 2.1 AA pass. **1 HIGH** fixed (2.4.7 global `:focus-visible` ghost ring in `index.css`). **8 MEDIUM** fixed: 2.4.1 skip link · 1.3.1 nav `aria-label` ×2 · 1.4.3 `slate-500→400` sweep (43 occ) · 4.1.3 ScoreRing live region + sr-only copy/track status (Letters+TrackedLetters) · 2.5.5 done-toggle 24→44px hit area (pseudo, covers Panic via ActionCard) · 3.3.1 restore-error `aria-invalid`/`aria-describedby`. **LOW:** `aria-pressed` on Choice + Settings-tier toggles; `aria-hidden` decorative nav/category emoji. validate/tsc/82 tests/build green. **Residual LOW (deferred, AA-compliant as-is):** dense tertiary inline buttons (link-dead/not-relevant ~28px) pass 2.5.8 AA so left at size; remaining decorative emoji in headings carry context; required-field marking n/a (profile fields optional). **Not yet verified with a live screen reader** — recommend one keyboard+SR pass before public launch.
- [x] id:feat-ics-deadlines | DONE `d1ffe3f` (branch `feat/ics-deadlines-auto-escalation`) — `buildDeadlineICS()` in `lib/tracker.ts`: zero-dep RFC 5545 VCALENDAR, one all-day VEVENT per pending letter + `-P1D` alarm, CRLF + text escaping. "📅 Add deadlines to calendar" button in `TrackedLetters` (shows when ≥1 pending). +tests.
- [x] id:feat-auto-escalation | DONE `d1ffe3f` (same branch) — `escalationLetter()` now cites Art.77 GDPR (CCPA/CPRA for ccpa). Complaint **auto-drafts the moment a letter is overdue** (no Escalate click); added Download complaint + "Lodge at {authority} ↗" link; old "Escalate" button → "Mark as escalated" (records lodged). +tests.
- [ ] id:feat-restore-preview | Show diff/preview before applying a `.vanish` restore | gate: none | est: ~2d | note: reinforces the import boundary hardened in `c9b378a`; build trust for cross-device story. `views/Settings.tsx` + `views/Onboarding.tsx` restore paths.
- [ ] id:feat-localized-letters | Localized GDPR/CCPA letter bodies | gate: none | est: ~3-4d | note: letters currently EN even for a German DPA (BfDI). i18n infra exists; translate the 3 templates in `lib/letters.ts`. Trigger: non-English supervisory authorities.
- [ ] id:feat-due-now-queue | Consolidated "re-check due now" queue on Dashboard | gate: none | est: ~1d | note: brokers re-list every 120d (`recheckEvery`); surface everything due in one place. Pairs with feat-ics-deadlines.
- [ ] id:oss-flip | Flip license MIT→OSS at launch | gate: founder go-live | note: license is proprietary-INTERIM ON PURPOSE; OSS is the END state — never re-add MIT mid-flight. See [[project_vanish_privacy_app]].
- [x] id:pages-https-cert | DONE — verified 2026-06-27: Let's Encrypt cert for vanish.cat provisioned (CN=vanish.cat, Jun 26→Sep 24 2026, auto-renew), `https_enforced:true`, http→https 301→200. PWA service worker has HTTPS. If it ever regresses: repo Settings→Pages → remove + re-add the custom domain to retrigger Let's Encrypt, then tick Enforce HTTPS.
- [ ] id:country-coverage | Country-specific actions now cover ~14 states (ES IT FR DE BE PT SE AT DK FI HR EE + GB IE); rest fall back to region + GDPR-letter w/ named DPA | gate: none | note: `Action.countries` overrides `regions`; hidden when user country unset. People-search slice DONE for DK/FI/EE (81e4940); next public-records candidates if pursued = LV/LT/NO/IS — verify-first, may be honest-omissions.
<!-- LIVE:END -->

## Vanish — QA + a11y — Kensho pass — 2026-06-27 (this session)

**Kensho QA gate: PASS.** Committed `c9b378a`. No CRITICAL/HIGH functional defects. Preflight green (validate:data 114 actions · tsc · build · **77 tests**, +hardening −dead-code). Browser console 0 warnings (was 2). Zero-network/CSP/crypto clean (independent security pass). Full report: `docs/qa/2026-06-27-vanish.md` (docs/ gitignored).

Fixed + verified this session (in `c9b378a`):
- **MEDIUM** corrupt import (`targetTier:9`/bad region/country/concerns) white-screened app → reproduced in-browser, hardened `sanitize()` with field-by-field `sanitizeProfile()`. Regression test added.
- **MEDIUM** added `components/ErrorBoundary.tsx` (reset/reload recovery, no store/i18n deps).
- **MEDIUM** removed dead `DECOY_INTERESTS`/`buildDecoyBio`/`DECOY_RULES` (live copy in i18n) + stale tests.
- **LOW** Decoy `<4` interests · `mailtoHref` literal address (RFC 6068) · dead `tierAccent` · ES/FR `N{tier}`→`T{tier}` · HashRouter v7 future flags.

**Accessibility audit (auditor, VERDICT PASS, launch-gate items → `id:a11y-launch-gate`).** No CRITICAL. **1 HIGH:** invisible focus indicator app-wide (2.4.7) — UA default near-black ring on ink bg; fix global `*:focus-visible{outline:2px solid ghost;outline-offset:2px}` in `src/styles/index.css`. **8 MEDIUM:** `slate-500` text contrast 3.4–4.1:1 fails 1.4.3 (sweep → `slate-400`, pervasive across Settings/Letters/Plan/Dashboard/Report/Decoy); no skip link (2.4.1); two `<nav>` landmarks unlabeled (1.3.1); score change not announced (4.1.3, wrap ScoreRing/progress in `role=status aria-live`); copied/tracked confirmations silent (4.1.3, mirror Settings' `importMsg` pattern); onboarding restore-error not field-associated (3.3.1, add `aria-invalid`/`aria-describedby`); undersized targets — done-toggle 24px, inline buttons 28px (2.5.5, pad to ≥44px hit area, matters for Panic flow). **6 LOW:** dup-nav focus order, missing `aria-pressed` on `Choice`/Settings-tier toggles (ActionCard:43 is the model), decorative emoji announced (`aria-hidden`), required-field marking, transparent toggle hit area. Clean: heading hierarchy, landmarks, reduce-motion (index.css:69-76), `<html lang>` updates per-locale (i18n.tsx:66), CatMark/ScoreRing SVG names, button-vs-link usage, all text inputs label-associated.

**Next session = build features.** 5 queued under `id:feat-*` in LIVE block (ics-deadlines + auto-escalation are highest-leverage, ~1-2d each, no blockers). a11y gate (`id:a11y-launch-gate`) is independent and pre-public-launch. Gates before any edit: `npm run validate:data && npm run lint && npm test && npm run build`. Dev: `npm run dev:poll` (inotify). Catalog URLs verify-first; keep dead-link affordance; zero-network invariant is sacred (no fetch/XHR/WebSocket ever).

## Done — 2026-06-27 (tracker + persistence + provenance)

- **MERGED + DEPLOYED** (merge `0f25424`, pushed to `main` → GitHub Pages deploy to vanish.cat). Branch `feat/tracker-persist-provenance` (18 commits) built subagent-driven (per-task spec+quality reviews + final integration review). 73 tests · validate:data/lint/build green · worktree+branch cleaned up.
  - **Pillar A — letter tracker:** `lib/tracker.ts` (deadline 30d GDPR/45d CCPA as reminder, overdue, escalation complaint naming the user's DPA), store msgs `logLetter`/`updateLetter`/`deleteLetter`, `components/TrackedLetters.tsx`, "Track this as sent" in `views/Letters.tsx`.
  - **Pillar C — durable persistence:** `lib/backup.ts` (WebCrypto AES-GCM-256/PBKDF2 `.vanish` encrypted backup, zero deps), `storage.persist()`, backup/restore in Settings + restore on Onboarding welcome, `components/BackupNudge.tsx`, `lastBackupAt` + `markBackedUp`. Honest core: nothing in-browser survives a manual "clear site data" — durable copy = a file the user owns.
  - **Pillar E — provenance:** `Action.verifiedAt` + `CATALOG_VERIFIED_AT`/`verifiedAtOf` in `data/catalog.ts`, validator enforces valid dates, "✓ Verified {date}" chip on `ActionCard`.
  - **Schema v1→v2** — `sanitize` defaults `letters`/`lastBackupAt`; old state + old backups load clean (tested). All intake paths (localStorage load, JSON import, encrypted restore) funnel through `sanitize`.
  - **Follow-ups (non-blocking):** native i18n of 37 new EN keys (graceful English fallback now — folds into the existing 10-lang native-review pre-launch item); optional File System Access "keep synced to file" (spec out-of-scope). Spec+plan: `docs/{specs,plans}/2026-06-27-letter-tracker-persistence-provenance*` (local; docs/ gitignored).

- **MERGED + DEPLOYED** (merge `63a699f`, pushed `main` → Pages deploy) — closes two of the above follow-ups:
  - **Native translations** of all 36 new keys into es ca de fr it nl pl pt sv (9 parallel translators; 258 keys/locale; placeholder integrity verified == EN baseline; lint/build green). Machine/AI translation — the standing "native review of all 10 langs before public launch" item still applies as a human-review pass, but the UI is no longer English-only.
  - **Non-invasive file-chooser backup** — `lib/save-file.ts` `saveBlob()`: session-scoped File System Access `showSaveFilePicker` (feature-detected, anchor-download fallback), wired into Settings' encrypted export. **Deliberately NO persisted handle / no auto-sync** (a stored handle = a pointer to a location on the user's disk → at odds with the zero-trace posture). 75 tests, no `any`, zero deps. The "keep continuously synced to file" variant remains intentionally unbuilt for that privacy reason.

## Done — 2026-06-27 (continue-handoff session)

- **Welcome cat icon** (c961a7b): extracted the brand cat into `src/components/CatMark.tsx` (dedup of Layout's local `Logo` + mirrors `public/favicon.svg`); 72px CatMark on the onboarding step-0 hero. Layout logo now reuses CatMark.
- **DK/FI/EE people-search opt-outs** (81e4940): closed the `eu-people-search` slice. 111→114 actions. DK CPR name/address protection, FI DVV luovutuskielto (Suomi.fi), EE population-register disclosure restriction (SMIT form). All 3 URLs web-verified live; distinct from the existing do-not-call registers.
- **pages-deploy-verify** retired → split: site is LIVE over HTTP + deploy green + DNS correct (DONE); HTTPS cert not provisioned remains as founder-owed `pages-https-cert`.

## Done — 2026-06-27 session

**Geo + catalog (this session, pushed):**
- catalog 72→102: EU/UK brokers, ad-industry & direct-mail opt-outs (DAA/DMAchoice/YourOnlineChoices), RTBF, DNS/telemetry hardening, court-record suppression.
- country layer: `Profile.country` (EU-27 + UK/US/other) + `src/data/countries.ts` with each country's GDPR supervisory authority; letters name the user's DPA; onboarding/settings country picker.
- per-action `countries` targeting + 12 web-verified national opt-outs (people-search + electoral roll + DM registers ES/IT/FR/DE/BE/PT/SE + AT/DK/FI/HR).
- license: MIT → proprietary (© Dekimu Labs, S.L.); LICENSE + package.json UNLICENSED + README.

**Parallel session (also landed on main):**
- +9 actions → 111 total; Decoy Kit; family code-word (anti voice-clone); adversary mapping in onboarding.
- 10-language i18n (en/ca/es/fr/de/it/pt/nl/pl/sv).
- GitHub Pages deploy workflow + vanish.cat custom domain; black-cat brand icon.
- dropped the now-false "Open-source, MIT-licensed" line from Settings (5d5fc0d) — closed the deferred thread.

**Gates before edits:** `npm run validate:data && npm run lint && npm test && npm run build`. Dev: `npm run dev:poll` (not `dev` — inotify). Catalog URLs are verify-first (never invent); keep the dead-link affordance.
