const path = require('path'); // 先不要Quick Fix

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
