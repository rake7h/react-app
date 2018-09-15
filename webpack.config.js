const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

const outputDirectory = "dist";

module.exports = {
  entry: [
    './app/scripts/main'
  ],
  target: 'web',

  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://104.197.40.207:30326/v3/"
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.html$/,
      use: {
        loader: "html-loader"
      }
    }, {
      test: /\.scss$/,
      use: [
        //https://github.com/webpack-contrib/sass-loader
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS
      ]
    }, {
      test: /\.(png|jpg|gif|ttf|eot|svg|ico)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/'
        }
      }
    }, {
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
          outputPath: 'assets/fonts/'
        }
      }
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebPackPlugin({
      template: "./app/html/index.html",
      filename: "index.html",
      favicon: ""
    })
  ]
};
