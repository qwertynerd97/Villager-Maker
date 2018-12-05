import React from 'react';

import Store from './store'
import minecraftItems from './minecraft-items.json'

class Item extends React.Component {
	onChangeItem(event) {
		const payload = { 
			path: this.props.path,
			item: event.target.value
		}

		Store.dispatch({
			type: "CHANGE_ITEM",
			payload
		})
	}
	onChangeMin(event) {
		return this.setState({ min: event.target.value })
	}
	onChangeMax(event) {
		return this.setState({ max: event.target.value })
	}

	render() {
		const { item, quantity } = this.props.model
		let min = 0
		let max = 0
		if(typeof quantity === typeof 1) {
			min = quantity
			max = quantity
		}
		return (
			<div className="item">
				<form>
					<div>
						<select value={item} onChange={val => this.onChangeItem(val)}>
							{minecraftItems.items.map(item => {
								let id = "minecraft:" + item.text_type
								if(item.meta !== 0) id += ":" + item.meta

								return <option key={id} value={id}>{item.name}</option>
							})}
						</select>
					</div>
					<div>
						<label>Min: </label>
						<input 
							type="number" 
							value={min}  
							onChange={val => this.onChangeMin(val)}
							min={0}
							max={64}/>
						<label>Max: </label>
						<input 
							type="number" 
							value={max}  
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