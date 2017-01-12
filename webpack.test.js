'use strict';

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './root.module.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'solution-center-navigation.js',
  },
  devServer: {
    contentBase: __dirname + '/demo'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-2'],
          sourceMaps: 'inline'
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      },
      {
        enforce: 'post',
        test: /\.js$/,
        loader: 'istanbul-instrumenter-loader',
        include: __dirname + '/src',
        exclude: [
          /\.(e2e|spec)\.js$/,
          /node_modules/,
          /vendor/
        ]
      }
    ]
  }
};
