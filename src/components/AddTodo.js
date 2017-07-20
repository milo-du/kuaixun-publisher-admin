/*
 * @Author: Milodu
 * @Date:   2017-07-04 18:17:44
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-17 20:46:47
 */

import React, { Component, PropTypes } from 'react';
import css from "../static/less/add-todo.less";

export default class AddTodo extends Component {  

  componentWillMount() {
    css.use();
  }

  componentWillUnmount() {    
    css.unuse();    
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)} className={ css.locals.btnSure }>
          添加
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
