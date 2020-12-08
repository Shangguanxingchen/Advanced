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
            path={"/"}
            exact
            render={() => {
              return <Redirect to={"/index"}></Redirect>
            }}
          ></Route>
          <Route
            path={["/index", "/index/:type/", "/index/:type/:page"]}
            exact
            render={(routeProps) => {
              const {params} = routeProps.match;
              const {type="ask", page=1} = params;
              if(indexType.includes(type) && page+"" === parseInt(page)+""
              &&page>0) {
                return <IndexPage {...routeProps} />
              }
              return <Page404></Page404>
            }}
          ></Route>
          <Route
            component={(routeProps) => {
              return <Page404
                {...routeProps}
              />
            }}
          />
        </Switch>
    </Fragment>
}
export default App;