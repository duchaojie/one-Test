import React from 'react';
import { Menu, Icon, } from 'antd';
import { Link, } from 'react-router-dom';

import './index.css';
import 'antd/dist/antd.css';

function Header() {
    const { pathname } = window.location;
    return (
        <>
            <Menu
                mode="horizontal"
                selectedKeys={[pathname]}
                theme="dark"
            >
                <Menu.Item key="1">
                    <Link to='/login'><Icon type="user" />登录</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/first'> <Icon type="video-camera" />first</Link>
                </Menu.Item>
            </Menu>
        </>

    );
}

export default Header;


