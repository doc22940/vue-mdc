var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './doc/src/main.coffee',
  output: {
    path: './',
    filename: 'doc-bundle.js',
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../doc/src'),
        path.resolve(__dirname, '../src')
      ],
      loader: 'coffee-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
