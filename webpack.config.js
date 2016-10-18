module.exports = {
  entry: ['babel-polyfill', './main.js'],
  output: {
    path: __dirname,
    filename: 'main.dist.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
