module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        app: "#15233C",
        card: "#F5F6FA",
        "green-blue": "#007D8C",
        pink: "#E54B6A",
        "dark-grey": "#2e2e2e",
        shadow: "rgba(0, 0, 0, 0.2)",
        primary: "#000000",
        secondary: "#fffafa",
        third: "#a5a3a3",
        danger: "#c80000",
        white: "#fff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
