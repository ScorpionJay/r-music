export const MESSAGE_SHOW = 'MESSAGE_SHOW'
export const MESSAGE_HIDDEN = 'MESSAGE_HIDDEN'

export const messageShow = (message) => {
	return {
		type: MESSAGE_SHOW,
		message
	}
}

export const messageHidden = () => {
	return {
		type:MESSAGE_HIDDEN
	}
}

export function alert(msg){
	return dispatch => { 
		dispatch(messageShow(msg))
		setTimeout(()=>dispatch(messageHidden()),1000)
	}
}