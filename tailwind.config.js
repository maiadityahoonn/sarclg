/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0F172A', // Navy Blue
            light: '#1E293B',
            dark: '#0B0F19',
          },
          gold: {
            DEFAULT: '#D97706', // Gold
            light: '#FBBF24',
            dark: '#B45309',
          },
          purple: {
            DEFAULT: '#6D28D9', // Purple
            light: '#8B5CF6',
            dark: '#4C1D95',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.85' },
        }
      }
    },
  },
  plugins: [],
}
