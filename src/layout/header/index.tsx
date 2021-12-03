import React, { FC, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "./index.scss";
const { Item, SubMenu, ItemGroup } = Menu;

interface evTypes {
  key: string
}

const Header: FC = function () {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e: evTypes): void => {
    console.log('click', e);
    setCurrent(e.key);
  }

  return <>
    <div className="Header-outBox">
      <div className="Header-logo">
        <img src='' />
      </div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Item key="mail" icon={<MailOutlined />}>Navigation One</Item>
        <Item key="app" icon={<AppstoreOutlined />}>Navigation Two</Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - SubMenu">
          <ItemGroup title="Item 1">
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
          </ItemGroup>
          <ItemGroup title="Item 2">
            <Item key="setting:3">Option 3</Item>
            <Item key="setting:4">Option 4</Item>
          </ItemGroup>
        </SubMenu>
        <Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Item>
      </Menu>
    </div>
  </>
}

export default Header;