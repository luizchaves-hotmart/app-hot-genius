/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require('./webpack.common')
const host = process.env.APP_HOST.replace(':8080', '')

const config = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host,
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  }
}

module.exports = config
