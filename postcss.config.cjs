/* eslint-env node */
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "color-mix": { preserve: false },
      },
    }),
    require("postcss-nested"),
    require("postcss-each-variables"),
    require("postcss-each"),
  ],
};
