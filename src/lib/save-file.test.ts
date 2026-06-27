import { describe, it, expect, vi, afterEach } from 'vitest'
import { saveBlob } from './save-file'

describe('saveBlob', () => {
  afterEach(() => {
    // Clean up any picker stub so it never leaks to other tests.
    delete (window as unknown as Record<string, unknown>).showSaveFilePicker
    // Remove the URL stubs we assigned (jsdom shipped no real ones).
    delete (URL as unknown as Record<string, unknown>).createObjectURL
    delete (URL as unknown as Record<string, unknown>).revokeObjectURL
    vi.restoreAllMocks()
  })

  it('falls back to anchor-download and returns true when the picker is unsupported', async () => {
    expect('showSaveFilePicker' in window).toBe(false)

    // jsdom defines neither createObjectURL nor revokeObjectURL — stub both so the
    // anchor-download path doesn't blow up and the test stays deterministic.
    const createObjectURL = vi.fn().mockReturnValue('blob:mock')
    const revokeObjectURL = vi.fn()
    URL.createObjectURL = createObjectURL
    URL.revokeObjectURL = revokeObjectURL
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => {})

    const result = await saveBlob(new Blob(['x']), 'a.vanish')

    expect(result).toBe(true)
    expect(createObjectURL).toHaveBeenCalledTimes(1)
    expect(click).toHaveBeenCalledTimes(1)
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock')
  })

  it('returns false when the user cancels the native picker', async () => {
    ;(window as unknown as Record<string, unknown>).showSaveFilePicker = vi
      .fn()
      .mockRejectedValue(new DOMException('cancel', 'AbortError'))

    const result = await saveBlob(new Blob(['x']), 'a.vanish')

    expect(result).toBe(false)
  })
})
