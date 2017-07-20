/*
* @Author: Milodu
* @Date:   2017-06-22 11:41:14
* @Last Modified by:   Milodu
* @Last Modified time: 2017-06-22 11:41:20
*/

var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
