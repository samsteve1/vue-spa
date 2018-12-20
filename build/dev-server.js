//importing and creating an instance of webpack
const webpack = require('webpack')
//import and create an instance of the webpack.client.config file
const clientConfig = require('./webpack.client.config')
//configure the clientConfig with DevServer
module.exports = function setupDevServer(app){
    //set the app entry
    clientConfig.entry.app = [
        'webpack-hot-middleware/client',
        clientConfig.entry.app
    ]
    //add the hot module plugins
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
    const clientCompiler = webpack(clientConfig)
    app.use(
        require('webpack-dev-middleware')(clientCompiler, {
            stats:{
                colors:true
            }
        })
    )
    app.use(require('webpack-hot-middleware')(clientCompiler))
}
