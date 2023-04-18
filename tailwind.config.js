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
        redCol: "#fc0516",
        sass: " #cc6699",
        js: "#F0DB4F",
        html: "#e34c26",
        css: "#264de4",
        ts: "#007acc",
        react: "#61DBFB",
        git: "#F1502F"
      },
      fontFamily: {
        bodyFont: ["Anuphan", "sans-serif"]
      }
    },
  },
  plugins: [],
};
