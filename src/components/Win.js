import React, { Component } from 'react'

class Win extends Component {

  static propTypes = {
    reset: React.PropTypes.func.isRequired
  }

  render () {
    return <div className='winScreen'>
      <h1>
        <i className='fa fa-flag fa-flip-horizontal fa-2x fa-fw' aria-hidden='true' />
        YOU WIN!!!
        <i className='fa fa-flag fa-2x fa-fw' aria-hidden='true' />
      </h1>
      <button onClick={() => this.props.reset()}>
        Play Again?
      </button>
    </div>
  }
}

export default Win
