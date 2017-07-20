/*
 * @Author: Milodu
 * @Date:   2017-06-22 11:57:03
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-10 16:59:26
 */

var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.base.conf.js");
var config = require('../config');
var opn = require('opn')

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var app = express();
var compiler = webpack(webpackConfig);

var webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    publicPath: "/" // 大部分情况下和 `output.publicPath`相同
})

app.use(webpackDevMiddlewareInstance);

app.use(require("webpack-hot-middleware")(compiler));

var uri = 'http://localhost:' + config.dev.port
var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})


webpackDevMiddlewareInstance.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it 
    opn(uri)
    _resolve()
})

var server = app.listen(config.dev.port);


module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
