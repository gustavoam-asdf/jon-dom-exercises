const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizePlugin = require("css-minimizer-webpack-plugin")
const Autoprefixer = require("autoprefixer")
const TerserPlugin = require("terser-webpack-plugin")

const htmlPlugin = new HtmlWebpackPlugin({
  template: "template/index.html",
  favicon: "template/favicon.png",
  filename: "index.html"
})

const cssPlugin = new MiniCssExtractPlugin({
  filename: "[name].[contenthash].css"
})

const plugins = [htmlPlugin, cssPlugin, Autoprefixer]

const tsRule = {
  test: /\.ts$/i,
  use: "ts-loader",
  exclude: /node_modules/
}

const cssRule = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
}

const mediaLoader = {
  test: /\.(jpe?g|png|gif|svg|mp3)$/i,
  type: "asset/resource"
}

const fontLoader = {
  test: /\.(woff2?|eot|ttf|otf)$/i,
  type: "asset/resource"
}

const rules = [tsRule, cssRule, mediaLoader, fontLoader]

const optimization = {
  minimize: true,
  minimizer: [
    new CssMinimizePlugin({
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true }
          }
        ]
      }
    }),
    new TerserPlugin({
      terserOptions: {
        format: {
          comments: false
        }
      },
      extractComments: false
    })
  ]
}

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === "production"
  return {
    entry: "./src/index.ts",
    module: {
      rules
    },
    resolve: {
      extensions: [".ts", ".js", ".css"],
      alias: {
        "@assets": path.resolve(__dirname, "./assets/")
      }
    },
    plugins,
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build")
    },
    optimization,
    performance: {
      hints: false
    },
    devServer: {
      port: 5500,
      client: {
        overlay: true,
        progress: true
      },
      watchFiles: [".ts", ".css"],
      compress: true
    }
  }
}
