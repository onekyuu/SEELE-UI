const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: {
    example: './example/example.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WUI - React UI Lib',
      template: 'example.html',
      filename: 'index.html'
    })
  ]
})