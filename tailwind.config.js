/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#060626",
        btn: "#ef3757",
        body: "#d41335",
        light: "#31323b",
        lightBg: "#08143d",
        redCol: "#fc0516"
      },
      fontFamily: {
        bodyFont: ["Anuphan", "sans-serif"]
      }
    },
  },
  plugins: [],
};
