// Catalog translation overlays. The English catalog (`data/catalog.ts`) stays
// the source of truth for ids, URLs, flags, regions, countries. A locale overlay
// translates only the human-readable fields, keyed by action id. Any missing id
// or field falls back to the English catalog — translations never break render.

export interface ActionText {
  title?: string
  summary?: string
  steps?: string[]
  /** Friendly label for the external-link button (e.g. "Open Google"). */
  urlLabel?: string
  /** Label for the internal-link button (e.g. "Open the Decoy Kit"). */
  internalLabel?: string
}

export type ContentOverlay = Record<string, ActionText>
