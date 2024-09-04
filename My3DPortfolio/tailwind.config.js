module.exports = {
  content: ["./dist/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['MyCustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
