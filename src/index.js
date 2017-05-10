/**
* index.js
*/

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routers from './routers'
import configureStore from './stores'
import './sass/main.scss'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const store = configureStore()
import App from './app';


import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

console.log(ConnectedRouter)

// 渲染
render(
  <Provider store={store}>
  
   <ConnectedRouter history={history}>
      <Route  path="/" component={App} />
  </ConnectedRouter>

  </Provider>,
  document.getElementById('root')
)

