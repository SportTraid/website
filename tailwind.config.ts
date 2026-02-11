import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 1.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 3.5vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 4vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 5vw, 3rem)',
        'fluid-5xl': 'clamp(2.5rem, 5.5vw, 3.5rem)',
        'fluid-6xl': 'clamp(3rem, 6vw, 4rem)',
      },
    },
  },
  plugins: [],
}
export default config
