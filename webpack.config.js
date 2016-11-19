module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
  },
  watch: true,
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js|\.es6$/,
    //     exclude: /node_modules/,
    //     loader: 'jshint-loader',
    //   },
    // ],
    loaders: [
      {
        test: [/\.es6$/, /\.js$/, /\.jsx$/], // a regular expression that test what kind of files to run through this loader. Using regular expression to test all files with es6 extension
        exclude: /node_modules/, // which files the loader should exclude
        loader: 'babel-loader', // name of the loader
        query: { // options object passed to the loader
          presets: ['es2015', 'react'],
        },
      },
      {
        test: [/\.scss$/, /\.css$/],
        loader: 'style!css!sass',
      },
    ],
  },

  // 'resolve is a section which lets us specify what kind
  // of file types we can process without specifically giving them a file extension

  resolve: {
    extensions: ['', '.js', '.es6', '.jsx', '.css', '.scss'],
  },
};
