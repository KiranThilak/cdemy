const { addWebpackModuleRule, override } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.mdx?$/,
    use: [
      {
        loader: "@mdx-js/loader",
      },
    ],
  })
);
