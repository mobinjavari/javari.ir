import { blue } from './src/constants/themes/blue'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gh-light': blue.light,
        'gh-dark': blue.dark
      },
      borderRadius: {
        DEFAULT: '0.75rem', // 12px
        'lg': '1rem', // 16px
        'xl': '1.25rem' // 20px
      }
    }
  },
  plugins: []
}
