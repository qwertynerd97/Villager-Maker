import React from 'react';

import Item from './item'

class Trade extends React.Component {
	render() {
		return (
			<div className="trade">
				<button className="paddle-button">{"<"}</button>
				<div className="trade-container">
					<p>Wants</p>
					<Item/>
				</div>
				<div className="trade-container">
					<p>Gives</p>
					<Item/>
				</div>
				<button className="paddle-button">{">"}</button>
			</div>
		)
	}
}

export default Trade