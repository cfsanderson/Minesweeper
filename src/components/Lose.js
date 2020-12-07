import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Lose extends Component {
  static propTypes = {
    reset: React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='view__lose'>
        <Header />
        <div className='lose'>
          <i className='fa fa-bomb fa-fw' aria-hidden='true' />
          <h1>BOOOOOM!!!</h1>
          <button onClick={() => this.props.reset()}>Play Again?</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Lose
