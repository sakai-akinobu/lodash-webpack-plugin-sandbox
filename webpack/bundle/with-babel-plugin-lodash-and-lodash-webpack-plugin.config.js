var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const shared = require('./shared.config');

module.exports = Object.assign({}, shared, {
  module: {
    ...shared.module,
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'lodash'
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin,
  ],
  output: {
    ...shared.output,
    filename: "with-babel-plugin-lodash-and-lodash-webpack-plugin.bundle.js",
  },
});
