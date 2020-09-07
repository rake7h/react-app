const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const outputDirectory = 'dist';

module.exports = {
  entry: [
    './app/scripts/main',
  ],
  target: 'web',

  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  devServer: {
    port: 4200,
    open: true,
    hot: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
      },
    }, {
      test: /\.scss$/,
      use: [
        // https://github.com/webpack-contrib/sass-loader
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS
      ],
    }, {
      test: /\.(png|jpg|gif|ttf|eot|svg|ico)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/',
        },
      },
    }, {
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
          outputPath: 'assets/fonts/',
        },
      },
    },
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebPackPlugin({
      template: './app/html/index.html',
      filename: 'index.html',
      favicon: '',
    }),
  ],
};
