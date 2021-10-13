const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const tsRule = {
  test: /\.ts$/i,
  use: 'ts-loader',
  exclude: /node_modules/
}

const cssRule = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
}

const imageLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  type: 'asset'
}

const rules = [tsRule, cssRule, imageLoader]

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.ts',
    module: {
      rules
    },
    resolve: {
      extensions: ['.ts', '.js', '.css']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template/index.html',
        favicon: 'template/favicon.png'
      })
    ],
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    devServer: {
      port: 5500,
      client: {
        overlay: true,
        progress: true
      },
      watchFiles: ['.ts', '.css'],
      compress: true
    }
  }
}
