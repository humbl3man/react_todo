var WebpackStripLoader = require('strip-loader'); // we require the strip loader npm module
var devConfig = require('./webpack.config.js'); // we require the original webpack configuration file

var stripLoader = { // create new object, and pass in the test and exclude keys as seen before
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log'), // remove any console.log statements from the build
};

devConfig.module.loaders.push(stripLoader); // we push the new object into our loaders array from our original config.

module.exports = devConfig;  // we export our new config object

// NOTE: run the following command to build production bundle:
// webpack --config webpack-production.config.js -p
// Here is what it means:
//    "--config" ==> custom config file letting us specify a custom config file
//    "-p" ==> minifies code for production
