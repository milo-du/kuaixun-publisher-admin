/*
* @Author: Milodu
* @Date:   2017-07-21 17:21:24
* @Last Modified by:   Milodu
* @Last Modified time: 2017-07-21 18:07:49
*/

import React, { Component, PropTypes } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class HeaderCustom extends Component{

	componentDidMount() {

	}

    render(){
    	return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
                <Icon
                    className="trigger custom-trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggleClick}
                />
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" onClick={this.screenFull} />
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span className="avatar"><img src="http://cheng_haohao.oschina.io/reactadmin/static/media/b1.553c69e9.jpg" alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - {this.props.user && this.props.user.nickName}</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
            </Header>
       )
    }
}

HeaderCustom.PropTypes={
    toggleClick:PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired,    
    user: PropTypes.object.isRequired
}