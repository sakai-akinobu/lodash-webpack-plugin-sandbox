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
  output: {
    ...shared.output,
    filename: "with-babel-plugin-lodash.bundle.js",
  },
});
