var path = require("path"),
    BowerWebpackPlugin = require('bower-webpack-plugin'),
    webpack = require("webpack");

module.exports = {
  cache: true,
  entry: {
    react_todo: __dirname + "/assets/index.jsx"
  },
  output: {
    path: path.join(__dirname, "public/bundle"),
    filename: "[name].js"
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {

      }
  },
  module: {
    loaders: [
    { test: /\.css$/,loader: "style-loader!css-loader" },
    { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
    { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
    ]
  },

  plugins: [
  ]
}