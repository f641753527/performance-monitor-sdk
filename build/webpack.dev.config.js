const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.config')

module.exports = merge(config, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'head'
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
    port: 3000,
    open: true,
    onBeforeSetupMiddleware: function(devServer){
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const { app } = devServer
      app.post('/success', function(req, res) {
        res.json({ custom: 'response' });
      });
      app.get('/error', function(req, res) {
        res.sendStatus(500)
      });
    }
  },
})
