"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /.(jpg|png|gif|jpeg)$/,
      //   use: "file-loader",
      // },
      {
        test: /.(jpg|png|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,
              name: "imgs/[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Learning Webpack",
      filename: "webpack-index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  mode: "development",
};
