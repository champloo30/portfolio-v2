/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        light_display: ['var(--font-playfair-display)'],
        light_mono: ['var(--font-space-mono)'],
        dark_display: ['var(--font-nanum-gothic)'],
        dark_mono: ['var(--font-share-tech-mono)'],
      },
      colors: {
        title: '#C58940',
        dark_title: '#6DFFE5',
        primary: '#201402',
        dark_primary: '#A9C0D6',
        secondary: '#E5BA73',
        dark_secondary: '#717C86',
        tertiary: '#FAEAB1',
        dark_tertiary: '#0A2C4B',
        light: '#FAF8F1',
        dark: '#081B2D',
      },
      screens: {
        'lg-tab': '900px',
        'xs': '400px',
      },
    },
  },
  plugins: [],
}
