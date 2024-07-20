/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightPink": "#FFDBDC",
        "pink": "#EAA0A2",
        "navy": "#3A4664",
        "grey": "#AAAAAA"
      },
      fontFamily: {
        title: ['Kaisei Decol', 'serif'],
        body: ['Encode Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}