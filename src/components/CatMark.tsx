// The Vanish cat — near-black head with a teal rim and vanishing-slit pupils.
// Single source for the brand mark (header logo + onboarding hero). Mirrors public/favicon.svg.
export function CatMark({ size = 34, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="14" fill="#0f1216" />
      <g stroke="#4fd1c5" strokeWidth="1.1" strokeLinecap="round" opacity="0.67">
        <line x1="21" y1="40" x2="8" y2="37" />
        <line x1="21" y1="43" x2="7" y2="45" />
        <line x1="43" y1="40" x2="56" y2="37" />
        <line x1="43" y1="43" x2="57" y2="45" />
      </g>
      <g fill="#06080b" stroke="#4fd1c5" strokeWidth="2.3" strokeLinejoin="round">
        <polygon points="16,10 29.5,24 19,28" />
        <polygon points="48,10 34.5,24 45,28" />
        <ellipse cx="32" cy="39" rx="18" ry="15.5" />
      </g>
      <ellipse cx="25.5" cy="38" rx="3" ry="4.3" fill="#5eead4" />
      <ellipse cx="38.5" cy="38" rx="3" ry="4.3" fill="#5eead4" />
      <line x1="25.5" y1="34.4" x2="25.5" y2="41.6" stroke="#06080b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38.5" y1="34.4" x2="38.5" y2="41.6" stroke="#06080b" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="32,44.5 30.4,42.6 33.6,42.6" fill="#5eead4" />
    </svg>
  )
}
