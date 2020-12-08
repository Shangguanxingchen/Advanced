import React, { Fragment } from "react";
import Nav from "./component/nav";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./view";
import AboutPage from "./view/about";
import JoinPage from "./view/join";
import Page404 from "./view/404";
/*
  component 和 render
*/
function App() {
    let userName = "前端小菜鸟";
    return <Fragment>
        <Nav />
        <Switch>
          <Route 
              path={"/"}
              exact
              render={(routeProps)=>{
                  return <IndexPage 
                    userName={userName}
                    {...routeProps}
                  />
              }}
          />
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
              component={Page404}
          />
        </Switch>
    </Fragment>
}
export default App;