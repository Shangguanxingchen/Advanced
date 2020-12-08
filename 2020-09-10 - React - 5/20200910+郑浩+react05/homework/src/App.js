import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import IndexPage from "./view/index/index";
import Page404 from "./view/404";
import "./static/index.css";
const indexType = ["all", "good", "share", "ask"];
function App() {
  return <Fragment>
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return <Redirect to="/home" />
        }}
      />
      <Route
        path={["/home", "/home/:type", "/home/:type/:page"]}
        exact
        render={(routeProps) => {
          const { pathname } = routeProps.location;
          const { params } = routeProps.match;
          const { type = "all;", page = 1 } = params;
          if (pathname === "/home" || (indexType.includes(type)
            && page + "" === parseInt(page) + ""
            && page > 0
          )) {
            return <IndexPage
              {...routeProps}
            />
          }
          return <Page404 />
        }}
      />
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