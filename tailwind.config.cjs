/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    keyframes:  {
      fadeOut: {
        '0%': {
          opacity: 0
        },
        "25%": {
          opacity: 0.25
        },
        "50%": {
          opacity: 0.5
        },
        "75%": {
          opacity: 0.75
        },
        "100%": {
          opacity: 1
        },
      }
    },
    animation: {
      fadeOut: 'fadeOut 2s ease-in-out'
    }
    
    },
  },
  plugins: [],
}
