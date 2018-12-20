//webpack cliend configuration
const base = require('./webpack.base.config')
//import ExtractpTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = Object.assign({}, base, {
    plugins: base.plugins || []
});

module.exports = config
