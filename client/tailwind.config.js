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
  variants: {
    // by default, the disabled variant is
    // not enabled for any core plugins
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [
    ({ theme, addUtilities }) => {
      const themeColors = theme("colors");
      const colorKeys = Object.keys(themeColors);

      const individualBorderColors = colorKeys.map((colorName) => ({
        [`.border-b-${colorName}`]: {
          borderBottomColor: themeColors[colorName],
        },
        [`.border-t-${colorName}`]: {
          borderTopColor: themeColors[colorName],
        },
        [`.border-l-${colorName}`]: {
          borderLeftColor: themeColors[colorName],
        },
        [`.border-r-${colorName}`]: {
          borderRightColor: themeColors[colorName],
        },
      }));

      // custom plugin for individiual border colors
      addUtilities(individualBorderColors);
    },
  ],
};
