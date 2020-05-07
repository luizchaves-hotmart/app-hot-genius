const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const jsonminify = require('jsonminify');
const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 3000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor_firsts: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-redux|i18next)[\\/]/,
          name: 'vendor_firsts',
          chunks: 'all'
        },
        vendor_icons: {
          test: /[\\/]node_modules[\\/](@fortawesome)[\\/]/,
          name: 'vendor_icons',
          chunks: 'all'
        },
        vendor_hotmart: {
          test: /[\\/]node_modules[\\/](@hotmart)[\\/]/,
          name: 'vendor_hotmart',
          chunks: 'all'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    ...commonConfig.plugins,
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../../public/locales/**/*.json'),
        context: path.resolve(__dirname, '../../public/locales/'),
        to: path.resolve(__dirname, '../../dist/locales/'),
        transform: async function(content) {
          return jsonminify(content.toString());
        }
      }
    ]),
    new GenerateSW({
      include: [/\.js$/, /\.css$/]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

module.exports = config;
