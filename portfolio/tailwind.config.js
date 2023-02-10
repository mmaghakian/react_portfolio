/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},//@media (max-width: 640px) { ... }
      'md': {'max': '860px'},//@media (max-width: 640px) { ... }
      'lg': {'max': '980px'},//@media (max-width: 640px) { ... }
      'xl': {'max': '1200px'},//@media (max-width: 640px) { ... }
      '2xl': {'max': '1440px'},//@media (max-width: 640px) { ... }
    },

    extend: {},
  },
  plugins: [],
}