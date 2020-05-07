const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv')
  .config({
    path: path.resolve(__dirname, `../../env/.${process.env.NODE_ENV}`)
  });

const common = {
  entry: './src/app/app.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      app: path.resolve(__dirname, '../../src/app/'),
      common: path.resolve(__dirname, '../../src/common/'),
      components: path.resolve(__dirname, '../../src/components/'),
      languages: path.resolve(__dirname, '../../languages/'),
      modules: path.resolve(__dirname, '../../src/modules/'),
      '@cosmos': '@hotmart/cosmos/dist'
    },
    unsafeCache: true
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      },
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
    new HtmlWebpackPlugin({
      isProd: process.env.NODE_ENV === 'production',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.EnvironmentPlugin([
      'APP_URL',
      'AUTH_SCOPE',
      'AUTH_DOMAIN',
      'AUTH_CLIENT_ID',
      'AUTH_REDIRECT_URI',
      'AUTH_REDIRECT_URI',
      'AUTH_RESPONSE_TYPE'
    ]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

module.exports = common;
