import React from 'react';

import Item from './item'

class Trade extends React.Component {
	render() {
		return (
			<div className="trade">
				<p>Tier {this.props.path.tier}</p>
				<p>Trade {this.props.path.trade}</p>
				<button className="paddle-button">{"<"}</button>
				<div className="trade-container">
					<h2>Wants</h2>
					<Item 
						model={this.props.model.wants[0]} 
						path={{
							tier: this.props.path.tier,
							trade: this.props.path.trade,
							type: "wants",
							index: 0
						}}/>
				</div>
				<div className="trade-container">
					<h2>Gives</h2>
					<Item model={this.props.model.gives[0]}/>
				</div>
				<button className="paddle-button">{">"}</button>
			</div>
		)
	}
}

export default Trade