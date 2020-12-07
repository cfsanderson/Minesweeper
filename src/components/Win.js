import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Win extends Component {
  static propTypes = {
    reset: React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='view'>
        <Header />
        <div className='win'>
          <h1>YOU WIN!!!</h1>
          <button onClick={() => this.props.reset()}>Play Again?</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Win
