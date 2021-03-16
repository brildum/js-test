var path = require('path');

module.exports = {
  entry: path.resolve('./index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    index: 'index.html',
    historyApiFallback: {
      index: 'index.html',
    },
    compress: true,
    port: 9000,
  },
};
