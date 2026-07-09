# Vanish — Handoff

<!-- LIVE:BEGIN -->
- [ ] id:oss-flip | Flip license MIT→OSS at launch | owner:claude | gate:founder go-live | note:license is proprietary-INTERIM ON PURPOSE; OSS is the END state — never re-add MIT mid-flight. See [[project_vanish_privacy_app]].
- [ ] id:country-coverage | EEA DPA layer extended (IS/NO shipped 2026-06-29); national opt-out *actions* still cover ES IT FR DE BE PT SE AT DK FI HR EE + GB IE | owner:claude | gate:none | note:IS/NO now carry their DPAs (Persónuvernd/Datatilsynet) + EEA picker group; region 'eu' for GDPR action relevance. LV/LT + remaining EU members = honest omission (no official self-serve register — verify live URLs before adding any).
<!-- LIVE:END -->

## Done — 2026-07-10 (vanish-recon made PUBLIC)

`dekimuhq/vanish-recon` flipped private→public (founder ask). Pre-flip sweep clean (no secrets in history, fixtures use example.com, README already carries the self-recon `attest` guardrail + no forbidden claims). Prep commit: proprietary LICENSE (mirrors vanish's interim posture), `prepare` script so `npx github:dekimuhq/vanish-recon` builds `dist` on install, README install path + vanish.cat links. Verified end-to-end: fresh `npx` from the public repo scanned and wrote a `.vscan`. Still npm-unpublished on purpose (npm first-publish = SL-gated). ~~⚠️ Follow-up: 29 false "exposures" for a nonexistent username~~ FIXED same day (recon `e8b95d6`): runtime control-probe — a claimed match is re-probed with a random nonexistent username; if that "matches" too the platform is culled (memoized, hits-only cost, fails open on fetch errors, CLI names the culled list). Live: nonexistent user 29→0 false exposures; octocat keeps 75 true positives. Runtime culling > static registry pruning (liar set varies run-to-run — RoyalCams flaked in only on run 2). Known limit (fails open, commented in code): liars capping usernames <14 chars escape the cull.

## Done — 2026-07-09 (scan-import: merged to main)

**id:scan-import CLOSED** (merge on main, `closes-live:scan-import`). Vanish imports signed `.vscan` exposure reports from vanish-recon: `lib/canonical.ts` (byte-parity serializer), `lib/scan.ts` (parse + WebCrypto ed25519 verify + catalog map, MAX_EXPOSURES 500), SCHEMA v2→3 `scan` layer through the `sanitize()` chokepoint (`sanitizeScan`, `importScan` reducer with fingerprint-gated resolved diff), Settings import control, Plan exposure badges + exposure-first stable sort + Scan Results (incl. exposures mapped to actions absent from the current plan). Built subagent-driven (per-task verification + adversarial skeptic + final review → one hardening commit `80ec875`: confidence clamp, evidenceUrl http(s) allowlist, per-finding shape validation, prototype-safe map lookup, re-sanitize on store). 124 tests · tsc · build green; cross-repo e2e (recon-signed fixture verifies `true` in-browser, tampered → `verified:false` still imports); browser drive-through incl. "Gone since last scan" proof-of-forgetting + reload persistence. Recon side: `.vscan` default extension + canonicalize undefined-key parity fix (branch `feat/vscan-rename`).

**Follow-ups (non-blocking):** (1) `verified` proves file integrity only — recon signs with an ephemeral per-report key embedded in the file; key pinning / fingerprint display = recon v2 item. Keep copy honest (never claim tamper-proof — public-claims red line). (2) ~~9 non-EN translations of the scan keys~~ DONE 2026-07-09 (`e9b684a`: all 19 keys × 9 locales; review fixed ca/sv plural+agreement; browser-verified in es incl. unverified-import path; human native-review still folds into the standing pre-launch item). (3) `SOURCE_TO_CATALOG` map is intentionally thin (2 entries); grows as recon adds probes/brokers.

## Done — 2026-06-29 (what-next batch: merged + pushed to main → vanish.cat)

Branch `feat/coverage-letters-duenow` (3 commits, rebased onto main #2, ff-merged `6f3021a`, pushed). 106 tests · tsc · validate:data (32 countries) · build green. Worktree+branch cleaned up. (Parallel uncommitted "Sources" WIP on main was stashed across the merge and restored intact — not mine, left uncommitted.)

- **feat-restore-preview** — decrypted `.vanish`/JSON backup now previews a Now-vs-Backup diff (completed actions, letters, language, profile) and requires confirm before overwriting. Pure `lib/restore.ts` (+ test); Settings modal. Scoped to Settings (the destructive path); Onboarding restore lands on an empty device so no preview needed.
- **feat-localized-letters** — GDPR Art.17/Art.15 + CCPA bodies translated into all 9 non-EN langs (`src/i18n/letters.ts` overlay, EN fallback); `renderLetter` takes the active lang. Picker metadata (name/law/blurb) localized too (`letterMeta` + META overlay) — whole Letter Forge screen is now localized.
- **feat-due-now-queue** — Dashboard "Due now" panel merges broker re-checks + letter response deadlines into one urgency-sorted queue (`lib/score.ts` `dueLetters`/`dueQueue`).
- **country-coverage (IS/NO slice)** — Iceland + Norway added to the country/DPA layer (EEA, GDPR via the EEA Agreement; region `eu`; dedicated EEA picker group + `countryGroup.eea` in all 10 locales). LV/LT left as honest omissions (no fabricated opt-out URLs). Remaining country-coverage stays open for verified national opt-out *actions*.

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
