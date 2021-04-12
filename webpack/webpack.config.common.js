const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: resolve('./src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: resolve('./build'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
          test: /\.(jpg|png)$/,
          use: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Movie App',
      hash: true,
      template: resolve('./src/assets/index.html'),
      favicon: resolve('./src/assets/favicon.ico'),
    }),
  ],
};
