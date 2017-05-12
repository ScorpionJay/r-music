/**
* index.js
*/

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores'
import { BrowserRouter,Route } from 'react-router-dom'
import './sass/main.scss'
import App from './app'

// 渲染
render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Route  path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

