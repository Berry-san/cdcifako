/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans'],
        actor: ['actor', 'monospace'],
      },
      colors: {
        'light-green': '#CEC610',
        'dark-green': '#038D4B',
        'dark-blue': '#2E2E3A',
      },
      backgroundImage: {
        'hero-image': "url('/images/background1.png')",
      },
    },
  },
  plugins: [],
}
