import React, { Fragment } from "react";
import Nav from "./component/nav";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./view";
import AboutPage from "./view/about";
import JoinPage from "./view/join";
import Page404 from "./view/404";
function App() {
    return <Fragment>
        <Nav />
        {/* 当其中一项Route 匹配成功后，则不在解析后续Route */}
        <Switch>
          <Route 
              path={"/"}
              exact
              component={IndexPage}
          />
          <Route 
              path={"/about"}
              exact
              component={AboutPage}
          />
          <Route 
              path={"/join"}
              exact
              component={JoinPage}
          />
          {/* 当 path 不定义或 path 为空时，就会直接匹配成功 */}
          <Route 
              component={Page404}
          />
        </Switch>
    </Fragment>
}
export default App;