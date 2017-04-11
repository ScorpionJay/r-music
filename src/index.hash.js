/** index.js */
// require('./app.css')
// import 'antd/dist/antd.css'
import './sass/main.scss';
// import $ from 'jquery'
require("babel-polyfill");

import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { Router,browserHistory,hashHistory } from 'react-router';
import Routers from './routers';
import configureStore from './stores';
const store = configureStore();

// history 根据需要选择 browserHistory hashHistory
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={Routers} />
  </Provider>,
  document.getElementById('root')
);