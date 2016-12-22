import React, { Component } from 'react'

class Start extends Component {

  // static propTypes = {
  //   value: React.PropTypes.string.isRequired,
  //   handleCheck: React.PropTypes.func.isRequired,
  //   handleFlag: React.PropTypes.func.isRequired
  // }

  render () {
    return <div>
      <h1>Ready Player One?</h1>
      <button onClick={() => {}}>
        <i className='fa fa-bomb' aria-hidden='true' />
        Play Again?
        <i className='fa fa-flag' aria-hidden='true' />
      </button>
    </div>
  }
}

export default Start
