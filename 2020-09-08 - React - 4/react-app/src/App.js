import React, {Fragment } from "react";
import Nav from "./component/nav";
import { Route } from "react-router-dom";
import IndexPage from "./view";
import AboutPage from "./view/about";
import JoinPage from "./view/join";
/*
  Route 路由组件 - 作用将 url 地址 和 视图进行关联
    path 该路由组件要去匹配的视图组件
      默认情况下 path 走的模糊匹配，及当前 url 以该 path 为开始时则匹配成功
      exact 精确匹配 url 为 path ,path/ 时匹配成功  
      strict 严格匹配，要求必须设置了精确匹配才可以设置严格匹配 url === path 匹配成功
      多规则匹配 [path,path1]
    component 当前路由组件的 path 匹配成功之后，要显示的视图组件
*/
function App() {
  return <div>
      <Nav />
      <Route path={["/","/home"]} exact component={IndexPage} />
      <Route path="/about" exact strict component={AboutPage} />
      <Route path="/join" exact component={JoinPage} />
  </div>
}


export default App;