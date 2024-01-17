// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onChangeNumber = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            className="button"
            type="button"
            onClick={this.onChangeNumber}
          >
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
