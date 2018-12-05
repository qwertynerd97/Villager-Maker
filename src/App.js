import React, { Component } from 'react'

import Trade from './trade'
import Store from './store'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="villager-info">
					<p>Villager Info</p>
				</div>
				<div className="current_trade">
					<Trade 
						model={Store.getState().tradeTable.tiers[0].trades[0]}  
						path={{
							tier: 0,
							trade: 0
						}}/>
				</div>
				<div className="trade_tiers">
					<p>Trade Tiers</p>
				</div>
				<div className="final_json">
					<p>Final JSON</p>
				</div>
			</div>
		)
	}
}

export default App
