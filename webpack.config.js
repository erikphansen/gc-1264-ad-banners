const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sizes = [
  // {
  //   width: 728,
  //   height: 90,
  // },
  {
    width: 300,
    height: 250,
  },
]

module.exports = {
  mode: 'development',
  // make a new js bundle for each ad size
  entry: sizes.reduce((acc, adSize) => {
    acc[
      `${adSize.width}x${adSize.height}`
    ] = `./src/${adSize.width}x${adSize.height}.js`
    return acc
  }, {}),
  // make a new html page for each ad size
  plugins: sizes.map((adSize) => {
    return new HtmlWebpackPlugin({
      title: `${adSize.width}x${adSize.height}`,
      template: `src/index_${adSize.width}x${adSize.height}.html`,
      filename: `${adSize.width}x${adSize.height}.html`,
      inject: false,
      cache: false,
    })
  }),
  output: {
    // makes a new bundle for each entry
    filename: '[name].bundle.js',
    // path of the output file
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
