import { ACTIONS } from '../data/catalog'
import type { Action, Region } from './types'

/** Region relevance: an action shows if it targets 'all' or the user's region.
 *  'other' users see only universal ('all') actions plus letters (which they can adapt). */
export function isRelevant(action: Action, region: Region): boolean {
  if (!action.regions || action.regions.includes('all')) return true
  if (region === 'other') return false
  return action.regions.includes(region)
}

export function actionsForRegion(region: Region): Action[] {
  return ACTIONS.filter((a) => isRelevant(a, region))
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

export function panicActions(region: Region): Action[] {
  return actionsForRegion(region)
    .filter((a) => a.panicPriority != null)
    .sort((a, b) => (a.panicPriority! - b.panicPriority!) || byQuickWin(a, b))
}
