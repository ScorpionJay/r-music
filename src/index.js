/**
* index.js
*/

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router,browserHistory } from 'react-router'
import routers from './routers'
import configureStore from './stores'
import './sass/main.scss'

const store = configureStore()

// 渲染
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routers} />
  </Provider>,
  document.getElementById('root')
)