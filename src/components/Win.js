import React, { Component } from 'react'

class Win extends Component {

  // static propTypes = {
  //   value: React.PropTypes.string.isRequired,
  //   handleCheck: React.PropTypes.func.isRequired,
  //   handleFlag: React.PropTypes.func.isRequired
  // }

  render () {
    return <div>
      <h1>YOU WIN!!!</h1>
      <button>Play Again?</button>
    </div>
  }
}

export default Win
