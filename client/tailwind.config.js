module.exports = {
  // uses purge css plugin to strip out any unused CSS so
  // as to prevent it from being shipped along with final build
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#8953b7",
        background: "#f9ede2",
      },
    },
  },
};
