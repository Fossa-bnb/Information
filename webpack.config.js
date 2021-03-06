const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
  entry: [`${APP_DIR}/indexPart1.jsx`, `${APP_DIR}/indexPart2.jsx`],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css?/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
  },
  plugins: [
    new Dotenv(),
  ],
};

module.exports = config;
