const path = require('path');
module.exports = {
  context: __dirname,
  entry: {
    main: './src/index'
  },
  output: {
    path: path.resolve('./dist/js/'),
    filename: '[name].js'
  },
  module: {
    rules: [ { test: /\.jsx|js?$/, exclude: /node_modules/, loader: 'babel-loader' } ]
  }
};