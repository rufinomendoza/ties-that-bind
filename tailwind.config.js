/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tailwind references the CSS variables
        sans: ['var(--font-sans)', 'sans-serif'], 
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        navy: '#041E42',
        paper: '#F5F5F0',
        accent: '#D50032',
      }
    },
  },
  plugins: [
    // THE WIDOW ELIMINATOR PLUGIN
    // Explicitly defining the utilities to ensure 'balance' and 'pretty' are available
    plugin(function({ addUtilities }) {
      addUtilities({
        // For Headlines: Balances lines to be roughly equal width
        '.text-balance': {
          'text-wrap': 'balance',
        },
        // For Body Copy: Prevents single words (orphans) on the last line
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
      })
    })
  ],
}