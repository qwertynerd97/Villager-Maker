import React, { Component } from 'react'

import Trade from './trade'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="villager-info">
          <p>Villager Info</p>
        </div>
        <div className="current_trade">
          <Trade/>
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
