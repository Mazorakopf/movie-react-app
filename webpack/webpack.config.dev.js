const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    open: true,
    compress: true,
    port: 9000,
  },
  plugins: [new HotModuleReplacementPlugin()],
});
