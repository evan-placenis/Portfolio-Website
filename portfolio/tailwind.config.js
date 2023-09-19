/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'rgb-custom': 'rgb(248, 250, 249)',
        'rgb-about-custom': 'rgb(6, 54, 74)', // Replace with your RGB color values
      },
    },
  },
  plugins: [],
}

