import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
function IndexNav() {
  let { type } = useParams();
  let { pathname } = useLocation();
  return <nav className="nav">
    <NavLink
      to="/home/all"
      activeClassName="active"
      isActive={() => {
        return type === "all" || pathname === "/home"
      }}
    >全部</NavLink>
    <NavLink
      to="/home/good"
      activeClassName="active"
    >精华</NavLink>
    <NavLink
      to="/home/share"
      activeClassName="active"
    >分享</NavLink>
    <NavLink
      to="/home/ask"
      activeClassName="active"
    >问答</NavLink>
  </nav>
}
export default IndexNav;