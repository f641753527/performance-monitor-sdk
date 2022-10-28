const { merge } = require('webpack-merge')
const config = require('./webpack.base.config')

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
