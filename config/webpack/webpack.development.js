const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: 'dev.buildstaging.com',
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true
  }
};

module.exports = config;
