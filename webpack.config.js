const path = require('path'); // 先不要Quick Fix
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      index: {
         import: './src/index.js',
         dependOn: 'shared'
      },
      another: {
         import: './src/another-module.js',
         dependOn: 'shared'
      },
      shared: 'lodash'
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
   },
   optimization: {
      runtimeChunk: 'single'
   }
};
