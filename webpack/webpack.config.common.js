const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./build'),
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
        test: /\.css$/i,
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
      template: './src/assets/index.html',
      favicon: './src/assets/favicon.ico'
    }),
  ],
};
