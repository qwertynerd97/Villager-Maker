import React from 'react';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: "minecraft:wheat",
			min: 0,
			max: 0
		};
	}

	onChangeItem(value) {
		return this.setState({ item: value })
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
							<option value="minecraft:emerald">Emerald</option>
							<option value="minecraft:wheat">Wheat</option>
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