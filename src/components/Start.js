import React, { Component } from 'react'

class Start extends Component {

  static propTypes = {
    createGame: React.PropTypes.func.isRequired
  }

  // reset () {
  //   console.log('I clicked Play Again')
  // }
    //  {console.log('click reset')
    //
    //   this.setState({
    //     board: data.board
    //   })
    // }

  render () {
    return <div>
      <h1>Ready Player One?</h1>
      <button onClick={() => this.props.createGame(0)}>
        Easy
      </button>
      <button onClick={() => this.props.createGame(1)}>
        Normal
      </button>
      <button onClick={() => this.props.createGame(2)}>
        Difficult
      </button>
    </div>
  }
}

export default Start
