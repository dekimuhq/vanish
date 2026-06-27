import '@testing-library/jest-dom/vitest'

// jsdom has no matchMedia; some libs probe it. Guarded so this setup file is
// safe to run under the `node` test environment too (no `window` there).
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList
}
