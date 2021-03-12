module.exports = {
  style: {
    postcss: {
      // tailwind doesn't include vendor prefixes out of the box such as -webkit -ms
      // so we are using autoprefixer plugin to add vendor prefix in our CSS
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
