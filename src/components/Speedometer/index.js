import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerateApply = count => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  brakeApply = count => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
        </div>
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="insideClass">
          <div>
            <button
              className="button1"
              type="button"
              onClick={this.accelerateApply}
            >
              Accelerate
            </button>
          </div>
          <div>
            <button className="button2" type="button" onClick={this.brakeApply}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
