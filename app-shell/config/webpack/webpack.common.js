/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const shared = require('../../package.json').dependencies

require('dotenv').config({
  path: path.resolve(__dirname, `../../env/.${process.env.NODE_ENV}`)
})

const common = {
  entry: './src/main/app.ts',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@/application': path.resolve(__dirname, '../../src/application'),
      '@/domain': path.resolve(__dirname, '../../src/domain'),
      '@/main': path.resolve(__dirname, '../../src/main'),
      '@/presentation': path.resolve(__dirname, '../../src/presentation'),
      '@cosmos': '@hotmart/cosmos/dist'
    },
    unsafeCache: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false
          }
        }
      },
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfront',
      remotes: {
        microfront: `microfront@//${process.env.APP_MICROFRONT}/remoteEntry.js`
      },
      shared
    }),
    new HtmlWebpackPlugin({
      isProd: process.env.NODE_ENV === 'production',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.EnvironmentPlugin([
      'APP_HOST',
      'AUTH_CLIENT_ID',
      'APP_MICROFRONT'
    ])
  ]
}

module.exports = common
