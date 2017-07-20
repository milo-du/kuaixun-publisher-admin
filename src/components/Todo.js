/*
* @Author: Milodu
* @Date:   2017-07-05 09:27:52
* @Last Modified by:   Milodu
* @Last Modified time: 2017-07-05 09:46:12
*/

import React, { Component, PropTypes } from 'react';

export default class Todo extends Component{
    render(){
    	return (
    	  <li 
    	   onClick={this.props.onClick} 
    	   style={{
				textDecoration: this.props.completed ? 'line-through' : 'none',
				cursor: this.props.completed ? 'default' : 'pointer'
    	   }}>
    	   {this.props.text}
    	  </li>
       )
    }
}

Todo.propTypes={
	onClick:PropTypes.func.isRequired,
	text:PropTypes.string.isRequired,
	completed:PropTypes.bool.isRequired
}