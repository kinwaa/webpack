const path = require('path'); // 先不要Quick Fix
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.js',
      print: './src/print.js'
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Output Management'
      })
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
   }
};
