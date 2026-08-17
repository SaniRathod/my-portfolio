/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        editorial: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        aurora: {
          bg: '#06080f',
          elevated: '#0c101c',
          card: 'rgba(12, 16, 28, 0.78)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-glow': 'rgba(0, 229, 255, 0.3)',
          cyan: '#00e5ff',
          'cyan-bright': '#70f0ff',
          emerald: '#10b981',
          'emerald-bright': '#34d399',
          indigo: '#6366f1',
          violet: '#a855f7',
          amber: '#f59e0b',
          text: '#f1f5f9',
          muted: '#64748b',
          sub: '#94a3b8',
        },
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'aurora-flow': 'auroraFlow 12s ease infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(30px)' },
          '50%': { opacity: '0.8', filter: 'blur(45px)' },
        },
        auroraFlow: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      }
    },
  },
  plugins: [],
}