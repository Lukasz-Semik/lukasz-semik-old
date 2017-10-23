const path = require('path');

module.exports = {
  entry: {
    App: './App/assets/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './App/temp/scripts'),
    filename: '[name].js'
  },
  module:{
    loaders: [
      {
        loader: `babel-loader`,
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
