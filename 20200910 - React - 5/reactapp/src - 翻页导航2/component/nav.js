import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
function Nav() {
    return <nav>
      <NavLink 
        to="/index"
        activeClassName="selected"
      >首页</NavLink>
      <span> | </span>
      <NavLink 
        to="/about"
        exact
        activeClassName="selected"
      >关于我们</NavLink>
      <span> | </span>
      <NavLink 
        to="/join"
        exact
        activeClassName="selected"
      >加入我们</NavLink>
    </nav>
}
export default Nav;