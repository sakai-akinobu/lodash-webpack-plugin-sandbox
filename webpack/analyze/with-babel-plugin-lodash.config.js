const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const bundleConfig = require('../bundle/with-babel-plugin-lodash.config');

module.exports = Object.assign({}, bundleConfig, {
  plugins: [
    new BundleAnalyzerPlugin,
  ],
});
