import React, { Component } from 'react'

class Lose extends Component {

  static propTypes = {
    reset: React.PropTypes.func.isRequired
  }

  render () {
    return <div>
      <h1>
        <i className='fa fa-bomb fa-spin fa-2x fa-fw' aria-hidden='true' />
        BOOOOOM!!!
        <i className='fa fa-bomb fa-spin fa-2x fa-fw' aria-hidden='true' />
      </h1>
      <button onClick={() => this.props.reset()}>
        Play Again?
      </button>
    </div>
  }
}
// http://fontawesome.io/examples/

export default Lose
