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
    filename: '[name].[fullhash].js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      app: path.resolve(__dirname, '../../src/app/'),
      components: path.resolve(__dirname, '../../src/components/'),
      modules: path.resolve(__dirname, '../../src/modules/'),
      pages: path.resolve(__dirname, '../../src/pages/'),
      store: path.resolve(__dirname, '../../src/store/'),
      '@cosmos': '@hotmart/cosmos/dist'
    },
    unsafeCache: true
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
      'AUTH_CLIENT_ID'
    ]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

module.exports = common;
