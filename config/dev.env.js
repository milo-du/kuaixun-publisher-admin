/*
* @Author: Milodu
* @Date:   2017-06-22 11:40:39
* @Last Modified by:   Milodu
* @Last Modified time: 2017-06-22 11:40:51
*/

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
