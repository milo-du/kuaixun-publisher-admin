/*
 * @Author: Milodu
 * @Date:   2017-06-21 15:34:26
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-21 17:57:42
 */

'use strict';
var path = require('path');
var config = require('../config');
var utils = require('./utils');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

/*webpack配置信息*/

module.exports = {
    devServer: {
        hot: true
    },
    entry: {
        vendor: [
            'react',
            'react-dom',
            'redux',
            'antd',
            'react-redux'
        ],
        app: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', './src/main.js']
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            loaders: 'babel-loader',
            include: [resolve('src'), resolve('test')],
            options: {
                presets: ['es2015', 'react'],
                plugins: [
                    ["import", {
                        libraryName: "antd",
                        style: "css"
                    }]
                ],
                cacheDirectory: true,
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(less|css)$/,
            loaders: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        })
    ]
};