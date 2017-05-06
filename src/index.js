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
  Switch
} from 'react-router-dom'

const store = configureStore()

import App from './app';
import Home from './containers/home'
import Album from './containers/album'
import Recommend from './containers/recommend'
import djradio from './containers/djradio'
import playlist from './containers/playlist'
import rank from './containers/rank'
import NoMatch from './containers/pageNotFound'
import music from './containers/music'
import friend from './containers/friend'
import account from './containers/account'
import search from './containers/search'
import album from './containers/album'
import play from './containers/play'


console.log(history)

// 渲染
render(
  <Provider store={store}>
  <App>
   <Router>
    <Switch className='root'>
      <Route  path="/discover" component={Home} />	
	  <Route  path="/music" component={music} />
	  <Route  path="/friend" component={friend} />
	  <Route  path="/account" component={account} />
	  <Route  path="/search" component={search} />
	  <Route  path="/album/:id" component={album} />
	  <Route  path="/play/:id" component={play} />
	  <Route component={NoMatch}/>
     </Switch> 
  </Router>
  </App>
  </Provider>,
  document.getElementById('root')
)