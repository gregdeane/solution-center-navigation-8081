'use strict';

const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "solution-center-navigation.js",
  },
  devServer: {
    contentBase: __dirname + "/demo"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2"]
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader?sourceMap",
          "sass-loader?sourceMap",
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      }
    ]
  }
};
