import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'earth': '#8B4513',
        'field': '#228B22',
        'wheat': '#F5DEB3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-green': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },
      boxShadow: {
        'green': '0 4px 14px 0 rgba(34, 139, 34, 0.15)',
        'green-lg': '0 10px 25px -3px rgba(34, 139, 34, 0.2), 0 4px 6px -2px rgba(34, 139, 34, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
