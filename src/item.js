import React from 'react';

import minecraftItems from './minecraft-items.json'

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: "minecraft:emerald:0",
			min: 0,
			max: 0
		};
	}

	onChangeItem(event) {
		return this.setState({ item: event.target.value })
	}
	onChangeMin(event) {
		return this.setState({ min: event.target.value })
	}
	onChangeMax(event) {
		return this.setState({ max: event.target.value })
	}

	render() {
		return (
			<div className="item">
				<div>
					<p>Image</p>
				</div>
				<form>
					<div>
						<p>Item: </p>
						<select value={this.state.item} onChange={val => this.onChangeItem(val)}>
							{minecraftItems.items.map(item => {
								const id = "minecraft:" + item.text_type + ":" + item.meta
								return <option key={id} value={id}>{item.name}</option>
							})}
						</select>
					</div>
					<div>
						<p>Min: </p>
						<input 
							type="number" 
							value={this.state.min}  
							onChange={val => this.onChangeMin(val)}
							min={0}
							max={64}/>
					</div>
					<div>
						<p>Max: </p>
						<input 
							type="number" 
							value={this.state.max}  
							onChange={val => this.onChangeMax(val)}
							min={0}
							max={64}/>
					</div>
				</form>
			</div>
		)
	}
}

export default Item