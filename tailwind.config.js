/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Haas Unica"', 'sans-serif'],
        serif: ['"Adobe Caslon Pro"', 'serif'],
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
