import { createStore } from 'redux'

import reducer from './reducers'

const Store = createStore(reducer, {
	type: "farmer",
	typeData: {
		"minecraft:type_family": {
			family:[ "villager", "peasant", "farmer" ]          
		},
		"minecraft:variant": {
			value: 0
		},
		"minecraft:trade_table": {
			display_name: "entity.villager.farmer",
			table: "trading/farmer_trades.json"
		}
	},
	tradeTable: {
		tiers: [
			{
				trades: [
					{
						wants: [
							{
								item: "minecraft:paper",
								quantity: 1
							}
						],
						gives: [
							{
								item: "minecraft:emerald",
								quantity: 1
							}
						]
					}
				]
			}
		]
	}
})

export default Store