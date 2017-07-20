/*
* @Author: Milodu
* @Date:   2017-07-17 20:38:57
* @Last Modified by:   Milodu
* @Last Modified time: 2017-07-17 20:47:45
*/

import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Login extends Component{
    render(){
    	return (
    	  <div>
    	    <Button bsStyle="danger">Danger</Button>
    	  </div>
       )
    }
}

Login.propTypes={
	onClick:PropTypes.func.isRequired,
	text:PropTypes.string.isRequired,
	completed:PropTypes.bool.isRequired
}