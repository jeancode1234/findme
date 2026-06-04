module.exports = {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
