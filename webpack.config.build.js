const commonConfig = require('./webpack.config.common.js');
const config = commonConfig;

const webpack = require('webpack');

module.exports = (env, argv) => {
  config.mode = argv.mode;

  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.watch = true;
  }

  if (argv.mode === "production") {
    config.devtool = "source-map";
  }

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_OPTIONS': JSON.stringify('--openssl-legacy-provider')
    })
  ]

  return config;
};