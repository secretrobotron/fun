var path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve('./'),
    filename: 'main.js'
  },
  externals: {
    Matter: 'Matter'
  },
  devtool: "#inline-source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: /node_modules/,
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
};