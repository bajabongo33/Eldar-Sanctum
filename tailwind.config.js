/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'eldar-dark': '#18181b',
        'eldar-green': '#3b7f5a',
        'eldar-gold': '#e3c770'
      }
    }
  },
  plugins: [],
}
