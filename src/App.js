import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  state = {
    inches: 0,
    feet: 0,
  }
  converter = (e) => {
    const inches = e.target.value
    const feet = inches / 12
    this.setState({ feet: feet, inches: inches })
  }

  render() {
    return (
      <main>
        <h1>
          There are {this.state.inches} inches in {this.state.feet} feet
        </h1>
        <input
          id="input"
          type="number"
          name="input"
          onChange={this.converter}
        ></input>
        {/* <button type="button">Convert</button> */}
      </main>
    )
  }
}
export default App
