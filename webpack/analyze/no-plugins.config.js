const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const bundleConfig = require('../bundle/no-plugins.config');

module.exports = Object.assign({}, bundleConfig, {
  plugins: [
    new BundleAnalyzerPlugin,
  ],
});
