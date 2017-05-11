/**
* router action
*/

export const DISCOVER_TAB = 'DISCOVER_TAB'

const discoverTab = (obj) => {return {type:DISCOVER_TAB, obj}}

export const discoverTabAction = (obj) =>{
	return  dispatch => {
		dispatch(discoverTab(obj))
	}
}

