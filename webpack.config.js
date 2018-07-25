module.exports = {
  entry: {
      main: './src/app.js'
    },
  output: {
        filename: '[name].js',
        path: __dirname + '/public/dist'
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
