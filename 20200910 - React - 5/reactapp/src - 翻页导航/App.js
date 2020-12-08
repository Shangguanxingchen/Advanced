import React, { Fragment } from "react";
import Nav from "./component/nav";
import { Route, Switch, useParams, Redirect } from "react-router-dom";
import IndexPage from "./view/index/index";
import AboutPage from "./view/about";
import JoinPage from "./view/join";
import Page404 from "./view/404";
import "./static/index.css";
const indexType = ["ask","news","example"];
function App() {
    /*
     首页视图： 
        /  --> 首页视图的 news 第一页
        /ask --> 首页视图的 ask 第一页 、 /news --> 首页视图的 news 第一页、/example --> 首页视图的 example 第一页
        /ask/page、首页视图的 ask 第 page页  /news/page --> 首页视图的 news 第page页、/example/page  首页视图的 example 第page页
     关于视图：
        /about
      加入视图:
        /join
      404:
        其他所有的
    */
    return <Fragment>
        <Nav />
        <Switch>
          <Route 
              path={"/about"}
              exact
              render={(routeProps)=>{
                return <AboutPage />
              }}
          />
          <Route 
              path={"/join"}
              exact
              component={JoinPage}
          />
          <Route 
              path={["/","/:type","/:type/:page"]}
              exact
              render={(routeProps)=>{
                  const {params} = routeProps.match;
                  const {type="news",page=1} = params;
                  if(indexType.includes(type) // 类型必须是我们定义的类型之一
                  && page+"" === parseInt(page)+"" // 页码必须是整数
                  && page>0 // 页码必须的大于 0
                  ){
                    // 这个动态路由的信息 只能在 IndexPage 及其后代组件获取
                    return <IndexPage 
                      {...routeProps}
                    />
                  }
                  return <Page404 />
                  // Redirect 重定向组件
                  //return <Redirect to="/a/a/a/a" />
              }}
          />
          <Route 
              component={(routeProps)=>{
                  return <Page404 
                    {...routeProps}
                  />
              }}
          />
        </Switch>
    </Fragment>
}
export default App;