const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { GenerateSW } = require('workbox-webpack-plugin');

const config = {
  ...common,
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
        vendor_fonts: {
          test: /[\\/]node_modules[\\/](@fortawesome)[\\/]/,
          name: 'vendor_fonts',
          chunks: 'all'
        },
        vendor_graphs: {
          test: /[\\/]node_modules[\\/](moment|plotly)[\\/]/,
          name: 'vendor_graphs',
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
    new HtmlWebpackPlugin({
      isProd: true,
      template: './index.html',
      environment: 'production'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new GenerateSW({
      include: [/\.js$/, /\.css$/]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

module.exports = config;
