/**
*	路由
*/

import storage  from './storage';
import App from './app';

const Routes = {
	path: '/',
	component: App,
	indexRoute :{onEnter: (nextState, replace) => replace('/home')},
	childRoutes: [
		{ path: 'home',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/home').default)
			})
		   }
		},
		{ path: 'music',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/music').default)
			})
		   }
		},
		{ path: 'friend',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/friend').default)
			})
		   }
		},
		{ path: 'account',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/account').default)
			})
		   }
		},
		{ path: 'playList/:id', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/playList').default)
			})
		   }
		},
		{ path: 'play/:hash', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/play').default)
			})
		   }
		},
		{ path: 'playInfo', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/playInfo').default)
			})
		   }
		},
		{ path: 'login/:page', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/login').default)
			})
		   }
		},
		{ path: 'login', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/login').default)
			})
		   },
		    onEnter: function({ params }, replace){

				if( storage.get('token') )
					replace(`/home`)
			}

		},
		{ path: 'register', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/register').default)
			})
		   }
		},
		{ path: '*',// 找不到页面跳转到首页
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/pageNotFound').default)
			})
		   }
		}
	]
};

export default Routes;