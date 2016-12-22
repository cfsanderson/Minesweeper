import React, { Component } from 'react'

class Start extends Component {

  static propTypes = {
    reset: React.PropTypes.func.isRequired
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
      <button onClick={() => this.props.reset()}>
        <i className='fa fa-bomb' aria-hidden='true' />
        Play Again?
        <i className='fa fa-flag' aria-hidden='true' />
      </button>
    </div>
  }
}

export default Start
