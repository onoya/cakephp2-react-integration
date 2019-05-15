const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'app/webroot/');
const APP_DIR = path.resolve(__dirname, 'app/src/');

const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: `${BUILD_DIR}/js/`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

module.exports = config;
