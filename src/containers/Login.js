/*
 * @Author: Milodu
 * @Date:   2017-07-04 15:27:19
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-21 16:39:22
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action'
import Sider from '../components/Sider'

class Login extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>      
        <Sider />
      </div>
    )
  }
}

Login.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function aaa(){
	
}

export default connect(aaa)