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
      },
      colors: {
        navy: '#041E42',
        paper: '#F5F5F0',
        accent: '#D50032',
      }
    },
  },
  plugins: [],
}