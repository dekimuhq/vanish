import { useI18n } from '../i18n/i18n'

/** Surfaces a real-world match from an imported `.vscan` report on an action
 *  card. `confidence` >= 0.7 reads as a confirmed hit (matches `scan.ts`'s own
 *  high-confidence bucketing); anything lower is a possible match worth the
 *  user double-checking before acting on it. Uses the same `pill`/signal-token
 *  idiom as `Pills.tsx` rather than raw Tailwind colors. */
export function ExposureBadge({ confidence }: { confidence: number }) {
  const { t } = useI18n()
  const strong = confidence >= 0.7
  return (
    <span
      className={`pill ${strong ? 'bg-signal-danger/15 text-signal-danger' : 'bg-signal-warn/15 text-signal-warn'}`}
      title={t(strong ? 'pills.exposure.confirmedTitle' : 'pills.exposure.possibleTitle')}
    >
      {t(strong ? 'pills.exposure.confirmed' : 'pills.exposure.possible')}
    </span>
  )
}
