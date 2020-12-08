import React from "react";
import { NavLink } from "react-router-dom";
/*
  NavLink 的匹配默认也是模糊匹配
  activeClassName 如果 URL 和 当前项匹配，那他选中的class值 
  activeStyle
  isActive = ()=>{ 判断当前项是否选中
      return boolean true 选中，false 不选中
  }
*/
function Nav() {
    return <nav>
      <NavLink 
        to="/"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold"
        }}
        isActive = {()=>{
            return true
        }}
      >首页</NavLink>
      <span> | </span>
      <NavLink 
        to="/about"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold"
        }}
        isActive = {()=>{
            return false
        }}
      >关于我们</NavLink>
      <span> | </span>
      <NavLink 
        to="/join"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold"
        }}
        isActive = {()=>{
            return false
        }}
      >加入我们</NavLink>
    </nav>
}
// let NewNav = withRouter(Nav);
// console.log(NewNav);
// export default NewNav;
//export default withRouter(Nav);
export default Nav;