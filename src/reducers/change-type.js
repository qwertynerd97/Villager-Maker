const changeType = (state, action) => {
	return {
		...state,
		type: action.payload.type
	}
}

export default changeType