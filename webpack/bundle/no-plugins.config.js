const shared = require('./shared.config');

module.exports = Object.assign({}, shared, {
  output: {
    ...shared.output,
    filename: "no-plugins.bundle.js",
  },
});
