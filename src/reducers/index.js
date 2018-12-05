import changeType from './change-type'
import changeItem from './change-item'

const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_TYPE":
			return changeType(state, action)
		case "CHANGE_ITEM":
			return changeItem(state, action)

	}
	return state
}

export default reducer