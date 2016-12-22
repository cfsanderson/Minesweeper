import React, { Component } from 'react'
import GameBoard from './GameBoard'
import Lose from './Lose'
import Start from './Start'
import Win from './Win'

class App extends Component {

  constructor () {
    super()
    this.state = {
      board: []
      // state: 'start'
    }
  }

  componentDidMount () {
    window.fetch('http://minesweeper-api.herokuapp.com/games?difficulty=0', {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        id: data.id,
        board: data.board,
        state: 'start',
        mines: data.mines
      })
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.state === 'playing' && this.state.state === 'lost') {
      setTimeout((e) => { this.setState({lostMessage: true}) }, 3000)
    } else if (this.state.state === 'won') {
      setTimeout((e) => { this.setState({wonMessage: true}) }, 3000)
    }
  }

  check (x, y) {
    console.log(`Im checking ${x} and ${y}`)
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/check?row=${y}&col=${x}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        board: data.board,
        state: data.state
      })
    })
  }

  flag (x, y) {
    console.log(`Im flagging ${x} and ${y}`)
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/flag?row=${y}&col=${x}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        board: data.board
      })
    })
  }

  reset () {
    this.setState({
      state: 'new'
    })
  }

  render () {
    let view
    if (this.state.state === 'start') {
      view = <Start reset={() => this.reset()} />
    } else if (this.state.lostMessage) {
      view = <Lose reset={() => this.reset()} />
    } else if (this.state.wonMessage) {
      view = <Win reset={() => this.reset()} />
    } else {
      view = <GameBoard board={this.state.board} check={(x, y) => this.check(x, y)} flag={(x, y) => this.flag(x, y)} />
    }

    return <div className='app'>
      <h1>Explosion!</h1>
      {view}
      <footer>Potatoes made with love at the Iron Yard.</footer>
    </div>
  }
}

export default App
