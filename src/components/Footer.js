/*
 * @Author: Milodu
 * @Date:   2017-07-04 18:27:31
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-04 19:12:34
 */

import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
        	<a href='javascript:void(0)' onClick={e=>{ 
               e.preventDefault()
               this.props.onFilterChange(filter)
        	 }}>
        	  {name}
        	 </a>
        	)
    }

    render(){
      return (
        <p>
          Show:{' '}
          {this.renderFilter('SHOW_ALL','All')}
          {', '}
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
          {', '}
          {this.renderFilter('SHOW_ACTIVE', 'Active')}
          .
        </p>
      )
    }
}

Footer.PropTypes={
	onFilterChange:PropTypes.func.isRequired,
	filter:PropTypes.oneOf([
	  'SHOW_ALL',
	  'SHOW_COMPLETED',
	  'SHOW_ACTIVE'
	]).isRequired
}
