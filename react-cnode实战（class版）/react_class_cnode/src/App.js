import React from 'react';
import './App.css';
import { Layout} from 'antd';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage';

const { Header, Content } = Layout;

axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
          </div>
        </Header>
        <Layout>
          <Content
            style={{
              background: "#fff"
            }}
          >
            <Switch>
              <Route path="/:tab?" exact component={HomePage}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App;
