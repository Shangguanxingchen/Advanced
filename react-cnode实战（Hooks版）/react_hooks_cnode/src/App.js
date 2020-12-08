import React from 'react';
import './static/css/App.css';
import {Switch, Route} from 'react-router-dom';
import {routes} from './router/index';
import {Layout} from 'antd';

function App() {
  return (
    <div>
      <Layout>

        <Switch>
          {routes.map((item,index) => {
            return <Route
              key={index}
              path={item.path}
              exact={item.exact}
              render={(props) => {
                return item.render(props)
              }}
            />
          })}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
