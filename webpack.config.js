const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractCss = new ExtractTextPlugin({filename: 'bundle.css'});

module.exports = {

  entry: {
    bundle: ['./index.css', './module.css']
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },

  module: {

    rules: [
      {
        test: /\.css$/,
        loader: extractCss.extract({
          use: [
            {loader: 'css-loader'}
          ]
        })
      }
    ]
  },

  plugins: [
    extractCss
  ]

};