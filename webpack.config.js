const path = require('path'); // 先不要Quick Fix
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.js',
      print: './src/print.js'
   },
   devServer: {
      static: './dist'
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Caching'
      })
   ],
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
   }
};
