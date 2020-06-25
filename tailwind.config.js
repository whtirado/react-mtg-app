const purge = [];

// Only purge css in Production
if (process.env.NODE_ENV === 'production') {
  purge.push('./src/**/*.js');
}

module.exports = {
  purge,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
