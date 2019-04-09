const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = "development";
// import Icon from './icon.png';

let distPaths = {
  // dist - original path
  // doc - for github pages
  root: "dist"
  // root: "doc"
};

config = {
  entry: "./src/js/common.js",
  output: {
    path: path.join(__dirname, "../" + distPaths.root),
    filename: "./js/bundle.js",
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, distPaths.root),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader']
      // },
      {
        test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader?name=img/[name].[ext]&context=./app/images"
      }

      // { test: /\.ts$/, use: "ts-loader" },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // new ExtractTextPlugin('bundle.css')
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

module.exports = config;
