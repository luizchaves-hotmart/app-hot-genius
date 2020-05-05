const path = require('path');

const common = {
  entry: './src/app/index.tsx',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
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
  }
};

module.exports = common;
