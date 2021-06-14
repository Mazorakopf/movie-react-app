const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.config.common');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: resolve('./build'),
    hot: true,
    open: true,
    compress: true,
    port: 9000,
  },
  plugins: [new HotModuleReplacementPlugin()],
});
