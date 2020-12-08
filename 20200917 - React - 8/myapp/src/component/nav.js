import React from 'react';
import { Menu } from "antd";
import { Link, useLocation } from 'react-router-dom';
function Nav(props) {
  const location = useLocation();
  const {navs,getSelected,theme} = props;
  const selectedKey = getSelected(location);
  return <Menu
    mode={"horizontal"}
    theme={theme}
    selectedKeys={[selectedKey + ""]}
  >
    {navs.map((item,index)=>{
      return <Menu.Item key={index}>
        <Link to={item.to}>{item.title}</Link>
      </Menu.Item>
    })}
  </Menu>
}
export default Nav;