import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
function IndexNav() {
    let {type} = useParams();
    let {pathname} = useLocation();
    return <nav>
      <hr />
      <NavLink 
        to="/news"
        exact
        activeClassName="selected"
        isActive={()=>{
          return type === "news"||pathname==="/"
        }}
      >新闻</NavLink>
      <span> | </span>
      <NavLink 
        to="/ask"
        exact
        activeClassName="selected"
        isActive={()=>{
          return type === "ask"
        }}
      >问答</NavLink>
      <span> | </span>
      <NavLink 
        to="/example"
        exact
        activeClassName="selected"
        isActive={()=>{
          return type === "example"
        }}
      >作品</NavLink>
    </nav>
}
export default IndexNav;