module.exports = {
  // uses purge css plugin to strip out any unused CSS so
  // as to prevent it from being shipped along with final build
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#8953b7",
        background: "#f9ede2",
      },
    },
  },
};
