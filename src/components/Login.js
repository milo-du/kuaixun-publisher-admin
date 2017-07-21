/*
* @Author: Milodu
* @Date:   2017-07-17 20:38:57
* @Last Modified by:   Milodu
* @Last Modified time: 2017-07-21 15:32:38
*/

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';

export default class Login extends Component{
    render(){
    	return (
    	  <div>
           <DatePicker />
    	  </div>
       )
    }
}

Login.propTypes={
	onClick:PropTypes.func.isRequired,
	text:PropTypes.string.isRequired,
	completed:PropTypes.bool.isRequired
}