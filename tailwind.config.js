/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080a0c',
          900: '#0b0d10',
          850: '#0f1216',
          800: '#13171c',
          700: '#1b212a',
          600: '#252d38',
        },
        // Accent: a cold "ghost" cyan-mint — calm, clinical, privacy-coded.
        ghost: {
          DEFAULT: '#4fd1c5',
          bright: '#5eead4',
          dim: '#2f9c93',
        },
        signal: {
          danger: '#f87171',
          warn: '#fbbf24',
          ok: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,209,197,0.15), 0 8px 30px -12px rgba(79,209,197,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ring-fill': {
          '0%': { strokeDashoffset: 'var(--ring-circ)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
