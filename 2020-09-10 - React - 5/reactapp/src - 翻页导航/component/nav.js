import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
const indexType = ["ask","news","example"];
//  /abs   "","abs"
function Nav() {
    const {pathname} = useLocation();
    return <nav>
      <NavLink 
        to="/"
        exact
        activeClassName="selected"
        isActive={()=>{
          let [path,type,page] = pathname.split("/");
          if(pathname === "/"
          || (indexType.includes(type)&&page>0&&page+"" === parseInt(page)+"")
          || (indexType.includes(type)&&page===undefined)){
              return true;
          }
        }}
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