/*
 * @Author: Milodu
 * @Date:   2017-07-04 15:27:19
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-21 18:09:01
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../static/less/index.less';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action';
import SiderCustom from '../components/SiderCustom';
import HeaderCustom from '../components/HeaderCustom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

class Home extends Component {
  render() {    
    const { WEBSITE_CONFIG, collapsed  } = this.props;
    return (
      <div>      
        <Layout className="ant-layout-has-sider">
          <SiderCustom path={this.props.location.pathname} />
          <Layout>
            <HeaderCustom toggle={this.toggle} />
            <Content style={{ margin: '0 16px', overflow: 'initial' }}>
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
               ©{ WEBSITE_CONFIG.currentYear } Created by { WEBSITE_CONFIG.author }
             </Footer>
          </Layout>
        </Layout>                     
      </div>
    )
  }
}

Home.propTypes = {
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

function selectTodos(todos, filter) {  
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    WEBSITE_CONFIG: {
      author: '快讯科技',
      currentYear: new Date().getFullYear()
    },
    collapsed:false
  }
}

export default connect(select)(Home)