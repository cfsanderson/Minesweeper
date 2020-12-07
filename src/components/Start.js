import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Start extends Component {
  static propTypes = {
    createGame: React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='view'>
        <Header />
        <div className='start'>
          <h1>Ready?</h1>
          <p>Choose your level of difficulty.</p>
          <button onClick={() => this.props.createGame(0)}>Easy</button>
          <button onClick={() => this.props.createGame(1)}>Normal</button>
          <button onClick={() => this.props.createGame(2)}>Difficult</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Start
