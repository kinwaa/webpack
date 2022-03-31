const path = require('path'); // 先不要Quick Fix

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test: /\.css$/i,
         use: ['style-loader', 'css-loader']
      }]
   }
};
