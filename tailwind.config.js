/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0C10',
          50: '#1E232F',
          100: '#181C26',
          200: '#151922',
          300: '#12161E',
          400: '#0F1218',
          500: '#0A0C10',
        },
        surface: {
          DEFAULT: '#12161E',
          hover: '#181E2A',
          active: '#1F2636',
          border: '#222936',
          muted: '#8A99AD'
        },
        pleisto: {
          terracotta: '#D97742',
          ochre: '#E5A952',
          light: '#F8D7A8',
          dark: '#8C441D'
        },
        bioneuro: {
          emerald: '#10B981',
          mint: '#34D399',
          glow: '#059669',
          dark: '#064E3B'
        },
        modern: {
          cyan: '#38BDF8',
          indigo: '#818CF8',
          electric: '#60A5FA',
          deep: '#1E1B4B'
        },
        badge: {
          level1: '#10B981', // Szmaragdowy - Konsensus Empiryczny
          level2: '#F59E0B', // Bursztynowy - Wiodąca Hipoteza
          level3: '#F43F5E', // Koralowy - Koncepcja Sporna
          level4: '#8B5CF6', // Fioletowy - Horyzont Prognostyczny
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'glow-terracotta': '0 0 25px -5px rgba(217, 119, 66, 0.25)',
      }
    },
  },
  plugins: [],
}
