/*
* @Author: Milodu
* @Date:   2017-07-05 09:46:28
* @Last Modified by:   Milodu
* @Last Modified time: 2017-07-05 17:25:15
*/
import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
	render(){
       return (
       	<ul>
          {this.props.todos.map((todo,index)=><Todo {...todo} key={index} onClick={()=>this.props.onTodoClick(index) } />)}
       	</ul>
       	)
	}
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}