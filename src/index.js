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

import App from './app'

// 渲染
render(
  <Provider store={store}>
    <Router>
      <Route  path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

