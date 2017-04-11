export const DIALOG_SHOW = 'DIALOG_SHOW'
export const DIALOG_HIDDEN = 'DIALOG_HIDDEN'

export const dialogShow = (message) => {
	return {
		type: DIALOG_SHOW,
		message
	}
}

export const dialogHidden = () => {
	return {
		type:DIALOG_HIDDEN
	}
}
