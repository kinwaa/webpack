const path = require('path'); // 先不要Quick Fix

module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.js',
      another: './src/another-module.js'
   },
   devServer: {
      static: './dist'
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
   }
};
