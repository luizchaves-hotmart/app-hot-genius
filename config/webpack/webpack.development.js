const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: '0.0.0.0',
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true
  }
};

module.exports = config;
