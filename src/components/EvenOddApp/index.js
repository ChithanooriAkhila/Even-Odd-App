// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenodd: 'Even'}

  onIncrement = () => {
    const {count} = this.state
    const value = Math.ceil(Math.random() * 100)
    const newValue = count + value
    this.setState(prevState => ({
      count: prevState.count + value,
      evenodd: newValue % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {count, evenodd} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="title">Count {count}</h1>
          <p>Count is {evenodd}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
