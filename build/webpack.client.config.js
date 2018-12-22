//webpack cliend configuration
const base = require('./webpack.base.config')
const webpack = require('webpack')
//import ExtractpTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = Object.assign({}, base, {
    plugins: (base.plugins || []).concat([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'assets/js/[name].js'
      })
    ])
});
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}
module.exports = config
