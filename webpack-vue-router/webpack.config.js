const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: '/dist',
    hot: true,
    port: "3001"
  },
  plugins: [
  new HtmlWebpackPlugin({
    title: 'index.html',
    template: path.join(__dirname, "./src/index.html")
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new VueLoaderPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
      'style-loader',
      'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
      'style-loader',
      'css-loader',
      'sass-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
      'style-loader',
      'css-loader',
      'less-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
      'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
      'file-loader'
      ]
    },
    {
      test: /\.(csv|tsv)$/,
      use: [
      'csv-loader'
      ]
    },
    {
      test: /\.xml$/,
      use: [
      'xml-loader'
      ]
    },
    {
      test: /\.vue$/,
      use: [
      'vue-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/, 
      loader: "babel-loader"
    }
    ]
  }
};