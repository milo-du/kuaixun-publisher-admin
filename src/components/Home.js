/*
* @Author: Milodu
* @Date:   2017-07-17 20:38:57
* @Last Modified by:   Milodu
* @Last Modified time: 2017-07-21 16:37:35
*/

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;

export default class Home extends Component{
    render(){
    	return (
    	  <div>            
            <Link to="/login.html">Login</Link>
    	  </div>
       )
    }
}