/**
* use localStorage to persistence
*/
export default {

	put: function(key, value) {
  		window.localStorage.setItem(key, value)
	},

	get: function (key) {
  		return window.localStorage.getItem(key)
	},

	remove: function (key) {
  		 return window.localStorage.removeItem(key)
	},

	clear: function () {
  		window.localStorage.clear()
	}
}