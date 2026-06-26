import { ACTIONS } from '../data/catalog'
import type { Action, Country, Region } from './types'

/** Relevance:
 *  - An action scoped to specific `countries` shows only to a user in one of them
 *    (and is hidden when the user's country is unknown — they can set it).
 *  - Otherwise it falls back to coarse region: shows if it targets 'all' or the
 *    user's region. 'other' users see only universal ('all') actions plus letters. */
export function isRelevant(action: Action, region: Region, country?: Country): boolean {
  if (action.countries && action.countries.length) {
    return country ? action.countries.includes(country) : false
  }
  if (!action.regions || action.regions.includes('all')) return true
  if (region === 'other') return false
  return action.regions.includes(region)
}

export function actionsForRegion(region: Region, country?: Country): Action[] {
  return ACTIONS.filter((a) => isRelevant(a, region, country))
}

const EFFORT_ORDER = { low: 0, med: 1, high: 2 } as const
const IMPACT_ORDER = { high: 0, med: 1, low: 2 } as const

/** Quick wins first: high impact, low effort float to the top. */
export function byQuickWin(a: Action, b: Action): number {
  return (
    IMPACT_ORDER[a.impact] - IMPACT_ORDER[b.impact] ||
    EFFORT_ORDER[a.effort] - EFFORT_ORDER[b.effort] ||
    a.title.localeCompare(b.title)
  )
}

export function panicActions(region: Region, country?: Country): Action[] {
  return actionsForRegion(region, country)
    .filter((a) => a.panicPriority != null)
    .sort((a, b) => (a.panicPriority! - b.panicPriority!) || byQuickWin(a, b))
}
