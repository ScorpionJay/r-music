/**
* store
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers/index'
import { login } from '../actions/login'
import storage  from '../storage'

import { routerMiddleware,push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const middleware = routerMiddleware(history)


export default function(initialState) {
	let createStoreWithMiddleware

	// 判断环境是否logger
	if (process.env.NODE_ENV === 'production') {
		createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
	}else{
		const logger = createLogger();
		createStoreWithMiddleware = applyMiddleware(thunk,middleware,logger)(createStore);
	}
	let store = createStoreWithMiddleware(reducers, initialState);
	// get token from storage
	store.dispatch(login(storage.get('token')));
	
	return store;
};

