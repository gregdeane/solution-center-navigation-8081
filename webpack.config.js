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
          presets: ["es2015", "stage-2"],
          sourceMaps: "inline"
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
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
      },
      {
        enforce: 'post',
        test: /\.js$/,
        loader: 'istanbul-instrumenter-loader',
        include: __dirname + "/src",
        exclude: [
          /\.(e2e|spec)\.js$/,
          /node_modules/,
          /vendor/
        ]
      }
    ]
  }
};
