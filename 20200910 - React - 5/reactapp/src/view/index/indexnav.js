import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
function IndexNav() {
    let {type} = useParams();
    let {pathname} = useLocation();
    return <nav>
      <hr />
      <NavLink 
        to="/index/news"
        activeClassName="selected"
        isActive={()=>{
          return type === "news"||pathname==="/index"
        }}
      >新闻</NavLink>
      <span> | </span>
      <NavLink 
        to="/index/ask"
        activeClassName="selected"
      >问答</NavLink>
      <span> | </span>
      <NavLink 
        to="/index/example"
        activeClassName="selected"
      >作品</NavLink>
    </nav>
}
export default IndexNav;