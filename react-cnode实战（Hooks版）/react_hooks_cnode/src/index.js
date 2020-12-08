import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './static/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

