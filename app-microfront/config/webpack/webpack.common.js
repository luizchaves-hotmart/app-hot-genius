/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { ModuleFederationPlugin } = webpack.container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const shared = require('../../package.json').dependencies

require('dotenv')
  .config({
    path: path.resolve(__dirname, `../../env/.${process.env.NODE_ENV}`)
  })

const common = {
  entry: './src/main/app.ts',
  output: {
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
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfront',
      filename: 'remoteEntry.js',
      exposes: {
        './Module1': './src/main/main.tsx'
      },
      shared
    }),
    new HtmlWebpackPlugin({
      isProd: process.env.NODE_ENV === 'production',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      chunks: ['main']
    }),
    new webpack.EnvironmentPlugin([
      'APP_HOST',
      'AUTH_CLIENT_ID'
    ])
  ]
}

module.exports = common
