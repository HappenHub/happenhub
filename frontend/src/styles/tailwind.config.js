/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFE6A7',     // Dark Red
        accent: '#BB9457',      // Gold
        secondary: '#432818',   // Deep Brown
        accent2: '#99582A',     // Orange Brown
        bg: '#6F1D1B',          // Light Yellow
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
