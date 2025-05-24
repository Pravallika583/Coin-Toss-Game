// Write your code here

import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {toss: 'heads', headscount: 0, tailscount: 0}

  changeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        toss: 'heads',
        headscount: prevState.headscount + 1,
      }))
    } else {
      this.setState(prevState => ({
        toss: 'tails',
        tailscount: prevState.tailscount + 1,
      }))
    }
  }

  renderHeadOrToss() {
    const {toss} = this.state
    if (toss === 'heads')
      return (
        <img
          className="coin-image"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      )
    return (
      <img
        className="coin-image"
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        alt="toss result"
      />
    )
  }

  render() {
    const {toss, headscount, tailscount} = this.state
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          {this.renderHeadOrToss()}
          <button className="button" onClick={this.changeToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {headscount + tailscount}</p>
            <p className="heads">Heads: {headscount}</p>
            <p>Tails: {tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
