import { scoreLabel } from '../lib/score'
import { useI18n } from '../i18n/i18n'

interface Props {
  score: number
  size?: number
  label?: boolean
}

/** Animated SVG progress ring — the app's central momentum signal. */
export function ScoreRing({ score, size = 168, label = true }: Props) {
  const { t } = useI18n()
  const stroke = size * 0.08
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - Math.min(100, Math.max(0, score)) / 100)
  const { key, tone } = scoreLabel(score)
  const text = t(`score.${key}`)
  const toneColor =
    tone === 'ok' ? '#34d399' : tone === 'warn' ? '#fbbf24' : '#f87171'

  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1b212a" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={toneColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 700ms cubic-bezier(.22,1,.36,1), stroke 400ms' }}
        />
      </svg>
      {/* role=status announces the score whenever it changes (WCAG 4.1.3); the
          SVG above is decorative and hidden so the value isn't read twice. */}
      <div className="absolute text-center" role="status" aria-live="polite">
        <span className="sr-only">{t('score.ariaLabel', { score })}</span>
        <div className="font-mono text-4xl font-bold text-slate-100" aria-hidden="true">{score}</div>
        {label && <div className="mt-0.5 text-xs uppercase tracking-widest" style={{ color: toneColor }} aria-hidden="true">{text}</div>}
      </div>
    </div>
  )
}
