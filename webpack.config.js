const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sizes = [
  {
    width: 728,
    height: 90,
  },
  {
    width: 300,
    height: 250,
  },
]

// an array of HtmlWebpackPlugins to spread into the config plugins array
const htmlPlugins = sizes.map((adSize) => {
  return new HtmlWebpackPlugin({
    title: `${adSize.width}x${adSize.height}`,
    template: `src/index_${adSize.width}x${adSize.height}.html`,
    filename: `${adSize.width}x${adSize.height}/${adSize.width}x${adSize.height}.html`,
    inject: false,
    cache: false,
  })
})

module.exports = {
  // mode: 'development',
  // make a new js bundle for each ad size
  entry: sizes.reduce((acc, adSize) => {
    acc[
      `${adSize.width}x${adSize.height}/${adSize.width}x${adSize.height}`
    ] = `./src/${adSize.width}x${adSize.height}.js`
    return acc
  }, {}),
  plugins: [...htmlPlugins],
  output: {
    // makes a new bundle for each entry
    filename: '[name].bundle.js',
    // path of the output file
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
    // assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
