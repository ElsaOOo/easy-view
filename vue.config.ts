const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["typescript", "javascript", "css", "html"],
      }),
    ],
  },
};
