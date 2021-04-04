const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    '728x90': './src/728x90.js',
    '300x250': './src/300x250.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '728x90',
      template: 'src/index_728x90.html',
      filename: '728x90.html',
      inject: false,
      cache: false,
    }),
    new HtmlWebpackPlugin({
      title: '300x250',
      template: 'src/index_300x250.html',
      filename: '300x250.html',
      inject: false,
      cache: false,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
