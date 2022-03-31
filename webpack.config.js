const path = require('path'); // 先不要Quick Fix
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.js',
      another: './src/another-module.js'
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Code Splitting'
      })
   ],
   devServer: {
      static: './dist'
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
   }
};
