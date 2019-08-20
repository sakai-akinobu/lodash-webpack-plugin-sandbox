const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const bundleConfig = require('../bundle/with-babel-plugin-lodash-and-lodash-webpack-plugin.config');

module.exports = Object.assign({}, bundleConfig, {
  plugins: [
    ...bundleConfig.plugins,
    new BundleAnalyzerPlugin,
  ],
});
