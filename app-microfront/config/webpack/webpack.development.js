const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    contentBase: './public',
    host: 'local.analytics-beta.buildstaging.com',
    port: 8081,
    compress: true,
    historyApiFallback: true,
    hot: true
  }
};

module.exports = config;
