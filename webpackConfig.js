const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function webpackConfig(adSize) {
  return {
    mode: 'development',
    entry: `./src/${adSize.width}x${adSize.height}/ad.js`,
    plugins: [
      new HtmlWebpackPlugin({
        title: `${adSize.width}x${adSize.height}`,
        template: `src/template_${adSize.width}x${adSize.height}.html`,
        filename: `${adSize.width}x${adSize.height}.html`,
        inject: false,
        cache: false,
      }),
    ],
    output: {
      // makes a new bundle for each entry
      filename: '[name].bundle.js',
      // path of the output file
      path: path.resolve(__dirname, `dist/${adSize.width}x${adSize.height}`),
      clean: true,
      publicPath: '',
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
}

module.exports = webpackConfig
