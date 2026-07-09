import { describe, it, expect } from 'vitest'
import { canonicalize } from './canonical'

describe('canonicalize', () => {
  it('sorts object keys deterministically regardless of insertion order', () => {
    const a = canonicalize({ b: 1, a: 2, nested: { y: 1, x: 2 } })
    const b = canonicalize({ nested: { x: 2, y: 1 }, a: 2, b: 1 })
    expect(a).toBe(b)
    expect(a).toBe('{"a":2,"b":1,"nested":{"x":2,"y":1}}')
  })
  it('preserves array order and drops undefined-valued keys like JSON', () => {
    expect(canonicalize([3, 1, 2])).toBe('[3,1,2]')
    expect(canonicalize({ a: undefined, b: 1 })).toBe('{"b":1}')
  })
})
