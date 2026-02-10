/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This covers everything inside src
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ec1325",
        "background-light": "#f8f6f6",
        "background-dark": "#221012",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};