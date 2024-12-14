/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // Background
        'background-default':'#F5F4F0',

        // Border
        'border-primary':'#D9D9D9',

        // Text
        'text-primary': '#1B1B1B',
        'text-secondary': '#333333',
        'text-tertiary': '#696969',
        'text-headline': '#E1624F',

        // Accent
        'accent-blue': '#0C51A7',
        'accent-orange': '#E95E10',
        'accent-pink': '#E5245E',
        'accent-purple': '#591B98',

      },

      fontFamily:{
        sans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

