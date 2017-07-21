/*
 * @Author: Milodu
 * @Date:   2017-07-04 18:17:44
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-21 16:51:54
 */

import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {  

  componentWillMount() {
    
  }

  componentWillUnmount() {    
    
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
  
}
