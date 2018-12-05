const changeItem = (state, action) => {
	const { path } = action.payload

	const newState = { ...state }

	const tier = newState.tradeTable.tiers[path.tier]
	const trade = tier.trades[path.trade]
	const tradeItem = trade[path.type][path.index] 
	
	tradeItem.item = action.payload.item

	return newState
}

export default changeItem