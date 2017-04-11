export const SPIN_SHOW = 'SPIN_SHOW'
export const SPIN_HIDDEN = 'SPIN_HIDDEN'

export const spin = () =>{
	return {
		type: SPIN_SHOW
	}
}

export const spinHidden = () => {
	return {
		type:SPIN_HIDDEN
	}
}
